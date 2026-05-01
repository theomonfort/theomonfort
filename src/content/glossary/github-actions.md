---
title: GitHub Actions
titleEn: GitHub Actions
summary: GitHub にネイティブ統合された CI/CD・自動化プラットフォーム。テスト・ビルド・デプロイから AI エージェントの実行環境まで、あらゆるワークフローを YAML で定義できる。
icon: /theomonfort/github-white-icon.svg
color: amber
order: 20
category: secure
related: ['github-advanced-security', 'cloud-agent', 'agentic-workflow']
links:
  - label: GitHub Actions
    url: https://github.com/features/actions
  - label: Actions ドキュメント
    url: https://docs.github.com/actions
---

GitHub Actions は、リポジトリ内のイベント (push, PR, issue, schedule など) をトリガーにワークフローを実行する CI/CD プラットフォーム。`.github/workflows/*.yml` でジョブを定義し、Linux / Windows / macOS のランナー上で実行できる。

**AI駆動開発における意味:**
- **自動テスト・自動レビューの土台** — AI が書いたコードを人間がマージする前に、テスト・Lint・型チェック・セキュリティスキャンを自動で走らせる。
- **AI エージェントの実行環境** — Copilot Coding Agent や独自のエージェントワークフローを Actions 上で動かせる。再現性のある隔離環境。
- **イベント駆動の自動化** — Issue 作成で AI トリアージ、PR 作成で AI レビュー、リリースで AI 変更ログ生成、など。

**主な特徴:**
- **YAML で宣言的に定義** — ワークフローはコード、Pull Request でレビューできる。
- **Marketplace** — 数万の再利用可能な Action。`actions/checkout`、`actions/setup-node` など。
- **Matrix ビルド** — 複数 OS / バージョンの組み合わせを並列実行。
- **GHAS と統合** — Code Scanning や Dependabot のチェックを CI として走らせる。
