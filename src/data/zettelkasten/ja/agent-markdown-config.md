---
title: "エージェントの Markdown 設定"
---

**エージェントの Markdown 設定**は、[[Custom Agents]] の `.agent.md` ファイル形式を定義します。YAML フロントマターで実行時の機能を固定し、Markdown 本文で役割、目標、成果物のルールを指定します。

## 固定する 8 つの要素

| 要素 | 制御する内容 | 例 |
| --- | --- | --- |
| **識別名（`name`）** | ペルソナの識別子 | `design-reviewer`、`Planner`、`Security Reviewer` |
| **説明** | ルーティングや選択の手がかり | `"Review UI differences between Figma and implementation"` |
| **ツール（`tools`）** | 許可するツール群 | `read`、`search`、`edit`、`agent`、`github/*`、`figma/*` |
| **エージェント（`agents`）** | 委任可能な [[Subagents]]（`agent` を `tools` に含める必要あり） | `Research`、`Reviewer`、`*` |
| **モデル（`model`）** | [[Copilot Model Selection]] で指定する LLM | `Claude Sonnet 4.5` |
| **対象（`target`）** | ホストの実行環境 | `github-copilot`、`vscode` |
| **MCP（`mcp-servers`）** | ペルソナ単位の [[MCP Configuration]] と [[MCP Servers]] | ローカルの `npx -y figma-mcp-server` |
| **プロンプト本文** | 判断基準、出力形式、厳守するルール | ブロッキングと非ブロッキングの指摘を分離し、コードは編集しない |

```yaml
---
name: design-reviewer
description: Review UI differences between Figma and implementation
target: github-copilot
model: Claude Sonnet 4.5
tools: [read, search, github/pull-request-read, figma/*]
mcp-servers:
  figma:
    type: local
    command: npx
    args: ["-y", "figma-mcp-server"]
---
```
