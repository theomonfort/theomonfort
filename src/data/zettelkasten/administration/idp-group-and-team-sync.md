---
title: "IdP Group & Team Sync"
group: "iam"
tags: ["idp", "teams", "scim", "entra-id", "iam"]
---

**IdP Group & Team Sync** maps Identity Provider security groups directly to [[Enterprise & Org Teams]], ensuring repository and role access always flows `IdP -> Teams -> Repositories` without manual membership drift.

## Provisioning Outcomes by Group Mapping

By default, [[SCIM Provisioning]] creates users in [[Enterprise Managed Users]] as **Unaffiliated** accounts with zero organization access. Linking an IdP group under **Team settings -> Identity Provider Group** automates placement:

| Mapping Configuration | Resulting Enterprise & Org Membership |
| --- | --- |
| **No IdP group linked** | User exists in the Enterprise as **Unaffiliated** (no organization or team access; eligible for enterprise-direct Copilot Business) |
| **IdP group -> Enterprise Team** | Group members sync automatically into the Enterprise Team across multiple organizations (`EMU` only) |
| **IdP group -> Organization Team** | Group members sync into the Organization Team and **automatically join the parent Organization** (`EMU` and personal-account SAML/SCIM) |

## Microsoft Entra ID Group Constraints

When syncing from [[Entra ID Enterprise App]], enforce three strict platform rules:

1. **Security Groups Only**: GitHub teams can only link to Entra ID **Security groups**; Microsoft 365 (`M365`) groups are not supported.
2. **No Nested IdP Groups**: Parent/child nested groups inside Entra ID are not flattened during team sync; assign users directly to the mapped security group.
3. **No Nested Synced Teams**: A GitHub organization team linked to an IdP group cannot have parent or child GitHub teams.

During [[EMU Type Conversion]], IdP group sync is also the step used to repopulate migrated empty team shells before reclaiming mannequins.
