---
title: "MCP サーバー"
---

**MCP サーバー**（**Model Context Protocol**、`modelcontextprotocol.io`）は、[[GitHub]] Copilot のホスト（VS Code、Copilot CLI、Copilot App、Cloud Agent、Visual Studio）を、**1つの MCP クライアント ↔ 1つの MCP サーバー**という構成で、リアルタイムの外部ツールやコンテキストへ接続します。

## ローカルの `stdio` とリモートの `HTTP` 実行

| モード | 実行方法 | 主な用途 |
| --- | --- | --- |
| **`stdio`** | Copilot がマシン上で**ローカルの子プロセス**としてサーバーを起動（`npx` / `npm exec`） | ローカルの Playwright、Context7、ファイルシステムツール、[[Agent Markdown Config]] 内のインラインサーバー |
| **`HTTP`（`SSE` / `streamable-http`）** | サーバーは**クラウド上のリモート環境**で動作し、Copilot が HTTP クライアントとして接続 | リモートの [[GitHub MCP Server]]（`https://api.githubcopilot.com/mcp/`）、SaaS API、[[Copilot Connectors]] |

## 設定、探索、ガバナンス

- [[MCP Configuration]] に従って `.mcp.json` または `~/.copilot/mcp-config.json` で設定し、[[GitHub Agent Finder]] で探索できます。[[Agent Plugins]] にまとめることができ、[[MCP Allowlist Governance]] によってエンタープライズ規模で管理します。
