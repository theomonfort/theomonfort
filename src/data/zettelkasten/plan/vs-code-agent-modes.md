---
title: "VS Code Agent Modes"
group: "agents"
tags: ["vscode", "plan-mode", "ask-mode", "search-subagent"]
aliases: ["searchSubagent"]
---

**VS Code Agent Modes** distinguish user-selectable conversation modes in VS Code from internal [[Subagents]] invoked behind the scenes alongside user-authored [[Custom Agents]].

## Selectable Modes vs Internal Helpers

| Surface | Mode / Tool | Behavior |
| --- | --- | --- |
| **Copilot Chat / VS Code** | **Agent** | Implements multi-step tasks with file editing and tool execution |
| **Copilot Chat / VS Code** | **Plan** | Researches the codebase and outlines multi-step implementation plans for user approval before editing |
| **Copilot Chat / VS Code** | **Ask** | Answers questions and investigates code read-only without making edits |
| **VS Code Internal (`1.110+`)** | **`searchSubagent`** | Runs isolated, parallel codebase searches and returns a summary to the caller |

**Implementation detail**: VS Code's former standalone `Explore` behavior now runs via `searchSubagent`, whose prompt and tool logic live in internal TypeScript/TSX rather than an editable `.agent.md` file.
