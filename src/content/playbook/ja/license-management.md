---
title: Copilot Licence
titleEn: Copilot Licence
summary: GitHub Copilot は Enterprise レベルで課金され、Enterprise または Organization レベルで割り当てられる。複数 org に所属するユーザーの請求・ポリシーの扱い、Outside collaborator / EMU の Guest collaborator まで一通り整理。
icon: /theomonfort/icons/license-crown.png
color: magenta
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

<div class="hero-quote hero-quote-admin">
  <p>
    GitHub Copilot は <strong>Enterprise レベルで課金</strong>され、<strong>Enterprise または Organization レベルで割り当て</strong>られる。
  </p>
  <p>
    1 つの <strong>Enterprise</strong> = 1 通の請求書。<strong>Enterprise 全体で一元割り当て</strong>するか、各 <strong>org</strong> で <strong>Business か Enterprise</strong> を選び、そのメンバーへ seat を割り当てる。
  </p>
</div>

## GitHub 関連ライセンス／サービスの調達方法

<div style="font-size:0.56em;line-height:1.25;--proc-row:8.45rem;--proc-gap:0.6rem;--proc-label:5.4rem;--proc-navy:#ff2e88;--proc-gray:#9bbc0f;--proc-blue:#00f0ff;--proc-copilot:#ffb000;--proc-panel:rgba(10,14,39,0.86);--proc-card:rgba(5,6,15,0.92);--proc-card-border:rgba(0,240,255,0.46);--proc-copilot-border:rgba(255,176,0,0.85);--proc-head:#ff2e88;--proc-accent:#00f0ff;--proc-dark:#05060f;--proc-ink:#e8f4ff;">

GitHub サービスの利用方法は下記の通りです。

<div style="display:grid;grid-template-columns:minmax(0,1fr) 16.5rem;gap:1.05rem;align-items:start;margin-top:0.9rem;max-width:72rem;">
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;border-bottom:0.6rem solid rgba(5,6,15,0.95);">ユーザー<br/>ライセンス</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.3rem 0.7rem 0.55rem;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.38rem;">GitHub Enterprise利用のためのライセンス</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">Visual Studio subscriptions</div>
<div style="padding:0.45rem 0.55rem;font-weight:600;">・Visual Studio サブスクリプションが必要な方</div>
</div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">GitHub Enterprise</div>
<div style="padding:0.45rem 0.55rem;font-weight:600;">・Visual Studio サブスクリプション不要な方<br/>・開発者/インフラエンジニア/DevOpsエンジニア/デザインなど<br/>・プロジェクト管理者/関係者</div>
</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;border-top:0.6rem solid rgba(5,6,15,0.95);">Committer<br/>ライセンス</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.3rem 0.7rem 0.55rem;display:grid;grid-template-rows:auto 1fr;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.55rem;">GitHub でDevSecOps実現するためのライセンス</div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">GitHub でDevSecOps実現するためのライセンス</div>
<div style="padding:0.62rem 0.7rem;font-weight:600;">・コードのコミット/マージを行う方</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;">従量課金</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.35rem 0.55rem 0.55rem;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.45rem;">その他従量課金モデルの追加サービス</div>
<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.45rem;">
<div style="background:var(--proc-card);border:2px solid var(--proc-copilot-border);height:100%;display:grid;grid-template-rows:auto 1fr;box-shadow:0 0 12px rgba(255,176,0,0.28);"><div style="background:var(--proc-copilot);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.18rem 0.25rem;font-size:1.03em;">Copilot<br/>Business/Enterprise</div><div style="padding:0.45rem 0.35rem;font-weight:700;color:var(--proc-copilot);">・生成系AIによるコード提案サービス</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Actions</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・CI/CD<br/>・ワークフロー自動化</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Codespaces</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・開発用マシンを提供</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Packages</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・パッケージ管理</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);height:100%;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">LFS</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・システム移行に伴い、現在無料提供</div></div>
</div>
</div>
</div>
</div>
<div style="position:relative;">
<div style="position:absolute;top:-3.12rem;left:0;right:0;">
<div style="background:var(--proc-navy);color:var(--proc-dark);text-align:center;font-weight:700;font-size:1.15em;padding:0.28rem 0.4rem;">ご調達方法</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.65rem;align-items:center;margin-top:0.14rem;">
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">1</div>
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">2</div>
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">3</div>
</div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.65rem;align-items:stretch;">
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">サブスク<br/>ライセンス</div>
<div style="grid-row:2;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">サブスク<br/>ライセンス</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
</div>
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">サブスク<br/>ライセンス</div>
<div style="grid-row:2;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
</div>
<div style="display:grid;grid-template-rows:repeat(3,var(--proc-row));gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
<div style="grid-row:2;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
</div>
</div>
</div>

</div>
</div>

## Enterprise レベルでの課金

- 💳 **課金の主体は Enterprise アカウント** — 配下の全 organization の seat が **1 通の請求書** に集約される。
- 📈 課金単位は **アクティブユーザー × 月**。同じユーザーが複数 org に所属していても重複請求はされない（後述「複数 org と請求」を参照）。
- 🧾 organization 向けのプランは **Copilot Business** と **Copilot Enterprise** の 2 種類。Enterprise は Business に加えて、GitHub.com 上の Chat（リポジトリ索引付き）、fine-tuned モデル、Audit log などを含む。
- 🏢 **Enterprise に属さない単独 organization** は org に直接課金され、選べるのは **Business のみ**。

> 📘 プラン比較: <a href="https://docs.github.com/ja/copilot/about-github-copilot/plans-for-github-copilot" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot のプラン</a>

## Enterprise / Organization レベルでのライセンス割り当て

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
