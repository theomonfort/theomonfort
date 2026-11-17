---
title: "サブエージェント"
---

**サブエージェント**は、GitHub Copilot が起動する分離されたワーカーセッションです。コードベースの詳細調査、テスト実行、独立したレビューを別のコンテキストウィンドウで行い、親の会話の肥大化を防ぎます。

## コンテキストを分離する流れ

1. **メインセッション**：`SYSTEM & TOOLS + INSTRUCTIONS + PROMPT` を保持し、[[Agent Markdown Config|エージェントの Markdown 設定]]で `agent` が有効な場合に範囲の限定されたタスクを委任します。
2. **独立したサブエージェントウィンドウ**：自身の新しいウィンドウを受け取り、大量の入力（`FILE 1`、`FILE 2`、`FILE 3`）を読んで、簡潔な `SUMMARY` にまとめます。
3. **要約の返却**：Copilot は中間のファイル出力を破棄し、親セッションに **`SUMMARY` だけ**を追加します。

## 組み込みの実装

- [[VS Code Agent Modes|VS Code のエージェントモード]]では内部の `searchSubagent` として、[[Copilot CLI Subagents|Copilot CLI のサブエージェント]]では7つの専門ワーカーとして提供され、ユーザー作成の [[Custom Agents|カスタムエージェント]]と併用できます。
