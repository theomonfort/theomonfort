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
  hex: "#ffb000"
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

**長命なブランチは `main` 1 本、feature ブランチは短命。** `main` から枝を切り、PR を出してレビュー・マージし、そのままデプロイ。シンプルで速く、頻繁にデプロイする Web アプリや小規模チームに最適。

<svg viewBox="0 0 700 380" role="img" aria-label="GitHub Flow: main branch with several short-lived change branches merging in" style="width:100%;height:auto;max-width:760px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="ghf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="49" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="71" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="135" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="157" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="223" width="118" height="34" rx="7" fill="#17d8e0"/><text x="75" y="245" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">change</text>
  <rect x="16" y="309" width="118" height="34" rx="7" fill="#ff5b6b"/><text x="75" y="331" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">change</text>
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

- 🌿 変更ごとに `main` から枝を切る（feature / fix）
- 🔀 早めに **PR** を出す — レビューと CI はブランチ上で
- ✅ `main` にマージ → **即デプロイ**
- ♻️ `main` は常に **デプロイ可能** に保つ

> 💡 部品が少ない＝フィードバックが速い。継続的デリバリーの既定。

## Git Flow

**長命なブランチは `main` + `develop` の 2 本、加えて補助ブランチ。** 作業は `develop` に統合し、`release` ブランチでバージョンを安定させてから `main` へマージしてタグ付け。定期的なバージョンリリースや大規模チーム向けの構造化フロー。

<svg viewBox="0 0 740 400" role="img" aria-label="Git Flow branch model: main, hotfix, release, develop, and two feature lanes" style="width:100%;height:auto;max-width:820px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="gf-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="7" fill="#4ec3ff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <rect x="16" y="93" width="118" height="34" rx="7" fill="#ff7a2f"/><text x="75" y="115" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">hotfix</text>
  <rect x="16" y="155" width="118" height="34" rx="7" fill="#17c2b8"/><text x="75" y="177" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">release</text>
  <rect x="16" y="217" width="118" height="34" rx="7" fill="#a56cff"/><text x="75" y="239" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">develop</text>
  <rect x="16" y="279" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="301" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feature</text>
  <rect x="16" y="341" width="118" height="34" rx="7" fill="#2fbf76"/><text x="75" y="363" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feature</text>
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
  <ellipse cx="190" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="190" y="52" text-anchor="middle" fill="#05060f" font-size="12" font-weight="bold">v0.1</text>
  <ellipse cx="370" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="370" y="52" text-anchor="middle" fill="#05060f" font-size="12" font-weight="bold">v0.2</text>
  <ellipse cx="665" cy="48" rx="24" ry="15" fill="#4ec3ff"/><text x="665" y="52" text-anchor="middle" fill="#05060f" font-size="12" font-weight="bold">v1.0</text>
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

- 🌳 `develop` = 統合ライン・`main` = 本番（タグ付き）
- 🧩 `feature/*` は `develop` から切って戻す
- 📦 `release/*` で安定化 → `main` + `develop` へマージし、バージョンを **タグ**
- 🚑 `hotfix/*` は `main` から切る緊急の本番修正 → 両方へマージ

> 🎯 手順は多いが制御は強い。継続デプロイではなく **バージョンリリース** を出すならこれ。

## レビューの中身

今日、PR を開くのは **人間**・**Cloud Agent**・**Dependabot**・**Agentic Workflow** と多様になった。差分の上に会話・チェック・自動分析が集まり、マージ前に品質を担保する場。

| 要素 | 役割 |
| --- | --- |
| 🔀 差分提案 | branch を比較してマージ依頼 |
| 💬 レビュー | 行単位コメント・承認/却下 |
| 🤖 Copilot コードレビュー | PR ごとに AI が自動レビュー |
| ✅ テスト / CI | status check の通過を必須に |
| 🛡️ Code Scanning（GHAS・Code Security） | CodeQL でセキュリティ脆弱性を検出 |
| 📊 Code Quality（独立プロダクト） | 保守性・信頼性を分析（GHAS とは別課金） |

> 🔑 PR で `Closes #123` → マージで Issue 自動クローズ。

## Ruleset

Ruleset は、ブランチへのマージ条件を **ルールとして強制** する品質ゲート。**Organization** レベルでも **repository** レベルでも設定でき、上位から横断適用もできる。

**最小構成の推奨:**

| ルール | 推奨設定 | 目的 |
| --- | --- | --- |
| 🔀 Require a pull request before merging | ON ＋ **Required approvals: 1** | 直 push を禁止し、必ず 1 名以上のレビューを通す |
| 🛡️ Require status checks to pass | **test** を必須 ＋ **Require branches to be up to date before merging** | CI が緑、かつ最新の main に対して検証されたときだけマージ |
| 🔍 Require code scanning results | CodeQL の結果を必須（重大度でブロック） | 未解決のセキュリティ脆弱性があるとマージを止める |
| 🔒 Block force pushes | ON | 履歴の破壊的な上書きを防ぐ |
| 🤖 Automatically request Copilot code review | ON | PR ごとに Copilot が自動で先行レビュー |

> 🎯 個別の手運用をやめ、Ruleset で「上から一括」ゲート。

## Stacked pull requests（NEW） <a class="h2-doc" href="https://docs.github.com/en/enterprise-cloud@latest/pull-requests/reference/stacked-pull-requests" target="_blank" rel="noopener noreferrer">📖 Docs</a>

各 PR が 1 つ下の PR のブランチを base にする、順序付きのチェーン。レビュアーは巨大な差分ではなく、小さなレイヤーを 1 枚ずつ見ればよくなる。public preview は **2026-07-30** から。

スタックのマージは**不可分な 1 回の操作**。`main` に何が入るかはマージ方法で変わる:

<div class="figtabs">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-1" checked>
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-2">
<input class="figtabs-radio" type="radio" name="stack-merge-method" id="smm-3">
<div class="figtabs-bar">
<label class="figtabs-tab" for="smm-1">マージコミットを作成</label>
<label class="figtabs-tab" for="smm-2">スカッシュしてマージ</label>
<label class="figtabs-tab" for="smm-3">リベースしてマージ</label>
</div>
<div class="figtabs-panel" data-idx="1">
<svg viewBox="0 0 900 372" role="img" aria-label="マージコミットを作成: 各ブランチのコミットはそのまま残り、スタック全体が 1 つのマージコミットで main に入る" style="width:100%;height:auto;max-width:820px;display:block;margin:1.2em auto 0;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="stk-mc" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="4" fill="#a56cff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-c</text>
  <rect x="16" y="121" width="118" height="34" rx="4" fill="#17d8e0"/><text x="75" y="143" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-b</text>
  <rect x="16" y="211" width="118" height="34" rx="4" fill="#2fbf76"/><text x="75" y="233" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-a</text>
  <rect x="16" y="301" width="118" height="34" rx="4" fill="#4ec3ff"/><text x="75" y="323" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <rect x="144" y="33" width="124" height="30" rx="4" fill="#131a2b" stroke="#a56cff" stroke-width="2"/><text x="206" y="53" fill="#a56cff">base: feat-b</text>
    <rect x="144" y="123" width="124" height="30" rx="4" fill="#131a2b" stroke="#17d8e0" stroke-width="2"/><text x="206" y="143" fill="#17d8e0">base: feat-a</text>
    <rect x="144" y="213" width="124" height="30" rx="4" fill="#131a2b" stroke="#2fbf76" stroke-width="2"/><text x="206" y="233" fill="#2fbf76">base: main</text>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="217" y1="318" x2="752" y2="318" marker-end="url(#stk-mc)"/>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="313" y1="228" x2="326" y2="228" marker-end="url(#stk-mc)"/>
    <line x1="413" y1="138" x2="426" y2="138" marker-end="url(#stk-mc)"/>
    <line x1="513" y1="48" x2="526" y2="48" marker-end="url(#stk-mc)"/>
    <line x1="213" y1="304" x2="287" y2="240" marker-end="url(#stk-mc)"/>
    <line x1="357" y1="217" x2="390" y2="150" marker-end="url(#stk-mc)"/>
    <line x1="457" y1="127" x2="490" y2="60" marker-end="url(#stk-mc)"/>
  </g>
  <circle cx="300" cy="228" r="13" fill="#2fbf76"/>
  <circle cx="346" cy="228" r="13" fill="#2fbf76"/>
  <circle cx="400" cy="138" r="13" fill="#17d8e0"/>
  <circle cx="446" cy="138" r="13" fill="#17d8e0"/>
  <circle cx="500" cy="48" r="13" fill="#a56cff"/>
  <circle cx="546" cy="48" r="13" fill="#a56cff"/>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="557" y1="57" x2="761" y2="303" marker-end="url(#stk-mc)"/>
  </g>
  <circle cx="200" cy="318" r="17" fill="#4ec3ff"/>
  <circle cx="780" cy="318" r="17" fill="#4ec3ff"/>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text x="780" y="362" fill="#4ec3ff">マージコミット 1 つ (PR #1-3)</text>
  </g>
</svg>
<p class="figtabs-cap">ブランチのコミットはそのまま残り、<b>スタック全体が 1 つのマージコミット</b>で入る。履歴は最も詳しい。</p>
</div>
<div class="figtabs-panel" data-idx="2">
<svg viewBox="0 0 900 372" role="img" aria-label="スカッシュしてマージ: 各 PR は main 上で 1 つのコミットにまとまる" style="width:100%;height:auto;max-width:820px;display:block;margin:1.2em auto 0;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="stk-sq" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="4" fill="#a56cff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-c</text>
  <rect x="16" y="121" width="118" height="34" rx="4" fill="#17d8e0"/><text x="75" y="143" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-b</text>
  <rect x="16" y="211" width="118" height="34" rx="4" fill="#2fbf76"/><text x="75" y="233" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-a</text>
  <rect x="16" y="301" width="118" height="34" rx="4" fill="#4ec3ff"/><text x="75" y="323" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <rect x="144" y="33" width="124" height="30" rx="4" fill="#131a2b" stroke="#a56cff" stroke-width="2"/><text x="206" y="53" fill="#a56cff">base: feat-b</text>
    <rect x="144" y="123" width="124" height="30" rx="4" fill="#131a2b" stroke="#17d8e0" stroke-width="2"/><text x="206" y="143" fill="#17d8e0">base: feat-a</text>
    <rect x="144" y="213" width="124" height="30" rx="4" fill="#131a2b" stroke="#2fbf76" stroke-width="2"/><text x="206" y="233" fill="#2fbf76">base: main</text>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="217" y1="318" x2="625" y2="318" marker-end="url(#stk-sq)"/>
    <line x1="675" y1="318" x2="737" y2="318" marker-end="url(#stk-sq)"/>
    <line x1="787" y1="318" x2="849" y2="318" marker-end="url(#stk-sq)"/>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="313" y1="228" x2="326" y2="228" marker-end="url(#stk-sq)" opacity=".32"/>
    <line x1="413" y1="138" x2="426" y2="138" marker-end="url(#stk-sq)" opacity=".32"/>
    <line x1="513" y1="48" x2="526" y2="48" marker-end="url(#stk-sq)" opacity=".32"/>
    <line x1="213" y1="304" x2="287" y2="240" marker-end="url(#stk-sq)"/>
    <line x1="357" y1="217" x2="390" y2="150" marker-end="url(#stk-sq)"/>
    <line x1="457" y1="127" x2="490" y2="60" marker-end="url(#stk-sq)"/>
  </g>
  <circle cx="300" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="346" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="400" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="446" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="500" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <circle cx="546" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="359" y1="232" x2="627" y2="311" marker-end="url(#stk-sq)"/>
    <line x1="458" y1="145" x2="741" y2="306" marker-end="url(#stk-sq)"/>
    <line x1="557" y1="57" x2="855" y2="303" marker-end="url(#stk-sq)"/>
  </g>
  <circle cx="200" cy="318" r="17" fill="#4ec3ff"/>
  <rect x="633" y="301" width="34" height="34" rx="4" fill="#2fbf76"/>
  <rect x="745" y="301" width="34" height="34" rx="4" fill="#17d8e0"/>
  <rect x="857" y="301" width="34" height="34" rx="4" fill="#a56cff"/>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text x="650" y="362" fill="#2fbf76">PR #1</text>
    <text x="762" y="362" fill="#17d8e0">PR #2</text>
    <text x="874" y="362" fill="#a56cff">PR #3</text>
  </g>
</svg>
<p class="figtabs-cap">PR ごとに <b>1 コミット</b>へまとめて <code>main</code> に載せる。ログは最もきれいだが、個々のコミット（淡色）は失われる。</p>
</div>
<div class="figtabs-panel" data-idx="3">
<svg viewBox="0 0 900 372" role="img" aria-label="リベースしてマージ: ブランチのコミットが順に main へ載せ直され、マージコミットは作られない" style="width:100%;height:auto;max-width:820px;display:block;margin:1.2em auto 0;font-family:'DotGothic16',monospace;">
  <defs>
    <marker id="stk-rb" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0 0 L7 3 L0 6 Z" fill="#7d8595"/>
    </marker>
  </defs>
  <rect x="16" y="31" width="118" height="34" rx="4" fill="#a56cff"/><text x="75" y="53" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-c</text>
  <rect x="16" y="121" width="118" height="34" rx="4" fill="#17d8e0"/><text x="75" y="143" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-b</text>
  <rect x="16" y="211" width="118" height="34" rx="4" fill="#2fbf76"/><text x="75" y="233" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">feat-a</text>
  <rect x="16" y="301" width="118" height="34" rx="4" fill="#4ec3ff"/><text x="75" y="323" text-anchor="middle" fill="#05060f" font-size="16" font-weight="bold">main</text>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <rect x="144" y="33" width="124" height="30" rx="4" fill="#131a2b" stroke="#a56cff" stroke-width="2"/><text x="206" y="53" fill="#a56cff">base: feat-b</text>
    <rect x="144" y="123" width="124" height="30" rx="4" fill="#131a2b" stroke="#17d8e0" stroke-width="2"/><text x="206" y="143" fill="#17d8e0">base: feat-a</text>
    <rect x="144" y="213" width="124" height="30" rx="4" fill="#131a2b" stroke="#2fbf76" stroke-width="2"/><text x="206" y="233" fill="#2fbf76">base: main</text>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="217" y1="318" x2="596" y2="318" marker-end="url(#stk-rb)"/>
    <line x1="663" y1="318" x2="708" y2="318" marker-end="url(#stk-rb)"/>
    <line x1="775" y1="318" x2="820" y2="318" marker-end="url(#stk-rb)"/>
  </g>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="313" y1="228" x2="326" y2="228" marker-end="url(#stk-rb)" opacity=".32"/>
    <line x1="413" y1="138" x2="426" y2="138" marker-end="url(#stk-rb)" opacity=".32"/>
    <line x1="513" y1="48" x2="526" y2="48" marker-end="url(#stk-rb)" opacity=".32"/>
    <line x1="213" y1="304" x2="287" y2="240" marker-end="url(#stk-rb)"/>
    <line x1="357" y1="217" x2="390" y2="150" marker-end="url(#stk-rb)"/>
    <line x1="457" y1="127" x2="490" y2="60" marker-end="url(#stk-rb)"/>
  </g>
  <circle cx="300" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="346" cy="228" r="13" fill="#2fbf76" opacity=".32"/>
  <circle cx="400" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="446" cy="138" r="13" fill="#17d8e0" opacity=".32"/>
  <circle cx="500" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <circle cx="546" cy="48" r="13" fill="#a56cff" opacity=".32"/>
  <g stroke="#7d8595" stroke-width="2.6" fill="none">
    <line x1="359" y1="232" x2="593" y2="310" marker-end="url(#stk-rb)"/>
    <line x1="458" y1="146" x2="708" y2="305" marker-end="url(#stk-rb)"/>
    <line x1="556" y1="57" x2="822" y2="302" marker-end="url(#stk-rb)"/>
  </g>
  <circle cx="200" cy="318" r="17" fill="#4ec3ff"/>
  <g stroke="#7d8595" stroke-width="2.6">
    <line x1="629" y1="318" x2="637" y2="318"/>
    <line x1="741" y1="318" x2="749" y2="318"/>
    <line x1="853" y1="318" x2="861" y2="318"/>
  </g>
  <circle cx="616" cy="318" r="13" fill="#2fbf76"/>
  <circle cx="650" cy="318" r="13" fill="#2fbf76"/>
  <circle cx="728" cy="318" r="13" fill="#17d8e0"/>
  <circle cx="762" cy="318" r="13" fill="#17d8e0"/>
  <circle cx="840" cy="318" r="13" fill="#a56cff"/>
  <circle cx="874" cy="318" r="13" fill="#a56cff"/>
  <g font-size="13" font-weight="bold" text-anchor="middle">
    <text x="633" y="362" fill="#2fbf76">PR #1</text>
    <text x="745" y="362" fill="#17d8e0">PR #2</text>
    <text x="857" y="362" fill="#a56cff">PR #3</text>
  </g>
</svg>
<p class="figtabs-cap">すべてのコミットを順に <code>main</code> へ載せ直す。<b>マージコミットのない直線的な履歴</b>になる。元のコミット（淡色）は書き換えられる。</p>
</div>
</div>

- 🧱 ブランチ保護と CI は **すべてのレイヤー** で動く。一番下の PR だけではない
- 🔄 **rebase は GitHub 任せ** — 下のレイヤーをマージすると、上の PR は自動で base を張り替える
- ☝️ **1 つ・一部・全部** から選べる。一番上の PR をマージすればスタック全体が下から順に入る
- 🛠️ github.com / Mobile / REST・GraphQL・webhook、そして `gh extension install github/gh-stack`

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
