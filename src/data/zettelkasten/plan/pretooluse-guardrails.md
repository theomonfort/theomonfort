---
title: "PreToolUse Guardrails"
group: "hooks"
tags: ["pretooluse", "deny", "security", "guardrails"]
aliases: ["preToolUse"]
---

**PreToolUse Guardrails** (`preToolUse`) is the **only** event among the six [[Hooks]] capable of stopping an agent tool action in its tracks before execution.

## Decision Contract (`deny` / `allow` / `ask`)

Right before tool execution, the script receives `toolName` and `toolArgs` on `stdin` (see VS Code naming variants in [[Hooks Configuration & Surfaces]]) and can output JSON on `stdout`:

- `"permissionDecision": "deny"` + `"permissionDecisionReason"`: Blocks the tool call immediately.
- `"permissionDecision": "ask"`: Forces interactive user confirmation before running.
- `"permissionDecision": "allow"` (or empty `stdout` with exit `0`): Allows execution, complementing host-level rules in [[Tool Permissions & Sandbox]].

## Reference `guard.sh` Script

```bash
#!/bin/bash
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
[ "$TOOL_NAME" != "bash" ] && exit 0

COMMAND=$(echo "$INPUT" | jq -r '.toolArgs' | jq -r '.command')

if echo "$COMMAND" | grep -qE 'rm -rf /|sudo |mkfs|dd if=|:\(\)\{'; then
  jq -nc --arg reason "Forbidden command: $COMMAND" \
    '{permissionDecision: "deny", permissionDecisionReason: $reason}'
  exit 0
fi

if echo "$COMMAND" | grep -qE 'kubectl .*--context[= ]prod|terraform apply.*prod'; then
  jq -nc '{permissionDecision: "deny", permissionDecisionReason: "Changes to production require human review"}'
  exit 0
fi
```
