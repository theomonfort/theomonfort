---
title: "GitHub Enterprise Importer"
---

**GitHub Enterprise Importer**（`GEI`、CLI 拡張 `gh gei` から実行）は、[[GitHub Migrations|GitHub 移行]]のクラウド側で制御される移行エンジンです。組織全体（`gh gei migrate-org`）または個別リポジトリ（`gh gei migrate-repo`）を [[GitHub Enterprise Cloud]]、[[Enterprise Managed Users]]、[[GHE.com Data Residency|GHE.com のデータレジデンシー]]へ移行します。

## 移行されるものと再設定が必要なもの

| `gh gei` で移行されるもの | 対象外（再作成または別途プッシュが必要） |
| --- | --- |
| Git コミット履歴、ブランチ、タグ、リリース | チームメンバーシップ、ユーザーへの直接権限付与、ユーザーの PAT と SSH キー |
| プルリクエスト、Issue、レビューコメント、タイムライン | Actions のシークレット、変数、環境、セルフホステッドランナー、実行履歴 |
| Git 内のワークフロー `.github/workflows/*.yml` ファイル | GitHub Apps、Packages、GitHub Projects、セキュリティアラート、ユーザー所有リポジトリ |
| チーム定義とチームのリポジトリロール（`migrate-org` で、移行元が `github.com` の場合のみ） | **Git LFS オブジェクト**、[[Enterprise & Repo Rulesets|エンタープライズとリポジトリのルールセット]]、カスタムプロパティ、ブランチ保護の一部のバイパス設定 |

移行されたリポジトリはすべて、移行先では**プライベート**になります（[[EMU Account Restrictions|EMU アカウントの制約]]下では必須）。

## サイズ制限、ルールセットのバイパス、差分同期なしのルール

- **アーカイブ上限**: リポジトリごとに **`40 GiB` の Git アーカイブ + `40 GiB` のメタデータ**まで（`GHES 3.13+`、`GHES 3.8+` では外部 Blob ストレージが必要、最低 `GHES 3.4.1+`）。単一ファイルは最大 **`400 MiB`**、リポジトリ数は最大 **`5,000`**（1回の `migrate-org` あたり）です。`GHES 3.17+` から `GHE.com` へ大規模モノレポを移行する場合は [[Enterprise Live Migrator]] を使用します。
- **厳格な書き込み停止**: `GEI` は**差分同期を行いません**。移行開始後のプッシュや PR 編集はコピーされません。移行を阻む移行先ルールセットには **`Repository migrations -> Exempt`** を設定し、IP 許可リストが GEI の範囲を遮断しないことを確認し、classic PAT を [[SAML & OIDC SSO|SAML と OIDC の SSO]]用に承認してください。

## マネキンの再割り当て（`gh gei reclaim-mannequin`）

移行した PR、Issue、コメントの作成者は、最初はプレースホルダーの**マネキン**に帰属します。[[SCIM Provisioning|SCIM プロビジョニング]]で移行先ユーザーを用意した後、組織オーナーが `gh gei generate-mannequin-csv` を実行し、マネキンを既存の移行先組織メンバーに対応付けて `gh gei reclaim-mannequin` を実行します（[[EMU Type Conversion|EMU タイプの変換]]を参照）。これにより復元されるのは UI 上の作成者の表示だけで、**リポジトリへのアクセス権は一切付与されず**、元の Git コミットの作成者メールアドレスも変わりません。
