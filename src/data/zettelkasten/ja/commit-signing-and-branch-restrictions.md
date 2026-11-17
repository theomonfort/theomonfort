---
title: "コミット署名とブランチ制限"
---

**コミット署名とブランチ制限**は、[[PR Rulesets]] 内の Git レベルの整合性ルールです。暗号学的にコミットの出所を保証し、[[Pull Requests]] のレビューゲートとともに、`main` を履歴破壊から保護します。

## ブランチの整合性を守る主なルール

| ルールセットの設定 | 提供する保護 |
| --- | --- |
| **Block force pushes** *（新規ルールセットで既定でオン）* | 保護ブランチへの `git push --force` を拒否し、マージ済みのレビュー履歴が上書きされるのを防止 |
| **Restrict deletions** | 誤操作または悪意による `git push origin --delete main` / `release/*` をブロック |
| **Require linear history** | 対象ブランチへのマージコミットを拒否し、[[Merge Methods]] の `Squash and merge` または `Rebase and merge` を強制 |
| **Require signed commits** | 検証済みの GPG、SSH、S/MIME 署名（`Verified` バッジ）がないコミットを拒否し、作者ヘッダーの偽装とコミットの注入を防止 |

## Web とエージェントのワークフローとの互換性

- PR のマージ、[[Suggested Changes]] の一括コミットを含む GitHub Web UI で作成したコミットや、[[PR Coding Agent Handoff]] 中に Copilot Cloud Agent がプッシュしたコミットは、**GitHub によって自動署名**され、`Verified` 署名が付与されます。[[Ruleset Bypass & Evaluate Mode]] を使わずに、`Require signed commits` の下でそのまま動作します。
