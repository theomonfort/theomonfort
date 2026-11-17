---
title: "Code Quality"
---

**Code Quality** は [[GitHub]] の単独製品です（アクティブコミッター 1 人あたり月額 $10。[[GHAS]] に含まれるのではなく、並行して提供されます）。[[Code Scanning]] が悪用可能なセキュリティの欠陥を対象とするのに対し、Code Quality は信頼性や保守性の問題が技術的負債になるのを防ぎます。

健全なコードベースは AI にとっても重要です。不健全なコードは、エージェントによる編集時の欠陥リスクを高め、コンテキストトークンを大幅に多く消費します。

## 機能と共有エンジン

- [[CodeQL]]: C#、Go、Java/Kotlin、JS/TS、Python、Ruby に対して 383 個の決定論的な品質ルールを実行し、到達不能コード、オフバイワンのバグ、エラーチェック不足、ループ内のクエリを検出します。
- [[AI Quality Findings]]: デフォルトブランチに最近マージされたファイルを対象に、全言語でルール不要の AI 解析を行います。
- [[Quality Score & Coverage]]: 指摘を `Error` / `Warning` / `Note` に分類してリポジトリと Organization の健全性ダッシュボードに反映し、プルリクエストに Cobertura XML のテストカバレッジを表示します。
- [[Rulesets & Merge Protection]]: すべての PR に品質とテストカバレッジのしきい値を適用します。強制ブロック前に評価モードを利用できます。
- [[Copilot Autofix]] と [[Agentic Autofix]]: PR 内でインライン修正を提案するか、デフォルトブランチの品質指摘を 1～25 件まとめて Copilot に委任し、検証済みの修正 PR を作成します。
