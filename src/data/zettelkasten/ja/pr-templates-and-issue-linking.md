---
title: "PR テンプレートと Issue のリンク"
---

**PR テンプレートと Issue のリンク**は、[[Pull Requests|プルリクエスト]]で作者が提供する背景情報を標準化し、変更がデフォルトブランチにマージされた際の Issue のクローズを自動化します。

## プルリクエストテンプレート

| ファイルの場所 | 適用範囲と選択 |
| --- | --- |
| `.github/PULL_REQUEST_TEMPLATE.md`（またはリポジトリルート / `docs/`） | 新規 PR の説明欄に、概要の記入項目、テスト計画、ロールアウト時の注意事項、チェックリストをあらかじめ入力 |
| `.github/PULL_REQUEST_TEMPLATE/*.md` | URL クエリパラメーター（`?template=release.md`、`?template=hotfix.md`）で選択できる複数の名前付きテンプレート |
| Organization の `.github` リポジトリ | ローカルテンプレートを定義していない Organization 内のリポジトリに、代替のデフォルト PR テンプレートを提供 |

## Issue を自動リンクするキーワード

- PR の説明やコミットメッセージに `Closes #123`、`Fixes #123`、`Resolves #123`（別リポジトリなら `Closes owner/repo#123`）を含めると、**Development** サイドバーに PR がリンクされます。
- いずれかの [[Merge Methods|マージ方法]]で PR をリポジトリのデフォルトブランチにマージすると、リンクされた Issue が自動的に閉じられ、GitHub Projects のステータス遷移が起動します。
- 構造化された PR の説明は [[Copilot Code Review]] も改善します。明確な意図をレビュアーに伝え、[[PR Diff & File Views|PR の差分とファイル表示]]のコード変更と比較できるようにします。
