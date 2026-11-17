---
title: "GHE.com のデータレジデンシー"
---

**GHE.com のデータレジデンシー**は、[[GitHub]] エンタープライズを専用リージョンサブドメイン（`https://<subdomain>.ghe.com`、例: `octocorp.ghe.com`）でホストする [[GitHub Enterprise Cloud]] の機能です。顧客のコードとリポジトリメタデータを選択した地域に保存します。

## リージョンと ID の分離

- **利用可能なリージョン**: **EU**、**オーストラリア**、**米国**、**日本**（日本の GA は `2025-12-18`）。
- **EMU が必須**: すべての `GHE.com` エンタープライズで [[Enterprise Managed Users]]（[[SAML & OIDC SSO|SAML と OIDC の SSO]] + [[SCIM Provisioning|SCIM プロビジョニング]]）が必要です。[[EMU Account Restrictions|EMU アカウントの制約]]を継承し、公開の `github.com` 名前空間から完全に分離されます。
- **アップグレード保守不要**: セルフホストの [[GitHub Enterprise Server]] と異なり、`GHE.com` はクラウドで継続的に更新され、管理者によるアップグレードの停止時間はありません。

## リージョン内保存の境界

| リージョン内に保存されるもの | リージョン外へ出る可能性があるもの |
| --- | --- |
| Git リポジトリ、ソースコード、ブランチ、コミット | 仮名化されたテレメトリ識別子 |
| プルリクエスト、Issue、コメント、リリース | 課金、ライセンス、サポートチケットのメタデータ |
| GitHub Actions のワークフローデータ、ログ、BCDR バックアップ | シークレットスキャンのパートナーによる有効性チェック |
| ユーザープロファイルのメタデータ（メール、ユーザー名、表示名、IP） | デフォルトの Copilot プロンプト / 推論（[[Copilot with Data Residency|データレジデンシー対応 Copilot]]を参照） |

## サブドメインのエンドポイントと `github.com` との機能差

| サービス | 標準の `github.com` | `GHE.com` データレジデンシー |
| --- | --- | --- |
| **REST / GraphQL API** | `api.github.com` | `api.<subdomain>.ghe.com` |
| **コンテナーレジストリ** | `ghcr.io` | `containers.<subdomain>.ghe.com` |
| **SSH での Git クローン** | `git@github.com:` | `<subdomain>@<subdomain>.ghe.com:` |

- **ネットワークとファイアウォールの許可リスト**: IP 範囲と SSH ホストキーのフィンガープリントは `github.com` と異なります。企業のファイアウォール、IdP のリダイレクト URI、クラウドストレージのルールを更新してください。
- **利用できない機能 / 条件付きの機能**:
  - **Actions と Marketplace**: **macOS** の GitHub ホステッドランナーはありません。**GitHub Marketplace** もありません（アクションとアプリはソースリポジトリから直接参照します）。
  - **Packages とサプライチェーン**: **Maven / Gradle** レジストリはまだありません。組織 / エンタープライズの **dependency insights**、**SBOM** エクスポートのライセンスメタデータもありません。AI を使う汎用シークレット検出には**機能差はありません**。
  - **管理とツール**: Codespaces は VS Code のエンドポイントを明示的に設定する必要があります。従来の GitHub Importer はありません（[[GitHub Enterprise Importer]] または [[Enterprise Live Migrator]] を使用）。OIDC による Amazon S3 への監査ログストリーミングは非対応で、一部のパブリックプレビュー機能は GA まで提供されません。
