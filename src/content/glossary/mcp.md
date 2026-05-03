---
title: MCP Server（Model Context Protocol）
titleEn: MCP Server
summary: MCP は AI モデルに対して追加の文脈を提供する方法である。
icon: /theomonfort/mcp.png
color: cyan
order: 4
category: plan
related: ['context-engineering', 'agent-skills']
links:
  - label: MCP 公式（modelcontextprotocol.io）
    url: https://modelcontextprotocol.io/introduction
  - label: GitHub Docs — MCP
    url: https://docs.github.com/en/copilot/concepts/context/mcp
  - label: VS Code — MCP servers
    url: https://code.visualstudio.com/docs/copilot/customization/mcp-servers
  - label: GitHub 公式 MCP server
    url: https://github.com/github/github-mcp-server
  - label: MCP Registry
    url: https://registry.modelcontextprotocol.io/
  - label: MCP Registry repo
    url: https://github.com/modelcontextprotocol/registry
  - label: GitHub Docs — Configure MCP server access (org/enterprise)
    url: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-server-access
  - label: GitHub Docs — Configure MCP registry (org/enterprise)
    url: https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-mcp-usage/configure-mcp-registry
  - label: GitHub Docs — MCP server usage in your company
    url: https://docs.github.com/en/copilot/concepts/mcp-management
  - label: GitHub Blog — Find, install, manage MCP servers via the GitHub MCP Registry
    url: https://github.blog/ai-and-ml/generative-ai/how-to-find-install-and-manage-mcp-servers-with-the-github-mcp-registry/
  - label: GitHub Docs — MCP and the cloud agent
    url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
---

## 一言で

<div class="hero-quote">

MCP は「Model Context Protocol」の略称で、AI モデルに対して追加の文脈や機能を提供するプロトコルである。

</div>

## 仕組み

```mermaid
flowchart LR
  subgraph Host["🤖 AI Host (VS Code / Copilot CLI 等)"]
    APP[Copilot]
    CL1[MCP Client]
    CL2[MCP Client]
    CL3[MCP Client]
    CL4[MCP Client]
    CL5[MCP Client]
  end
  subgraph MCP["🔌 MCP Layer (1 Client ⇄ 1 Server)"]
    SLs[Work IQ MCP Server]
    JRs[GitHub MCP Server]
    FSs[Playwright MCP Server]
    PWs[Context7 MCP Server]
    APIs[Salesforce MCP Server]
  end
  subgraph Tools["🛠️ External Tools"]
    SL[Work IQ]
    JR[GitHub]
    FS[Playwright]
    PW[Context7]
    API[Salesforce]
  end
  APP --- CL1
  APP --- CL2
  APP --- CL3
  APP --- CL4
  APP --- CL5
  CL1 <-->|stdio| SLs
  CL2 <-->|HTTP| JRs
  CL3 <-->|stdio| FSs
  CL4 <-->|stdio| PWs
  CL5 <-->|stdio| APIs
  SLs <-->|API| SL
  JRs <-->|API| JR
  FSs <-->|API| FS
  PWs <-->|API| PW
  APIs <-->|API| API

  classDef host fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef proto fill:#1a0a2e,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef tool fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class APP,CL1,CL2,CL3,CL4,CL5 host
  class SLs,JRs,FSs,PWs,APIs proto
  class SL,JR,FS,PW,API tool
```

**AI Host** (VS Code、Copilot CLI など) は内部に **複数の MCP Client** を持ち、**1 Client ⇄ 1 Server** の 1:1 接続を維持する。利用したい外部ツールごとに Client / Server のペアが追加される。プロトコルが固定なので、新しい Server を追加するだけで全エディタ・全エージェントが新しい能力を獲得する。

## なぜ重要?

MCP がもたらす 3 つの価値：

- **🧩 機能拡張**：Copilot を **一つの起点** にして、あらゆる外部ツールを操作できる。
  - 要件を読み書きする (**Jira**)
  - デザインを作る (**Figma**)
  - 3D デザインを生成して印刷する (**Blender** + 3D プリンター)
  - メール・カレンダーを確認・編集する (**Work IQ**)
  - 社内データベースに接続して分析する
- **🔗 ワークフローを統合**：個別ツールを繋ぐカスタム実装が不要になり、Copilot が **複数システムを横断するハブ** として機能する。
- **🌐 広いエコシステム対応**：MCP は **オープンなプロトコル** で、すでに **事実上の標準** になりつつあります。AI アシスタント、**Visual Studio** などの開発ツール、その他多くのアプリケーションが MCP をサポートしており、**一度作れば、どこでも繋がる**。コーディング統合との相性も抜群。

## どこで動く?

<div class="split-image">
  <div class="split-text">

MCP サーバーの実行場所は **2 種類** あります。

1. **stdio 方式** では、VS Code が **ローカルマシン上で子プロセス** として MCP サーバーを起動します。
2. **HTTP 方式（SSE / streamable-http）** では、MCP サーバーが **クラウドやリモートサーバー上で稼働** し、VS Code は **クライアントとして接続するだけ** です。

用途やセキュリティ要件に応じて使い分けが可能です。

  </div>
  <div class="split-figure">
    <img src="/theomonfort/mcp-activity-monitor.png" alt="Activity Monitor showing local MCP server processes" />
    <figcaption>Activity Monitor で見ると、ローカル MCP サーバーが <code>npm exec</code> の <strong>子プロセス</strong> として動いているのが分かる</figcaption>
  </div>
</div>

## VS Code での設定

VS Code の **Marketplace から MCP サーバーをインストール** する時、2 つのスコープを選べる：

- **`Install`** → **個人設定** ファイル（User Settings）に追加
- **`Install Workspace`** → **リポジトリ設定** ファイル（`.vscode/mcp.json`）に追加

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.vscode/mcp.json</code>
      <span class="setup-card-tag tag-cyan">▸ リポジトリ共有</span>
    </div>
    <p>Git に含まれるので、<strong>チーム全員</strong> で MCP を揃えられる。メンバーが repo を clone すると VS Code が <strong>「有効化しますか？」</strong> と確認してくる。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>User Settings</code>
      <span class="setup-card-tag tag-magenta">▸ 自分の PC のみ</span>
    </div>
    <p><strong>個人用</strong> / 全プロジェクト共通で使いたい時。Git には含まれない。</p>
    <ul class="setup-card-paths">
      <li>📁 <strong>Mac</strong>：<code>~/.config/Code/User/settings.json</code></li>
      <li>🪟 <strong>Windows</strong>：<code>%APPDATA%\Code\User\settings.json</code></li>
    </ul>
  </div>
</div>

## Copilot CLI で始める

```bash
# MCP server を追加
copilot mcp add <server-name>

# 既存サーバ一覧
copilot mcp list
```

GitHub 公式 MCP server は最初から接続済み。`gh` コマンドを叩く感覚で、AI が Issues / PRs / Actions / Code search を操作できる。

`modelcontextprotocol/registry` には公式 + コミュニティ製の server が多数（filesystem / postgres / slack / puppeteer / playwright / Figma…）。
