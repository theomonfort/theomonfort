---
title: Code Quality
titleEn: Code Quality
summary: GitHub Code Quality catches reliability and maintainability issues before merge using CodeQL and AI, suggests fixes, reports coverage and quality scores, and enforces quality gates with rulesets.
icon: 🩺
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.5
category: secure
related: ['code-scanning', 'github-advanced-security', 'copilot-code-review']
links:
  - group: 📖 Official Documentation
    label: GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality
  - group: 📖 Official Documentation
    label: CodeQL-powered analysis for Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/reference/code-quality/codeql-detection
  - group: 📖 Official Documentation
    label: Preventing code quality issues before merge
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/improve-code-quality/catch-issues-before-merge
  - group: 📖 Official Documentation
    label: Enabling GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality
  - group: 📖 Official Documentation
    label: Code scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/code-scanning
  - group: 💰 Billing
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/product-billing/github-code-quality
  - group: 📰 Announcement
    label: "GitHub Code Quality is now generally available (2026-07-20)"
    url: https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available/
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Code Quality</strong> stops reliability and maintainability problems from becoming tomorrow's technical debt.
  </p>
  <p>
    It combines <strong>CodeQL rules + AI-assisted analysis</strong>, suggests fixes in pull requests, measures repository health, and can block merges that miss your quality bar.
  </p>
</div>

## Two analysis layers

Code Quality combines predictable rules with broader AI reasoning.

| Layer | What it finds | Where it appears |
| --- | --- | --- |
| 🔬 **CodeQL rules** | Known reliability and maintainability anti-patterns | PR comments from `github-code-quality[bot]` + default-branch findings |
| 🤖 **AI-assisted analysis** | Design, naming, best-practice, and contextual issues outside fixed rules | Copilot comments on changed code |

- Rules-based findings use **Error / Warning / Note** severity and include an autofix when available
- AI analysis can cover languages and patterns not yet represented by CodeQL quality queries
- Default-branch scans expose existing quality debt; PR scans prevent new debt

> 💡 AI findings complement deterministic rules. They do not replace them and do not block a PR by themselves.

## Code Quality vs Code Scanning

They share CodeQL and Autofix, but solve different problems.

| | 🩺 **Code Quality** | 🛡️ **Code Scanning** |
| --- | --- | --- |
| Primary goal | Reliability, maintainability, efficiency, coverage | Security vulnerabilities and coding errors |
| Typical finding | Useless condition, risky design, query in a loop | SQL injection, XSS, path traversal, unsafe data flow |
| Analysis | CodeQL quality rules + AI-assisted detection | CodeQL security queries or third-party SARIF tools |
| Reporting | Quality scores, coverage, PR findings, backlog | Security alerts, severity, CWE, Security overview |
| Merge control | Quality and coverage thresholds in rulesets | Code scanning checks and security merge protection |
| Product model | Standalone paid product | Public repos free; private repos require Code Security |

> 🔑 Use both: Code Scanning protects against exploitable risk; Code Quality protects long-term code health.

## Catch issues before merge

The best time to fix quality debt is while the pull request context is still fresh.

1. A PR triggers rules-based and AI-assisted analysis.
2. Findings appear inline with an explanation and suggested change.
3. Apply the autofix, dismiss with a reason, or delegate broader remediation to Copilot.
4. Configured quality gates keep the PR blocked until required findings are resolved.

In GitHub's engineering organization, teams resolve **67.3% of Code Quality findings before merge**.

> ⚡ Fixing findings in the PR prevents a second remediation PR and keeps the default-branch backlog clean.

## Measure and enforce quality

GA adds organization-level visibility and enforceable standards.

- 📊 **Repository and organization dashboards** — reliability and maintainability scores across repositories
- 🧪 **Coverage on pull requests** — render existing Cobertura XML reports and show whether coverage improves or drops
- 🚧 **Ruleset quality gates** — block merges by finding severity or coverage threshold
- 🧭 **Evaluate mode** — observe the impact of a gate before enforcing it
- 🤖 **Backlog remediation** — apply autofixes or assign larger fixes to Copilot cloud agent
- 🔌 **APIs** — manage repository enablement and retrieve findings

> 🎯 Dashboards tell you where quality debt lives; rulesets stop teams from adding more.

## Enable and roll out

Start small, tune thresholds, then expand through organization policy.

```text
Enterprise: allow Code Quality
Organization: Settings → Code quality → Repository access
Repository: Settings → Code quality → Enable code quality
```

- GitHub Actions must be enabled because deterministic CodeQL scans run as Actions workflows
- Enable selected repositories or use dynamic filters for a controlled pilot
- Upload Cobertura XML from your existing test workflow to add coverage reporting
- Configure rulesets in evaluate mode before switching to merge blocking
- Use GitHub-hosted or labeled self-hosted runners

> 💡 Pilot with representative repositories first, especially before enabling organization-wide billing and gates.

## GA availability and billing

Code Quality became generally available on **July 20, 2026**.

| Cost | How it is measured |
| --- | --- |
| 💺 Base license | **$10 per active committer / month**; activity means a commit was pushed to an enabled repository in the last 90 days |
| 🤖 AI-powered work | AI-assisted detection and Copilot-powered features consume **GitHub AI credits** |
| ⚙️ Deterministic scans | CodeQL workflows consume **GitHub Actions minutes** unless self-hosted runners are used |

- Available on **GitHub Enterprise Cloud and GitHub Team**
- Standalone product, complementary to GitHub Advanced Security rather than bundled with it
- A committer is counted once across the organization, regardless of enabled repository count; GitHub App bots are excluded
- A Copilot subscription is not required for AI-assisted detection or Autofix; optional delegation to Copilot requires a Copilot license
- Not available on GitHub Enterprise Server at GA

> 💰 Review repository scope before enabling broadly: billing starts when Code Quality is enabled and used.
