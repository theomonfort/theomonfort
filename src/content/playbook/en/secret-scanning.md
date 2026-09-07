---
title: Secret Scanning
titleEn: Secret Scanning
summary: GitHub's secret detection feature that automatically finds API keys and tokens in commits, issues, PRs, and history. Core coverage is free for public repositories; private and internal repositories require Secret Protection.
icon: /theomonfort/icons/secret-scanning.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 19.6
category: secure
related: ['dependabot', 'github-advanced-security']
links:
  - group: 📖 Official Documentation
    label: Secret scanning — core concepts
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/secret-scanning
  - group: 📖 Official Documentation
    label: Push protection — core concepts
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/push-protection
  - group: 📖 Official Documentation
    label: Full list of supported patterns (provider + generic)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/reference/secret-security/supported-secret-scanning-patterns
  - group: 📖 Official Documentation
    label: Validity checks
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/validity-checks
  - group: 📖 Official Documentation
    label: Custom patterns
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/custom-patterns
  - group: 📖 Official Documentation
    label: Secret scanning partner program
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secret-scanning-partner-program
  - group: 📖 Official Documentation
    label: Public monitoring
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring
  - group: 📖 Official Documentation
    label: About GitHub Advanced Security products
    url: https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security
  - group: 🔧 How-to Guides
    label: Enable secret scanning on a repository
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning
  - group: 🔧 How-to Guides
    label: Define custom patterns
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-secrets/customize-leak-detection/define-custom-patterns
  - group: 📰 Recent Changelog
    label: "Secret scanning public monitoring for enterprises (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises/
  - group: 📰 Recent Changelog
    label: "Secret scanning with GitHub MCP Server is now GA (2026-05-05)"
    url: https://github.blog/changelog/2026-05-05-secret-scanning-with-github-mcp-server-is-now-generally-available/
  - group: 📰 Recent Changelog
    label: "Secret scanning pattern updates and product improvements (2026-04-14)"
    url: https://github.blog/changelog/2026-04-14-secret-scanning-pattern-updates-and-product-improvements/
  - group: 📰 Recent Changelog
    label: "Secret scanning in AI coding agents via the GitHub MCP Server (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-secret-scanning-in-ai-coding-agents-via-the-github-mcp-server/
---

## In a nutshell

<div class="hero-quote">
  <p>
    <strong>Secret Scanning</strong> is GitHub's detection feature that automatically finds API keys, tokens, and connection strings lurking in your repository.
  </p>
  <p>
    Secrets already committed get an <strong>alert</strong>; secrets about to be pushed are blocked at <code>git push</code> time by <strong>Push protection</strong>. Stopping leaks before they happen is the core strategy.
  </p>
</div>

## Why secrets matter even in private repos

**"Private" is a visibility setting, not a security control.** Secrets belong in a secret manager, never in code, and **Push protection** is what keeps them out. Here are 8 reasons why, even in a private repo.

<div class="risk-widget">
<p class="risk-hint">▸ CLICK + TO REVEAL</p>
<div class="risk-list">
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">01</span><span class="risk-icon" aria-hidden="true">🌐</span><span class="risk-label">Access is wider than you think</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">Every Org member with read access (often tens to hundreds, including contractors and unrelated teams) can view the secret. Internal forks, GitHub Apps, OAuth Apps, CI/CD, and runners inherit that access. There is <b>no log of who read a file</b>.</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">02</span><span class="risk-icon" aria-hidden="true">🔓</span><span class="risk-label">One click from public</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">A misclick, repo transfer, Org misconfiguration, or policy change flips it public. Attacker scanners detect new public repos <b>within seconds</b>; leaked tokens have been abused within 60 seconds.</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">03</span><span class="risk-icon" aria-hidden="true">♾️</span><span class="risk-label">Git history is forever</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">Deleting it in a later commit does not remove it. It stays in history, every local clone, forks, backups, and CI caches. The only fix is <b>rotation</b>, not file deletion.</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">04</span><span class="risk-icon" aria-hidden="true">💻</span><span class="risk-label">Dev machines become the weak point</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">Every <b>git clone</b> copies secrets onto unmanaged laptops. One piece of malware, one stolen device, or one compromised account is enough. Blast radius is N developers, not one server.</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">05</span><span class="risk-icon" aria-hidden="true">🎣</span><span class="risk-label">Account compromise = instant access</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">One phished developer exposes every secret in every repo they can read. The secrets themselves have <b>no extra protection</b> (no MFA, no self-managed encryption at rest, no expiry).</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">06</span><span class="risk-icon" aria-hidden="true">🔗</span><span class="risk-label">Software supply chain</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">The <b>#1 attack vector</b> today. Secrets in private repos enable lateral movement to production, artifact registries, and cloud. See Uber, CircleCI, Codecov, and the Internet Archive.</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">07</span><span class="risk-icon" aria-hidden="true">📋</span><span class="risk-label">Compliance and audit</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">ISO 27001, SOC 2, PCI-DSS, and ISMAP require central management, rotation, and access tracking. Plaintext secrets in Git fail all three, and <b>audit findings are guaranteed</b>.</p>
</details>
<details class="risk-item" name="risk-private">
<summary class="risk-btn"><span class="risk-num">08</span><span class="risk-icon" aria-hidden="true">💸</span><span class="risk-label">The real cost of an incident</span><span class="risk-gauge" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span><span class="risk-toggle" aria-hidden="true"></span></summary>
<p class="risk-why">Emergency rotation, production outage, forensics, customer notification. Compare that to the <b>30 minutes</b> it takes to set up a secret manager.</p>
</details>
</div>
</div>

## Main capabilities <input type="checkbox" id="demo-secret-scanning" class="demo-toggle" /><label class="h2-demo" for="demo-secret-scanning">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-secret-scanning" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Secret Scanning</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-secret-scanning" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">PUSH PROTECTION</p>
<p>In <code class="demo-path">ghas-test-1</code>, push a generated secret.</p>
<code class="demo-cmd">./demo/secret-scanning/01-push-protection.sh</code>
<p class="demo-out">The push is <b>blocked</b> and the terminal prints an unblock URL.</p>
<p>Show <b>which</b> patterns are push-protected, enterprise-wide: <a href="https://github.com/enterprises/octodemo/settings/security_analysis/pattern_configurations" target="_blank" rel="noopener noreferrer">octodemo → Pattern configurations ↗</a>. Flip a pattern in the <b>Enterprise setting</b> column; the <b>Alert total</b>, <b>False positives</b>, and <b>Bypass rate</b> columns back the noise-vs-risk call with real data.</p>
<p class="demo-out">Same page is revisited on the <b>What gets detected</b> slide, to dig out the generic patterns.</p>
</li>
<li>
<p class="demo-step-title">BYPASS PUSH PROTECTION</p>
<p>Open the <code class="demo-path">unblock-secret</code> URL from the block message in your browser, pick a reason and bypass.</p>
<p class="demo-out">You get “secret can now be pushed”.</p>
<p>Push the same branch again.</p>
<code class="demo-cmd">git push origin HEAD</code>
<p>Open the closed alert under <b>Security → Secret scanning</b> and show <b>who</b> bypassed it and <b>why</b>.</p>
<p>To keep bypasses under control: <code class="demo-path">Settings → Advanced Security → Push protection</code>, set <b>Who can bypass push protection</b> to <b>Specific roles or teams</b> (= Delegated bypass).</p>
</li>
<li>
<p class="demo-step-title">VALIDITY CHECK</p>
<p>In the default view under <b>Security → Secret scanning</b>, use the <b>Validity filter</b>.</p>
<p class="demo-out">Triage by real risk: start with the secrets that are still live.</p>
</li>
</ol>
</div>
</div>

Secret Scanning is made up of five capabilities. **Push protection** closes the door and comes first; the rest cover detection, triage, and provider-side revocation.

<div class="ctl-widget">
<p class="ctl-hint">▸ CLICK + FOR DETAILS</p>
<div class="ctl-list">
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🛡️</span><span class="ctl-name">Push protection</span><span class="ctl-when">Right before <code>git push</code></span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/push-protection" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v"><b>Rejects the push on the spot</b> when it contains a secret. Bypass is possible, but the reason is recorded</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Incoming changes only. <b>AI-detected passwords are not covered</b> (too noisy to block)</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔍</span><span class="ctl-name">Secret scanning alerts</span><span class="ctl-when">After commit, continuous</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/secret-scanning" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Notifies you of detected secrets in the <b>Security and quality</b> tab</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Full Git history on all branches, Issues, PRs, GitHub Discussions, Wikis, secret gists. <b>Rescanned</b> as new secret types ship</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">✅</span><span class="ctl-name">Validity checks</span><span class="ctl-when">When an alert fires</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/validity-checks" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Asks the provider API whether the secret is <b>still active</b>, so you can triage by real risk</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Select supported providers (AWS, GitHub, Slack, and others). <b>AI-detected passwords are not covered</b> (no provider to ask)</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤝</span><span class="ctl-name">Partner program</span><span class="ctl-when">Always on, public repos</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secret-scanning-partner-program" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">When a partner secret leaks, GitHub <b>reports it straight to the provider</b>, who revokes or reissues it</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Public repos and public npm packages only. Reports <b>never appear in your alert list</b> (free, not configurable)</span></p>
</div>
</details>
<details class="ctl-item" name="ss-controls">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🌐</span><span class="ctl-name">Public monitoring</span><span class="ctl-when">Real-time across github.com</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">What it does</span><span class="ctl-v">Detects secrets leaked <b>outside your own repos</b> (personal forks, OSS, public issues and PRs) and attributes them to your enterprise</span></p>
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Public content only, and it <b>never scans private repos</b>. GHEC Enterprise</span></p>
</div>
</details>
</div>
</div>

## What gets detected <input type="checkbox" id="demo-secret-detect" class="demo-toggle" /><label class="h2-demo" for="demo-secret-detect">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-secret-detect" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Detection types</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-secret-detect" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">WHERE THE GENERIC PATTERNS HIDE</p>
<p>Open <a href="https://github.com/enterprises/octodemo/settings/security_analysis/pattern_configurations" target="_blank" rel="noopener noreferrer">octodemo → Pattern configurations ↗</a> and scroll the default patterns tab.</p>
<p class="demo-out">It is one <b>flat list</b>: no category column, no provider / generic split, no filter. The generic patterns are in there, just never labelled as generic.</p>
<p>Point them out by name — these ten are the entire set:</p>
<p><code class="demo-path">rsa_private_key</code> <code class="demo-path">openssh_private_key</code> <code class="demo-path">ec_private_key</code> <code class="demo-path">pgp_private_key</code> <code class="demo-path">generic_private_key</code> <code class="demo-path">mongodb_connection_string</code> <code class="demo-path">mysql_connection_url</code> <code class="demo-path">postgres_connection_string</code> <code class="demo-path">http_basic_authentication_header</code> <code class="demo-path">http_bearer_authentication_header</code></p>
<p class="demo-out">Every one reads <b>Disabled</b> under <b>GitHub default</b>: detection is on, push protection is not. Flip one in the <b>Enterprise setting</b> column to opt it in.</p>
</li>
<li>
<p class="demo-step-title">CUSTOM PATTERN + DRY RUN</p>
<p><code class="demo-path">Settings → Advanced Security → Custom patterns → New pattern</code></p>
<p>Matching secrets are already planted in the demo repo, so you only need to create the pattern:</p>
<p><b>Pattern name</b> — <code class="demo-path">Octodemo internal service token</code></p>
<p><b>Secret format</b> — <code class="demo-path">octodemo_(live|test)_[A-Za-z0-9]{32}</code></p>
<p><b>Test string</b> — <code class="demo-path">octodemo_live_L1QNGy4DLxQJ8C85kfwP0lmvCHLDuVxJ</code></p>
<p>The test string has to go green before the form will save. Then use <b>Save and dry run</b>.</p>
<p class="demo-out">The dry run reports the planted secrets <b>without creating alerts</b>. Review the hits, then <b>Publish pattern</b> and optionally turn push protection on for it.</p>
</li>
</ol>
</div>
</div>

**Four** detection engines, layered from exact partner formats to unstructured secrets that only AI can catch.

<div class="det-widget">
<p class="det-hint">▸ CLICK FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-name">Provider patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🏷️</span><span class="det-title">Provider patterns</span></p>
<p class="det-why">Regex patterns registered by <b>200+ partners</b> including AWS, Azure, GCP, Stripe, Slack, OpenAI, and GitHub PATs. Extremely low false-positive rate.</p>
<p class="det-doc"><a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/introduction/supported-secret-scanning-patterns" target="_blank" rel="noopener noreferrer">📘 Supported secrets ↗</a></p>
</div>
</details>
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🧪</span><span class="det-name">Generic patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🧪</span><span class="det-title">Generic patterns</span></p>
<p class="det-why">Private keys, connection strings, HTTP basic auth, and other generic formats. A wider net by design, so expect more triage than provider patterns. <b>Not push-protected by default</b> — opt each pattern in under Pattern configurations.</p>
</div>
</details>
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">AI-detected secrets</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">AI-detected secrets</span></p>
<p class="det-why">Uses AI to detect <b>unstructured secrets</b> such as passwords, covering the ground no regex can reach. Supports <b>neither push protection nor validity checks</b>, at any setting — triage these as alerts.</p>
</div>
</details>
<details class="det-pick" name="ss-detect">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-name">Custom patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🛠️</span><span class="det-title">Custom patterns</span></p>
<p class="det-why">Define regexes for <b>your own token formats</b>: internal service tokens, legacy credentials, anything a partner will never register.</p>
<p class="det-doc"><a class="retro-link" href="https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning" target="_blank" rel="noopener noreferrer">📘 Defining custom patterns ↗</a></p>
</div>
</details>
</div>
<div class="det-screen"><p class="det-empty">SELECT A TYPE ▸</p></div>
</div>
</div>

## How to manage exposed secrets <input type="checkbox" id="demo-secret-campaign" class="demo-toggle" /><label class="h2-demo" for="demo-secret-campaign">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-secret-campaign" aria-label="Close demo steps"></label>
<div class="demo-window" role="group" aria-label="Demo steps">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">Security campaigns</span><span class="demo-note">FOR PRESENTER ONLY</span><label class="demo-close" for="demo-secret-campaign" aria-label="Close">&#10005;</label></div>
<ol class="demo-steps">
<li>
<p class="demo-step-title">THE CAMPAIGNS TAB</p>
<p>Open <a href="https://github.com/orgs/theomonfort-org/security/campaigns" target="_blank" rel="noopener noreferrer">theomonfort-org → Campaigns ↗</a>.</p>
<p class="demo-out">The tracking view: each campaign with its <b>due date</b>, <b>manager</b>, and a burn-down of open vs closed alerts. The point to land: <b>alerts get an owner and a deadline here, not in a spreadsheet</b>.</p>
</li>
<li>
<p class="demo-step-title">CREATE ONE FROM SECRET SCANNING FILTERS</p>
<p><code class="demo-path">Create campaign → From secret scanning filters</code></p>
<p>Build the filter live so they see the triage logic. Start from <code class="demo-path">is:open</code>, narrow to the repos that matter, then set <b>Validity</b> to <b>Active</b> and <b>Unknown</b>.</p>
<p class="demo-out">Watch the alert count drop with each filter. That is the whole argument: <b>a finishable list instead of a backlog</b>. Must be <b>1000 alerts or fewer</b> to save.</p>
</li>
<li>
<p class="demo-step-title">NAME IT, DATE IT, SHIP IT</p>
<p><b>Save as → Draft campaign</b>, then fill in the name, description, <b>due date</b>, and <b>campaign manager</b>.</p>
<p>Note the manager picker only offers <b>org owners and security managers</b>.</p>
<p class="demo-out"><b>Review and publish</b> notifies everyone who can see the alerts, and the campaign shows up in each repo's Security tab. Mention secret campaigns are in <b>public preview</b>.</p>
</li>
</ol>
</div>
</div>

When a secret is found, **remediation matters more than detection**. At scale, don't work the raw alert list, run it as a **security campaign**.

<div class="rem-widget">
<p class="rem-hint">▸ CLICK A STEP FOR DETAILS</p>
<div class="rem-flow">
<div class="rem-row">
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🎯</span><span class="rem-name">SCOPE</span></summary>
<div class="rem-plate">
<p class="rem-title">🎯 SCOPE — critical repos first</p>
<p class="rem-why"><code>Org → Security and quality → Campaigns → Create campaign → From secret scanning filters</code></p>
<p class="rem-why">Not the whole org. Target the repos that matter, for example with a repository custom property (<code>props.BusinessPriority:Urgent</code>). Cap it at <b>1000 alerts</b>, which is also the hard limit.</p>
</div>
</details>
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">⚡</span><span class="rem-name">TRIAGE</span></summary>
<div class="rem-plate">
<p class="rem-title">⚡ TRIAGE — by real risk</p>
<p class="rem-why">Filter validity to <b>Active</b> and <b>Unknown</b>. <b>Active</b> is a live key someone can use right now. <b>Unknown</b> means nobody could confirm it is dead, so treat it as live.</p>
<p class="rem-why"><b>Inactive</b> can wait. This is what turns a backlog into a list worth someone's week.</p>
</div>
</details>
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">👤</span><span class="rem-name">OWN</span></summary>
<div class="rem-plate">
<p class="rem-title">👤 OWN — a name and a date</p>
<p class="rem-why">Every campaign gets a <b>due date</b> and a <b>campaign manager</b>. The picker only offers <b>org owners and security managers</b>.</p>
<p class="rem-why">Without both, nothing gets rotated. Publishing notifies everyone who can see the alerts, and the campaign appears in each repo's Security tab.</p>
</div>
</details>
<details class="rem-slot" name="ss-remediate">
<summary class="rem-btn"><span class="rem-icon" aria-hidden="true">🚨</span><span class="rem-name">ROTATE</span></summary>
<div class="rem-plate">
<p class="rem-title">🚨 ROTATE — then close it out</p>
<p class="rem-why"><b>Revoke at the provider.</b> Deleting it from the repo is not enough: it stays in the history and in everyone's clones.</p>
<p class="rem-why">Partner secrets leaked in <b>public</b> repos are revoked provider-side and <b>never reach your alert list</b>. Then close each alert as <code>Revoked</code>, <code>False positive</code>, or <code>Used in tests</code> so the campaign burns down.</p>
</div>
</details>
</div>
<div class="rem-screen"><p class="rem-empty">SELECT A STEP ▸</p></div>
</div>
</div>

## Getting started (fastest path)

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Settings → Advanced Security</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 1 · PUSH PROTECTION</span>
    </div>
    <p>Blocks <strong>new</strong> secrets at push time.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Security → Secret scanning</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 2 · EXISTING LEAKS</span>
    </div>
    <p>Scans <strong>past history</strong> too. Rotate down the list.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>… → Custom patterns</code>
      <span class="setup-card-tag tag-cyan">▸ STEP 3 · CUSTOM PATTERNS</span>
    </div>
    <p>Your own token formats, by regex.</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Org → … → Configurations</code>
      <span class="setup-card-tag tag-magenta">▸ STEP 4 · ROLL OUT</span>
    </div>
    <p>One config applies all of it, org-wide.</p>
  </div>
</div>

> ⚠️ Legacy org REST API fields were removed **2026-04-21**. Use the security configurations API.

## Availability by product

<table class="availability-table">
<thead>
<tr>
<th>Feature</th>
<th>Public repo</th>
<th>Private / internal<br>without product</th>
<th>Secret Protection / GHAS</th>
</tr>
</thead>
<tbody>
<tr><td>Secret scanning alerts</td><td>✅ Free</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Push protection (repo / org)</td><td>✅ Free</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Partner program alerts (sent to the provider)</td><td>✅ Free, always on</td><td>❌</td><td>❌ Public repos only</td></tr>
<tr><td>Validity checks</td><td>❌</td><td>❌</td><td>✅ Supported providers</td></tr>
<tr><td>Generic patterns</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Custom patterns</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>AI-detected secrets</td><td>❌</td><td>❌</td><td>✅ Included</td></tr>
<tr><td>Public monitoring</td><td>❌</td><td>❌</td><td>✅ GHEC Enterprise</td></tr>
</tbody>
</table>

> 🆓 **User push protection** is free and enabled by default on all plans, but only covers pushes to public repositories. **Partner alerts** also notify providers only about leaks in public repositories and public npm packages — always on, and not configurable.
>
> 👤 **User-owned repositories** are a special case: alerts require GHEC with **Enterprise Managed Users**, or GHES with Secret Protection enabled on the enterprise. Org-owned private / internal repos only need Secret Protection on Team or GHEC.
>
> 💰 Generic, custom, and AI detection, validity checks, and private / internal repository coverage require **Secret Protection or a legacy GHAS license**. **Public monitoring** is an enterprise-wide feature for GHEC Enterprise.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/get-started/learning-about-github/about-github-advanced-security" target="_blank" rel="noopener noreferrer">Advanced Security products ↗</a> / <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/tutorials/secret-scanning-partner-program" target="_blank" rel="noopener noreferrer">Partner program ↗</a> / <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Public monitoring (NEW)

GitHub **monitors the entire public surface of github.com in real time** and attributes leaked secrets back to your enterprise. It catches secrets leaked *outside* your own repos — personal forks, open source projects, tokens pasted into public issues / PRs / discussions.

- 🌐 Scans **public content only** (git, PR comments, issues, discussions); it **never scans private repos**
- ⚡ Real-time monitoring, with native platform metadata for accurate attribution
- 🧩 Works out of the box — enable it to see recent existing findings and future leaks

**Two attribution methods:**

| Method | What it checks | Catches |
| --- | --- | --- |
| 👤 Member-based | Committer's account is an enterprise member | Leaks from managed accounts & known members |
| 🌐 Verified domain match | Committer's email is on a verified domain | Leaks from personal accounts using a work email (even if unlinked / email private) |

> ⚙️ Enable: enterprise owners / security managers, from the enterprise-level **Security and quality** tab. GHEC with Secret Protection or Advanced Security (public preview, no extra cost; data residency coming soon). <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring" target="_blank" rel="noopener noreferrer">Public monitoring ↗</a>

## Secret Risk Assessment (free inventory scan)

**Secret Risk Assessment** scans every repository in your org (public, private, internal, and archived) to make visible "what secrets are hiding and where." **No GHAS / Secret Protection required — completely free** (since 2025), available to all Team and Enterprise orgs. Perfect for a pre-purchase inventory or an executive security report.

- 🔎 Scope — all repos in the org (any visibility), including archived repos
- 📊 Output — aggregated report showing secret type, count, and how many are in each repo (individual secret values are not exposed)
- 🕒 Frequency — point-in-time, **rerunnable every 90 days** via `Rerun scan`. Still not continuous monitoring, that's what Secret Protection is for
- 🔐 Privacy — detected secret values are not stored by GitHub. Only statistics are visible to org admins
- 🚀 How to run — `Org → Security and quality tab → Assessments → Scan your organization`. The first run also kicks off the free **code security risk assessment**

> 📊 Use this first when you want to "just know how many secrets are leaking across the org" or "need numbers for a budget proposal." Review the results to decide whether to adopt **Secret Protection**.

📘 Details: <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
