---
title: "Cloud Agent MCP Configuration"
group: "cloud-agent"
tags: ["cloud-agent", "mcp", "playwright", "github-mcp"]
---

**Cloud Agent MCP Configuration** equips [[Copilot Cloud Agent]] sessions with external Model Context Protocol tools, managed separately from local IDE MCP files.

## Built-in & Custom Servers

- **Enabled by Default**: Both the **GitHub MCP Server** and **Playwright MCP Server** are active out of the box in every Cloud Agent run with zero setup.
- **Repository / Org Configuration**: Paste server JSON under `Settings -> Code & automation -> Copilot -> MCP servers` on GitHub.com (for example adding remote HTTP documentation servers like Context7) after pre-steps in [[copilot-setup-steps.yml]].
- **Connectors Note**: Interactive [[Copilot Connectors]] work locally and in cloud sandboxes, not inside Actions-hosted Cloud Agent sessions.
