---
title: "Spaces Source Types & Sharing"
group: "environments"
tags: ["spaces", "permissions", "retrieval", "context"]
---

**Spaces Source Types & Sharing** govern how [[Copilot Spaces]] retrieves attached artifacts and enforces GitHub repository access permissions.

## Retrieval Behavior by Source Type

| Source Type | How Copilot Processes It | Best For |
| --- | --- | --- |
| **Repository** | Searches and retrieves relevant slices per query rather than loading the entire repo | Large codebases and cross-cutting architecture questions |
| **File / Folder** | Prioritizes pinned file contents consistently across turns | API contracts, specs, and core modules |
| **Uploaded File** | Reads the static uploaded snapshot | External spreadsheets, diagrams, and transcripts |

## Ownership & Access Model

- **Organization Spaces**: Shared with org members, teams, or specific users using `Admin`, `Editor`, `Viewer`, or `No access` roles.
- **Individual Spaces**: Private, shared with named users, or view-only link sharing.
- **Zero Permission Escalation**: Viewers only see underlying GitHub sources they already have repository permission to read, including when accessed through [[Spaces IDE Integration via MCP]].
