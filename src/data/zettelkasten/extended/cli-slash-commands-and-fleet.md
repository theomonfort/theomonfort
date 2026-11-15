---
title: "CLI Slash Commands & Fleet"
group: "develop"
tags: ["cli", "fleet", "slash-commands", "parallel"]
aliases: ["Fleet Mode", "/fleet"]
---

**CLI Slash Commands & Fleet** provide interactive session orchestration, parallel subagent fan-out, and handoffs inside [[Copilot CLI]].

## Essential Slash Commands

| Command | Action |
| --- | --- |
| **`/fleet [PROMPT]`** | Splits a multi-part plan across parallel [[CLI Built-in Subagents]] |
| **`/delegate`** | Hands off the current task asynchronously to [[Copilot Cloud Agent]] via [[Cloud Agent Entry Points]] |
| **`/chronicle` & `/share`** | Reviews the session work log or exports/shares the transcript |
| **`/context` & `/compact`** | Inspects token usage and compacts conversation history |
| **`/ide`, `/model`, `/env`, `/task`** | Connects to [[Copilot in VS Code]], switches models, inspects environment, or checks background tasks |

## Budget Sharing

- When a session cap is configured via [[CLI Session Credit Limits]], all parallel `/fleet` subagents share that unified credit ceiling.
