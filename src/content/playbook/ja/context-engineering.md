---
title: コンテキストエンジニアリング
titleEn: Context Engineering
summary: AI に渡す文脈を設計する技術。少なすぎず、多すぎず、タスク達成に必要な情報だけを届ける。
icon: /theomonfort/icons/context-engineering.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#9bbc0f"
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

## Context rot（コンテキスト劣化）

LLM は context window（コンテキストウィンドウ）が大きいほど賢くなるわけではない。情報を詰め込みすぎると、**Lost in the middle（中央埋没）** で重要情報が中央に埋もれたり、**Recency bias（直近性バイアス）** で直近の情報を過大評価したりして、判断が鈍る。

これを **context rot（コンテキスト劣化）** と呼ぶ。

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "賢いゾーン": 60:::smart
  "鈍いゾーン": 40:::dumb
classDef smart fill:#0891b2,stroke:#67e8f9,color:#ecfeff
classDef dumb fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
```

> Context Engineering の目的は、context window を埋めることではなく、**必要な情報が目立つ状態を保つこと**。

## コンテキストウィンドウ：Start（turn 1）

Start はほぼ理想状態。常時必要な **System/tools**（skills descriptions / copilot-instructions / MCP servers）だけが入り、作業用の余白が大きい。最初のターンでは初めて送られるので、これらは **Input トークン** として課金される。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::used
  "Free space": 75:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## コンテキストウィンドウ：Custom agent（turn 1）

Custom agent に切り替えると、その agent instruction が context に追加される。System & tools も Custom Agent もこのターンで初めて送られるので、すべて **Input トークン** として課金される。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Free space": 65:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## コンテキストウィンドウ：Prompt（turn 1）

Prompt を書く。たとえば「test を追加して」と頼むと、関連 skill と test 用の path instruction が読み込まれることがある。コンテキスト内の要素すべてが、このターンで初めて送られる **Input トークン**。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Free space": 35:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## コンテキストウィンドウ：Sub-agent（turn 1）

agent が **sub-agent** を呼ぶことがある。たとえば codebase の explore、database 検索、review など。sub-agent の summary が main context に返ってくる。コンテキスト内の要素すべてが、このターンで初めて送られる **Input トークン**。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Sub-agent data": 10:::used
  "Free space": 25:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## コンテキストウィンドウ：Memory（turn 1）

Repo で作業を続けると、memory が生成され、必要な時に動的に読み込まれることがある。コンテキスト内の要素すべてが、依然としてこのターンの新規 **Input トークン**。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Sub-agent data": 10:::used
  "Memory": 10:::used
  "Free space": 15:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## コンテキストウィンドウ：Output（turn 1）

LLM が応答する。返ってきた **Answer** は context に追加される。これは **Output トークン** で、Input トークンとは別の（通常は高めの）レートで課金される。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#a16207;border:1px solid #fbbf24;vertical-align:middle;margin-right:0.3em"></span><strong>Output トークン</strong>（LLM の応答） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::used
  "Custom Agent": 10:::used
  "Path instruction": 10:::used
  "Skill": 10:::used
  "Prompt": 10:::used
  "Sub-agent data": 10:::used
  "Memory": 10:::used
  "Answer": 10:::output
  "Free space": 5:::free
  "Buffer": 15:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef output fill:#a16207,stroke:#fbbf24,color:#fef3c7
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```

## コンテキストウィンドウ：Cache input（turn 2）

ユーザーが次のターンを始めるために新しい prompt を送る。turn 1 の全要素 ── system、tools、custom agent、prompt、sub-agent data、memory、**さらに LLM の answer も** ── は **プロンプトキャッシュ** から安価な **Cache input トークン** として再利用される。新規 **Input トークン** はこのターンの **Prompt #2** だけ。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#475569;border:1px solid #cbd5e1;vertical-align:middle;margin-right:0.3em"></span><strong>Cache input トークン</strong>（保証されない） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid #ff2e88;vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid #67e8f9;vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

```mermaid
treemap-beta
"コンテキストウィンドウ"
  "System & tools": 10:::cache
  "Custom Agent": 10:::cache
  "Path instruction": 10:::cache
  "Skill": 10:::cache
  "Prompt": 10:::cache
  "Sub-agent data": 10:::cache
  "Memory": 10:::cache
  "Answer": 10:::cache
  "Prompt #2": 10:::used
  "Free space": 5:::free
  "Buffer": 5:::free
classDef used fill:#7a1748,stroke:#ff2e88,color:#ffe8f4
classDef cache fill:#475569,stroke:#cbd5e1,color:#f1f5f9
classDef free fill:#0891b2,stroke:#67e8f9,color:#ecfeff
```
