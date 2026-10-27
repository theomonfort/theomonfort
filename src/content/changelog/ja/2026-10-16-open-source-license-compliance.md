---
title: "オープンソースのライセンスコンプライアンスが一般提供"
date: "2026-10-16"
summary: "依存関係のライセンスポリシーを Enterprise 全体で定義し、ルールセットと PR 上の指摘でマージ前に適用。例外申請も一元的に審査できます。"
category: security
status: "GA"
source: "https://github.blog/changelog/2026-10-16-open-source-license-compliance-generally-available/"
demoLinks:
  - label: "octodemo → 既定のライセンスポリシー"
    url: "https://github.com/enterprises/octodemo/settings/advanced_security/license_policy/default"
---

### 何が変わる？

- **ライセンスポリシーを一元管理**：Dependency Review Action のライセンスチェックを拡張し、Enterprise 全体のポリシーを定義できます。ブランチルールセットで、マージ前に準拠結果を必須にするリポジトリとブランチを指定します。
- **PR 時点で適用**：追加または変更された依存関係を、検出された推移的依存関係も含めてチェックします。非準拠の依存関係は PR 上に指摘され、依存関係の削除や置き換え、ポリシーの変更、承認済みの例外で解消します。
- **審査を担当者に委任**：新しい **Enterprise Open-Source License Manager** ロールを個人やチームに割り当て、例外申請を審査できます。保留中の申請は Enterprise の管理画面に表示され、メールでも通知されます。
- **API と監査ログ**：Enterprise ポリシーのダウンロード、更新、置き換えに対応。パッケージの準拠状況を確認する API も追加され、コーディングエージェントが依存関係を採用する前に確認できます。ポリシー変更は監査ログに記録されます。
- **データ所在地に対応**：データ所在地を指定した GitHub Enterprise Cloud でもライセンス情報を利用でき、依存関係グラフと SBOM エクスポートにも反映されます。

### 利用条件と段階的な導入

**GitHub Enterprise Cloud**（データ所在地を含む）が対象で、リポジトリで **GitHub Code Security を有効化**する必要があります。無料の Dependabot 基本機能とは別の機能です。

**Active** モードのルールセットは、非準拠の依存関係を含む PR のマージをブロックします。**Evaluate** モードではチェックと PR 上の指摘だけを行い、直接マージをブロックしません。ただし、会話の解決を必須にするブランチ保護がある場合、その指摘がマージを妨げることがあります。

[ライセンスコンプライアンスの概要](https://docs.github.com/en/enterprise-cloud@latest/code-security/concepts/supply-chain-security/open-source-license-compliance) / [ライセンスポリシーの設定](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-license-policies) / [Dependency graph REST API](https://docs.github.com/rest/dependency-graph?apiVersion=2026-03-10)
