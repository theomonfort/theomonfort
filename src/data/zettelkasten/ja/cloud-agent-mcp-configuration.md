---
title: "Cloud Agent の MCP 設定"
---

**Cloud Agent の MCP 設定**は、[[Copilot Cloud Agent]] のセッションに外部の Model Context Protocol ツールを追加します。ローカル IDE の MCP ファイルとは別に管理します。

## 組み込みサーバーとカスタムサーバー

- **既定で有効**: **GitHub MCP Server** と **Playwright MCP Server** は、Cloud Agent のすべての実行で、設定不要で最初から有効です。
- **リポジトリ / Organization の設定**: [[copilot-setup-steps.yml]] で事前ステップを設定したうえで、GitHub.com の `Settings -> Code & automation -> Copilot -> MCP servers` にサーバーの JSON を貼り付けます（例: Context7 のようなリモート HTTP ドキュメントサーバーの追加）。
- **コネクターの注意点**: 対話型の [[Copilot Connectors]] はローカルとクラウドサンドボックスで動作しますが、Actions 上でホストされる Cloud Agent セッション内では動作しません。
