---
title: "GitHub MCP Server"
---

**GitHub MCP Server**（`github/github-mcp-server`）は、[[GitHub]] 公式の [[MCP Servers|MCP サーバー]]実装です。Copilot CLI と Cloud Agent に標準接続されており、AI が `gh` コマンドのようにリポジトリを直接操作できます。

## 組み込みのプラットフォーム機能

- **主要なリポジトリ操作**: [[Issues & Sub-issues|Issue とサブ Issue]]、プルリクエスト、GitHub Actions の実行、コード検索の参照と管理。
- **セキュリティツールセット**: GitHub MCP Server によるシークレットスキャン（GA `2026-05-05`）と依存関係スキャン（パブリックプレビュー `2026-05-05`）。
- **IDE から Copilot Spaces にアクセス**: リモート HTTP で接続し、`copilot_spaces` ツールセットを有効にすると、IDE の Agent モードで [[Copilot Spaces]] 用の `list_copilot_spaces` と `get_copilot_space` を利用できます。

```json
{
  "servers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "X-MCP-Toolsets": "default,copilot_spaces"
      }
    }
  }
}
```

- **ガバナンスの例外**: 組み込みサーバーなので、[[MCP Allowlist Governance|MCP 許可リストのガバナンス]]で `allowedMcpServers: []` または `deniedMcpServers` を設定しても利用できます。
