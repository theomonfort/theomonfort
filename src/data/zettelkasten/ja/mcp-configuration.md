---
title: "MCP の設定"
---

**MCP の設定**は、ローカルの `stdio` とリモートの `HTTP` の [[MCP Servers]] を、リポジトリ共有のワークスペース、個人のマシン、プラグイン、カスタムエージェントへ接続します。

## ワークスペースと個人の設定ファイル

| 範囲 | ファイルパス | トップレベルのキーと注意点 |
| --- | --- | --- |
| **共有リポジトリ** | `.mcp.json`（リポジトリルート） | トップレベルの `mcpServers` オブジェクトを使用。Git にコミットするが、**認証情報は決して含めない**。VS Code（`Customizations -> MCP Servers -> Workspace +`）では、試験的な `chat.mcp.workspaceRootConfig.enabled` を有効化。 |
| **従来の VS Code** | `.vscode/mcp.json` | トップレベルの `servers` を使用（ガイド付き設定では非推奨）。**移行時の注意**: CLI と VS Code 共用の `.mcp.json` へ移すには、ファイル名だけでなく `servers` を `mcpServers` に変更する必要がある。 |
| **個人のグローバル設定** | `~/.copilot/mcp-config.json` | 全ワークスペースに適用する、そのマシンだけの設定（VS Code の `Global -> Copilot Global`）。 |

## Copilot CLI とパッケージ化

```bash
# After trusting the workspace folder
copilot mcp add <server-name>
copilot mcp list
```

- プラグインごとの `mcp.json`（[[Plugin Manifest & Namespace]]）、またはペルソナごとの `mcp-servers:`（[[Agent Markdown Config]]）にも埋め込めます。
