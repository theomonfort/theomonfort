---
title: "カスタムエージェント"
---

**カスタムエージェント**（`.agent.md`）は、[[GitHub]] Copilot の専門プロファイルです。**ペルソナ、ツール、モデル、MCP サーバー、サブエージェントへの委任、判断ルール**をまとめ、Copilot が計画担当、デザインレビュアー、セキュリティレビュアー、テスターを明確に切り替えられるようにします。

## 呼び出すと何が起こるか

カスタムエージェントを呼び出すと（例: `/tdd-red add api endpoint`）、Copilot はその [[Agent Markdown Config]] を、常時適用される [[Custom Instructions]] に加えて読み込みます。

1. **利用可能なツールを調整**: `.agent.md` で許可されたツールだけに絞り込みます。
2. **エージェント定義を注入**: セッションに `CUSTOM AGENT` の定義を追加します。
3. **ユーザープロンプトを追加**: `SYSTEM & TOOLS -> INSTRUCTIONS -> CUSTOM AGENT -> PROMPT` の順に重ねます。

## エコシステムとのつながり

- [[Custom Agent Scopes]] の 4 つのレベルで公開し、[[GitHub Agent Finder]] で発見できます。[[Plugin Manifest & Namespace]] の `com.github.copilot/` 内に含めて配布できます。
- [[VS Code Agent Modes]] のホストモードや [[Copilot CLI Subagents]] の組み込みヘルパーとは異なり、負荷の高い調査を [[Subagents]] に委任し、[[Copilot Model Selection]] でモデルを固定できます。
