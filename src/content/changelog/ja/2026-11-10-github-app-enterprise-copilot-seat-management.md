---
title: "GitHub App による Enterprise Copilot シート管理"
date: "2026-11-10"
summary: "Enterprise にインストールした GitHub App が、専用のきめ細かな権限を使って Enterprise のユーザーやチームに Copilot シートを割り当て・解除できるようになりました。"
category: administration
source: "https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management"
---

Enterprise にインストールした GitHub App が、`Enterprise Copilot license management` 権限を使って Copilot シートを管理できるようになりました。活用例を紹介します。

### 自動化の例

- **セルフサービス申請**：開発者が社内ポータルからアクセスを申請し、承認後に App が Copilot シートを割り当てます。
- **チーム単位のアクセス管理**：Enterprise チームにシートを割り当て、チームのメンバー構成に応じてアクセスを管理します。
- **シートの定期確認**：シート割り当てを一覧し、利用が少ない可能性のあるシートを管理者の確認対象にします。IDE のアクティビティ情報にはテレメトリの有効化が必要なため、アクティビティがないことだけで未使用とは判断できません。
- **退職・異動時の対応**：ユーザーまたはチームのシート割り当てを解除します。キャンセルは現在の請求サイクル終了時に反映され、別のチームや Organization 経由でアクセスがある場合は利用を継続できます。

シート管理 API は公開プレビューであり、仕様が変更される可能性があります。Enterprise インストールだけでは、Organization やリポジトリへのアクセス権は付与されません。

### ドキュメント

- [Copilot シート管理 REST API](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-user-management)
- [GitHub App に必要な権限](https://docs.github.com/en/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps#enterprise-permissions-for-enterprise-copilot-license-management)
- [Enterprise への GitHub App のインストール](https://docs.github.com/en/enterprise-cloud@latest/apps/using-github-apps/installing-a-github-app-on-your-enterprise)
