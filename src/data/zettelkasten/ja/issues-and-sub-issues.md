---
title: "Issue とサブ Issue"
---

[[GitHub]] が2009年に導入した **Issue とサブ Issue** は、コードベースのすぐ近くでバグ報告、タスク、機能リクエストを追跡し、[[GitHub Discussions]] でまとまったアイデアを実行へ進めます。

## 機能の内訳

| 機能 | できること | 意義 |
| --- | --- | --- |
| **Issue** | 個別のバグ、タスク、リクエストを追跡 | ラベル、担当者、マイルストーン、期限で管理 |
| **サブ Issue** | 大きなエピックを子 Issue に分割 | 親 Issue に自動の `% done` 進捗バーを表示 |
| **テンプレートとリンク** | [[Issue Templates & PR Linking]] で処理 | 構造化されたフォームでの受付と、マージ時の `Closes #123` による自動クローズ |
| **型付きメタデータ** | 組織共通の [[Issue Fields]] で情報を追加 | リポジトリを横断して優先度、作業量、目標日を統一 |
| **Copilot への割り当て** | Issue を Copilot Cloud Agent に委任 | [[Custom Instructions]] と [[Custom Agents]] を使ってリポジトリを調査し、ドラフト PR を作成 |

## 参考となるトラッカーとツール

- 大規模な主要オープンソースのトラッカー: `microsoft/vscode`、`rust-lang/rust`、`vercel/next.js`、`github/docs`。
- [[GitHub Projects]] で視覚的に予定を管理し、エージェントは [[GitHub MCP Server]] を通じてプログラムで操作します。
