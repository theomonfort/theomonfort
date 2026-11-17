---
title: "GitHub Enterprise Cloud"
---

**GitHub Enterprise Cloud**（`GHEC`）は、[[GitHub]] のエンタープライズ向け SaaS です。作成時に、**ユーザーアカウントの所有者**（個人または IdP）と**データのホスティング場所**（米国の `github.com` またはリージョン別の `*.ghe.com` サブドメイン）を選んで設定します。

## 4つのエンタープライズホスティング構成の比較

| 観点 | 個人アカウント（`GHEC`） | [[Enterprise Managed Users]] | [[GHE.com Data Residency|GHE.com のデータレジデンシー]] | [[GitHub Enterprise Server]] |
| --- | --- | --- | --- | --- |
| **ホスト先** | `github.com` | `github.com` | `*.ghe.com` | セルフホスト（オンプレミス / クラウド） |
| **アカウント** | ユーザー自身が登録 | IdP（SCIM） | IdP（SCIM） | インスタンス内 |
| **サインイン** | パスワード（+ SAML） | SAML または OIDC | SAML または OIDC | 組み込み、LDAP、CAS、SAML |
| **データの場所** | 米国 | 米国 | EU、AU、US、JP | 顧客が管理 |
| **パブリックリポジトリ** | 許可（ポリシーで制御） | 禁止 | 禁止 | インスタンス内のみ公開 |
| **外部との共同作業** | [[Outside Collaborators|外部コラボレーター]] | 外部は読み取り専用 / ゲスト | ゲストコラボレーターのみ | インターネット越しには不可 |
| **プラットフォーム更新** | 自動 | 自動 | 自動 | 管理者がアップグレード |
| **Copilot の利用環境** | Web、IDE、CLI、エージェントのすべて | Web、IDE、CLI、エージェントのすべて | すべて（リージョンポリシーは任意） | IDE と CLI のみ |
| **ホステッドランナー** | Linux、Windows、macOS | Linux、Windows、macOS | Linux、Windows（macOS なし） | なし（セルフホステッドのみ） |

## 個人アカウントに対するガバナンスの境界

個人アカウントを使う標準の `GHEC`（任意で [[SAML & OIDC SSO|SAML と OIDC の SSO]]を併用）では、ユーザーはエンタープライズの**外側**の `github.com` に存在し、招待によってエンタープライズの組織に参加します。

- **管理者が制御できる範囲**: 組織ポリシー、エンタープライズのリポジトリルール、エンタープライズ内組織でパブリックリポジトリを許可するかどうか。
- **管理者が制御できない範囲**: ユーザー所有の個人パブリック / プライベートリポジトリ、gist、外部リポジトリへのスター / PR、外部の `github.com` 組織への所属。

## 3つの質問で決めるエンタープライズの選択フロー

[[Enterprise Trial & Initial Setup|エンタープライズの試用と初期設定]]で導入前に決定します。後からアカウントモデルをその場で切り替えることはできないためです（[[Org Transfer & Migration Limits|組織移管と移行の制限]]を参照）。

1. **コードとメタデータの保存地域を選ぶ必要がありますか？** → **はい**: [[GHE.com Data Residency|GHE.com のデータレジデンシー]]（`*.ghe.com` + EMU）。
2. **同じアカウントでパブリックリポジトリ、gist、オープンソースへの貢献が必要ですか？** → **はい**: 個人アカウント + [[SAML & OIDC SSO|SAML と OIDC の SSO]]。
3. **企業の IdP を、委託先も含めた全ユーザーの唯一の正本にできますか？** → **はい**: `github.com` の [[Enterprise Managed Users]]。**いいえ**: 個人アカウント + SAML SSO。
