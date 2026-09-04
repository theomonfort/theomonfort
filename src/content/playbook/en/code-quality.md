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

## What Code Quality covers

Six dimensions define the product. Pick one to see what Code Quality does about it.

<div class="vsx-widget">
<input class="vsx-radio" type="radio" name="cq-vs-product" id="cqvs-quality" checked />
<input class="vsx-radio" type="radio" name="cq-vs-product" id="cqvs-scanning" />
<p class="vsx-hint">▸ PICK A TOPIC. THE SECOND TAB IS CODE SCANNING, FOR REFERENCE</p>
<div class="vsx-bar">
<label class="vsx-tab" for="cqvs-quality"><span class="vsx-icon" aria-hidden="true">🩺</span>Code Quality</label>
<label class="vsx-tab" for="cqvs-scanning"><span class="vsx-icon" aria-hidden="true">🛡️</span>Code Scanning<span class="vsx-tab-ref">REF</span></label>
</div>
<div class="vsx-split">
<div class="vsx-list">
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🎯</span><span class="vsx-name">Primary goal</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🎯</span><span class="vsx-title">Primary goal</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Keep the codebase <b>reliable, maintainable, and efficient</b>, and keep test coverage from sliding, so that today's shortcut never becomes next quarter's outage or rewrite.</p>
<p class="vsx-why" data-side="cs">Catch <b>security vulnerabilities and coding errors</b> before release, so that an attacker cannot reach production through your own code.</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🐛</span><span class="vsx-name">Typical finding</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🐛</span><span class="vsx-title">Typical finding</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">A <b>useless condition</b>, a risky design, a database query inside a loop.</p>
<p class="vsx-why" data-side="cs"><b>SQL injection</b>, XSS, path traversal, unsafe data flow.</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🔬</span><span class="vsx-name">Analysis engine</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🔬</span><span class="vsx-title">Analysis engine</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq"><b>CodeQL quality rules</b>, plus AI-assisted detection for patterns no fixed rule covers.</p>
<p class="vsx-why" data-side="cs"><b>CodeQL security queries</b>, or any third-party tool that uploads SARIF.</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-name">Reporting</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-title">Reporting</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Every finding is graded <b>Error / Warning / Note</b>, and rolls up into quality scores and coverage trends per repository and organization, PR findings, and a default-branch backlog.</p>
<p class="vsx-why" data-side="cs">Alerts are graded by <b>severity and CWE</b>, and aggregated in Security overview.</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🚧</span><span class="vsx-name">Merge control</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🚧</span><span class="vsx-title">Merge control</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq"><b>Quality and coverage thresholds</b> in rulesets, with an evaluate mode to measure the impact before enforcing.</p>
<p class="vsx-why" data-side="cs">Code scanning checks and <b>security merge protection</b>.</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">💰</span><span class="vsx-name">Product model</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">💰</span><span class="vsx-title">Product model</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Standalone paid product: <b>$10 per active committer / month</b>.</p>
<p class="vsx-why" data-side="cs"><b>Free for public repos</b>; private repos require Code Security.</p>
</div>
</details>
</div>
<div class="vsx-screen"><p class="vsx-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>

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

## Enable and roll out <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

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

> 🏢 **Rollout can only be checked per organization.** The Code Quality dashboard and the "Repository access" setting are organization-scoped; the enterprise level only shows the policy allow-list and consumed licenses.

<a class="dl-script" href="/theomonfort/scripts/gh-code-quality-inventory.sh" download>
  <span class="dl-script-ico">▼</span>
  <span class="dl-script-text">
    <strong>gh-code-quality-inventory.sh</strong>
    <em>Give it an enterprise slug: it walks every organization and reports which repositories have Code Quality enabled</em>
  </span>
  <span class="dl-script-cmd">./gh-code-quality-inventory.sh &lt;enterprise&gt;</span>
</a>

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
