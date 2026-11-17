---
title: "gh stack CLI"
---

**gh stack CLI**（`github/gh-stack`）は、ターミナルから [[Stacked Pull Requests|積み重ねたプルリクエスト]]を作成、リベース、送信するための公式 GitHub CLI 拡張です。GitHub 標準の Web、Mobile、API のスタック機能と併用できます。

## インストールとワークフロー

```bash
# Install the official GitHub CLI extension
gh extension install github/gh-stack
```

| 機能 / 利用環境 | スタック型ワークフローでの役割 |
| --- | --- |
| **`gh stack` CLI** | 依存するブランチの層をローカルで作成。下位層のレビューフィードバックを修正した後、上位ブランチを再構成し、リンクされた [[Pull Requests|プルリクエスト]]を1コマンドでプッシュ / 作成 |
| **GitHub.com と GitHub Mobile** | チェーン内の各 PR に標準のスタックナビゲーションバーを表示。層の順序、承認状況、CI の状態、下位からのマージ操作を提示 |
| **REST、GraphQL、Webhook** | CI ボットと [[Agent Merge]] 向けに、スタックへの所属、ベースブランチの変更イベント、アトミックなスタックマージ操作を公開 |

## 人間にもエージェントにも小さく扱いやすい層

- 機能を `150-300` 行の層へ `gh stack` で分割すると、レビュアーはスキーマ、バックエンド API、UI の変更を別々に確認できます。同時に [[Copilot Code Review]] と [[Required Status Checks|必須ステータスチェック]]が各層を並列に検証します。
