---
title: "Copilot Spaces"
group: "environments"
tags: ["spaces", "context", "knowledge-base", "api"]
aliases: ["Spaces"]
---

**Copilot Spaces** (with the GA Copilot Spaces API as of `2026-05-18`) creates shareable, curated context rooms on [[GitHub]] that ground Copilot answers in project-specific knowledge without repeating background prompts.

## Four Context Ingredients

| Ingredient | Examples | Role |
| --- | --- | --- |
| **Instructions** | Persona, answer format, boundaries | Shapes how Copilot responds inside the Space |
| **GitHub Content** | Repositories, folders, files, issues, PRs | Stays live-synced as repository code evolves |
| **Uploads** | Images, PDFs, Word/Excel files | Adds external reference snapshots |
| **Text Notes** | Architecture notes, meeting decisions, FAQs | Captures tribal SME knowledge |

## Where Spaces Connect

- Governed by [[Spaces Source Types & Sharing]] and queried directly from IDE Agent mode via [[Spaces IDE Integration via MCP]] in [[Copilot in VS Code]] or [[Copilot CLI]].
