---
title: "パートナーエージェントのガバナンス"
---

**パートナーエージェントのガバナンス**は、GitHub の3層のポリシー階層で [[Partner Agents]]（デフォルトは `OFF`）を制御します。

## 3層のポリシー階層

| レベル | 管理者 | 設定パス | 範囲 |
| --- | --- | --- | --- |
| **エンタープライズ** | Enterprise Owner | `Enterprise -> Policies -> Copilot` | 全組織の上限を設定（`Allow` / `Block` / `No policy`） |
| **組織** | Org Owner | `Organization -> Settings -> Copilot -> Coding agent` | [[Claude Code on GitHub]] と [[OpenAI Codex on GitHub]] を個別に有効 / 無効化 |
| **個人（Pro / Pro+）** | 個々のユーザー | `Settings -> Copilot -> Cloud agent -> Partner agents` | 個人リポジトリでパートナーエージェントを有効化 |

## ローカル IDE との適用範囲の違い

- 上記のクラウドポリシーは、GitHub がホストするパートナーエージェントを管理します。ローカルの VS Code セッションは、`github.copilot.chat.claudeAgent.enabled` などの VS Code 設定で別に制御します。
