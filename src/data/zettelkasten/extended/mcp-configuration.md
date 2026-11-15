---
title: "MCP Configuration"
group: "plan"
tags: ["mcp-json", "vscode", "copilot-cli", "configuration", "mcp"]
aliases: [".mcp.json", "mcp-config.json"]
---

**MCP Configuration** wires local `stdio` and remote `HTTP` [[MCP Servers]] across repository-shared workspaces, personal machines, plugins, and custom agents.

## Workspace vs Personal Files

| Scope | File Path | Top-Level Key & Notes |
| --- | --- | --- |
| **Shared Repo** | `.mcp.json` (repo root) | Uses top-level `mcpServers` object. Commit via Git, **never include credentials**. In VS Code (`Customizations -> MCP Servers -> Workspace +`), enable experimental `chat.mcp.workspaceRootConfig.enabled`. |
| **Legacy VS Code** | `.vscode/mcp.json` | Uses top-level `servers` (deprecated in guided flow). **Migration gotcha**: moving to `.mcp.json` for CLI + VS Code requires renaming `servers` to `mcpServers`, not just renaming the file. |
| **Personal Global** | `~/.copilot/mcp-config.json` | Machine-only config across all workspaces (`Global -> Copilot Global` in VS Code). |

## Copilot CLI & Packaging

```bash
# After trusting the workspace folder
copilot mcp add <server-name>
copilot mcp list
```

- Can also be embedded per plugin in `mcp.json` ([[Plugin Manifest & Namespace]]) or per persona under `mcp-servers:` ([[Agent Markdown Config]]).
