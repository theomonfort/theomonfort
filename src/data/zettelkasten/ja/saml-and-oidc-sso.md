---
title: "SAML と OIDC による SSO"
---

**SAML と OIDC による SSO**は、[[GitHub]] Enterprise の認証を、[[GitHub Enterprise Cloud]] と [[GHE.com Data Residency|GHE.com のデータレジデンシー]]上で外部の ID プロバイダー（`IdP`）を通じて一元化します。

## Enterprise Managed Users での OIDC と SAML

[[Enterprise Managed Users]] の設定時、管理者は **OpenID Connect（`OIDC`）**と **SAML 2.0** のいずれかを選びます。

| 機能 | **OIDC** | **SAML 2.0** |
| --- | --- | --- |
| **条件付きアクセスポリシー（`CAP`）** | **対応**：IdP のデバイス / IP / リスクポリシーをリアルタイムに適用 | リアルタイムの CAP クレームには非対応 |
| **セッションの失効** | **即時**：IdP セッションの終了と同時に失効 | 遅延：有効なセッショントークンが期限まで残る可能性 |
| **IdP テナントあたりの Enterprise 数** | IdP テナントあたり**最大1つ** | 同一 IdP テナントで**複数** |
| **対応する EMU の IdP** | Microsoft Entra ID、Okta | Microsoft Entra ID、Okta、PingFederate |
| **推奨用途** | 厳密なゼロトラストの CAP が必要な主要本番 Enterprise | 同じテナントの追加 / サンドボックス Enterprise、または PingFederate |

## 個人アカウントの SAML と EMU の SSO

- **EMU の Enterprise**：最初のログインから **Enterprise** レベルで SSO が必須（`IdP -> GitHub`）で、同一 IdP 上の [[SCIM Provisioning|SCIM プロビジョニング]]と組み合わせます。設定には [[Entra ID Enterprise App|Entra ID エンタープライズアプリ]]または Okta を使います。
- **個人アカウントの Enterprise**：**Organization** または **Enterprise** レベルで SAML 2.0（OIDC ではない）を有効にできます。ユーザーはまず個人の `github.com` のパスワード / パスキーでログインし、企業の SAML ID を紐付け、**クラシック PAT と SSH キーを SSO 用に明示的に承認**する必要があります（[[GitHub Enterprise Importer]] で使う移行トークンも含む）。
