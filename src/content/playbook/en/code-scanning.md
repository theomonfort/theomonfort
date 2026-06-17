---
title: Code Scanning
titleEn: Code Scanning
summary: CodeQL statically analyzes source code for vulnerabilities, and Copilot Autofix generates fix PRs automatically. Default setup requires no config file — just one click. Free for public repos; private repos need GHAS / Code Security.
icon: /theomonfort/icons/code-scanning.png
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
order: 19.4
category: secure
related: ['github-advanced-security', 'dependabot', 'secret-scanning']
links:
  - group: 📖 Official Documentation
    label: About code scanning
    url: https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning
  - group: 📖 Official Documentation
    label: About CodeQL
    url: https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql
  - group: 📖 Official Documentation
    label: Configuring default setup
    url: https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
  - group: 📖 Official Documentation
    label: About Copilot Autofix
    url: https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning
  - group: 📖 Official Documentation
    label: SARIF support for code scanning
    url: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning
  - group: 🆓 Free inventory (Risk Assessment)
    label: Code security risk assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🆓 Free inventory (Risk Assessment)
    label: Code Security Risk Assessment GA (2026/04)
    url: https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/
  - group: 📰 Recent Changelog
    label: "Expanded OIDC support for Dependabot and code scanning (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-expanded-oidc-support-for-dependabot-and-code-scanning
  - group: 📰 Recent Changelog
    label: "CodeQL now supports sanitizers and validators in models-as-data (2026-04-21)"
    url: https://github.blog/changelog/2026-04-21-codeql-now-supports-sanitizers-and-validators-in-models-as-data
  - group: 📰 Recent Changelog
    label: "Link code scanning alerts to GitHub Issues (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-link-code-scanning-alerts-to-github-issues
  - group: 📰 Recent Changelog
    label: "Batch apply security alert suggestions on PRs (2026-04-07)"
    url: https://github.blog/changelog/2026-04-07-code-scanning-batch-apply-security-alert-suggestions-on-pull-requests
  - group: 📰 Recent Changelog
    label: "Faster incremental CodeQL analysis on pull requests (2026-03-24)"
    url: https://github.blog/changelog/2026-03-24-faster-incremental-analysis-with-codeql-in-pull-requests
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Code Scanning</strong> is a GitHub feature that performs <strong>static analysis</strong> (SAST) on your repository's source code to find vulnerabilities.
  </p>
  <p>
    The analysis engine is GitHub's own <strong>CodeQL</strong> (semantic analysis), and for each finding, <strong>Copilot Autofix</strong> generates an AI-powered fix suggestion with code ready to commit. Default setup starts with a single click — no config file needed.
  </p>
</div>

## Default setup vs Advanced setup

There are two ways to enable CodeQL. **Default setup is enough to start.**

| Aspect | 🟢 Default setup | 🛠️ Advanced setup |
| --- | --- | --- |
| Configuration | One click in the UI, no config file | Write `.github/workflows/codeql.yml` |
| Language detection | GitHub detects automatically | Explicitly specified in YAML |
| Queries | `default` set (GitHub recommended) | `default` / `security-extended` / `security-and-quality` / custom |
| Triggers | push / PR / weekly schedule (automatic) | You configure them |
| Build | No build step needed for most languages (autobuild) | You can specify your own build command |
| Scope | Can be rolled out to all repos with a click | For cases requiring fine-grained tuning |

> 🔑 Unless you have a monorepo, special build requirements, or need custom queries, **Default setup is best practice**. You can switch to Advanced later.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Configuring default setup ↗</a>

## Vulnerabilities CodeQL detects

CodeQL **converts code into "queryable data"** before analyzing it, so it understands semantics rather than just matching patterns like grep-based SAST.

- 🐛 **Injection** — SQL injection / Command injection / Path traversal / XSS / SSRF
- 🔓 **Auth & authorization** — Broken access control, weak cryptographic algorithms (MD5/SHA1), insecure randomness
- 💣 **Memory safety (C/C++)** — Buffer overflow / use after free / null dereference
- 🧩 **Data flow tracking** — Tracks whether user input (taint source) reaches a dangerous function (sink)
- 🌐 **Supported languages** — C/C++, C#, Go, Java/Kotlin, JavaScript/TypeScript, Python, Ruby, Swift

> 🔬 CodeQL queries are open-sourced at [github/codeql](https://github.com/github/codeql). You can write and extend with your own custom queries.

## Copilot Autofix — AI fixes it for you ★

The killer feature of Code Scanning. When CodeQL raises an alert, **AI generates a fix** that you can commit directly to the PR.

- 🤖 **How it works** — The alert is passed to an LLM (GPT-4 family), which generates a diff based on the relevant code + surrounding context + CodeQL's description
- 💬 **Where it shows** — On the alert page **and** inline in the PR; commit options: **Commit to existing branch** or **Commit to new branch**
- ⚡ **Reduces MTTR** — GitHub internal data shows fix time is 3–4× faster
- 🌐 **Coverage** — JavaScript/TypeScript, Python, Java/Kotlin, C#, and other CodeQL-supported languages
- 🆓 **Free for OSS** — Copilot Autofix on public repos has been completely free since 2024 (no Copilot subscription required)

> 💡 Not just "find vulnerabilities" — **"let AI fix them too"** is the new standard. Review burden drops dramatically.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning" target="_blank" rel="noopener noreferrer">About Copilot Autofix ↗</a>

## Assign to Copilot — delegate the fix to the agent (Public Preview)

**What it does** — Assign a Code Scanning alert directly to **Copilot Coding Agent**. Copilot analyzes the vulnerability, plans the fix, and opens a **draft Pull Request** for you to review.

- 🎯 **Two ways to assign** — **bulk** (select multiple alerts in a Security Campaign → "Assign Copilot" → 1 consolidated PR) or **single** (assignee picker on the alert page)
- 🤖 **What Copilot does** — analyzes the vulnerability → drafts a fix plan → opens a draft PR; iterate via `@copilot` comments on the PR
- 📦 **Output** — multi-file, repository-wide changes (vs Autofix's inline single-file patch)
- 🛂 **Requirements** — GitHub Code Security or GHAS **+** Copilot Coding Agent (GHEC); the alert must already have an Autofix suggestion (Autofix-supported queries only)
- 📅 **Status** — Public Preview (2025-10-28)

📘 Details: <a class="retro-link" href="https://github.blog/changelog/2025-10-28-assign-code-scanning-alerts-to-copilot-for-automated-fixes-in-public-preview/" target="_blank" rel="noopener noreferrer">Assign code scanning alerts to Copilot (changelog) ↗</a>

## Autofix vs Assign to Copilot

| Aspect | 🔧 **Autofix (suggestion)** | 🤖 **Assign to Copilot** |
| --- | --- | --- |
| **Output** | Inline patch — commit to **existing branch** or **new branch** | Draft Pull Request opened by Copilot bot |
| **Fix scope** | Single file, minimal local fix | Multi-file; repository-wide context |
| **Granularity** | Per-alert only (Generate fix one by one) | Per-alert **or** bulk (Security Campaign → 1 PR for many alerts) |
| **Validation** | None at suggestion time (post-merge re-scan) | Sandboxed analysis; CodeQL / CI run on the PR before merge |
| **Iteration** | One-shot, no regenerate; discard if you dislike it | Comment `@copilot` on the PR to refine / re-fix |
| **Speed** | Seconds (synchronous) | Minutes (async background) |
| **License & cost** | Free with GHAS / GitHub Code Security — no extra license | Requires Copilot Coding Agent license; consumes premium requests |
| **Prerequisite** | CodeQL query must support Autofix (otherwise no "Generate fix" button) | An Autofix suggestion must already exist on the alert |

> 🔑 **Rule of thumb** — start with **Autofix** for quick local fixes; escalate to **Assign to Copilot** when the fix spans multiple files, needs refactoring, or warrants a full PR conversation.

## Security Campaigns — drive remediation at scale

**What it is** — A **time-boxed, org-wide remediation initiative**. Curate alerts, assign owners, set a deadline, track progress on a dashboard.

- 🎯 **Use case** — "Fix all critical SQLi in product X by Q2" / clear `security-extended` backlog / chase a CVE post-incident
- 🧭 **Targeting** — filter by severity, CWE, query, language, repo, team, age (with preview)
- 👥 **Ownership** — routed to CODEOWNERS / teams; per-team progress
- ⏰ **Deadline & dashboard** — due date + open / fixed / overdue tracker
- 🤖 **Pairs with Assign to Copilot** — bulk-assign Autofix-eligible alerts → 1 PR per repo
- 🛂 **Permissions** — **security managers / org owners** at org level

**How to create one**
- `Org → Security and quality → Campaigns → New campaign` — pick **From template**, **From code scanning filters**, or **From secret scanning filters**

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">About security campaigns (GitHub Docs) ↗</a>

## Getting started (fastest path)

**Step 1 — Enable Default setup (this alone is enough)**

```
Repo → Settings → Code security → Code scanning
  → Set up CodeQL → Default
```

GitHub auto-detects your language and generates a CodeQL workflow behind the scenes. Runs automatically on push and PR — results appear in the **Security tab** + inline comments on the PR's Files Changed tab.

**Step 2 — Enable Copilot Autofix**

Enable **Copilot Autofix** inside Code scanning settings. A "Generate fix" button will appear on alert pages.

**Step 3 — Migrate to Advanced setup (if needed)**

```yaml
# .github/workflows/codeql.yml
name: CodeQL
on:
  push: { branches: [main] }
  pull_request: { branches: [main] }
  schedule: [{ cron: '30 5 * * 1' }]
jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions: { security-events: write, contents: read }
    strategy:
      matrix: { language: [javascript, python] }
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}
          queries: security-extended
      - uses: github/codeql-action/analyze@v3
```

**Step 4 — Integrate third-party SAST tools (SARIF)**

Tools like Semgrep, ESLint security, and Snyk can upload results in **SARIF** format to appear alongside CodeQL in the Security tab.

```yaml
- uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
```

**Step 5 — Enable org-wide / enterprise-wide**

Use `Org → Settings → Code security → default settings` to apply to new and existing repos at once. Security campaigns let you manage goals like "fix all critical alerts across all repos within 30 days" (Code Security).

## Eligibility and pricing

| Feature | Public repo | Private repo (No GHAS / Code Security) | Private repo (With GHAS / Code Security) |
| --- | :---: | :---: | :---: |
| CodeQL (default + advanced) | ✅ Free | ❌ | ✅ |
| Third-party SARIF upload | ✅ Free | ❌ | ✅ |
| Copilot Autofix | ✅ Free (since 2024) | ❌ | ✅ |
| Security overview / campaigns | ✅ Free | ❌ | ✅ |
| PR inline comments | ✅ Free | ❌ | ✅ |
| Custom CodeQL queries | ✅ Free | ❌ | ✅ |

> 💰 In 2025, GHAS was split — if you only need code scanning, **GitHub Code Security** ($30/month/active committer) is enough (no full GHAS contract required). Combine with Secret Protection if you also want secret scanning.  
> 🆓 **Public repos get CodeQL and Autofix completely free**. If you're OSS, there's no reason not to enable this right now.  
> ⚙️ Code scanning workflows run on GitHub-hosted runners — free for public repos; included in GHAS/Code Security for private repos (no additional Actions charges).

📘 Details:
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (2025 Mar) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning" target="_blank" rel="noopener noreferrer">SARIF support for code scanning ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/configuring-global-security-settings-for-your-organization" target="_blank" rel="noopener noreferrer">Org default security settings ↗</a>

## Code Security Risk Assessment (free inventory scan)

**What it does** — scans the **up to 20 most active repositories** in your org with a single click using CodeQL, surfacing where vulnerabilities are hiding. **No GHAS / Code Security license required — completely free** (GA April 2026).

- 🔎 **Scope** — up to 20 repos with the most recent active commits (re-selectable each run)
- 📊 **Output** — aggregated report by **severity, language, rule type**, including **how many are fixable by Copilot Autofix**
- 🕒 **Frequency** — re-runnable **once every 90 days** (point-in-time inventory)
- 🛂 **Permissions** — Organization owners / security managers only
- 🚀 **How to run** — `Org → Security → Assessments → Run code security risk assessment`
- 🆓 **Cost** — no license, no Actions minutes charged — perfect for evaluating Code Security before purchase

> 📊 Pair this with Secret Risk Assessment (see <a class="retro-link" href="/theomonfort/en/playbook/secret-scanning">Secret Scanning ↗</a>) to get a complete picture of your organization's security posture in a single day. Use the results to decide whether to adopt **Code Security**.

📘 Details:
- <a class="retro-link" href="https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment GA (2026/04) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment (GitHub Docs) ↗</a>
- <a class="retro-link" href="https://github.blog/security/application-security/how-exposed-is-your-code-find-out-in-minutes-for-free/" target="_blank" rel="noopener noreferrer">How exposed is your code? Find out in minutes — for free ↗</a>
