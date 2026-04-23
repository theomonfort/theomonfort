---
title: カスタムエージェント
titleEn: Custom Agent
summary: 役割・モデル・ツール・指示・スキルを束ねた専用エージェント。"フロントエンド職人"や"レビュー番長"を作れる。
icon: 🥷
color: green
order: 8
related: ['agent-skills', 'agent-mode', 'cli']
links:
  - label: Custom agents (Copilot CLI docs)
    url: https://docs.github.com/copilot
---

汎用エージェントは"何でも屋"。カスタムエージェントは"専門家"だ。

**設計のコツ:**
- **狭い役割** — "TypeScript の型を厳密にするマン" のように一点突破
- **専用ツール** — 必要なものだけ。多いほど判断が鈍る
- **モデル選択** — 速い / 賢い を役割で使い分け（Haiku で探索、Opus で設計）
- **明確な成功条件** — 「この出力なら合格」を最初に定義

複数のカスタムエージェントを組み合わせると、君のチームに**仮想同僚**が増える。
