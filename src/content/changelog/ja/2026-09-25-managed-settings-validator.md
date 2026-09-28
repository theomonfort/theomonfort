---
title: "Enterprise の Copilot 管理設定を画面上で検証"
date: "2026-09-25"
summary: "JSON の構文エラー、未対応の設定、無効なチーム割り当てなど、Copilot のポリシー適用を妨げる不備を検出できるようになりました。"
category: administration
source: "https://github.blog/changelog/2026-09-25-enterprise-managed-settings-in-product-validator/"
---

### 覚えておきたいこと

- **確認場所**：Enterprise → AI controls → Agents → Copilot settings validation。問題のあるファイルと JSON パスを表示。不備がなければ、このセクションは表示されません。
- **検証対象**：`copilot/managed-settings.json`、`copilot/team-mappings.json` と、チーム割り当てから参照される設定ファイル。
- **修正方法**：`.github-private` リポジトリの既定ブランチに修正をコミットし、Agents ページを再読み込みして確認。

[Playbook：Copilot managed settings（スライド 10）](https://theomonfort.github.io/theomonfort/playbook/governance/?present=1&slide=10)
