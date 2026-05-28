---
title: ライセンス管理
titleEn: License Management
summary: GitHub Copilot は Enterprise レベルで課金され、Organization レベルで割り当てられる。複数 org に所属するユーザーの請求・ポリシーの扱い、Outside collaborator / EMU の Guest collaborator まで一通り整理。
icon: 🪪
color: red
order: 30
category: administration
related: ['github-copilot', 'copilot-metrics']
links:
  - label: ドキュメント — GitHub Copilot のプラン
    url: https://docs.github.com/ja/copilot/about-github-copilot/plans-for-github-copilot
  - label: ドキュメント — ポリシー競合時の挙動（複数組織の優先順位）
    url: https://docs.github.com/ja/copilot/reference/policy-conflicts
  - label: ドキュメント — Outside collaborator の追加
    url: https://docs.github.com/ja/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization
  - label: ドキュメント — Guest collaborator の有効化（EMU）
    url: https://docs.github.com/ja/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators
  - group: 📰 Recent Changelog
    label: "Enterprise レベルでの Copilot Business 管理が GA に (2025-10-28)"
    url: https://github.blog/changelog/2025-10-28-managing-copilot-business-in-enterprise-is-now-generally-available/
---

## 一言で

<div class="hero-quote hero-quote-team">
  <p>
    GitHub Copilot は <strong>Enterprise レベルで課金</strong>され、<strong>Organization レベルで割り当て</strong>られる。
  </p>
  <p>
    1 つの <strong>Enterprise</strong> = 1 通の請求書。各 <strong>org</strong> が <strong>Business か Enterprise</strong> のどちらかを選び、その org のメンバーがそのプランの seat を受け取る。
  </p>
</div>

## Enterprise レベルでの課金

- 💳 **課金の主体は Enterprise アカウント** — 配下の全 organization の seat が **1 通の請求書** に集約される。
- 📈 課金単位は **アクティブユーザー × 月**。同じユーザーが複数 org に所属していても重複請求はされない（後述「複数 org と請求」を参照）。
- 🧾 organization 向けのプランは **Copilot Business** と **Copilot Enterprise** の 2 種類。Enterprise は Business に加えて、GitHub.com 上の Chat（リポジトリ索引付き）、fine-tuned モデル、Audit log などを含む。
- 🏢 **Enterprise に属さない単独 organization** は org に直接課金され、選べるのは **Business のみ**。

> 📘 プラン比較: <a href="https://docs.github.com/ja/copilot/about-github-copilot/plans-for-github-copilot" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot のプラン</a>

## Organization レベルでのライセンス割り当て

- 🏷️ **1 つの org が選べる Copilot プランは 1 種類だけ** — Business **か** Enterprise。同じ org の中で混在はできない。
- 👥 **その org のメンバー** が seat の対象。Owner が **Org Settings → Copilot → Access** から割り当てる。
- 🆕 **Enterprise レベルでの割り当て（Business のみ・2025‑10‑28 GA）** — 管理者は Enterprise 設定から **Copilot Business** seat を直接アサインできる。割り当てた seat は **Enterprise 配下の全 org でそのユーザーに付随する**。
- 🚫 **Copilot Enterprise seat は引き続き org レベルでの割り当てが必要** — Enterprise レベル割り当ては Business 限定。

| 割り当て場所 | 選べるプラン | seat を受け取る人 |
| --- | --- | --- |
| **Org → Copilot → Access** | Business **または** Enterprise（その org のプランに準拠） | その org のメンバー |
| **Enterprise → Copilot → Access** | **Business のみ** | Enterprise 配下のどの org に居ても、そのユーザー |

> 📰 Changelog: <a href="https://github.blog/changelog/2025-10-28-managing-copilot-business-in-enterprise-is-now-generally-available/" target="_blank" rel="noopener noreferrer" class="retro-link">Managing Copilot Business in enterprise is now GA</a>

## 複数 org と請求

同じユーザーが **同一 Enterprise 配下の複数 org に所属** している場合、ポイントは 2 つ:

- 💰 **請求されるライセンスは 1 つだけ** — 複数の org が seat をアサインしても、1 サイクルあたり 1 license にまとめられる。
- ⚖️ **ポリシーが競合し得る**（例: ある org は IDE の Copilot Chat を無効化、別の org は有効化）。GitHub は次の優先順位で解決:
  - **多くの機能は「より緩い設定」が勝つ** — IDE 上の Chat / agent モード / Code Review / Cloud Agent / Web 検索 など。**どこか 1 つの org が有効化していれば**、ユーザーは全 org でその機能を使える。
  - **センシティブな機能は「より厳しい設定」が勝つ** — 主に **Copilot Metrics API** と **public code に一致する suggestion**。**どこか 1 つの org が無効化していれば**、全 org でブロックされる。

> 📘 優先順位の全表: <a href="https://docs.github.com/ja/copilot/reference/policy-conflicts" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot のポリシーが組織で競合した場合の機能可用性</a>

## Outside collaborator と Guest collaborator

org のメンバーではない人（ベンダー・契約者・短期パートナー）にも Copilot を渡せる。

### 通常 org — Outside collaborator

- 🔐 **まず org レベルで許可** — *Org Settings → Copilot → Access → Outside collaborator を許可*。
- 📦 **リポジトリ単位で招待** — Outside collaborator は org の他のリポジトリを見られず、明示的に追加されたリポジトリだけにアクセスできる。
- 💵 seat を割り当てた Outside collaborator は **1 ライセンスとして** Enterprise 請求書に計上される。

### EMU 環境 — Guest collaborator

- 🪪 **Enterprise Managed Users (EMU)** での同等ロールは **Guest collaborator**。通常の EMU アカウントと同様に IdP（Entra ID / Okta）からプロビジョニング。
- 🚧 Guest collaborator は **internal リポジトリにはデフォルトでアクセスできない**。明示的に追加された org / リポジトリのみ参照可。
- 💵 seat を割り当てた Guest collaborator も **1 ライセンス分** が課金される。

> 📘 セットアップ: <a href="https://docs.github.com/ja/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization" target="_blank" rel="noopener noreferrer" class="retro-link">Outside collaborator の追加</a> · <a href="https://docs.github.com/ja/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators" target="_blank" rel="noopener noreferrer" class="retro-link">Guest collaborator の有効化（EMU）</a>
