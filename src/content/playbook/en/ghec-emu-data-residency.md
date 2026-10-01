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
| 👤 Accounts | By each user | By the IdP via **SCIM** | By the IdP via **SCIM** |
| 🔐 Authentication | Password, optional **SAML** | **SAML** or **OIDC**, required | **SAML** or **OIDC**, required |
| 📢 Public repos, gists | ✅ | ❌ | ❌ |
| 🤝 Outside collaboration | ✅ | ❌ Read-only | ❌ GHE.com only |
| 🗾 Data stored in | US | US | EU, AU, US, **Japan** |

## Personal accounts at a glance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Personal accounts live **outside** the enterprise and join organizations by invitation.

<div class="pa-map" style="margin:0.4rem auto 0.2rem;">
<svg viewBox="0 0 1000 392" role="img" aria-label="Personal accounts structure. Inside github.com the user lives outside the Enterprise and can join both its organizations and outside organizations. Outside organizations and personal repositories are beyond the admin's reach." style="width:100%;height:auto;display:block;font-family:inherit;">
<defs>
<marker id="pa-ok" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#00f0ff"/></marker>
<marker id="pa-warn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ffb000"/></marker>
</defs>
<rect x="6" y="26" width="988" height="358" rx="14" fill="rgba(5,6,15,0.55)" stroke="#e8f4ff" stroke-width="2.5"/>
<rect x="400" y="8" width="200" height="38" rx="6" fill="#05060f" stroke="#e8f4ff" stroke-width="2"/>
<text x="500" y="35" text-anchor="middle" font-size="24" fill="#e8f4ff">github.com</text>
<rect x="30" y="78" width="498" height="284" rx="12" fill="rgba(155,188,15,0.07)" stroke="#9bbc0f" stroke-width="3"/>
<rect x="48" y="62" width="150" height="32" rx="6" fill="#05060f" stroke="#9bbc0f" stroke-width="2"/>
<text x="123" y="85" text-anchor="middle" font-size="20" fill="#9bbc0f">Enterprise</text>
<rect x="548" y="78" width="436" height="284" rx="12" fill="rgba(255,176,0,0.05)" stroke="#ffb000" stroke-width="2" stroke-dasharray="8 6"/>
<rect x="748" y="62" width="222" height="32" rx="6" fill="#05060f" stroke="#ffb000" stroke-width="2"/>
<text x="859" y="85" text-anchor="middle" font-size="18" fill="#ffb000">⚠️ Outside admin reach</text>
<path d="M614 158 V122 H370 V156" stroke="#00f0ff" stroke-width="3" fill="none" marker-end="url(#pa-ok)"/>
<path d="M370 122 H138 V156" stroke="#00f0ff" stroke-width="3" fill="none" marker-end="url(#pa-ok)"/>
<text x="380" y="112" text-anchor="middle" font-size="20" fill="#00f0ff">✅ Can join (invited)</text>
<text x="58" y="182" font-size="21" fill="#e8f4ff">📁 Organization</text>
<path d="M78 196 V322 M78 236 H100 M78 322 H100" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="106" y="243" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="158" y="290" font-size="20" fill="#7a8aa8">⋮</text>
<text x="106" y="329" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="290" y="182" font-size="21" fill="#e8f4ff">📁 Organization</text>
<path d="M310 196 V322 M310 236 H332 M310 322 H332" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="338" y="243" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="390" y="290" font-size="20" fill="#7a8aa8">⋮</text>
<text x="338" y="329" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="572" y="182" font-size="21" fill="#ffb000">👤 User</text>
<path d="M592 196 V286 M592 236 H614 M592 286 H614" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="620" y="243" font-size="18" fill="#c9d6ea">🌐 public repo</text>
<text x="620" y="293" font-size="18" fill="#c9d6ea">🔒 private repo</text>
<path d="M652 176 H794" stroke="#ffb000" stroke-width="3" fill="none" marker-end="url(#pa-warn)"/>
<text x="723" y="164" text-anchor="middle" font-size="16" fill="#ffb000">Can join</text>
<text x="800" y="182" font-size="21" fill="#e8f4ff">📁 Organization</text>
<path d="M820 196 V322 M820 236 H842 M820 322 H842" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="848" y="243" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="900" y="290" font-size="20" fill="#7a8aa8">⋮</text>
<text x="848" y="329" font-size="19" fill="#c9d6ea">🗄️ repo</text>
</svg>
</div>

- ✅ Admins control only what is inside the enterprise, e.g. whether orgs can create **public repos**
- ⚠️ **Outside admin reach**: outside orgs and their policies, personal repos (public or private), gists, PRs and stars on outside repos

## EMU at a glance <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Managed users are created **inside** the enterprise.

<div class="emu-map" style="margin:0.4rem auto 0.2rem;">
<svg viewBox="0 0 1000 392" role="img" aria-label="EMU structure. Inside github.com, the managed user belongs to the Enterprise and can join its organizations, but cannot join organizations outside the Enterprise." style="width:100%;height:auto;display:block;font-family:inherit;">
<defs>
<marker id="emu-ok" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#00f0ff"/></marker>
<marker id="emu-ng" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#ff2e88"/></marker>
</defs>
<rect x="6" y="26" width="988" height="358" rx="14" fill="rgba(5,6,15,0.55)" stroke="#e8f4ff" stroke-width="2.5"/>
<rect x="400" y="8" width="200" height="38" rx="6" fill="#05060f" stroke="#e8f4ff" stroke-width="2"/>
<text x="500" y="35" text-anchor="middle" font-size="24" fill="#e8f4ff">github.com</text>
<rect x="30" y="78" width="704" height="284" rx="12" fill="rgba(155,188,15,0.07)" stroke="#9bbc0f" stroke-width="3"/>
<rect x="48" y="62" width="150" height="32" rx="6" fill="#05060f" stroke="#9bbc0f" stroke-width="2"/>
<text x="123" y="85" text-anchor="middle" font-size="20" fill="#9bbc0f">Enterprise</text>
<path d="M572 158 V122 H366 V156" stroke="#00f0ff" stroke-width="3" fill="none" marker-end="url(#emu-ok)"/>
<path d="M366 122 H142 V156" stroke="#00f0ff" stroke-width="3" fill="none" marker-end="url(#emu-ok)"/>
<text x="466" y="112" text-anchor="middle" font-size="20" fill="#00f0ff">✅ Can join</text>
<text x="62" y="182" font-size="21" fill="#e8f4ff">📁 Organization</text>
<path d="M82 196 V322 M82 236 H104 M82 322 H104" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="110" y="243" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="162" y="290" font-size="20" fill="#7a8aa8">⋮</text>
<text x="110" y="329" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="286" y="182" font-size="21" fill="#e8f4ff">📁 Organization</text>
<path d="M306 196 V322 M306 236 H328 M306 322 H328" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="334" y="243" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="386" y="290" font-size="20" fill="#7a8aa8">⋮</text>
<text x="334" y="329" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="522" y="182" font-size="21" fill="#ffb000">👤 User</text>
<path d="M542 196 V236 H562" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="568" y="243" font-size="18" fill="#c9d6ea">🔒 private repo</text>
<path d="M608 176 H762" stroke="#ff2e88" stroke-width="3" stroke-dasharray="7 6" fill="none" marker-end="url(#emu-ng)"/>
<circle cx="734" cy="176" r="15" fill="#05060f" stroke="#ff2e88" stroke-width="2"/>
<text x="734" y="183" text-anchor="middle" font-size="18" fill="#ff2e88">✕</text>
<text x="866" y="120" text-anchor="middle" font-size="19" fill="#ff2e88">❌ Can't join outside</text>
<text x="768" y="182" font-size="21" fill="#e8f4ff">📁 Organization</text>
<path d="M788 196 V322 M788 236 H810 M788 322 H810" stroke="#7a8aa8" stroke-width="2" fill="none"/>
<text x="816" y="243" font-size="19" fill="#c9d6ea">🗄️ repo</text>
<text x="868" y="290" font-size="20" fill="#7a8aa8">⋮</text>
<text x="816" y="329" font-size="19" fill="#c9d6ea">🗄️ repo</text>
</svg>
</div>

- ✅ Joins any org in the enterprise. Personal repos are **private only**, allowed or blocked by policy
- 🚫 No public repos or gists, no outside orgs. Public repos on github.com are **read-only** (no PRs, issues, stars)

## EMU vs SAML-only <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Personal accounts can still use SAML SSO. The difference is **who owns the account** and **how people sign in**.

| | Personal accounts + SAML | **EMU** |
| --- | --- | --- |
| 🔐 SSO protocol | **SAML** only | **SAML**, or **OIDC** (Entra ID only) |
| 🔗 SSO scope | Enterprise or org | **Enterprise only** |
| 🔄 SCIM | Optional, manages org access only | **Required**, creates and suspends the accounts |
| 🚪 Sign-in | GitHub password, then IdP | IdP from the start |
| 🏷️ Username | Managed by the user | Managed by the IdP (`mona_octocorp`) |

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
