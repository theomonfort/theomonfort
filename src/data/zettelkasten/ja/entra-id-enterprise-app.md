---
title: "Entra ID エンタープライズアプリ"
---

**Entra ID エンタープライズアプリ**は、Microsoft Entra ID（旧 Azure AD）を [[Enterprise Managed Users]] または [[GHE.com Data Residency|GHE.com のデータレジデンシー]]に接続し、[[SAML & OIDC SSO|SAML と OIDC の SSO]]と [[SCIM Provisioning|SCIM プロビジョニング]]を提供します。

## 公式 Entra ギャラリーアプリケーションの選択

[[Enterprise Trial & Initial Setup|エンタープライズの試用と初期設定]]で、**Microsoft Entra ID → Enterprise Applications → New application** から、選択したプロトコルに合うギャラリーアプリケーションを追加します。

| 選択したプロトコル | Entra ID ギャラリーのアプリケーション名 | テナントの制約 |
| --- | --- | --- |
| **OIDC** | `GitHub Enterprise Managed User (OIDC)` | Entra テナントごとに OIDC EMU エンタープライズは **1** つまで。リアルタイムの条件付きアクセスポリシーに対応 |
| **SAML 2.0** | `GitHub Enterprise Managed User` | 同じ Entra テナントで**複数**の EMU エンタープライズに対応 |

SSO サインオンと SCIM によるユーザープロビジョニングは、両方ともこの単一の Entra ID アプリケーションから実行する必要があります。認証と SCIM を別々の IdP に分ける構成は非対応です。

## SAML シングルサインオンのフィールド対応

SAML を使う場合（`Enterprise Application -> Manage -> Single sign-on`）、次の値を GitHub の **Identity provider** 設定へそのままコピーします。

| GitHub の Identity Provider フィールド | Microsoft Entra ID の参照元の値 |
| --- | --- |
| **Sign on URL** | `Login URL` |
| **Issuer** | `Microsoft Entra Identifier` |
| **Public certificate** | `Certificate (Base64)`（ダウンロードしたファイルを開き、生のテキストを貼り付ける） |

SSO サインインを確認したら、同じ Entra アプリの **Manage → Provisioning** を開き、[[SCIM Provisioning|SCIM プロビジョニング]]を設定し、[[IdP Group & Team Sync|IdP グループとチームの同期]]用に**セキュリティグループ**を割り当てます。
