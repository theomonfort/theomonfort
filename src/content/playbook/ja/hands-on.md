---
title: ハンズオン
titleEn: Hands-on
summary: このプレイブックで紹介している概念を、実際に手を動かしながら学べるワークショップ。題材は「このプレイブックサイトの簡略版」を Copilot と一緒にゼロから作ること。MCP / Instructions / Agent Skill / Plan モード / Cloud Agent / Code Review / Agentic Workflow をひと通り使い切る構成。
icon: /theomonfort/icons/handson.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
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
    label: Codespaces
    url: https://github.com/features/codespaces
  - group: 📖 関連リソース
    label: Google Codelabs (claat)
    url: https://github.com/googlecodelabs/tools
---

## 一言で

<div class="hero-quote hero-quote-mona">
  <p>
    題材は <strong>このプレイブックサイトの簡略版</strong>。今読んでいるこのサイトを、<strong>Copilot と一緒にゼロから作り直します</strong>。
  </p>
  <p>
    リポジトリを <strong>Codespaces</strong> で開けば、環境構築なしでブラウザからすぐに始められます。
  </p>
</div>

## 何を作るのか

ハンズオンのゴールは、特別なデモアプリではなく **今見ているこのサイトそのもの**（の簡略版）です。

Playbook で **「なぜ」** を学んだら、ハンズオンで **その知識を実践に落とし込みます** ── 題材は他でもないこのプレイブック自身。読んだ機能をそのまま使って、自分の手で再構築できます。

<img src="/theomonfort/handson/img/intro-context-window.png" alt="今日作る Copilot Playbook サイトのプレビュー（Context Engineering ページ）" class="build-preview" />

## ワークショップで体験する流れ

<div class="workshop-flow-vertical">

```mermaid
flowchart TB
  Plan["<div style='min-width:560px;text-align:center'>1️⃣ <b>PLAN</b> : MCP・Instructions・Skill で AI にハーネスを着せる</div>"]
  Code["<div style='min-width:560px;text-align:center'>2️⃣ <b>CODE</b> : Plan モードで設計し、Agent モードで実装する</div>"]
  Review["<div style='min-width:560px;text-align:center'>3️⃣ <b>REVIEW</b> : Copilot Code Review が PR を自動レビューする</div>"]
  Improve["<div style='min-width:560px;text-align:center'>4️⃣ <b>IMPROVE</b> : Cloud Agent に Issue を任せて改善 PR を生成する</div>"]
  Operate["<div style='min-width:560px;text-align:center'>5️⃣ <b>OPERATE</b> : Agentic Workflow で運用そのものを自動化する</div>"]

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

## はじめ方

最短ルート — ブラウザだけで完結:

1. 🌐 リポジトリを開く: <a class="retro-link" href="https://github.com/theomonfort/Github-copilot-workshop" target="_blank" rel="noopener noreferrer">theomonfort/Github-copilot-workshop ↗</a>
2. 🟢 緑の **Code** ボタン → **Codespaces** タブ → **Create codespace on main**
3. 📖 ハンズオンを開く: <a class="retro-link" href="/theomonfort/handson/">ハンズオンを開く →</a>
4. ⌨️ 1 ステップずつ進めながら Copilot に話しかける

> 💡 ローカルに環境が無くても OK。Codespaces で必要な拡張機能・依存関係はすべて準備済みです。
> 🤖 ワークショップ中に詰まったら、その場で Copilot Chat に質問するのも学びの一部です。
