---
title: "変更提案"
---

**変更提案**により、人のレビュアー、[[Copilot Code Review]]、[[Copilot Autofix in PRs|PR の Copilot Autofix]] は、[[Inline Review Comments & Threads|インラインレビューコメントとスレッド]]に、1行または複数行の正確な置換コードを埋め込み、[[Pull Requests|プルリクエスト]]で提示できます。

## 構文と作成方法

コメントツールバーの **Add a suggestion**（`+-`）アイコンをクリックすると、選択した差分行が入力済みの `suggestion` コードブロックが挿入されます。

````markdown
```suggestion
const user = await findUserById(userId);
if (!user) return res.status(404).json({ error: "User not found" });
```
````

## 単独コミットと一括コミットの流れ

| 操作 | 場所 | コミットと CI の動作 |
| --- | --- | --- |
| **Commit suggestion** | **Conversation** または **Files changed** タブ（または VS Code の PR 差分ビュー） | そのパッチを即座に PR の head ブランチへコミットし、CI を起動 |
| **Add suggestion to batch** → **Commit suggestions** | **Files changed** タブで、人と AI の複数の提案を対象に操作 | 採用した N 件の提案を共著者トレーラー付きの**1つの原子的なコミット**にまとめ、[[Required Status Checks|必須ステータスチェック]]を N 回ではなく1回だけ実行 |

- レビュアーの指摘への対応に、単一の差分ブロックの置換を超えるファイル横断のリファクタリングが必要な場合、作者は局所的なパッチを適用する代わりに、[[PR Coding Agent Handoff|PR からコーディングエージェントへの引き継ぎ]]にコメントを渡せます。
