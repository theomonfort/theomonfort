---
title: "PreToolUse のガードレール"
---

**PreToolUse のガードレール**（`preToolUse`）は、6つの [[Hooks|フック]]のうち、実行前にエージェントのツール操作を停止できる**唯一**のイベントです。

## 判定の契約（`deny` / `allow` / `ask`）

ツールの実行直前に、スクリプトは `toolName` と `toolArgs` を `stdin` で受け取り（VS Code での命名の違いは [[Hooks Configuration & Surfaces|フックの設定と利用環境]]を参照）、`stdout` に JSON を出力できます。

- `"permissionDecision": "deny"` + `"permissionDecisionReason"`：ツール呼び出しを即座にブロックします。
- `"permissionDecision": "ask"`：実行前に対話的なユーザー確認を必須にします。
- `"permissionDecision": "allow"`（または空の `stdout` と終了コード `0`）：実行を許可し、[[Tool Permissions & Sandbox|ツール権限とサンドボックス]]のホストレベルのルールを補完します。

## `guard.sh` の参考スクリプト

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
