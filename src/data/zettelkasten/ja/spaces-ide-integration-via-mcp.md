---
title: "MCP による Spaces の IDE 統合"
---

**MCP による Spaces の IDE 統合**は、リモート GitHub MCP Server を通じて、IDE の Agent モード内で [[Copilot Spaces]] を直接利用できるようにします（`list_copilot_spaces` と `get_copilot_space`）。

## `copilot_spaces` ツールセットを有効にする

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

## ワークフローへの統合

- [[Copilot in VS Code|VS Code の Copilot]]、[[Copilot CLI]]、[[GitHub Copilot App]] で利用でき、[[Spaces Source Types & Sharing|Spaces のソース種別と共有]]で定義される呼び出し元の権限を尊重します。
- 厳選したシステムのコンテキストを持つ Space と、[[Copilot Cloud Agent]] またはローカルの Agent モードを組み合わせ、実装を実行します。
