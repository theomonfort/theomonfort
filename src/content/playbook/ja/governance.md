---
title: ガバナンス
titleEn: Governance
summary: Enterprise / Organization レベルで「誰が何をできるか」を統制する層。リポジトリ別の権限ロール、repo → org → enterprise のポリシー階層、そして Copilot エージェント / クライアントを一元管理する enterprise-managed settings (managed-settings.json) を押さえる。
icon: ⚖️
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 30.8
category: administration
related: ['enterprise-setup', 'license-management', 'custom-agent', 'harness-engineering']
links:
  - group: 📖 公式ドキュメント
    label: Repository roles
    url: https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization
  - group: 📖 公式ドキュメント
    label: Organization policies
    url: https://docs.github.com/en/organizations/managing-organization-settings
  - group: 📖 公式ドキュメント
    label: Enterprise policies
    url: https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies
  - group: 📖 公式ドキュメント
    label: Configuring enterprise managed settings
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings
  - group: 📖 公式ドキュメント
    label: About Copilot auto model selection
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/auto-model-selection
  - group: 📰 発表
    label: "Enterprises can default to auto model selection (2026-07-01)"
    url: https://github.blog/changelog/2026-07-01-enterprises-can-default-to-auto-model-selection/
---


## 一言で

<div class="hero-quote">
  <p>
    ガバナンスとは <strong>「誰が何をできるか」</strong> を階層で統制すること。
  </p>
  <p>
    リポジトリの <strong>権限ロール</strong>、repo → org → enterprise の <strong>ポリシー</strong>、そして Copilot を一元管理する <strong>managed settings</strong> を押さえる。
  </p>
</div>

## Permissions

リポジトリ別にロールを割り当て、誰が何をできるかを制御。

| ロール | 主な権限 |
| --- | --- |
| 👀 Read | 閲覧・clone |
| 🔺 Triage | Issue/PR 整理 |
| ✍️ Write | push・マージ |
| 🛠️ Maintain | 設定の一部管理 |
| 👑 Admin | 全権限 |

> 💡 Team に権限を付けて個人を入れ替えるとメンテが楽。<a class="retro-link" href="https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization" target="_blank" rel="noopener noreferrer">Repository roles ↗</a>

## Policies

repo → org → enterprise の階層で統制を一括適用。上位ほど広く効く。

- 🗂️ **Repo**: ブランチ保護・必須レビュー
- 🏢 **Org**: 作成可否・公開範囲・2FA 必須
- 🏛️ **Enterprise**: 全 org への横断ルール
- 🔁 上位設定が下位に継承される

> 🎯 個別設定で消耗しない。ポリシーで「上から一括」が運用の勝ち筋。<a class="retro-link" href="https://docs.github.com/en/organizations/managing-organization-settings" target="_blank" rel="noopener noreferrer">Organization policies ↗</a> · <a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/admin/enforcing-policies" target="_blank" rel="noopener noreferrer">Enterprise policies ↗</a>

## Copilot managed settings（NEW）

Enterprise が Copilot クライアント（CLI / VS Code）の設定を **一元統制** する仕組み。source organization の `.github-private` リポジトリに置いた `copilot/managed-settings.json` を、エンタープライズの Copilot ライセンスを持つ全ユーザーへ自動配布する。

**統制できること:**

- 🧠 **既定モデル** — 新規会話の既定モデルを指定（例: Auto model selection）。個別会話では変更可
- 🚫 **バイパスモードの禁止** — YOLO / auto-approve を無効化し、エージェントの各操作を人がレビュー
- 🏪 **プラグイン marketplace** — 追加、またはエンタープライズ承認済みのみに限定
- 🧩 **既定プラグイン** — 全ユーザーに自動インストール

> ⚙️ 解決順: source organization は **エンタープライズにつき 1 つ**（AI controls › Agents で指定）。どの org からライセンスを受けても、適用されるのはこの単一ソースの設定。managed-settings は **クライアント側のユーザー設定より優先** され、クライアントは **1 時間ごと** に取得。<a class="retro-link" href="https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings" target="_blank" rel="noopener noreferrer">Configuring enterprise managed settings ↗</a>

## ★ 使いどころ

「誰が何を」を **階層で** 統制するのがガバナンスの核。

| 層 | 対象 | 例 |
| --- | --- | --- |
| 👤 権限ロール | リポジトリ | Read / Write / Admin |
| 🏢 ポリシー | repo → org → enterprise | 2FA 必須・公開範囲・ブランチ保護 |
| 🤖 managed settings | Copilot クライアント | 既定モデル・バイパス禁止・プラグイン |

> 🎯 個別運用で消耗しない。上位から一括で効かせるのが統制の勝ち筋。
