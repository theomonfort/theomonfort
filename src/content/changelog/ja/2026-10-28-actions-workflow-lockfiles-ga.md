---
title: "Actions ワークフローの依存関係ロックファイルが GA"
date: "2026-10-28"
summary: "ワークフローには読みやすいタグを残し、実行するのはレビューしたコミット。依存関係ロックファイルが、データ所在地を含む GitHub Enterprise Cloud、Team、Free で GA になりました。"
category: actions
event: universe-2026
status: "GA"
source: "https://github.blog/changelog/2026-10-28-github-actions-workflow-lockfiles-are-generally-available"
demoLinks:
  - label: "actions/checkout@v4（移動可能なタグ）"
    url: "https://github.com/actions/checkout/tree/v4"
  - label: "ロックファイルに記録した checkout のコミット（11d5960）"
    url: "https://github.com/actions/checkout/commit/11d5960a326750d5838078e36cf38b85af677262"
  - label: "このサイトの actions.lock"
    url: "https://github.com/theomonfort/theomonfort/blob/main/.github/workflows/actions.lock"
  - label: "theomonfort-org → Actions ポリシーを作成"
    url: "https://github.com/organizations/theomonfort-org/settings/actions/rules/new?target=actions&enforcement=disabled"
demo:
  - "actions/checkout@v4 のリンクを開き、URL の /tree/v4 を見せる。v4 は別のコミットに付け替えられる名前（タグ）。次に固定したコミットのリンクを開き、完全な SHA が特定のリビジョンを識別することを説明する。@v4.4.0 のような完全なバージョンもタグであり、不変のコミットではない。"
  - "このサイトの actions.lock を開き、workflows（deploy.yml が使うアクション）と dependencies（各タグが指すコミット SHA と owner_id / repo_id）の 2 つのセクションを見せる。upload-pages-artifact の下に、推移的依存の upload-artifact が記録されている点も見せる。"
  - "このデモでは deploy.yml が actions/checkout@v4.4.0 を使い、actions.lock にコミット 11d5960a326750d5838078e36cf38b85af677262 を記録している。その SHA とコミット画面を照合し、現在の v4 タグが同じコミットを指すとは限らないことも伝える。ターミナルで gh actions-lock --verify .github/workflows/deploy.yml を実行し、ロックファイルが最新であることを確認する。"
  - "theomonfort-org の Settings → Actions → Policies → New policy で Require lockfile をオンにする。まず Evaluate モードで対象リポジトリとワークフローを絞り、Policy insights でブロックされる run を確認してから Active にする。"
---

### プレビューから正式提供へ

- **依存関係を固定**：`gh actions-lock` がアクションと推移的依存を `.github/workflows/actions.lock` に記録。タグが動いても、実行するのは記録したコミットです。
- **段階的に導入**：ワークフローごとに導入でき、導入済みのワークフローではすべての依存関係の記録が必要になります。
- **Dependabot と連携**：アクションのバージョン更新時に、対応するロックファイルの内容も同じ PR で再生成します。
- **強制と検証**：Enterprise、Organization、リポジトリの管理者がロックファイルを必須化できます。CI などでファイルを変更せずに最新かどうかを検証できます。

**ロックファイルが保証するのは選んだバージョンであり、安全性ではありません。** 固定する前に依存関係をレビューし、生成されたロックファイルとワークフローの変更をコミットします。

[以前のプレビュー発表](#2026-10-14-actions-workflow-lockfiles) / [公式ドキュメント](https://docs.github.com/actions/concepts/security/workflow-dependency-lockfiles) / [gh-actions-lock](https://github.com/github/gh-actions-lock)
