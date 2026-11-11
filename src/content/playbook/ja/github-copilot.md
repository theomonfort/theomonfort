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


## <span class="fusion-title">Copilot Fusion</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="fusion-slide fusion-overview">
<p class="fusion-lead"><strong>人が労力を選び、</strong>Fusion がモデルを選ぶ。</p>
<div class="fusion-value-grid">
<div class="fusion-features">
<div class="fusion-feature"><span>01</span><div><strong>モデルの切り替えはお任せ</strong><p>Fusion と Standard / High / Max を選ぶ。</p></div></div>
<div class="fusion-feature"><span>02</span><div><strong>プロンプトごとに実行プラン</strong><p>タスクに合うモデル、推論、パターンを選択。</p></div></div>
<div class="fusion-feature"><span>03</span><div><strong>最終回答は 1 つ</strong><p>追加のレビューは、必要なタスクだけ。</p></div></div>
</div>
<div class="fusion-metrics" aria-label="ベンチマーク結果">
<div class="fusion-metric"><strong>60</strong><span>Coding Agent Index</span><span class="fusion-micro">比較対象との差は 2 点以内</span></div>
<div class="fusion-metric"><strong>約 ½</strong><span>タスクあたりの API 費用</span><span class="fusion-micro">$5.59 対 $11.42</span></div>
<div class="fusion-metric"><strong>約 ½</strong><span>トークン / タスク</span><span class="fusion-micro">平均 720 万</span></div>
<div class="fusion-metric"><strong>約 40%</strong><span>タスクあたりの時間を短縮</span><span class="fusion-micro">ベンチマーク平均</span></div>
</div>
</div>
<p class="fusion-availability"><strong>2026-10-28 に GA。</strong> VS Code / Copilot CLI / Copilot App / JetBrains。</p>
<p class="fusion-source"><a href="https://artificialanalysis.ai/articles/github-copilot-fusion-orchestrates-anthropic-and-openai-models-to-balance-performance-and-cost" target="_blank" rel="noopener noreferrer">Artificial Analysis、2026-10-28</a>：Coding Agent Index v2.0。Copilot CLI / Fusion Max と Claude Code / Opus 5.5 Max の比較。平均値であり、実タスクでの削減は保証されません。</p>
</div>

## <span class="fusion-title">Fusion：労力を選ぶ</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="fusion-slide fusion-choices">
<p class="fusion-lead">人が選ぶのは優先度。<strong>実行手順は固定しない。</strong></p>
<div class="fusion-choice-grid">
<section class="fusion-choice" aria-label="労力レベル">
<p class="fusion-zone-label">人が選ぶ：労力レベル</p>
<div class="fusion-choice-row"><strong>Standard</strong><p>日常の作業を 1 モデルで。<small>すべての Copilot プラン</small></p></div>
<div class="fusion-choice-row"><strong>High</strong><p>複雑なバグ修正、複数ファイルの変更。</p></div>
<div class="fusion-choice-row"><strong>Max</strong><p>最も深い推論と徹底した分析。</p></div>
<p class="fusion-micro"><b>High / Max：</b>Pro+、Max、Business、Enterprise。</p>
</section>
<section class="fusion-choice" aria-label="実行パターン">
<p class="fusion-zone-label">Fusion が選ぶ：実行パターン</p>
<div class="fusion-choice-row"><strong>Single</strong><p>1 モデルで直接タスクを解く。</p></div>
<div class="fusion-choice-row"><strong>Cascade</strong><p>効率的に生成 → 判定 → 採用か強化。</p></div>
<div class="fusion-choice-row"><strong>Critique</strong><p>生成 → 並列レビュー → 集約 → 修正。</p></div>
<p class="fusion-micro">次のプロンプトでは別のパターンも選択。</p>
</section>
</div>
<p class="fusion-availability"><strong>労力レベル ≠ モデルの推論レベル。</strong> モデルポリシーは適用され、必要なモデルが無効だと Max が使えない場合があります。</p>
<p class="fusion-source"><b>Fast：</b>VS Code インラインチャット専用、手動選択不可。2026-11-11 時点。</p>
</div>

## <span class="fusion-title">Fusion の仕組み</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="info-fusion-runtime" class="demo-toggle" /><label class="h2-demo h2-info" for="info-fusion-runtime">&#9432; INFO</label>

<div class="demo-panel is-info fusion-help">
<label class="demo-scrim" for="info-fusion-runtime" aria-label="Fusion の詳細を閉じる"></label>
<div class="demo-window" role="group" aria-label="公開情報に基づく Fusion のルーティング">
<div class="demo-head"><span class="demo-tag">INFO</span><span class="demo-name">公開情報に基づく仕組み</span><label class="demo-close" for="info-fusion-runtime" aria-label="閉じる">&#10005;</label></div>
<div class="info-body">
<p><b>ポリシーに従うモデル候補：</b>プラン、管理者、データ所在地、FedRAMP の制限を適用。モデル候補は変わる場合があります。</p>
<p><b>状況に応じたルーティング：</b>稼働状況と可用性を考慮。自然なキャッシュ境界や、会話の複雑さが大きく変わる場面で経路を選びます。</p>
<p><b>ステップごとの実行：</b>モデル、推論レベル、コンテキスト上限は各ステップに依存。進行状況と使用モデルを追跡でき、提示される回答は最終版だけです。</p>
<p><b>作業ファイルの扱い：</b>Fusion 自体はサブエージェントを起動しません。下書きの破棄でファイル編集は元に戻らないため、コミット前に確認してください。</p>
</div>
</div>
</div>

<div class="fusion-slide fusion-system">
<div class="fusion-system-top">
<section class="fusion-zone fusion-input">
<p class="fusion-zone-label">01 / 利用者の作業環境</p>
<p><strong>プロンプト + 労力</strong></p>
<p class="fusion-micro">Standard / High / Max</p>
<div class="fusion-constraint">プラン + モデルポリシー</div>
</section>
<span class="fusion-connector" aria-hidden="true"></span>
<section class="fusion-zone fusion-plan">
<p class="fusion-zone-label">02 / FUSION が計画</p>
<div class="fusion-signals"><span>推論</span><span>コード</span><span>デバッグ</span><span>ツール</span></div>
<p><strong>パターンと、各段階のモデル、推論を選択。</strong></p>
<p class="fusion-micro">ポリシー、稼働状況、可用性を考慮。</p>
</section>
</div>
<p class="fusion-wire">↓ 実行プラン</p>
<section class="fusion-zone fusion-execution">
<div class="fusion-zone-head"><p class="fusion-zone-label">03 / 実行とレビュー</p><span class="fusion-micro">プロンプトごとに 1 つの経路</span></div>
<div class="fusion-paths">
<div class="fusion-path"><h3>Single</h3><div class="fusion-flow"><span>モデル</span><b aria-hidden="true">→</b><span>回答</span></div><p>直接解決。追加レビューは不要。</p></div>
<div class="fusion-path"><h3>Cascade</h3><div class="fusion-flow"><span>生成</span><b aria-hidden="true">→</b><span>判定</span></div><p>下書きを<b>採用</b>、または<b>強力なモデル</b>で解き直す。</p></div>
<div class="fusion-path"><h3>Critique</h3><div class="fusion-flow"><span>生成</span><b aria-hidden="true">→</b><span>並列レビュー</span></div><p>指摘を集約 → 元のモデルが修正。</p></div>
</div>
</section>
<div class="fusion-output"><span>04</span><strong>1 つの最終回答</strong><span>途中の下書きは修正、破棄される場合も。</span></div>
<p class="fusion-safety">サブエージェントは起動しない。下書きの破棄でファイル編集は戻らない。</p>
</div>

## <span class="fusion-title">Fusion：料金</span> <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/models/copilot-fusion#billing-for-copilot-fusion" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="fusion-slide fusion-billing">
<div class="fusion-value-grid fusion-offer-grid">
<div class="fusion-metric">
<p class="fusion-zone-label">期間限定オファー</p>
<strong>30%</strong><span>モデル費用を割引</span><span class="fusion-micro">Copilot Fusion 経由の利用のみ</span>
</div>
<section class="fusion-zone" aria-label="割引の条件">
<p class="fusion-zone-label">対象と期限</p>
<div class="fusion-choice-row"><strong>対象</strong><p><b>有料 Copilot プラン</b>のユーザー。</p></div>
<div class="fusion-choice-row"><strong>終了日</strong><p><strong><time datetime="2026-11-30">2026-11-30</time></strong><small>公表されている期限</small></p></div>
</section>
</div>
<p class="fusion-availability"><strong>モデル費用のみ。</strong> サブスクリプション料金の割引ではありません。</p>
<div class="fusion-value-grid fusion-billing-notes">
<div class="fusion-feature"><span>01</span><div><strong>通常の課金</strong><p>各モデルの標準料金で計算。Fusion 固有の追加料金はなし。</p></div></div>
<div class="fusion-feature"><span>02</span><div><strong>労力で費用も変わる</strong><p>High / Max は Standard より多くのモデルと AI クレジットを使う場合があります。</p></div></div>
</div>
<p class="fusion-source">2026-11-11 時点。期限後の継続は前提にせず、最新条件は Docs で確認してください。</p>
</div>

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
