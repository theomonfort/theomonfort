---
title: Agentic Workflows
layout: default
parent: Copilot
nav_order: 2
---

# GitHub Agentic Workflows

## What Are Agentic Workflows?

Agentic workflows let you run a **Copilot agent inside GitHub Actions**. Instead of writing step-by-step shell commands in YAML, you write natural-language instructions in a Markdown file, and a Copilot agent executes them autonomously in a sandboxed cloud environment.

They are currently in **technical preview** (as of Feb 2026) and available to GitHub employees and users with Copilot Enterprise.

## Why Agentic Workflows Exist

**Agents are not supported directly in GitHub Actions** — they use a different pricing model and produce unpredictable results that don't fit the deterministic YAML step model. Agentic workflows bridge this gap by providing a dedicated runtime for agent-based automation within the Actions infrastructure.

**When you want to automate a skill, you need an agentic workflow.** A skill is designed to be invoked by an agent (CLI or VS Code). There is no way to call a skill from a regular GitHub Actions workflow. The agentic workflow gives you a cloud agent that can follow the same instructions a human would when invoking a skill locally.

## How It Works

1. You write a **Markdown file** (`.md`) in `.github/workflows/` with YAML frontmatter for triggers, permissions, and configuration
2. You run `gh aw compile` to generate a `.lock.yml` file — this is the actual Actions workflow that gets executed
3. When triggered, the compiled workflow spins up a Copilot agent that reads your Markdown instructions and executes them

### Tooling

```bash
# Install the extension
gh extension install github/gh-agentic-workflows

# Initialize the repo (creates copilot-setup-steps.yml)
gh aw init

# Compile Markdown → lock.yml
gh aw compile

# Bootstrap the required PAT secret
gh aw secrets bootstrap

# Trigger manually
gh workflow run daily-changelog.lock.yml
```

## Key Lessons Learned

### 1. Firewall — The Biggest Gotcha (And It's Hardcoded)

The agentic workflow sandbox **blocks all external domains by default**. The compiled `.lock.yml` contains a **hardcoded allowlist** of ~40 infrastructure domains passed to the `awf` firewall binary via `--allow-domains`. These are baked in at compile time and include:

- GitHub APIs (`api.github.com`, `api.githubcopilot.com`, `api.*.githubcopilot.com`)
- Certificate authorities (OCSP/CRL endpoints like `ocsp.digicert.com`, `crl.globalsign.com`)
- OS package repos (`archive.ubuntu.com`, `security.ubuntu.com`)
- npm registry (`registry.npmjs.org`)
- A few others (`json-schema.org`, `packagecloud.io`, `raw.githubusercontent.com`)

**What's NOT in the hardcoded list**: `pypi.org`, any Python package hosting, and any custom data sources like `github.blog`.

#### The `allowed-domains` Frontmatter Doesn't Work as Expected

You can declare custom allowed domains in the frontmatter:

```yaml
---
allowed-domains:
  - pypi.org
  - files.pythonhosted.org
  - github.blog
---
```

However, after inspecting the compiled `.lock.yml` (v0.47.2), these domains are **not merged** into the `awf --allow-domains` flag. Instead, they are only stored as the `GH_AW_ALLOWED_DOMAINS` environment variable in a **post-processing step** ("Ingest agent output") — which runs AFTER the agent has already finished. The metadata also shows `allowed_domains: ["defaults"]` with no trace of the custom domains.

**Bottom line: as of gh-aw v0.47.2, custom `allowed-domains` do not actually open the firewall for the agent.** This may be a bug or an unfinished feature in the technical preview.

#### Consequences for Script-Based Skills

If your skill runs a script that needs external access (e.g., `pip install`, RSS feed scraping, image downloads), **it will fail silently** inside the agentic workflow sandbox. The firewall blocks the requests and you'll only see network errors in the logs.

This means skills that depend on external APIs, package installation, or web scraping **cannot be fully automated via agentic workflows yet** — unless the agent can accomplish the task using only the pre-installed tools and the hardcoded allowlisted domains.

**Tip:** Always inspect the compiled `.lock.yml` to verify what domains are actually allowed. Search for `--allow-domains` to see the real firewall rules, not what the frontmatter says.

### 2. No Write Permissions to the Repository

Agentic workflows **cannot push directly** to the repository. The `contents: write` permission is not available. Instead, you must use **safe outputs**:

- `create-pull-request` — the agent opens a PR with its changes
- `create-issue` — the agent creates an issue
- `add-comment` — the agent comments on a PR/issue

```yaml
---
safe-outputs:
  create-pull-request:
---
```

This means your workflow always produces a PR for review rather than committing directly to `main`.

### 3. Secrets Management

The agent needs a `COPILOT_GITHUB_TOKEN` secret — a fine-grained PAT with **Copilot Requests: Read-only** permission. Use `gh aw secrets bootstrap` to set it up interactively.

### 4. Schedule Syntax Is Fuzzy

Unlike cron in regular Actions, agentic workflows use natural language:

```yaml
on:
  schedule: daily on weekdays
  workflow_dispatch:
```

### 5. The Compile Step Is Mandatory

Every time you edit the `.md` workflow file, you must re-run `gh aw compile` and commit both the `.md` and the `.lock.yml`. The `.lock.yml` is what Actions actually executes — the Markdown is just the source.

## Workaround: Splitting Pipelines Around the Firewall

When your automation needs both external access (HTTP, pip) **and** agent intelligence (translation, summarization), you have two options:

### Option A: Use GitHub Models API (Recommended)

Instead of running an agentic workflow for AI tasks, call the **GitHub Models API** directly from a standard workflow. This avoids the firewall entirely:

```yaml
permissions:
  models: read   # Required for GitHub Models API

steps:
  - name: AI translation
    run: python3 my_script.py
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

The script calls `https://models.github.ai/inference/chat/completions` with the `GITHUB_TOKEN` for auth. No firewall, no safe outputs, no PR dance.

**Rate limits (Copilot Business):** ~100 requests/day for high-tier models (GPT-4o). Batch your inputs to stay within limits.

### Option B: Split Into Chained Workflows

If you truly need the agent's full Copilot CLI capabilities (file editing, tool use, multi-step reasoning), split the work:

```
[Pre-fetch]  ──trigger──▶  [Agent]  ──PR merge──▶  [Post-build]
 standard                   agentic                  standard
 no firewall                firewall                 no firewall
 pip + HTTP ✓               LLM only                 pip + PPTX ✓
```

**Rule of thumb:**
- Tasks that need **external network access** (pip install, RSS feeds, API calls) → standard workflow
- Tasks that need **full agent capabilities** (multi-step reasoning, tool use) → agentic workflow
- Tasks that need **external packages for file generation** (PPTX, PDF) → standard workflow

**Caveat:** The agent must call the `create_pull_request` safe output tool (MCP) — AND the repo must have "Allow GitHub Actions to create and approve pull requests" enabled in Settings → Actions → General.

### Package Manager Access Inside the Firewall

| Package manager | Domain | Allowed? |
|---|---|---|
| npm | `registry.npmjs.org` | ✅ Yes (in default allowlist) |
| pip | `pypi.org`, `files.pythonhosted.org` | ❌ No |
| apt | `archive.ubuntu.com` | ✅ Yes |

If you must install packages inside the agent, **use npm or apt** — not pip.

## Example: Daily Changelog Automation

We automated the `changelog-ppt-creator` skill using a **single standard workflow** with the GitHub Models API for AI translation:

**Workflow:** `changelog-generate.yml` — triggered by issue label (`changelog`), cron (weekdays), or manual dispatch

**Script:** `scripts/changelog-ai-pipeline.py` — all-in-one pipeline:
1. Fetches RSS from `github.blog/changelog/feed/` (paginated)
2. Scrapes images from changelog pages
3. Translates titles and bullets to Japanese via GitHub Models API (GPT-4o)
4. Generates English + Japanese markdown summaries
5. Builds English + Japanese PowerPoint decks

**Previous approach (deprecated):** We first tried a 3-workflow pipeline using an agentic workflow for translation. This was overly complex — the firewall blocked pip/HTTP, and the safe output `create_pull_request` failed because the repo didn't allow Actions to create PRs. The single-workflow approach with GitHub Models API is simpler and more reliable.

See `.github/workflows/README.md` for the full architecture documentation.

## Comparison: Regular Actions vs Agentic Workflows

| Aspect | Regular Actions | Agentic Workflows |
|---|---|---|
| Definition format | YAML (`.yml`) | Markdown (`.md`) → compiled to `.lock.yml` |
| Execution model | Deterministic shell steps | Agent interprets natural-language instructions |
| External access | Open by default | Blocked by default (firewall allowlist) |
| Write to repo | `contents: write` | Not allowed — must use safe outputs (PRs) |
| Best for | Builds, tests, deploys | Tasks requiring intelligence (translation, summarization, code review) |
| Pricing | Actions minutes | Copilot agent minutes (separate billing) |
