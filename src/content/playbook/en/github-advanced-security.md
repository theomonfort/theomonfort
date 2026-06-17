---
title: GitHub Advanced Security
titleEn: GHAS
summary: GitHub's paid security product suite. Split into GitHub Secret Protection ($19) and GitHub Code Security ($30) in April 2025, billed per active committer. Public repos remain free.
icon: /theomonfort/icons/ghas.png
color: amber
accent:
  text: text-crt-amber
  border: border-crt-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#ffb000"
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

<div class="hero-quote hero-quote-plain">
  <p>
    GitHub provides two <strong>Risk Assessments</strong> to visualize your organization's security posture — <strong>no license required, completely free</strong>.
  </p>
  <p>
    Both can be triggered with a single click from <strong>Org → Security → Assessments</strong>, and you can review the results before deciding to purchase Secret Protection / Code Security.
  </p>
</div>

| Assessment | What it shows | Scope | Frequency | Details |
| --- | --- | --- | :---: | --- |
| 🔑 **Secret Risk Assessment** | Types and count of secrets hiding in org repos | **All repos** (public / private / internal / archived) | Once | <a class="retro-link" href="/theomonfort/en/playbook/secret-scanning">Secret Scanning ↗</a> |
| 🔍 **Code Security Risk Assessment** | Code vulnerabilities detected by CodeQL (severity / language / Autofix-eligible count) | **Up to 20 most active repos** | Once every 90 days | <a class="retro-link" href="/theomonfort/en/playbook/code-scanning">Code Scanning ↗</a> |

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
