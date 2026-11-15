---
title: "Entra ID Enterprise App"
group: "iam"
tags: ["entra-id", "azure-ad", "oidc", "saml", "iam"]
---

**Entra ID Enterprise App** connects Microsoft Entra ID (formerly Azure AD) to [[Enterprise Managed Users]] or [[GHE.com Data Residency]] for [[SAML & OIDC SSO]] and [[SCIM Provisioning]].

## Selecting the Official Entra Gallery Application

During [[Enterprise Trial & Initial Setup]], add the gallery application matching your chosen protocol under **Microsoft Entra ID -> Enterprise Applications -> New application**:

| Chosen Protocol | Entra ID Gallery Application Name | Tenant Constraint |
| --- | --- | --- |
| **OIDC** | `GitHub Enterprise Managed User (OIDC)` | Limit of **1** OIDC EMU enterprise per Entra tenant; supports real-time Conditional Access Policies |
| **SAML 2.0** | `GitHub Enterprise Managed User` | Supports **multiple** EMU enterprises on the same Entra tenant |

Both SSO sign-on and SCIM user provisioning must run from this single Entra ID application (splitting auth and SCIM across separate IdPs is unsupported).

## SAML Single Sign-On Field Mapping

When using SAML (`Enterprise Application -> Manage -> Single sign-on`), copy these exact values into GitHub's **Identity provider** settings:

| GitHub Identity Provider Field | Microsoft Entra ID Source Value |
| --- | --- |
| **Sign on URL** | `Login URL` |
| **Issuer** | `Microsoft Entra Identifier` |
| **Public certificate** | `Certificate (Base64)` (open the downloaded file and paste its raw text content) |

After verifying SSO sign-in, open **Manage -> Provisioning** in the same Entra app to configure [[SCIM Provisioning]] and assign **Security groups** for [[IdP Group & Team Sync]].
