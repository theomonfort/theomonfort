---
title: "Repository Roles"
group: "admin"
tags: ["repository-roles", "permissions", "rbac", "custom-roles", "governance"]
---

**Repository Roles** govern what teams and collaborators can do inside individual repositories under [[Enterprise Governance]], building cumulatively on top of an organization's [[Base Repository Permissions]].

## Five Cumulative Built-In Repository Roles

Each tier inherits every permission of the tier above it in the table:

| Tier | Role | Capabilities Added Over Lower Tier |
| --- | --- | --- |
| **1** | **Read** | View code, clone/pull, search, and open issues, discussions, and pull requests from forks |
| **2** | **Triage** | Manage issues and pull requests (apply labels, assign users, request reviews, close/reopen) **without code push access** |
| **3** | **Write** | Push branches, open/merge pull requests (subject to [[Enterprise & Repo Rulesets]]), and trigger GitHub Actions workflows |
| **4** | **Maintain** | Configure non-destructive repository settings (manage labels, environments, Pages, and view rulesets) without destructive or access-granting rights |
| **5** | **Admin** | Full repository control: manage team/[[Outside Collaborators]] access, secrets, webhooks, visibility (if allowed by [[Enterprise Policies]]), and repository deletion |

## Custom Repository Roles (`GHEC`)

When `Write` is too narrow and `Admin` is too dangerous, organization owners on [[GitHub Enterprise Cloud]] can define **custom repository roles** (up to org limits) by selecting a base role (`Read`, `Triage`, `Write`, or `Maintain`) and toggling fine-grained capabilities such as managing webhooks, deleting issue comments, or bypassing secret scanning push protection (see Guardrail #17 in [[GitHub Well-Architected Guardrails]]).
