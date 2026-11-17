---
title: "SCIM プロビジョニング"
---

**SCIM プロビジョニング**（System for Cross-domain Identity Management）は、ID プロバイダー（`IdP`）と [[Enterprise Managed Users]] の間で、ユーザーアカウントの作成、プロフィール同期、退職時の処理を自動化します。SAML が有効な [[GitHub Enterprise Cloud]] では Organization のメンバーシップも対象です。

## Entra ID の SCIM エンドポイントとトークンの設定

[[SAML & OIDC SSO|SAML と OIDC による SSO]]の設定を [[Entra ID Enterprise App|Entra ID エンタープライズアプリ]]で済ませた後、**Enterprise Application → Manage → Provisioning** を開きます。

- **テナント URL**：
  - 標準の EMU：`https://api.github.com/scim/v2/enterprises/<enterprise-slug>`
  - [[GHE.com Data Residency|GHE.com のデータレジデンシー]]：`https://api.<subdomain>.ghe.com/scim/v2/enterprises/<enterprise-slug>`
- **シークレットトークン**：クラシック **Personal Access Token（`PAT`）** を使用します。EMU セットアップユーザー（`<shortcode>_admin`）でログインし、`Settings -> Developer settings -> Personal access tokens` から `admin:enterprise` スコープで生成します。
- **同期周期**：**Users and groups** でユーザーまたはセキュリティグループを割り当てます。Entra ID は**約40分ごと**に差分のプロビジョニング同期を自動実行します（緊急変更にはオンデマンドのプロビジョニングも利用可能）。

## 手動プロビジョニングと退職処理の漏れをなくす

- **既定は未所属状態**：新しくプロビジョニングされた EMU アカウントは、[[IdP Group & Team Sync|IdP グループとチームの同期]]で Organization に接続されるまで、Enterprise 内で **Unaffiliated** となり、GHE シートを **0** 席消費します。
- **即時のプロビジョニング解除を支えるガードレール**：手動招待への依存は、退職者にリポジトリアクセスとシートが残る重大なガバナンス上のアンチパターンです。IdP でユーザーを無効化または割り当て解除すると SCIM による停止が起動し、セッションの失効、トークン / SSH キーの無効化、シートの解放を行い、[[License Audit & Seat Reclamation|ライセンス監査とシート回収]]につなげます。
