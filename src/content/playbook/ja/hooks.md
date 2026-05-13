---
title: フック（Hooks）
titleEn: Hooks
summary: エージェントの実行ライフサイクル(セッション開始・プロンプト送信・ツール実行前後・エラー・セッション終了)に独自のシェルスクリプトを差し込む仕組み。`.github/hooks/hooks.json` で設定。一番強力なのは PreToolUse で、特定コマンド(rm -rf / sudo / production への push など)を deny して agent をブロックできる。Copilot CLI と Cloud Agent の両方で使える。
icon: 🪝
color: green
order: 8.75
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
    label: Hooks configuration reference
    url: https://docs.github.com/en/copilot/reference/hooks-configuration
  - group: 📖 公式ドキュメント
    label: GitHub Copilot CLI hooks reference
    url: https://docs.github.com/en/copilot/reference/copilot-cli-reference/cli-hooks-reference
  - group: 🎓 チュートリアル
    label: Using hooks with Copilot CLI for predictable, policy-compliant execution
    url: https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Hooks</strong> は、Copilot エージェントの実行ライフサイクルに独自のシェルスクリプトを差し込む仕組み。<strong>セッション開始 / プロンプト送信 / ツール実行前後 / エラー / セッション終了</strong> の 6 イベントを捕まえられる。
  </p>
  <p>
    一番強力なのは <strong>PreToolUse</strong>。<strong>「<code>rm -rf</code> 系を agent に絶対実行させない」</strong>「production 環境への <code>kubectl apply</code> をブロック」など、ガードレールを宣言的に張れる。
  </p>
</div>

> 🧠 instructions が「お願い」で agent の判断に頼るのに対し、hooks は <strong>実行ロジックそのものを止める</strong>。policy enforcement が必要なら hooks 一択。
> 🔧 Copilot **CLI** と Copilot **Cloud Agent** の両方で同じ `hooks.json` 形式が使える(読み込み場所だけ違う・後述)。

## 6 つのフック種別

| フック | いつ走る | 入力で取れるもの | できること |
| --- | --- | --- | --- |
| 🟢 **sessionStart** | 新規 / 再開 / 起動時 | `source` (new/resume/startup), `initialPrompt` | ログ初期化・環境準備・通知 |
| 📝 **userPromptSubmitted** | ユーザーがプロンプト送信した瞬間 | `prompt` | プロンプト監査ログ・キーワードアラート |
| 🛡️ **preToolUse** ★ | ツール実行の **直前** | `toolName`, `toolArgs` | **deny で実行をブロック** ・ allow ・ ask |
| 📊 **postToolUse** | ツール実行の **直後** | `toolName`, `toolArgs`, `toolResult.{resultType, textResultForLlm}` | 結果ログ・失敗時の通知・統計 |
| 💥 **errorOccurred** | agent がエラーで落ちた時 | `error.{message, name, stack}` | Slack/メール通知・障害ログ |
| 🔚 **sessionEnd** | セッション終了時 | `reason` (complete/error/abort/timeout/user_exit) | クリーンアップ・サマリー送信 |

> 🔑 **PreToolUse だけが agent の動きを止められる**。他の 5 つは「観察 / 記録 / 通知」用と覚えておけばよい。

## 設定方法

`.github/hooks/` 配下に **任意名の `.json` ファイル** を 1 個以上置く。Copilot CLI は **カレントディレクトリ** から、Cloud Agent は **デフォルトブランチの `.github/hooks/`** から読み込む。

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

これが Hooks の **キラー機能**。agent が何を実行しようとしているかを `toolName` と `toolArgs` で受け取り、**`{"permissionDecision": "deny", "permissionDecisionReason": "..."}`** を返すだけで実行を止められる。

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
if echo "$COMMAND" | grep -qE 'rm -rf /|sudo |mkfs|dd if=|:(\)\{ :\|:&\};:'; then
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

| 出力フィールド | 値 | 意味 |
| --- | --- | --- |
| `permissionDecision` | `"deny"` | **実行をブロック**。agent には reason が返り「別の方法で」となる |
| `permissionDecision` | `"allow"` / 出力なし | そのまま実行 |
| `permissionDecision` | `"ask"` | (現在は deny のみ実装) |
| `permissionDecisionReason` | string | agent と画面に表示される拒否理由 |

> 🎯 ブロック対象としてよくある実例:
> - **破壊系シェル** — `rm -rf /`, `dd if=`, `mkfs`, fork bomb
> - **特権昇格** — `sudo`, `chmod 777`
> - **本番デプロイ** — `kubectl --context prod`, `terraform apply` against prod state, `gh release create v*`
> - **編集禁止パス** — `edit` ツールが `secrets/`, `infra/prod/` を触ろうとした時
> - **ネット越しの破壊** — `gh repo delete`, `git push --force` to `main`

## 主な使いどころ

| パターン | 使うフック | 何をする |
| --- | --- | --- |
| 🛡️ **ガードレール** | preToolUse | 危険コマンド・本番触り・編集禁止パスを deny |
| 📋 **コンプライアンス監査** | sessionStart + userPromptSubmitted + preToolUse + postToolUse + sessionEnd | 全イベントを JSON Lines でログ化、SOC2/ISO 用に証跡を残す |
| 💸 **コスト / 利用量計測** | postToolUse | ユーザー × ツール種別の CSV を出して経理に渡す |
| 🧪 **品質ゲート** | preToolUse (`edit`/`create` 時) | `npm run lint-staged` を走らせて失敗なら deny |
| 🔔 **障害通知** | errorOccurred | Slack webhook / メールで自動通知 |
| 🔐 **シークレット赤字化** | postToolUse | tool 結果に含まれる token をログ前にマスク |

## CLI と Cloud Agent の違い

| | Copilot CLI | Copilot Cloud Agent |
| --- | --- | --- |
| 設定ファイルの場所 | **カレントディレクトリ** から読む(`.github/hooks/*.json`) | **デフォルトブランチ** の `.github/hooks/*.json` |
| 適用範囲 | 自分の手元セッションのみ | repo に対する **全 Cloud Agent セッション** に強制 |
| デバッグ | ローカルで `echo '{}' \| ./guard.sh` で叩ける | repo に merge してからセッション起動 |

> 📝 ローカル開発時に hooks を試したいなら **CLI で開発 → repo の `.github/hooks/` に commit** という流れが楽。Cloud Agent 側でも自動で拾われる。

## トラブルシュート

- ❌ **hooks が走らない** — `.github/hooks/` 直下にあるか、`version: 1` が入っているか、`chmod +x` してるか、shebang (`#!/bin/bash`) があるか
- ❌ **JSON が壊れている** — Bash なら `jq -c` で 1 行 compact 出力、PowerShell は `ConvertTo-Json -Compress`
- ❌ **timeout** — デフォルト 30 秒。重い検証は `timeoutSec` を上げるか、軽量化する
- 🐛 **ローカルでテスト**:
  ```bash
  echo '{"timestamp":1,"cwd":"/tmp","toolName":"bash","toolArgs":"{\"command\":\"rm -rf /\"}"}' \
    | ./guard.sh | jq .
  ```

📘 詳細:
- <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-hooks" target="_blank" rel="noopener noreferrer">About hooks (Cloud Agent concepts) ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/reference/hooks-configuration" target="_blank" rel="noopener noreferrer">Hooks configuration reference ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks" target="_blank" rel="noopener noreferrer">Tutorial: hooks for predictable, policy-compliant execution ↗</a>
