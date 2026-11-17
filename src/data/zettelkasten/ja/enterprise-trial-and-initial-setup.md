---
title: "エンタープライズの試用と初期設定"
---

**エンタープライズの試用と初期設定**では、**30日間の無料トライアル（50ライセンス）**で新しい [[GitHub Enterprise Cloud]] アカウントを用意します。管理者は有料の [[Enterprise Procurement Channels|エンタープライズの調達経路]]へ移行する前に、ID、チーム同期、ガバナンスを検証できます。

## 作成時に選ぶ項目（変更不可の決定）

トライアル開始時の2つのアーキテクチャ上の選択は、そのエンタープライズのスラッグに恒久的に結び付きます。

1. **ユーザーの ID タイプ**:
   - **[[Enterprise Managed Users]]**: `github.com/account/enterprises/new?users_type=enterprise_managed` で作成（IdP がすべてのユーザーを所有）。
   - **個人アカウント（非 EMU）**: `github.com/account/enterprises/new` で作成（既存の `github.com` アカウントが組織に参加）。
2. **データのホスティング場所**:
   - **標準の `github.com`**（米国保存）、または **[[GHE.com Data Residency|GHE.com のデータレジデンシー]]**（EU、AU、US、JP のリージョン専用 `*.ghe.com` サブドメイン）。

導入後にどちらかを変更するには、別のエンタープライズを作成し、[[EMU Type Conversion|EMU タイプの変換]]を実行する必要があります。

## EMU 初期設定管理者アカウント（`<shortcode>_admin`）

EMU を選ぶと、専用の復旧 / 初期設定ユーザー（`<shortcode>_admin`）が1つ自動生成されます。

1. **パスワードの初期設定**: アクティベーションメールのリンクからパスワードを設定し、リカバリーコードを安全に保管します。
2. **Overview の設定チェックリスト**: `<shortcode>_admin` でサインインし、**Overview** タブを開いて [[SAML & OIDC SSO|SAML と OIDC の SSO]]を設定します（[[Entra ID Enterprise App|Entra ID エンタープライズアプリ]]、Okta、PingFederate を使用）。[[SCIM Provisioning|SCIM プロビジョニング]]用に `admin:enterprise` の classic PAT も生成します。
3. **厳格な運用ルール**: `<shortcode>_admin` は緊急時の IdP / SCIM 設定専用です。日常の管理と開発はすべて、IdP でプロビジョニングされ、[[Enterprise Admin Roles|エンタープライズの管理ロール]]を付与された `<username>_<shortcode>` アカウントを使います。
