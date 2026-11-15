---
title: "EMU Guest Collaborators"
group: "admin"
tags: ["emu", "guest-collaborators", "contractors", "licensing", "iam"]
aliases: ["Guest Collaborators"]
---

**EMU Guest Collaborators** provide restricted external vendor and contractor access inside [[Enterprise Managed Users]] and [[GHE.com Data Residency]] enterprises, where personal-account [[Outside Collaborators]] cannot exist due to [[EMU Account Restrictions]].

## IdP Provisioning & Internal Repository Isolation

- **IdP-Managed Identity**: Contractors and agency developers must first receive an identity in the enterprise's single IdP (Entra ID, Okta, or PingFederate) and be provisioned via [[SCIM Provisioning]] with the **Guest collaborator** enterprise role (see [[Enterprise Admin Roles]]).
- **Blocked from Internal Repositories**: Unlike regular EMU members who automatically gain read access to every `internal` InnerSource repository across the enterprise, **Guest Collaborators cannot view internal repositories** unless explicitly added to the specific repository or team.
- **Scoped Org & Team Access**: Administrators grant access to target private repositories either directly or through dedicated contractor teams via [[IdP Group & Team Sync]].

## Seat & Copilot Billing Rules

- **GHE License**: Once added to an organization or granted access to a private repository, a Guest Collaborator consumes **1** GitHub Enterprise seat under [[GHE & Copilot Licenses]] (deduplicated across orgs by [[Multi-Org Seat Deduplication]]).
- **Copilot License**: Assigning Copilot Business or Enterprise to a Guest Collaborator bills **1** Copilot seat and grants access to the enterprise [[Shared AI Credit Pool]] subject to any [[User-Level Budgets]].
