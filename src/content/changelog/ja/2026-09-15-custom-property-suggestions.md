---
title: "カスタムプロパティの選択肢を Copilot が提案"
date: "2026-09-15"
summary: "リポジトリのカスタムプロパティを新規定義するとき、Copilot が許可する値の候補を提案。メタデータの分類を整え、Rulesets の対象を決めやすくします。"
category: administration
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/"
demo:
  - "未紹介。これまでのデモでは動作を確認できていないため、現時点では成功例として紹介しない。"
  - "Copilot Business / Enterprise の対象プランと、Repository custom property suggestions ポリシーを確認する。"
  - "Enterprise または Organization で新しい選択式プロパティを作成し、候補が表示されるか再確認する。例：single-select の internet-facing。"
---

### 覚えておきたいこと

- **提案するのは、定義時の「許可する値」。** 各リポジトリの値を自動で判定、設定する機能という意味ではありません。
- **プロパティに応じた候補。** 公式例では `internet-facing` の単一選択に `yes` / `no`、`FedRAMP` の複数選択にコンプライアンス関連の値が提案されます。
- **分類を揃え、ガバナンスに活用。** カスタムプロパティは、Rulesets を適用するリポジトリの絞り込みにも使えます。

### 利用条件

Copilot Business / Copilot Enterprise 向けパブリックプレビュー。Enterprise または Organization レベルで新しいプロパティを定義する場面が対象です。Owner は **Repository custom property suggestions** ポリシーで利用可否を制御できます。

デモが動かなかった原因は未特定です。機能の仕様確認と、手元での動作確認は分けて扱います。

[リポジトリのカスタムプロパティ管理（公式ドキュメント）](https://docs.github.com/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)
