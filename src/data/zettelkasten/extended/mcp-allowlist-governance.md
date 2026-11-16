---
title: "MCP Allowlist Governance"
group: "plan"
tags: ["allowlist", "denylist", "mcp", "security", "governance"]
aliases: ["allowedMcpServers", "deniedMcpServers"]
---

**MCP Allowlist Governance** (Well-Architected Guardrail #21, managed settings GA `2026-08-06`, CLI custom registry allowlists `2026-04-16`) prevents unvetted [[MCP Servers]] from receiving enterprise code or credentials.

## Policy Keys in Managed Settings

Configured inside [[Copilot Managed Settings]] (`OVERRIDABLE` per team) alongside org/enterprise MCP policies:

- **`allowedMcpServers` (Strict Allowlist)**: Only listed servers may run (matched by remote URL with `*` wildcards or local `stdio` command). Setting `[]` blocks all external servers so only built-ins like [[GitHub MCP Server]] remain active.
- **`deniedMcpServers` (Explicit Denylist)**: Blocks specific URLs or commands even if matched by an allowlist rule (built-in servers cannot be blocked).
- **Registry-Based Allowlists**: Enterprises can point Copilot CLI and VS Code at an internal MCP registry URL so developers only install approved servers in [[MCP Configuration]].
