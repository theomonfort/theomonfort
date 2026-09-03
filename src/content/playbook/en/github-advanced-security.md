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

## Rolling out across the enterprise

<div class="hero-quote hero-quote-plain">
  <p>
    Once the licenses are bought, a single <strong>security configuration</strong> created under <strong>Enterprise → Settings → Advanced Security → Code security</strong> pushes the same settings to every Organization and repository beneath it.
  </p>
  <p>
    Hitting <strong>New configuration</strong> pre-fills the form with the <strong>GitHub recommended</strong> values. Copying that as your baseline is the safe way to start.
  </p>
</div>

### ⚠️ Three things to know first

**1. Push protection turns on, and pushes containing secrets get blocked**

| Blocked | Not blocked |
| --- | --- |
| `git push` · commits made in the GitHub UI · file uploads · REST API requests | `git pull` · `git clone` · `git fetch` |

> ⚠️ People often assume "secret scanning will stop me from pulling." Push protection only blocks **pushes** — read operations are completely unaffected.

**2. Code scanning runs at three different times**

- 📤 On **every push** to the default branch or any protected branch
- 🔀 On **every pull request creation and commit** targeting the default branch or any protected branch (excluding PRs from forks)
- 📅 On a **weekly schedule**

Which means it **consumes GitHub Actions minutes** — the cost factor that bites hardest in an enterprise-wide rollout.

> 💡 On repositories with no CodeQL-supported languages, enabling default setup runs no scans and uses no Actions minutes.
> 🚧 Code scanning by itself **does not block merges**. If you want that, you need a separate ruleset (below).

**3. By default, anyone with write access can bypass push protection**

- 🛂 If you trust your developers, leaving it as-is is fine — every bypass leaves an **alert + audit log entry + email to the owners**, which works well enough as a deterrent
- 🔐 To tighten it, change **Bypass privileges** in the configuration to **Specific actors** (= delegated bypass). Everyone else goes through a request → approval flow (requests expire after **7 days**)

### 🚧 Blocking merges needs a ruleset

To stop a PR from merging when code scanning finds alerts, add a **Require code scanning results** rule under **Enterprise → Policies → Repository → Rulesets**.

Three conditions cause a block:

- A required tool finds an alert of a severity defined in the ruleset
- A required tool's analysis is still in progress
- **A required tool is not configured for that repository**

> ⚠️ The third one is the trap. Apply the ruleset to repositories where CodeQL isn't enabled and **every PR gets blocked even with zero alerts**. Always go in this order: apply the configuration → confirm CodeQL is running → then the ruleset.
> 🧪 Set the enforcement status to **Evaluate** first — nothing is actually blocked, and Rule Insights shows how many merges *would* have been blocked.

### 📋 Rollout sequence

| # | What to do | Where |
| :---: | --- | --- |
| 1 | Create a copy based on GitHub recommended via **New configuration** | Enterprise → Settings → Advanced Security → Code security |
| 2 | For code scanning, pick **Enabled with advanced setup allowed** (won't break existing CodeQL workflows) | Same |
| 3 | Set **Policy → Use as default for newly created repositories** | Same |
| 4 | Leave **Enforcement** at **Not enforced** | Same |
| 5 | For existing repositories, use **Apply to → All repositories without configurations** | Configurations list |

- ⚠️ **Steps 3 and 5 are different things.** The policy only affects newly created repositories; existing repositories need the Apply to action in step 5
- 🏢 **All repositories without configurations** is only selectable at the enterprise level — it covers every unconfigured repository in one shot without disturbing orgs that already have a configuration applied
- 🗄️ It **also applies to archived repositories** (some features, secret scanning in particular, still run on archived repos)

> 🔓 **Why leave it Not enforced** — enforcing blocks repository owners from changing the settings. Roll it out loosely first, watch how it lands, and switch to enforced once your operating model has settled.
> 🎚️ Leaving an individual setting as **Not set** keeps whatever the repository already has for that one feature (it stays excluded even when the configuration is enforced) — handy for a phased rollout.

📘 Rollout references:
- <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/create-custom-configuration" target="_blank" rel="noopener noreferrer">Creating a custom security configuration for your enterprise ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/apply-custom-configuration" target="_blank" rel="noopener noreferrer">Applying a custom security configuration to your enterprise ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/code-scanning/merge-protection" target="_blank" rel="noopener noreferrer">Code scanning merge protection ↗</a>

📘 GHAS general:
- <a class="retro-link" href="https://github.blog/changelog/2025-03-04-introducing-github-secret-protection-and-github-code-security/" target="_blank" rel="noopener noreferrer">Introducing GitHub Secret Protection & Code Security (GitHub Blog) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/billing/concepts/product-billing/github-advanced-security" target="_blank" rel="noopener noreferrer">About billing for GitHub Advanced Security ↗</a>
- <a class="retro-link" href="https://github.com/security/advanced-security" target="_blank" rel="noopener noreferrer">GitHub Advanced Security product page ↗</a>
