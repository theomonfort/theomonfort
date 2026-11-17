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
  hex: "#5eead4"
order: 19.6
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
    label: Exploring the Code Quality backlog
    url: https://docs.github.com/en/code-security/how-tos/maintain-quality-code/interpret-results
  - group: 📖 Official Documentation
    label: Organization Code Quality dashboard and access
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/explore-code-quality
  - group: 📖 Official Documentation
    label: Dismissing findings and assigning them to Copilot
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/fix-backlog-findings
  - group: 📖 Official Documentation
    label: Security manager permissions
    url: https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization
  - group: 📖 Official Documentation
    label: Enabling GitHub Code Quality
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality
  - group: 📖 Official Documentation
    label: Code scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/code-scanning
  - group: 📚 Research
    label: "Code for Machines, Not Just Humans: AI-friendliness and Code Health (FORGE 2026)"
    url: https://arxiv.org/abs/2601.02200
  - group: 📚 Research
    label: "Code Health in LLM-Based Test Generation: Effectiveness and Token Efficiency (SCAM 2026)"
    url: https://arxiv.org/abs/2608.18645
  - group: 💰 Billing
    label: GitHub Code Quality billing
    url: https://docs.github.com/en/enterprise-cloud@latest/billing/concepts/product-billing/github-code-quality
  - group: 📰 Announcement
    label: "Remediate Code Quality findings with agentic autofix (2026-09-09)"
    url: https://github.blog/changelog/2026-09-09-remediate-code-quality-findings-with-agentic-autofix/
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
    <strong>CodeQL rules + AI analysis</strong> suggest PR fixes, measure repository health, and block merges below your quality bar.
  </p>
</div>

## What Code Quality covers <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

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
<p class="vsx-why" data-side="cq">GA since <b>July 20, 2026</b>, this standalone product complements GitHub Advanced Security. It keeps code <b>reliable, maintainable and tested</b>: safer refactors, lower maintenance cost and a cleaner codebase.</p>
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
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">🧠</span><span class="vsx-name">AI findings</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">🧠</span><span class="vsx-title">AI findings</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Same quality goals as Standard findings: <b>reliability and maintainability</b>, without predefined rules and across all languages. Runs <b>after merge on recently changed files on the default branch</b>, not on PRs. Results appear under <b>AI findings</b>. <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/maintain-quality-code/fix-findings-in-recent-merges" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
<p class="vsx-why" data-side="cs"><b>AI Scan</b> detects security vulnerabilities <b>on PR changes only</b>, in selected <b>languages and frameworks not covered by CodeQL</b>, such as PHP, Bash, HCL, Dockerfiles, JSP and Blazor. No full-repository scan or backlog alerts. <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
</div>
</details>
<details class="vsx-pick" name="cq-vs-topic">
<summary class="vsx-btn"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-name">Reporting</span></summary>
<div class="vsx-pane">
<p class="vsx-head"><span class="vsx-icon" aria-hidden="true">📊</span><span class="vsx-title">Reporting</span><span class="vsx-badge"></span></p>
<p class="vsx-why" data-side="cq">Standard findings land in two places: <b>bot comments on the pull request</b>, and the repository <b>Security tab</b> for the default branch. Each one is graded <b>Error / Warning / Note</b>, and those grades drive the quality score.</p>
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

## Language support <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-quality/code-quality#supported-languages" target="_blank" rel="noopener noreferrer">📖 Docs</a>

CodeQL covers **C#, Go, Java, JS/TS, Python and Ruby**. Other languages get AI analysis and coverage only.

<div class="tbl-compact">

| Feature | ✅ 6 CodeQL languages | ⚠️ C/C++ and others |
| --- | --- | --- |
| 🔍 PR findings + Autofix; default-branch findings | ✅ | ❌ |
| 🤖 Agentic Autofix and quality gates | ✅ | ❌ |
| 🧠 AI analysis (recently changed files) | ✅ | ✅ |
| 🧪 Coverage (Cobertura XML) | ✅ | ✅ |

</div>

> 💡 Only CodeQL findings appear on PRs. For C/C++, add <a class="retro-link" href="/theomonfort/en/playbook/copilot-code-review/">Copilot code review ↗</a> (separate product).

## Catch issues before merge

When AI writes most of the code, a ruleset quality gate on every PR is what holds the bar. GitHub's teams fix **67.3%** of findings before merge (<a class="retro-link" href="https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available/" target="_blank" rel="noopener noreferrer">GitHub,&nbsp;2026&nbsp;↗</a>).

<div class="tbl-compact">

| | 🟢 Gate on every PR | 🔴 No gate |
| --- | --- | --- |
| 🤖 Agent | Its blind spots get caught | Its blind spots get merged |
| 🔧 Fix | Autofix in the same PR | Cleanup PR later, if ever |
| 📉 Codebase | Stays at your bar | Debt hits the next agent |

</div>

- 🐛 **Riskier edits**: AI edits on unhealthy code carry **30%+ higher defect risk** (<a class="retro-link" href="https://arxiv.org/abs/2601.02200" target="_blank" rel="noopener noreferrer">FORGE&nbsp;2026&nbsp;↗</a>)
- 🪙 **Costlier reads**: the least healthy code takes **~45% more input tokens** to read (Java / C++, <a class="retro-link" href="https://arxiv.org/abs/2608.18645" target="_blank" rel="noopener noreferrer">SCAM&nbsp;2026&nbsp;↗</a>)

## Agentic Autofix <a class="h2-doc" href="https://github.blog/changelog/2026-09-09-remediate-code-quality-findings-with-agentic-autofix/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**A fix PR for your backlog**, not just a suggested patch.

<div class="tbl-compact">

| Step | What happens |
| --- | --- |
| 🎯 Select | **Security and quality → Code quality → Standard findings**: select **1–25 default-branch CodeQL findings on one page**. |
| 🤖 Delegate | **Assign to Copilot** replaces **Generate fix**, even for one finding. The cloud agent edits a branch, validates and opens a PR. |
| 👀 Review | Review fixes and CI, then merge. Human review remains necessary. |

</div>

**Access:** Code Quality on **Team / Enterprise Cloud** (including data residency), with existing enterprise policy and no separate bulk setting. **Cost:** AI credits and a Copilot license.

## Who can do what? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/explore-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Org owners:** Admin on every repo. **Others:** permissions below.

<div class="tbl-compact">

| Action | Where | Default access |
| --- | --- | --- |
| View findings | Repo → Code quality | **Write+** |
| View org scores / trends | Org → Insights → Code quality | **Org owner:** all repos. **Members:** Write+ repos |
| Dismiss a finding | Repo → Standard findings | **Write+** |
| Assign Copilot | Repo → Standard findings | **Write+** on the target repo |

</div>

Org dashboard: open the repo, then **Standard findings → Assign to Copilot**. Security manager alone grants Read, not Write. **Write+** = Write / Maintain / Admin (standard roles, Code Quality enabled; 2026-11-10).

## Enable and roll out <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/maintain-quality-code/enable-code-quality" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="tbl-compact">

| Level | Enablement cascade |
| --- | --- |
| 🏛️ Enterprise | `Policies → Code quality`: allow organizations |
| 🏢 Organization | `Settings → Code quality → Repository access`: select repositories |
| 📦 Repository | `Settings → Code quality → Enable code quality`: enable scans |

</div>

**Prerequisites:** Actions workflows, GitHub-hosted or labeled self-hosted runners; upload test Cobertura XML. Evaluate rulesets before enforcing.

Rollout: org dashboard / Repository access only. Enterprise shows the policy allow-list and consumed licenses.

<a class="dl-script" href="/theomonfort/scripts/gh-code-quality-inventory.sh" download>
  <span class="dl-script-ico">▼</span>
  <span class="dl-script-text">
    <strong>gh-code-quality-inventory.sh</strong>
    <em>List enabled repositories across an enterprise's organizations</em>
  </span>
  <span class="dl-script-cmd">./gh-code-quality-inventory.sh &lt;enterprise&gt;</span>
</a>

## GA availability and billing

Available on **GitHub Enterprise Cloud** and **GitHub Team**.

<div class="spec-widget spec-compact">
<table style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">Cost</th><th>How it is measured</th><th>Good to know</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 Base license</td>
<td><b>$10 / active committer / month</b>. Active: a commit pushed to an enabled repo in the last 90 days.</td>
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
<td>AI detection and Copilot features use <b>GitHub AI credits</b>.</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cq-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🪪</span><span class="spec-key">Copilot license</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">AI detection and Autofix <b>do not need a Copilot license</b>. Only delegation to Copilot requires one.</p>
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
<td>CodeQL workflows use <b>Actions minutes</b>, unless self-hosted.</td>
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
