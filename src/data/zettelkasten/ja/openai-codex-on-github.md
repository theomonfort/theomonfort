---
title: "GitHub 上の OpenAI Codex"
---

**GitHub 上の OpenAI Codex** は、OpenAI のコーディング実行基盤を [[Copilot in VS Code]] と [[Copilot Cloud Agent]] に導入します。[[Partner Agents]] の一部として提供され、[[Partner Agent Governance]] で有効化します。

## VS Code と Cloud Agent の実行の違い

| 利用環境 | 設定とモデル |
| --- | --- |
| **VS Code** | Marketplace の **OpenAI Codex** 拡張機能をインストールし、**Sign in with Copilot** をクリック。Copilot API 経由の OpenAI モデル（`Auto`、`GPT-5.2-Codex`、`GPT-5.3-Codex`、`GPT-5.4`、`GPT-5.4 nano`）に対応 |
| **Cloud Agent** | タスク委任時に **OpenAI Codex SDK** を選択。GitHub Actions ランナー上で [[Cloud Agent Validation Tools]] を利用し、課金は Copilot に統合 |
