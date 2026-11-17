---
title: "ワークフローのロックファイル"
---

**ワークフローのロックファイル**（一般提供）は、[[GitHub Actions]] に決定論的なサプライチェーンの固定を導入します。[[Workflows & Triggers|ワークフローとトリガー]]で `actions/checkout@v4` のような読みやすいタグを維持しながら、レビュー済みの正確なコミット SHA を実行できます。

## `actions.lock` の仕組み

- **不変の解決結果**：`gh actions-lock` を実行すると `.github/workflows/actions.lock` が生成され、[[Marketplace Actions|Marketplace の Actions]]の直接および推移的依存関係ごとに、正確なコミット SHA、`owner_id`、`repo_id` が記録されます。上流でタグが移動しても、GitHub Actions は固定されたコミットを実行します。
- **CI での検証**：`gh actions-lock --verify` はファイルを変更せず、ワークフローとロックファイルの整合性をチェックします。
- **[[Dependabot]] との統合**：[[Dependabot Alerts & Updates|Dependabot のアラートと更新]]は、ワークフローのタグと対応する `actions.lock` の SHA を、1つのプルリクエストでまとめて更新します。
- **ポリシーの段階的な展開**：Organization と Enterprise の管理者は、`Require lockfile` を `Settings > Actions > Policies` で強制できます。最初は **`Evaluate`** モードで Policy insights を確認し、その後 [[Rulesets & Merge Protection|ルールセットとマージ保護]]とともに **`Active`** のブロックへ切り替えます。
