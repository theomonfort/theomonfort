---
title: "Issue Fields"
group: "collaboration"
tags: ["issue-fields", "metadata", "organization", "planning"]
---

**Issue Fields** (GA `2026-07-02`) add structured, typed organization-wide metadata to [[Issues & Sub-issues]] on GitHub so priority, effort, and dates stay searchable, reportable, and consistent across every repository.

## Default & Custom Organization Fields

| Field | Type | Default Issue Types | Primary Use |
| --- | --- | --- | --- |
| **Priority** | Single select | All types | Shared priority vocabulary across teams |
| **Effort** | Number / select | Bug, Task, Feature | Sizing estimates and capacity tracking |
| **Start / Target date** | Date | Feature only | Planned start and delivery deadline |
| **Custom** | Any supported type | Admin-selected | Organization-specific classification values |

## Administration & Views

- Configured by organization admins under `Organization Settings > Planning > Issue fields`, choosing which fields appear per issue type.
- Directly filterable and groupable across tables, boards, and roadmaps in [[GitHub Projects]].
