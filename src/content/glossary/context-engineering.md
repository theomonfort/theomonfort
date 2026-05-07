---
title: コンテキストエンジニアリング
titleEn: Context Engineering
summary: AI に渡す文脈を設計する技術。少なすぎず、多すぎず、タスク達成に必要な情報だけを届ける。
icon: 🧠
color: green
order: 8.5
category: plan
related: ['harness-engineering', 'instructions', 'agent-skills', 'mcp']
links:
  - group: 📚 Context Engineering
    label: Context Engineering — interactive guide
    url: https://blog.cloud-eng.nl/context-engineering/
  - group: 📚 Context Engineering
    label: Context Rot — Product Talk
    url: https://www.producttalk.org/context-rot
  - group: 📚 Context Engineering
    label: Well-Architected (GitHub)
    url: https://wellarchitected.github.com/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Context Engineering</strong> は、AI に渡す文脈を「できるだけ少なく、でも必要なだけ多く」設計する技術。
  </p>
  <p>
    何でも全部読ませるのではなく、目的・制約・関連ファイル・検証方法を絞って、AI が迷わず次の一手を選べる状態を作る。
  </p>
</div>

> 良い context は量ではなく **選び方**。不要な情報を減らし、必要な情報を欠かさない。

## Context rot

LLM は context window が大きいほど賢くなるわけではない。情報を詰め込みすぎると、重要な情報を見落とし、判断が鈍る。

```mermaid
flowchart LR
  Smart["Smart<br/>必要な context が見える"]
  Rot["Context rot<br/>情報が多すぎる"]
  Dumb["Dumb<br/>重要情報を見失う"]

  Smart -->|"context window が埋まる"| Rot -->|"lost in the middle<br/>recency bias"| Dumb

  classDef smart fill:#0a1a14,stroke:#9bbc0f,color:#d8ff9a,stroke-width:3px;
  classDef rot fill:#302500,stroke:#ffb000,color:#fff4d6,stroke-width:3px;
  classDef dumb fill:#2a1020,stroke:#ff2e88,color:#ffe8f4,stroke-width:3px;
  class Smart smart;
  class Rot rot;
  class Dumb dumb;
```

| 現象 | 何が起きる？ |
| --- | --- |
| Lost in the middle | 長い context の中央にある重要情報が埋もれる |
| Recency bias | 直近に出てきた情報を過大評価する |
| Context rot | ノイズが増え、LLM の判断精度が落ちる |

> Context Engineering の目的は、context window を埋めることではなく、**必要な情報が目立つ状態を保つこと**。
