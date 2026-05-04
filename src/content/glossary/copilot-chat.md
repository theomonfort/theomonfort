---
title: Copilot Chat
titleEn: Copilot Chat
summary: コードと話すための入口。VS Code / CLI / Cloud Agent / GitHub.com で、Ask・Plan・Agent の 3 モードから開発を駆動する。
icon: 💬
color: cyan
order: 3
category: develop
related: ['mcp', 'instructions', 'cli', 'cloud-agent']
links:
  - label: About GitHub Copilot Chat
    url: https://docs.github.com/copilot/github-copilot-chat/about-github-copilot-chat
  - label: Copilot Chat in VS Code
    url: https://code.visualstudio.com/docs/copilot/chat/copilot-chat
---

## 一言で

**Copilot Chat はコードと話すための窓口。** ファイル・リポジトリ・issue・PR・エラーログ ── すべてを文脈にして、自然言語で質問・依頼できる。

> 💡 **アナロジー**：常に隣にいるペアプロ相手。違うのは、その相手は **リポジトリ全体を一瞬で読める** こと。そして VS Code でも、ターミナルでも、GitHub.com でも、同じ顔で待っていてくれる。

## 3 つのモード

VS Code の Copilot Chat には **Ask / Plan / Agent** の 3 モード。場面に応じて切り替える。

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>🔍 Ask</code>
      <span class="setup-card-tag tag-cyan">▸ 質問</span>
    </div>
    <p>Copilot 最初のモード。<strong>質問に回答する</strong>。新しくジョインしたメンバーが <strong>コードベースを理解する</strong> 時に最適。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>📋 Plan</code>
      <span class="setup-card-tag tag-amber">▸ 設計</span>
    </div>
    <p>Copilot と対話しながら <strong>実装可能なレベルのドキュメント</strong> を作成。Agent / Cloud Agent がそのまま実装に使える設計書になる。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>🤖 Agent</code>
      <span class="setup-card-tag tag-magenta">▸ 実装</span>
    </div>
    <p>半自律ペアプロ。要求 → 内部分析 → 実装 → 検証まで実施。<strong>MCP サーバー経由で GitHub 外のシステム</strong> とも連携。</p>
  </div>
</div>

## どこで動く

```mermaid
flowchart LR
  Chat["💬 Copilot Chat"]

  VSC["💻 VS Code"]
  JB["🧩 JetBrains / VS"]
  GH["🌐 GitHub.com"]
  Mob["📱 GitHub Mobile"]
  CLI["⌨️ Copilot CLI"]
  Cloud["☁️ Cloud Agent"]

  Chat --> VSC
  Chat --> JB
  Chat --> GH
  Chat --> Mob
  Chat --> CLI
  Chat --> Cloud

  classDef hub fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef node fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  class Chat hub
  class VSC,JB,GH,Mob,CLI,Cloud node
```

エディタでもブラウザでも、移動中のスマホでも、夜間に走るクラウドでも ── **同じ会話相手** がついてくる。

## Agent モードで開く扉

Agent モードは Copilot の **手を伸ばす範囲** を一気に広げる。MCP サーバーを介して、Copilot は GitHub の外側 ── Figma・Slack・Jira・社内 DB・ブラウザ ── まで触れる。

```mermaid
flowchart LR
  A["🤖 Agent モード"]
  M["🔌 MCP Servers"]
  F["🎨 Figma"]
  S["💬 Slack"]
  J["📋 Jira"]
  P["🌐 Playwright"]
  D["🗄️ DB / API"]

  A --> M
  M --> F
  M --> S
  M --> J
  M --> P
  M --> D

  classDef agent fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef mcp fill:#1a0a2e,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef ext fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class A agent
  class M mcp
  class F,S,J,P,D ext
```

> ⚔️ **JRPG 風に言うと**：Ask は「町の人に話を聞く」、Plan は「冒険の書を埋める」、Agent は「**仲間を引き連れて実際にダンジョンに潜る**」。

## 上手に使うコツ

- **🎯 文脈を渡す** ── `#file` / `#selection` / `@workspace` で対象を明示。曖昧な質問より具体的な参照のほうが結果が良い
- **📜 instructions ファイルでルール常駐** ── 命名規則・スタイル・禁止事項は `.github/copilot-instructions.md` に書いて毎回の前置きを撲滅
- **🔌 MCP で外部接続** ── Figma の URL / Jira のチケット / Slack のスレッドを直接 Agent に渡す
- **🧭 モードを正しく選ぶ** ── 探索なら Ask、設計なら Plan、実装なら Agent。**Plan で書いた設計書を Agent / Cloud Agent に渡す** のが王道ルート
- **🪶 スコープを絞る** ── 「全部直して」より「この関数の null チェックを足して」。粒度が小さいほど精度が上がる

## デモシナリオ

> 🎮 **王道の流れ**：
> 1. リポジトリに **MCP サーバー** + **Agent SKILL** + **Instruction ファイル** を仕込む
> 2. **Plan モード** で対話しながらリファクタリング計画を作成
> 3. その計画を **Agent モード** に渡してリファクタを実行
> 4. push 時の Actions でテスト & 別モデルが Code Review
> 5. シニア開発者は **最終レビューとメンタリング** に集中
>
> Chat はもはや「質問箱」ではなく、**チーム開発の中央コンソール**。
