---
title: "CLI のプログラム実行モード"
---

**CLI のプログラム実行モード**は、[[Copilot CLI]] を 1 つのプロンプトに対して実行して終了します。シェルパイプライン、cron ジョブ、GitHub Actions の自動化に利用できます。

## 主なフラグとトークンの優先順位

| 観点 | フラグ / 設定 |
| --- | --- |
| **実行とパイプ** | `copilot -p 'Summarize README.md' -s`（`-s` は応答テキストのみ出力。`--no-ask-user` は質問を無効化） |
| **範囲を限定した権限** | `--allow-tool='shell(npm:*), write'`（[[Local & Cloud Sandboxes]] の外では `--allow-all` を渡さない） |
| **認証** | `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN` の順。`Copilot Requests` 権限を持つ **Fine-grained PAT** を使用（従来の `ghp_` トークンは非対応） |
| **再現性と上限** | `--model MODEL`、`--share='./session.md'`、[[CLI Session Credit Limits]] の `--max-ai-credits N` |
