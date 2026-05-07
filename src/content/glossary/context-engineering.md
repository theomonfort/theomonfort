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
classDef smart fill:#0891b2,stroke:#67e8f9,color:#ecfeff
classDef dumb fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
```

> Context Engineering の目的は、context window を埋めることではなく、**必要な情報が目立つ状態を保つこと**。

## Context window：start

最初は、system prompt、Copilot instructions、skill descriptions、available MCP/tools などの **常時必要なメタ情報** だけが入る。

```mermaid
treemap-beta
  "Context window"
  "System & tools": 10:::used
  "Free space": 75:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context window：agent switch

`Test coder` agent に切り替えると、custom agent instruction が追加される。  
さらに「この test coverage を改善して」と頼むと、path instruction と skill description が match する。

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Full Skill": 10:::used
  "Prompt": 10:::used
  "Free space": 35:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context window：load relevant context

Skill description が match すると **full skill** が読み込まれる。  
同時に、対象 file、test file、smartly selected memory、prompt が context に入る。

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Matching files": 10:::used
  "Memory": 10:::used
  "Free space": 15:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## Context window：summarize with sub-agent

大きな workspace を直接 main context に入れず、Explore sub-agent に調査させる。  
main agent には **workspace summary** だけが戻るので、context window を overload しにくい。

```mermaid
treemap-beta
"Context window"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Memory": 10:::used
  "Sub-agent data": 10:::used
  "Free space": 15:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```
