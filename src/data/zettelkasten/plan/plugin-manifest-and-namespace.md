---
title: "Plugin Manifest & Namespace"
group: "plugins"
tags: ["plugin-json", "namespace", "portability", "manifest"]
aliases: ["plugin.json", "com.github.copilot"]
---

**Plugin Manifest & Namespace** defines the four-part directory layout of [[Agent Plugins]], cleanly separating cross-vendor portable assets from Copilot-specific extensions.

## Agent Plugins 1.0 Directory Specification

| Path | Contents | Portable Across All Clients? |
| --- | --- | --- |
| `plugin.json` | Root manifest (`$schema` targeting the Agent Plugins 1.0 spec) | Yes (all clients) |
| `skills/` | One subfolder per skill, each containing [[SKILL.md Anatomy]] | Yes (all clients) |
| `mcp.json` | Local and remote server definitions matching [[MCP Configuration]] | Yes (all clients) |
| `com.github.copilot/` | [[Custom Agents]], slash commands, rules, [[Hooks]], and canvases | Copilot only (other clients skip it) |

Keeping Copilot-specific primitives isolated inside `com.github.copilot/` lets plugin authors ship rich Copilot features without breaking standard Agent Plugins 1.0 hosts.
