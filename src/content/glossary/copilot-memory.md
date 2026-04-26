---
title: Copilot Memory（エージェント記憶）
titleEn: Copilot Memory
summary: Copilotがリポジトリで作業しながら学んだ知識を記憶し、未来の自分・チーム全員に引き継ぐ仕組み。使うほど賢くなる。
icon: 🧠
color: magenta
order: 17
related: ['cloud-agent', 'copilot-code-review', 'cli', 'instructions']
links:
  - label: Blog — Building an agentic memory system
    url: https://github.blog/ai-and-ml/github-copilot/building-an-agentic-memory-system-for-github-copilot/
  - label: Docs — Copilot Memory
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-memory
---

## 一言で

Copilot がリポジトリで働きながら **学んだことを覚えておく**。次に同じような作業が来た時、もう一度説明しなくていい ── **"explain again" がいらない世界**。

> 💡 **アナロジー**：新人がプロジェクトに入って数ヶ月、ようやく **"うちのチームの常識"** が体に染みた状態。あるいは RPG で経験値を積んで **Lvl up** ── スキルもステータスも、次の冒険にそのまま持ち越せる。

## なぜ重要?

毎回プロンプトの冒頭に **同じ前置き** を書いていないか？「このプロジェクトは pnpm を使う」「PR は必ず日本語で書く」「テストは vitest」── そういう **暗黙知** を Copilot が **自分で覚えてくれる**。

しかも記憶は **チーム全員に共有** される。シニアが Code Review で Copilot に教えた判断基準が、ジュニアの次の PR にも自動で効く。**知識が個人ではなくリポジトリに溜まる**。

## 3 つのスコープ

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Repository</code>
      <span class="setup-card-tag tag-cyan">📦 リポジトリ単位</span>
    </div>
    <p>記憶は <strong>リポジトリに紐づく</strong>。別のリポジトリの常識が混ざらないので、プロジェクトごとに最適化された "脳" になる。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>All Users</code>
      <span class="setup-card-tag tag-magenta">👥 全ユーザー共有</span>
    </div>
    <p>そのリポジトリにアクセスできる <strong>全員の Copilot 操作</strong> で利用可能。誰か一人が教えれば、チーム全員の Copilot が賢くなる。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Cross-feature</code>
      <span class="setup-card-tag tag-amber">🔀 機能横断</span>
    </div>
    <p>Cloud Agent が学んだ知識を <strong>Code Review が活用</strong>（逆も然り）。CLI / Chat も含めて、Copilot 機能群が <strong>同じ記憶</strong> を共有。</p>
  </div>
</div>

## 仕組み

```mermaid
flowchart TB
  Work["🤖 Copilot がリポジトリで作業<br/>(Cloud Agent / Code Review / CLI)"]
  Insight["💡 学び (insight) を抽出<br/>「このプロジェクトは X を使う」"]
  Store["🗄️ Memory Store に保存<br/>+ コード引用 (citations)"]
  Next["🔁 次のセッション開始"]
  Validate["✅ 現在のコードベースと照合・検証"]
  Apply["🚀 文脈として適用 → 良い出力"]

  Work --> Insight --> Store
  Next --> Store
  Store --> Validate --> Apply

  classDef work fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef brain fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef check fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef warm fill:#1a0a2e,stroke:#ffb000,color:#ffb000,stroke-width:2px
  class Work,Next work
  class Insight,Store brain
  class Validate,Apply check
```

> ⏳ **28 日後に自動削除** ── 使われた記憶は更新・延長され、使われない知識は静かに消えていく。**腐った知識** が残り続けない設計。

> 🔍 **citations 付きで保存** ── 記憶は具体的なコード片への参照を持つ。使う前に「今もそのコード、本当にある？」と現状と照合してから適用される。

## 設定する場所

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Repository</code>
      <span class="setup-card-tag tag-cyan">📦 リポジトリレベル</span>
    </div>
    <p><strong>Settings → Copilot → Policies</strong><br />このリポジトリだけ Memory を ON / OFF。試したいプロジェクトから始めよう。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>Organization</code>
      <span class="setup-card-tag tag-magenta">🏢 Org レベル</span>
    </div>
    <p><strong>Org Settings → Copilot → Policies</strong><br />組織全体で一括コントロール。コンプライアンス要件に合わせて全リポに適用。</p>
  </div>
</div>

## チームへの効果

ジュニアが書いた PR でも、過去にシニアが Code Review で示した **判断基準** を Copilot が覚えていて、自動で適用してくれる。**個人の経験値がチームの経験値になる**。

> 🎮 リポジトリ自体が **Lvl up していく** ── 使うほど Copilot がそのプロジェクトを深く理解し、レビューも実装も的確になる。「育てる AI 同僚」を、チームみんなで育てる。
