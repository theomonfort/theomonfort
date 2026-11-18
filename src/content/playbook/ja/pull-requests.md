---
title: プルリクエスト
titleEn: Pull Requests
summary: GitHub が 2008 年に生み出し、開発者の共同作業を変えた仕組み。提案→議論→レビュー→マージの流れに、Ruleset・自動チェック・Copilot レビューが乗る。
icon: 🔀
color: amber
accent:
  text: text-neon-amber
  border: border-neon-amber
  glow: hover:shadow-neon-amber
  shadow: shadow-neon-amber
  hex: "#fcd34d"
order: 8.8
category: review
related: ['collaboration-tools', 'copilot-code-review', 'code-scanning']
links:
  - group: 📖 公式ドキュメント
    label: About pull requests
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - group: 📖 公式ドキュメント
    label: About rulesets
    url: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets
  - group: 📖 公式ドキュメント
    label: GitHub flow
    url: https://docs.github.com/en/get-started/using-github/github-flow
  - group: 📖 公式ドキュメント
    label: About PR reviews
    url: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - group: 📖 公式ドキュメント
    label: About stacked pull requests
    url: https://docs.github.com/en/pull-requests/get-started/about-stacked-prs
  - group: 📖 公式ドキュメント
    label: Agent merge in the Copilot app
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/managing-issues-and-pull-requests
  - group: 🎓 チュートリアル
    label: Linking a PR to an issue
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
  - group: 📰 発表
    label: Stacked pull requests are now in public preview
    url: https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview
  - group: 🧪 実例
    label: VS Code Pull Requests
    url: https://github.com/microsoft/vscode/pulls
---

## 一言で

<div class="hero-quote">
  <p>
    コードを書くとき、<strong>ブランチの切り方とマージの仕方</strong> は複数ある。本章で主要な流儀を見ていく。
  </p>
  <p>
    どの流儀でも、マージするときは誰もが <strong>Pull Request</strong> を通す。その中身を解説し、これらは <strong>Ruleset</strong> で設定・強制できることも押さえる。
  </p>
</div>

## ブランチ戦略

PR を中心にブランチをどう構成するか。リリース頻度に合った方式を選ぶ。

| 戦略 | 仕組み | 向いているケース |
| --- | --- | --- |
| 🌿 GitHub Flow | `main` 1 本 + 短命な feature ブランチ。PR → マージ → `main` からデプロイ | 継続的デリバリー・多くのチーム |
| 🌳 Git Flow | `main` + 長命な `develop`、加えて `feature` / `release` / `hotfix` | 定期・バージョン付きリリース |

> 💡 速度重視なら **GitHub Flow** を既定に。**Git Flow** はバージョン付きリリース時のみ。

## GitHub Flow

<div class="split-image pr-compact pr-flow">
<div class="split-figure">
<svg viewBox="0 0 700 380" role="img" aria-label="GitHub Flow: main branch with several short-lived change branches merging in">
  <defs>
    <marker id="ghf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="49" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="71" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="135" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="157" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="223" width="118" height="34" rx="7" fill="#17d8e0"/><text x="75" y="245" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="309" width="118" height="34" rx="7" fill="#ff5b6b"/><text x="75" y="331" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">change</text>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="249" y1="152" x2="336" y2="152" marker-end="url(#ghf-arrow)"/>
    <line x1="374" y1="152" x2="471" y2="152" marker-end="url(#ghf-arrow)"/>
    <line x1="509" y1="152" x2="596" y2="152" marker-end="url(#ghf-arrow)"/>
    <line x1="241" y1="166" x2="286" y2="225" marker-end="url(#ghf-arrow)"/>
    <line x1="315" y1="225" x2="343" y2="167" marker-end="url(#ghf-arrow)"/>
    <line x1="367" y1="138" x2="414" y2="82" marker-end="url(#ghf-arrow)"/>
    <line x1="449" y1="66" x2="526" y2="66" marker-end="url(#ghf-arrow)"/>
    <line x1="561" y1="80" x2="604" y2="138" marker-end="url(#ghf-arrow)"/>
    <line x1="367" y1="166" x2="426" y2="312" marker-end="url(#ghf-arrow)"/>
    <line x1="455" y1="312" x2="481" y2="168" marker-end="url(#ghf-arrow)"/>
  </g>
  <circle cx="230" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="355" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="490" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="615" cy="152" r="19" fill="#4ec3ff"/>
  <circle cx="430" cy="66" r="19" fill="#2fbf76"/>
  <circle cx="545" cy="66" r="19" fill="#2fbf76"/>
  <circle cx="300" cy="240" r="19" fill="#17d8e0"/>
  <circle cx="440" cy="326" r="19" fill="#ff5b6b"/>
</svg>

</div>
<div class="split-text">

**長命な `main` 1 本と、短命な feature ブランチ。** Web アプリや継続的に出荷するチームに、速いフィードバック。

- 🌿 機能や修正ごとに `main` から分岐
- 🔀 **早めに PR** を出し、レビューと CI
- ✅ マージしたら **即デプロイ**
- ♻️ `main` は常に **デプロイ可能** に

</div>
</div>

## Git Flow

<div class="split-image pr-compact pr-flow">
<div class="split-figure">
<svg viewBox="0 0 740 400" role="img" aria-label="Git Flow branch model: main, hotfix, release, develop, and two feature lanes">
  <defs>
    <marker id="gf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="53" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="93" width="118" height="34" rx="7" fill="#ff7a2f"/><text x="75" y="115" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">hotfix</text>
  <rect x="16" y="155" width="118" height="34" rx="7" fill="#17c2b8"/><text x="75" y="177" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">release</text>
  <rect x="16" y="217" width="118" height="34" rx="7" fill="#a56cff"/><text x="75" y="239" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">develop</text>
  <rect x="16" y="279" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="301" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">feature</text>
  <rect x="16" y="341" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="363" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="16" font-weight="bold">feature</text>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="214" y1="48" x2="344" y2="48" marker-end="url(#gf-arrow)"/>
    <line x1="396" y1="48" x2="639" y2="48" marker-end="url(#gf-arrow)"/>
    <line x1="190" y1="64" x2="219" y2="215" marker-end="url(#gf-arrow)"/>
    <line x1="207" y1="59" x2="274" y2="100" marker-end="url(#gf-arrow)"/>
    <line x1="305" y1="100" x2="351" y2="60" marker-end="url(#gf-arrow)"/>
    <path d="M291 127 C 302 165, 332 190, 366 214" marker-end="url(#gf-arrow)"/>
    <line x1="237" y1="234" x2="283" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="317" y1="234" x2="353" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="387" y1="234" x2="458" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="492" y1="234" x2="543" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="577" y1="234" x2="638" y2="234" marker-end="url(#gf-arrow)"/>
    <line x1="308" y1="249" x2="362" y2="281" marker-end="url(#gf-arrow)"/>
    <line x1="388" y1="296" x2="417" y2="296" marker-end="url(#gf-arrow)"/>
    <line x1="450" y1="289" x2="470" y2="250" marker-end="url(#gf-arrow)"/>
    <line x1="229" y1="249" x2="272" y2="341" marker-end="url(#gf-arrow)"/>
    <line x1="297" y1="358" x2="328" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="362" y1="358" x2="393" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="427" y1="358" x2="458" y2="358" marker-end="url(#gf-arrow)"/>
    <line x1="484" y1="345" x2="550" y2="248" marker-end="url(#gf-arrow)"/>
    <line x1="488" y1="221" x2="531" y2="181" marker-end="url(#gf-arrow)"/>
    <line x1="562" y1="172" x2="593" y2="172" marker-end="url(#gf-arrow)"/>
    <line x1="622" y1="159" x2="652" y2="61" marker-end="url(#gf-arrow)"/>
    <line x1="621" y1="184" x2="641" y2="218" marker-end="url(#gf-arrow)"/>
  </g>
  <ellipse cx="190" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="190" y="52" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="12" font-weight="bold">v0.1</text>
  <ellipse cx="370" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="370" y="52" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="12" font-weight="bold">v0.2</text>
  <ellipse cx="665" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="665" y="52" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="12" font-weight="bold">v1.0</text>
  <circle cx="290" cy="110" r="17" fill="#ff7a2f"/>
  <circle cx="545" cy="172" r="17" fill="#17c2b8"/>
  <circle cx="610" cy="172" r="17" fill="#17c2b8"/>
  <circle cx="220" cy="234" r="17" fill="#a56cff"/>
  <circle cx="300" cy="234" r="17" fill="#a56cff"/>
  <circle cx="370" cy="234" r="17" fill="#a56cff"/>
  <circle cx="475" cy="234" r="17" fill="#a56cff"/>
  <circle cx="560" cy="234" r="17" fill="#a56cff"/>
  <circle cx="655" cy="234" r="17" fill="#a56cff"/>
  <circle cx="370" cy="296" r="16" fill="#2fbf76"/>
  <circle cx="435" cy="296" r="16" fill="#2fbf76"/>
  <circle cx="280" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="345" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="410" cy="358" r="16" fill="#2fbf76"/>
  <circle cx="475" cy="358" r="16" fill="#2fbf76"/>
</svg>

</div>
<div class="split-text">

**長命なブランチは `main` + `develop` の 2 本。** 定期的なバージョンリリースを、より厳密に制御。

- 🌳 `develop` で統合、`main` はタグ付き本番
- 🧩 `feature/*`: `develop` から切って戻す
- 📦 `release/*`: 安定化後、両方にマージし **タグ付け**
- 🚑 `hotfix/*`: `main` から緊急修正、両方へマージ

</div>
</div>

## レビューの中身

<div class="pr-compact pr-review">

**人間**、**Cloud Agent**、**Dependabot**、**Agentic Workflow** が開く PR。レビュー、チェック、自動分析を集め、マージ前に品質を担保する。

| 要素 | 役割 |
| --- | --- |
| 🔀 差分提案 | branch を比較してマージ依頼 |
| 💬 レビュー | 行単位コメント・承認/却下 |
| 🤖 Copilot コードレビュー | PR ごとに AI が自動レビュー |
| ✅ テスト / CI | status check の通過を必須に |
| 🛡️ Code Scanning（GHAS・Code Security） | CodeQL でセキュリティ脆弱性を検出 |
| 📊 Code Quality（独立プロダクト） | 保守性・信頼性を分析（GHAS とは別課金） |

> 🔑 PR で `Closes #123` → マージで Issue 自動クローズ。

</div>

## Ruleset

<div class="pr-compact pr-rules">

**Organization または repository** で **マージ条件を強制** し、複数リポジトリに横断適用。まずはこの 5 つ:

| ルール | 推奨設定 | 目的 |
| --- | --- | --- |
| 🔀 Require a pull request before merging | ON ＋ **承認 1 名を必須** | 直 push を防ぎ、全変更をレビュー |
| 🛡️ Require status checks to pass | **テスト** ＋ **ブランチの最新化** を必須 | 最新の `main` に対して CI が成功 |
| 🔍 Require code scanning results | CodeQL、重大度でブロック | 未解決の脆弱性でマージを停止 |
| 🔒 Block force pushes | ON | 破壊的な履歴の上書きを防ぐ |
| 🤖 Automatically request Copilot code review | ON | Copilot が自動で先行レビュー |

</div>

## Stacked pull requests（NEW） <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/pull-requests/reference/stacked-pull-requests" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="pr-compact pr-stack">

各 PR が 1 つ下のブランチを base にし、巨大な差分ではなく **小さなレイヤーごとにレビュー**（public preview: **2026-07-30**）。

<div class="split-image">
<div class="figtabs">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-1" checked>
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-2">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-3">
<div class="figtabs-bar">
<label class="figtabs-tab" for="smm-1">マージコミット</label>
<label class="figtabs-tab" for="smm-2">スカッシュしてマージ</label>
<label class="figtabs-tab" for="smm-3">リベースしてマージ</label>
</div>
<div class="figtabs-panel" data-idx="1">
<svg viewBox="0 0 860 302" role="img" aria-label="マージコミット: 6 個のブランチコミットはそのまま残り、親を 2 つ持つマージコミット M 1 つで main に合流する">
  <defs>
    <marker id="stk-mc" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#8fa6bc"/>
    </marker>
    <marker id="stk-mc-blue" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#4ec3ff"/>
    </marker>
    <marker id="stk-mc-amber" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="var(--c-crt-amber)"/>
    </marker>
  </defs>
  <rect x="6" y="27" width="152" height="36" rx="3" fill="#a56cff"/><text x="82" y="51" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #3 · feat-c</text>
  <rect x="164" y="29" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#a56cff" stroke-width="1.8"/><text x="216" y="51" text-anchor="middle" fill="#a56cff" font-size="16" font-weight="700">→ feat-b</text>
  <rect x="6" y="97" width="152" height="36" rx="3" fill="#17d8e0"/><text x="82" y="121" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #2 · feat-b</text>
  <rect x="164" y="99" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#17d8e0" stroke-width="1.8"/><text x="216" y="121" text-anchor="middle" fill="#17d8e0" font-size="16" font-weight="700">→ feat-a</text>
  <rect x="6" y="167" width="152" height="36" rx="3" fill="#2fbf76"/><text x="82" y="191" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #1 · feat-a</text>
  <rect x="164" y="169" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.8"/><text x="216" y="191" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">→ main</text>
  <rect x="6" y="239" width="152" height="36" rx="3" fill="#4ec3ff"/><text x="82" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">main</text>
  <g stroke="#8fa6bc" stroke-width="2.6" fill="none">
    <line x1="305" y1="244" x2="334" y2="199" marker-end="url(#stk-mc)"/>
    <line x1="362" y1="185" x2="380" y2="185" marker-end="url(#stk-mc)"/>
    <line x1="408" y1="172" x2="434" y2="129" marker-end="url(#stk-mc)"/>
    <line x1="460" y1="115" x2="478" y2="115" marker-end="url(#stk-mc)"/>
    <line x1="506" y1="102" x2="532" y2="59" marker-end="url(#stk-mc)"/>
    <line x1="558" y1="45" x2="576" y2="45" marker-end="url(#stk-mc)"/>
  </g>
  <line x1="311" y1="257" x2="592" y2="257" stroke="#4ec3ff" stroke-width="3" marker-end="url(#stk-mc-blue)"/>
  <line x1="597" y1="61" x2="613" y2="233" stroke="var(--c-crt-amber)" stroke-width="3" marker-end="url(#stk-mc-amber)"/>
  <circle cx="294" cy="257" r="17" fill="#4ec3ff"/><text x="294" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">m0</text>
  <circle cx="346" cy="185" r="16" fill="#2fbf76"/><text x="346" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">a1</text>
  <circle cx="398" cy="185" r="16" fill="#2fbf76"/><text x="398" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">a2</text>
  <circle cx="444" cy="115" r="16" fill="#17d8e0"/><text x="444" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">b1</text>
  <circle cx="496" cy="115" r="16" fill="#17d8e0"/><text x="496" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">b2</text>
  <circle cx="542" cy="45" r="16" fill="#a56cff"/><text x="542" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">c1</text>
  <circle cx="594" cy="45" r="16" fill="#a56cff"/><text x="594" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">c2</text>
  <circle cx="616" cy="257" r="20" fill="#4ec3ff" stroke="var(--c-crt-amber)" stroke-width="3"/><text x="616" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="18" font-weight="800">M</text>
  <rect x="622" y="22" width="232" height="44" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.6"/>
  <text x="738" y="50" text-anchor="middle" fill="#2fbf76" font-size="15.5" font-weight="700">✓ 6 コミット (a1..c2) を保持</text>
  <line x1="636" y1="250" x2="648" y2="240" stroke="var(--c-crt-amber)" stroke-width="1.8" stroke-dasharray="4 3"/>
  <rect x="648" y="164" width="206" height="120" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="1.8"/>
  <text x="660" y="191" fill="var(--c-crt-amber)" font-size="16" font-weight="700">M = マージコミット 1 つ</text>
  <text x="660" y="218" fill="var(--c-phosphor)" font-size="15.5" font-weight="600">親 2 つ: main + c2</text>
  <text x="660" y="245" fill="var(--c-fg-body)" font-size="15">差分 = PR #1–3 の統合</text>
  <text x="660" y="270" fill="var(--c-fg-muted)" font-size="15">新規コード追加なし</text>
</svg>
<div class="pr-method-card">
  <p class="pr-method-summary">6 個のコミットはそのまま残り、<b>2 つの親を持つ橋渡しコミット <code>M</code></b>（<code>main</code> + <code>c2</code>）で合流。</p>
  <p class="pr-method-pro">✅ <b>長所:</b> 個々のコミット履歴、元の SHA、細かい <code>git blame</code> を 100% 保持。</p>
  <p class="pr-method-con">⚠️ <b>短所:</b> <code>wip</code> 等の細かいコミットも残り、分岐ループで履歴が複雑になりやすい。</p>
</div>
</div>
<div class="figtabs-panel" data-idx="2">
<svg viewBox="0 0 860 302" role="img" aria-label="スカッシュしてマージ: PR ごとに 1 つのコミットへ圧縮され、main は直線的な履歴になる">
  <defs>
    <marker id="stk-sq-line" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#4ec3ff"/>
    </marker>
    <marker id="stk-sq-g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#2fbf76"/>
    </marker>
    <marker id="stk-sq-c" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#17d8e0"/>
    </marker>
    <marker id="stk-sq-p" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#a56cff"/>
    </marker>
  </defs>
  <rect x="6" y="27" width="152" height="36" rx="3" fill="#a56cff"/><text x="82" y="51" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #3 · feat-c</text>
  <rect x="164" y="29" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#a56cff" stroke-width="1.8"/><text x="216" y="51" text-anchor="middle" fill="#a56cff" font-size="16" font-weight="700">→ feat-b</text>
  <rect x="6" y="97" width="152" height="36" rx="3" fill="#17d8e0"/><text x="82" y="121" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #2 · feat-b</text>
  <rect x="164" y="99" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#17d8e0" stroke-width="1.8"/><text x="216" y="121" text-anchor="middle" fill="#17d8e0" font-size="16" font-weight="700">→ feat-a</text>
  <rect x="6" y="167" width="152" height="36" rx="3" fill="#2fbf76"/><text x="82" y="191" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #1 · feat-a</text>
  <rect x="164" y="169" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.8"/><text x="216" y="191" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">→ main</text>
  <rect x="6" y="239" width="152" height="36" rx="3" fill="#4ec3ff"/><text x="82" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">main</text>
  <g stroke="#8fa6bc" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity=".28">
    <line x1="306" y1="246" x2="389" y2="193"/>
    <line x1="418" y1="185" x2="442" y2="185"/>
    <line x1="471" y1="177" x2="565" y2="123"/>
    <line x1="594" y1="115" x2="618" y2="115"/>
    <line x1="647" y1="107" x2="741" y2="53"/>
    <line x1="770" y1="45" x2="794" y2="45"/>
  </g>
  <g opacity=".36">
    <circle cx="403" cy="185" r="15" fill="#2fbf76"/><text x="403" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a1</text>
    <circle cx="457" cy="185" r="15" fill="#2fbf76"/><text x="457" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a2</text>
    <circle cx="579" cy="115" r="15" fill="#17d8e0"/><text x="579" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b1</text>
    <circle cx="633" cy="115" r="15" fill="#17d8e0"/><text x="633" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b2</text>
    <circle cx="755" cy="45" r="15" fill="#a56cff"/><text x="755" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c1</text>
    <circle cx="809" cy="45" r="15" fill="#a56cff"/><text x="809" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c2</text>
  </g>
  <line x1="430" y1="202" x2="430" y2="233" stroke="#2fbf76" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-sq-g)"/>
  <line x1="606" y1="132" x2="606" y2="233" stroke="#17d8e0" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-sq-c)"/>
  <line x1="782" y1="62" x2="782" y2="233" stroke="#a56cff" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-sq-p)"/>
  <g stroke="#4ec3ff" stroke-width="3" fill="none">
    <line x1="311" y1="257" x2="384" y2="257" marker-end="url(#stk-sq-line)"/>
    <line x1="472" y1="257" x2="560" y2="257" marker-end="url(#stk-sq-line)"/>
    <line x1="648" y1="257" x2="736" y2="257" marker-end="url(#stk-sq-line)"/>
  </g>
  <circle cx="294" cy="257" r="17" fill="#4ec3ff"/><text x="294" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">m0</text>
  <rect x="388" y="238" width="84" height="38" rx="3" fill="#2fbf76"/><text x="430" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="800">PR #1</text>
  <rect x="564" y="238" width="84" height="38" rx="3" fill="#17d8e0"/><text x="606" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="800">PR #2</text>
  <rect x="740" y="238" width="84" height="38" rx="3" fill="#a56cff"/><text x="782" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="800">PR #3</text>
  <rect x="284" y="22" width="352" height="66" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="1.6"/>
  <text x="298" y="49" fill="var(--c-crt-amber)" font-size="17" font-weight="700">main は一直線: 1 PR = 1 コミット</text>
  <text x="298" y="75" fill="var(--c-fg-body)" font-size="15.5">途中コミット (a1..c2) は残らない</text>
</svg>
<div class="pr-method-card">
  <p class="pr-method-summary">全体で 1 つではなく、<b>PR ごとに 1 コミット</b>へ圧縮して <code>main</code> に直列配置（計 3 コミット）。</p>
  <p class="pr-method-pro">✅ <b>長所:</b> <code>main</code> が最もきれいな一直線（<b>1 PR = 1 コミット</b>）。<code>git revert</code> も PR 単位で簡単。</p>
  <p class="pr-method-con">⚠️ <b>短所:</b> 途中の細かいコミットは <code>main</code> に残らない（PR 画面上では確認可能）。</p>
</div>
</div>
<div class="figtabs-panel" data-idx="3">
<svg viewBox="0 0 860 302" role="img" aria-label="リベースしてマージ: 6 個のコミットすべてが新しい SHA で順に main へ載せ直され、マージコミットは作られない">
  <defs>
    <marker id="stk-rb-line" markerWidth="8" markerHeight="8" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#8fa6bc"/>
    </marker>
    <marker id="stk-rb-g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#2fbf76"/>
    </marker>
    <marker id="stk-rb-c" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#17d8e0"/>
    </marker>
    <marker id="stk-rb-p" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L8 3.5 L0 7 Z" fill="#a56cff"/>
    </marker>
  </defs>
  <rect x="6" y="27" width="152" height="36" rx="3" fill="#a56cff"/><text x="82" y="51" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #3 · feat-c</text>
  <rect x="164" y="29" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#a56cff" stroke-width="1.8"/><text x="216" y="51" text-anchor="middle" fill="#a56cff" font-size="16" font-weight="700">→ feat-b</text>
  <rect x="6" y="97" width="152" height="36" rx="3" fill="#17d8e0"/><text x="82" y="121" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #2 · feat-b</text>
  <rect x="164" y="99" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#17d8e0" stroke-width="1.8"/><text x="216" y="121" text-anchor="middle" fill="#17d8e0" font-size="16" font-weight="700">→ feat-a</text>
  <rect x="6" y="167" width="152" height="36" rx="3" fill="#2fbf76"/><text x="82" y="191" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">PR #1 · feat-a</text>
  <rect x="164" y="169" width="104" height="32" rx="3" fill="var(--c-midnight)" stroke="#2fbf76" stroke-width="1.8"/><text x="216" y="191" text-anchor="middle" fill="#2fbf76" font-size="16" font-weight="700">→ main</text>
  <rect x="6" y="239" width="152" height="36" rx="3" fill="#4ec3ff"/><text x="82" y="263" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="17" font-weight="700">main</text>
  <g stroke="#8fa6bc" stroke-width="2" stroke-dasharray="4 4" fill="none" opacity=".28">
    <line x1="306" y1="246" x2="389" y2="193"/>
    <line x1="418" y1="185" x2="442" y2="185"/>
    <line x1="471" y1="177" x2="565" y2="123"/>
    <line x1="594" y1="115" x2="618" y2="115"/>
    <line x1="647" y1="107" x2="741" y2="53"/>
    <line x1="770" y1="45" x2="794" y2="45"/>
  </g>
  <g opacity=".34">
    <circle cx="403" cy="185" r="15" fill="#2fbf76"/><text x="403" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a1</text>
    <circle cx="457" cy="185" r="15" fill="#2fbf76"/><text x="457" y="190" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">a2</text>
    <circle cx="579" cy="115" r="15" fill="#17d8e0"/><text x="579" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b1</text>
    <circle cx="633" cy="115" r="15" fill="#17d8e0"/><text x="633" y="120" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">b2</text>
    <circle cx="755" cy="45" r="15" fill="#a56cff"/><text x="755" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c1</text>
    <circle cx="809" cy="45" r="15" fill="#a56cff"/><text x="809" y="50" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14" font-weight="700">c2</text>
  </g>
  <line x1="430" y1="202" x2="430" y2="236" stroke="#2fbf76" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-rb-g)"/>
  <line x1="606" y1="132" x2="606" y2="236" stroke="#17d8e0" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-rb-c)"/>
  <line x1="782" y1="62" x2="782" y2="236" stroke="#a56cff" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#stk-rb-p)"/>
  <g stroke="#8fa6bc" stroke-width="2.6" fill="none">
    <line x1="311" y1="257" x2="381" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="417" y1="257" x2="439" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="475" y1="257" x2="557" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="593" y1="257" x2="615" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="651" y1="257" x2="733" y2="257" marker-end="url(#stk-rb-line)"/>
    <line x1="769" y1="257" x2="791" y2="257" marker-end="url(#stk-rb-line)"/>
  </g>
  <circle cx="294" cy="257" r="17" fill="#4ec3ff"/><text x="294" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="14.5" font-weight="700">m0</text>
  <circle cx="401" cy="257" r="15.5" fill="#2fbf76"/><text x="401" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">a1'</text>
  <circle cx="459" cy="257" r="15.5" fill="#2fbf76"/><text x="459" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">a2'</text>
  <circle cx="577" cy="257" r="15.5" fill="#17d8e0"/><text x="577" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">b1'</text>
  <circle cx="635" cy="257" r="15.5" fill="#17d8e0"/><text x="635" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">b2'</text>
  <circle cx="753" cy="257" r="15.5" fill="#a56cff"/><text x="753" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">c1'</text>
  <circle cx="811" cy="257" r="15.5" fill="#a56cff"/><text x="811" y="262" text-anchor="middle" fill="var(--c-shadow-ink)" font-size="13.5" font-weight="700">c2'</text>
  <text x="430" y="293" text-anchor="middle" fill="#2fbf76" font-size="15" font-weight="700">PR #1</text>
  <text x="606" y="293" text-anchor="middle" fill="#17d8e0" font-size="15" font-weight="700">PR #2</text>
  <text x="782" y="293" text-anchor="middle" fill="#a56cff" font-size="15" font-weight="700">PR #3</text>
  <rect x="284" y="22" width="352" height="66" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="1.6"/>
  <text x="298" y="49" fill="var(--c-crt-amber)" font-size="17" font-weight="700">main は一直線: 6 コミットを再適用</text>
  <text x="298" y="75" fill="var(--c-fg-body)" font-size="15.5">新 SHA (a1'..c2') / マージコミットなし</text>
</svg>
<div class="pr-method-card">
  <p class="pr-method-summary">全 6 コミットを順に <code>main</code> へ再適用（<code>a1'</code>..<code>c2'</code>、<b>新しい SHA / マージコミットなし</b>）。</p>
  <p class="pr-method-pro">✅ <b>長所:</b> 分岐ループを作らずに、段階的なコミット単位を一直線で残せる。</p>
  <p class="pr-method-con">⚠️ <b>短所:</b> 元の SHA が書き換わり、<code>wip</code> コミットもそのまま <code>main</code> に載る。</p>
</div>
</div>
</div>

<div class="split-text">

**スタックのマージ動作**

- ☝️ **1 本 / 一部 / 一括**: 下から順にも、最上段 `PR #3` から **全体を一括マージ** も可能
- 🔄 **自動 rebase / retarget**: `PR #1` のマージ後、`PR #2` の base を `main` へ自動更新
- 🛡️ **各レイヤーを保護**: Ruleset、必須レビュー、CI が **全 PR** に個別適用
- 🧹 **ブランチ削除も安全**: どの方式でもマージ後に `feat-a/b/c` を削除 OK（履歴は `main` に残る）
- 🛠️ **対応**: github.com、Mobile、API / webhook、`gh extension install github/gh-stack`

</div>
</div>

</div>

## Agent merge（NEW）

**GitHub Copilot app** で、PR の最後の一押しをエージェントに任せる。マージを塞いでいるものを片付け、GitHub が許可した時点でマージする。

- 🔀 **PR の上部でトグルを ON** — そのワークスペースの Copilot セッションが引き受ける
- 🩹 **塞いでいるものを直す**：レビューコメント、失敗した check、コンフリクト
- 🌙 **バックグラウンドで動作** し、アプリを再起動しても継続する
- ✅ マージが完了すると **自動で OFF** になる

> ⚠️ ゲートは迂回しない。`main` に入るものを決めるのは、これまで通り required approvals と required checks。

## ★ AI 時代の PR

AI が PR を量産する今、「PR はもう要らない?」の声もある。だが repo を理解可能で安全に保つには、このゲートが必要。

- 🤖 Copilot が自動レビューで指摘を先回り
- 📈 2026 年は月 90M マージ (約 2x)
- 👀 人は最終承認、AI は下準備

> 💡 PR を守りつつ速くする = Ruleset × Copilot。
