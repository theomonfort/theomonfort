---
title: "VS Code Chat のショートカットとコマンド"
---

**VS Code Chat のショートカットとコマンド**は、[[Copilot in VS Code|VS Code の Copilot]]内でプロンプト、コンテキストの添付、カスタマイズを操作します。

## 主なショートカットと操作

| 操作 | 動作 |
| --- | --- |
| **`⌃⌘I`（macOS）/ `Ctrl+Alt+I`（Win/Linux）** | Chat ビューを開く（`2026-11-06` 時点で更新されたショートカット） |
| **`/` スラッシュコマンド** | `/plan`、`/chronicle`、`/env`、`/compact`、`/rename`、`/yolo`、`/create-canvas`、`/vscode-pet` |
| **`#` / Add Context（`+`）** | ファイル、シンボル、画像、Issue、プルリクエストをプロンプトに直接添付 |
| **`Chat: Open Customizations`** | スキル、カスタムエージェント、指示、フック、MCP サーバー、プラグインのビジュアル管理画面を開く |

## エージェント基盤に関する注意

- 既定の Copilot エージェント基盤では、従来の `@` チャット参加者は非推奨でサポートされません。直接質問して `#` コンテキストを添付するか、[[VS Code Session Targets|VS Code のセッション実行先]]を切り替えてください。
- 並列マルチセッションのショートカット（`Alt+Enter`、`⌘1`-`⌘9`）は、[[VS Code Agents Window|VS Code の Agents ウィンドウ]]と [[Git Worktree Isolation|Git Worktree による分離]]でも利用できます。
