---
title: "CodeQL"
---

**CodeQL** は GitHub の意味的コード解析エンジンです。正規表現ベースのリンターとは異なり、ソースコードから AST、制御フローグラフ、データフローグラフを保持する**リレーショナルデータベース**を抽出し、そのデータベースに対して宣言的な `FROM / WHERE / SELECT` クエリを実行します。

## 製品を横断するエンジン

CodeQL は、[[GitHub]] の 3 つの異なる機能を支えています。

1. [[Code Scanning]]: **サニタイザー**が介在しない場合に、信頼できない**入力元**（HTTP 入力、CLI 引数）から危険な**出力先**（SQL クエリ、シェルコマンド、HTML 出力）への汚染を追跡します。C/C++、C#、Go、Java/Kotlin、JS/TS、Python、Ruby、Rust、Swift を対象に、SQL / コマンドインジェクション、SSRF、XSS、認証の欠陥、C/C++ のメモリ破損、[[GitHub Actions]] のワークフローインジェクションを検出します。
2. [[Code Quality]]: C#、Go、Java/Kotlin、JS/TS、Python、Ruby に対し、信頼性と保守性に関する 383 個の決定論的なルールを実行します。
3. [[Reachability Analysis]]: [[Dependabot]] で呼び出し経路を追跡し、脆弱なサードパーティ関数へアプリケーションコードから実際に到達できるかを証明します。

プライベートリポジトリでのホスト型 CodeQL 実行は、[[Actions Compute & Budgets]] の月間ランナー枠を共有します（セルフホストの [[Actions Runners]] では無料で実行できます）。社内のラッパーやカスタムフレームワークは、QL コードを書かずに YAML の**データ拡張（`models-as-data`）**で CodeQL に教えられます。詳細なデータフロー経路は [[Copilot Autofix]] に直接渡されます。
