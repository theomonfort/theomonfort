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
    GitHub は 2008 年に <strong>Pull Request</strong> を生み出し、開発者の共同作業を変えた。
  </p>
  <p>
    <strong>提案 → 議論 → レビュー → マージ</strong> の流れが、今も共同開発の心臓。
  </p>
</div>

## レビューの中身

PR では差分の上で会話・チェック・自動分析がすべて集まる。マージ前に品質を担保する場。

| 要素 | 役割 |
| --- | --- |
| 🔀 差分提案 | branch を比較してマージ依頼 |
| 💬 レビュー | 行単位コメント・承認/却下 |
| 🔎 自動チェック | Code Scanning・Code Quality を表示 |
| 📦 Dependabot | 依存更新の PR を自動作成 |

> 🔑 PR で `Closes #123` → マージで Issue 自動クローズ。

## ブランチ戦略

PR を中心にブランチをどう構成するか。リリース頻度に合った方式を選ぶ。

| 戦略 | 仕組み | 向いているケース |
| --- | --- | --- |
| 🌿 GitHub Flow | `main` 1 本 + 短命な feature ブランチ。PR → マージ → `main` からデプロイ | 継続的デリバリー・多くのチーム |
| 🌳 Git Flow | `main` + 長命な `develop`、加えて `feature` / `release` / `hotfix` | 定期・バージョン付きリリース |
| 🏭 GitLab Flow | feature ブランチを `staging` / `production`（環境）ブランチへ昇格 | 段階的・環境別デプロイ |
| 🚀 Trunk-Based | feature flag の裏で極小ブランチから `main` に直接コミット | 高速 CI/CD・大規模チーム |

> 💡 速度重視なら **GitHub Flow / トランクベース** を既定に。**Git Flow** はバージョン付きリリース時のみ。

## GitHub Flow

**長命なブランチは `main` 1 本、feature ブランチは短命。** `main` から枝を切り、PR を出してレビュー・マージし、そのままデプロイ。シンプルで速く、頻繁にデプロイする Web アプリや小規模チームに最適。

<svg viewBox="0 0 920 260" role="img" aria-label="GitHub Flow branch diagram" style="width:100%;height:auto;max-width:840px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <line x1="30" y1="200" x2="890" y2="200" stroke="#ffb000" stroke-width="4"/>
  <text x="30" y="234" fill="#ffb000" font-size="20" font-weight="bold">main</text>
  <circle cx="90" cy="200" r="8" fill="#ffb000"/>
  <circle cx="445" cy="200" r="8" fill="#ffb000"/>
  <path d="M170 200 C 210 108, 320 108, 360 200" fill="none" stroke="#00f0ff" stroke-width="3"/>
  <circle cx="232" cy="130" r="7" fill="#00f0ff"/>
  <circle cx="300" cy="130" r="7" fill="#00f0ff"/>
  <text x="212" y="94" fill="#00f0ff" font-size="17">feature</text>
  <circle cx="360" cy="200" r="9" fill="#9bbc0f"/>
  <text x="300" y="250" fill="#9bbc0f" font-size="15">PR → merge</text>
  <path d="M530 200 C 570 108, 680 108, 720 200" fill="none" stroke="#00f0ff" stroke-width="3"/>
  <circle cx="592" cy="130" r="7" fill="#00f0ff"/>
  <circle cx="660" cy="130" r="7" fill="#00f0ff"/>
  <text x="572" y="94" fill="#00f0ff" font-size="17">feature</text>
  <circle cx="720" cy="200" r="9" fill="#9bbc0f"/>
  <text x="660" y="250" fill="#9bbc0f" font-size="15">PR → merge</text>
  <line x1="800" y1="200" x2="875" y2="200" stroke="#ff2e88" stroke-width="3" stroke-dasharray="4 4"/>
  <path d="M868 194 L882 200 L868 206 Z" fill="#ff2e88"/>
  <text x="792" y="176" fill="#ff2e88" font-size="15">deploy</text>
</svg>

- 🌿 変更ごとに `main` から枝を切る（feature / fix）
- 🔀 早めに **PR** を出す — レビューと CI はブランチ上で
- ✅ `main` にマージ → **即デプロイ**
- ♻️ `main` は常に **デプロイ可能** に保つ

> 💡 部品が少ない＝フィードバックが速い。継続的デリバリーの既定。

## Git Flow

**長命なブランチは `main` + `develop` の 2 本、加えて補助ブランチ。** 作業は `develop` に統合し、`release` ブランチでバージョンを安定させてから `main` へマージしてタグ付け。定期的なバージョンリリースや大規模チーム向けの構造化フロー。

<svg viewBox="0 0 960 340" role="img" aria-label="Git Flow branch diagram" style="width:100%;height:auto;max-width:880px;display:block;margin:1.4em auto;font-family:'DotGothic16',monospace;">
  <line x1="30" y1="150" x2="930" y2="150" stroke="#00f0ff" stroke-width="4"/>
  <text x="30" y="140" fill="#00f0ff" font-size="18" font-weight="bold">develop</text>
  <line x1="30" y1="290" x2="930" y2="290" stroke="#ffb000" stroke-width="4"/>
  <text x="30" y="316" fill="#ffb000" font-size="18" font-weight="bold">main</text>
  <circle cx="90" cy="290" r="7" fill="#ffb000"/>
  <path d="M90 290 C 130 230, 140 190, 165 150" fill="none" stroke="#00f0ff" stroke-width="2.5"/>
  <circle cx="165" cy="150" r="7" fill="#00f0ff"/>
  <path d="M235 150 C 265 92, 345 92, 375 150" fill="none" stroke="#9bbc0f" stroke-width="3"/>
  <circle cx="290" cy="112" r="6" fill="#9bbc0f"/>
  <circle cx="335" cy="112" r="6" fill="#9bbc0f"/>
  <text x="262" y="82" fill="#9bbc0f" font-size="15">feature</text>
  <circle cx="375" cy="150" r="6" fill="#00f0ff"/>
  <circle cx="470" cy="150" r="7" fill="#00f0ff"/>
  <path d="M470 150 C 498 178, 498 198, 520 220" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <line x1="520" y1="220" x2="640" y2="220" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="565" cy="220" r="6" fill="#ff2e88"/>
  <text x="516" y="248" fill="#ff2e88" font-size="15">release</text>
  <path d="M640 220 C 662 244, 664 268, 688 290" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="688" cy="290" r="8" fill="#ffb000"/>
  <text x="666" y="320" fill="#ffb000" font-size="14">v1.0</text>
  <path d="M640 220 C 662 196, 664 174, 688 150" fill="none" stroke="#ff2e88" stroke-width="2.5"/>
  <circle cx="688" cy="150" r="6" fill="#00f0ff"/>
  <circle cx="780" cy="290" r="7" fill="#ffb000"/>
  <path d="M780 290 C 802 266, 802 246, 822 224" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="822" cy="224" r="6" fill="#ff2e88"/>
  <text x="800" y="252" fill="#ff2e88" font-size="15">hotfix</text>
  <path d="M822 224 C 844 246, 852 268, 872 290" fill="none" stroke="#ff2e88" stroke-width="3"/>
  <circle cx="872" cy="290" r="8" fill="#ffb000"/>
  <text x="850" y="320" fill="#ffb000" font-size="14">v1.1</text>
  <path d="M822 224 C 844 198, 852 174, 876 150" fill="none" stroke="#ff2e88" stroke-width="2.5"/>
  <circle cx="876" cy="150" r="6" fill="#00f0ff"/>
</svg>

- 🌳 `develop` = 統合ライン・`main` = 本番（タグ付き）
- 🧩 `feature/*` は `develop` から切って戻す
- 📦 `release/*` で安定化 → `main` + `develop` へマージし、バージョンを **タグ**
- 🚑 `hotfix/*` は `main` から切る緊急の本番修正 → 両方へマージ

> 🎯 手順は多いが制御は強い。継続デプロイではなく **バージョンリリース** を出すならこれ。

## Ruleset

リポジトリを目的別に管理。マージ条件をルールで強制し、品質ゲートを自動化。

- ✅ 必須レビュー数・承認者を指定
- 🛡️ CI 通過を必須に
- 🔒 main への直 push をブロック
- 🏢 org/enterprise から横断適用

> 🎯 個別の手運用をやめ、Ruleset で「上から一括」ゲート。

## ★ AI 時代の PR

AI が PR を量産する今、「PR はもう要らない?」の声もある。だが repo を理解可能で安全に保つには、このゲートが必要。

- 🤖 Copilot が自動レビューで指摘を先回り
- 📈 2026 年は月 90M マージ (約 2x)
- 👀 人は最終承認、AI は下準備

> 💡 PR を守りつつ速くする = Ruleset × Copilot。
