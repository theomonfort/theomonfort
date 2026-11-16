---
title: "Spaces IDE Integration via MCP"
group: "environments"
tags: ["spaces", "mcp", "ide", "github-mcp-server"]
---

**Spaces IDE Integration via MCP** exposes [[Copilot Spaces]] directly inside IDE Agent mode (`list_copilot_spaces` and `get_copilot_space`) through the remote GitHub MCP Server.

## Enabling the `copilot_spaces` Toolset

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

## Workflow Integration

- Works in [[Copilot in VS Code]], [[Copilot CLI]], and [[GitHub Copilot App]] while respecting caller permissions defined in [[Spaces Source Types & Sharing]].
- Pair a Space for curated system context with [[Copilot Cloud Agent]] or local Agent mode to execute the implementation.
