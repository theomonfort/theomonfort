---
title: Enterprise Setup
titleEn: Enterprise Setup
summary: From creating a GitHub Enterprise Cloud (EMU) account to configuring SSO — spin up a 30-day free trial, set up OIDC or SAML via Entra ID, and get your team ready to log in.
icon: /theomonfort/icons/enterprise-bank.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 29.5
category: administration
archived: true
related: ['license-management']
links:
  - group: 📖 Official Documentation
    label: About Enterprise Managed Users
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users
  - group: 📖 Official Documentation
    label: Configuring OIDC for Enterprise Managed Users
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-oidc-for-enterprise-managed-users
  - group: 🛠️ Entra ID Tutorials
    label: GitHub EMU (OIDC) — provisioning tutorial
    url: https://learn.microsoft.com/en-gb/entra/identity/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-enterprise-managed-user-oidc
  - group: 🛠️ Entra ID Tutorials
    label: GitHub EMU — SAML SSO tutorial
    url: https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-tutorial
  - group: 🎥 Presentation
    label: This presentation (LiveSend)
    url: https://livesend.github.com/i/LK1bg1omD___W7epJeoQmuxhLDowsdqBPBvsRIyHVXSdVmAdyZ8bVZaOEvt2j5YU3AeMOe0RtD5pq2BVmbJKgBCNe2JmKglgmHvW0EWiaf2WWDOWxihLOJL2vk1exRp5G2
---

## In a nutshell

<div class="hero-quote hero-quote-admin">
  <p>
    Start with a <strong>30-day free trial (50 licenses)</strong>. Complete SSO, SCIM, and team configuration during the trial, then switch to a paid plan.
  </p>
</div>

## Create an Enterprise (30-day trial)

<div class="admin-columns admin-setup">
<div>

First, create a **GitHub Enterprise Cloud** account. A 30-day free trial is available.

| Type | Link |
|------|------|
| **Enterprise Managed Users (EMU)** | [Create an Enterprise](https://github.com/account/enterprises/new?users_type=enterprise_managed) |
| **Personal accounts (non-EMU)** | [Create an Enterprise](https://github.com/account/enterprises/new) |

During creation, the **Data hosting** option lets you choose between **GitHub Enterprise Cloud** (github.com) or **Data Residency** (a dedicated regional subdomain on GHE.com).

</div>
<div>

![Data hosting options](/theomonfort/playbook/img/enterprise-data-hosting.png)

</div>
</div>

## EMU: Admin account initial setup

<div class="admin-columns admin-setup">
<div>

When you choose EMU, a **dedicated admin account** (`shortname_admin`) is automatically created.

1. You receive an email to set your password — follow the link to configure it
2. Log in with the admin account → the **Overview** tab shows the setup steps
3. Follow the steps to configure SSO and provisioning

> ⚠️ This admin account is only for configuring SSO and SCIM provisioning. For day-to-day development, use user accounts provisioned through your IdP.

</div>
<div>

![EMU admin Overview](/theomonfort/playbook/img/enterprise-emu-admin-overview.png)

</div>
</div>

## SSO method: OIDC vs SAML

When enabling SSO, you choose between **OIDC** or **SAML**.

> **Important**: OIDC can only be configured on **one Enterprise per IdP tenant**. If you need multiple Enterprises on the same IdP tenant, additional ones must use SAML.

| | **OIDC** | **SAML** |
|---|---|---|
| **Conditional Access Policy (CAP)** | ✅ Real-time enforcement of IdP policies | ❌ No CAP support |
| **Session revocation** | ✅ Immediately revoked when IdP session ends | ⚠️ Token may persist until expiry |
| **Enterprises per IdP tenant** | ❌ Only 1 | ✅ Multiple |
| **Supported IdPs** | Entra ID (Azure AD) · Okta | Entra ID · Okta · PingFederate etc. |
| **Recommended for** | Primary Enterprise (strict security) | Additional Enterprises, or when CAP is not needed |

## Register the app in Entra ID

<div class="admin-columns admin-registration">
<div>

To configure SSO, add an **Enterprise Application** in **Entra ID**.

| SSO method | Application to add | Tutorial |
|---|---|---|
| **OIDC** | GitHub Enterprise Managed User (OIDC) | [Setup guide](https://learn.microsoft.com/en-gb/entra/identity/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-enterprise-managed-user-oidc) |
| **SAML** | GitHub Enterprise Managed User | [Setup guide](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-tutorial) |

<div style="display:flex;gap:1rem;justify-content:center;">
<img src="/theomonfort/playbook/img/entra-app-emu-oidc.png" alt="GitHub Enterprise Managed User (OIDC)" style="max-width:48%;" />
<img src="/theomonfort/playbook/img/entra-app-emu-saml.png" alt="GitHub Enterprise Managed User" style="max-width:48%;" />
</div>

</div>
<div>

### SAML: GitHub ↔ Entra ID field mapping

In GitHub's **Identity provider** settings, fill in the following. The Entra ID values can be found under **Enterprise Application → Manage → Single sign-on**.

| GitHub field | Entra ID value |
|---|---|
| **Sign on URL** | Login URL |
| **Issuer** | Microsoft Entra Identifier |
| **Public certificate** | Certificate (Base64) — paste the text content from the file |

</div>
</div>

## SCIM Provisioning configuration

After SSO, configure automatic user provisioning in **Entra ID → Enterprise Application → Manage → Provisioning**.

<div class="admin-columns admin-setup">
<div>

### Provisioning fields

- **Tenant URL**: `https://api.github.com/scim/v2/enterprises/<enterprise-slug>`
- **Secret Token**: A **Personal Access Token (PAT)** created with the GitHub setup user (`shortname_admin`)

</div>
<div>

![Provisioning configuration](/theomonfort/playbook/img/entra-provisioning-config.png)

> Create the PAT in GitHub under **Settings → Developer settings → Personal access tokens** with the `admin:enterprise` scope.

</div>
</div>

Add security groups or users under **Users and groups**. Entra ID provisions them to GitHub Enterprise **every ~40 minutes**.

## IdP Group and Team sync

Provisioned users start **unaffiliated**, without an org or team. Sync IdP groups (**security groups in Entra ID**) to automate membership.

<div class="admin-columns admin-setup">
<div>

| Configuration | Result |
|---|---|
| **No group sync** | Enterprise only, no org/team |
| **Enterprise Team + IdP group** | Group members sync to the Enterprise Team |
| **Org Team + IdP group** | Group members sync to the Org Team and automatically join its org |

In GitHub, go to the Team settings → **Identity Provider Group** and select the corresponding IdP group.

</div>
<div>

![IdP Group sync](/theomonfort/playbook/img/enterprise-idp-group-sync.png)

> **For Entra ID**: you can only connect a team to a **security group**. Microsoft 365 groups and nested (parent/child) groups or teams are not supported.

</div>
</div>
