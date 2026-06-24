---
title: Agentic Workflow
titleEn: Agentic Workflow
summary: A new kind of automation that runs AI agents on top of GitHub Actions. Write what you want done in natural language Markdown and get workflows that can reason and act.
icon: /theomonfort/icons/agentic-workflow.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
order: 16
category: operate
related: ['cloud-agent', 'mcp', 'agent-skills', 'instructions']
links:
  - label: gh-aw CLI (GitHub)
    url: https://github.com/github/gh-aw
  - label: Official documentation (gh-aw)
    url: https://github.github.io/gh-aw/introduction/overview/
  - label: Peli's Agent Factory (Blog)
    url: https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/
  - label: githubnext/agentics (sample collection)
    url: https://github.com/githubnext/agentics
  - group: 📰 Recent Changelog
    label: "GitHub Agentic Workflows is now in public preview (2026-06-11)"
    url: https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/
  - group: 📰 Recent Changelog
    label: "Agentic workflows no longer need a personal access token (2026-06-11)"
    url: https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/
  - group: 📰 Recent Changelog
    label: "View Agentic Workflow configs in the Actions run summary (2026-03-26)"
    url: https://github.blog/changelog/2026-03-26-view-agentic-workflow-configs-in-the-actions-run-summary
---

## In a nutshell

<div class="hero-quote hero-quote-team">
  <p>
    <strong>Agentic Workflow</strong> is a mechanism where <strong>AI agents automate work on top of GitHub Actions</strong>.
  </p>
  <p>
    Triggered by cron, issue, or PR events, agents <strong>read context, make decisions, and take action</strong>.
  </p>
</div>

## How it works

### Overview
- **AI agents** automate work on top of GitHub Actions
- Now in <a href="https://github.blog/changelog/2026-06-11-github-agentic-workflows-is-now-in-public-preview/" target="_blank" rel="noopener noreferrer" class="retro-link">public preview</a> (announced June 11, 2026)
- No longer needs a <a href="https://github.blog/changelog/2026-06-11-agentic-workflows-no-longer-need-a-personal-access-token/" target="_blank" rel="noopener noreferrer" class="retro-link">PAT</a> — runs with the built-in `GITHUB_TOKEN`

### Components

- ⚡ **Trigger** — same as Actions: `schedule (cron)` / `issue` / `PR` / `comment` / `@mention`, etc.
- 📄 **Description** — write "what you want done" in **natural-language Markdown** in `.github/workflows/NAME.md`
- 🤖 **Agent** — Copilot / Claude / Codex and others launched on a runner
- 🔌 **MCP / tools** — agents call GitHub API and external services to do real work
- 🛡️ **safe-outputs** — read-only by default. Writes go only through **verified boundaries** like PRs, comments, and labels

## What can it do?

| Use case | What it does |
| --- | --- |
| 🏷️ **Issue Triage** | Reads new issues and automates **labeling, priority assessment, and assignee suggestions**. Requests clarification if ambiguous |
| 📚 **Wiki Generator** | Periodically scans the codebase and **auto-generates / updates Wiki / README** |
| 🔍 **CI Failure Analyst** | Analyzes failed CI runs, **identifies root causes, and comments on the PR** |
| 📝 **Docs Maintainer** | Detects stale links, examples, and API descriptions, then **opens a fix PR aligned with the latest implementation** |

> 🧪 The sample collection <a href="https://github.com/githubnext/agentics" target="_blank" rel="noopener noreferrer" class="retro-link">githubnext/agentics</a> has ready-to-run templates. Copy-paste to get started.<br />📝 Reading the developer blog <a href="https://github.github.com/gh-aw/blog/2026-01-12-welcome-to-pelis-agent-factory/" target="_blank" rel="noopener noreferrer" class="retro-link">Peli's Agent Factory</a> first gives you a good feel for how it all works.

## Getting started (4 steps)

1. **Step 1 — Install the CLI extension** — `gh extension install github/gh-aw`
2. **Step 2 — Write Markdown** — Add trigger and instructions to `.github/workflows/NAME.md`
3. **Step 3 — Compile** — Run `gh aw compile` to generate `NAME.lock.yml`
4. **Step 4 — Commit & push** — Push including the lock file; Actions will trigger automatically from then on

```yaml
---
on:
  issues:
    types: [opened]
permissions: read-all
safe-outputs:
  add-comment:
---

# Issue Clarifier
Read newly opened issues. If the requirements are ambiguous,
post a comment requesting clarification on these 3 points:
- What is happening / reproduction steps / expected behavior
Do nothing if the issue is already clear.
```

> ⚠️ **Commit the lock file to Git**. It is the actual running Actions workflow and the target of audit and review.
