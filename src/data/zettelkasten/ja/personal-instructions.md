---
title: "個人用の指示"
---

**個人用の指示**は [[Custom Instructions|カスタム指示]]の優先順位（`Personal > Repository > Organization`）の最上位に位置し、関わるすべてのプロジェクトでスタイル、回答言語、個人の習慣を反映します。

## 個人用の指示の保存場所

| 利用環境 | 設定パス |
| --- | --- |
| **Copilot CLI** | `~/.copilot/copilot-instructions.md` |
| **VS Code** | ユーザー設定（`github.copilot.chat.*.instructions`） |
| **GitHub.com** | Copilot Chat → プロフィールメニュー → **Personal Instructions** |

## 適用範囲の境界

- 自分のセッションだけに適用され、[[Repository Instructions|リポジトリの指示]]と異なりリポジトリにコミットされることはありません。
- [[Copilot Dreaming]] の個人実行で改善されるのは [[Copilot Memory]] だけで、個人用の指示ファイルは**一切変更されません**。
