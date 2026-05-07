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

## Context window：start

最初は、system prompt、Copilot instructions、skill descriptions、available MCP/tools などの **常時必要なメタ情報** だけが入る。

```mermaid
treemap-beta
"Context window"
  "System & tools 11%": 11:::system
  "Free space 74%": 74:::free
  "Buffer 15%": 15:::buffer
classDef system fill:#047857,stroke:#a7f3d0,color:#ecfdf5
classDef free fill:#bbf7d0,stroke:#86efac,color:#052e16
classDef buffer fill:#22c55e,stroke:#bbf7d0,color:#f0fdf4
```

## Context window：agent switch

`Test coder` agent に切り替えると、custom agent instruction が追加される。  
さらに「この test coverage を改善して」と頼むと、path instruction と skill description が match する。

```mermaid
treemap-beta
"Context window"
  "System & tools 11%": 11:::system
  "Test coder agent 12%": 12:::agent
  "Path instruction 6%": 6:::path
  "Skill metadata 3%": 3:::skill
  "Prompt 4%": 4:::prompt
  "Free space 49%": 49:::free
  "Buffer 15%": 15:::buffer
classDef system fill:#047857,stroke:#a7f3d0,color:#ecfdf5
classDef agent fill:#fbbf24,stroke:#fde68a,color:#111827
classDef path fill:#0ea5e9,stroke:#bae6fd,color:#f0f9ff
classDef skill fill:#7c3aed,stroke:#ddd6fe,color:#faf5ff
classDef prompt fill:#db2777,stroke:#fbcfe8,color:#fff1f2
classDef free fill:#bbf7d0,stroke:#86efac,color:#052e16
classDef buffer fill:#22c55e,stroke:#bbf7d0,color:#f0fdf4
```

## Context window：load relevant context

Skill description が match すると **full skill** が読み込まれる。  
同時に、対象 file、test file、smartly selected memory、prompt が context に入る。

```mermaid
treemap-beta
"Context window"
  "System & tools 11%": 11:::system
  "Test coder agent 12%": 12:::agent
  "Path instruction 6%": 6:::path
  "Full skill 13%": 13:::skill
  "Prompt 4%": 4:::prompt
  "Matching files 24%": 24:::files
  "Memory 5%": 5:::memory
  "Free space 10%": 10:::free
  "Buffer 15%": 15:::buffer
classDef system fill:#047857,stroke:#a7f3d0,color:#ecfdf5
classDef agent fill:#fbbf24,stroke:#fde68a,color:#111827
classDef path fill:#0ea5e9,stroke:#bae6fd,color:#f0f9ff
classDef skill fill:#7c3aed,stroke:#ddd6fe,color:#faf5ff
classDef prompt fill:#db2777,stroke:#fbcfe8,color:#fff1f2
classDef files fill:#2563eb,stroke:#bfdbfe,color:#eff6ff
classDef memory fill:#f97316,stroke:#fed7aa,color:#fff7ed
classDef free fill:#bbf7d0,stroke:#86efac,color:#052e16
classDef buffer fill:#22c55e,stroke:#bbf7d0,color:#f0fdf4
```

## Context window：summarize with sub-agent

大きな workspace を直接 main context に入れず、Explore sub-agent に調査させる。  
main agent には **workspace summary** だけが戻るので、context window を overload しにくい。

```mermaid
treemap-beta
"Context window"
  "System & tools 11%": 11:::system
  "Test coder agent 12%": 12:::agent
  "Path instruction 6%": 6:::path
  "Full skill 13%": 13:::skill
  "Prompt 4%": 4:::prompt
  "Memory 5%": 5:::memory
  "Explore summary 8%": 8:::summary
  "Free space 26%": 26:::free
  "Buffer 15%": 15:::buffer
classDef system fill:#047857,stroke:#a7f3d0,color:#ecfdf5
classDef agent fill:#fbbf24,stroke:#fde68a,color:#111827
classDef path fill:#0ea5e9,stroke:#bae6fd,color:#f0f9ff
classDef skill fill:#7c3aed,stroke:#ddd6fe,color:#faf5ff
classDef prompt fill:#db2777,stroke:#fbcfe8,color:#fff1f2
classDef memory fill:#f97316,stroke:#fed7aa,color:#fff7ed
classDef summary fill:#06b6d4,stroke:#a5f3fc,color:#ecfeff
classDef free fill:#bbf7d0,stroke:#86efac,color:#052e16
classDef buffer fill:#22c55e,stroke:#bbf7d0,color:#f0fdf4
```
