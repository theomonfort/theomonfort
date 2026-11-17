---
title: "Marketplace アクション"
---

**Marketplace アクション**は、[[GitHub Actions]] の再利用可能なワークフロー構成要素です（`uses: actions/checkout@v7`、`actions/setup-node@v7`、`docker/build-push-action`、[[Third-Party SARIF]] 用の `github/codeql-action/upload-sarif`）。定型スクリプトをゼロから書かずに [[Workflows & Triggers]] を組み立てられます。

## サプライチェーンの保護強化

サードパーティのアクションは、ワークスペースのコードにアクセスできる [[Actions Runners]] 内で実行されます。外部アクションはすべて依存関係として扱ってください。

- 認証済みクリエーターが公開したものでも、**ソースコードをレビュー**します。
- **完全なコミット SHA に固定するか、[[Workflow Lockfiles]] を使用**します（`actions.lock`）。`@v4` や `@v4.4.0` のようなバージョンタグは変更可能なポインターであり、未レビューのコードへ移される可能性があるためです。
- **組織の許可リスト**: `Settings > Actions > General` で利用可能なアクションを限定します（GitHub 作成、認証済みクリエーター、明示的な許可リストなど）。
- **自動更新**: [[Dependency Graph]] が `.github/workflows/*.yml` の参照を一覧化し、アクションのセキュリティ修正や新バージョンが公開されると、[[Dependabot]] が [[Dependabot Alerts & Updates]] を通じて PR を作成します。
