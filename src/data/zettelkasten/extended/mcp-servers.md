---
title: "MCP Servers"
group: "plan"
tags: ["mcp", "model-context-protocol", "tools", "extensibility"]
aliases: ["Model Context Protocol", "MCP Server"]
---

**MCP Servers** (**Model Context Protocol**, `modelcontextprotocol.io`) connect [[GitHub]] Copilot hosts (VS Code, Copilot CLI, Copilot App, Cloud Agent, Visual Studio) to live external tools and context via a **1 MCP Client <-> 1 MCP Server** architecture.

## Local `stdio` vs Remote `HTTP` Execution

| Mode | How It Runs | Typical Use Case |
| --- | --- | --- |
| **`stdio`** | Copilot launches the server as a **local child process** on your machine (`npx` / `npm exec`) | Local Playwright, Context7, filesystem tools, or inline servers in [[Agent Markdown Config]] |
| **`HTTP` (`SSE` / `streamable-http`)** | Server runs **remotely in the cloud**, and Copilot connects as an HTTP client | Remote [[GitHub MCP Server]] (`https://api.githubcopilot.com/mcp/`), SaaS APIs, and [[Copilot Connectors]] |

## Setup, Discovery & Governance

- Configured in `.mcp.json` or `~/.copilot/mcp-config.json` via [[MCP Configuration]], discoverable via [[GitHub Agent Finder]], bundleable inside [[Agent Plugins]], and governed at enterprise scale via [[MCP Allowlist Governance]].
