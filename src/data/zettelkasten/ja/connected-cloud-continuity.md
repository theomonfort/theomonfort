---
title: "クラウドセッションの継続利用"
---

**クラウドセッションの継続利用**（有料プランで `2026-10-28` に GA）は、GitHub がホストする 1 つの Linux クラウドサンドボックスセッションを、[[GitHub Copilot App]]、GitHub Mobile、GitHub.com、[[Copilot in VS Code]]、[[Copilot CLI]]、Slack、Microsoft Teams をまたいで稼働させ、再開可能にします。

## クラウドサンドボックスセッションの動作

- **ノート PC を閉じても実行**: [[Local & Cloud Sandboxes]] の分離された GitHub ホスト型 Linux コンピューティングで動作し、ノート PC が切断されても作業を継続します。
- **スナップショットの保持**: 停止したセッションは状態のスナップショットを保存し、**総実行時間 1 時間の上限はありません**（コンピューティングとストレージはクラウドポリシーに従い引き続き従量課金されます）。
- **開始時に選択**: セッション作成時に `Cloud` を選びます（例: [[VS Code Session Targets]] または `copilot --cloud`）。ホストに紐づく [[Remote Agent Control]] とは異なり、ローカルセッションを実行途中で移行することはできません。
