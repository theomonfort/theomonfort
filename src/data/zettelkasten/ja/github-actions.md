---
title: "GitHub Actions"
---

**GitHub Actions** は、[[GitHub]] 標準の CI/CD とイベント駆動の自動化プラットフォームです。`.github/workflows/` の YAML パイプラインで定義し、リポジトリと PR がある場所でビルド、単体テスト、Playwright E2E テスト、デプロイ、Issue のトリアージ、リリースを自動化します。

## クローン → 実行 → 破棄

GitHub Actions の基本原則は**「毎回ゼロから始める」**ことです。リポジトリイベントが発生すると、GitHub はクリーンな使い捨て VM を用意し、リポジトリをクローンしてステップを順番に実行します。チェックとログを PR に報告した後、VM を破棄します。

## 主な構成要素

- [[Workflows & Triggers|ワークフローとトリガー]]: 宣言的な `.github/workflows/*.yml` パイプライン。`push`、`pull_request`、`schedule`、`workflow_dispatch`、35種類以上のリポジトリイベントで起動。
- [[Actions Runners|Actions ランナー]]: GitHub が管理する Linux / Windows / macOS VM、Larger runners、セルフホステッド / ARC Kubernetes ランナー。
- [[Marketplace Actions|Marketplace アクション]]: ソースレビューと組織の許可リストで管理する再利用可能なステップ（`actions/checkout`、`actions/setup-node`）。
- [[Workflow Lockfiles|ワークフローロックファイル]]: アクションのタグと推移的依存関係を不変のコミット SHA に固定する、GA の `.github/workflows/actions.lock`。
- [[Actions Cache & Artifacts|Actions のキャッシュとアーティファクト]]: 制御された状態の永続化（`actions/cache` の最小権限の `cache-mode`、テストとカバレッジのアーティファクト）。
- [[Actions Secrets & OIDC|Actions のシークレットと OIDC]]: マスクされた `${{ secrets.NAME }}` の値と、短命でキー不要の OIDC クラウドトークン。
- [[Actions Compute & Budgets|Actions のコンピューティングと予算]]: 月ごとの金額ベースのコンピューティング利用枠と、ランナー時間のソフトな予算アラート。
- [[DORA Metrics|DORA メトリクス]]: CI/CD と自動チェックによるデリバリー速度と本番安定性の改善を測定。

Actions のステータスチェックは [[Rulesets & Merge Protection|ルールセットとマージ保護]]に直接連携し、テストやスキャンが失敗した変更を `main` にマージさせません。
