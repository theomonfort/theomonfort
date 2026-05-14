---
title: ハンズオン
titleEn: Hands-on
summary: このプレイブックで紹介している概念を、実際に手を動かしながら学べるワークショップ。題材は「このプレイブックサイトの簡略版」を Copilot と一緒にゼロから作ること。MCP / Instructions / Agent Skill / Plan モード / Cloud Agent / Code Review / Agentic Workflow をひと通り使い切る構成。
icon: 🎮
color: cyan
order: 3
category: introduction
related: ['github-copilot', 'codespaces', 'mcp']
links:
  - group: 🎮 ワークショップ
    label: 2026 GitHub Copilot Workshop (リポジトリ)
    url: https://github.com/theomonfort/Github-copilot-workshop
  - group: 🎮 ワークショップ
    label: ワークショップ Codelabs を開く
    url: https://theomonfort.github.io/2026-Github-Copilot-Workshop/github-copilot-workshop/custom/handson/
  - group: 📖 関連リソース
    label: GitHub Codespaces
    url: https://github.com/features/codespaces
  - group: 📖 関連リソース
    label: Google Codelabs (claat)
    url: https://github.com/googlecodelabs/tools
---

## 一言で

<div class="hero-quote hero-quote-theo">
  <p>
    題材は <strong>このプレイブックサイトの簡略版</strong>。あなたが今読んでいるこのサイトを、<strong>Copilot と一緒にゼロから作り直します</strong>。
  </p>
  <p>
    リポジトリを <strong>Codespaces</strong> で開けば、環境構築なしでブラウザからすぐに始められます。
  </p>
</div>

> 🪞 **作るもの = 今読んでいるこのサイト(の簡略版)**。だからゴールが分かりやすく、各機能がどの場面で効くかを実感できます。
> 🎮 **使う機能** — MCP / Instructions / Agent Skills / Plan モード / Cloud Agent / Code Review / Agentic Workflow を <strong>一気通貫</strong> で体験。
> 🚀 来週開催の特別ワークショップ向け。Codelabs 形式で 1 ステップずつ進められます。

📘 リポジトリと Codelabs:
- <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
- <a class="retro-link" href="https://theomonfort.github.io/2026-Github-Copilot-Workshop/github-copilot-workshop/custom/handson/" target="_blank" rel="noopener noreferrer">ワークショップ Codelabs を開く ↗</a>

## ワークショップで体験する流れ

**このプレイブックサイトの簡略版** を作りながら、5 つのフェーズで主要機能を一気通貫に体験します。

<div class="workshop-flow-vertical">

```mermaid
flowchart TB
  Prep["🛠️ <b>リポジトリ準備</b><br/>MCP / Instructions / Skill"]
  Plan["📋 <b>Copilot</b><br/>Plan / Implement モード"]
  Review["🔍 <b>Copilot</b><br/>Code Review"]
  Improve["🤖 <b>Cloud Agent</b><br/>改善タスク"]
  Maint["🔁 <b>Agentic Workflow</b><br/>リポジトリ運用自動化"]

  Prep --> Plan --> Review --> Improve --> Maint

  classDef prep fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef dev  fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef rev  fill:#1a1408,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef ops  fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  class Prep prep
  class Plan,Improve dev
  class Review rev
  class Maint ops
```

</div>

> 📝 ワークショップ用の **簡略フロー** です。実際の SDLC ではフェーズが行き来したり並列で走ったりします。「どの場面でどの機能を使うか」の感覚を掴むことが目的。

## はじめ方

最短ルート — ブラウザだけで完結:

1. 🌐 リポジトリを開く: <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
2. 🟢 緑の **Code** ボタン → **Codespaces** タブ → **Create codespace on main**
3. 📖 Codelabs を開く: <a class="retro-link" href="https://theomonfort.github.io/2026-Github-Copilot-Workshop/github-copilot-workshop/custom/handson/" target="_blank" rel="noopener noreferrer">ワークショップを開く ↗</a>
4. ⌨️ 1 ステップずつ進めながら Copilot に話しかける

> 💡 ローカルに環境が無くても OK。Codespaces で必要な拡張機能・依存関係はすべて準備済みです。
> 🤖 ワークショップ中に詰まったら、その場で Copilot Chat に質問するのも学びの一部です。
