---
title: "Actions ワークフローの依存関係ロックファイルが GA"
date: "2026-10-28"
summary: "ワークフローには読みやすいタグを残し、実行するのはレビューしたコミット。依存関係ロックファイルが、データ所在地を含む GitHub Enterprise Cloud、Team、Free で GA になりました。"
category: actions
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available"
---

### プレビューから正式提供へ

- **依存関係を固定**：`gh actions-lock` がアクションと推移的依存を `.github/workflows/actions.lock` に記録。タグが動いても、実行するのは記録したコミットです。
- **段階的に導入**：ワークフローごとに導入でき、導入済みのワークフローではすべての依存関係の記録が必要になります。
- **Dependabot と連携**：アクションのバージョン更新時に、対応するロックファイルの内容も同じ PR で再生成します。
- **強制と検証**：Enterprise、Organization、リポジトリの管理者がロックファイルを必須化できます。CI などでファイルを変更せずに最新かどうかを検証できます。

**ロックファイルが保証するのは選んだバージョンであり、安全性ではありません。** 固定する前に依存関係をレビューし、生成されたロックファイルとワークフローの変更をコミットします。

[以前のプレビュー紹介とデモ](#2026-10-14-actions-workflow-lockfiles) / [公式ドキュメント](https://docs.github.com/actions/concepts/security/workflow-dependency-lockfiles) / [gh-actions-lock](https://github.com/github/gh-actions-lock)
