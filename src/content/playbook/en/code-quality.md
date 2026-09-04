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

## What Code Quality covers

Generally available since **July 20, 2026**. Its job is to keep code reliable, maintainable, and covered by tests as it ages. It is a **standalone product that sits next to GitHub Advanced Security**, not a feature bundled inside it.

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
<p class="vsx-why" data-side="cq">Keep the code <b>reliable and maintainable</b>: safer refactors, lower maintenance cost, a cleaner codebase.</p>
<p class="vsx-why" data-side="cs">Catch <b>security vulnerabilities and coding errors</b> before they reach production.</p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🐛</span><span class="vsx-name">Typical finding</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🐛</span><span class="vsx-title">Typical finding</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Two families. <b>Reliability</b>: duplicate if condition, unreachable statement, off-by-one against length, missing error check, uninitialized variable. <b>Maintainability</b>: useless assignment, expression with no effect, database query in a loop.</p>
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
<p class="vsx-why" data-side="cq">Findings land in two places: <b>bot comments on the pull request</b>, and the repository <b>Security tab</b> for the default branch. Each one is graded <b>Error / Warning / Note</b>, and those grades drive the quality score.</p>
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
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🔢</span><span class="vsx-name">Query coverage</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🔢</span><span class="vsx-title">Query coverage</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Standard queries: C# 69, Go 22, Java/Kotlin 89, JS/TS 98, Python 101, Ruby 3, Rust 1. <b>383 in total</b>. C/C++, Swift and Actions are not covered yet.</p>
<p class="vsx-why" data-side="cs">Default queries: Actions 18, C/C++ 61, C# 59, Go 36, Java/Kotlin 80, JS/TS 89, Python 45, Ruby 44, Rust 36, Swift 29. <b>497 in total</b>, of which 413 raise alerts.</p>
</div>
</details>
</div>
<div class="vsx-screen"><p class="vsx-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>

> 🔑 Use both: Code Scanning protects against exploitable risk; Code Quality protects long-term code health.

## Catch issues before merge

The best time to fix quality debt is while the pull request context is still fresh. In GitHub's engineering organization, teams resolve **67.3% of Code Quality findings before merge**.

1. **Set the bar first** — configure a ruleset quality gate so changes below your standard cannot be merged.
2. **Open a PR** — it triggers rules-based and AI-assisted analysis, and findings land inline with an explanation and a suggested change.
3. **Resolve** — apply the autofix, dismiss with a reason, or delegate broader remediation to Copilot.
4. **The gate holds** — the PR stays blocked until the required findings are resolved.
5. 🎁 **Bonus** — fix an alert straight from the Security tab, or open a campaign to work through the backlog in an organized way.

> ⚡ Fixing findings in the PR prevents a second remediation PR and keeps the default-branch backlog clean.

## Enable and roll out <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Enablement is a three-level cascade**

- 🏛️ **Enterprise** — `Policies → Code quality` allows organizations to use it
- 🏢 **Organization** — `Settings → Code quality → Repository access` picks the repositories in scope
- 📦 **Repository** — `Settings → Code quality → Enable code quality` turns the scans on

**Before you switch it on**

- ⚙️ **GitHub Actions** — deterministic CodeQL scans run as Actions workflows
- 🏃 **Runners** — GitHub-hosted, or self-hosted with the expected label
- 🧪 **Coverage** — upload Cobertura XML from your existing test workflow
- 🧭 **Gates** — start rulesets in evaluate mode, then switch to merge blocking

> 🏢 **Rollout can only be checked per organization.** The dashboard and "Repository access" are organization-scoped; the enterprise level only shows the policy allow-list and consumed licenses.

<a class="dl-script" href="/theomonfort/scripts/gh-code-quality-inventory.sh" download>
  <span class="dl-script-ico">▼</span>
  <span class="dl-script-text">
    <strong>gh-code-quality-inventory.sh</strong>
    <em>Give it an enterprise slug: it walks every organization and reports which repositories have Code Quality enabled</em>
  </span>
  <span class="dl-script-cmd">./gh-code-quality-inventory.sh &lt;enterprise&gt;</span>
</a>

## GA availability and billing

Available on **GitHub Enterprise Cloud** and **GitHub Team**.

<p class="spec-hint">▸ + UNFOLDS THE DETAIL FOR THAT COST LINE</p>

<div class="spec-widget">
<table style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">Cost</th><th>How it is measured</th><th>Good to know</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 Base license</td>
<td><b>$10 per active committer / month</b>. Active means a commit was pushed to an enabled repository in the last 90 days.</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📦</span><span class="spec-key">Product model</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Standalone product, <b>complementary to GitHub Advanced Security</b> rather than bundled with it. Not available on <b>GitHub Enterprise Server</b> at GA.</p>
</details>
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">Who counts</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">A committer is counted <b>once across the organization</b>, regardless of how many repositories are enabled. GitHub App bots are excluded.</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">🤖 AI-powered work</td>
<td>AI-assisted detection and Copilot-powered features consume <b>GitHub AI credits</b>.</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🪪</span><span class="spec-key">Copilot license</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>Not required</b> for AI-assisted detection or Autofix. Only the optional delegation of remediation to Copilot needs a Copilot license.</p>
</details>
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">Cap the spend</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Set a SKU-level budget: <b>Enterprise → Budget → SKU = Code Quality AI credits</b>.</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">⚙️ Deterministic scans</td>
<td>CodeQL workflows consume <b>GitHub Actions minutes</b>, unless self-hosted runners are used.</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">Cap the spend</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Set a <b>GitHub Actions budget</b>, or move the scans onto self-hosted runners.</p>
</details>
</div>
</td>
</tr>
</tbody>
</table>
</div>

## Measure quality over time

Pull-request enforcement stops new debt. Dashboards and APIs tell you where the existing debt already lives.

- 📊 **Repository and organization dashboards** — reliability and maintainability scores across repositories, so you can see which ones carry the most debt
- 🧪 **Coverage on pull requests** — render existing Cobertura XML reports and show whether coverage improves or drops
- 🔌 **APIs** — manage repository enablement and retrieve findings for your own reporting

> 🎯 Dashboards tell you where quality debt lives; rulesets stop teams from adding more.
