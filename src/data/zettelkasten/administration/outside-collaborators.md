---
title: "Outside Collaborators"
group: "licensing"
tags: ["outside-collaborators", "licensing", "security", "contractors", "ghec"]
---

**Outside Collaborators** grant external contractors, vendors, and partners repository-scoped access inside standard personal-account [[GitHub Enterprise Cloud]] organizations without making them full organization members.

## Access Scope & License Consumption

- **Repository-Only Visibility**: Invited per repository with explicit [[Repository Roles]] (`Read`, `Triage`, `Write`, `Maintain`, or `Admin`); outside collaborators cannot see internal repositories, organization teams, or other private repositories in the org.
- **GHE License Impact**: Granting an outside collaborator access to any **private or internal repository** (excluding forks) automatically consumes **1** seat under [[GHE & Copilot Licenses]].
- **Copilot Seat Assignment**: The legacy dedicated outside-collaborator Copilot toggle has been retired; organization owners simply assign a **Copilot seat** directly to the outside collaborator like any org member, billing **1** Copilot license on the enterprise invoice.

## Governance Guardrails & Enterprise Team Caveats

- **Restrict Who Can Invite**: By default ("No policy"), any org member with repo admin rights can invite externals and silently consume seats. Enforce **Guardrail #08** in [[GitHub Well-Architected Guardrails]] (`Inviting outside collaborators = Owners only` in [[Enterprise Policies]], or uncheck `Allow members to invite outside collaborators` under `Org -> Settings -> Member privileges`).
- **Enterprise Team Promotion Warning**: Assigning [[Enterprise & Org Teams]] to an organization converts any existing outside collaborators inside that team into full enterprise members.
- **EMU Equivalent**: Outside collaborators do not exist in [[Enterprise Managed Users]]; use [[EMU Guest Collaborators]] instead.
