---
title: "Agent Plugins"
group: "plan"
tags: ["plugins", "agent-plugins-1-0", "packaging", "open-standard"]
aliases: ["Agent Plugins 1.0"]
---

**Agent Plugins** (**Agent Plugins 1.0**, `agent-plugins.org`, GA `2026-08-12`) is an open packaging format on [[GitHub]] Copilot that bundles [[Agent Skills]] and [[MCP Servers]] into a single installable package.

## Build Once, Run Across Surfaces

- **Supported Surfaces (GA on all plans)**: VS Code, Copilot CLI, Copilot SDK, and the GitHub Copilot desktop app.
- **Directory Contract**: Separates universal `skills/` and `mcp.json` from Copilot-only extensions via [[Plugin Manifest & Namespace]].
- **Distribution & Governance**: Installed user-wide via [[Plugin Marketplaces & CLI]] and governed at enterprise scale through `enabledPlugins` and marketplace controls in [[Copilot Managed Settings]].
