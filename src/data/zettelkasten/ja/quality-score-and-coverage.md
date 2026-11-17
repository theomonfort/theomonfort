---
title: "品質スコアとカバレッジ"
---

**品質スコアとカバレッジ**は、[[Code Quality]] の測定レイヤーとして [[GitHub]] 上で提供されます。[[Security Overview|セキュリティ概要]]とともに、エンジニアリングリーダーとコントリビューターにリポジトリの健全性を客観的に示します。

## 健全性の評価と PR のカバレッジ

- **重大度モデル**：決定論的な [[CodeQL]] ルールと [[AI Quality Findings|AI による品質の指摘]]は、**`Error`**、**`Warning`**、**`Note`** として報告します（セキュリティの重大度 `Critical/High/Medium/Low` とは別）。
- **リポジトリと Organization のスコア**：リポジトリ全体の信頼性と保守性の評価を集約し、チームが開発速度の低下前に問題箇所を見つけられるようにします。
- **PR のテストカバレッジ**：[[GitHub Actions]]（[[Workflows & Triggers|ワークフローとトリガー]]、[[Actions Cache & Artifacts|Actions のキャッシュと成果物]]）で生成した **Cobertura XML** のカバレッジレポートを取り込みます。プルリクエストの未カバーの差分行に直接注釈を付け、[[Rulesets & Merge Protection|ルールセットとマージ保護]]で最低カバレッジのゲートを適用します。
