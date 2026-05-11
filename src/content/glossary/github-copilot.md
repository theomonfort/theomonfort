---
title: GitHub Copilot
titleEn: GitHub Copilot
summary: 世界で最も活用されている AI 開発ツール。SDLC 全体を AI で支える開発者プラットフォーム。
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
order: 2
category: introduction
related: ['github', 'copilot-chat', 'cloud-agent']
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
- **ターミナル**：Copilot CLI でシェルから対話
- **SDK**：自分のアプリに Copilot を組み込み
- **クラウド**：Cloud Agent でブラウザから自律実行・Copilot Code Review が PR を自動レビュー
- **自動化**：Agentic Workflow でワークフロー化
- **Web / モバイル**：GitHub.com・GitHub Mobile からチャット・CLI のリモート操作・Cloud Agent 起動

## 開発者へのインパクト

GitHub Copilot がもたらす開発者へのインパクト  
Accenture 社の開発者 450 名を対象にした 6 か月間の調査結果

| 活動 | 生産性 | 効率性 | 満足度 |
|---:|---:|---:|---:|
| <span class="big-stat">94%</span><br>作業の「フロー状態」を維持できたと回答 | <span class="big-stat">90%</span><br>より良いコードを書けていると実感 | <span class="big-stat">50%</span><br>ビルド数が増加 | <span class="big-stat">96%</span><br>初日から成功を実感 |
| <span class="big-stat">90%</span><br>情報探索に費やす時間が減少 | <span class="big-stat">88%</span><br>Copilot が提案したコードがそのまま採用された割合 | <span class="big-stat">84%</span><br>ビルド成功率が向上 | <span class="big-stat">90%</span><br>仕事への満足度が向上 |

## ひとつのサブスクで Codex・Claude も使える

GitHub Copilot のサブスクリプションには、Codex や Claude を動かすための **ハーネス**(IDE 拡張・Cloud エージェント基盤)が含まれている。Codex / Claude のフル機能をすべて手に入れるわけではないが、Copilot の **プレミアムリクエスト枠** の範囲で、IDE でもクラウドでも追加契約なしに切り替えて使える。

<div class="copilot-flow-small">

```mermaid
flowchart LR
  Sub["💎 GitHub Copilot<br/>ひとつのサブスクリプション"]

  subgraph IDE["💻 IDE エージェント"]
    direction TB
    VSC["Copilot"]
    JB["Codex"]
    CL["Claude"]
  end

  subgraph Cloud["☁️ Cloud エージェント(非同期コーディング)"]
    direction TB
    CA["Copilot Cloud Agent"]
    GH["Claude Coding Agent"]
    GO["Codex Coding Agent"]
  end

  Sub --> IDE
  Sub --> Cloud

  classDef sub fill:#1a0a2e,stroke:#ff2e88,color:#ff2e88,stroke-width:2px
  classDef ide fill:#0a0e27,stroke:#00f0ff,color:#00f0ff,stroke-width:2px
  classDef cloud fill:#0a1a14,stroke:#9bbc0f,color:#9bbc0f,stroke-width:2px
  class Sub sub
  class VSC,JB,CL ide
  class CA,GH,GO cloud
```

</div>


## なぜ企業は Copilot を選ぶのか

- ✅ **オーケストレーション**<br/>　コーディングだけでなく、SDLC 全体にわたる AI
- ✅ **モデル・エージェント・サーフェス全体での選択の自由**<br/>　あらゆるワークフローに最適なモデルとインターフェース。ベンダーロックインなし
- ✅ **エンタープライズコントロール**<br/>　一元化されたガバナンス、可視性、セキュリティ
- ✅ **最高のコストパフォーマンス**<br/>　プール型使用量、充実した組み込みエンタイトルメント、ACD による価格優位性の最大化

## セキュアでコンプライアントなアーキテクチャ

入力されたコードは **Copilot Proxy (CAPI)** を経由し、安心してエンタープライズで使える設計。

```mermaid
---
config:
  flowchart:
    htmlLabels: true
  themeCSS: |
    .nodeLabel { text-align: center !important; }
    .nodeLabel .llm-row { display: flex !important; flex-direction: row !important; justify-content: center !important; align-items: center !important; gap: 6px !important; margin-top: 4px !important; }
    .nodeLabel .llm-row img { width: 22px !important; height: 22px !important; object-fit: contain !important; }
    .nodeLabel img.proxy-ico { width: 18px !important; height: 18px !important; display: inline-block !important; margin: 0 6px 0 0 !important; vertical-align: middle !important; }
---
flowchart LR
  Dev["👤 開発者"]
  Proxy["<img class='proxy-ico' src='/theomonfort/github-copilot-white-icon.png'/><b>CAPI</b>"]
  LLM["<b>LLM プロバイダー</b><div class='llm-row'><img src='/theomonfort/llm-openai.png'/><img src='/theomonfort/llm-anthropic.svg'/><img src='/theomonfort/llm-gemini.png'/><img src='/theomonfort/llm-grok.png'/></div>"]

  Dev -->|"文脈"| Proxy
  Proxy -->|"生成提案"| Dev
  Proxy <-->|" "| LLM

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

> 🔗 詳細は <a href="https://resources.github.com/ja/copilot-trust-center/" target="_blank" rel="noopener noreferrer" class="retro-link">Copilot Trust Center</a> を参照。
