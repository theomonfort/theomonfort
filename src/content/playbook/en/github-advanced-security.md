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
order: 19.8
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
    label: GitHub plans pricing
    url: https://docs.github.com/en/get-started/learning-about-github/githubs-plans
  - group: 📖 Official Documentation
    label: Planning a trial of GHAS
    url: https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas
  - group: 📰 Announcement
    label: Introducing Secret Protection & Code Security (2025/03)
    url: https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/
  - group: 💰 Billing
    label: About billing for GitHub Advanced Security
    url: https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security
  - group: 🆓 Free inventory (Risk Assessment)
    label: Secret Risk Assessment (Docs)
    url: https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk
  - group: 🆓 Free inventory (Risk Assessment)
    label: Code Security Risk Assessment (Docs)
    url: https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment
  - group: 🆓 Free inventory (Risk Assessment)
    label: Code Security Risk Assessment GA (2026/04)
    url: https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/
  - group: 🏢 Enterprise rollout
    label: Creating a custom security configuration for your enterprise
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration
  - group: 🏢 Enterprise rollout
    label: Applying a custom security configuration to your enterprise
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration
  - group: 🏢 Enterprise rollout
    label: Code scanning merge protection
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection
  - group: 📊 Visibility (Security overview)
    label: Security overview
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/security-at-scale/security-overview
  - group: 📊 Visibility (Security overview)
    label: Assessing adoption of security features (Coverage)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/assessing-adoption-code-security
  - group: 📊 Visibility (Security overview)
    label: Exporting data from security overview (CSV)
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data
  - group: 📊 Visibility (Security overview)
    label: Public monitoring for secret scanning
    url: https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/secret-security/public-monitoring
  - group: 📰 Recent Changelog
    label: "Secret scanning public monitoring for enterprises (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-secret-scanning-public-monitoring-for-enterprises
  - group: 📰 Recent Changelog
    label: "Start a GitHub Advanced Security trial from a risk assessment (2026-05-19)"
    url: https://github.blog/changelog/2026-05-19-start-a-github-advanced-security-trial-from-a-risk-assessment
  - group: 📰 Recent Changelog
    label: "GitHub Advanced Security setup made simple (2026-03-17)"
    url: https://github.blog/changelog/2026-03-17-github-advanced-security-setup-made-simple
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

## Why it exists

Scanning tools normally live outside the platform: a separate console, a separate backlog, and findings that reach the developer days after the code was written. GHAS puts all four steps in the place that already holds the code.

- 🔎 **Find** — surface the secrets and vulnerabilities already sitting in the default branch, across every repo, without asking a single team to run anything
- 🚧 **Prevent** — push protection blocks a secret before it becomes a commit; a ruleset can hold a pull request until code scanning comes back clean
- 🔧 **Fix** — alerts land as annotations on the pull request, and Copilot Autofix proposes an actual diff instead of a ticket
- 📊 **Prove** — one configuration for the whole enterprise, one dashboard showing which repos are covered and which are not

> 🎯 The value isn't "another scanner". It's that detection, prevention, remediation, and reporting share the platform with the code, so nothing has to be exported, reconciled, or chased.

## What's inside

**🔑 Secret Protection** keeps credentials out of the repository. **🔍 Code Security** finds the vulnerabilities written into the code itself. Here's what each one actually gives you.

<div class="det-widget">
<p class="det-hint">▸ CLICK FOR DETAILS</p>
<div class="det-split">
<div class="det-list">
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-name">Secret scanning</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔑</span><span class="det-title">Secret scanning</span></p>
<p class="det-why">Scans the <b>entire git history</b> and every new push against patterns registered by <b>200+ providers</b>, plus generic formats and AI detection for unstructured secrets. Each match becomes an alert carrying the file, the commit, and the author.</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🛡️</span><span class="det-name">Push protection</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🛡️</span><span class="det-title">Push protection</span></p>
<p class="det-why">Rejects the push that contains a secret, so it never reaches the remote and never needs rotating. The developer sees it in their own terminal. Enforced <b>org-wide</b>, with bypass restricted to named actors if you want it.</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">✅</span><span class="det-name">Validity & custom patterns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">✅</span><span class="det-title">Validity &amp; custom patterns</span></p>
<p class="det-why"><b>Validity checks</b> ask the provider whether a leaked token is still live, so you triage what is genuinely exploitable first. <b>Custom patterns</b> cover the token formats no partner will ever register: internal services, legacy credentials, your own conventions.</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🔍</span><span class="det-name">Code scanning (CodeQL)</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🔍</span><span class="det-title">Code scanning (CodeQL)</span></p>
<p class="det-why">Compiles the codebase into a <b>queryable database</b> and follows data flow from untrusted input to dangerous sink — injection, path traversal, deserialization. Runs on push, on pull requests, and on a weekly schedule; results appear as PR annotations.</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-name">Copilot Autofix</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">🤖</span><span class="det-title">Copilot Autofix</span></p>
<p class="det-why">Turns an alert into a <b>suggested diff with an explanation</b>, right on the pull request. The developer reviews and commits instead of researching the vulnerability class first, which is what actually moves the remediation numbers.</p>
</div>
</details>
<details class="det-pick" name="ghas-inside">
<summary class="det-btn"><span class="det-icon" aria-hidden="true">📣</span><span class="det-name">Security campaigns</span></summary>
<div class="det-pane">
<p class="det-head"><span class="det-icon" aria-hidden="true">📣</span><span class="det-title">Security campaigns</span></p>
<p class="det-why">Slices the existing alert backlog into a <b>finishable list</b> with an owner and a due date, and opens the work directly with the teams that own the code. Plus <b>dependency review</b> on pull requests and the <b>Security overview</b> dashboards.</p>
</div>
</details>
</div>
<div class="det-screen det-has-case"><div class="det-case">
<p class="det-case-k">📚 FULL ENTRIES</p>
<p class="det-case-v"><a class="retro-link" href="/theomonfort/en/playbook/secret-scanning">Secret Scanning ↗</a> — detection, push protection, and triage in depth.<br /><a class="retro-link" href="/theomonfort/en/playbook/code-scanning">Code Scanning ↗</a> — CodeQL setup, Autofix, and campaigns in depth.</p>
</div></div>
</div>
</div>

## Pricing

| Product | Price | Billing unit |
| --- | :---: | --- |
| 🔑 **GitHub Secret Protection** | **$19** / month | active committer |
| 🔍 **GitHub Code Security** | **$30** / month | active committer |
| 📦 Both together | $49 / month | active committer |

- 👥 **Active committer** = a unique committer who pushed to a repository with the feature enabled during the past 90 days. The same person counts as one across any number of repositories
- 💳 **Metered (pay-as-you-go)** model — no need to reserve license seats upfront; you're billed only for the people who actually push
- 🏷️ Available on **GitHub Team** and **GitHub Enterprise**
- 🆓 **Public repos are completely free** — open source projects need no license

> 💡 The two products are bought independently. If you only need secret scanning, **Secret Protection alone ($19)** is enough; add **Code Security ($30)** when you also want CodeQL.

## How to think about licensing

1. 🌐 **Public repos only? Do nothing** — everything is free
2. 🆓 **Enable free features for private repos first** — Dependabot (alerts / updates), user-level push protection, and Secret Risk Assessment (one-time inventory)
3. 🔑 **Want org-level enforcement against secret leaks?** → Buy **Secret Protection**
4. 🔍 **Want code vulnerability scanning (CodeQL) and Autofix too?** → Add **Code Security**

> 🎯 Start with a Risk Assessment (below) to visualize how many secrets and vulnerabilities are hiding in your org — then evaluate the cost-effectiveness of Secret Protection / Code Security.

## Pre-purchase inventory — Risk Assessments

GitHub provides two **Risk Assessments** to visualize your organization's security posture — **no license required, completely free**. Both can be triggered with a single click from **Org → Security → Assessments**, and you can review the results before deciding to purchase Secret Protection / Code Security.

| Assessment | What it shows | Scope | Frequency | Details |
| --- | --- | --- | :---: | --- |
| 🔑 **Secret Risk Assessment** | Types and count of secrets hiding in org repos | **All repos** (public / private / internal / archived) | Once | <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Secret Risk Assessment ↗</a> |
| 🔍 **Code Security Risk Assessment** | Code vulnerabilities detected by CodeQL (severity / language / Autofix-eligible count) | **Up to 20 most active repos** | Once every 90 days | <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/risk-assessment" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment ↗</a> |

- 🆓 **Completely free** — no GHAS / Secret Protection / Code Security license required
- 🛂 **Permissions** — only Organization owners or security managers can run them
- 📊 **Output** — aggregated reports (individual secret values and code are not stored on GitHub servers)
- 🏷️ **Eligible plans** — GitHub Team and GitHub Enterprise Cloud (Server support expected in 3.22)
- ⚙️ **Actions minutes** — Code Security Risk Assessment does not consume your regular Actions quota

> 💡 Use these first when you "need numbers for a budget proposal" or "want to see the impact before buying." Running both on the same day gives you a complete view of your organization's security posture in hours.

> 🧪 A trial is the natural next step after the inventory. You can start a GHAS trial straight from the Risk Assessment results, and <a class="retro-link" href="https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas" target="_blank" rel="noopener noreferrer">Planning a trial of GHAS ↗</a> covers how to set goals, pick participants, and define success criteria.

📘 Risk Assessment references:
- <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment (GitHub Docs) ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment GA (2026/04) ↗</a>

📘 GHAS general:
- <a class="retro-link" href="https://docs.github.com/en/code-security/tutorials/trialing-github-advanced-security/planning-a-trial-of-ghas" target="_blank" rel="noopener noreferrer">Planning a trial of GHAS (GitHub Docs) ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (GitHub Blog) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security" target="_blank" rel="noopener noreferrer">About billing for GitHub Advanced Security ↗</a>
- <a class="retro-link" href="https://github.com/security/advanced-security" target="_blank" rel="noopener noreferrer">GitHub Advanced Security product page ↗</a>

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
