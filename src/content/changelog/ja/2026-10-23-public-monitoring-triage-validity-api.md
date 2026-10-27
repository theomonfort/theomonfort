---
title: "Public monitoring：トリアージ、有効性チェック、API、Webhook に対応"
date: "2026-10-23"
summary: "GitHub 全体の公開リポジトリに漏れたシークレットを Enterprise 専用画面で管理。有効な認証情報を優先して対応し、検出結果をインシデント対応ツールに連携できます。"
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-23-public-monitoring-adds-triage-validity-api-and-webhooks/"
---

### 何が変わる？

- **アラート管理**：**Dismissed** または **Fixed** としてクローズし、任意のコメントを追加できます。再オープンや、アクティビティタイムラインでの履歴確認にも対応します。
- **絞り込み**：リポジトリ、コミッター、シークレットの種類、関連付け方法（Enterprise メンバーシップまたは検証済みドメイン）、オープンまたはクローズ状態でフィルターできます。
- **常時の有効性チェック**：対応するシークレットは継続的に自動チェックされます。**Active**、**Inactive**、**Unknown** の表示で、まだ使える認証情報への対応を優先できます。
- **REST API と Webhook**：`GET /enterprises/{enterprise}/secret-scanning/public-monitoring-alerts` で検出結果を取得できます。Enterprise レベルの `secret_scanning_public_monitoring_alert` イベントでは、自社に関連付けられた新たな漏えいの通知を受け取れます。

### 通常のアラート一覧とは別の Enterprise 専用画面

[Octodemo Enterprise](https://github.com/enterprises/octodemo) で **Security and quality → Public monitoring** を左サイドバーから開きます。

**Enterprise レベル限定**の画面で、Organization やリポジトリのタブではありません。Enterprise メンバーや、メールアドレスが Enterprise の検証済みドメインに一致するユーザーに関連付けられたシークレットを表示します。自社が所有していない公開リポジトリでの漏えいも対象です。

事前に **Enterprise → Settings → Advanced Security → Additional Settings → Public monitoring** で有効化しておく必要があります。

### 利用条件と修復時の注意

**GitHub Enterprise Cloud**（データ所在地を含む）向けのパブリックプレビューです。**GitHub Advanced Security または GitHub Secret Protection** に追加料金なしで含まれます。Enterprise 管理者と Enterprise セキュリティマネージャーが有効化やアラート設定を管理できます。

**アラートを閉じても、変わるのは自社 Enterprise での状態だけです。** 認証情報の失効や、公開リポジトリからの削除は行われません。

[Public monitoring アラートの表示と管理](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-public-monitoring-alerts) / [Public monitoring の有効化](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise)
