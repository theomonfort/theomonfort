---
title: "Copilot Fusion：モデルの協調実行とローカルへの振り分け"
date: "2026-10-28"
summary: "モデル名ではなく、タスクにかける推論の強さを選択。Copilot Fusion がモデルの自動選択と複数モデルの協調実行をまとめ、対応するローカルモデルへの振り分けも実験的に提供します。"
category: copilot
event: universe-2026
status: "GA / ローカル振り分けは実験段階"
source: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion"
---

### 1 つの選択で、複数の実行パターン

- **Standard、High、Max**：日常の作業、難しいタスク、特に高度な推論に合わせて effort を選択します。
- **Single、Cascade、Critique**：1 モデルで処理、初回の回答をより強力なモデルへ引き継ぎ、別モデルのレビュー後に修正、という実行方法を使い分けます。
- **管理者による制御**：有効なモデルポリシーに従います。Fusion が使えるモデルの範囲や、既定の effort を管理できます。

Fusion は VS Code、Copilot app、CLI、JetBrains の全 Copilot プランで GA。実際に使用したモデルに応じて課金されます。

### ローカルモデルは別の実験的プレビュー

**Fusion Standard** で、対応するローカルモデルとクラウドモデルの振り分けをオプトインできます。対応 Windows 端末では Windows ML 経由で MAI Code 1.1 Flash をセットアップできます。CLI は Windows、macOS、Linux で手動設定した対応モデルも利用できますが、アプリの自動振り分けは現時点で Windows ML が対象です。

**ローカル推論でもオフラインにはなりません。** 振り分けの判断はクラウドで行われます。BYOK で追加した任意のモデルが、そのまま Fusion の対象になるわけではありません。

### 公式発表

- [Copilot Fusion：GA とモデルの協調実行](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion)
- [Copilot Fusion：ローカルモデルへの実験的な振り分け](https://github.blog/changelog/2026-10-28-github-copilot-fusion-now-supports-selection-of-local-models)
