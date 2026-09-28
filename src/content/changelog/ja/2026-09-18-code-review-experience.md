---
title: "Copilot レビューの進捗表示と修正提案が改善"
date: "2026-09-18"
summary: "再レビューごとの指摘の変化を追いやすく。コメントを残す依頼を尊重し、修正提案の一括適用では変更に合ったコミットメッセージを生成します。"
category: review
status: "一般提供"
source: "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience/"
---

### 覚えておきたいこと

- **概要が見やすく**：指摘を `Open`、`Resolved since last review`、`Previously missed` に分類。重大度とレビューに使った effort level も確認できます。
- **Previously missed**：既存の変更から再レビューで新たに見つかった指摘は、概要内だけに表示。追加のインラインコメントは作成されません。
- **自動解決が改善**：コメントを開いたままにするよう返信すると、その依頼を尊重。後続コミットに応じて `Won't Fix` や `Incorrect` の理由付きで解決することもあります。
- **修正提案の一括適用**：対象となるバッチをすべてまとめてコミットすると、選んだ変更に合ったコミットタイトルと必要に応じた説明を生成します。
