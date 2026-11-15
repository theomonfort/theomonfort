---
title: "Copilot Spaces"
group: "develop"
tags: ["spaces", "context", "knowledge-base", "mcp", "environments"]
aliases: ["Spaces"]
---

**Copilot Spaces** (Spaces API GA `2026-05-18`) create shareable, curated context rooms on [[GitHub]] that ground Copilot answers in project-specific knowledge for feature kickoffs, architecture Q&A, onboarding, and recurring team workflows.

## Sources & Retrieval Semantics

| Source Type | How Copilot Processes It | Best For |
| --- | --- | --- |
| **Space Instructions** | Shapes role, expected answers, and boundaries inside the Space | Preventing generic or ungrounded replies |
| **Repository** | Searches and retrieves relevant slices on demand (never dumps the whole repo) | Architecture discovery across large codebases |
| **Files / Folders / Issues / PRs** | Prioritized and considered more consistently, staying live-synced with Git | Specs, API contracts, key implementations |
| **Uploads & Freeform Notes** | Uses uploaded snapshots (images, PDFs, Word/Excel) and text notes | External reference artifacts and tribal FAQs |

## Ownership & IDE Agent Integration

- Governed by [[Spaces Source Types & Sharing]] (`Organization` or `Individual` ownership; sharing never bypasses underlying repository permissions).
- Queried directly inside IDE Agent mode in [[Copilot in VS Code]] or [[Copilot CLI]] via [[Spaces IDE Integration via MCP]] on the remote [[GitHub MCP Server]] (`"X-MCP-Toolsets": "default,copilot_spaces"` -> `list_copilot_spaces` and `get_copilot_space`).
