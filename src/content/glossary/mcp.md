---
title: MCP Server（Model Context Protocol）
titleEn: MCP Server
summary: AIモデルに「外の世界」へのアクセスを与える標準プロトコル。USB-Cのように、どのモデル・どのツールでも"差せば動く"。
icon: 🔌
color: cyan
order: 2
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
---

## 一言で

**MCP** は **Model Context Protocol** の略 ── AI モデルに「**現在操作している場所の外**から文脈を取りに行く」標準的な方法を与えるプロトコル。

> 💡 **アナロジー**：MCP は **「AI のための USB-C」**。サードパーティのツールと Copilot を繋ぐ共通コネクタ。

## なぜ重要?

LLM はそのままでは **"閉じた箱"**。学習データの外側 ── 君のファイル、社内 DB、Figma のデザイン、Slack の会話 ── には触れない。

MCP がもたらす 3 つの価値：

- **🧩 機能を拡張できる** ── Figma / Salesforce / Slack などを、それぞれカスタム統合せずに Copilot から直接制御
- **🔗 ワークフローを統合** ── Copilot が GitHub / Jira / テストツールを繋ぐ **ハブ** になる
- **🌐 標準プロトコル** ── MCP をサポートするあらゆるツールが、書き直しなしで動く

## 仕組み

```mermaid
flowchart LR
  subgraph Host["🤖 AI Host"]
    LLM[GitHub Copilot]
  end
  subgraph MCP["🔌 MCP Layer"]
    P[Model Context Protocol]
  end
  subgraph Tools["🛠️ External Tools"]
    SL[Slack]
    JR[Jira]
    FS[ファイルシステム]
    PW[Playwright]
    API[各種 API]
  end
  LLM <--> P
  P <--> SL
  P <--> JR
  P <--> FS
  P <--> PW
  P <--> API

  classDef host fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef proto fill:#1a0a2e,stroke:#ffb000,color:#ffb000,stroke-width:2px
  classDef tool fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class LLM host
  class P proto
  class SL,JR,FS,PW,API tool
```

エージェントは **「どんなツールが使えるか」** を MCP server に問い合わせ、必要なら呼び出す。プロトコルが固定なので、新しい server を足すだけで全エージェントが新しい能力を獲得する。

## どこで動く?

MCP サーバーの実行場所は **2 種類**。用途とセキュリティ要件で使い分ける。

```mermaid
flowchart TB
  subgraph Local["💻 ローカルマシン"]
    VS1["VS Code / Copilot CLI"]
    Child["MCP Server<br/>子プロセス"]
    VS1 -->|stdio| Child
  end
  subgraph Remote["☁️ クラウド / リモート"]
    VS2["VS Code / Copilot CLI"]
    SRV["MCP Server<br/>常駐サービス"]
    VS2 -->|"HTTP / SSE"| SRV
  end

  classDef local fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef remote fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  class VS1,Child local
  class VS2,SRV remote
```

- **stdio 方式** ── VS Code がローカルで子プロセスとして起動。**一番手軽・安全**（ネット越しに何も飛ばない）
- **HTTP 方式（SSE / streamable-http）** ── サーバーがクラウドで常駐、クライアントは接続するだけ。**チーム共通・本番運用**向け

## VS Code での設定

設定ファイルは **2 か所**。スコープで使い分ける：

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.vscode/mcp.json</code>
      <span class="setup-card-tag tag-cyan">▸ リポジトリ共有</span>
    </div>
    <p>プロジェクト固有の MCP を <strong>チーム全員</strong> で揃えたい時。Git に含まれる。</p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>User Settings</code>
      <span class="setup-card-tag tag-magenta">▸ 自分の PC のみ</span>
    </div>
    <p><strong>個人用</strong> / 全プロジェクト共通で使いたい時。Git には含まれない。</p>
  </div>
</div>

> 📁 **Mac の User Settings**：`~/.config/Code/User/settings.json`

## Copilot CLI で始める

```bash
# MCP server を追加
copilot mcp add <server-name>

# 既存サーバ一覧
copilot mcp list
```

GitHub 公式 MCP server は最初から接続済 ── `gh` コマンドが叩ける感覚で、AI が Issues / PRs / Actions / Code search を操作する。

`modelcontextprotocol/registry` には公式 + コミュニティ製の server が多数（filesystem / postgres / slack / puppeteer / playwright / Figma…）。
