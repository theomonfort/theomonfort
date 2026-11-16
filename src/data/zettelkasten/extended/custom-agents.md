---
title: "Custom Agents"
group: "plan"
tags: ["custom-agent", "agent-md", "personas", "harness", "agents"]
aliases: ["Custom Agent"]
---

**Custom Agents** (`.agent.md`) are specialist profiles on [[GitHub]] Copilot that bundle **persona, tools, model, MCP servers, subagent delegation, and decision rules** together so Copilot switches cleanly between Planner, Design Reviewer, Security Reviewer, and Tester roles.

## What Happens When Invoked?

When you invoke a custom agent (for example `/tdd-red add api endpoint`), Copilot reads its [[Agent Markdown Config]] on top of standing [[Custom Instructions]]:

1. **Adjusts Available Tools**: Narrows the toolset to only what `.agent.md` permits.
2. **Injects Agent Definition**: Appends the `CUSTOM AGENT` definition into the session.
3. **Appends User Prompt**: Layers `SYSTEM & TOOLS -> INSTRUCTIONS -> CUSTOM AGENT -> PROMPT`.

## Ecosystem Connections

- Published at four levels via [[Custom Agent Scopes]], discoverable via [[GitHub Agent Finder]], and shippable inside `com.github.copilot/` of [[Plugin Manifest & Namespace]].
- Contrasted with host modes in [[VS Code Agent Modes]] and built-in helpers in [[Copilot CLI Subagents]], delegating heavy research to [[Subagents]] and pinning models via [[Copilot Model Selection]].
