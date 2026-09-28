---
title: "Enterprise 全体の認証情報一覧をエクスポート"
date: "2026-09-21"
summary: "SSH キー、PAT、アプリの認証情報を Enterprise 全体で一覧化。アクセスの棚卸しやセキュリティインシデントの調査に活用できます。"
category: security
source: "https://github.blog/changelog/2026-09-21-github-enterprise-adds-credential-inventory-exports/"
demoUrl: "https://github.com/enterprises/octodemo/settings/security"
demo:
  - "Settings → Authentication security → Credentials を開き、Overview の件数と Export CSV ボタンを見せる。CSV の絞り込みを実演する場合は、機密情報を除いたサンプルを使う。"
---

### 覚えておきたいこと

- **画面と API に対応**：Enterprise 設定から全件を CSV 出力し、ダウンロード後にユーザー、アプリ、種類、組織で絞り込み。ページネーション対応の REST API でレポートも自動化できます。
- **秘密の値ではなくメタデータ**：所有者、権限、作成日、有効期限、最終利用日を確認。トークンの値自体は含まれません。
- **権限と提供範囲**：Enterprise owner または `View enterprise credentials` 権限が必要。GitHub Enterprise Cloud で利用可能。Enterprise Server は今後のリリースで対応予定。

[認証情報の確認方法（公式ドキュメント）](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/reviewing-credentials-in-your-enterprise)

[認証情報一覧のエクスポート（REST API）](https://docs.github.com/enterprise-cloud@latest/rest/enterprise-admin/token-inventory?apiVersion=2026-03-10#create-an-enterprise-token-inventory-export)
