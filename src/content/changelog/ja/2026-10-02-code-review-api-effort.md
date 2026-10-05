---
title: "Copilot コードレビュー：API からの依頼と Balanced の既定化"
date: "2026-10-02"
summary: "REST / GraphQL API から Copilot のコードレビューを依頼し、リクエストごとにレビューの深さを指定できるようになりました。レビューの深さの Default は Balanced になりました。"
category: review
status: "一般提供"
source: "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level/"
demoUrl: "https://docs.github.com/en/rest/pulls/review-requests#request-reviewers-for-a-pull-request"
demo:
  - "準備：Copilot コードレビューが使えるデモ用リポジトリで、小さな変更を含む PR を 1 件用意し、gh CLI にログインしておく。"
  - "gh api -X POST repos/OWNER/REPO/pulls/NUMBER/requested_reviewers -f 'reviewers[]=copilot-pull-request-reviewer[bot]' を実行（OWNER / REPO / NUMBER はデモ用 PR に置き換える）。PR の Reviewers に Copilot が追加され、レビューが始まることを見せる。"
  - "レビュー完了後、概要コメントで重大度と使われた effort level を確認する。"
  - "Organization の Settings → Copilot → Code review を開き、Default（Balanced を使用）と Lite の選択肢を見せる。設定は変更しない。"
---

### 覚えておきたいこと

- **API でレビューを依頼**：REST / GraphQL API から Copilot にレビューを依頼可能。レビューの深さはリクエストごとに任意で指定できます。独自のスクリプト、ワークフロー、社内ツールからレビューを開始できます。
- **Balanced が既定に**：8 月 28 日の予告どおり、9 月 28 日から Default は Balanced を使用。新規と既存のリポジトリ、Organization が対象で、明示的に Lite を選んでいた設定はそのまま。
- **費用に注意**：Balanced は Lite より深く分析するぶん、AI クレジットの消費が増えます。目安は Lite が $0.05〜$1、Balanced が $0.25〜$5（レビュー 1 回あたり、Actions の実行時間は別）。
- **対象プラン**：Copilot Pro、Pro+、Max、Business、Enterprise。

### Lite に戻すには

管理する階層で Default を Lite に変更します。各階層は上位の設定を上書きできます。

- **Enterprise**：AI controls → Agents → Copilot code review
- **Organization / リポジトリ**：Settings → Copilot → Code review
- **個人**：プロフィール → Copilot settings → Copilot → Code review

個人設定と Enterprise の既定値は [9 月 23 日のコードレビュー設定](#2026-09-23-code-review-settings) を参照。

[コードレビューの設定（公式ドキュメント）](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) / [レビューの深さと費用の目安](https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption)
