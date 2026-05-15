#!/bin/bash
set -euo pipefail

INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName // .tool_name // ""')
TOOL_ARGS=$(echo "$INPUT" | jq -c '.toolArgs // .tool_input // {}')

# Only inspect shell-like tools. Other tools can continue unchanged.
if [[ ! "$TOOL_NAME" =~ ^(bash|shell|terminal|command)$ ]]; then
  exit 0
fi

COMMAND=$(echo "$TOOL_ARGS" | jq -r 'if type == "string" then . else .command // .cmd // "" end')

# Block obviously destructive commands before the agent can run them.
if echo "$COMMAND" | grep -qE 'rm -rf /|sudo |mkfs|dd if=|:\(\)\{'; then
  jq -nc \
    --arg reason "禁止コマンド: $COMMAND" \
    '{
      permissionDecision: "deny",
      permissionDecisionReason: $reason,
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: $reason
      }
    }'
  exit 0
fi

# Require human review for production-changing commands.
if echo "$COMMAND" | grep -qE 'kubectl .*--context[= ]prod|terraform apply.*prod'; then
  jq -nc \
    --arg reason "production への変更は人間レビュー必須" \
    '{
      permissionDecision: "deny",
      permissionDecisionReason: $reason,
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: $reason
      }
    }'
  exit 0
fi

exit 0
