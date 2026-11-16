---
title: "Team Review Assignment"
group: "human-review"
tags: ["teams", "round-robin", "load-balance", "review-routing"]
aliases: ["Round Robin Review", "Load Balance Review", "Code Review Assignment"]
---

**Team Review Assignment** (`Org -> Teams -> <team> -> Settings -> Code review`) automatically routes `@org/team` review requests on [[Pull Requests]] (including automatic requests from [[CODEOWNERS]]) to specific individual team members.

## Routing Algorithms

| Algorithm | Selection Logic | Best For |
| --- | --- | --- |
| **Round robin** | Rotates through eligible team members in a strict circular order regardless of how many open reviews each person currently holds | Uniformly sized PRs and evenly distributed domain familiarity |
| **Load balance** | Picks members with the fewest total review assignments over the rolling 30-day window and active open queue | Variable PR complexity where long reviews would otherwise pile up on one person |

## Assignment & Notification Controls

- **Team Member Count**: Choose how many individuals (`1`, `2`, `3`, etc.) to assign whenever the team is requested.
- **Availability & Exclusions**: Automatically skip members whose GitHub profile status is set to **Busy**, exclude designated leads (`Never assign certain team members`), and optionally draw from child teams.
- **Notification Scope**: Replace the `@org/team` request with only the selected individuals (still satisfying [[CODEOWNERS]] when `Notify the entire team` is off), and click the circular **Re-request review** icon next to a reviewer after pushing fixes to [[PR Review States]].
