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
| 🚀 Trunk-Based | feature flag の裏で極小ブランチから `main` に直接コミット | 高速 CI/CD・大規模チーム |

> 💡 速度重視なら **GitHub Flow / トランクベース** を既定に。**Git Flow** はバージョン付きリリース時のみ。

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
