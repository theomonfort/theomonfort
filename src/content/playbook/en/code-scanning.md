---
title: Code Scanning
titleEn: Code Scanning
summary: Code scanning finds vulnerabilities with CodeQL static analysis (SAST). Eligible findings can receive Copilot Autofix suggestions or be assigned to Copilot for remediation.
icon: /theomonfort/icons/code-scanning.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.5
category: secure
related: ['code-quality', 'github-advanced-security', 'dependabot', 'secret-scanning']
links:
  - group: 📖 Official Documentation
    label: About code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning
  - group: 📖 Official Documentation
    label: AI-powered security detections in pull requests
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections
  - group: 📖 Official Documentation
    label: Resolving code scanning alerts
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts
  - group: 📖 Official Documentation
    label: Configuring default setup
    url: https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
  - group: 📖 Official Documentation
    label: Autofix for code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning
  - group: 📖 Official Documentation
    label: SARIF support for code scanning
    url: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning
  - group: 🔬 Going deeper on CodeQL
    label: About CodeQL (CodeQL docs)
    url: https://codeql.github.com/docs/codeql-overview/about-codeql/
  - group: 🔬 Going deeper on CodeQL
    label: About CodeQL queries (writing your own)
    url: https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/
  - group: 🔬 Going deeper on CodeQL
    label: About data flow analysis (taint tracking)
    url: https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/
  - group: 🔬 Going deeper on CodeQL
    label: github/codeql (the open-source query packs)
    url: https://github.com/github/codeql
  - group: 💰 Pricing
    label: GitHub security plans (source for $30 / $19)
    url: https://github.com/security/plans
  - group: 💰 Pricing
    label: Billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 💰 Pricing
    label: Billing for GitHub Actions
    url: https://docs.github.com/en/billing/concepts/product-billing/github-actions
  - group: 📖 Official Documentation
    label: Code security risk assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 📰 Recent Changelog
    label: "Agentic autofix for code scanning alerts (2026-07-10)"
    url: https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Code Scanning</strong> finds vulnerabilities through static analysis (<strong>SAST</strong>), <strong>without running your code</strong>.
  </p>
  <p>
    <strong>CodeQL</strong> turns code into a <strong>queryable database</strong>. Eligible findings can get <strong>Copilot Autofix</strong> suggestions or be assigned to <strong>Copilot</strong> for a fix.
  </p>
</div>

## What is SAST?

Application security testing splits into four families. Code Scanning owns **SAST (Static Application Security Testing)**: reading the source itself, **without executing it**.

<div class="det-widget">
<p class="det-hint">▸ CLICK FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-name">SAST (static)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-title">SAST — static analysis</span></p>
<p class="det-why">Reads source <b>without running it</b>, so it fires <b>at commit and PR time</b> where fixes are cheapest. It sees every code path, including ones testing never reaches, but is <b>blind to runtime-only problems</b> like misconfiguration. Its classic weakness is false positives — exactly what CodeQL's data-flow analysis attacks.</p>
<p class="det-doc">GitHub feature: <b>Code Scanning / CodeQL</b></p>
</div>
</details>
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🌐</span><span class="det-name">DAST (dynamic)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🌐</span><span class="det-title">DAST — dynamic analysis</span></p>
<p class="det-why">Fires <b>real attack requests at a running app</b>. It proves exploitability, but only for what is <b>already deployed and crawlable</b>, and it cannot point at the offending line.</p>
<p class="det-doc">No first-party GitHub feature. Ingest results via <b>SARIF</b></p>
</div>
</details>
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📦</span><span class="det-name">SCA (dependencies)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📦</span><span class="det-title">SCA — software composition analysis</span></p>
<p class="det-why">Finds <b>known CVEs in libraries you did not write</b>. Most of a modern app is dependencies, so by raw count this is usually the biggest source of findings.</p>
<p class="det-doc">GitHub feature: <b>Dependabot / Dependency review</b></p>
</div>
</details>
<details class="det-pick" name="cs-appsec">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-name">Secret scanning</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-title">Secret scanning — leaked credentials</span></p>
<p class="det-why">Not vulnerabilities but <b>keys and tokens committed into the repo</b>. The cheapest way in for an attacker, so it often outranks SAST on priority.</p>
<p class="det-doc">GitHub feature: <b>Secret Protection</b></p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:16.5em"><p class="det-empty">SELECT A METHOD ▸</p></div>
</div>
</div>

> 🔑 Rule of thumb — **SAST finds bugs in the code you wrote, SCA finds bugs in the code someone else wrote.** Different territory, so neither one covers the other.

## Code scanning is not CodeQL <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Code scanning is the GitHub feature; CodeQL is one analysis engine.** AI findings complement it on pull requests, and third-party tools can supply SARIF results.

<div class="det-widget det-compact">
<p class="det-hint">▸ CLICK FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-name">Code scanning (the feature)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-title">Code scanning — GitHub's surface</span></p>
<p class="det-why">The <b>feature</b> that collects static-analysis results and surfaces them: Security tab alerts, inline PR comments, merge protection, Security overview, APIs. <b>Whatever the engine, results land here.</b></p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-name">CodeQL (the engine)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-title">CodeQL — the analysis engine</span></p>
<p class="det-why">The semantic analysis engine GitHub <b>acquired from Semmle in 2019</b>. It is the default engine on GitHub, but it also <b>runs outside GitHub</b> — the CodeQL CLI works in any CI, or locally on your laptop.</p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI findings (PR only)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">AI security detections</span></p>
<p class="det-why"><b>Complement CodeQL</b> for uncovered languages and frameworks, such as PHP, Bash, HCL and Dockerfiles. <b>Pull requests only</b>: no full-repo scan or backlog alerts. Advisory, not a merge gate. Requires opt-in and <b>CodeQL default setup</b>; consumes <b>AI credits</b>.</p>
<p class="det-doc">Public preview: GHAS + Copilot licenses. <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">📘 Docs ↗</a></p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📄</span><span class="det-name">SARIF (the contract)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📄</span><span class="det-title">SARIF — the format that joins them</span></p>
<p class="det-why">The OASIS standard format for static-analysis results. Push Semgrep, Snyk or Checkmarx through <code>upload-sarif</code> and their findings sit <b>next to CodeQL's, same screen</b>.</p>
<p class="det-doc"><a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning" target="_blank" rel="noopener noreferrer">📘 SARIF support ↗</a></p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:14em"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>


## How CodeQL works <a class="h2-doc" href="https://codeql.github.com/docs/codeql-overview/about-codeql/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Extract code into a database**, then **compile and evaluate queries** against it.

<figure class="harness-map split-figure">
<img src="/theomonfort/diagrams/codeql-architecture.svg" width="1100" height="475" style="max-height:min(440px, 46vh);object-fit:contain" alt="CodeQL architecture: source code and build monitoring feed the extractor and database. The schema, query and libraries feed the QL compiler. The evaluator combines the compiled query with the database to produce results. Build artifacts are separate." />
</figure>

The **schema** describes the data; the **database** stores it. Extraction reads source directly or monitors a build, depending on the language and <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages" target="_blank" rel="noopener noreferrer">build mode ↗</a>.

## Reading a CodeQL query

QL is a declarative logic-programming language. **You describe the shape of a bug and the evaluator finds every instance.** The structure mirrors SQL's `FROM / WHERE / SELECT`.

```ql
import java                                       // ① pull in the standard library

from IfStmt ifstmt, Block block                   // ② declare the elements to inspect
where
  block = ifstmt.getThen() and                    // ③ constrain them
  block.getNumStmt() = 0                          //    → a then-branch with no statements
select ifstmt, "This if-statement is redundant."  // ④ what to report, and how
```

The whole language is that shape: **`where` is the definition of "what the bug looks like"**, and the evaluator does the searching.

> 🔬 Security queries layer `DataFlow` / `TaintTracking` on top, defining **sources, sinks and sanitizers** and searching for paths between them. The packs are open source at <a class="retro-link" href="https://github.com/github/codeql" target="_blank" rel="noopener noreferrer">github/codeql ↗</a>. In practice they are enough — you write custom queries mainly to teach CodeQL the sources and sinks of your in-house framework.

📘 Details: <a class="retro-link" href="https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/" target="_blank" rel="noopener noreferrer">About CodeQL queries ↗</a> / <a class="retro-link" href="https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/" target="_blank" rel="noopener noreferrer">About data flow analysis ↗</a>

## What CodeQL finds

<div class="det-widget">
<p class="det-hint">▸ CLICK FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💉</span><span class="det-name">Injection</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💉</span><span class="det-title">Injection</span></p>
<p class="det-why"><b>SQL injection, command injection, path traversal, XSS, SSRF</b>. User input reaching an interpreter (SQL, a shell, a file path, HTML, an HTTP client) without escaping. This is <b>CodeQL's home turf</b> and where data-flow analysis pays for itself.</p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔓</span><span class="det-name">Auth, authz & crypto</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔓</span><span class="det-title">Auth, authorization and crypto</span></p>
<p class="det-why">Broken access control, <b>weak cryptographic algorithms (MD5 / SHA-1)</b>, insecure randomness, hard-coded credentials, disabled certificate validation.</p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💣</span><span class="det-name">Memory safety (C/C++)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💣</span><span class="det-title">Memory safety (C/C++)</span></p>
<p class="det-why"><b>Buffer overflow, use after free, null dereference, integer overflow.</b> Only reachable because types and pointer flow live in the database — regex-based tools cannot go here.</p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧩</span><span class="det-name">Data flow tracking</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🧩</span><span class="det-title">Data flow tracking (taint tracking)</span></p>
<p class="det-why">The alert carries <b>the path itself</b>, source to sink. Anything crossing a sanitizer drops out, which is what keeps false positives down. <code>models-as-data</code> lets you register <b>your own framework's sources and sinks</b> without writing a query.</p>
<p class="det-doc"><a class="retro-link" href="https://github.blog/changelog/2026-04-21-codeql-now-supports-sanitizers-and-validators-in-models-as-data" target="_blank" rel="noopener noreferrer">📘 sanitizers in models-as-data ↗</a></p>
</div>
</details>
<details class="det-pick" name="cs-findings">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚙️</span><span class="det-name">CI/CD (Actions)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">⚙️</span><span class="det-title">CI/CD (GitHub Actions)</span></p>
<p class="det-why">Workflows are analysed too: <code>pull_request_target</code> combined with an untrusted checkout, <b>script injection</b>, excessive <code>permissions</code>, unpinned third-party actions — the <b>supply-chain side</b> of the repo.</p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:15em"><p class="det-empty">SELECT A CATEGORY ▸</p></div>
</div>
</div>

> 🌐 **Supported languages** — C/C++, C#, Go, Java/Kotlin, JavaScript/TypeScript, Python, Ruby, Rust, Swift, GitHub Actions. A repo with no CodeQL-supported language **runs no scans and burns no Actions minutes**.

## Default setup vs Advanced setup

There are two ways to enable CodeQL. **Default setup is enough to start.**

<div class="det-widget det-compact">
<p class="det-hint">▸ CLICK TO COMPARE</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🟢</span><span class="det-name">Default setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🟢</span><span class="det-title">Default setup — one click</span></p>
<p class="det-why"><b>No config file.</b> GitHub detects languages, picks the <code>default</code> suite, and wires push / PR / weekly triggers. Most languages need <b>no build step</b>, and one settings screen turns it on org-wide — the only realistic option at scale.</p>
<p class="det-doc">Best for: <b>99% of repos, and any rollout at scale</b></p>
</div>
</details>
<details class="det-pick" name="cs-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-name">Advanced setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-title">Advanced setup — your own workflow</span></p>
<p class="det-why">You own <code>.github/workflows/codeql.yml</code>: languages, triggers, your own build command, any query suite (<code>security-extended</code>, custom packs). The price is a workflow file per repo to maintain.</p>
<p class="det-doc">Best for: <b>monorepos, custom builds, custom queries</b></p>
</div>
</details>
<details class="det-pick" name="cs-setup">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💰</span><span class="det-name">Billing difference</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">💰</span><span class="det-title">There is none</span></p>
<p class="det-why">Both run as <b>Actions workflows</b> and burn minutes on private repos at the same rate, so neither choice saves money. What moves the bill is <b>scan frequency, repo size and runner type</b>.</p>
<p class="det-doc">See the pricing slide for the three meters</p>
</div>
</details>
</div>
<div class="det-screen" style="min-height:14em"><p class="det-empty">SELECT AN OPTION ▸</p></div>
</div>
</div>

> 🔑 Unless you have a monorepo, special build requirements, or need custom queries, **start with Default setup** — you can switch to Advanced later without losing history.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Configuring default setup ↗</a>

## Copilot Autofix: suggested fixes <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Copilot Autofix can generate a **suggested patch for an eligible alert**. You review, test and apply it; a successful fix is not guaranteed.

- 🤖 **Input**: alert details, surrounding code and CodeQL's data-flow path inform the suggestion.
- 💬 **On pull requests**: supported alerts can receive inline suggestions automatically.
- 🛠️ **On backlog alerts without cloud agent**: **Generate fix → Create PR with fix**.
- 🆓 **Cost**: no Copilot license or AI credits for classic Autofix. Included with Code Security; free on public repositories.
- 🔌 **Enablement**: allowed by default with CodeQL unless an administrator disables it.

## Agentic Autofix (Public Preview) <a class="h2-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a>

When cloud agent is available, **Assign to Copilot replaces Generate fix** on individual code scanning alerts.

- 🎯 **Assign**: one alert, or **1–25 alerts** from a repository backlog or security campaign.
- 🔁 **Agent session**: explore the codebase → generate a fix → validate and iterate → open a **draft PR**.
- 🛂 **Requirements**: cloud agent and Autofix must both be available. **No pre-generated Autofix suggestion is required.**
- 💸 **Cost**: **AI credits + Actions minutes**. Without cloud agent, the classic **Generate fix** flow remains available for eligible alerts.
- ⚠️ **Validation is best-effort**: custom queries, `security-extended` and third-party alerts are not guaranteed to be validated.

## Autofix vs Agentic Autofix <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="ctl-widget">
<p class="ctl-hint">▸ CLICK + TO OPEN THE COMPARISON</p>
<div class="ctl-list">
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📤</span><span class="ctl-name">Output</span><span class="ctl-when">patch vs PR</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v">A suggested patch to review and apply. For backlog alerts, <b>Create PR with fix</b> opens a draft PR from the suggestion</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">A <b>draft Pull Request</b> opened by the Copilot bot, reviewed like any other</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📐</span><span class="ctl-name">Fix scope</span><span class="ctl-when">suggestion vs exploration</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v">A <b>targeted suggestion</b> based on the alert and supplied code context</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v"><b>Multiple files</b>, with repository-wide context — refactors and shared helpers included</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📚</span><span class="ctl-name">Granularity</span><span class="ctl-when">per-alert vs bulk</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v"><b>Generate fix</b> on eligible backlog alerts <b>without cloud agent</b>; PR suggestions can be batch-applied</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">Assign <b>1–25 alerts</b> from a repository backlog or campaign to get a fix PR</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔁</span><span class="ctl-name">Validation & iteration</span><span class="ctl-when">one-shot vs dialogue</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v">A one-step suggestion: <b>review and test it on a PR before merging</b></span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">Validates and iterates on a <b>best-effort</b> basis. Read the session log; use <code>@copilot</code> comments for further changes</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⏱️</span><span class="ctl-name">Speed</span><span class="ctl-when">seconds vs minutes</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v"><b>Seconds</b>, synchronous — you judge it while looking at the alert</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v"><b>Minutes</b>, async in the background; a session is capped at 59 minutes</span></p>
</div>
</details>
<details class="ctl-item" name="cs-fix-vs">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">💰</span><span class="ctl-name">License & cost</span><span class="ctl-when">free vs metered</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">🔧 Autofix</span><span class="ctl-v"><b>Free.</b> No Copilot license, no AI credits. Included with Code Security / GHAS</span></p>
<p class="ctl-row"><span class="ctl-k">🤖 Agentic</span><span class="ctl-v">Needs a paid Copilot plan with cloud agent, and burns <b>AI credits + Actions minutes</b></span></p>
</div>
</details>
</div>
</div>

> 🔑 On individual alert pages, **repository availability determines the button**: cloud agent available → Assign to Copilot; otherwise → Generate fix for eligible alerts. PR inline Autofix suggestions remain a separate experience.

## Security Campaigns — drive remediation at scale

Detection is the easy half; **what happens after the alert** is the real work. At scale, don't grind the raw alert list — run a **time-boxed campaign**.

<div class="rem-widget">
<p class="rem-hint">▸ CLICK A STEP FOR DETAILS</p>
<div class="rem-flow">
<div class="rem-row">
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🎯</span><span class="rem-name">SCOPE</span></summary>
<div class="rem-plate">
<p class="rem-title">🎯 SCOPE — not the whole org</p>
<p class="rem-why"><code>Org → Security and quality → Campaigns → New campaign</code>, then pick <b>From template</b> or <b>From code scanning filters</b>.</p>
<p class="rem-why">Filter by severity, CWE, query, language, repo, team, age. Targeting a repo custom property (<code>props.BusinessPriority:Urgent</code>) is the usual move. Hard cap: <b>1000 alerts</b>.</p>
</div>
</details>
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">⚡</span><span class="rem-name">TRIAGE</span></summary>
<div class="rem-plate">
<p class="rem-title">⚡ TRIAGE — make it finishable</p>
<p class="rem-why">Start with <b>critical and high</b>, and with findings that carry a real reachable data-flow path. Dumping the whole <code>security-extended</code> backlog in guarantees nobody starts.</p>
<p class="rem-why">Watch the count drop as you filter. Cutting it down to <b>one sprint's worth</b> is the only trick that makes campaigns work.</p>
</div>
</details>
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">👥</span><span class="rem-name">OWN</span></summary>
<div class="rem-plate">
<p class="rem-title">👥 OWN — a name and a date</p>
<p class="rem-why">Every campaign gets a <b>due date</b> and a <b>campaign manager</b>. The picker only offers <b>org owners and security managers</b>.</p>
<p class="rem-why">Alerts route to CODEOWNERS or a named team. Publishing notifies everyone who can see the alerts, and the campaign appears in each repo's Security tab.</p>
</div>
</details>
<details class="rem-slot" name="cs-campaign">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🤖</span><span class="rem-name">FIX</span></summary>
<div class="rem-plate">
<p class="rem-title">🤖 FIX — hand the batch to Copilot</p>
<p class="rem-why">Select <b>1–25 alerts</b> and assign them to Copilot. With cloud agent available, it starts Agentic Autofix and consumes <b>AI credits + Actions minutes</b>.</p>
<p class="rem-why">For the rest, <b>batch apply</b> the Autofix suggestions on the PR. The dashboard burns down open / fixed / overdue as you go.</p>
</div>
</details>
</div>
<div class="rem-screen" style="min-height:11.4em"><p class="rem-empty">SELECT A STEP ▸</p></div>
</div>
</div>

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">About security campaigns (GitHub Docs) ↗</a>

## Getting started (fastest path)

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Repo → Settings → Code security</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 1 · DEFAULT SETUP</span>
    </div>
    <p><strong>Set up CodeQL → Default.</strong> Languages are detected for you; it runs on push and PR.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Alert → Fix</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 2 · AUTOFIX</span>
    </div>
    <p>Cloud agent available: <strong>Assign to Copilot</strong> (metered). Otherwise: <strong>Generate fix</strong> for eligible alerts (no AI credits).</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Org → Settings → Code security</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 3 · ROLL OUT</span>
    </div>
    <p>Build a <strong>security configuration</strong> and apply it to new and existing repos at once.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Repo → Settings → Rules</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 4 · MERGE PROTECTION</span>
    </div>
    <p>Code scanning alone <strong>never blocks a merge</strong>. Make it required in a ruleset.</p>
  </div>
</div>

Results appear in the **Security tab** and the PR's **Files changed** tab. Start with one repo and estimate **Actions usage** before rolling out.

## Advanced setup and SARIF

When Default is not enough (monorepo, unusual build, custom queries, another SAST tool), write the workflow yourself.

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
        with: { languages: '${{ matrix.language }}', queries: security-extended }
      - uses: github/codeql-action/analyze@v3

      # third-party SAST (Semgrep, Snyk, ESLint security) lands in the same UI:
      - uses: github/codeql-action/upload-sarif@v3
        with: { sarif_file: results.sarif }
```

> 💡 Point `runs-on` at a **self-hosted runner** and the Actions minutes are not billed — the first lever when scan cost bites at scale.

## Pricing: three meters <a class="h2-doc" href="https://github.com/security/plans" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<p class="spec-hint">▸ + UNFOLDS THE DETAIL</p>

<div class="spec-widget spec-compact">
<table class="compact-table" style="table-layout:fixed">
<colgroup><col style="width:22%" /><col style="width:40%" /><col style="width:38%" /></colgroup>
<thead>
<tr><th style="white-space:normal">Cost</th><th>How it is measured</th><th>Good to know</th></tr>
</thead>
<tbody>
<tr>
<td style="white-space:normal">💺 License</td>
<td><b>$30 / active committer / month</b><br>GitHub Code Security</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📦</span><span class="spec-key">What's included</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">CodeQL (default and advanced), <b>Copilot Autofix</b>, SARIF upload, Security overview, Security campaigns, custom queries. <b>Autofix costs nothing extra.</b></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">Who counts</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Active committers have a commit pushed to an enabled repo in the last <b>90 days</b>. <b>One license per person</b> across enabled repos and orgs in the enterprise; GitHub App bots are excluded. Code Security is sold <b>standalone</b>.</p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">⚙️ Actions minutes</td>
<td>CodeQL <b>runs on Actions</b>. Private scans consume minutes; overages are billed.</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔁</span><span class="spec-key">When it runs</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Default setup runs on pushes to the default or protected branches, PRs against them and a <b>weekly schedule</b>. Minutes depend on <b>run duration, repository count, languages and frequency</b>.</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💳</span><span class="spec-key">Cap the spend</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>Self-hosted runners are not billed</b>, or set an Actions budget. Minutes are <b>not</b> included in the Code Security license. Trap: <b>larger runners are charged even on public repos</b>.</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">📊</span><span class="spec-key">Measure it</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Filter Actions usage metrics <b>by workflow name</b> to isolate what CodeQL alone costs, so the conversation runs on real numbers instead of estimates.<br /><code>github.com/orgs/&lt;org&gt;/actions/metrics/usage?filters=codeql.yml</code></p>
</details>
</div>
</td>
</tr>
<tr>
<td style="white-space:normal">🤖 AI credits</td>
<td>Metered: <b>AI findings</b> (detection) and <b>Agentic Autofix</b> (fixing). Classic Autofix suggestions remain free.</td>
<td>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔎</span><span class="spec-key">AI findings</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Opt-in AI detection for <b>non-CodeQL languages</b> (PHP, Shell, Terraform, Dockerfile), on <b>PRs only</b>. Consumes AI credits even without a fix request. Public preview requires <b>GHAS + Copilot licenses</b> and CodeQL default setup. <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🆓</span><span class="spec-key">Copilot Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">No Copilot license needed and it <b>does not consume AI credits</b>. Included with Code Security at no additional cost.</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💸</span><span class="spec-key">Agentic Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Billed as a cloud agent session, drawing down <b>AI credits and Actions minutes</b> (1 credit = $0.01, <b>varying with model and tokens</b>). User budgets hard-stop; org budgets only cap once the pool is spent.</p>
</details>
</div>
</td>
</tr>
</tbody>
</table>
</div>

## Eligibility by repository type <a class="h2-doc" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<table class="availability-table">
<thead>
<tr><th scope="col">Feature</th><th scope="col">Public repo</th><th scope="col">Private repo<br>without Code Security</th><th scope="col">Private repo<br>with Code Security</th></tr>
</thead>
<tbody>
<tr><td>Core code scanning</td><td>✅ Free</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Security campaigns</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Actions minutes</td><td>Free*</td><td>Not applicable</td><td>Separate usage*</td></tr>
</tbody>
</table>

> 📦 **Core**: CodeQL, custom queries, SARIF uploads, eligible Autofix suggestions, PR annotations and Security overview.
>
> 💰 **Actions***: standard hosted runners are free for public repos. Private repos consume included minutes, then bill overages. Larger runners are always billed.
>
> ⚠️ **Public → private**: Code Security is required to keep code scanning enabled.

## Code Security Risk Assessment (free inventory scan)

One click, CodeQL scans the **20 most active repos** in your org and shows where the vulnerabilities are. **No GHAS / Code Security license needed, completely free** (GA April 2026).

- 🔎 **Scope** — up to 20 repos with the most recent commits, re-selectable each run
- 📊 **Output** — report by **severity, language, rule type**, plus **how many Copilot Autofix can fix**
- 🕒 **Frequency** — re-runnable **once every 90 days**; org owners / security managers only
- 🚀 **How to run** — `Org → Security → Assessments → Run code security risk assessment`
- 🆓 **Cost** — no license, no Actions minutes — ideal for evaluating Code Security before buying

> 📊 Pair this with Secret Risk Assessment (see <a class="retro-link" href="/theomonfort/en/playbook/secret-scanning">Secret Scanning ↗</a>) and you get a full posture read in a single day, then decide on **Code Security** with real numbers.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment ↗</a> / <a class="retro-link" href="https://github.blog/security/application-security/how-exposed-is-your-code-find-out-in-minutes-for-free/" target="_blank" rel="noopener noreferrer">How exposed is your code? ↗</a>
