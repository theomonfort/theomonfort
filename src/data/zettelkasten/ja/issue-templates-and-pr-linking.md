---
title: "Issue テンプレートと PR のリンク"
---

**Issue テンプレートと PR のリンク**は、GitHub の [[Issues & Sub-issues|Issue とサブ Issue]]で作業を受け付け、完了する方法を標準化します。

## 構造化された受付と自動クローズ

- **Issue テンプレートとフォーム**: リポジトリで定義する YAML / Markdown フォーム（`.github/ISSUE_TEMPLATE/`）により、チームメンバーと Copilot Cloud Agent のために、再現手順、環境情報、受け入れ基準を最初から必須にします。
- **PR の自動リンク（`Closes #123`）**: プルリクエストに `Closes #123` または `Fixes #123` を記載すると、コード変更を元の Issue にリンクし、マージ時に Issue を自動クローズして、[[GitHub Projects]] の項目の状態も更新します。
