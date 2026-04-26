---
title: コンテキストエンジニアリング
titleEn: Context Engineering
summary: モデルに渡す情報の選定・整形・順序の設計。何を見せ、何を隠すかが出力を決める。
icon: 📚
color: amber
order: 10
related: ['prompt-engineering', 'harness-engineering', 'mcp']
links:
  - label: GitHub blog — context
    url: https://github.blog/
---

プロンプトが"指示"なら、コンテキストは"舞台"だ。同じ指示でも、見せる資料が違えば結果も別物になる。

**設計の軸:**
- **関連性** — タスクに直結するファイル・型・テストだけを渡す
- **新鮮さ** — 古い資料が混ざるとモデルが過去の世界線に引きずられる
- **構造** — Markdown 見出し、コードブロック、表で"地図"を作る
- **順序** — 重要なものを先頭と末尾に（Recency / Primacy bias）
- **トークン予算** — 全部入れると逆に精度が落ちる。"足し算"より"引き算"

良い harness は、必要な瞬間に必要な context を自動で揃えてくれる。
