---
title: オペレーションツール
titleEn: Operational Tools
summary: チームのコラボを「運用」に乗せるための GitHub の道具箱。プライベート Packages とコンテナレジストリ、Integrations (GitHub Apps)、権限 (リポジトリ別ロール)、ポリシー (repo/org/enterprise) を一巡り。
icon: 🛠️
color: green
accent:
  text: text-gameboy-green
  border: border-gameboy-green
  glow: hover:shadow-gameboy-green
  shadow: shadow-gameboy-green
  hex: "#9bbc0f"
order: 19.5
category: operate
related: ['collaboration-tools', 'github', 'enterprise-setup']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Packages
    url: https://docs.github.com/en/packages
  - group: 📖 公式ドキュメント
    label: Container registry (GHCR)
    url: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry
  - group: 📖 公式ドキュメント
    label: About GitHub Apps
    url: https://docs.github.com/en/apps/overview
  - group: 📖 公式ドキュメント
    label: Repository roles
    url: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization
  - group: 📖 公式ドキュメント
    label: Organization policies
    url: https://docs.github.com/en/organizations/managing-organization-settings
  - group: 📖 公式ドキュメント
    label: Enterprise policies
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies
---

## 一言で

<div class="hero-quote hero-quote-green">
  <p>
    日々の開発フローの外にも、GitHub には <strong>運用や規模拡大を助ける道具</strong> がそろっている。
  </p>
  <p>
    ここでは手元で使えるその他のツールをざっと一巡り: <strong>Packages・コンテナレジストリ・Apps・権限・ポリシー</strong>。
  </p>
</div>

> 🎯 成果物の配布から組織統制まで、コードと同じ場所で管理できる。
> 💡 まず Packages で配布、次に App で連携、最後に権限とポリシーで締める。

## Packages & Container Registry

成果物を GitHub 上のプライベートレジストリで配布。npm・Maven・NuGet などに加え、コンテナは GHCR (`ghcr.io`)。

| 種別 | レジストリ | ここがいい |
| --- | --- | --- |
| 📦 npm/Maven/NuGet | GitHub Packages | リポジトリ権限と連動 |
| 🐳 コンテナ | GHCR (`ghcr.io`) | Actions と直結・無料枠あり |
| 🔒 プライベート | どちらも可 | 公開/非公開を細かく制御 |

> 💡 Actions の `GITHUB_TOKEN` でそのまま push でき、CI/CD が楽。

## Integrations (GitHub Apps)

GitHub Apps は最小権限で機能を拡張する公式の連携方式。個人 PAT より安全で組織向き。

- 🤖 リポジトリ単位の **細かい権限** を付与
- 🔑 短命トークンで動く (PAT より安全)
- 🏢 組織にインストールして全員で共有
- 🧩 Marketplace に多数の既製アプリ (例: Slack・Jira・Sentry・SonarCloud)

> 🎯 自動化や外部連携は PAT ではなく **App** に寄せるのが定石。

## Permissions

リポジトリ別にロールを割り当て、誰が何をできるかを制御。

| ロール | 主な権限 |
| --- | --- |
| 👀 Read | 閲覧・clone |
| 🔺 Triage | Issue/PR 整理 |
| ✍️ Write | push・マージ |
| 🛠️ Maintain | 設定の一部管理 |
| 👑 Admin | 全権限 |

> 💡 Team に権限を付けて個人を入れ替えるとメンテが楽。

## Policies

repo → org → enterprise の階層で統制を一括適用。上位ほど広く効く。

- 🗂️ **Repo**: ブランチ保護・必須レビュー
- 🏢 **Org**: 作成可否・公開範囲・2FA 必須
- 🏛️ **Enterprise**: 全 org への横断ルール
- 🔁 上位設定が下位に継承される

> 🎯 個別設定で消耗しない。ポリシーで「上から一括」が運用の勝ち筋。

📘 詳細:
- <a class="retro-link" href="https://docs.github.com/en/packages" target="_blank" rel="noopener noreferrer">Packages ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/apps" target="_blank" rel="noopener noreferrer">GitHub Apps ↗</a>
- <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies" target="_blank" rel="noopener noreferrer">Enterprise policies ↗</a>
