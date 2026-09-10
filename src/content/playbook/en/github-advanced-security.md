---
title: GitHub Advanced Security
titleEn: GHAS
summary: GitHub's paid security suite, sold as two products. Secret Protection ($19) keeps credentials out of the repo, Code Security ($30) finds vulnerabilities in the code. Billed per active committer. Public repos are free.
icon: /theomonfort/icons/ghas.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.3
category: secure
related: ['secret-scanning', 'code-scanning', 'dependabot']
links:
  - group: 📖 Official Documentation
    label: GitHub Advanced Security home
    url: https://github.com/security/advanced-security
  - group: 📖 Official Documentation
    label: About GitHub Advanced Security
    url: https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security
  - group: 📖 Official Documentation
    label: GitHub security features (free vs licensed)
    url: https://docs.github.com/en/code-security/getting-started/github-security-features
  - group: 💰 Billing & free inventory
    label: About billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 💰 Billing & free inventory
    label: Secret Risk Assessment
    url: https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk
  - group: 💰 Billing & free inventory
    label: Code Security Risk Assessment
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🏢 Enterprise rollout
    label: Creating a custom security configuration
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration
  - group: 🏢 Enterprise rollout
    label: Applying a custom security configuration
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration
  - group: 🏢 Enterprise rollout
    label: Code scanning merge protection
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection
  - group: 📊 Visibility (Security overview)
    label: Security overview
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview
  - group: 📊 Visibility (Security overview)
    label: Exporting data from security overview (CSV)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>GitHub Advanced Security (GHAS)</strong> is GitHub's paid security suite. It scans your repositories for two things developers leak by accident: <strong>credentials</strong> and <strong>vulnerable code</strong>.
  </p>
  <p>
    It comes as two products you buy separately — <strong>Secret Protection</strong> and <strong>Code Security</strong>.
  </p>
</div>

## Why now

AI writes code faster than any review process was designed to absorb — and attackers reach the same models defenders do. Two curves moving in opposite directions.

<div class="duo-fig">
<div class="duo-panel is-alert">
<p class="duo-cap">4x+ increase in Dependabot alerts</p>
<p class="duo-sub">New alerts created across GitHub, per quarter.</p>
<div class="qbars">
<div class="qbar"><div class="qbar-fill" style="height:14.6%"><span class="qbar-val">52M</span></div><p class="qbar-lab">Q1 25</p></div>
<div class="qbar"><div class="qbar-fill" style="height:19.7%"><span class="qbar-val">70M</span></div><p class="qbar-lab">Q2 25</p></div>
<div class="qbar"><div class="qbar-fill" style="height:21.6%"><span class="qbar-val">77M</span></div><p class="qbar-lab">Q3 25</p></div>
<div class="qbar"><div class="qbar-fill" style="height:23.1%"><span class="qbar-val">82M</span></div><p class="qbar-lab">Q4 25</p></div>
<div class="qbar is-peak"><div class="qbar-fill" style="height:100.0%"><span class="qbar-val">357M</span></div><p class="qbar-lab">Q1 26</p></div>
<div class="qbar is-peak"><div class="qbar-fill" style="height:87.7%"><span class="qbar-val">313M</span></div><p class="qbar-lab">Q2 26</p></div>
</div>
<p class="duo-foot">The 2025 baseline sat steadily around <strong>70–80M</strong>, then jumped. CVE alerts platform-wide are up <strong>6x</strong> since February 2026.</p>
</div>
<div class="duo-panel">
<p class="duo-cap">From vulnerability to exploitation</p>
<p class="duo-sub">Mean gap between CVE public disclosure and first confirmed in-the-wild exploitation.</p>
<div class="tte">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 292" role="img" aria-label="Mean time from CVE disclosure to first confirmed exploitation, 2018 to 2026">
<line x1="52.0" y1="70.6" x2="574.0" y2="70.6" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="76.6" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">1y</text>
<line x1="52.0" y1="146.6" x2="574.0" y2="146.6" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="152.6" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">1mo</text>
<line x1="52.0" y1="190.8" x2="574.0" y2="190.8" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="196.8" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">7d</text>
<line x1="52.0" y1="250.0" x2="574.0" y2="250.0" stroke="rgba(0,240,255,0.13)" stroke-width="1.2"/>
<text x="42.0" y="256.0" text-anchor="end" font-size="17" fill="rgba(232,244,255,0.4)">1d</text>
<polyline points="52.0,45.3 117.2,54.5 182.5,62.6 247.8,76.2 313.0,80.7 378.2,102.5 443.5,129.3 508.8,156.7 574.0,250.0" fill="none" stroke="#00f0ff" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" opacity="0.25"/>
<polyline points="52.0,45.3 117.2,54.5 182.5,62.6 247.8,76.2 313.0,80.7 378.2,102.5 443.5,129.3 508.8,156.7 574.0,250.0" fill="none" stroke="#00f0ff" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="52.0" cy="45.3" r="4.6" fill="#e8f4ff"/>
<text x="52.0" y="31.3" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">2.3y</text>
<circle cx="117.2" cy="54.5" r="4.6" fill="#e8f4ff"/>
<text x="117.2" y="40.5" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">1.7y</text>
<circle cx="182.5" cy="62.6" r="4.6" fill="#e8f4ff"/>
<text x="182.5" y="48.6" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">1.3y</text>
<circle cx="247.8" cy="76.2" r="4.6" fill="#e8f4ff"/>
<text x="247.8" y="62.2" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">10mo</text>
<circle cx="313.0" cy="80.7" r="4.6" fill="#e8f4ff"/>
<text x="313.0" y="66.7" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">8.6mo</text>
<circle cx="378.2" cy="102.5" r="4.6" fill="#e8f4ff"/>
<text x="378.2" y="88.5" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">4.2mo</text>
<circle cx="443.5" cy="129.3" r="4.6" fill="#e8f4ff"/>
<text x="443.5" y="115.3" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">53d</text>
<circle cx="508.8" cy="156.7" r="4.6" fill="#e8f4ff"/>
<text x="508.8" y="142.7" text-anchor="middle" font-size="18" fill="rgba(232,244,255,0.82)">21.5d</text>
<circle cx="574.0" cy="250.0" r="6.5" fill="#ff2e88"/>
<text x="559.0" y="257.0" text-anchor="end" font-size="20" font-weight="700" fill="#ff7ab2">24h</text>
<text x="52.0" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2018</text>
<text x="117.2" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2019</text>
<text x="182.5" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2020</text>
<text x="247.8" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2021</text>
<text x="313.0" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2022</text>
<text x="378.2" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2023</text>
<text x="443.5" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2024</text>
<text x="508.8" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2025</text>
<text x="574.0" y="281" text-anchor="middle" font-size="17" fill="rgba(232,244,255,0.5)">2026</text>
</svg>
</div>
<p class="duo-foot">Based on 3,500+ confirmed-exploited CVEs (CISA KEV + VulnCheck KEV) · zerodayclock.com</p>
</div>
</div>

## What it means for AppSec

"Shift left" used to mean the IDE. Now the IDE, the CLI, the app, and the pull request blend into one continuous surface that agents move across freely. That has two consequences.

<div class="imp2">
<div class="imp2-col">
<p class="imp2-k">🌊 Traditional security can't keep up</p>
<p class="imp2-v">The volume of new, AI-generated code outpaces what any traditional review process can inspect, and it arrives across many new surfaces at once. Gating at the pull request is already too late once an agent has propagated a change across repos.</p>
</div>
<div class="imp2-col">
<p class="imp2-k">⚡ Exploitation is faster than ever</p>
<p class="imp2-v">Attackers reach the same frontier models, and cost is no object. They find and weaponize risk faster than defenders can triage it, and supply chain attacks move faster than any human review cycle.</p>
</div>
</div>

## How GHAS answers it

Scanning tools normally live outside the platform: a separate console, a separate backlog, and findings that reach the developer days after the code was written. GHAS puts all four steps where the code already is.

<div class="rem-widget">
<p class="rem-hint">▸ CLICK A STEP FOR DETAILS</p>
<div class="rem-flow">
<div class="rem-row">
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🔎</span><span class="rem-name">FIND</span></summary>
<div class="rem-plate">
<p class="rem-title">🔎 FIND — what is already there</p>
<p class="rem-why">Scans the <b>full git history</b> and every branch for leaked credentials, and builds a queryable database of the code to trace vulnerable data flows.</p>
<p class="rem-why">Runs across every repository in the org without asking a single team to install or configure anything.</p>
</div>
</details>
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🚧</span><span class="rem-name">PREVENT</span></summary>
<div class="rem-plate">
<p class="rem-title">🚧 PREVENT — before it lands</p>
<p class="rem-why"><b>Push protection</b> rejects the push carrying a secret, so it never reaches the remote and never needs rotating.</p>
<p class="rem-why">A <b>ruleset</b> can hold a pull request until code scanning comes back clean, so the gate is a repository rule rather than a reviewer remembering.</p>
</div>
</details>
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🔧</span><span class="rem-name">FIX</span></summary>
<div class="rem-plate">
<p class="rem-title">🔧 FIX — in the pull request</p>
<p class="rem-why">Alerts arrive as <b>annotations on the diff</b>, not as tickets in another tool the developer has to go open.</p>
<p class="rem-why"><b>Copilot Autofix</b> proposes an actual patch with an explanation, so the developer reviews a change instead of first researching the vulnerability class.</p>
</div>
</details>
<details class="rem-slot" name="ghas-answer">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">📊</span><span class="rem-name">PROVE</span></summary>
<div class="rem-plate">
<p class="rem-title">📊 PROVE — across the enterprise</p>
<p class="rem-why">One <b>security configuration</b> applies to every org and repo, including ones created tomorrow.</p>
<p class="rem-why"><b>Security overview</b> reports which repos are covered, which are not, and how the backlog is trending, so coverage is a number rather than an assumption.</p>
</div>
</details>
</div>
<div class="rem-screen"><p class="rem-empty">SELECT A STEP ▸</p></div>
</div>
</div>

## What's inside <a class="h2-doc" href="https://docs.github.com/en/code-security/getting-started/github-security-features" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Three scanning engines across the two products. Chips mark free versus licensed.

<div class="trio-widget">
<input class="trio-radio" type="radio" name="ghas-inside" id="gi-secret" checked />
<input class="trio-radio" type="radio" name="ghas-inside" id="gi-code" />
<input class="trio-radio" type="radio" name="ghas-inside" id="gi-dep" />
<div class="trio-bar">
<label class="trio-tab" for="gi-secret"><span class="trio-name"><span class="trio-icon" aria-hidden="true">🔑</span>Secret scanning</span><span class="trio-prod">SECRET PROTECTION · $19</span></label>
<label class="trio-tab" for="gi-code"><span class="trio-name"><span class="trio-icon" aria-hidden="true">🔍</span>Code scanning</span><span class="trio-prod">CODE SECURITY · $30</span></label>
<label class="trio-tab" for="gi-dep"><span class="trio-name"><span class="trio-icon" aria-hidden="true">📦</span>Dependabot</span><span class="trio-prod">CODE SECURITY · $30</span></label>
</div>
<div class="trio-panels">

<div class="trio-panel">
<div class="trio-row"><p class="trio-k">Secret scanning</p><p class="trio-v">Scans the <b>entire git history</b> and every push against <b>200+ provider patterns</b>. <b>Validity checks</b> confirm whether a leaked token is still live.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">Push protection</p><p class="trio-v">Rejects the push carrying the secret, so it never reaches the remote and never needs rotating.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">AI-detected secrets</p><p class="trio-v">Catches <b>unstructured</b> credentials no regex describes: passwords in config, secrets in prose.</p><p class="trio-t"><span class="trio-chip is-paid">LICENSED ONLY</span></p></div>
<div class="trio-row"><p class="trio-k">Custom patterns</p><p class="trio-v">Your own token formats: internal services, legacy credentials, conventions no partner registers.</p><p class="trio-t"><span class="trio-chip is-paid">LICENSED ONLY</span></p></div>
<div class="trio-row"><p class="trio-k">Delegated bypass</p><p class="trio-v">Turns bypassing push protection into an approval request routed to a named reviewer group.</p><p class="trio-t"><span class="trio-chip is-paid">LICENSED ONLY</span></p></div>
</div>

<div class="trio-panel">
<div class="trio-row"><p class="trio-k">Code scanning (CodeQL)</p><p class="trio-v">Compiles the code into a <b>queryable database</b> and traces data flow into dangerous sinks: injection, path traversal, deserialization.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">Copilot Autofix</p><p class="trio-v">Turns an alert into a <b>suggested diff with an explanation</b> on the pull request. This is what moves remediation rates.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">AI-powered detections</p><p class="trio-v">An AI engine covering languages and frameworks CodeQL has no queries for, during pull request review.</p><p class="trio-t"><span class="trio-chip is-paid">LICENSED ONLY</span></p></div>
<div class="trio-row"><p class="trio-k">Third-party SARIF</p><p class="trio-v">Any scanner emitting SARIF uploads into the same alert list: one backlog, one dashboard.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">Security campaigns</p><p class="trio-v">Slices the backlog into a <b>finishable list</b> with an owner and a due date, opened with the teams that own the code.</p><p class="trio-t"><span class="trio-chip is-paid">LICENSED ONLY</span></p></div>
</div>

<div class="trio-panel">
<div class="trio-row"><p class="trio-k">Dependency review</p><p class="trio-v">A pull request check showing which dependencies the change adds, removes, or upgrades, blocking the merge on a known vulnerability.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">Custom auto-triage rules</p><p class="trio-v">Your own rules to auto-dismiss or reopen Dependabot alerts at scale, so the backlog reflects real risk.</p><p class="trio-t"><span class="trio-chip is-free">FREE ON PUBLIC</span></p></div>
<div class="trio-row"><p class="trio-k">Security overview</p><p class="trio-v">Org-wide aggregation of supply chain risk and coverage, across every repository.</p><p class="trio-t"><span class="trio-chip is-paid">LICENSED ONLY</span></p></div>
</div>

</div>
<p class="trio-foot">🆓 The rest of the supply chain is <b>free on every plan</b>: dependency graph, Dependabot alerts, security and version updates, malware alerts, preset auto-triage rules, SBOM export.</p>
</div>

## Pricing <a class="h2-doc" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| Product | Price | Billing unit |
| --- | :---: | --- |
| 🔑 **GitHub Secret Protection** | **$19** / month | active committer |
| 🔍 **GitHub Code Security** | **$30** / month | active committer |
| 📦 Both together | $49 / month | active committer |

- 👥 **Active committer** = someone who pushed to a repo with the feature on in the past 90 days. Counted once across every repo and org; GitHub App bots don't count
- 🏷️ Sold on **GitHub Team** and **GitHub Enterprise**. On **Enterprise Server** and **GHE.com** every repository needs a licence
- 🌐 **Public repos get most features free, not all** — custom patterns, delegated bypass, AI-detected secrets, campaigns and Security overview still need a licence (<a class="retro-link" href="https://docs.github.com/en/code-security/getting-started/github-security-features" target="_blank" rel="noopener noreferrer">exact split ↗</a>)


## Pre-purchase inventory — Risk Assessments <a class="h2-doc" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Two free assessments run from **Org → Security → Assessments** and show what is already hiding in your repos. No licence, no trial, and you see the numbers before deciding to buy.

<div class="assess">
<div class="assess-card">
<p class="assess-name">🔑 Secret Risk Assessment</p>
<p class="assess-what">Types and count of secrets sitting in your org's repositories, aggregated by category.</p>
<dl class="assess-meta">
<div class="assess-line"><dt>SCOPE</dt><dd>All repos — public, private, internal, archived</dd></div>
<div class="assess-line"><dt>RUNS</dt><dd>Once</dd></div>
<div class="assess-line"><dt>OUTPUT</dt><dd>Counts only; secret values are never stored</dd></div>
</dl>
</div>
<div class="assess-card is-code">
<p class="assess-name">🔍 Code Security Risk Assessment</p>
<p class="assess-what">Code vulnerabilities found by CodeQL, broken down by severity, language, and how many Copilot Autofix can fix.</p>
<dl class="assess-meta">
<div class="assess-line"><dt>SCOPE</dt><dd>Up to the 20 most active repos</dd></div>
<div class="assess-line"><dt>RUNS</dt><dd>Once every 90 days</dd></div>
<div class="assess-line"><dt>OUTPUT</dt><dd>Aggregated report; no Actions minutes consumed</dd></div>
</dl>
</div>
</div>

- 🛂 Only **organization owners** and **security managers** can run them
- 🏷️ **GitHub Team** and **GitHub Enterprise Cloud** (Server support expected in 3.22)
- 🧪 You can start a <a class="retro-link" href="https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas" target="_blank" rel="noopener noreferrer">GHAS trial directly from the results ↗</a>, which is the natural next step once you have the numbers

## Rolling out across the enterprise

One configuration at **Enterprise → Settings → Advanced Security → Code security** rolls out to every org and repo. **New configuration** opens pre-filled with **GitHub recommended**.

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ffb000">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🚫</span><span class="ctl-name">Block orgs that should not have it</span><span class="ctl-when">Do this first</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Do this</span><span class="ctl-v">Enterprise → Policies → <b>Advanced Security</b> → <b>Policies</b> tab → set the dropdown to <b>Allow for selected organizations</b> and keep only the orgs you want</span></p>
<p class="ctl-row"><span class="ctl-k">Why first</span><span class="ctl-v">Disallowing does <b>not</b> disable repos where it is <b>already enabled</b>. It only blocks <b>additional</b> repositories, so after rollout it is too late</span></p>
<p class="ctl-row"><span class="ctl-k">Who it binds</span><span class="ctl-v"><b>Repository administrators only</b>. Org owners and security managers can always enable it regardless of the policy</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ff4d4d">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Push protection turns on</span><span class="ctl-when">blocks <code>push</code> only</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/push-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Blocked</span><span class="ctl-v"><code>git push</code>, commits made in the GitHub UI, file uploads, REST API requests</span></p>
<p class="ctl-row"><span class="ctl-k">Not blocked</span><span class="ctl-v"><code>git pull</code>, <code>git clone</code>, <code>git fetch</code>. <b>"Secret scanning will stop us pulling" is a misconception</b></span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ff4d4d">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛂</span><span class="ctl-name">Bypass is open to anyone with write</span><span class="ctl-when">default behavior</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/delegated-bypass" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Default</span><span class="ctl-v"><b>anyone</b> with write access can bypass by picking a reason. Every bypass still leaves <b>an alert, an audit log entry, and an email to owners</b></span></p>
<p class="ctl-row"><span class="ctl-k">To restrict</span><span class="ctl-v">set <b>Bypass privileges</b> to <b>Specific actors</b> in the configuration (delegated bypass). Everyone else goes through a request and approval flow (requests expire after 7 days)</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#00f0ff">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔍</span><span class="ctl-name">Code scanning runs on three triggers</span><span class="ctl-when">consumes Actions minutes</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/setup-types" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">When</span><span class="ctl-v">every push to the default or a protected branch, every PR creation and commit against those branches (fork PRs excluded), and a <b>weekly schedule</b></span></p>
<p class="ctl-row"><span class="ctl-k">Cost</span><span class="ctl-v">the dominant factor in an enterprise-wide rollout. Repos with no CodeQL-supported language use <b>zero scans and zero minutes</b></span></p>
<p class="ctl-row"><span class="ctl-k">Note</span><span class="ctl-v">code scanning on its own <b>never blocks a merge</b></span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#00f0ff">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🚧</span><span class="ctl-name">Blocking merges needs a ruleset</span><span class="ctl-when">Enterprise → Policies → Rulesets</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Where</span><span class="ctl-v">Policies → Repository → Rulesets → <b>Require code scanning results</b></span></p>
<p class="ctl-row"><span class="ctl-k">Blocks when</span><span class="ctl-v">an alert at the configured severity, analysis running, or <b>tool not configured</b></span></p>
<p class="ctl-row"><span class="ctl-k">Trap</span><span class="ctl-v">point it at repos without CodeQL and <b>every PR is blocked even with zero alerts</b></span></p>
<p class="ctl-row"><span class="ctl-k">What Evaluate is</span><span class="ctl-v">a <b>dry run that records instead of blocking</b>. <b>Rule Insights</b> shows what Active would have rejected. The others are Active and Disabled</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#9bbc0f">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🆕</span><span class="ctl-name">Cover new repositories</span><span class="ctl-when">set via Policy</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Do this</span><span class="ctl-v">Policy → <b>Use as default for newly created repositories</b>. Pick <b>Enabled with advanced setup allowed</b> for code scanning so existing CodeQL workflows survive</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v"><b>new repositories only</b>. It does nothing to repositories that already exist</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#9bbc0f">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🗂️</span><span class="ctl-name">Cover existing repositories</span><span class="ctl-when">separate Apply to action</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Do this</span><span class="ctl-v">from the configurations list, <b>Apply to</b> → <b>All repositories without configurations</b></span></p>
<p class="ctl-row"><span class="ctl-k">Enterprise only</span><span class="ctl-v">appears <b>only at the enterprise level</b>. Covers unconfigured repos without disturbing orgs that already have one</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">archived repos are included too, since secret scanning still runs on them</span></p>
</div>
</details>
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#9bbc0f">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🎯</span><span class="ctl-name">Pick specific repositories</span><span class="ctl-when">organization configuration only</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/apply-custom-configuration" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Per repo</span><span class="ctl-v">enterprise <b>Apply to</b> offers only <b>All repositories</b> or <b>All repositories without configurations</b>. <b>Choosing which repos get it is organization-level only</b></span></p>
<p class="ctl-row"><span class="ctl-k">How</span><span class="ctl-v">Organization → Settings → Advanced Security → Configurations → <b>Repositories</b> tab → filter, select, <b>Apply configuration</b></span></p>
<p class="ctl-row"><span class="ctl-k">Who wins</span><span class="ctl-v">if an enterprise change conflicts with the org configuration the repo flips to <code>removed_by_enterprise</code> and the org config detaches. <b>Enterprise wins</b></span></p>
</div>
</details>
</div>
</div>

## Visualizing coverage <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Once the configuration is out, the question becomes "how far are we actually covered?" The **Security and quality** tab answers it at both **Enterprise** and **Organization** level.

| View | What it answers | Level |
| --- | --- | :---: |
| 📊 **Overview** | Detection / remediation / prevention trends | Ent + Org |
| 📈 **Coverage** | Which repos have which feature enabled | Ent + Org |
| 🛡️ **Risk** | Which repos carry the most alerts | Ent + Org |
| 🌐 **Public monitoring** | Secrets your members leaked in **public repos across GitHub** | **Ent only** |

- 🏢 **Org-level Coverage** is the day-to-day view — enterprise views only aggregate orgs where you are an owner or security manager
- 🌐 **Public monitoring** (public preview, needs Secret Protection) attributes leaks by enterprise membership and verified domain. Turn it on at **Enterprise → Settings → Advanced Security → Code security**
- 📤 **Export CSV** on Overview / Coverage / Risk keeps the filters you already applied
