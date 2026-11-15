---
title: "SAML & OIDC SSO"
group: "iam"
tags: ["sso", "oidc", "saml", "cap", "iam", "authentication"]
aliases: ["SSO", "OIDC", "SAML SSO"]
---

**SAML & OIDC SSO** centralizes authentication for [[GitHub]] enterprises on [[GitHub Enterprise Cloud]] and [[GHE.com Data Residency]] through an external Identity Provider (`IdP`).

## OIDC vs SAML on Enterprise Managed Users

When configuring [[Enterprise Managed Users]], administrators choose between **OpenID Connect (`OIDC`)** and **SAML 2.0**:

| Capability | **OIDC** | **SAML 2.0** |
| --- | --- | --- |
| **Conditional Access Policies (`CAP`)** | **Supported**: real-time enforcement of IdP device/IP/risk policies | Not supported for real-time CAP claims |
| **Session revocation** | **Immediate**: revoked as soon as the IdP session terminates | Delayed: active session token may persist until expiry |
| **Enterprises per IdP tenant** | **Maximum 1** enterprise per IdP tenant | **Multiple** enterprises on the same IdP tenant |
| **Supported EMU IdPs** | Microsoft Entra ID, Okta | Microsoft Entra ID, Okta, PingFederate |
| **Recommended target** | Primary production enterprise requiring strict zero-trust CAP | Secondary/sandbox enterprises on the same tenant, or PingFederate |

## Personal-Account SAML vs EMU SSO

- **EMU Enterprises**: SSO is mandatory at the **enterprise** level from first login (`IdP -> GitHub`), paired with [[SCIM Provisioning]] on the exact same IdP via [[Entra ID Enterprise App]] or Okta.
- **Personal-Account Enterprises**: SAML 2.0 (not OIDC) can be enabled at either the **organization** or **enterprise** level; users sign into their personal `github.com` password/passkey first, link their corporate SAML identity, and must explicitly **authorize classic PATs and SSH keys for SSO** (including migration tokens used by [[GitHub Enterprise Importer]]).
