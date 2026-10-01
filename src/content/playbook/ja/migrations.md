---
title: 移行（Migrations）
titleEn: Migrations
summary: EMU ↔ 非 EMU、GHES → GHE.com（データレジデンシー）の移行を比較。GEI と ELM の使い分け、前提条件、移行されないデータ、上限、移行後の作業を折りたたみ表で整理。
icon: 🚚
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
order: 31
category: administration
related: ['enterprise-setup', 'governance', 'license-management']
links:
  - group: 📖 公式ドキュメント
    label: GitHub への移行パス
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/overview/migration-paths-to-github
  - group: 📖 公式ドキュメント
    label: Enterprise の種類の選択（EMU か個人アカウントか）
    url: https://docs.github.com/ja/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type
  - group: 🧰 GitHub Enterprise Importer
    label: GitHub 製品間の移行について（移行されるデータと上限）
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products
  - group: 🧰 GitHub Enterprise Importer
    label: GitHub.com から org を移行する
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-organizations-from-githubcom-to-github-enterprise-cloud
  - group: 🧰 GitHub Enterprise Importer
    label: GHES から repo を移行する
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-repositories-from-github-enterprise-server-to-github-enterprise-cloud
  - group: 🧰 GitHub Enterprise Importer
    label: mannequin の再割当
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer
  - group: ⚡ Enterprise Live Migrations
    label: ELM について
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/elm/about-live-migrations
  - group: ⚡ Enterprise Live Migrations
    label: ELM で移行されるデータ
    url: https://docs.github.com/ja/enterprise-cloud@latest/migrations/elm/migrated-data-reference
  - group: 📰 発表
    label: "ELM（GHES → GHE.com）が GA に (2026-09-01)"
    url: https://github.blog/changelog/2026-09-01-enterprise-live-migrations-from-ghes-to-ghe-com-generally-available/
---

## 一言で

<div class="hero-quote hero-quote-admin">
  <p>
    <strong>EMU ↔ 非 EMU</strong> は設定変更ではなく、<strong>新しい Enterprise への移行</strong>。ツールは <strong>GEI</strong>。
  </p>
  <p>
    <strong>GHES → GHE.com</strong> は、止められない repo を <strong>ELM</strong>（ライブ移行）、残りを <strong>GEI</strong> で移す。
  </p>
</div>

## 移行パス早見表 <a class="h2-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/overview/migration-paths-to-github" target="_blank" rel="noopener noreferrer">📖 Docs</a>

4 つのケースを列に並べた。+ で見たい項目を開く。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧰</span><span class="ctl-name">ツール</span><span class="ctl-when">GEI / ELM</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>ツール</td><td colspan="2"><strong>GEI</strong>（GitHub Enterprise Importer）</td><td><strong>ELM</strong>（Enterprise Live Migrations、2026-09 GA）</td><td><strong>GEI</strong></td></tr>
<tr><td>コマンド</td><td colspan="2"><code>gh gei migrate-org</code> または <code>gh gei migrate-repo</code></td><td><code>gh elm</code></td><td><code>gh gei migrate-repo</code></td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">移行単位</span><span class="ctl-when">org か repo か</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/migrating-organizations-from-githubcom-to-github-enterprise-cloud" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>単位</td><td colspan="2"><strong>org ごと</strong>（5,000 repo まで）または repo ごと</td><td>1 回に 1 repo</td><td><strong>repo ごとのみ</strong>（GHES から org 単位では移せない）</td></tr>
<tr><td>Team</td><td colspan="2">org 移行なら team と repo 権限も移る（メンバーは移らない）</td><td colspan="2">移らない。移行先で作り直す</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⏱️</span><span class="ctl-name">ダウンタイム</span><span class="ctl-when">ELM は数分</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/elm/about-live-migrations" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>作業停止</td><td colspan="2">移行中は作業を止める（差分同期なし）</td><td><strong>カットオーバーのみ</strong>（数分）。それまで移行元 repo を使える</td><td>repo ごとに移行中は止める</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">✅</span><span class="ctl-name">前提条件</span><span class="ctl-when">Enterprise / ID / PAT</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/managing-access-for-a-migration-between-github-products" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>移行先</td><td>新しい EMU Enterprise</td><td>新しい個人アカウント型 Enterprise</td><td colspan="2">GHE.com の Enterprise（<strong>EMU 必須</strong>）</td></tr>
<tr><td>ID</td><td>IdP で SAML / OIDC + SCIM</td><td>各ユーザーが個人アカウントを用意（SAML は任意）</td><td colspan="2">IdP で SAML / OIDC + SCIM</td></tr>
<tr><td>実行者</td><td colspan="2">移行元 org owner（または migrator role）+ 移行先 enterprise owner</td><td>GHES site admin + GHE.com enterprise owner</td><td>移行元 org owner + 移行先 migrator role</td></tr>
<tr><td>トークン</td><td colspan="4">classic PAT（移行元と移行先の両方）</td></tr>
<tr><td>環境</td><td colspan="2">org 名の重複を避ける（rename）</td><td>GHES 3.17+ の対応パッチ、HTTPS、外向き通信、migrations 有効化</td><td>GHES 3.4.1+、blob storage</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">❌</span><span class="ctl-name">移行されないもの</span><span class="ctl-when">手動で再設定</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>対象外</td><td colspan="2">team メンバー、Actions の secrets / variables / runner、Packages、Projects、GitHub Apps、rulesets、custom properties、セキュリティアラート、LFS オブジェクト、PAT / SSH キー、ユーザー所有の repo</td><td>org 設定、team、Projects、org webhook、rulesets、fork からの PR、未送信のレビュー</td><td>GEI 共通（左と同じ）</td></tr>
<tr><td>部分的</td><td colspan="2">branch protection の一部ルール</td><td>branch protection（許可ユーザーや bypass は移らない）</td><td>branch protection の一部ルール</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📏</span><span class="ctl-name">上限</span><span class="ctl-when">40 GiB / 2 GB</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>サイズ</td><td colspan="2">repo あたり Git 40 GiB + メタデータ 40 GiB（public preview）、ファイル 400 MiB</td><td>巨大 monorepo に対応。release asset は 1 個 2 GB まで</td><td>GHES 3.13+ で 40 GiB（それより古い版は上限が小さい）</td></tr>
<tr><td>その他</td><td colspan="2">org 移行は 5,000 repo まで</td><td>並列は GHES 1 台 10 件、移行先 enterprise 20 件。移行中の force push は避ける</td><td>約 40 GB を超える複雑な repo は Expert Services を推奨</td></tr>
</tbody>
</table>
</div>
</details>
<details class="ctl-item" name="mig-matrix">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧹</span><span class="ctl-name">移行後の作業</span><span class="ctl-when">mannequin の再割当</span><a class="ctl-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/using-github-enterprise-importer/completing-your-migration-with-github-enterprise-importer/reclaiming-mannequins-for-github-enterprise-importer" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<table>
<thead><tr><th></th><th>Non-EMU → EMU</th><th>EMU → Non-EMU</th><th>GHES → GHE.com (ELM)</th><th>GHES → GHE.com (GEI)</th></tr></thead>
<tbody>
<tr><td>ユーザー</td><td>mannequin を managed user に再割当、IdP で team 同期</td><td>mannequin を個人アカウントに再割当、team メンバーを追加</td><td colspan="2">mannequin を managed user に再割当、IdP で team 同期</td></tr>
<tr><td>設定</td><td colspan="2">各自が PAT / SSH キーを再作成、旧 Enterprise の請求を切り替え</td><td>org 設定と team を作り直し、branch protection を確認</td><td>team と repo 権限を作り直す</td></tr>
</tbody>
</table>
</div>
</details>
</div>
</div>

## できないこと <a class="h2-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-existing-organization" target="_blank" rel="noopener noreferrer">📖 Docs</a>

どのケースでも、次の近道は使えない。

<div class="tbl-compact">

| ❌ できないこと | ✅ 代わりに |
| --- | --- |
| Enterprise の種類（EMU ↔ 非 EMU）をその場で変更 | 新しい Enterprise を作り、GEI で移行 |
| 「Transfer organization」で EMU Enterprise へ／から org を移動 | GEI の `migrate-org` |
| `ghe-migrator` でクラウドへ移行（GHES → GHES 専用） | GEI か ELM |
| ELM で GitHub.com（データレジデンシーなし）へ移行 | GEI（ELM の移行先は GHE.com のみ） |
| GHE.com → GitHub.com を公式ツールで移行 | GitHub Expert Services |
| GEI の上限を超える repo をそのまま移行 | Git の履歴だけ push、Expert Services、GHES からなら ELM |

</div>

## GHES → GHE.com：ELM と GEI <a class="h2-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/migrations/elm/about-live-migrations" target="_blank" rel="noopener noreferrer">📖 Docs</a>

同じ移行の中で併用できる。repo ごとに選ぶ。

<div class="tbl-compact">

| | **ELM** | GEI |
| --- | --- | --- |
| ⏱️ ダウンタイム | **カットオーバーのみ**（数分） | 移行中は repo を止める |
| 🎯 向いている repo | 巨大 monorepo、止められない重要 repo | 短い停止を許容できる一般的な repo |
| 🔀 並列数 | GHES 1 台 10 件、移行先 20 件 | ELM より多い |
| 🗂️ Git LFS | 移行される | 移行されない（後から push） |
| 🧩 GHES バージョン | 3.17+ の対応パッチ | 3.4.1+ |
| 💾 中間ストレージ | 不要 | blob storage（GHES 3.8+） |
| 🌐 移行先 | GHE.com のみ | GitHub.com / GHE.com |

</div>

> ⚠️ 移行中は force push しない（ELM が解決できない形で履歴が壊れる）。public repo は GHE.com に置けないので、事前に private / internal へ変更する。

## EMU の種類を切り替える手順 <a class="h2-doc" href="https://docs.github.com/ja/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Non-EMU → EMU も EMU → Non-EMU も、流れは同じ。

1. 🏢 **新しい Enterprise を作る**（トライアル可）。既存の Enterprise は変換できない
2. 🔐 **ID を準備**：EMU なら IdP で SAML / OIDC と SCIM、Non-EMU なら各自の個人アカウント
3. 🏷️ **org 名を決める**：github.com の org 名は全体で一意。移行先で別名にするか、移行元を rename して名前を空ける
4. 🧪 **試行移行 → 本番**：GEI の `migrate-org` で試し、本番は作業を止めて実行。ruleset に「Repository migrations」の bypass を追加
5. 👤 **ユーザーを戻す**：mannequin を再割当し、team メンバーを同期。各自 PAT / SSH キーを作り直す
6. 💳 **請求を切り替える**：移行完了後、GitHub の営業と旧 Enterprise の停止を調整
