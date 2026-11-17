---
title: "監視と監査のフック"
---

**監視と監査のフック**は、[[Hooks]] のうち、ブロックしない5つのイベントを扱います。Copilot セッション全体で監視、記録、通知を行い、実行のブロックは [[PreToolUse Guardrails]] が担当します。

## 監視 / 記録 / 通知を行う5つのイベント

| フックイベント | 発火するタイミング | 入力ペイロード（CLI / Cloud） | 主な処理 |
| --- | --- | --- | --- |
| **`sessionStart`** | セッションの新規作成、再開、開始時 | `source`、`initialPrompt` | 監査ログの初期化、環境確認、開始通知 |
| **`userPromptSubmitted`** | ユーザーがプロンプトを送信した直後 | `prompt` | プロンプトのコンプライアンス監査ログ、機密キーワードの警告 |
| **`postToolUse`** | ツールの終了直後 | `toolResult` | コマンド / ツールの出力記録、テスト失敗の通知、統計収集 |
| **`errorOccurred`** | エージェントで実行時エラーが発生したとき | `error` | Slack / メールの警告送信、インシデント診断情報の記録 |
| **`sessionEnd`** | セッション終了時 | `reason` | 一時プロセス / ファイルの削除、セッションの要約送信 |

[[Hooks Configuration & Surfaces]] に従い、`.github/hooks/*.json` で設定します。
