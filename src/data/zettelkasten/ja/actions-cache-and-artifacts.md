---
title: "Actions のキャッシュとアーティファクト"
---

[[Actions Runners]] は [[GitHub Actions]] のジョブごとに VM を破棄するため、**Actions のキャッシュとアーティファクト**は、ステップ間や実行間でファイルを明示的かつ管理された方法で共有する仕組みです。

## 依存関係キャッシュと `cache-mode`

- **`actions/cache`**: パッケージディレクトリを復元して [[Workflows & Triggers]] を高速化します（リポジトリごとに 10 GB が含まれ、追加容量は [[Actions Compute & Budgets]] に基づく従量課金です）。
- **最小権限の `cache-mode`**: ワークフローまたはジョブ単位でキャッシュへのアクセス（`read`、`write`、`write-only`、`none`）を制御します。再利用可能なワークフローにも適用されるため、`pull_request_target` のような信頼されていないイベントは既定で `read` となり、**キャッシュポイズニング**を防ぎます。

## ワークフローのアーティファクト

- ビルド成果物、Playwright の失敗トレース、[[Quality Score & Coverage]] 用の Cobertura XML レポート、[[Third-Party SARIF]] 用のスキャナー出力などをアップロードし、ランナーの VM がなくなった後も開発者やレビュアーが結果を確認できます。
