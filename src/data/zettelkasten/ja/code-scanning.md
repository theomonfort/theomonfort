---
title: "コードスキャン"
---

**コードスキャン**は [[Code Security]] の機能で、[[GitHub]] 上でコードを実行せずに静的解析（**SAST**）でセキュリティ脆弱性を見つけます。

Code Scanning は単一のスキャナーではなく、プラットフォーム上の統合機能です。[[CodeQL]]、[[AI Scan]]、[[Third-Party SARIF]] の検出結果は、同じ Security タブ、プルリクエストの差分注釈、[[Security Overview]] に集約されます。

## エンジン、設定、修正

- [[CodeQL]]: コードをクエリ可能なデータベースへコンパイルし、信頼できない入力元から危険な出力先への汚染経路を追跡する意味解析エンジン。
- [[AI Scan]]: CodeQL 対応外の言語に対する PR 解析、オンデマンドのリポジトリスキャン、AI アプリの間接プロンプトインジェクションを対象とした AI 脆弱性検出。
- [[Third-Party SARIF]]: Semgrep、Snyk、Checkmarx、DAST ツールの結果を統合アラートビューへ取り込み。
- [[Default vs Advanced Setup]]: ワークフローファイルなしで Organization 全体へワンクリック展開、または `.github/workflows/codeql.yml` によるカスタムビルドとコーディング規約パック。
- [[Rulesets & Merge Protection]]: 必須スキャンが高重大度アラートなしで完了するまで、プルリクエストを保留。
- [[Copilot Autofix]]: CodeQL のデータフローコンテキストを用いた、プルリクエストへのインラインパッチ提案。
- [[Agentic Autofix]]: デフォルトブランチに蓄積したアラートを 1～25 件 Copilot に割り当て、修正を検証してドラフト PR を作成。
- [[Security Campaigns]]: エンジニアリングチームと共有する、期限付きの修正バッチ。
