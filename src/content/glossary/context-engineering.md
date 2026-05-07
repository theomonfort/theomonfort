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

LLM は context window が大きいほど賢くなるわけではない。情報を詰め込みすぎると、**Lost in the middle** で重要情報が中央に埋もれたり、**Recency bias** で直近の情報を過大評価したりして、判断が鈍る。

これを **context rot** と呼ぶ。

```mermaid
treemap-beta
"Context window"
  "Smart zone": 60:::smart
  "Dumb zone": 40:::dumb
classDef smart fill:#0a1a14,stroke:#9bbc0f,color:#d8ff9a
classDef dumb fill:#2a1020,stroke:#ff2e88,color:#ffe8f4
```

> Context Engineering の目的は、context window を埋めることではなく、**必要な情報が目立つ状態を保つこと**。

## Context window

Context window は、system/tools、instructions、memory、prompt、作業用 context、buffer が取り合う限られた領域。

```mermaid
treemap-beta
"Context window"
  "System & tools": 8:::system
  "Instructions": 8:::instructions
  "Memories": 16:::memories
  "Prompt": 8:::prompt
  "Working space": 45:::workspace
  "Buffer (reserved)": 15:::buffer
classDef system fill:#047857,stroke:#a7f3d0,color:#ecfdf5
classDef instructions fill:#0ea5e9,stroke:#bae6fd,color:#f0f9ff
classDef memories fill:#fbbf24,stroke:#fde68a,color:#111827
classDef prompt fill:#7c3aed,stroke:#ddd6fe,color:#faf5ff
classDef workspace fill:#bbf7d0,stroke:#86efac,color:#052e16
classDef buffer fill:#22c55e,stroke:#bbf7d0,color:#f0fdf4
```
