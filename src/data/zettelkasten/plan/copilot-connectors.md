---
title: "Copilot Connectors"
group: "mcp"
tags: ["connectors", "mcp", "oauth", "customizations"]
aliases: ["Connectors"]
---

**Copilot Connectors** (Public Preview, VS Code release `2026-10-28`) are [[GitHub]]-verified integrations built on remote HTTP [[MCP Servers]], adding GitHub-managed setup and single sign-on authentication.

## Manual MCP Server vs Copilot Connector

| Aspect | Manual MCP Server | Copilot Connector |
| --- | --- | --- |
| **What it is** | Custom or third-party tools/context via MCP | GitHub-verified, ready-to-use MCP integration |
| **Setup** | Edit [[MCP Configuration]] and wire auth yourself | Select service, sign in once, approve access |
| **Availability** | Only on the surface where you configured it | Reused automatically across supported surfaces (**excluding GitHub Actions sessions**) |
| **Choice** | Any custom, internal, or third-party server | GitHub's supported connector catalog |

## Where to Find Connectors Across 4 Surfaces

- **Web / Cloud**: `github.com/copilot/customize` (Customization page)
- **Copilot App**: `Customize -> MCP -> GitHub verified`
- **Copilot CLI**: `/mcp -> Connectors`
- **VS Code**: `Agents window -> Customizations`
