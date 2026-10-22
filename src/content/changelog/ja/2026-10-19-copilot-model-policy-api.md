---
title: "Copilot モデルポリシー API：既存のモデル制御を自動化"
date: "2026-10-19"
summary: "モデルの利用可否を REST API で取得、更新できるようになりました。設定画面での繰り返し操作を減らし、ポリシー確認、承認済みの展開、Enterprise 全体の制限を自動化できます。"
category: administration
status: "GA"
source: "https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams/"
---

### これまでできなかった何ができる？

**新しいのは正式な REST API であり、モデルを制限する機能そのものではありません。** 管理者は以前から GitHub の設定画面でモデルの利用可否を制御できました。今回、**Enterprise、Organization、Enterprise チーム、エージェントアプリ**を対象とする **GET と PATCH のエンドポイント**が一般提供されました。

手動で設定変更を繰り返す代わりに、次のような自動化を構築できます。

- **設定のずれを検出**：現在の設定を取得し、承認済みの基準と比較して、差分を定期的に報告します。
- **レビュー済みの変更を適用**：意図する設定をリポジトリで管理し、PR で承認後、権限を持つワークフローから PATCH を呼び出します。API を使って構築できる運用例であり、GitOps 機能が標準搭載されたわけではありません。
- **対象を絞って段階的に展開**：委任済みのモデルを承認された Organization、またはチームモードの試行用 Enterprise チームに有効化し、同じ自動化で対象を広げます。
- **一括で利用を停止**：コンプライアンス上の判断に応じて Enterprise レベルでモデルを無効化し、委任先ごとの変更を不要にします。

### 既存のポリシー階層は変わらない

Organization モードでは Organization に判断を委任します。**Enterprise チームモードは引き続き別途オプトインが必要なプレビュー**です。有効化すると Organization レベルのモデル設定は無効になり、Enterprise チームとアプリへの委任に切り替わります。4 つのスコープを独立した階層として自由に組み合わせるものではありません。

チームから Enterprise レベルの制限を上書きすることはできません。チームモードでは、ユーザーが所属する各チームの許可が加算されます。API の応答は設定値と継承状態を表すもので、**個々のユーザーが最終的に利用できるモデルの確定レポートではありません**。

### まずは読み取りだけ試す

必要な権限を持つアカウントで、`ENTERPRISE` を Enterprise のスラッグに置き換えます。

```sh
gh api \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  /enterprises/ENTERPRISE/copilot/model-policies
```

更新を準備する際は、応答に含まれるモデル識別子を使い、対象エンドポイントの必要権限と編集可能な状態を確認します。

[Enterprise AI controls REST API](https://docs.github.com/en/enterprise-cloud@latest/rest/enterprise-admin/ai-controls) / [Organization の Copilot REST API](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-model-policy-management) / [モデルの利用可否と委任](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models)
