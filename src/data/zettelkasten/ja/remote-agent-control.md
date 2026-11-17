---
title: "エージェントのリモート制御"
---

**エージェントのリモート制御**（`2026-05-18` に一般提供）は、ローカルで動作中の [[Copilot CLI]] または [[Copilot in VS Code|VS Code の Copilot]] ホストを、GitHub Mobile、Web（`insiders.vscode.dev/agents`）、[[VS Code Agents Window|VS Code の Agents ウィンドウ]]から操作する機能です。

## ホストのライフサイクルのルール

- **ホストはオンラインを維持する必要がある**：リモート制御は、ワークスペースとエージェントプロセスを実行しているマシンに接続します。[[Connected Cloud Continuity|接続されたクラウドでの継続]]や [[Copilot Cloud Agent]] と異なり、ノート PC のスリープやネットワーク切断でリモートアクセスが一時停止します。
- **オフラインは期限切れではない**：スリープや接続断でリモートホストに一時的に接続できなくなっても、セッションは削除されません。同期された会話履歴は、実行中プロセスのバックアップではありません。
- **CLI の再接続**：ホストマシンで CLI プロセスが停止した場合、そのワークスペースで `copilot --continue` または `copilot --resume` を実行すると、セッションが復元され、[[VS Code Session Targets|VS Code のセッション実行先]]とともにリモート制御が自動的に再有効化されます。
