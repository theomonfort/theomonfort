---
title: "Copilot Connectors"
group: "copilot-app"
tags: ["connectors", "mcp", "slack", "figma"]
aliases: ["Connectors"]
---

**Copilot Connectors** (Public preview, 26 verified services at launch on `2026-10-28`) are GitHub-verified MCP servers that connect external team tools with single sign-on instead of manual MCP JSON setup.

## Supported Surfaces & Examples

- **Examples**: Pull API decisions from **Slack**, inspect UI designs from **Figma**, or retrieve Teams and SharePoint docs via **Work IQ**.
- **Where to Enable**: Open `Customize -> MCP -> GitHub verified` in the [[GitHub Copilot App]], [[Copilot in VS Code]], [[Copilot CLI]], or GitHub web (and Mobile via [[Connected Cloud Continuity]]).
- **Runtime Boundary**: Subject to org MCP allowlist policies; works in local sessions and cloud sandboxes, **not** in Actions-hosted [[Cloud Agent MCP Configuration]].
