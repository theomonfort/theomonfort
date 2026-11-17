---
title: "IDE でのローカル Copilot レビュー"
---

**IDE でのローカル Copilot レビュー**は、**VS Code** と **GitHub Copilot CLI** で、未コミットの作業ツリーやブランチの差分に対して [[Copilot Code Review]] を直接実行します。`git push` や [[Pull Requests|プルリクエスト]]の作成前に利用できます。

## PR 作成前のローカル利用環境

| 利用環境 | コマンド / 入口 | ワークフロー |
| --- | --- | --- |
| **VS Code のソース管理** | **Source Control** パネル → **Copilot: Review uncommitted changes**（きらめきアイコンのレビューボタン） | ステージ済み / 未ステージの編集を調べ、エディターの差分ビューでバグをインライン表示し、提案パッチをワンクリックで適用 |
| **Copilot CLI `/review`** | `/review` を、対話型の `copilot` ターミナルセッション内で実行 | IDE を開かず、ターミナルで作業ツリーやブランチの差分を分析 |
| **CLI の `rubber-duck` サブエージェント** | `/subagents` で別のモデルを設定し、`rubber-duck` を呼び出す | PR 作成前にモデル間で批評（例: あるモデル系列が書いたコードを別系列のモデルでレビュー） |

## 共通のリポジトリ基準

- ローカルレビューは `.github/copilot-instructions.md`、パスを限定した `.instructions.md`、`AGENTS.md`（[[Review Custom Instructions|レビューのカスタム指示]]）、個人またはリポジトリの `.agent.md` プロファイル（[[Custom Agents in Code Review|コードレビューのカスタムエージェント]]）に自動的に従います。[[Automatic Copilot Review|Copilot の自動レビュー]]や人間のレビュアーが PR を見る前に、明らかな欠陥を取り除きます。
