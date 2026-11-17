---
title: "PR レビューの状態"
---

**PR レビューの状態**は、[[Pull Requests|プルリクエスト]]の **Files changed → Review changes** から送信する3種類の正式なレビュー判定を定義し、[[Required Pull Request Reviews|必須のプルリクエストレビュー]]に基づくマージ可否を制御します。

## 3つの判定

| レビュー状態 | マージゲートへの影響 | 使用する場面 |
| --- | --- | --- |
| **Comment（コメント）** | 情報提供のみ。必須の承認数を満たさず、マージもブロックしない（会話の解決が必須で、スレッドが未解決のままの場合を除く） | マージを妨げない質問、アーキテクチャに関するメモ、[[Draft Pull Requests|ドラフトプルリクエスト]]への早期フィードバック |
| **Approve（承認）** | 対象ブランチの `Required approvals` のしきい値（`1-10`）にカウント | コードロジック、テスト、[[PR Diff & File Views|PR の差分とファイル表示]]を確認した後の承認 |
| **Request changes（変更を要求）** | そのレビュアーが承認するか、権限のあるメンテナーが古いレビューを却下するまでマージをブロック | マージ前に修正すべき正確性の問題、仕様との不一致、テスト不足 |

## 保留中レビューの一括送信とガバナンスのガードレール

- **レビュー開始と単独コメントの違い**：**Start a review** をクリックすると、[[Inline Review Comments & Threads|インラインレビューコメントとスレッド]]や [[Suggested Changes|変更提案]]が **Submit review** まで `Pending` 状態で保留されます。行ごとの通知ではなく、1つにまとめたメール / 通知を送信します。
- **Actions の自動承認を無効化**：Enterprise / Organization の Actions ポリシー（`Settings -> Actions -> General`）で **Allow GitHub Actions to create and approve pull requests** を **Disabled** に設定します（既定では有効）。これにより、ワークフローが人によるコードレビューを迂回できなくなります。
- **AI による承認**：人の判定とは別に、管理者は低リスクの PR で [[Copilot Review Approvals|Copilot レビューの承認]]を必須の承認数にカウントすることを任意で許可できます。
