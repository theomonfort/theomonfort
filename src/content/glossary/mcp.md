---
title: MCP（Model Context Protocol）
titleEn: Model Context Protocol
summary: AIエージェントと外部ツール／データを繋ぐ標準プロトコル。USB-Cのように、どのモデル・どのツールでも"差せば動く"。
icon: 🔌
color: cyan
order: 5
related: ['context-engineering', 'agent-skills']
links:
  - label: Model Context Protocol
    url: https://modelcontextprotocol.io/
  - label: MCP servers (GitHub)
    url: https://github.com/modelcontextprotocol/servers
---

LLM はそのままでは"閉じた箱"だ。MCP はその箱と外界（ファイル、DB、API、社内ツール）をつなぐ共通の口金。

**なぜ重要?**
- ベンダーロックイン回避 — Claude でも Copilot でも GPT でも同じ MCP server が刺さる
- 再利用 — 一度書いた MCP server がチームの全プロジェクト・全エージェントで使える
- 安全 — ツール呼び出しの境界がプロトコルで明示される

GitHub には公式の MCP server があり、Issues / PRs / Actions / Code search を AI から直接扱える。
