---
title: "Copilot Cloud Agent"
---

**Copilot Cloud Agent** は、[[GitHub]] の非同期コーディングエージェントです。一時的な GitHub Actions ランナー上で動作し、リポジトリ全体のコンテキストを読み、ビルドとテストを実行します。IDE を閉じていても、検証済みのプルリクエストを作成します。

## 主な実行アーキテクチャ

- **追跡可能な Actions 実行環境**: すべてのセッションは GitHub Actions インフラ上で実行されます（[[copilot-setup-steps.yml]] でカスタマイズ可能）。セッションログをチームで確認できます。
- **複数のハーネス**: 標準の Copilot ハーネスに加えて、[[Partner Agents]] を通じて OpenAI Codex SDK と Claude Agent SDK に対応します。
- **PR 作成前の自己修復ゲート**: [[Cloud Agent Validation Tools]] を実行し、[[Cloud Agent MCP Configuration]] で外部コンテキストへ接続してから、[[Cloud Agent Entry Points]] のいずれかから開始した作業の PR を返します。
