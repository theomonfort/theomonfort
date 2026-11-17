---
title: "Actions のシークレットと OIDC"
---

**Actions のシークレットと OIDC**は、[[GitHub Actions]] の [[Workflows & Triggers]] 内で実行時の認証情報とクラウド認証を管理します。

## 暗号化されたシークレットとログのマスキング

- リポジトリ、環境（必要に応じて必須レビュアーと待機タイマーを設定）、または Organization の単位で、`Settings > Secrets and variables > Actions` に保存します。
- `${{ secrets.NAME }}` としてステップへ注入され、[[Actions Runners]] のログでは自動的にマスクされます。

## OIDC によるキーレスのクラウド認証

- **OpenID Connect（OIDC）**を使うと、長期間有効な固定のクラウドキーを保存する代わりに、ワークフローが短命なジョブ ID トークンを AWS、Azure、GCP、HashiCorp Vault と直接交換できます。リポジトリのカスタムプロパティ、ブランチ、環境などのクレームに対応しています。
