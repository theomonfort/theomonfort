---
title: "Copilot レビューによる承認"
---

**Copilot レビューによる承認**（**2026-10-28** から一般提供）では、[[Copilot Code Review]] がブロッキングの問題を検出しなかった場合、[[PR Review States]] に正式な `Approve` 判定を提出できます。常に `Comment` のみのレビューを投稿する動作から拡張されました。

## ポリシー制御と安全性の意味

| 観点 | 動作 |
| --- | --- |
| **オプトインのガバナンス** | **既定で無効**。リポジトリ、Organization、Enterprise の管理者が、[[Review Effort Levels]] の `Max` とは**別に**設定 |
| **ゲートの承認数への算入** | 有効にすると、問題のない Copilot の `Approve` レビューが [[Required Pull Request Reviews]] の `Required approvals` に算入される。低リスクのリポジトリ、または [[CODEOWNERS]] と組み合わせて利用 |
| **古い承認の自動取り消し** | PR ブランチに新しいコミットをプッシュすると、Copilot の以前の承認を**自動で取り消す**。再レビューを依頼するか、[[Automatic Copilot Review]] の `Review new pushes` を有効にして、新しい判定を取得 |
| **スレッドの自動解決** | コメントの自動解決（`2026-09-11`）と組み合わせ、後続のプッシュで元の欠陥が修正されると、Copilot 自身の [[Inline Review Comments & Threads]] を解決 |

## 推奨する Enterprise の運用パターン

- 重要度の高いリポジトリでは、人間の [[CODEOWNERS]] レビューを [[PR Rulesets]] 内で必須に保ちます。一方、社内ツール、ドキュメント、単独メンテナーのリポジトリなど、2 人目の人間のレビュアーが提供を遅らせる場合には Copilot レビューによる承認を有効にします。
