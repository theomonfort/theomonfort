---
title: EMU & Data Residency
titleEn: EMU & Data Residency
summary: Compare the three GitHub Enterprise Cloud setups (personal accounts, EMU, and data residency). Covers EMU user management and restrictions, how GHE.com keeps your data in a region such as Japan, differences from GitHub.com, and how Copilot fits in.
icon: 🌏
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 29.2
category: administration
related: ['enterprise-setup', 'governance', 'license-management']
links:
  - group: 📖 Enterprise Managed Users
    label: About Enterprise Managed Users
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users
  - group: 📖 Enterprise Managed Users
    label: Choosing an enterprise type
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type
  - group: 📖 Enterprise Managed Users
    label: Abilities and restrictions of managed user accounts
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts
  - group: 🌏 Data residency
    label: About GitHub Enterprise Cloud with data residency
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency
  - group: 🌏 Data residency
    label: About storage of your data with data residency
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - group: 🌏 Data residency
    label: Feature overview (differences from GitHub.com)
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency
  - group: 🌏 Data residency
    label: Network details for GHE.com
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom
  - group: 🌏 Data residency
    label: GitHub Copilot with data residency
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency
  - group: 📰 Announcements
    label: GitHub Enterprise Cloud data residency in Japan is GA (2025-12-18)
    url: https://github.blog/changelog/2025-12-18-github-enterprise-cloud-data-residency-in-japan-is-generally-available/
---

## In a nutshell

<div class="hero-quote hero-quote-admin">
  <p>
    GitHub Enterprise Cloud comes in three setups, depending on <strong>who manages the accounts</strong> and <strong>where the data lives</strong>.
  </p>
  <p>
    <strong>EMU</strong> issues accounts from your company IdP. <strong>Data residency</strong> builds on EMU and hosts your enterprise on a dedicated <strong>GHE.com</strong> subdomain, storing code and data in <strong>a region of your choice, such as Japan</strong>.
  </p>
</div>

## Three GHEC setups <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type" target="_blank" rel="noopener noreferrer">📖 Docs</a>

At creation you pick the **account type** and the **data hosting region**.

| | Personal accounts | **EMU** | **Data residency** |
| --- | --- | --- | --- |
| 🌐 URL | github.com | github.com | `<subdomain>.ghe.com` |
| 👤 Accounts | Self-created | From the IdP | From the IdP (**EMU**) |
| 🔑 IdP | Optional (SAML) | SSO + SCIM | SSO + SCIM |
| 📢 Public repos, gists | ✅ | ❌ | ❌ |
| 🤝 Outside collaboration | ✅ | ❌ Read-only | ❌ GHE.com only |
| 🗾 Data stored in | US | US | EU, AU, US, **Japan** |

## EMU vs SAML-only <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Personal accounts can still use SAML SSO. The difference is **who owns the account** and **how people sign in**.

| | Personal accounts + SAML | **EMU** |
| --- | --- | --- |
| 👤 Accounts | Created by the user | Created, updated, suspended by the IdP |
| 🔗 Integration level | Enterprise or org | **Enterprise only** |
| 🔑 SCIM | Optional (per org) | **Auth and SCIM both required** |
| 🚪 Sign-in | GitHub password, then IdP | IdP from the start |
| 🏷️ Username | Managed by the user | Managed by the IdP (`mona_octocorp`) |

## Admin reach

Personal accounts also exist **outside** the enterprise, so some areas are beyond the admin's policies. With EMU, the account itself lives **inside** the enterprise.

| What | Personal accounts | **EMU** |
| --- | --- | --- |
| 🏢 Public repos in the enterprise | ✅ By policy | 🚫 Blocked |
| 🌍 Outside orgs and their policies | ⚠️ Out of reach | 🚫 Can't join |
| 👤 Personal public repos | ⚠️ Out of reach | 🚫 Blocked |
| 🔒 Personal private repos | ⚠️ Out of reach | ✅ Allow or block |
| 📝 Gists, PRs or stars outside | ⚠️ Out of reach | 🚫 Blocked |

✅ Admin can control ⚠️ Outside admin reach 🚫 Blocked by design

## EMU restrictions <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Tighter control comes with trade-offs. Check these four points before adopting.

<div class="ctl-widget">
<p class="ctl-hint">▸ Click + for details</p>
<div class="ctl-list">
<details class="ctl-item" name="emu-limits">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">👥</span><span class="ctl-name">Everyone is a managed user</span><span class="ctl-when">Externals live in the IdP too</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Contractors and outside developers also need an account in Entra ID or Okta</span></p>
<p class="ctl-row"><span class="ctl-k">Fix</span><span class="ctl-v">Provision them from the IdP and use the <b>guest collaborator</b> role to limit internal repo access</span></p>
</div>
</details>
<details class="ctl-item" name="emu-limits">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔑</span><span class="ctl-name">One IdP only</span><span class="ctl-when">Same IdP for auth and SCIM</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Partners</span><span class="ctl-v">Entra ID (SAML / OIDC), Okta (SAML), PingFederate (SAML)</span></p>
<p class="ctl-row"><span class="ctl-k">Note</span><span class="ctl-v">Mixing <b>Okta and Entra ID</b> (one for auth, the other for SCIM) is not supported</span></p>
</div>
</details>
<details class="ctl-item" name="emu-limits">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🚫</span><span class="ctl-name">No public content</span><span class="ctl-when">Public repos, gists, public Pages</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Visibility</span><span class="ctl-v">Only <b>private and internal</b> repos. Use internal repos for InnerSource</span></p>
<p class="ctl-row"><span class="ctl-k">Other</span><span class="ctl-v">Cannot create or comment on gists, no GitHub Pages visible outside the enterprise</span></p>
</div>
</details>
<details class="ctl-item" name="emu-limits">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🤝</span><span class="ctl-name">No outside collaboration</span><span class="ctl-when">OSS needs a second account</span><a class="ctl-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Scope</span><span class="ctl-v">Cannot push, open PRs or issues, star, or fork outside the enterprise (public repos are read-only)</span></p>
<p class="ctl-row"><span class="ctl-k">Impact</span><span class="ctl-v">OSS contributors keep a personal account too. Watch for leaks when switching accounts</span></p>
</div>
</details>
</div>
</div>

## What is data residency (GHE.com)? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency" target="_blank" rel="noopener noreferrer">📖 Docs</a>

GitHub.com stores data in the **US** by default. With data residency, your enterprise lives on a **dedicated GHE.com subdomain** (e.g. `octocorp.ghe.com`) in the region you choose.

- 🗺️ **Regions**: EU, Australia, US, **Japan** (GA Dec 2025)
- 🔐 **Identity**: **EMU only**, isolated from the GitHub.com community
- ☁️ **vs GHES**: Latest features like Copilot, no upgrade downtime

| 📍 Stored in region | 🌐 May leave the region |
| --- | --- |
| Repos, code, PRs, comments | Telemetry with pseudonymous IDs |
| Actions data and logs, BCDR | Billing, license, support data |
| Email, username, name, IP | Copilot data (default), secret validity checks |

## Differences from GitHub.com <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Features are close to EMU on GitHub.com. A few are unavailable, and **URLs change**.

- 🛒 **No GitHub Marketplace**: install actions and apps from source
- 🍎 No **macOS runners** or **Maven / Gradle** packages yet
- 📊 No org or enterprise **dependency insights** yet

| Use | GitHub.com | GHE.com |
| --- | --- | --- |
| API | `api.github.com` | `api.SUBDOMAIN.ghe.com` |
| Container registry | `ghcr.io` | `containers.SUBDOMAIN.ghe.com` |
| SSH clone | `git@github.com:` | `SUBDOMAIN@SUBDOMAIN.ghe.com:` |

> ⚠️ IP ranges and SSH fingerprints also differ from GitHub.com. Update firewall, IdP, and storage allowlists for GHE.com.

## Copilot with data residency <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Assign **Copilot Business or Enterprise** to use Copilot on GHE.com (no Pro or Free). Copilot data is processed **outside your region by default**. To keep it in region, enable the **Restrict Copilot to data residency compliant models** policy (off by default).

| | Default | **Policy enabled** |
| --- | --- | --- |
| 🧠 Inference, prompts, logs | May leave the region | **Stays in region** |
| 🤖 Available models | All models | Region-certified models only |
| 💰 AI credit consumption | Standard | **+10%** |
| 🗺️ Supported regions | All regions | **US and EU only** |

> ⚠️ The Japan region does not yet support in-region Copilot inference. Japanese enterprises still have Copilot data processed outside the region.

## ★ Which one to choose? <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Decide **before you create the enterprise**. Three questions get you there.

```mermaid
flowchart LR
  Q1{"Must you choose<br/>where data is stored?"}
  Q2{"Need public repos, gists,<br/>or outside OSS work?"}
  Q3{"Can the IdP be the source<br/>of truth for users?"}
  DR(["🌏 Data residency<br/>GHE.com + EMU"])
  EMU(["🏢 EMU<br/>github.com"])
  PA(["👤 Personal accounts<br/>+ SAML SSO"])
  Q1 -->|"Yes"| DR
  Q1 -->|"No"| Q2
  Q2 -->|"Yes"| PA
  Q2 -->|"No"| Q3
  Q3 -->|"Yes"| EMU
  Q3 -->|"No"| PA

  classDef q fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef dr fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef emu fill:#1a1500,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef pa fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class Q1,Q2,Q3 q
  class DR dr
  class EMU emu
  class PA pa
```

> ⚠️ You cannot switch types after creation. Moving from a personal-account enterprise to EMU or GHE.com means creating a new enterprise and migrating (for example with GitHub Enterprise Importer).
