---
title: "BYOK とオンデバイスモデル"
---

**BYOK とオンデバイスモデル**は、[[Copilot in VS Code]] と [[Copilot CLI]] のモデル選択を、GitHub がホストする最先端モデル群（`GPT / Codex`、`Claude`、`Gemini`、`Grok`、`MAI`、`Kimi`）や [[Copilot Fusion]] の外へ拡張します。

## カスタム / ローカルの 3 つの選択肢

1. **Bring Your Own Key（BYOK）**: 対応する Copilot クライアント内で、自分のクラウド LLM プロバイダーの API キーを直接接続します（CLI と VS Code では `2026-04-07`）。
2. **Copilot オンデバイスモデル**: 対応する開発者向けハードウェア上で小型のローカルモデルを直接実行し、低遅延のオフライン支援を利用します。
3. **BYOK 経由の Ollama**: BYOK の接続先をローカルの Ollama エンドポイントに向け、[[Fusion Effort & Execution Patterns]] と並行して、使い慣れた Copilot の画面のままオープンウェイトモデルをローカル実行します。
