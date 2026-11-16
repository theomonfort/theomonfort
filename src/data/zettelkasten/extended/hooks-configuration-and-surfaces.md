---
title: "Hooks Configuration & Surfaces"
group: "plan"
tags: ["hooks-json", "cloud-agent", "copilot-cli", "vscode", "hooks"]
aliases: ["hooks.json"]
---

**Hooks Configuration & Surfaces** govern how `.github/hooks/*.json` files configure [[Hooks]] ([[PreToolUse Guardrails]] and [[Observation & Audit Hooks]]) across local and cloud runtimes.

## `.github/hooks/*.json` Schema

```json
{
  "version": 1,
  "hooks": {
    "preToolUse": [
      {
        "type": "command",
        "bash": "./scripts/guard.sh",
        "powershell": "./scripts/guard.ps1",
        "cwd": ".",
        "timeoutSec": 30,
        "env": { "LOG_LEVEL": "INFO" }
      }
    ]
  }
}
```

- Provide both `bash` and `powershell` for cross-OS teams; multiple entries in an event array execute **top to bottom**; default timeout is **30 seconds**; payloads pass via JSON `stdin` / `stdout`.
- Copilot-specific hooks can also be packaged under `com.github.copilot/` in [[Plugin Manifest & Namespace]].

## Loading Source & Schema Differences by Surface

| Surface | Loaded From | Enforcement Scope | JSON Key Variant |
| --- | --- | --- | --- |
| **Copilot CLI** | `.github/hooks/*.json` in current directory | Your CLI session | `timeoutSec` + `toolName` / `toolArgs` / `permissionDecision` |
| **VS Code Agent** | `.github/hooks/*.json` in open workspace | Your VS Code session | `timeout` + `tool_name` / `tool_input` / `hookSpecificOutput` |
| **Copilot Cloud Agent** | `.github/hooks/*.json` on **default branch** | **All Cloud Agent sessions** on that repo | `timeoutSec` + `toolName` / `toolArgs` / `permissionDecision` |
