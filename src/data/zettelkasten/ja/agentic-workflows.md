---
title: "エージェント型ワークフロー"
---

**エージェント型ワークフロー**（`Describe -> Run -> Constrain`、[[Scale Pillar]] で GA）を使うと、チームは通常の Markdown（`.github/workflows/NAME.md`）で継続的なリポジトリ自動化を記述し、`gh aw compile` で決定論的な [[Workflow Lockfiles]]（`.github/workflows/NAME.lock.yml`）へコンパイルできます。[[GitHub Actions]] 上で実行され、[[SDLC Stage 05 Operate]] を支えます。

## 制約付きの自律性（`safe-outputs`）

- **既定で読み取り専用**: [[GitHub Copilot]] を、スコープを限定した [[MCP Servers]] とともに、読み取り専用の `GITHUB_TOKEN` 権限の下で実行します。[[Issues & Sub-issues]] のトリアージ、CI 失敗の根本原因分析、継続的なドキュメント同期に利用します。
- **検証済みの `safe-outputs`**: リポジトリへのすべての変更は、スキーマ検証された出力ハンドラー（[[Draft Pull Requests]] の作成、コメントの投稿、ラベルの更新）を通ります。[[Enterprise & Repo Rulesets]] と [[PR Rulesets]] によって管理されます。
- **キーレスの課金**: ネイティブのワークフロー権限 `copilot-requests: write` を使用し、長期間有効な PAT は不要です。[[Usage-Based Billing]] と [[Shared AI Credit Pool]] に基づき、Organization の AI クレジットから課金されます。
