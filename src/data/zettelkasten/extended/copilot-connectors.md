---
title: "Copilot Connectors"
group: "plan"
tags: ["connectors", "mcp", "oauth", "slack", "figma", "copilot-app"]
aliases: ["Connectors"]
---

**Copilot Connectors** (Public Preview, **26 verified services** at launch on `2026-10-28`) are [[GitHub]]-verified integrations built on remote HTTP [[MCP Servers]], adding GitHub-managed setup and single sign-on authentication instead of manual JSON wiring.

## Manual MCP Server vs Copilot Connector

| Aspect | Manual MCP Server | Copilot Connector |
| --- | --- | --- |
| **What it is** | Custom or third-party tools/context via [[MCP Servers]] | GitHub-verified, ready-to-use MCP integration (e.g., **Slack**, **Figma**, **Work IQ** for Teams/SharePoint) |
| **Setup** | Edit [[MCP Configuration]] and wire auth yourself | Select service, sign in once via OAuth/SSO, approve access |
| **Availability** | Only on the surface where you configured it | Reused automatically across supported surfaces (including Mobile via [[Connected Cloud Continuity]]) |
| **Runtime Boundary** | Local, IDE, or [[Cloud Agent MCP Configuration]] | Local and cloud sandbox sessions (**not** Actions-hosted [[Copilot Cloud Agent]] sessions) |

## Where to Enable Across 4 Surfaces (Subject to [[MCP Allowlist Governance]])

- **Web / Cloud**: `github.com/copilot/customize` (Customization page)
- **[[GitHub Copilot App]]**: `Customize -> MCP -> GitHub verified`
- **[[Copilot CLI]]**: `/mcp -> Connectors`
- **[[Copilot in VS Code]]**: `Agents window -> Customizations` inside the [[VS Code Agents Window]]
