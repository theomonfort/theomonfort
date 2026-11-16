---
title: "GitHub MCP Server"
group: "plan"
tags: ["github-mcp-server", "github", "spaces", "security", "mcp"]
---

The **GitHub MCP Server** (`github/github-mcp-server`) is the official [[GitHub]] implementation of [[MCP Servers]], connected out of the box in Copilot CLI and Cloud Agent so AI can operate repositories natively like `gh` commands.

## Built-in Platform Capabilities

- **Core Repo Operations**: Read and manage [[Issues & Sub-issues]], Pull Requests, GitHub Actions runs, and Code Search.
- **Security Toolsets**: Secret scanning via GitHub MCP Server (GA `2026-05-05`) and dependency scanning (public preview `2026-05-05`).
- **IDE Access to Copilot Spaces**: Connect over remote HTTP with the `copilot_spaces` toolset enabled to expose `list_copilot_spaces` and `get_copilot_space` inside IDE Agent mode for [[Copilot Spaces]]:

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "X-MCP-Toolsets": "default,copilot_spaces"
      }
    }
  }
}
```

- **Governance Exemption**: As a built-in server, it remains available even when `allowedMcpServers: []` or `deniedMcpServers` is set in [[MCP Allowlist Governance]].
