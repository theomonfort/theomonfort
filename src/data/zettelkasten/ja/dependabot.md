---
title: "Dependabot"
---

**Dependabot** は GitHub に組み込まれたサプライチェーンセキュリティボット（**SCA**）です。[[Code Scanning|コードスキャン]]が自分で書いたコードを検査するのに対し、Dependabot は他者が作成したサードパーティライブラリや [[GitHub Actions]]（[[Marketplace Actions|Marketplace アクション]]と [[Workflow Lockfiles|ワークフローロックファイル]]）を確認します。

Dependabot の主要機能はパブリックリポジトリでもプライベートリポジトリでも無料です。エンタープライズガバナンスやエージェント機能は [[Code Security]] と組み合わせて利用します。

## 主要なレイヤーとサプライチェーン機能

- [[Dependency Graph|依存関係グラフ]]: マニフェストとロックファイルを解析して直接依存と推移的依存のパッケージを把握し、SBOM をエクスポートします。
- [[Dependabot Alerts & Updates|Dependabot のアラートと更新]]: セキュリティアラート（Advisory Database + EPSS）、自動セキュリティ更新 PR、定期的なバージョン更新の3つのレイヤーです。
- [[Dependency Review|依存関係レビュー]]: [[Rulesets & Merge Protection|ルールセットとマージ保護]]を使い、新たに導入される脆弱なパッケージや許可されていないライセンスをマージ前にブロックする PR チェックです。
- [[Open Source License Compliance|オープンソースライセンスのコンプライアンス]]: エンタープライズ共通のライセンスポリシーを PR に適用し、例外は管理されたワークフローで処理します。
- [[Reachability Analysis|到達可能性分析]]: [[CodeQL]] の呼び出し経路分析とアドバイザリ情報を組み合わせ、実際にコードから呼び出される脆弱性を優先します。
- [[Package Firewall|パッケージファイアウォール]]: 開発者、エージェント、CI がインストールする前に、危険な `npm` ダウンロード（マルウェア、未検証の新しいリリース、SLSA アテステーションの欠落）をブロックします。
- [[Auto-Triage & Assign to Agent|自動トリアージとエージェントへの割り当て]]: 自動トリアージルールで影響の小さいノイズを除外し、複雑なアップグレードをコーディングエージェントに委任します。
