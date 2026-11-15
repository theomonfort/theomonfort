---
title: "GitHub Enterprise Cloud"
group: "deployment"
tags: ["ghec", "deployment", "hosting", "enterprise"]
aliases: ["GHEC"]
---

**GitHub Enterprise Cloud** (`GHEC`) is [[GitHub]]'s SaaS enterprise offering, configured at creation time by choosing **who owns user accounts** (personal accounts vs IdP-managed accounts) and **where data is hosted** (`github.com` in the US vs a regional `*.ghe.com` subdomain).

## Four Enterprise Hosting Setups Compared

| Dimension | Personal Accounts (`GHEC`) | [[Enterprise Managed Users]] | [[GHE.com Data Residency]] | [[GitHub Enterprise Server]] |
| --- | --- | --- | --- | --- |
| **Hosted at** | `github.com` | `github.com` | `*.ghe.com` | Self-hosted (on-prem / cloud) |
| **Accounts** | User self sign-up | IdP (SCIM) | IdP (SCIM) | Instance-local |
| **Sign-in** | Password (+ SAML) | SAML or OIDC | SAML or OIDC | Built-in, LDAP, CAS, SAML |
| **Data location** | US | US | EU, AU, US, JP | Customer-controlled |
| **Public repos** | Allowed (policy-controlled) | Blocked | Blocked | Instance-visible only |
| **External collab** | [[Outside Collaborators]] | Read-only outside / Guest | Guest Collaborators only | None across internet |
| **Platform updates** | Automatic | Automatic | Automatic | Admin-operated upgrades |
| **Copilot surfaces** | Full web, IDE, CLI, agents | Full web, IDE, CLI, agents | Full (region policy optional) | IDE and CLI only |
| **Hosted runners** | Linux, Windows, macOS | Linux, Windows, macOS | Linux, Windows (no macOS) | None (self-hosted only) |

## Personal Accounts Governance Boundary

In standard `GHEC` with personal accounts (optionally paired with [[SAML & OIDC SSO]]), users live **outside** the enterprise on `github.com` and join enterprise organizations by invitation:

- **Inside Admin Reach**: Organization policies, enterprise repository rules, and whether enterprise orgs allow public repositories.
- **Outside Admin Reach**: Personal public or private repositories owned by the user, gists, stars/PRs on external repositories, and memberships in external `github.com` organizations.

## 3-Question Enterprise Selection Decision Flow

Decide before rollout during [[Enterprise Trial & Initial Setup]], because switching account models later is not an in-place toggle (see [[Org Transfer & Migration Limits]]):

1. **Must you choose the geographic region where code and metadata are stored?** -> **Yes**: [[GHE.com Data Residency]] (`*.ghe.com` + EMU).
2. **Do users need public repositories, gists, or open-source contributions from the same account?** -> **Yes**: Personal accounts + [[SAML & OIDC SSO]].
3. **Can your corporate IdP act as the single source of truth for every user (including contractors)?** -> **Yes**: [[Enterprise Managed Users]] on `github.com`; **No**: Personal accounts + SAML SSO.
