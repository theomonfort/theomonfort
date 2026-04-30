---
title: プロンプトエンジニアリング
titleEn: Prompt Engineering
summary: モデルの出力品質を最大化する指示の設計術。役割、文脈、制約、例示、出力形式を明確に書き分ける。
icon: ✍️
color: cyan
order: 11
related: ['context-engineering', 'instructions']
links:
  - label: Prompt engineering for Copilot Chat
    url: https://docs.github.com/copilot/copilot-chat-cookbook
---

良いプロンプトは"丁寧な依頼書"だ。役割（Role）、目的（Goal）、制約（Constraints）、例示（Examples）、出力形式（Format）を明示すると、モデルは迷わず動ける。

**最小のテンプレート:**
```
あなたは [役割] です。
目的: [達成したいこと]
入力: [与える情報]
制約: [守るべきルール]
出力: [期待する形式]
```

**あるある罠:**
- 「いい感じに」「うまく」← 解釈の余地が事故を呼ぶ
- 否定形だけの指示 ← "やること"を肯定形で書こう
- 巨大な丸投げ ← 小さなタスクに分割すると精度が跳ね上がる
