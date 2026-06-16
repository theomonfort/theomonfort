---
title: ライセンス管理
titleEn: License Management
summary: GitHub Copilot は Enterprise レベルで課金され、Organization レベルで割り当てられる。複数 org に所属するユーザーの請求・ポリシーの扱い、Outside collaborator / EMU の Guest collaborator まで一通り整理。
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

## GitHub 関連ライセンス／サービスの調達方法

<div style="font-size:0.85em;">

GitHub サービスの利用方法は下記の通りです。

<div style="display:flex;gap:2rem;align-items:flex-start;margin-top:1rem;">
<div style="flex:3;">

<table style="width:100%;border-collapse:collapse;font-size:0.9em;">
<thead>
<tr style="background:var(--entry-accent,#1f6feb);color:#fff;">
<th style="padding:6px 10px;text-align:left;width:120px;"></th>
<th colspan="2" style="padding:6px 10px;text-align:center;">GitHub Enterprise 利用のためのライセンス</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;font-weight:bold;border:1px solid #444;">ユーザー<br/>ライセンス</td>
<td style="padding:8px 10px;border:1px solid #444;"><strong>Visual Studio with GitHub</strong><br/>・Visual Studio with MSDN が必要な方</td>
<td style="padding:8px 10px;border:1px solid #444;"><strong>GitHub Enterprise</strong><br/>・Visual Studio with MSDN 不要な方<br/>・開発者/インフラエンジニア/DevOpsエンジニア/デザインなど<br/>・プロジェクト管理者/関係者</td>
</tr>
</tbody>
</table>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:0.5rem;">
<thead>
<tr style="background:var(--entry-accent,#1f6feb);color:#fff;">
<th style="padding:6px 10px;width:120px;"></th>
<th style="padding:6px 10px;text-align:center;">GitHub で DevSecOps 実現するためのライセンス</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;font-weight:bold;border:1px solid #444;">Committer<br/>ライセンス</td>
<td style="padding:8px 10px;border:1px solid #444;"><strong>GitHub Advanced Security</strong><br/>・コードのコミット/マージを行う方</td>
</tr>
</tbody>
</table>

<table style="width:100%;border-collapse:collapse;font-size:0.9em;margin-top:0.5rem;">
<thead>
<tr style="background:var(--entry-accent,#1f6feb);color:#fff;">
<th style="padding:6px 10px;width:120px;"></th>
<th colspan="5" style="padding:6px 10px;text-align:center;">その他従量課金モデルの追加サービス</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px 10px;font-weight:bold;border:1px solid #444;">従量課金</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Copilot</strong><br/>生成系AIによる<br/>コード提案</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Actions</strong><br/>CI/CD<br/>ワークフロー自動化</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Codespaces</strong><br/>開発用マシンを<br/>提供</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>Packages</strong><br/>パッケージ管理</td>
<td style="padding:8px 10px;border:1px solid #444;text-align:center;"><strong>LFS</strong><br/>大容量ファイル<br/>ストレージ</td>
</tr>
</tbody>
</table>

</div>

<div style="flex:1;text-align:center;">
<div style="font-weight:bold;margin-bottom:0.5rem;">ご調達方法</div>
<div style="display:flex;gap:4px;justify-content:center;align-items:flex-end;height:160px;">
<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
<span style="font-size:0.7em;font-weight:bold;">❶</span>
<div style="writing-mode:vertical-rl;background:#1f3d73;color:#fff;padding:8px 6px;border-radius:4px;height:140px;display:flex;align-items:center;justify-content:center;font-size:0.75em;font-weight:bold;">サブスク<br/>ライセンス</div>
</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
<span style="font-size:0.7em;font-weight:bold;">❷</span>
<div style="writing-mode:vertical-rl;background:#2a5298;color:#fff;padding:8px 6px;border-radius:4px;height:110px;display:flex;align-items:center;justify-content:center;font-size:0.75em;font-weight:bold;">サブスク<br/>従量課金<br/>モデル</div>
</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
<span style="font-size:0.7em;font-weight:bold;">❸</span>
<div style="writing-mode:vertical-rl;background:#3a6cc9;color:#fff;padding:8px 6px;border-radius:4px;height:80px;display:flex;align-items:center;justify-content:center;font-size:0.75em;font-weight:bold;">従量課金<br/>モデル</div>
</div>
</div>
</div>

</div>
</div>
