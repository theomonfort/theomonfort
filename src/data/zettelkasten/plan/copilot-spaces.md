---
title: "Copilot Spaces"
group: "context"
tags: ["spaces", "context", "knowledge", "mcp"]
aliases: ["Spaces"]
---

**Copilot Spaces** (Spaces API GA `2026-05-18`) create shareable, curated context rooms on [[GitHub]] for feature kickoffs, architecture Q&A, onboarding, and recurring team workflows.

## Sources & Retrieval Semantics

| Source Type | How Copilot Processes It | Best For |
| --- | --- | --- |
| **Space Instructions** | Shapes role, expected answers, and boundaries inside the Space | Preventing generic or ungrounded replies |
| **Repository** | Searches and retrieves relevant slices on demand (never dumps the whole repo) | Architecture discovery across large codebases |
| **Files / Folders / Issues / PRs** | Prioritized and considered more consistently, staying synced with Git | Specs, API contracts, key implementations |
| **Uploads & Freeform Notes** | Uses uploaded snapshots (docs, images, spreadsheets) and meeting/design notes | External context and tribal FAQs |

## Ownership & IDE Agent Integration

- Owned by an **Organization** (`Admin / Editor / Viewer / No access`) or an **Individual**; sharing never bypasses underlying GitHub repository permissions.
- Accessible directly inside IDE Agent mode via the remote [[GitHub MCP Server]] (`"X-MCP-Toolsets": "default,copilot_spaces"` -> `list_copilot_spaces` and `get_copilot_space`).
