---
title: "EMU Account Restrictions"
group: "admin"
tags: ["emu", "restrictions", "security", "visibility", "innersource", "deployment"]
---

**EMU Account Restrictions** define the visibility, identity, and collaboration boundaries enforced on managed user accounts (`<username>_<shortcode>`) in [[Enterprise Managed Users]] and [[GHE.com Data Residency]] deployments.

## Four Core EMU Operational Boundaries

| Restriction Area | Enforced Behavior | Enterprise Workaround / Design Pattern |
| --- | --- | --- |
| **1. Everyone is a managed user** | Standard [[Outside Collaborators]] do not exist; contractors and external partners cannot be invited by personal handle | Provision externals in Entra ID or Okta and assign the [[EMU Guest Collaborators]] role so they cannot view internal repos |
| **2. Single IdP requirement** | One IdP must run both [[SAML & OIDC SSO]] and [[SCIM Provisioning]] | Standardize on Entra ID, Okta, or PingFederate; never split SSO and SCIM across two IdPs |
| **3. No public content** | Managed users cannot create public repositories, gists, gist comments, or externally visible GitHub Pages | Use **private** and **internal** repositories (internal repos enable enterprise-wide InnerSource); personal user repos are private-only and can be disabled by [[Enterprise Policies]] |
| **4. No outside collaboration** | Managed users cannot join outside orgs or push, fork, star, or open issues/PRs on external `github.com` repos (external public repos are strictly **read-only**) | Open-source maintainers keep a separate personal `github.com` account and isolate credentials/SSH keys to prevent accidental code leaks |

## Policy Interaction Inside the Enterprise

- **Organization Access**: Managed users can be added to any organization inside their enterprise via [[IdP Group & Team Sync]] or [[Enterprise & Org Teams]].
- **Personal Repositories**: When personal repositories are blocked by enterprise policy, teams needing scratch space typically provision a dedicated Sandbox organization under [[Organization Topology Models]].
