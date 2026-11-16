---
title: "Enterprise Managed Users"
group: "deployment"
tags: ["emu", "iam", "scim", "deployment", "ghec"]
aliases: ["EMU"]
---

**Enterprise Managed Users** (`EMU`) is a [[GitHub]] deployment model on [[GitHub Enterprise Cloud]] (and mandatory on [[GHE.com Data Residency]]) where the corporate Identity Provider (`IdP`) creates, owns, and suspends all user accounts inside the enterprise boundary.

## Personal Accounts + SAML vs EMU

Both models authenticate through an IdP via [[SAML & OIDC SSO]], but account ownership and lifecycle enforcement differ fundamentally:

| Capability | Personal Accounts + SAML | Enterprise Managed Users (`EMU`) |
| --- | --- | --- |
| **SSO protocol** | SAML only | **SAML** or **OIDC** (Entra ID, Okta) |
| **SSO enforcement scope** | Enterprise or per-organization | **Enterprise-wide only** |
| **[[SCIM Provisioning]]** | Optional (manages org membership only) | **Required** (creates, updates, and suspends accounts) |
| **Sign-in flow** | GitHub password first, then IdP | IdP-first authentication from day one |
| **Username format** | Chosen by the individual user | Enforced by IdP with enterprise suffix (`mona_octocorp`) |
| **External vendors** | Repo-scoped [[Outside Collaborators]] | IdP-provisioned [[EMU Guest Collaborators]] |

## Account Lifecycle & Single-IdP Architecture

- **Bootstrap Setup User**: Creating an EMU enterprise provisions a single recovery/setup account (`<shortcode>_admin`) used strictly during [[Enterprise Trial & Initial Setup]] to wire up SSO and SCIM, never for daily coding.
- **One IdP Rule**: The exact same IdP tenant must handle both SSO authentication and [[SCIM Provisioning]] (supported partners: Microsoft Entra ID via OIDC/SAML, Okta via OIDC/SAML, and PingFederate via SAML; mixing Okta for auth with Entra ID for SCIM is unsupported).
- **Group-Driven Access & Trade-Offs**: Provisioned users start as unaffiliated enterprise members until mapped via [[IdP Group & Team Sync]], and operate under strict public-visibility and external-collaboration guardrails detailed in [[EMU Account Restrictions]].
