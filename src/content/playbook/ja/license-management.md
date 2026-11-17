---
title: GHE と Copilot のライセンス
titleEn: GHE & Copilot Licences
summary: Copilot の課金、割り当て、複数 org のポリシー、外部コラボレーターを整理。GHE Cloud のライセンス消費、未所属ユーザー、Visual Studio バンドル、予算アラートも解説。
icon: /theomonfort/icons/license-crown.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 30
category: administration
related: ['github-copilot', 'copilot-metrics']
links:
  - group: 📖 GHE ライセンス
    label: GitHub ライセンスを消費するユーザー
    url: https://docs.github.com/ja/billing/reference/github-license-users
  - group: 📖 GHE ライセンス
    label: Enterprise ユーザーへの Copilot の直接割り当て
    url: https://docs.github.com/ja/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access
  - group: 📖 GHE ライセンス
    label: GitHub Enterprise を含む Visual Studio サブスクリプションの設定
    url: https://docs.github.com/ja/enterprise-cloud@latest/billing/how-tos/set-up-payment/set-up-vs-subscription
  - group: 📖 GHE ライセンス
    label: 予算とアラート
    url: https://docs.github.com/ja/billing/concepts/budgets-and-alerts
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

<div class="admin-procurement" style="font-size:18px;line-height:1.25;--proc-rows:180px 120px 180px;--proc-gap:0.6rem;--proc-label:7rem;--proc-navy:var(--c-neon-magenta);--proc-gray:var(--c-gb-green);--proc-blue:var(--c-neon-cyan);--proc-copilot:var(--c-crt-amber);--proc-panel:rgb(var(--rgb-deep-purple) / 0.86);--proc-card:rgb(var(--rgb-shadow-ink) / 0.92);--proc-card-border:rgb(var(--rgb-neon-cyan) / 0.46);--proc-copilot-border:rgb(var(--rgb-crt-amber) / 0.85);--proc-head:var(--c-neon-magenta);--proc-accent:var(--c-neon-cyan);--proc-dark:var(--c-shadow-ink);--proc-ink:var(--c-phosphor);">

<div style="display:grid;grid-template-columns:minmax(0,1fr) 16.5rem;gap:1.05rem;align-items:start;margin-top:0.9rem;max-width:72rem;">
<div style="display:grid;grid-template-rows:var(--proc-rows);gap:var(--proc-gap);">
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;border-bottom:0.6rem solid rgb(var(--rgb-shadow-ink) / 0.95);">ユーザー<br/>ライセンス</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.2rem 0.7rem;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.2rem;">GitHub Enterprise利用のためのライセンス</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">Visual Studio subscriptions</div>
<div style="padding:0.45rem 0.55rem;font-weight:600;">・Visual Studio サブスクリプションが必要な方</div>
</div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">GitHub Enterprise</div>
<div style="padding:0.45rem 0.55rem;font-weight:600;">Visual Studio サブスクリプション不要。<br/>開発 / インフラ / DevOps / デザイン<br/>プロジェクト管理 / 関係者</div>
</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;border-top:0.6rem solid rgb(var(--rgb-shadow-ink) / 0.95);">Committer<br/>ライセンス</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.2rem 0.7rem;display:grid;grid-template-rows:auto 1fr;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.2rem;">GitHub でDevSecOps実現するためのライセンス</div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;">
<div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.22rem 0.35rem;font-size:1.08em;">GitHub Advanced Security</div>
<div style="padding:0.2rem 0.7rem;font-weight:600;">・コードのコミット/マージを行う方</div>
</div>
</div>
</div>
<div style="display:grid;grid-template-columns:var(--proc-label) minmax(0,1fr);gap:0.25rem;min-height:0;">
<div style="display:flex;align-items:center;justify-content:center;text-align:center;background:var(--proc-head);color:var(--proc-dark);font-weight:700;font-size:1.1em;line-height:1.35;">従量課金</div>
<div style="background:var(--proc-panel);color:var(--proc-ink);padding:0.35rem 0.55rem 0.55rem;">
<div style="text-align:center;font-weight:700;font-size:1.05em;color:var(--proc-accent);margin-bottom:0.45rem;">その他従量課金モデルの追加サービス</div>
<div style="display:grid;grid-template-columns:1.3fr repeat(4,1fr);gap:0.45rem;">
<div style="background:var(--proc-card);border:2px solid var(--proc-copilot-border);min-height:0;display:grid;grid-template-rows:auto 1fr;box-shadow:0 0 12px rgb(var(--rgb-crt-amber) / 0.28);"><div style="background:var(--proc-copilot);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.18rem 0.25rem;font-size:1.03em;">Copilot<br/>Business / Enterprise</div><div style="padding:0.45rem 0.35rem;font-weight:700;color:var(--proc-copilot);">生成 AI によるコード提案</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Actions</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・CI/CD<br/>・ワークフロー自動化</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Codespaces</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・開発用マシンを提供</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">Packages</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・パッケージ管理</div></div>
<div style="background:var(--proc-card);border:1px solid var(--proc-card-border);min-height:0;display:grid;grid-template-rows:auto 1fr;"><div style="background:var(--proc-head);color:var(--proc-dark);text-align:center;font-weight:700;padding:0.3rem 0.25rem;font-size:1.08em;">LFS</div><div style="padding:0.55rem 0.35rem;font-weight:600;">・システム移行に伴い、現在無料提供</div></div>
</div>
</div>
</div>
</div>
<div class="admin-procurement-methods" style="position:relative;">
<div style="position:absolute;top:-1.1rem;left:0;right:0;">
<div style="background:var(--proc-navy);color:var(--proc-dark);text-align:center;font-weight:700;font-size:1.15em;padding:0.28rem 0.4rem;">ご調達方法</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.65rem;align-items:center;margin-top:0.14rem;">
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">1</div>
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">2</div>
<div style="width:1.55rem;height:1.55rem;border-radius:50%;background:var(--proc-navy);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;margin:auto;font-weight:700;font-size:1.1em;">3</div>
</div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.65rem;align-items:stretch;">
<div style="display:grid;grid-template-rows:var(--proc-rows);gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">サブスク<br/>ライセンス</div>
<div style="grid-row:2;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">サブスク<br/>ライセンス</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
</div>
<div style="display:grid;grid-template-rows:var(--proc-rows);gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-gray);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">サブスク<br/>ライセンス</div>
<div style="grid-row:2;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
</div>
<div style="display:grid;grid-template-rows:var(--proc-rows);gap:var(--proc-gap);">
<div style="grid-row:1;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
<div style="grid-row:2;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
<div style="grid-row:3;background:var(--proc-blue);color:var(--proc-dark);display:flex;align-items:center;justify-content:center;text-align:center;font-weight:700;font-size:1.25em;line-height:1.1;writing-mode:vertical-rl;">従量課金<br/>モデル</div>
</div>
</div>
</div>

</div>
</div>

## Enterprise レベルでの課金 <a class="h2-doc" href="https://docs.github.com/ja/billing/concepts/product-billing/github-copilot-licenses" target="_blank" rel="noopener noreferrer">📖 Docs</a>

- 💳 **課金の主体は Enterprise アカウント** — 配下の全 organization の seat が **1 通の請求書** に集約される。
- 📈 Copilot の seat は **未使用でも割り当て時から課金**され、月途中の追加は日割り計算される。**同一 Enterprise 内**の複数 org から同じユーザーに割り当てても重複請求はされない（後述「複数 org と請求」を参照）。
- 🧾 organization 向けのプランは **Copilot Business** と **Copilot Enterprise** の 2 種類。Enterprise は Business に加えて、GitHub.com 上の Chat（リポジトリ索引付き）、fine-tuned モデル、Audit log などを含む。
- 🏢 **Enterprise に属さない単独 organization** は org に直接課金され、選べるのは **Business のみ**。

> 📘 プラン比較: <a href="https://docs.github.com/ja/copilot/about-github-copilot/plans-for-github-copilot" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot のプラン</a>

## Enterprise / Organization レベルでのライセンス割り当て

<div class="admin-columns">
<div>

### Organization から割り当て

- **1 org に 1 プラン：** Business **か** Enterprise。混在はできない。
- **対象：** その org のメンバー。
- **設定：** Owner が **Org Settings → Copilot → Access** で割り当てる。

</div>
<div>

### Enterprise から割り当て

- **Business のみ：** seat は Enterprise 配下の全 org でユーザーに付随する。
- **設定：** 管理者が **Enterprise → Copilot → Access** で割り当てる。<a class="retro-link" href="https://github.blog/changelog/2025-10-28-managing-copilot-business-in-enterprise-is-now-generally-available/" target="_blank" rel="noopener noreferrer">2025-10-28 GA ↗</a>
- **別のポリシー：** 直接割り当てのユーザーには「Let organizations decide」は適用されない。**Policies for enterprise-assigned users** で機能を許可する。<a class="retro-link" href="https://docs.github.com/ja/enterprise-cloud@latest/copilot/concepts/enterprise/policies" target="_blank" rel="noopener noreferrer">Copilot ポリシー ↗</a>

</div>
</div>

## 複数 org と請求

同じユーザーが **同一 Enterprise 配下の複数 org に所属** している場合、ポイントは 2 つ:

- 💰 **請求されるライセンスは 1 つだけ** — 複数の org が seat をアサインしても、1 サイクルあたり 1 license にまとめられる。
- ⚖️ **ポリシーが競合し得る**（例: ある org は IDE の Copilot Chat を無効化、別の org は有効化）。GitHub は次の優先順位で解決:
  - **多くの機能は「より緩い設定」が勝つ** — IDE 上の Chat / agent モード / Code Review / Cloud Agent / Web 検索 など。**どこか 1 つの org が有効化していれば**、ユーザーは全 org でその機能を使える。
  - **センシティブな機能は「より厳しい設定」が勝つ** — 主に **Copilot Metrics API** と **public code に一致する suggestion**。**どこか 1 つの org が無効化していれば**、全 org でブロックされる。

> 📘 優先順位の全表: <a href="https://docs.github.com/ja/copilot/reference/policy-conflicts" target="_blank" rel="noopener noreferrer" class="retro-link">GitHub Copilot のポリシーが組織で競合した場合の機能可用性</a>

## Outside collaborator と Guest collaborator

org のメンバーではない人（ベンダー・契約者・短期パートナー）にも Copilot を渡せる。

<div class="admin-columns">
<div>

### 通常の org

- **Outside collaborator：** repo 単位で招待し、org の他の repo にはアクセスできない。
- **Copilot の seat を割り当てる：** 専用トグルは不要。**1 seat 分**を請求。
- **招待を制限：** Org Settings → Member privileges → **Allow members to invite outside collaborators** をオフにする。

<a class="retro-link" href="https://docs.github.com/ja/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization" target="_blank" rel="noopener noreferrer">Outside collaborator の設定 ↗</a>

</div>
<div>

### EMU の Enterprise

- **Guest collaborator：** 他の managed user と同じく IdP（Entra ID / Okta）から払い出す。
- **internal repo には既定でアクセス不可：** 明示的に許可された org / repo のみ。
- **Copilot の seat を割り当てる：** **1 seat 分**を請求。

<a class="retro-link" href="https://docs.github.com/ja/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/enabling-guest-collaborators" target="_blank" rel="noopener noreferrer">Guest collaborator の設定 ↗</a>

</div>
</div>

## GHE ライセンス管理 <a class="h2-doc" href="https://docs.github.com/ja/billing/reference/github-license-users" target="_blank" rel="noopener noreferrer">📖 Docs</a>

GitHub Enterprise Cloud（EMU を含む）が対象です。

<div class="ctl-widget">
<p class="ctl-hint">▸ + で詳細を開閉</p>
<div class="ctl-list">
<details class="ctl-item" name="ghe-licensing">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔑</span><span class="ctl-name">GHE ライセンス</span><span class="ctl-when">Org / repo へのアクセス</span><a class="ctl-doc" href="https://docs.github.com/ja/billing/reference/github-license-users" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p><strong>Organization に参加</strong>するか、<strong>private / internal リポジトリ</strong>（fork を除く）のコラボレーターとしてアクセスを付与されると、自動的に消費されます。</p>
</div>
</details>
<details class="ctl-item" name="ghe-licensing">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">👤</span><span class="ctl-name">未所属ユーザー</span><span class="ctl-when">Copilot Business のみ</span><a class="ctl-doc" href="https://docs.github.com/ja/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>Organization に所属せず、リポジトリアクセスも持たない<strong>未所属（unaffiliated）ユーザー</strong>に、<strong>Enterprise レベルで Copilot Business を直接割り当てる</strong>と、通常の GHE ライセンスを消費せずに利用できます。</p>
</div>
</details>
<details class="ctl-item" name="ghe-licensing">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">Visual Studio バンドル</span><span class="ctl-when">アカウントを照合</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/billing/how-tos/set-up-payment/set-up-vs-subscription" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p>GitHub アカウントを、<strong>GitHub Enterprise を含む</strong> Visual Studio サブスクリプションに照合します。単体の GHE ライセンスではなく、バンドルライセンスを消費します。<strong>照合済みのユーザーは、未所属でもバンドルライセンスを消費します。</strong></p>
</div>
</details>
<details class="ctl-item" name="ghe-licensing">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">💰</span><span class="ctl-name">GHE の予算</span><span class="ctl-when">アラートのみ</span><a class="ctl-doc" href="https://docs.github.com/ja/billing/concepts/budgets-and-alerts" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p><strong>従量課金の GHE ライセンス</strong>には、予算の <strong>75%、90%、100%</strong> でアラートを設定できます。予算を超えても<strong>ライセンス追加や課金は停止しません</strong>。前払いのボリュームライセンスには利用できません。</p>
</div>
</details>
</div>
</div>
