---
title: Enterprise セットアップ
titleEn: Enterprise Setup
summary: GitHub Enterprise Cloud (EMU) の作成から SSO 構成まで。30 日間無料トライアルで Enterprise を作成し、Entra ID で OIDC/SAML を設定してチームを迎える準備を整える。
icon: /theomonfort/icons/license-crown.png
color: magenta
order: 31
category: administration
related: ['license-management']
links:
  - group: 📖 公式ドキュメント
    label: Enterprise Managed Users について
    url: https://docs.github.com/ja/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users
  - group: 📖 公式ドキュメント
    label: EMU の OIDC を構成する
    url: https://docs.github.com/ja/enterprise-cloud@latest/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-oidc-for-enterprise-managed-users
  - group: 🛠️ Entra ID チュートリアル
    label: GitHub EMU (OIDC) — プロビジョニング設定
    url: https://learn.microsoft.com/en-gb/entra/identity/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-enterprise-managed-user-oidc
  - group: 🛠️ Entra ID チュートリアル
    label: GitHub EMU — SAML SSO 設定
    url: https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-tutorial
---

## 一言で

<div class="hero-quote hero-quote-admin">
  <p>
    Enterprise は <strong>30 日間の無料トライアル（50 ライセンス）</strong>から開始。トライアル中に SSO・SCIM・チーム構成を完了させてから、有料プランに切り替える。
  </p>
</div>

## Enterprise の作成（30日間トライアル）

まず **GitHub Enterprise Cloud** を作成します。30 日間の無料トライアルが利用可能です。

| 種類 | リンク |
|------|--------|
| **Enterprise Managed Users (EMU)** | [Enterprise を作成する](https://github.com/account/enterprises/new?users_type=enterprise_managed) |
| **個人アカウント（非 EMU）** | [Enterprise を作成する](https://github.com/account/enterprises/new) |

作成時に **Data hosting** オプションで、**GitHub Enterprise Cloud**（github.com）または **Data Residency**（GHE.com のリージョン別サブドメイン）を選択できます。

![Data hosting 選択画面](/theomonfort/playbook/img/enterprise-data-hosting.png)

## EMU：管理者アカウントの初期設定

EMU を選択すると、**専用の管理者アカウント**（`shortname_admin`）が自動生成されます。

1. パスワード設定用のメールが届く — リンクからパスワードを設定
2. 管理者アカウントでログイン → **Overview** タブにセットアップ手順が表示される
3. 表示されるステップに沿って SSO とプロビジョニングを構成

![EMU 管理者の Overview 画面](/theomonfort/playbook/img/enterprise-emu-admin-overview.png)

> ⚠️ この管理者アカウントは SSO・SCIM の構成専用です。日常的な開発には IdP からプロビジョニングされたユーザーアカウントを使用してください。

## SSO 方式：OIDC vs SAML

SSO を有効化する際に **OIDC** または **SAML** を選択します。

> **重要**: OIDC は **1 つの IdP テナントにつき 1 Enterprise のみ** に設定可能です。同じ IdP テナントで複数の Enterprise を運用する場合、2 つ目以降は SAML を使用してください。

| | **OIDC** | **SAML** |
|---|---|---|
| **Conditional Access Policy (CAP)** | ✅ IdP の条件付きアクセスをリアルタイム適用 | ❌ CAP 非対応 |
| **セッション無効化** | ✅ IdP 側で即時反映 | ⚠️ トークン有効期限まで残存する場合あり |
| **1 IdP テナントあたりの Enterprise 数** | ❌ 1 つのみ | ✅ 複数可 |
| **対応 IdP** | Entra ID (Azure AD)・Okta | Entra ID・Okta・PingFederate 等 |
| **推奨ケース** | メインの Enterprise（セキュリティ要件が厳しい場合） | 2 つ目以降、CAP 不要な環境 |

## Entra ID でのアプリ登録

SSO を構成するには **Entra ID** で Enterprise Application を追加します。

| SSO 方式 | 追加するアプリ | チュートリアル |
|---|---|---|
| **OIDC** | GitHub Enterprise Managed User (OIDC) | [設定ガイド](https://learn.microsoft.com/en-gb/entra/identity/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-enterprise-managed-user-oidc) |
| **SAML** | GitHub Enterprise Managed User | [設定ガイド](https://learn.microsoft.com/en-us/entra/identity/saas-apps/github-enterprise-managed-user-tutorial) |

<div style="display:flex;gap:1rem;justify-content:center;">
<img src="/theomonfort/playbook/img/entra-app-emu-oidc.png" alt="GitHub Enterprise Managed User (OIDC)" style="max-width:48%;" />
<img src="/theomonfort/playbook/img/entra-app-emu-saml.png" alt="GitHub Enterprise Managed User" style="max-width:48%;" />
</div>

### SAML：GitHub ↔ Entra ID のフィールド対応

GitHub の **Identity provider** 設定画面で以下を入力します。Entra ID 側の値は **Enterprise Application → Manage → Single sign-on** に記載されています。

| GitHub 側のフィールド | Entra ID 側の値 |
|---|---|
| **Sign on URL** | Login URL |
| **Issuer** | Microsoft Entra Identifier |
| **Public certificate** | Certificate (Base64) — ファイルの中身テキストを貼り付け |

## SCIM プロビジョニングの設定

SSO の設定が完了したら、次に **Provisioning**（自動プロビジョニング）を構成します。

Entra ID の **Enterprise Application → Manage → Provisioning** で以下を入力します：

- **Tenant URL**: `https://api.github.com/scim/v2/enterprises/<enterprise-slug>`
- **Secret Token**: GitHub のセットアップユーザー（`shortname_admin`）で作成した **Personal Access Token (PAT)**

![Provisioning 設定画面](/theomonfort/playbook/img/entra-provisioning-config.png)

> PAT は GitHub の **Settings → Developer settings → Personal access tokens** から、`admin:enterprise` スコープ付きで作成してください。

設定後、Entra ID アプリの **Users and groups** にセキュリティグループまたはユーザーを追加すると、**約 40 分ごと**に自動プロビジョニングが実行され、GitHub Enterprise にユーザーが同期されます。

## IdP グループとチームの同期

プロビジョニングされたユーザーは、デフォルトでは **Unaffiliated（未所属）** の状態で追加されます。Organization やチームへの所属は IdP グループを同期することで自動化できます。

| 設定 | 結果 |
|---|---|
| **何もしない** | ユーザーは Enterprise に追加されるが Organization/Team には未所属 |
| **Enterprise Team に IdP グループを紐付け** | IdP グループのメンバーが自動的に Enterprise Team に同期 |
| **Organization Team に IdP グループを紐付け** | IdP グループのメンバーが自動的に Organization Team に同期（Org にも自動参加） |

GitHub の Team 設定画面 → **Identity Provider Group** で、対応する IdP グループを選択します。

![IdP グループの同期設定](/theomonfort/playbook/img/enterprise-idp-group-sync.png)
