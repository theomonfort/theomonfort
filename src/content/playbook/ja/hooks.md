---
title: フック（Hooks）
titleEn: Hooks
summary: エージェントの実行ライフサイクル(セッション開始・プロンプト送信・ツール実行前後・エラー・セッション終了)に独自スクリプトを差し込む仕組み。`.github/hooks/hooks.json` で設定。一番強力なのは PreToolUse で、特定コマンド(rm -rf / sudo / production への push など)を deny して agent をブロックできる。Copilot CLI と Cloud Agent の両方で使える。
icon: 🪝
color: green
order: 7.5
category: plan
related: ['harness-engineering', 'custom-agent', 'instructions']
links:
  - group: 📖 公式ドキュメント
    label: About hooks (Cloud Agent concepts)
    url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-hooks
  - group: 📖 公式ドキュメント
    label: Using hooks with GitHub Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/use-hooks
  - group: 📖 公式ドキュメント
    label: Using hooks with Copilot cloud agent
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks
  - group: 📖 公式ドキュメント
    label: Working with hooks in Copilot SDK
    url: https://docs.github.com/en/copilot/how-tos/copilot-sdk/use-copilot-sdk/working-with-hooks
  - group: 📖 公式ドキュメント
    label: Hooks configuration reference
    url: https://docs.github.com/en/copilot/reference/hooks-configuration
  - group: 🎓 チュートリアル
    label: Using hooks with Copilot CLI for predictable, policy-compliant execution
    url: https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Hooks</strong> は、Copilot エージェントの実行ライフサイクルに独自のシェルスクリプトを差し込む仕組み。<strong>セッション開始 / プロンプト送信 / ツール実行前後 / サブエージェント開始・終了 / エラー / セッション終了</strong> などのイベントを捕まえられる。
  </p>
</div>

> 🧠 instructions が「お願い」で agent の判断に頼るのに対し、hooks は <strong>実行ロジックそのものを止める</strong>。policy enforcement が必要なら hooks 一択。

## フック種別

| フック | いつ走る | 入力 (CLI / Cloud Agent) | できること |
| --- | --- | --- | --- |
| 🟢 **sessionStart** | 新規 / 再開 / 起動時 | `source`, `initialPrompt` | ログ初期化・環境準備・通知 |
| 📝 **userPromptSubmitted** | ユーザーがプロンプト送信した瞬間 | `prompt` | プロンプト監査ログ・キーワードアラート |
| 🔐 **permissionRequest** | 権限サービスが走る **直前** (CLI のみ) | `toolName`, `toolArgs` | **allow / deny で許可フローを短絡** |
| 🛡️ **preToolUse** ★ | ツール実行の **直前** | `toolName`, `toolArgs` | **deny で実行をブロック** ・ allow ・ ask |
| 📊 **postToolUse** | ツール実行の **直後** | `toolResult` | 結果ログ・失敗時の通知・統計 |
| 🌱 **subagentStart** | サブエージェントが起動する直前 | `agentName`, `agentDescription` | サブエージェントのプロンプトに `additionalContext` を追加 (**起動自体は止められない**) |
| 🏁 **subagentStop** | サブエージェントの 1 ターン終了時 | `agentName`, `stopReason` | **block で続行を強制** ・ 結果ログ |
| 🛑 **agentStop** | メイン agent が 1 ターン終了する時 | `stopReason: "end_turn"` | **block で続行を強制** (テスト未実行・PR 未作成などの再ループ) |
| 💥 **errorOccurred** | agent がエラーで落ちた時 | `error` | Slack/メール通知・障害ログ |
| 🔚 **sessionEnd** | セッション終了時 | `reason` | クリーンアップ・サマリー送信 |

> 🔑 **エージェントの動きを止められる / 分岐できるのは 4 つだけ**:
> - 🛡️ **preToolUse** → ツール呼び出しを **deny**（rm -rf / sudo / prod push などを実行前にブロック）
> - 🔐 **permissionRequest** → 権限フローを **allow / deny** で短絡（CLI のみ）
> - 🏁 **subagentStop** → サブエージェントの停止を **block** して続行を強制
> - 🛑 **agentStop** → メイン agent の停止を **block** して続行を強制（"テスト走らせるまで終わるな" 系）
>
> 他のフックは「観察 / 記録 / 通知」用途で、実行ロジックそのものは止められない。

## 設定方法

`.github/hooks/` 配下に **任意名の `.json` ファイル** を 1 個以上置く。CLI / VS Code はローカルから、Cloud Agent は **デフォルトブランチの `.github/hooks/`** から読み込む。

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

- 📦 `bash` / `powershell` どちらも書いておけば OS 横断で動く
- ⏱️ デフォルト timeout は **30 秒**。重い検証を入れるなら `timeoutSec` を上げる
- 🔁 同じイベントに **複数フックを配列で** 並べると上から順に実行される
- 📥 スクリプトは **stdin から JSON** を受け取り、必要なら **stdout に JSON** を返す

## ★ 特定コマンドのブロック (PreToolUse)

agent が何を実行しようとしているかを `toolName` と `toolArgs` で受け取り、`{"permissionDecision": "deny", "permissionDecisionReason": "..."}` を返すだけで実行を止められる。

```bash
#!/bin/bash
# .github/hooks/scripts/guard.sh
INPUT=$(cat)
TOOL_NAME=$(echo "$INPUT" | jq -r '.toolName')
TOOL_ARGS=$(echo "$INPUT" | jq -r '.toolArgs')

# bash 以外はそのまま許可
if [ "$TOOL_NAME" != "bash" ]; then
  exit 0
fi

COMMAND=$(echo "$TOOL_ARGS" | jq -r '.command')

# 🚨 危険コマンドの黒リスト
if echo "$COMMAND" | grep -qE 'rm -rf /|sudo |mkfs|dd if=|:\(\)\{'; then
  jq -nc \
    --arg reason "禁止コマンド: $COMMAND" \
    '{permissionDecision: "deny", permissionDecisionReason: $reason}'
  exit 0
fi

# 🔒 production 環境への変更を禁止
if echo "$COMMAND" | grep -qE 'kubectl .*--context[= ]prod|terraform apply.*prod'; then
  jq -nc '{permissionDecision: "deny", permissionDecisionReason: "production への変更は人間レビュー必須"}'
  exit 0
fi

# それ以外は許可 (出力なし or "allow")
exit 0
```

## どこから読み込まれる?

| Agent | Hooks を読む場所 | 適用範囲 |
| --- | --- | --- |
| 💻 **Copilot CLI** | **カレントディレクトリ** の `.github/hooks/*.json` | **自分の CLI セッションだけ** |
| 🧑‍💻 **VS Code agent** | **開いているワークスペース** の `.github/hooks/*.json` | **自分の VS Code agent セッションだけ** |
| ☁️ **Copilot Cloud Agent** | GitHub 上の **デフォルトブランチ** の `.github/hooks/*.json` | その repo の **全 Cloud Agent セッション** |

> 📝 実装時は **どの環境で動かすか** に注意: **hooks.json** は `timeout`(VS Code) vs `timeoutSec`(CLI/Cloud)、**script** は `tool_name` / `tool_input` / `hookSpecificOutput`(VS Code) vs `toolName` / `toolArgs` / `permissionDecision`(CLI/Cloud)。
