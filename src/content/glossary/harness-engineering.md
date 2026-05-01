---
title: ハーネスエンジニアリング
titleEn: Harness Engineering
summary: エージェントが安全かつ効果的に動ける足場の設計。ツール群、制約、ループ、検証、ロールバックの設計術。
icon: 🛡️
color: green
order: 8
category: plan
related: ['agentic-workflow', 'agent-skills', 'mcp']
links:
  - label: Well-Architected (GitHub)
    url: https://wellarchitected.github.com/
---

馬は素晴らしい。だが鞍と手綱がなければ乗りこなせない。エージェントも同じ——**ハーネス**がエージェントの "鞍と手綱" だ。

**ハーネスに含まれるもの:**
- ツールセット（読み・書き・実行・検索の境界）
- 制約（書き込み禁止パス、コマンド許可リスト）
- ループ（plan → act → observe → reflect）
- 検証（型・テスト・lint・人間レビュー）
- 観測（ログ、コスト、レイテンシ）
- ロールバック（git, snapshots）

> AI を信頼するな、harness を信頼せよ。
