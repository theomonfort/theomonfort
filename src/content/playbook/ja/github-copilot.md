---
title: GitHub Copilot
titleEn: GitHub Copilot
summary: 世界で最も活用されている AI 開発ツール。SDLC 全体を AI で支える開発者プラットフォーム。
icon: /theomonfort/github-copilot-white-icon.png
color: cyan
accent:
  text: text-neon-cyan
  border: border-neon-cyan
  glow: hover:shadow-neon-cyan
  shadow: shadow-neon-cyan
  hex: "#00f0ff"
order: 2
category: introduction
related: ['github', 'copilot-chat', 'copilot-app', 'cloud-agent']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Copilot 公式
    url: https://github.com/features/copilot
  - group: 📖 公式ドキュメント
    label: Copilot Trust Center
    url: https://resources.github.com/copilot-trust-center/
  - group: 📖 公式ドキュメント
    label: Copilot ドキュメント
    url: https://docs.github.com/copilot
  - group: 📖 公式ドキュメント
    label: GitHub Copilot app
    url: https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app
  - group: 📖 公式ドキュメント
    label: Copilot Fusion、労力レベルと課金
    url: https://docs.github.com/en/copilot/concepts/models/copilot-fusion
  - group: 📰 発表
    label: "Copilot Fusion 一般提供（2026-10-28）"
    url: https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion
  - group: 📊 ベンチマーク
    label: "Artificial Analysis: Copilot Fusion Max（2026-10-28）"
    url: https://artificialanalysis.ai/articles/github-copilot-fusion-orchestrates-anthropic-and-openai-models-to-balance-performance-and-cost
  - group: 📰 発表
    label: "GPT-5.5 is generally available for GitHub Copilot (2026-04-24)"
    url: https://github.blog/changelog/2026-04-24-gpt-5-5-is-generally-available-for-github-copilot
  - group: 📰 発表
    label: "Data residency (US + EU) and FedRAMP-authorized models in Copilot (2026-04-13)"
    url: https://github.blog/changelog/2026-04-13-copilot-data-residency-in-us-eu-and-fedramp-compliance-now-available
  - group: 📰 発表
    label: "Copilot SDK is now in public preview (2026-04-02)"
    url: https://github.blog/changelog/2026-04-02-copilot-sdk-in-public-preview
---

## 一言で

<div class="hero-quote hero-quote-mona">
  <p>GitHub Copilot は世界で最もご活用いただいている <strong>AI 開発ツール</strong>。</p>
  <p>IDE、ターミナル、GitHub.com の<strong>あらゆる場面</strong>で、開発者の<strong>フロー</strong>を加速します。</p>
</div>

## GitHub Copilot の歴史

<div class="copilot-history">
  <div class="ch-era" style="grid-column: 1 / 4">「副操縦士」(copilot) の時代</div>
  <div class="ch-era" style="grid-column: 4 / 5">Agent の台頭</div>
  <div class="ch-era" style="grid-column: 5 / 6">IDE 以外への展開</div>

  <div class="ch-arrow"></div>

  <div class="ch-card" data-tone="amber">
    <div class="ch-card-title">LLM による<br/>コード補完</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="green">
    <div class="ch-card-title">Copilot Chat<br/>Ask Mode</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="green">
    <div class="ch-card-title">Copilot Chat<br/>Edit Mode</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="magenta">
    <div class="ch-card-title">GitHub Copilot<br/>Agent Mode</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>
  <div class="ch-card" data-tone="cyan">
    <div class="ch-card-title">IDE 以外での<br/>GitHub Copilot</div>
    <img class="ch-mona" src="/theomonfort/github-copilot-white-icon.png" alt="" />
  </div>

  <div class="ch-tag" data-tone="amber" style="grid-column: 1 / 2">コード補完だけ</div>
  <div class="ch-tag" data-tone="green" style="grid-column: 2 / 4">言われたことに応答する</div>
  <div class="ch-tag" data-tone="magenta" style="grid-column: 4 / 5">自律的に動く</div>
  <div class="ch-tag" data-tone="cyan" style="grid-column: 5 / 6">IDE 外でも利用可能</div>
</div>

## AI モデルと利用サーフェス <a class="h2-doc" href="https://docs.github.com/en/copilot/reference/ai-models/supported-models" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**モデル：** GPT / Claude / Gemini / Grok / MAI / Kimi。対応クライアントではカスタムモデルと **BYOK** も利用可能。提供範囲はプラン、クライアント、ポリシーにより異なります。

| 利用する場所 | できること |
| --- | --- |
| **IDE** | VS Code、Visual Studio、JetBrains、Xcode、Eclipse、Neovim で開発 |
| <a class="retro-link" href="/theomonfort/playbook/copilot-app">Copilot App ↗</a> | 複数エージェントの並列実行、Issue 整理、PR 管理 |
| <a class="retro-link" href="/theomonfort/playbook/cli">ターミナル ↗</a> | Copilot CLI でシェルから作業 |
| <a class="retro-link" href="/theomonfort/playbook/cloud-agent">Cloud Agent ↗</a> / <a class="retro-link" href="/theomonfort/playbook/copilot-code-review">Code Review ↗</a> | 実装を委任 / PR をレビュー |
| <a class="retro-link" href="https://github.com/github/copilot-sdk" target="_blank" rel="noopener noreferrer">SDK ↗</a> | 自分のアプリに Copilot を組み込む |
| <a class="retro-link" href="/theomonfort/playbook/agentic-workflow">自動化 ↗</a> | リポジトリの作業をエージェント型ワークフローに |
| **Web / モバイル** | チャット、リモートセッション操作、クラウドでの作業開始 |

## 開発者へのインパクト

GitHub Copilot がもたらす開発者へのインパクト  
Accenture 社の開発者 450 名を対象にした 6 か月間の調査結果（2025）

| 活動 | 生産性 | 効率性 | 満足度 |
|---:|---:|---:|---:|
| <span class="big-stat">94%</span><br>作業の「フロー状態」を維持できたと回答 | <span class="big-stat">90%</span><br>より良いコードを書けていると実感 | <span class="big-stat">50%</span><br>ビルド数が増加 | <span class="big-stat">96%</span><br>初日から成功を実感 |
| <span class="big-stat">90%</span><br>情報探索に費やす時間が減少 | <span class="big-stat">88%</span><br>Copilot が提案したコードがそのまま採用された割合 | <span class="big-stat">84%</span><br>ビルド成功率が向上 | <span class="big-stat">90%</span><br>仕事への満足度が向上 |

## ひとつのサブスクで Codex・Claude も使える

GitHub Copilot のサブスクリプションがあれば、**Codex** と **Claude** の **エージェント（ハーネス）** を、**IDE** でも **Cloud Agent** としても使える。利用分は **Copilot AI クレジット** から直接支払われるので、追加契約は不要。

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


## Fusion：モデルではなく労力を選ぶ <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Copilot Fusion** と労力レベルを選ぶだけ。Copilot がモデルと連携方法を選び、**1 つの最終回答**を返します。

- **自動で実行プランを決定：** 推論、コード生成、デバッグ、ツール利用の特性から、実行パターンと各ステップの推論レベルを選択。
- **2026-10-28 に GA：** VS Code、Copilot CLI、Copilot App、JetBrains で利用可能。

| **60** のスコア | 費用とトークンは **約 ½** | 所要時間は **約 40% 減** |
| --- | --- | --- |
| 比較対象との差は 2 ポイント以内 | 平均 API 費用：**$5.59 対 $11.42** / タスク | タスクあたりの平均時間 |

**比較条件：** Copilot CLI の Fusion Max と Claude Code の Opus 5.5 Max。Artificial Analysis Coding Agent Index v2.0、2026-10-28 公表。ベンチマーク結果であり、実際のタスクでの削減を保証するものではありません。

## Fusion：労力レベルと実行パターン <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**人が労力を選び、Fusion が実行パターンを選びます。**

| 労力レベル | 主な用途 | 対象プラン |
| --- | --- | --- |
| **Standard** | 日常の作業、タスクごとに 1 モデル | 全プラン |
| **High** | 複雑なバグ修正、複数ファイルの変更 | Pro+、Max、Business、Enterprise |
| **Max** | 深い推論と徹底した分析 | Pro+、Max、Business、Enterprise |

| パターン | 処理の流れ |
| --- | --- |
| **Single** | 1 つのモデルでタスクを完了 |
| **Cascade** | 効率的なモデルで生成 → 判定 → 必要なら強力なモデルへ |
| **Critique** | 生成 → 複数モデルが並列レビュー → 指摘を集約 → 修正 |

**2026-11-11 時点。** モデルポリシーに従います。**Fast：** VS Code インラインチャット専用、手動選択不可。労力レベル ≠ モデルの推論レベル。

## Fusion：プロンプトから回答まで <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

公開情報に基づく**概念図：** モデルと推論レベルはステップごとに選択。

```mermaid
---
config:
  flowchart:
    nodeSpacing: 25
    rankSpacing: 35
---
flowchart LR
  Input["プロンプト<br/>+ 労力レベル"] --> Route["タスクを評価<br/>パターンを選択"]
  Policy["プラン + モデルポリシー<br/>+ モデルの可用性"] --> Route
  Route --> Single["Single<br/>1 モデル"]
  Route --> Cascade["Cascade<br/>生成、判定、強化"]
  Route --> Critique["Critique<br/>生成、レビュー、修正"]
  Single --> Answer["1 つの<br/>最終回答"]
  Cascade --> Answer
  Critique --> Answer

  classDef input fill:#1a0b2e,stroke:#ff2e88,color:#e8f4ff,stroke-width:2px
  classDef route fill:#0a0e27,stroke:#00f0ff,color:#e8f4ff,stroke-width:2px
  classDef result fill:#0a0e27,stroke:#9bbc0f,color:#e8f4ff,stroke-width:2px
  class Input input
  class Policy,Route,Single,Cascade,Critique route
  class Answer result
```

Fusion 自体は**サブエージェントを起動しません**。下書きが破棄されても**ファイル変更は元に戻らない**ため、コミット前に確認してください。

## Fusion：課金と期間限定割引 <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion#billing-for-copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**2026-11-11 時点で確認した期間限定施策。** 公表されている終了日は **2026-11-30** です。

| <span class="big-stat">30%</span><br/>モデル費用を割引 | 対象 | 終了日 |
| --- | --- | --- |
| **Copilot Fusion 経由の利用のみ** | **有料 Copilot プラン**のユーザー | **2026 年 11 月 30 日** |

- **通常の課金：** 各モデルの標準料金で計算。Fusion 固有の追加料金はなし。
- **モデル費用のみ：** サブスクリプション料金の割引ではありません。
- **予算：** High / Max は Standard より多くのモデルと AI クレジットを使う場合があります。

終了日以降も割引が続くとは限りません。最新の条件は課金ドキュメントで確認してください。

## なぜ企業は Copilot を選ぶのか

- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **オーケストレーション**<br/>　コーディングだけでなく、SDLC 全体にわたる AI
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **モデル・エージェント・サーフェス全体での選択の自由**<br/>　あらゆるワークフローに最適なモデルとインターフェース。ベンダーロックインなし
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **エンタープライズコントロール**<br/>　一元化されたガバナンス、可視性、セキュリティ
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **コンプライアンス**<br/>　Copilot Proxy、ポリシー制御、公開コードフィルタ、対象利用に対する Microsoft の IP 保護
- <img src="/theomonfort/icons/play-cyan.svg" alt="" width="14" height="20" class="play-bullet" /> **最高のコストパフォーマンス**<br/>　プール型使用量、充実した組み込みエンタイトルメント、ACD による価格優位性の最大化

## セキュアでコンプライアントなアーキテクチャ

プロンプトや生成されたコードは **Copilot Proxy** を経由し、安心してエンタープライズで使える設計。<br/>
🔗 詳細は <a href="https://resources.github.com/ja/copilot-trust-center/" target="_blank" rel="noopener noreferrer" class="retro-link">Copilot Trust Center</a> を参照。

```mermaid
---
config:
  flowchart:
    htmlLabels: true
  themeCSS: |
    .nodeLabel { text-align: center !important; }
    .nodeLabel .llm-row { display: flex !important; flex-direction: row !important; justify-content: center !important; align-items: center !important; gap: 6px !important; margin-top: 4px !important; }
    .nodeLabel .llm-row img { width: 22px !important; height: 22px !important; object-fit: contain !important; }
    .nodeLabel .llm-row img.ms-ico { width: 17px !important; height: 17px !important; }
    .nodeLabel img.proxy-ico { width: 18px !important; height: 18px !important; display: inline-block !important; margin: 0 6px 0 0 !important; vertical-align: middle !important; }
---
flowchart LR
  Dev["👤 開発者"]
  Proxy["<img class='proxy-ico' src='/theomonfort/github-copilot-white-icon.png' alt=''/><b>Copilot Proxy</b>"]
  LLM["<b>LLM プロバイダー</b><div class='llm-row'><img src='/theomonfort/llm-openai.png' alt=''/><img src='/theomonfort/llm-anthropic.svg' alt=''/><img src='/theomonfort/llm-gemini.png' alt=''/><img src='/theomonfort/llm-grok.png' alt=''/><img class='ms-ico' src='/theomonfort/llm-microsoft.svg' alt=''/></div>"]

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

Copilot Proxy で行われる処理：

- 🔒 文脈から **PII（個人識別情報）** を除去
- 🚫 文脈から **不適切な表現** をフィルタリング
- 🛡️ 文脈の **一般的なセキュリティ脆弱性** をチェック
- ⚖️ 生成提案を **IP（知的財産）フィルター** に通す
- 🔐 すべてのデータは **転送中に暗号化**
