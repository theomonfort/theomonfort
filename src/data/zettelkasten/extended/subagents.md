---
title: "Subagents"
group: "plan"
tags: ["subagents", "context-offloading", "isolation", "summary", "agents"]
---

**Subagents** are isolated worker sessions spun up by GitHub Copilot so deep codebase exploration, test runs, or independent reviews happen in a separate context window without bloating the parent conversation.

## Context Offloading Pipeline

1. **Main Session**: Holds `SYSTEM & TOOLS + INSTRUCTIONS + PROMPT` and delegates a bounded task when `agent` is enabled in [[Agent Markdown Config]].
2. **Isolated Subagent Window**: Receives its own clean window, reads heavy inputs (`FILE 1`, `FILE 2`, `FILE 3`), and synthesizes a compact `SUMMARY`.
3. **Summary Return**: Copilot discards the intermediate file dumps and appends **only `SUMMARY`** into the parent session.

## Built-in Implementations

- Exposed as internal `searchSubagent` in [[VS Code Agent Modes]] and as the 7 specialized workers in [[Copilot CLI Subagents]], alongside user-authored [[Custom Agents]].
