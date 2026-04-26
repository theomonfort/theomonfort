---
title: GitHub Codespaces
titleEn: GitHub Codespaces
summary: クラウド上にホストされる、カスタマイズ可能なリモート開発環境。AI を"安全に閉じ込めて"実験・作業できる、AI駆動開発の理想的な遊び場。
icon: ☁️
color: cyan
order: 15
related: ['cloud-agent', 'agentic-workflow', 'cli']
links:
  - label: GitHub Codespaces
    url: https://github.com/features/codespaces
  - label: devcontainer.json リファレンス
    url: https://containers.dev/
---

Codespaces は GitHub がクラウド上でホストする、Docker コンテナベースの開発環境。ブラウザ・VS Code・GitHub CLI から数秒で接続でき、`devcontainer.json` で構成をコード化できる。

**AI駆動開発における意味:**
- **隔離された実験場** — AI エージェントが暴走しても、ローカルマシンには影響なし。壊れたら捨てて作り直せる。
- **再現可能な環境** — チーム全員が同じツール・ライブラリ・MCP server で動かせるので「自分の環境では動く」が消える。
- **どこからでもアクセス** — ブラウザさえあれば iPad からでも本格的な開発ができる。
- **AI に必要なツールを事前装備** — Copilot CLI、各種 MCP server、Skills を `devcontainer.json` で予め仕込んでおける。

**Codespaces を使う理由（要約）:**
- 環境構築ゼロ
- 全員同じ環境
- どこからでもアクセス
- 事前設定済み

ワークショップや POC で「セットアップに30分溶かす」を完全に消せる。AI に何かを試させたい時の第一選択肢。
