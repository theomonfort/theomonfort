---
title: "Copilot コードレビュー：Organization への課金とレビュー依頼の制限"
date: "2026-10-08"
summary: "Copilot ライセンスを持つメンバーのコードレビューを、メンバーの利用枠ではなく Organization に課金できるようになりました。レビューを依頼できる人を、Organization または Enterprise が付与したライセンスの保有者に限定することもできます。"
category: review
status: "一般提供"
source: "https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls/"
demo:
  - "Organization の Settings → Copilot → Code review を開き、Choose how members with a Copilot license are billed（Member / Organization）を見せる。設定は変更しない。"
  - "同じ画面で Only allow Copilot code review to be triggered by authorized users を見せ、Organization でオンにするとリポジトリ管理者はオフにできないことを説明する。"
  - "リポジトリの Settings → Copilot → Code review を開き、リポジトリ単位の同じトグルを見せる。"
---

### 覚えておきたいこと

- **Organization に課金**：既定では、Copilot ライセンスを持つメンバーのレビューはそのメンバーの利用枠を消費し、枠を使い切るとレビューは失敗します。**Organization** を選ぶと、リポジトリを所有する Organization に課金され、メンバーの枠を消費しません。
- **前提条件**：Organization への課金には AI クレジットの有料利用（paid usage）の有効化が必要で、予算の設定は任意です。手動と自動の両方のレビューに適用されます。変わるのは課金先のみで、Copilot コードレビューの利用権限は付与されません。
- **外部ライセンスを制限**：既定では、有料の Copilot ライセンス（個人ライセンスや他の Organization のライセンスを含む）を持つ人なら、アクセスできるリポジトリでレビューを依頼できます。**Only allow Copilot code review to be triggered by authorized users** をオンにすると、自社の Organization または Enterprise が付与したライセンスのみ受け付けます。
- **制限の範囲**：権限のない人にはレビュアーとして Copilot が表示されず、API からの依頼でもレビューは始まりません。その人の個人設定による自動レビューも実行されませんが、リポジトリや Organization のルールセットによる自動レビューは実行されます。

### 設定方法

- **Enterprise**：AI controls → Agents → Copilot code review → Choose how members with a Copilot license are billed（Member / Organization / Let organizations decide）
- **Organization**：Settings → Copilot → Code review → Choose how members with a Copilot license are billed と Only allow Copilot code review to be triggered by authorized users。後者をこの階層でオンにすると全リポジトリに適用され、リポジトリ管理者はオフにできません。
- **リポジトリ**：Settings → Copilot → Code review → Only allow Copilot code review to be triggered by authorized users

レビュー 1 回あたりの費用の目安は [10 月 2 日のコードレビュー](#2026-10-02-code-review-api-effort) を参照。

[コードレビューの設定（公式ドキュメント）](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) / [コードレビューの課金](https://docs.github.com/en/copilot/concepts/agents/code-review#code-review-usage-and-billing) / [外部ライセンスによるレビュー依頼](https://docs.github.com/en/copilot/concepts/agents/code-review#reviews-requested-with-an-external-copilot-license)
