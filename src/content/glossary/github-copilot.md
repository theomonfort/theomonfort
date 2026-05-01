---
title: GitHub Copilot
titleEn: GitHub Copilot
summary: 世界で最も活用されている AI 開発ツール。SDLC 全体を AI で支える開発者プラットフォーム。
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
order: 2
related: ['github', 'copilot-chat', 'agent-mode', 'cloud-agent']
links:
  - label: GitHub Copilot 公式
    url: https://github.com/features/copilot
  - label: Copilot Trust Center
    url: https://resources.github.com/copilot-trust-center/
  - label: Copilot ドキュメント
    url: https://docs.github.com/copilot
---

## 一言で

GitHub Copilot は世界で最もご活用いただいている AI 開発ツール。競合の中で **最も多くの AI モデルと利用サーフェス** を選べるオーケストレーターです。

選べる AI モデル：OpenAI / Anthropic / Google Gemini / xAI Grok、さらにカスタムモデルにも対応。

選べる利用サーフェス：

- **IDE**：VS Code / Visual Studio / JetBrains / Xcode / Eclipse / Neovim
- **クラウド**：Cloud Agent でブラウザから自律実行
- **レビュー**：Copilot Code Review が PR を自動レビュー
- **ターミナル**：Copilot CLI でシェルから対話
- **SDK**：自分のアプリに Copilot を組み込み
- **自動化**：Agentic Workflow でワークフロー化

## 開発者へのインパクト

<div class="radar-intro">
  <div class="radar-intro-title">GitHub Copilot がもたらす開発者へのインパクト</div>
  <div class="radar-intro-sub">Accenture 社の開発者 450 名を対象にした 6 か月間の調査結果</div>
</div>

<div class="radar-small">

```mermaid
---
config:
  theme: base
  themeVariables:
    fontSize: "18px"
  themeCSS: |
    text { fill: #e8f4ff !important; font-family: 'Noto Sans JP', sans-serif !important; font-size: 18px !important; }
    .legend, g.legend, .legendWrapper, g[class*="legend"] { display: none !important; }
---
radar-beta
  axis a1["94% フロー維持"], a2["90% 探索時間減少"], p1["90% 品質向上"], p2["88% 提案採用率"]
  axis e1["50% ビルド数が増加"], e2["84% ビルド成功率が向上"], s1["96% 初日から成功を実感"], s2["90% 満足度向上"]
  curve c[" "]{94, 90, 90, 88, 50, 84, 96, 90}
  max 100
  min 0
```

</div>

## なぜ企業は Copilot を選ぶのか

- ✅ **オーケストレーション**<br/>　コーディングだけでなく、SDLC 全体にわたる AI
- ✅ **モデル・エージェント・サーフェス全体での選択の自由**<br/>　あらゆるワークフローに最適なモデルとインターフェース。ベンダーロックインなし
- ✅ **エンタープライズコントロール**<br/>　一元化されたガバナンス、可視性、セキュリティ
- ✅ **最高のコストパフォーマンス**<br/>　プール型使用量、充実した組み込みエンタイトルメント、ACD による価格優位性の最大化

## チームでの活用イメージ

SDLC のフェーズごとに Copilot をどう使うか ── **企画・開発・レビュー・品質保証・監視**。

```mermaid
---
config:
  theme: base
  flowchart:
    htmlLabels: true
    curve: basis
  themeVariables:
    fontSize: "8px"
  themeCSS: |
    .nodeLabel { color: #e8f4ff !important; }
    .nodeLabel strong { font-size: 11px; }
    .nodeLabel img { border-radius: 50% !important; width: 28px !important; height: 28px !important; min-width: 28px !important; max-width: 28px !important; min-height: 28px !important; max-height: 28px !important; object-fit: cover !important; display: block !important; margin: 0 auto 3px !important; }
---
flowchart TB
  A["<img src='https://i.pravatar.cc/120?img=47' width='28' height='28'/><b style='color:#00f0ff'>企画</b> ・ チームマネージャー<br/>───<br/><b style='color:#00f0ff'>Issues</b> と <b style='color:#00f0ff'>Projects</b> で計画。<b style='color:#00f0ff'>MCP</b> サーバー、<b style='color:#00f0ff'>Instruction</b> ファイル、<b style='color:#00f0ff'>Agent Skills</b>、<b style='color:#00f0ff'>Custom Agent</b> を設定し AI のハーネスを整備"]
  B["<img src='https://i.pravatar.cc/120?img=12' width='28' height='28'/><b style='color:#ff2e88'>開発</b> ・ ジュニア開発者<br/>───<br/><b style='color:#ff2e88'>Codespaces</b> でチーム共通の環境を使い、<b style='color:#ff2e88'>Plan / Agent</b> モードや <b style='color:#ff2e88'>Copilot Chat</b>・<b style='color:#ff2e88'>CLI</b> でコーディング。<b style='color:#ff2e88'>Cloud Agent</b> にタスクを委譲して並列開発"]
  C["<img src='https://i.pravatar.cc/120?img=13' width='28' height='28'/><b style='color:#ffb000'>レビュー</b> ・ シニア開発者<br/>───<br/>Copilot が自動で <b style='color:#ffb000'>Code Review</b>。<b style='color:#ffb000'>PR</b> のレビュー時間を削減し、最終レビューに集中"]
  D["<img src='https://i.pravatar.cc/120?img=13' width='28' height='28'/><b style='color:#9bbc0f'>品質保証</b> ・ シニア開発者<br/>───<br/><b style='color:#9bbc0f'>GitHub Actions</b> でテストを自動化。<b style='color:#9bbc0f'>Code Scanning</b>・<b style='color:#9bbc0f'>Secret Scanning</b>・<b style='color:#9bbc0f'>Dependabot</b> を有効化してセキュリティを担保"]
  E["<img src='https://i.pravatar.cc/120?img=68' width='28' height='28'/><b style='color:#5b8def'>監視</b> ・ チーム全体<br/>───<br/><b style='color:#5b8def'>Agentic Workflow</b> で運用自動化。<b style='color:#5b8def'>Copilot Metrics</b> で AI 利用状況を可視化、<b style='color:#5b8def'>Memory</b> で知識を蓄積"]

  A --> B --> C --> D --> E

  style A fill:#0a0e27,stroke:#00f0ff,stroke-width:4px
  style B fill:#0a0e27,stroke:#ff2e88,stroke-width:4px
  style C fill:#0a0e27,stroke:#ffb000,stroke-width:4px
  style D fill:#0a0e27,stroke:#9bbc0f,stroke-width:4px
  style E fill:#0a0e27,stroke:#5b8def,stroke-width:4px

  linkStyle 0 stroke:#00f0ff,stroke-width:3px,fill:none
  linkStyle 1 stroke:#ff2e88,stroke-width:3px,fill:none
  linkStyle 2 stroke:#ffb000,stroke-width:3px,fill:none
  linkStyle 3 stroke:#9bbc0f,stroke-width:3px,fill:none
```

## セキュアでコンプライアントなアーキテクチャ

入力されたコードは **Copilot Proxy (CAPI)** を経由し、安心してエンタープライズで使える設計。

```mermaid
---
config:
  flowchart:
    htmlLabels: true
  themeCSS: |
    .nodeLabel { text-align: center !important; }
    .nodeLabel img { width: 36px !important; height: 36px !important; object-fit: contain !important; margin: 0 4px !important; vertical-align: middle !important; }
    .nodeLabel img.proxy-ico { width: 18px !important; height: 18px !important; display: inline-block !important; margin: 0 6px 0 0 !important; vertical-align: middle !important; }
---
flowchart LR
  LLM["<img src='/theomonfort/llm-openai.png'/><img src='/theomonfort/llm-anthropic.svg'/><img src='/theomonfort/llm-gemini.png'/><img src='/theomonfort/llm-grok.png'/><br/><b>LLM</b>"]
  Proxy["<img class='proxy-ico' src='/theomonfort/github-copilot-white-icon.png'/><b>CAPI</b>"]
  Dev["👤 Developer"]

  LLM <-->|" "| Proxy
  Dev -->|"文脈"| Proxy
  Proxy -->|"生成提案"| Dev

  classDef llm fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  classDef proxy fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef dev fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  class LLM llm
  class Proxy proxy
  class Dev dev
```

**Copilot Proxy で行われる処理：**

- 🔒 文脈から **PII（個人識別情報）** を除去
- 🚫 文脈から **不適切な表現** をフィルタリング
- 🛡️ 文脈の **一般的なセキュリティ脆弱性** をチェック
- ⚖️ 生成提案を **IP（知的財産）フィルター** に通す
- 🔐 すべてのデータは **転送中に暗号化**

> 🔗 詳細は [Copilot Trust Center](https://resources.github.com/ja/copilot-trust-center/) を参照。
