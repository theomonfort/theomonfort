---
title: "オープンソースライセンスのコンプライアンス"
---

**オープンソースライセンスのコンプライアンス**（GitHub Enterprise Cloud + [[Code Security]]）は、リポジトリごとに個別管理していた [[Dependency Review]] の YAML ファイルを、[[Dependabot]] 内の**一元管理されたエンタープライズライセンスポリシー**へ置き換えます。

## ポリシー、例外、監査

- **一元的なポリシー**: 許可 / 禁止する SPDX ライセンスの系統を、エンタープライズレベルで一度だけ定義します（例: `MIT` と `Apache-2.0` を許可し、`AGPL-3.0` を禁止）。
- **Evaluate と Active の適用**: まず **Evaluate モード**でポリシーを [[Rulesets & Merge Protection]] に接続し、開発者をブロックせずに影響を確認します。その後 **Active** に切り替えて非準拠の PR をブロックします。
- **例外ワークフロー**: 開発者は失敗した PR チェックから範囲を限定した例外を申請し、**Enterprise Open-Source License Manager** ロールが承認または拒否します。監査証跡は恒久的に残ります。
- **既存の依存関係の検査**: [[Dependency Graph]] の SBOM エクスポート（`pkg:` PURL）と **Package-check REST API** を組み合わせ、すでにマージ済みの依存関係を監査します。
