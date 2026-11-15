---
title: "Agent Markdown Config"
group: "plan"
tags: ["agent-md", "yaml", "frontmatter", "tools", "agents"]
aliases: [".agent.md"]
---

**Agent Markdown Config** defines the `.agent.md` file format for [[Custom Agents]]: YAML frontmatter locks in runtime capabilities while the Markdown body specifies role, objective, and deliverable rules.

## The 8 Locked-In Elements

| Element | What It Controls | Example |
| --- | --- | --- |
| **Identity (`name`)** | Persona identifier | `design-reviewer`, `Planner`, `Security Reviewer` |
| **Description** | Routing / selection hint | `"Review UI differences between Figma and implementation"` |
| **Tools (`tools`)** | Allowed toolset | `read`, `search`, `edit`, `agent`, `github/*`, `figma/*` |
| **Agents (`agents`)** | Delegatable [[Subagents]] (requires `agent` in `tools`) | `Research`, `Reviewer`, `*` |
| **Model (`model`)** | Target LLM via [[Copilot Model Selection]] | `Claude Sonnet 4.5` |
| **Target (`target`)** | Host runtime target | `github-copilot`, `vscode` |
| **MCP (`mcp-servers`)** | Persona-scoped [[MCP Configuration]] & [[MCP Servers]] | Local `npx -y figma-mcp-server` |
| **Prompt Body** | Decision criteria, output format, hard rules | Separate blocking vs non-blocking findings; do not edit code |

```yaml
---
name: design-reviewer
description: Review UI differences between Figma and implementation
target: github-copilot
model: Claude Sonnet 4.5
tools: [read, search, github/pull-request-read, figma/*]
mcp-servers:
  figma:
    type: local
    command: npx
    args: ["-y", "figma-mcp-server"]
---
```
