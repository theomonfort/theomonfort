---
title: "GitHub Agentic Workflows が GA"
date: "2026-10-28"
summary: "自然言語の Markdown で自動化を記述し、GitHub Actions にコンパイル。既存のランナーとポリシーの下で、トリアージ、CI 調査、ドキュメント更新、テストをエージェントに任せられます。"
category: actions
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available"
---

### GitHub Actions の中で動くエージェント

Copilot の画面で管理する Copilot Automations とは異なり、**Agentic Workflows は Markdown ファイルを通常の Actions YAML にコンパイル**します。既存のランナーグループとポリシーを再利用し、Copilot や他の対応コーディングエージェントを実行エンジンとして使います。

### GA で加わる機能

- **ランナー対応**：Docker-in-Docker を使うセルフホステッドの Actions Runner Controller ランナーに対応。
- **予算予測**：`gh aw forecast` が脅威検出のクレジットと月次の予測範囲を含むようになりました。
- **エンジンとモデルの選択**：モデル更新、ワークフローごとのプロバイダー選択、タスクに応じたモデル振り分け、`gh aw add-wizard` のテンプレート。
- **分離**：micro-VM の選択肢と、リポジトリをまたぐワークフロー向けの enclave を追加。

### 多層の安全策

既定は読み取り専用権限。Agent Workflow Firewall の内側で分離実行し、integrity filter、safe outputs の検証、適用前の脅威検出を組み合わせます。

github.com の GitHub Free、Team、Enterprise で利用できます。**既定の Copilot CLI エンジンには Copilot ライセンスが必要です。**

[クイックスタート](https://github.github.com/gh-aw/setup/quick-start/) / [ワークフロー例](https://github.com/githubnext/agentics)
