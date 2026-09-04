---
title: GitHub Advanced Security
titleEn: GHAS
summary: GitHub's paid security product suite. Split into GitHub Secret Protection ($19) and GitHub Code Security ($30) in April 2025, billed per active committer. Public repos remain free.
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
  - group: 🏢 Enterprise rollout
    label: Code security configurations REST API
    url: https://docs.github.com/en/enterprise-cloud@latest/rest/code-security/configurations
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
    <strong>GitHub Advanced Security (GHAS)</strong> is GitHub's paid add-on that bundles security features. It was the license needed to enable code scanning and secret scanning on private repos.
  </p>
  <p>
    In <strong>April 2025</strong>, it was split into <strong>GitHub Secret Protection</strong> and <strong>GitHub Code Security</strong> — you can now buy only the features you need.
  </p>
</div>

> 🌐 Public repos continue to get everything for free. A GHAS / Secret Protection / Code Security license is only required when you want to enable features on **private / internal repos**.
> 🤖 **Dependabot itself** (alerts / security updates / version updates / dependency graph) is <strong>completely free on every plan</strong> — no GHAS required. See <a class="retro-link" href="/theomonfort/en/playbook/dependabot">Dependabot ↗</a>.

## What's included?

| Product | Key features | Details |
| --- | --- | --- |
| 🔑 **Secret Protection** | Secret scanning · Push protection (org/repo level) · Custom patterns · AI detection · Validity checks | <a class="retro-link" href="/theomonfort/en/playbook/secret-scanning">Secret Scanning ↗</a> |
| 🔍 **Code Security** | Code scanning (CodeQL) · Copilot Autofix · Security campaigns · Dependency review (PR enforcement) · Security overview | <a class="retro-link" href="/theomonfort/en/playbook/code-scanning">Code Scanning ↗</a> |

## Pricing (from April 2025)

| Product | Price | Billing unit |
| --- | :---: | --- |
| 🔑 **GitHub Secret Protection** | **$19** / month | active committer |
| 🔍 **GitHub Code Security** | **$30** / month | active committer |
| 📦 Both together | $49 / month | active committer |

- 👥 **Active committer** = a unique committer who pushed to a repository with the feature enabled during the past 90 days. The same person counts as one across any number of repositories
- 💳 **Metered (pay-as-you-go)** model — no need to reserve license seats upfront; you're billed only for the people who actually push
- 🏷️ Available on **GitHub Team** plan too (previously Enterprise-only)
- 🆓 **Public repos are completely free** — open source projects need no license

> 💡 If you only need secret scanning, **Secret Protection alone ($19)** is enough. Add **Code Security ($30)** when you also want CodeQL — the split model lets you adopt incrementally.

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

📘 Risk Assessment references:
- <a class="retro-link" href="https://docs.github.com/en/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk" target="_blank" rel="noopener noreferrer">Enabling Secret Risk Assessment ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/code-security/concepts/code-scanning/code-security-risk-assessment" target="_blank" rel="noopener noreferrer">Code security risk assessment (GitHub Docs) ↗</a>
- <a class="retro-link" href="https://github.blog/changelog/2026-04-08-code-security-risk-assessment-available-for-organizations/" target="_blank" rel="noopener noreferrer">Code Security Risk Assessment GA (2026/04) ↗</a>

📘 GHAS general:
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
<details class="ctl-item" name="ghas-rollout" style="--entry-accent:#ff2e88">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤖</span><span class="ctl-name">Automate the rollout with the API</span><span class="ctl-when">everything the UI does</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/rest/code-security/configurations" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">What you get</span><span class="ctl-v"><b>create → apply → set as default</b> is fully scriptable through the <b>Code security configurations API</b> (REST). A whole enterprise rollout without opening the UI once</span></p>
<p class="ctl-row"><span class="ctl-k">Enterprise</span><span class="ctl-v"><code>POST /enterprises/{enterprise}/code-security/configurations</code> → <code>POST .../{id}/attach</code> (<code>scope</code> is <code>all</code> or <code>all_without_configurations</code>) → <code>PUT .../{id}/defaults</code>. Needs <b>admin:enterprise</b></span></p>
<p class="ctl-row"><span class="ctl-k">Organization</span><span class="ctl-v">the same three calls under <code>/orgs/{org}/...</code>. Only the org level accepts <code>scope: selected</code> with <code>selected_repository_ids</code> to <b>pick specific repos</b>. Needs <b>write:org</b> (org owner / security manager)</span></p>
<p class="ctl-row"><span class="ctl-k">Traps</span><span class="ctl-v">attach is <b>asynchronous (it just returns 202)</b>. Poll <code>GET .../{id}/repositories?status=failed</code> to confirm. If licenses run short it <b>does not error, it silently enables free features only</b></span></p>
</div>
</details>
</div>
</div>
