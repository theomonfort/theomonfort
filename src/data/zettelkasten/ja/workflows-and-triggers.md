---
title: "ワークフローとトリガー"
---

**ワークフローとトリガー**は、[[GitHub Actions]] が何をいつ実行するかを定義し、`.github/workflows/*.yml` 内の1つ以上の YAML ファイルに保存します。

## イベント駆動の実行

- **トリガー（`on:`）**：`push`、`pull_request`、`schedule`（cron）、`workflow_dispatch`（手動）、`issues`、`release` をはじめ、SDLC 全体の35種類以上のリポジトリイベントに応答します。
- **ジョブとマトリックス並列実行**：各ジョブは [[Actions Runners|Actions ランナー]]の新しい VM で開始します（1ジョブ最大6時間、1ワークフロー最大35日）。マトリックス戦略により、複数の OS やランタイムバージョンを並列でテストします。
- **最小権限**：範囲を限定した `permissions:` ブロック（`contents: read` など）で、ワークフローまたはジョブごとに自動の `GITHUB_TOKEN` の権限を制限します。

## テストとセキュリティとの統合

- すべての PR でユニットテストと Playwright E2E テストスイートを実行し、[[Rulesets & Merge Protection|ルールセットとマージ保護]]に必須ステータスチェックを、[[Quality Score & Coverage|品質スコアとカバレッジ]]にカバレッジレポートを渡します。
- [[Default vs Advanced Setup|デフォルト設定と詳細設定]]のカスタム `.github/workflows/codeql.yml` パイプラインで [[Code Scanning|コードスキャン]]を実行します。パイプラインは [[Marketplace Actions|Marketplace の Actions]]を組み合わせて構成します。
