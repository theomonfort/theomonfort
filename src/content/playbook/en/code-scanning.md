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
  hex: "#5eead4"
order: 19.5
category: secure
related: ['code-quality', 'github-advanced-security', 'dependabot', 'secret-scanning']
links:
  - group: 📖 Official Documentation
    label: About code scanning
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning
  - group: 📖 Official Documentation
    label: About AI Scan
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan
  - group: 📖 Official Documentation
    label: AI Scan for pull requests
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections
  - group: 📖 Official Documentation
    label: AI Scan for repositories
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories
  - group: 📖 Official Documentation
    label: AI applications scanning for pull requests
    url: https://docs.github.com/en/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests
  - group: 📰 Recent Changelog
    label: "AI Scan PR APIs (preview)"
    url: https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/
  - group: 📰 Recent Changelog
    label: "Repository AI Scan (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview
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
    label: Agentic Autofix access
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning
  - group: 📖 Official Documentation
    label: Copilot Autofix controls
    url: https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning
  - group: 📖 Official Documentation
    label: SARIF support for code scanning
    url: https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning
  - group: 🔬 Going deeper on CodeQL
    label: About CodeQL (CodeQL docs)
    url: https://codeql.github.com/docs/codeql-overview/about-codeql/
  - group: 🔬 Going deeper on CodeQL
    label: Writing CodeQL queries
    url: https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/
  - group: 🔬 Going deeper on CodeQL
    label: Data flow / taint tracking
    url: https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/
  - group: 🔬 Going deeper on CodeQL
    label: Open-source query packs
    url: https://github.com/github/codeql
  - group: 💰 Pricing
    label: Security plans ($30 / $19)
    url: https://github.com/security/plans
  - group: 💰 Pricing
    label: Billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 💰 Pricing
    label: Copilot credits (individual)
    url: https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing
  - group: 💰 Pricing
    label: Copilot credits (org pool)
    url: https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing
  - group: 💰 Pricing
    label: Billing for GitHub Actions
    url: https://docs.github.com/en/billing/concepts/product-billing/github-actions
  - group: 📖 Official Documentation
    label: Code security risk assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 📰 Recent Changelog
    label: "Autofix Memory (2026-09-25)"
    url: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/
  - group: 📰 Recent Changelog
    label: "Agentic Autofix GA (2026-10-15)"
    url: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
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

## Code scanning is not CodeQL <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Code scanning is the GitHub feature; CodeQL is one analysis engine.** AI Scan complements it on pull requests and the default branch, and third-party tools can supply SARIF results.

<div class="det-widget det-compact">
<p class="det-hint">▸ CLICK FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-name">Code scanning (the feature)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🖥️</span><span class="det-title">Code scanning — GitHub's surface</span></p>
<p class="det-why">The <b>feature</b> that collects results from <b>static analysis</b> (CodeQL, third-party tools) and <b>AI detections</b>, and surfaces them: Security tab alerts, inline PR comments, merge protection, Security overview, APIs. <b>Whatever the engine, results land here.</b></p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-name">CodeQL (the engine)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔬</span><span class="det-title">CodeQL — the analysis engine</span></p>
<p class="det-why">GitHub's default semantic analysis engine (<b>acquired from Semmle, 2019</b>). <b>CodeQL CLI</b> also runs locally or in other CI systems.</p>
<p class="det-why"><b>Supported languages:</b> C/C++, C#, Go, Java/Kotlin, JavaScript/TypeScript, Python, Ruby, Rust and Swift, plus <b>GitHub Actions workflows</b>.</p>
<p class="det-doc">As of 2026-10-23. <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/codeql/codeql-code-scanning#about-codeql" target="_blank" rel="noopener noreferrer">📘 Supported languages documentation ↗</a></p>
</div>
</details>
<details class="det-pick" name="cs-vs-codeql">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI Scan</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">AI Scan</span></p>
<ul class="list-disc text-[0.86em] leading-[1.7] !my-0">
<li><b>PRs (GA):</b> Changes outside CodeQL coverage; automatic, advisory.</li>
<li><b>Repositories (preview):</b> Any language on the default branch; on demand, backlog alerts.</li>
<li><b>AI apps / agents (preview):</b> Indirect prompt injection in PRs.</li>
</ul>
<p class="det-doc">As of 2026-11-11. <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan" target="_blank" rel="noopener noreferrer">📘 Coverage and requirements ↗</a></p>
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
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>


## How CodeQL works <a class="h2-doc" href="https://codeql.github.com/docs/codeql-overview/about-codeql/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Extract code into a database**, then **compile and evaluate queries** against it.

<figure class="harness-map cs-architecture">
<svg viewBox="0 0 1100 365" role="img" aria-labelledby="cs-map-title cs-map-desc" xmlns="http://www.w3.org/2000/svg">
<title id="cs-map-title">CodeQL: extraction, then query evaluation</title>
<desc id="cs-map-desc">Source code or build monitoring feeds the extractor and database. The schema defines the database and feeds the compiler with queries and libraries. The evaluator combines a compiled, optimized query with the database to produce results. Build artifacts are separate.</desc>
<defs>
<marker id="cs-arrow" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="cs-arrowhead" /></marker>
<marker id="cs-data-arrow" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0 0L10 5L0 10Z" class="cs-data-arrowhead" /></marker>
</defs>
<text x="20" y="27" class="cs-stage">01 / CREATE THE DATABASE</text>
<text x="680" y="27" class="cs-stage">02 / RUN THE QUERY</text>
<path d="M650 40V350" class="cs-divider" />
<g class="cs-connect" marker-end="url(#cs-arrow)">
<path d="M100 110V160" />
<path d="M180 192H235" />
<path d="M395 192H415V267H435" />
<path d="M100 225V300" />
<path d="M755 90V107H880V125" />
<path d="M987 90V107H880V125" />
<path d="M880 177V230" />
<path d="M880 282V310" />
<path d="M180 85H315V160" stroke-dasharray="5 5" />
</g>
<g class="cs-connect cs-data-connect" marker-end="url(#cs-data-arrow)">
<path d="M522 125V235" />
<path d="M610 92H635V151H780" />
<path d="M610 267H700V256H780" />
</g>
<rect x="20" y="60" width="160" height="50" class="cs-node" />
<rect x="20" y="160" width="160" height="65" class="cs-node" />
<rect x="235" y="160" width="160" height="65" class="cs-node" />
<rect x="435" y="60" width="175" height="65" class="cs-node cs-data-node" />
<rect x="435" y="235" width="175" height="70" class="cs-node cs-data-node" />
<rect x="20" y="300" width="170" height="45" class="cs-node cs-artifacts" />
<rect x="680" y="50" width="150" height="40" class="cs-node" />
<rect x="900" y="50" width="175" height="40" class="cs-node" />
<rect x="780" y="125" width="200" height="52" class="cs-node" />
<rect x="780" y="230" width="200" height="52" class="cs-node" />
<rect x="780" y="310" width="200" height="50" class="cs-node" />
<g text-anchor="middle">
<text x="100" y="92">Codebase</text>
<text x="100" y="187">Build system</text><text x="100" y="212" class="cs-small">if build-enabled</text>
<text x="315" y="187">Extractor</text><text x="315" y="212" class="cs-small">code to data</text>
<text x="522" y="87">Schema</text><text x="522" y="112" class="cs-small">describes the data</text>
<text x="522" y="261">Database</text><text x="522" y="287" class="cs-small">exprs / stmts / types</text>
<text x="105" y="329">Build artifacts</text>
<text x="755" y="77">Query</text><text x="987" y="77">Libraries</text>
<text x="880" y="157">QL compiler</text><text x="880" y="262">QL evaluator</text>
<text x="880" y="341">Query results</text>
</g>
<text x="224" y="76" class="cs-small">source</text>
<text x="202" y="245" class="cs-small">monitors the build</text>
<text x="224" y="329" class="cs-small">Artifacts ≠ analysis database</text>
<text x="895" y="201" class="cs-small">Compiled query</text>
<text x="895" y="222" class="cs-small">(optimized)</text>
</svg>
</figure>

Extraction: source or build monitoring, depending on language and <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/codeql-for-compiled-languages" target="_blank" rel="noopener noreferrer">build mode ↗</a>.

## <span id="reading-a-codeql-query">Reading a CodeQL query</span> <a class="h2-doc" href="https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/" target="_blank" rel="noopener noreferrer">📖 Docs</a>

QL is declarative: **describe the bug; the evaluator finds matching instances**. Think SQL's `FROM / WHERE / SELECT`.

```ql
import java                                      // ① library
from IfStmt ifstmt, Block block                   // ② elements
where
  block = ifstmt.getThen() and                    // ③ constraints
  block.getNumStmt() = 0                          // empty then-branch
select ifstmt, "This if-statement is redundant." // ④ report
```

Security queries add <a class="retro-link" href="https://codeql.github.com/docs/writing-codeql-queries/about-data-flow-analysis/" target="_blank" rel="noopener noreferrer">DataFlow / TaintTracking ↗</a>: **unsanitized source → sink flows**. Start with the open-source <a class="retro-link" href="https://github.com/github/codeql" target="_blank" rel="noopener noreferrer">query packs ↗</a>; custom queries mainly model your framework's sources and sinks.

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
<div class="det-screen"><p class="det-empty">SELECT A CATEGORY ▸</p></div>
</div>
</div>

No CodeQL-supported language? **No CodeQL scans or Actions minutes**. See the language list on slide 2.

## Main capabilities <input type="checkbox" id="demo-codeql-setup" class="demo-toggle" /><label class="h2-demo" for="demo-codeql-setup">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-codeql-setup" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">CodeQL Advanced setup</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-codeql-setup" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">OPEN REPOSITORY SETTINGS</p>
<p>Open <a href="https://github.com/theomonfort-org/ghas-test-1/settings/security_analysis" target="_blank" rel="noopener noreferrer">ghas-test-1 → Advanced Security ↗</a> and show <b>Code scanning → CodeQL analysis</b>.</p>
<p>For an unconfigured repository, the entry point is <b>Set up → Advanced</b>. This demo repository already has a workflow, so open the existing file without switching setup types.</p>
</li>
<li>
<p class="demo-step-title">WALK THROUGH ADVANCED SETUP</p>
<p>Open <a href="https://github.com/theomonfort-org/ghas-test-1/blob/main/.github/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">codeql.yml ↗</a>. Show push / PR / schedule under <code class="demo-path">on</code>, the language <code class="demo-path">matrix</code>, and the runner under <code class="demo-path">runs-on</code>.</p>
<p>C/C++ uses <b>build-mode: manual</b> with <code class="demo-path">make -C src/c</code> / <code class="demo-path">make -C src/cpp</code>; the other languages use <b>none</b>. Point out <b>queries: security-and-quality</b> and the C/C++ <b>CERT / MISRA packs</b>.</p>
<p>These packs come from <a href="https://github.com/github/codeql-coding-standards" target="_blank" rel="noopener noreferrer">github/codeql-coding-standards ↗</a>: an example of extra query packs you can add (AUTOSAR C++14, CERT C/C++, MISRA C/C++).</p>
<p class="demo-out">Advanced setup controls the build and execution conditions through a <b>versioned Actions workflow</b>.</p>
</li>
<li>
<p class="demo-step-title">FROM CONFIGURATION TO RESULTS</p>
<p>Open an existing run under <a href="https://github.com/theomonfort-org/ghas-test-1/actions/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">Actions → CodeQL ↗</a>. Show the per-language <b>Analyze</b> jobs and their initialization, build, and analysis logs.</p>
<p>Finish at <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">Security → Code scanning ↗</a> to see the alerts.</p>
<p class="demo-out">No workflow edits or commits are needed for this walkthrough. Leave the existing scans enabled.</p>
</li>
</ol>
</div>
</div>

**Default setup first**; Advanced for custom builds.

<div class="det-widget">
<p class="det-hint">▸ SELECT A TOPIC FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🟢</span><span class="det-name">Default setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Default setup</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/setup-types" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">One click, org-wide</p>
<p class="det-why"><b>What it does:</b> <b>No workflow file.</b> Detects CodeQL languages, and adds new ones automatically as they appear</p>
<p class="det-why"><b>When it runs:</b> Pushes to the default or a <b>protected branch</b>, PRs targeting them, and a <b>weekly schedule</b></p>
<p class="det-why"><b>Rollout:</b> Apply a <b>security configuration</b> to every repo in the org at once</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧩</span><span class="det-name">Custom queries</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Custom queries</span><a class="ctl-doc" href="https://github.blog/changelog/2026-08-04-customize-code-scanning-default-setup-at-scale/" target="_blank" rel="noopener noreferrer">Changelog</a></p>
<p class="det-doc">Default setup + repo property</p>
<p class="det-why"><b>What it does:</b> Add your own queries (e.g. <b>coding standards</b>, in-house rules) <b>without switching to Advanced</b></p>
<p class="det-why"><b>How:</b> <code>github-codeql-config-file</code> merges a <b>central config file</b> (queries, paths, threat models). <code>github-codeql-extra-queries</code> only adds queries</p>
<p class="det-why"><b>Scope:</b> Set an <b>org-wide default</b>; org owners decide whether repos may override it. GA</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-name">Advanced setup</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Advanced setup</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configuring-advanced-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">Your own workflow</p>
<p class="det-why"><b>What it does:</b> You own <code>.github/workflows/codeql.yml</code>: <b>your own build</b> for compiled languages, matrix builds, triggers and schedule</p>
<p class="det-why"><b>Outside Actions:</b> Run the <b>CodeQL CLI</b> in another CI, or upload third-party results as <b>SARIF</b></p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🚧</span><span class="det-name">Merge protection</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Merge protection</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">Before PR merge</p>
<p class="det-why"><b>On the PR:</b> New alerts show up as annotations in <b>Files changed</b>, posted by <code>github-advanced-security[bot]</code></p>
<p class="det-why"><b>Merge gate:</b> Ruleset <b>Require code scanning results</b> blocks the merge on alerts of a chosen severity, or while the required tool has not finished</p>
<p class="det-why"><b>Scope:</b> Repo or Org (Enterprise plans). Without a ruleset, code scanning <b>never blocks a merge</b></p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI Scan</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">AI Scan</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">PRs / repositories / AI apps</p>
<ul class="list-disc text-[0.88em] leading-[1.6] !my-0">
<li><b>PRs (GA):</b> Changes outside CodeQL coverage; automatic, advisory.</li>
<li><b>Repositories (preview):</b> Any language on the default branch; on demand, backlog alerts.</li>
<li><b>AI apps / agents (preview):</b> Indirect prompt injection in PRs.</li>
</ul>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔧</span><span class="det-name">Copilot Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Copilot Autofix</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">On the alert or PR</p>
<p class="det-why"><b>What it does:</b> Suggests a patch from the alert, the surrounding code and CodeQL's <b>data-flow path</b></p>
<p class="det-why"><b>Where:</b> Inline on PRs; <b>Generate fix</b> on backlog alerts. You review and apply it</p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎯</span><span class="det-name">Agentic Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Agentic Autofix</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">1–25 backlog alerts</p>
<p class="det-why"><b>What it does:</b> <b>Assign to Copilot</b>: the cloud agent explores the repo, fixes, validates, then opens a <b>draft PR</b></p>
<p class="det-why"><b>Scope:</b> 1–25 default-branch backlog alerts, including campaigns. <b>GA since 2026-10-15</b></p>
</div>
</details>
<details class="det-pick" name="cs-capabilities">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🗺️</span><span class="det-name">Security campaigns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Security campaigns</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">Remediation at scale</p>
<p class="det-why"><b>What it does:</b> A <b>time-boxed</b> set of alerts (up to 1000) with a campaign manager and a due date</p>
<p class="det-why"><b>Flow:</b> Shows up in each repo's Security tab; developers fix with Autofix or Copilot</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>

## Why shift left: fix it in the PR

A vulnerability is cheapest to fix in the pull request that introduces it. Once merged, it becomes security debt, and debt rarely gets paid down.

<div class="tbl-compact">

| | 🟢 In the PR | 🔴 After merge |
| --- | --- | --- |
| 🧠 Context | Fresh in the author's head | Rediscovered weeks later |
| 🔁 Fix cost | One commit, same review | Ticket, PR, review, deploy |
| 🚀 Exposure | Never reaches production | Can ship and stay live until fixed |

</div>

- 📉 **Merged means forgotten**: historically, only **10%** of security debt in merged code gets addressed (<a class="retro-link" href="https://github.blog/security/application-security/found-means-fixed-reduce-security-debt-at-scale-with-github-security-campaigns/" target="_blank" rel="noopener noreferrer">GitHub&nbsp;data&nbsp;↗</a>)
- ⏱️ **In the PR, it is fast**: with Copilot Autofix, PR-time alerts were fixed in a median **28 min** vs **1.5 h** manually (<a class="retro-link" href="https://github.blog/news-insights/product-news/secure-code-more-than-three-times-faster-with-copilot-autofix/" target="_blank" rel="noopener noreferrer">GitHub,&nbsp;2024&nbsp;↗</a>)

## Copilot Autofix: suggested fixes <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Copilot Autofix can generate a **suggested patch for an eligible alert**. You review, test and apply it; a successful fix is not guaranteed.

- 🤖 **Input**: alert details, surrounding code and CodeQL's data-flow path inform the suggestion.
- 💬 **On pull requests**: supported alerts can receive inline suggestions automatically.
- 🛠️ **On default-branch backlog alerts with Agentic Autofix off**: **Generate fix → Create PR with fix**, if Copilot Autofix is enabled and supports the alert.
- 🆓 **Cost**: no Copilot license or AI credits for classic Autofix. Included with Code Security; free on public repositories.
- 🔌 **Enablement**: allowed by default with CodeQL unless an administrator disables it.

## Agentic Autofix (GA) <a class="h2-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-code-scanning-pr" class="demo-toggle" /><label class="h2-demo" for="demo-code-scanning-pr">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-code-scanning-pr" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Agentic Autofix: settings to alerts</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-code-scanning-pr" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">1. ALLOW AT ENTERPRISE LEVEL, IF APPLICABLE</p>
<p>An enterprise owner or security manager opens <code class="demo-path">Policies → Advanced Security → Agentic Autofix</code> and selects <code class="demo-path">All organizations: Allowed</code>. Skip this for a standalone organization. <a href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Setup docs ↗</a></p>
<p class="demo-out">Allowed grants permission to configure the feature; it does not enable any organization. Confirm the billing method and Code Security AI Credits budget before rollout.</p>
</li>
<li>
<p class="demo-step-title">2. SHOW THE TWO ORGANIZATION SETTINGS</p>
<p>Open <a href="https://github.com/organizations/theomonfort-org/settings/security_analysis" target="_blank" rel="noopener noreferrer">theomonfort-org Advanced Security settings ↗</a> as an organization owner or security manager. In <b>Global settings → Code scanning</b>, locate <b>Copilot Autofix</b> and <b>Agentic Autofix</b>.</p>
<p><b>Copilot Autofix</b> controls classic suggestions. To enable agent remediation, set <code class="demo-path">Agentic Autofix → On</code>. Preview users must enable it again after GA.</p>
<p class="demo-out">Turning this on enables Agentic Autofix for eligible repositories by default, not just the demo repo. Show the control without toggling it unless an organization-wide rollout is intended.</p>
</li>
<li>
<p class="demo-step-title">3. CHECK THE REPOSITORY OVERRIDE</p>
<p>In the chosen demo repository, open <code class="demo-path">Settings → Advanced Security → Code Security → Agentic Autofix</code>. A repository administrator can set it to <b>Off</b> to opt out, or <b>On</b> if higher-level settings permit. Keep <b>Copilot Autofix</b> on if you want classic suggestions too.</p>
<p class="demo-out">With Agentic Autofix enabled, users with write access can assign default-branch backlog alerts. No Copilot license is required. Enabling the setting alone does not start a repair session.</p>
</li>
<li>
<p class="demo-step-title">THE SECURITY BOT ON A PR</p>
<p>Open <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57" target="_blank" rel="noopener noreferrer">octodemo/octocat_supply-automatic-octo-funicular#57 ↗</a>. In <b>Files changed</b>, show the comments from <code class="demo-path">github-advanced-security[bot]</code>.</p>
<p class="demo-out">These findings are separate from Copilot code review. Keep this deliberately vulnerable demo PR unmerged.</p>
</li>
<li>
<p class="demo-step-title">TELL CODEQL AND AI FINDINGS APART</p>
<p>The <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57#discussion_r3976259388" target="_blank" rel="noopener noreferrer">CodeQL XSS comment ↗</a> is on <code class="demo-path">api/src/routes/cart.ts</code>. Show the rule title and follow <b>Show more details</b> to the Security alert.</p>
<p>For <code class="demo-path">CartShareController.php</code>, show the risk explanation and fix advice in the <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57#discussion_r3976270848" target="_blank" rel="noopener noreferrer">AI SQL injection comment ↗</a> and <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/pull/57#discussion_r3976270856" target="_blank" rel="noopener noreferrer">command injection comment ↗</a>.</p>
<p class="demo-out">These <b>AI Scan for pull requests</b> findings stay on the PR. The separate <b>AI Scan for repositories</b> creates backlog alerts in Security.</p>
</li>
<li>
<p class="demo-step-title">FROM FINDING TO AGENTIC AUTOFIX</p>
<p>The linked PR is in <b>octodemo</b>, so theomonfort-org settings do not apply to it. Open the <a href="https://github.com/octodemo/octocat_supply-automatic-octo-funicular/security/code-scanning/33" target="_blank" rel="noopener noreferrer">CodeQL XSS alert ↗</a> only as a reference. For remediation, choose an existing <b>default-branch backlog alert</b> in the configured demo repository; a PR-only alert cannot be assigned.</p>
<p>Show <b>Assign to Copilot</b> when Agentic Autofix is enabled. With it off, <b>Generate fix</b> is available only if classic Copilot Autofix is enabled and supports the alert.</p>
<p class="demo-out">A bot finding is not a remediation session. Invoking <b>Assign to Copilot</b> starts the agent's repair work and produces a <b>separate draft PR</b>. You can show the entry point without starting a session.</p>
</li>
</ol>
</div>
</div>

**GA since 2026-10-15.** When Agentic Autofix is enabled, **Assign to Copilot replaces Generate fix** on default-branch backlog alerts.

<div class="det-widget">
<p class="det-hint">▸ SELECT A TOPIC FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🎯</span><span class="det-name">Assign</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Assign</span></p>
<p class="det-doc">1–25 alerts</p>
<p class="det-why"><b>Scope:</b> <b>1–25 default-branch backlog alerts</b>, including campaigns. One assignment → one session → one PR. <b>No PR-only or other-branch-only alerts</b></p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔁</span><span class="det-name">Agent session</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Agent session</span></p>
<p class="det-doc">Draft PR</p>
<p class="det-why"><b>Flow:</b> Explore → fix → rerun CodeQL and iterate → <b>draft PR</b> with validation details. Review the session log; request changes in the session or PR comments</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧠</span><span class="det-name">Copilot Memory</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Copilot Memory</span><a class="ctl-doc" href="https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory/" target="_blank" rel="noopener noreferrer">Changelog</a></p>
<p class="det-doc">Learns fix patterns</p>
<p class="det-why"><b>Reads:</b> Existing repository memories for context, when Copilot Memory is enabled</p>
<p class="det-why"><b>Writes:</b> Each fix pattern as a new memory. <b>Copilot code review and cloud agent</b> learn your secure patterns from it too</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛂</span><span class="det-name">Requirements</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Requirements</span></p>
<p class="det-doc">No Copilot license</p>
<p class="det-why"><b>Access:</b> GA for Code Security / GHAS customers on Enterprise Cloud, including data residency. Current docs also cover eligible personal public repos; managed-user personal repos are excluded</p>
<p class="det-why"><b>Needs:</b> <b>Agentic Autofix enabled</b>, a configured billing method and repository write access. <b>No Copilot license or pre-generated suggestion required</b>. Settings on the next slide</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">💸</span><span class="det-name">Cost</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Cost</span></p>
<p class="det-doc">AI credits + Actions</p>
<p class="det-why"><b>Agentic:</b> <b>Code Security AI Credits + Actions minutes</b>, including public repos. Usage appears under <b>Advanced Security</b> in billing's AI usage</p>
<p class="det-why"><b>Budget:</b> Eligible included credits are used first, then metered usage. Configure a <b>Code Security AI Credits</b> SKU budget</p>
</div>
</details>
<details class="det-pick" name="cs-agentic">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚠️</span><span class="det-name">Validation</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Validation</span></p>
<p class="det-doc">Best-effort</p>
<p class="det-why"><b>Limits:</b> Cannot confirm fixes for custom queries, <code>security-extended</code> or third-party alerts. Unvalidated fixes or suspected false positives are noted in the PR. <b>Review and test before merging</b></p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>

## Autofix vs Agentic Autofix <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Two independent settings**, not a cloud-agent switch (2026-10-19).

<div class="det-widget">
<p class="det-hint">▸ SELECT A TOPIC FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">⚖️</span><span class="det-name">Compare</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Compare</span></p>
<p class="det-doc">Suggestion vs agent</p>
<p class="det-why"><b>Classic:</b> One suggested patch for a supported alert; you review and apply it. <b>No AI credits</b></p>
<p class="det-why"><b>Agentic:</b> Investigates, fixes and validates <b>1–25 default-branch backlog alerts</b>; opens a draft PR. <b>Code Security AI Credits + Actions</b>. Neither type needs a Copilot license</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏢</span><span class="det-name">Enterprise</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Enterprise</span></p>
<p class="det-doc">Allow ≠ enable</p>
<p class="det-why"><b>Where:</b> <b>Policies → Advanced Security → Agentic Autofix → All organizations: Allowed</b>. Enterprise owner or security manager</p>
<p class="det-why"><b>Effect:</b> Allows organizations to configure it; enables <b>no repositories by itself</b>. <b>Copilot Autofix</b> has a separate policy. Skip this level for standalone organizations</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏗️</span><span class="det-name">Organization</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Organization</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">Enable eligible repos</p>
<p class="det-why"><b>Where:</b> <b>Settings → Advanced Security → Global settings → Code scanning → Agentic Autofix → On</b>. Organization owner or security manager</p>
<p class="det-why"><b>Effect:</b> Enables eligible repositories <b>by default</b>. Coordinate opt-outs first. An enterprise block cannot be overridden here</p>
<p class="det-why">⚠️ Preview users must <b>enable Agentic Autofix again after GA</b>.</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📦</span><span class="det-name">Repository</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Repository</span></p>
<p class="det-doc">Opt out / re-enable</p>
<p class="det-why"><b>Where:</b> <b>Settings → Advanced Security → Code Security → Agentic Autofix → On / Off</b>. Repository administrator</p>
<p class="det-why"><b>Effect:</b> Can opt out or re-enable only when parent settings permit. Eligible personal public repos configure this directly; managed-user personal repos are excluded</p>
</div>
</details>
<details class="det-pick" name="cs-fix-vs">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔧</span><span class="det-name">Which button?</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Which button?</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/disabling-copilot-autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">Separate controls</p>
<p class="det-why"><b>Agentic on:</b> <b>Assign to Copilot</b> on default-branch backlog alerts. Assignment starts the metered session, not enablement</p>
<p class="det-why"><b>Agentic off:</b> <b>Generate fix → Create PR with fix</b> only if Copilot Autofix is on and supports the alert. Both off: no AI fix entry point</p>
<p class="det-why"><b>Classic:</b> <b>Copilot Autofix</b> is on by default with CodeQL and has its own cascading controls at the same settings levels. Its PR suggestions remain separate from agent remediation</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>

## <span id="security-campaigns--drive-remediation-at-scale">Security Campaigns at scale</span> <a class="h2-doc" href="https://docs.github.com/en/code-security/securing-your-organization/fixing-security-alerts-at-scale/about-security-campaigns" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Turn the backlog into a **time-boxed campaign**, with an owner and a deadline.

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
<p class="rem-why">With <b>Agentic Autofix enabled</b>, select <b>1–25 default-branch backlog alerts</b> and assign them to Copilot. This consumes <b>Code Security AI Credits + Actions minutes</b>.</p>
<p class="rem-why">For the rest, <b>batch apply</b> the Autofix suggestions on the PR. The dashboard burns down open / fixed / overdue as you go.</p>
</div>
</details>
</div>
<div class="rem-screen"><p class="rem-empty">SELECT A STEP ▸</p></div>
</div>
</div>

## My recommended starting checklist <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-code-checklist" class="demo-toggle" /><label class="h2-demo" for="demo-code-checklist">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-code-checklist" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Code Scanning checklist</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-code-checklist" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">1. ENABLEMENT AND COVERAGE</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/security_analysis" target="_blank" rel="noopener noreferrer">ghas-test-1 → Advanced Security ↗</a> / <a href="https://github.com/theomonfort-org/ghas-test-1/actions/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">CodeQL runs ↗</a>: inspect the existing Advanced setup and language jobs. Do not switch this configured repository to Default setup.</p>
</li>
<li>
<p class="demo-step-title">2. EXTRA QUERY PACKS</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/blob/main/.github/workflows/codeql.yml" target="_blank" rel="noopener noreferrer">ghas-test-1 → codeql.yml ↗</a> / <a href="https://github.com/github/codeql-coding-standards" target="_blank" rel="noopener noreferrer">MISRA / CERT / AUTOSAR packs ↗</a>: show how the workflow configures additional queries and packs.</p>
</li>
<li>
<p class="demo-step-title">3. MERGE PROTECTION</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/rules/new?target=branch&amp;enforcement=disabled" target="_blank" rel="noopener noreferrer">ghas-test-1 → New branch ruleset ↗</a>: <b>Require code scanning results → CodeQL</b>. Example: <b>Security alerts: High or higher</b>, <b>Alerts: Errors</b>, target <code class="demo-path">main</code>. Keep it disabled for a walkthrough.</p>
</li>
<li>
<p class="demo-step-title">4. AI SCAN</p>
<p><a href="https://github.com/enterprises/octodemo" target="_blank" rel="noopener noreferrer">octodemo ↗</a> → <b>Policies → Advanced Security → AI Scan</b>, then <a href="https://github.com/organizations/theomonfort-org/settings/security_analysis" target="_blank" rel="noopener noreferrer">theomonfort-org → Global settings ↗</a>. Show the separate controls: <b>AI Scan for pull requests</b>, <b>AI Scan for repositories</b>, and <b>Scan for AI applications</b>.</p>
<p>For repository scans, open <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">Security and quality → Code scanning ↗</a> → <b>AI Scan</b> (top right) → <b>Standard scan</b>. Findings appear in this alert list; filter by the <b>AI Scan</b> tool.</p>
<p class="demo-out">Confirm enterprise permission and the Code Security AI Credits budget. Organization controls affect all eligible repositories. Show the controls and scan menu without toggling settings or starting a paid scan.</p>
</li>
<li>
<p class="demo-step-title">5. ASSISTED REMEDIATION</p>
<p><a href="https://github.com/organizations/theomonfort-org/settings/security_analysis" target="_blank" rel="noopener noreferrer">theomonfort-org → Autofix settings ↗</a>: show the separate <b>Copilot Autofix</b> and <b>Agentic Autofix</b> controls. Check enterprise permission before enabling Agentic Autofix.</p>
<p><a href="https://github.com/theomonfort-org/ghas-test-1/settings/security_analysis" target="_blank" rel="noopener noreferrer">ghas-test-1 → Repository override ↗</a> / <a href="https://github.com/theomonfort-org/ghas-test-1/security/code-scanning" target="_blank" rel="noopener noreferrer">Code scanning alerts ↗</a></p>
</li>
<li>
<p class="demo-step-title">6. SECURITY CAMPAIGNS</p>
<p><a href="https://github.com/orgs/theomonfort-org/security/campaigns" target="_blank" rel="noopener noreferrer">theomonfort-org → Campaigns ↗</a>: <b>Create campaign → From code scanning filters</b>. Scope to <b>ghas-test-1</b>, choose a manager and due date, then save as a draft.</p>
</li>
</ol>
</div>
</div>

Verify coverage, protect PRs, then fix the backlog. Replace `ORG`, `OWNER`, `REPO` in URL templates.

<div class="det-widget">
<p class="det-hint">▸ SELECT A TOPIC FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-1" /><span class="det-icon" aria-hidden="true">1</span><span class="det-name" id="cs-start-1">CodeQL coverage</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Enable CodeQL and verify coverage</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">ACTIVATE</p>
<p class="det-why"><b>Start:</b> <a class="retro-link" href="https://github.com/OWNER/REPO/settings/security_analysis" target="_blank" rel="noopener noreferrer">CodeQL settings ↗</a>: start with <b>Default setup</b>. Check the first scan, languages and Actions usage before rolling out with security configurations.</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-2" /><span class="det-icon" aria-hidden="true">2</span><span class="det-name" id="cs-start-2">Query packs</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Add extra query packs if needed</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#specifying-codeql-query-packs" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">OPTIONAL</p>
<p class="det-why"><b>Customize:</b> <a class="retro-link" href="https://github.com/OWNER/REPO/settings/security_analysis" target="_blank" rel="noopener noreferrer">CodeQL configuration ↗</a>: add <a class="retro-link" href="https://github.com/github/codeql-coding-standards" target="_blank" rel="noopener noreferrer">MISRA / CERT / AUTOSAR packs ↗</a> for C/C++, or internal queries. Adapt the configuration to your build.</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-3" /><span class="det-icon" aria-hidden="true">3</span><span class="det-name" id="cs-start-3">Merge protection</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Block high-risk findings before merge</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/manage-your-configuration/set-merge-protection" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">RULESETS</p>
<p class="det-why"><b>Example:</b> <a class="retro-link" href="https://github.com/OWNER/REPO/settings/rules" target="_blank" rel="noopener noreferrer">Rulesets ↗</a>: <b>Require code scanning results</b> (CodeQL). <b>Security alerts: High or higher</b>; <b>Alerts: Errors</b>. Target <code>main</code> and restrict bypass.</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-4" /><span class="det-icon" aria-hidden="true">4</span><span class="det-name" id="cs-start-4">AI Scan</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Choose your AI Scan coverage</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan#managing-ai-scan" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">AI SCAN</p>
<p class="det-why"><b>Opt in:</b> <a class="retro-link" href="https://github.com/organizations/ORG/settings/security_analysis" target="_blank" rel="noopener noreferrer">Org settings ↗</a>: check enterprise permission, each feature's eligibility and <b>AI credits</b> budget. Enable <b>PR scanning</b>, <b>repository scanning</b>, and <b>Scan for AI applications</b> separately; repositories can opt out.</p>
<p class="det-why"><b>Run:</b> PR detectors run automatically and are advisory. Repository scans run on demand from <b>Code scanning → AI Scan</b>, across all languages on the default branch, including CodeQL-supported ones. They select code within a fixed budget, not every file. <b>CodeQL default setup is not required</b> for AI Scan.</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-5" /><span class="det-icon" aria-hidden="true">5</span><span class="det-name" id="cs-start-5">Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Set up assisted remediation</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">AUTOFIX</p>
<p class="det-why"><b>Prepare:</b> <a class="retro-link" href="https://github.com/organizations/ORG/settings/security_analysis" target="_blank" rel="noopener noreferrer">Org settings ↗</a>: classic Autofix is on with CodeQL unless disabled. Optionally enable <b>Agentic Autofix</b> for draft PRs; budget AI credits + Actions.</p>
</div>
</details>
<details class="det-pick" name="cs-start">
<summary class="det-btn"><input type="checkbox" class="ctl-check" aria-labelledby="cs-start-6" /><span class="det-icon" aria-hidden="true">6</span><span class="det-name" id="cs-start-6">Campaigns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-title">Create security campaigns</span><a class="ctl-doc" href="https://docs.github.com/en/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/creating-managing-security-campaigns" target="_blank" rel="noopener noreferrer">Docs</a></p>
<p class="det-doc">CAMPAIGNS</p>
<p class="det-why"><b>Remediate:</b> <a class="retro-link" href="https://github.com/orgs/ORG/security/campaigns" target="_blank" rel="noopener noreferrer">Campaigns ↗</a>: select code scanning alerts, prioritize risk, set a manager and due date. Start with a small backlog.</p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
</div>

## <span id="advanced-setup-and-sarif">Advanced setup and SARIF</span> <a class="h2-doc" href="https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning" target="_blank" rel="noopener noreferrer">📖 Docs</a>

For monorepos, custom builds or another SAST tool, own the workflow.

<div class="grid md:grid-cols-2 gap-4 example-columns">
<div>

### 1. Triggers and job

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
```

</div>
<div>

### 2. Analysis steps (continued)

```yaml
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}
          queries: security-extended
      - uses: github/codeql-action/analyze@v3

      # After your third-party tool creates results.sarif:
      - uses: github/codeql-action/upload-sarif@v3
        with: { sarif_file: results.sarif }
```

</div>
</div>

**SARIF:** other SAST results, same UI. **Self-hosted:** no Actions-minute fees.

## Pricing: three meters <a class="h2-doc" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="det-widget">
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="cs-meter">
<summary class="det-btn"><span class="det-name">💺 License</span></summary>
<div class="det-pane spec-widget spec-compact">
<p class="det-why"><b>$30 / active committer / month</b><br>GitHub Code Security</p>
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
</div>
</details>
<details class="det-pick" name="cs-meter">
<summary class="det-btn"><span class="det-name">⚙️ Actions minutes</span></summary>
<div class="det-pane spec-widget spec-compact">
<p class="det-why">CodeQL <b>runs on Actions</b>. Private scans consume minutes; overages are billed.</p>
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
</div>
</details>
<details class="det-pick" name="cs-meter">
<summary class="det-btn"><span class="det-name">🤖 AI credits</span></summary>
<div class="det-pane spec-widget spec-compact">
<p class="det-why"><b>AI Scan + Agentic Autofix:</b> metered. Classic Autofix suggestions: free.</p>
<div class="spec-list">
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🔎</span><span class="spec-key">AI Scan</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>2026-11-11:</b> automatic PR and on-demand repository scans use <b>Code Security AI Credits</b>, even without a fix. Neither needs a Copilot license. <b>Org-owned repo: org / enterprise billing, not the initiating user's personal credits.</b> <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-scan-for-repositories#billing" target="_blank" rel="noopener noreferrer">Scan billing ↗</a>. The separate AI applications detector has its own <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/ai-applications-scanning-for-pull-requests#billing" target="_blank" rel="noopener noreferrer">license / credit requirements ↗</a>.</p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">🆓</span><span class="spec-key">Copilot Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what">Classic suggestions, including <b>Generate fix → Create PR with fix</b>, consume <b>no AI credits</b>. No Copilot license required; included with Code Security and free on public repos. <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning#choosing-an-autofix-type" target="_blank" rel="noopener noreferrer">Docs ↗</a></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">💸</span><span class="spec-key">Agentic Autofix</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>2026-10-26:</b> <b>Security → Assign to Copilot</b> or campaign assignment uses <b>Code Security AI Credits + Actions minutes</b>. <b>Org-owned repo: org / enterprise billing, not your personal credits</b>, even for your own assignments. No Copilot license required. Set a <b>Code Security AI Credits</b> SKU budget. <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security#how-ai-feature-usage-is-billed" target="_blank" rel="noopener noreferrer">Billing ↗</a></p>
</details>
<details class="spec-item" name="cs-billing">
<summary class="spec-btn"><span class="spec-icon" aria-hidden="true">👤</span><span class="spec-key">Copilot Chat / agent</span><span class="spec-toggle" aria-hidden="true"></span></summary>
<p class="spec-what"><b>Copilot Chat / regular cloud-agent tasks</b> fixing vulnerabilities are Copilot usage, not Agentic Autofix. They use <b>your Copilot plan's AI credits</b>: an individual allowance, or the <b>shared org / enterprise pool</b> on Business / Enterprise. <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing" target="_blank" rel="noopener noreferrer">Individual ↗</a> / <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing" target="_blank" rel="noopener noreferrer">Organization ↗</a></p>
</details>
</div>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TOPIC ▸</p></div>
</div>
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

## <span id="code-security-risk-assessment-free-inventory-scan">Code Security Risk Assessment (free inventory scan)</span> <a class="h2-doc" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<a class="retro-link" href="https://github.blog/security/application-security/how-exposed-is-your-code-find-out-in-minutes-for-free/" target="_blank" rel="noopener noreferrer"><strong>Free CodeQL inventory ↗</strong></a>, without a GHAS / Code Security license (GA April 2026).

- 🔎 **Scope** — up to 20 repos with the most recent commits, re-selectable each run
- 📊 **Output** — report by **severity, language, rule type**, plus **how many Copilot Autofix can fix**
- 🕒 **Frequency** — re-runnable **once every 90 days**; org owners / security managers only
- 🚀 **How to run** — `Org → Security → Assessments → Run code security risk assessment`
- 🆓 **Cost**: no license or Actions minutes

Pair with <a class="retro-link" href="/theomonfort/en/playbook/secret-scanning">Secret Risk Assessment ↗</a> to evaluate Code Security using measured risk.
