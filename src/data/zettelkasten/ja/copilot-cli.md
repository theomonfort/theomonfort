---
title: "Copilot CLI"
---

**Copilot CLI**（`copilot`、`2026-02-25` に GA）は、[[GitHub]] のリポジトリ全体を対象としたコーディング、シェル実行、計画（`Shift+Tab`）、スキル、MCP ツールを、あらゆるターミナルから直接利用できるようにします。

## Copilot CLI と VS Code Chat

| 観点 | Copilot CLI | VS Code Chat |
| --- | --- | --- |
| **インターフェース** | すぐに使える軽量なターミナル UI（`vim`、SSH、ローカルファイル） | [[Copilot in VS Code]] の視覚的なエディター差分、ファイルツリー、デバッガー |
| **機能の提供速度** | 実験的な機能（`/fleet`、`/limits`、[[Rubber Duck Review]]）を先行提供 | 成熟したワークフローをエディター向けに磨いて採用 |
| **サブエージェントと検索** | ネイティブな [[CLI Built-in Subagents]] + GitHub Blackbird の意味検索 | 共通の Copilot ハーネスを通じて対応を拡大中 |
| **パートナーハーネス** | Copilot のハーネス内で Claude / OpenAI モデルを使用（ネイティブなパートナーハーネスはなし） | ネイティブな [[Partner Agents]] を直接切り替え |

## 主な機能

- 対話型の [[CLI Terminal UI]]、[[CLI Slash Commands & Fleet]]、[[CLI Session Credit Limits]]、[[Local & Cloud Sandboxes]]、[[Remote Agent Control]]、CI に対応する [[CLI Programmatic Mode]]。
