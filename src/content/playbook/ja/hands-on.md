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
    label: ワークショップ(ハンズオン)を開く
    url: https://theomonfort.github.io/theomonfort/handson/
  - group: 📖 関連リソース
    label: GitHub Codespaces
    url: https://github.com/features/codespaces
  - group: 📖 関連リソース
    label: Google Codelabs (claat)
    url: https://github.com/googlecodelabs/tools
---

## 一言で

<div class="hero-quote hero-quote-mona">
  <p>
    題材は <strong>このプレイブックサイトの簡略版</strong>。あなたが今読んでいるこのサイトを、<strong>Copilot と一緒にゼロから作り直します</strong>。
  </p>
  <p>
    リポジトリを <strong>Codespaces</strong> で開けば、環境構築なしでブラウザからすぐに始められます。
  </p>
</div>

## 何を作るのか

ハンズオンのゴールは、特別なデモアプリではなく **今あなたが見ているこのサイトそのもの**（の簡略版）です。

<img src="/theomonfort/handson/img/intro-context-window.png" alt="今日作る Copilot Playbook サイトのプレビュー（Context Engineering ページ）" class="build-preview" />

> 🎯 完成像がすでに目の前にあるので、各ステップで「次に作るのはどの部分か」が一目で分かります。

## ワークショップで体験する流れ

**このプレイブックサイトの簡略版** を作りながら、5 つのフェーズで主要機能を一気通貫に体験します。

<div class="workshop-flow-vertical">

```mermaid
flowchart TB
  Plan["1️⃣ <b>PLAN</b><br/>AI にハーネスを着せる<br/>MCP・Instructions・Skill で<br/>文脈・ルール・型を仕込む"]
  Code["2️⃣ <b>CODE</b><br/>Copilot と一緒に設計し<br/>Plan モードで計画を立て<br/>Agent モードで実装まで進める"]
  Review["3️⃣ <b>REVIEW</b><br/>Copilot Code Review が<br/>PR を自動でレビューし<br/>人の目に届く前に問題を潰す"]
  Improve["4️⃣ <b>IMPROVE</b><br/>Cloud Agent に Issue を任せ<br/>あなたが寝ている間も<br/>改善 PR が積み上がる"]
  Operate["5️⃣ <b>OPERATE</b><br/>Agentic Workflow で AI を定期実行し<br/>リポジトリの運用そのものを<br/>自動化する"]

  Plan --> Code --> Review --> Improve --> Operate

  classDef prep fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef dev  fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef rev  fill:#1a1408,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef ops  fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  class Plan prep
  class Code,Improve dev
  class Review rev
  class Operate ops
```

</div>

> 📝 ワークショップ用の **簡略フロー** です。実際の SDLC ではフェーズが行き来したり並列で走ったりします。「どの場面でどの機能を使うか」の感覚を掴むことが目的。

## はじめ方

最短ルート — ブラウザだけで完結:

1. 🌐 リポジトリを開く: <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
2. 🟢 緑の **Code** ボタン → **Codespaces** タブ → **Create codespace on main**
3. 📖 ハンズオンを開く: <a class="retro-link" href="/theomonfort/handson/">ハンズオンを開く →</a>
4. ⌨️ 1 ステップずつ進めながら Copilot に話しかける

> 💡 ローカルに環境が無くても OK。Codespaces で必要な拡張機能・依存関係はすべて準備済みです。
> 🤖 ワークショップ中に詰まったら、その場で Copilot Chat に質問するのも学びの一部です。
