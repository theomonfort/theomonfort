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
  - group: 🎓 チュートリアル
    label: Linking a PR to an issue
    url: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue
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

## ★ AI 時代の PR

AI が PR を量産する今、「PR はもう要らない?」の声もある。だが repo を理解可能で安全に保つには、このゲートが必要。

- 🤖 Copilot が自動レビューで指摘を先回り
- 📈 2026 年は月 90M マージ (約 2x)
- 👀 人は最終承認、AI は下準備

> 💡 PR を守りつつ速くする = Ruleset × Copilot。
