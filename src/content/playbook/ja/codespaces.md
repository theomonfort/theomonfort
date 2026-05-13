---
title: GitHub Codespaces
titleEn: GitHub Codespaces
summary: クラウド上にホストされる、カスタマイズ可能なリモート開発環境。AI を"安全に閉じ込めて"実験・作業できる、AI駆動開発の理想的な遊び場。
icon: /theomonfort/github-vscode-mark.png
color: cyan
order: 17
category: develop
related: ['cloud-agent', 'agentic-workflow', 'cli']
links:
  - group: GitHub Docs
    label: GitHub Codespaces (overview)
    url: https://github.com/features/codespaces
  - group: GitHub Docs
    label: Codespaces documentation
    url: https://docs.github.com/en/codespaces
  - group: GitHub Docs
    label: Choosing the machine type for your codespace
    url: https://docs.github.com/en/codespaces/setting-your-user-preferences/choosing-the-machine-type-for-your-codespace
  - group: Dev Containers
    label: devcontainer.json reference
    url: https://containers.dev/
  - group: Dev Containers
    label: Introduction to dev containers (GitHub Docs)
    url: https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
---

## 一言で

<div class="hero-quote hero-quote-chat">
  <p>
    <strong>Codespaces</strong> は、GitHub がクラウドでホストする <strong>使い捨て可能な開発環境</strong>。
  </p>
  <p>
    ブラウザを開けば、数秒で <strong>VS Code 付きのフル開発環境</strong> が立ち上がる。AI に何かを試させたいときの第一選択肢。
  </p>
</div>

## 特徴

クラウド上の **Docker コンテナ** が 1 セッション = 1 codespace。設定は repo 内の `devcontainer.json` でコード化される。

**接続方法（どこからでも）**

- 🌐 **ブラウザ** — `github.com` から直接、URL 1 つで開ける
- 💻 **VS Code Desktop** — ローカル VS Code から remote 接続
- 🖥️ **GitHub CLI** (`gh codespace ssh`) — ターミナルから直接接続

**コンテナ環境**

- 🐳 **Docker ベース** — base image + features + post-create script を `devcontainer.json` で宣言
- 📦 **再現性** — 同じ repo を開けば、誰でも同じ環境
- 🔌 **VS Code 拡張も pre-install** — Copilot・MCP server・linter まで仕込める
- ⚡ **マシンサイズ** — 必要に応じて切替可能（最大 **32 core / 128 GB RAM / 128 GB ストレージ**）

> 重い build や AI agent を並列で走らせたいときは大きめを選ぶ。**起動後でもサイズ変更可能**。

## メリット

- 🚀 **セットアップ 0 分** — "Open in Codespaces" を押すだけ
- 👥 **全員同じ環境** — "自分のマシンでは動く" が消える
- 🌍 **どこからでもアクセス** — ブラウザさえあれば OK
- 💪 **非力なマシンでも OK** — 手元が古い PC でも、クラウド側で **最大 32 core / 128 GB RAM** を使える
- 🛡️ **AI を安全に隔離** — 壊れたら捨てて作り直す
- 🤖 **AI ツール pre-install** — Copilot CLI・MCP server・Skills を事前装備

