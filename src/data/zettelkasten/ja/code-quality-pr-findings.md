---
title: "PR 上の Code Quality の指摘"
---

**PR 上の Code Quality の指摘**（**GitHub Code Quality**、[[GitHub]] で **2026-07-20** から一般提供）は、[[Pull Requests]] に保守性、信頼性、テストカバレッジの指摘を Autofix パッチ付きでインライン投稿します。GitHub Team と Enterprise Cloud で、単独製品として **`$10 / active committer / month`** の料金で利用できます（`Enterprise -> Org -> Repo` の設定で上位から有効化）。

## PR の対応言語とクエリ範囲

標準の PR 解析は、主要 6 言語（および Rust）に対して、`Error / Warning / Note` に分類される **383 個の決定論的な CodeQL 品質クエリ**を実行します。

| 言語 | クエリ数 | PR レビューで検出する内容 |
| --- | --- | --- |
| **Python** | `101` | 信頼性のバグ（重複した `if`、到達不能コード、未初期化変数、エラーチェック不足）と保守性の負債（ループ内の DB クエリ、不要な代入） |
| **JavaScript / TypeScript** | `98` | 非同期エラーの取りこぼし、ループのオフバイワン、効果のない式 |
| **Java / Kotlin** | `89` | null 参照、リソースリーク、循環的複雑度の高い経路 |
| **C#** | `69` | リソース解放パターン、使われない値の格納、例外処理 |
| **Go** と **Ruby** *（+ Rust）* | Go `22`、Ruby `3`、Rust `1` | エラーチェックの漏れと慣用的な書き方の落とし穴（C/C++ と Swift は、PR 上の [[Copilot Code Review]] とマージ後の AI 指摘を利用） |

## テストカバレッジの差分とルールセットの適用

- Actions で **Cobertura XML** のカバレッジレポートをアップロードすると、PR に行単位のカバレッジ差分を表示し、[[PR Rulesets]] で品質 / カバレッジのしきい値を [[Code Scanning PR Merge Protection]] とともに適用できます。
- GitHub 社内では、インライン Autofix と [[Suggested Changes]] によって、**Code Quality の指摘の `67.3%` がマージ前に修正**されています。不健全なコードでは AI による欠陥リスクが `30%+` 高く、エージェントの読み取りトークンコストも `~45%` 高いため、これは重要です。

## 指摘の元となる品質エンジン

- [[Code Quality]]、[[AI Quality Findings]]、[[Quality Score & Coverage]] の保守性と信頼性のチェックを表示します。
