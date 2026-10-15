---
title: "Actions ワークフローの依存関係をロックファイルで固定"
date: "2026-10-14"
summary: "ワークフローが使うアクションを、.github/workflows/actions.lock に記録したコミットに固定できるようになりました。タグやブランチが後から動かされても、レビューしたコードだけが実行されます。"
category: actions
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview/"
demoLinks:
  - label: "このサイトの actions.lock"
    url: "https://github.com/theomonfort/theomonfort/blob/main/.github/workflows/actions.lock"
  - label: "theomonfort-org → Actions ポリシーを作成"
    url: "https://github.com/organizations/theomonfort-org/settings/actions/rules/new"
demo:
  - "このサイトの actions.lock を開き、workflows（deploy.yml が使うアクション）と dependencies（各タグが指すコミット SHA と owner_id / repo_id）の 2 つのセクションを見せる。upload-pages-artifact の下に、推移的依存の upload-artifact が記録されている点も見せる。"
  - "deploy.yml では actions/checkout@v4 が @v4.4.0 のような完全なバージョンに書き換えられている。ターミナルで gh actions-lock --verify .github/workflows/deploy.yml を実行し、ロックファイルが最新であることを確認する。"
  - "theomonfort-org の Settings → Actions → Policies → New policy で Require lockfile をオンにする。まず Evaluate モードで対象リポジトリとワークフローを絞り、Policy insights でブロックされる run を確認してから Active にする。"
---

### 何が変わる？

- **これまでの問題**：`actions/checkout@v4` の `v4` のようなタグやブランチは、後から別のコミットに付け替えられます。アクションが乗っ取られると、自分のリポジトリを一切変更していなくても、次の実行で別のコードが動きます。
- **ロックファイル**：`.github/workflows/actions.lock` に、各アクション（推移的依存と再利用ワークフローを含む）の参照先コミットを記録します。ワークフローには `@v4` のような参照を残したまま、実行されるのは記録したコミットです。`owner_id` と `repo_id` で、同名の別リポジトリにすり替わっていないかも確認されます。
- **`gh actions-lock` 拡張**：ロックファイルの生成と更新に加え、CI 向けの `--verify` と、オフラインで pre-commit に使える `--verify-local` があります。ワークフローは 1 つずつ導入できます。
- **Require lockfile ポリシー**：Enterprise、Organization、リポジトリの Actions ポリシーで、ロックファイルに載っていないワークフローの実行をブロックできます。
- **Dependabot**：導入済みワークフローのアクションを更新するとき、同じ PR でロックファイルも更新します。未導入のワークフローを自動で導入することはありません。

### 注意点

**ロックは「いつも同じコード」を保証するだけで、そのコードが安全かどうかは保証しません。** ロックする前に依存関係をレビューします。初回は `@v4` が `@v4.4.0` のように書き換わるので、差分も確認します。許可するアクションを指定している場合、許可リストはロック済みの SHA で照合されるため、タグで指定したエントリは一致しなくなります。GitHub Enterprise Cloud（データ所在地を含む）、Team、Free でパブリックプレビューです。

[ワークフロー依存関係のロックファイル（公式ドキュメント）](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles) / [ロックファイルの作成手順](https://docs.github.com/en/actions/how-tos/secure-your-work/lock-workflow-dependencies) / [Require lockfile の段階的な導入](https://docs.github.com/en/actions/how-tos/administer/enforce-workflow-lockfiles) / [gh-actions-lock](https://github.com/github/gh-actions-lock)
