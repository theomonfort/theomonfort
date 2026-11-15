---
title: "Base Repository Permissions"
group: "governance"
tags: ["base-permissions", "innersource", "least-privilege", "organizations", "governance"]
---

**Base Repository Permissions** (`Organization settings -> Access -> Member privileges -> Base permissions`) define the default [[Repository Roles]] floor automatically granted to every member of an organization across all of its private and internal repositories.

## Available Settings & Anti-Pattern #03

Administrators choose one of four org-wide defaults (`No permission`, `Read`, `Write`, or `Admin`). Updating this dropdown applies **immediately to every org member at once**:

- **Never Choose `Admin` (Governance Anti-Pattern #03)**: Setting `Admin` as the base permission gives every developer destructive rights (delete repos, alter access, change visibility, edit secrets) across the entire organization. Always set a low floor and elevate specific [[Enterprise & Org Teams]] instead.

## Matching Base Permission to Organization Topology

| Base Setting | Matching [[Organization Topology Models]] | Collaboration & Security Trade-Off |
| --- | --- | --- |
| **`No permission` (`None`)** | **Single Org** and confidential **Red Org** | Strictest least-privilege boundary: members only see repos granted to their teams. In a Single Org, attach an `all-members` team (`Read`) to non-sensitive repos so InnerSource does not stall |
| **`Read`** | Standard InnerSource multi-org / **Portfolio** divisions | Every org member can discover, clone, and open PRs across repos while explicit team `Write` grants control direct branch creation and merges |
| **`Write`** | High-trust **Green Org** (~90% of repos) and **Sandbox Org** | Frictionless day-one InnerSource pushing; **must** be paired with org-level [[Enterprise & Repo Rulesets]] blocking direct pushes and force pushes to default/release branches |

Note that [[Outside Collaborators]] and [[EMU Guest Collaborators]] are excluded from organization base permissions (`Guest Collaborators` also cannot read `internal` repositories).
