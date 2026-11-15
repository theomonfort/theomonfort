---
title: "Enterprise & Org Teams"
group: "admin"
tags: ["teams", "enterprise-teams", "org-teams", "scim", "codeowners", "governance"]
aliases: ["Enterprise Teams", "Organization Teams"]
---

**Enterprise & Org Teams** operationalize the [[Enterprise Governance]] rule that permissions are granted strictly via `IdP -> Teams -> Repositories`, never to individual accounts.

## Organization Teams vs Enterprise Teams (GA `2026-06-04`)

Use **Organization Teams** for single-org collaboration and **Enterprise Teams** when a group spans multiple organizations, enterprise roles, or cross-org billing/Copilot policies:

| Capability | Organization Team | Enterprise Team (GA `2026-06-04`) |
| --- | --- | --- |
| **Scope** | Single organization | Multiple organizations across the enterprise |
| **Assignable grants** | [[Repository Roles]], org roles, Copilot seats | All org-team grants + [[Enterprise Admin Roles]] + Copilot model policy targeting (`2026-07-31` preview) + [[.github-private & Source Org]] overrides |
| **[[IdP Group & Team Sync]]** | Supported in both [[Enterprise Managed Users]] and personal-account GHEC | **Supported in EMU only** (not available for personal-account enterprises) |
| **[[Cost Centers]] assignment** | Not supported | **Supported** (`2026-06-25` GA): members' license and AI spend follow the team automatically |
| **Mention syntax** | `@org/team-slug` | `@/ent:team-slug` |
| **`CODEOWNERS` support** | Supported | **Not supported** (as of `2026-10-14`; use org teams in `.github/CODEOWNERS`) |

## Nesting & Membership Caveats

- **Org Team Inheritance**: Unsynced organization teams support parent/child nesting where child teams inherit parent repository permissions (note: teams linked to Microsoft Entra ID security groups cannot be nested).
- **Silent Seat & Member Promotion Warning**: Assigning an Enterprise Team to an organization adds its members immediately with **no invitation step**, and promotes any [[Outside Collaborators]] in that team into full enterprise members consuming a seat under [[GHE & Copilot Licenses]].
