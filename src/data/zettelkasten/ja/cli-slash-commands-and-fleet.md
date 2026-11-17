---
title: "CLI のスラッシュコマンドと Fleet"
---

**CLI のスラッシュコマンドと Fleet** は、[[Copilot CLI]] 内で対話セッションの調整、サブエージェントへの並列分配、作業の引き継ぎを行います。

## 主なスラッシュコマンド

| コマンド | 動作 |
| --- | --- |
| **`/fleet [PROMPT]`** | 複数の作業を含む計画を、並列の [[CLI Built-in Subagents]] に分配 |
| **`/delegate`** | 現在のタスクを非同期で [[Copilot Cloud Agent]] へ、[[Cloud Agent Entry Points]] を通じて引き継ぐ |
| **`/chronicle` と `/share`** | セッションの作業ログを確認、または会話記録をエクスポート / 共有 |
| **`/context` と `/compact`** | トークン使用量の確認と会話履歴の圧縮 |
| **`/ide`、`/model`、`/env`、`/task`** | [[Copilot in VS Code]] への接続、モデル切り替え、環境の確認、バックグラウンドタスクの確認 |

## 予算の共有

- [[CLI Session Credit Limits]] でセッション上限を設定すると、並列の `/fleet` サブエージェントすべてが同じクレジット上限を共有します。
