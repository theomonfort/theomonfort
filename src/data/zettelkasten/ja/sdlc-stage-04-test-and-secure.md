---
title: "SDLC ステージ04：テストとセキュリティ"
---

**SDLC ステージ04：テストとセキュリティ**は、自動 CI テスト、保守性分析、アプリケーションセキュリティを [[AI Developer Platform|AI 開発者プラットフォーム]]のパイプラインに直接組み込みます。[[SDLC Stage 03 Review|SDLC ステージ03：レビュー]]に続く段階です。

## テストとセキュリティの主要な制御

- **GitHub Actions**（`Native Platform`）：**年間454億件のジョブ**を実行するイベント駆動の CI/CD。[[Scale Pillar|Scale の柱]]で一般提供された **Actions ワークフローロックファイル**で強化します。
- **Copilot Autofix / Agentic Autofix**（`Copilot`）：セキュリティアラートの修正パッチを自動生成し、検証します（[[Trust Pillar|Trust の柱]]で Agentic Autofix を一般提供）。
- **Code Quality**（`Native Platform`）：保守性、信頼性、複雑さに関する指摘を継続的にプルリクエストへ直接表示します。
- **Code Scanning**（`Native Platform`）：CodeQL のセマンティック解析と **AI Scan** を組み合わせます（PR 向けは一般提供、リポジトリ全体向けはパブリックプレビュー）。
- **Secret Protection とサプライチェーン**（`Native Platform`）：認証情報の漏えいを防ぐプッシュ保護に加え、[[Trust Pillar|Trust の柱]]の **Dependabot Reachability Analysis** と **GitHub Package Firewall** を提供します。

検証済みビルドは、[[SDLC Stage 05 Operate|SDLC ステージ05：運用]]での継続的な本番自動化に進みます。

## テスト、セキュリティ、品質の詳細ノート

- **CI/CD とコード品質**：[[GitHub Actions]]、[[Workflows & Triggers|ワークフローとトリガー]]、[[Code Quality]]、[[AI Quality Findings|AI による品質の指摘]]、[[Quality Score & Coverage|品質スコアとカバレッジ]]。
- **GHAS スイート**：[[GHAS]]、[[Code Security]]、[[Code Scanning|コードスキャン]]、[[CodeQL]]、[[AI Scan]]、[[Copilot Autofix]]、[[Agentic Autofix]]、[[Secret Protection]]、[[Push Protection|プッシュ保護]]、[[Dependabot]]、[[Security Campaigns|セキュリティキャンペーン]]。
