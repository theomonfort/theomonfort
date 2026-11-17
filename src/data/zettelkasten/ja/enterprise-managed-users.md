---
title: "Enterprise Managed Users"
---

**Enterprise Managed Users**（`EMU`）は、[[GitHub]] が [[GitHub Enterprise Cloud]] で提供する導入モデルで、[[GHE.com Data Residency|GHE.com のデータレジデンシー]]では必須です。企業の ID プロバイダー（`IdP`）が、エンタープライズ内のすべてのユーザーアカウントを作成、所有、停止します。

## 個人アカウント + SAML と EMU の比較

どちらも [[SAML & OIDC SSO|SAML と OIDC の SSO]]を介して IdP で認証しますが、アカウントの所有権とライフサイクルの制御は根本的に異なります。

| 機能 | 個人アカウント + SAML | Enterprise Managed Users（`EMU`） |
| --- | --- | --- |
| **SSO プロトコル** | SAML のみ | **SAML** または **OIDC**（Entra ID、Okta） |
| **SSO の強制範囲** | エンタープライズまたは組織単位 | **エンタープライズ全体のみ** |
| **[[SCIM Provisioning|SCIM プロビジョニング]]** | 任意（組織メンバーシップのみを管理） | **必須**（アカウントを作成、更新、停止） |
| **サインインの流れ** | GitHub パスワードの後に IdP | 最初から IdP による認証 |
| **ユーザー名の形式** | 個々のユーザーが選択 | IdP がエンタープライズの接尾辞付きで強制（`mona_octocorp`） |
| **外部ベンダー** | リポジトリ範囲の [[Outside Collaborators|外部コラボレーター]] | IdP でプロビジョニングする [[EMU Guest Collaborators|EMU ゲストコラボレーター]] |

## アカウントのライフサイクルと単一 IdP 構成

- **初期設定ユーザー**: EMU エンタープライズの作成時に、復旧 / 初期設定用アカウント（`<shortcode>_admin`）が1つ作成されます。[[Enterprise Trial & Initial Setup|エンタープライズの試用と初期設定]]で SSO と SCIM を設定するためだけに使い、日常のコーディングには使いません。
- **単一 IdP のルール**: SSO 認証と [[SCIM Provisioning|SCIM プロビジョニング]]は、必ず同一の IdP テナントで処理します。対応するパートナーは Microsoft Entra ID（OIDC / SAML）、Okta（OIDC / SAML）、PingFederate（SAML）です。認証に Okta、SCIM に Entra ID を使う構成は非対応です。
- **グループ経由のアクセスとトレードオフ**: プロビジョニングされたユーザーは、[[IdP Group & Team Sync|IdP グループとチームの同期]]で対応付けられるまで未所属のエンタープライズメンバーです。公開範囲と外部との共同作業には、[[EMU Account Restrictions|EMU アカウントの制約]]に記載された厳格なガードレールが適用されます。
