---
title: "HydraFusion が VS Code と Copilot App でも利用可能に"
date: "2026-09-30"
summary: "Copilot CLI に続き、VS Code と Copilot App のモデルピッカーでも HydraFusion を選べるように。各ステップで何をしているかが見やすくなり、長いタスクでも進捗がリアルタイムに表示されます。"
category: copilot
status: "リサーチプレビュー"
source: "https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app/"
demoUrl: "https://docs.github.com/early-access/copilot/hydrafusion"
demo:
  - "準備（VS Code）：1.140 以降または Insiders で chat.copilot.hydraFusion.enabled を有効にし、Copilot Chat のモデルピッカーで Auto の下にある HydraFusion を選ぶ。"
  - "準備（Copilot App）：最新版に更新し、Settings → Experimental で HydraFusion をオンにして、モデルピッカーで選ぶ。Business / Enterprise では、管理者がプレビュー機能を許可している必要がある。"
  - "デモ用リポジトリで、複数ファイルにまたがる修正など、目的と完了条件が明確なタスクを 1 つのプロンプトで依頼。各ステップの進捗を見せ、完了後に回答にカーソルを合わせて、使われたモデルを確認する。"
  - "同じタスクを Auto でも実行し、品質、所要時間、使用量を比べる。常に安い、常に高品質とは決めつけない。"
---

### 何が新しい？

- **VS Code と Copilot App に対応**：これまでは Copilot CLI の `/experimental` のみ。早期のフィードバックで最も要望が多かった点です。
- **処理内容が見やすく**：ワークフローの各ステップで何をしているかが、より明確に表示されます。
- **リアルタイムの進捗**：進捗の更新頻度が上がり、長いタスクでもまだ処理中であることがわかります。

### 導入前に確認したいこと

- **対象プラン**：Copilot Pro、Pro+、Business、Enterprise。Business / Enterprise では、Organization または Enterprise の設定でプレビュー機能の許可が必要。
- **課金**：使われた各モデルの通常料金で課金。Auto の割引は適用されず、1 つのタスクで複数のモデルを使うと AI クレジットの消費が増えることがあります。
- **モデルポリシーを尊重**：プランと Organization / Enterprise のポリシーで許可されたモデルだけを使用。使うモデルは選べません。
- **リサーチプレビュー**：SLA はなく、本番ワークロード向けではありません。

Single / Cascade / Critique の 3 つのワークフローと Auto との違いは、[9 月 10 日の HydraFusion（CLI 版）](#2026-09-10-hydrafusion) を参照。

[HydraFusion の使い方（公式ドキュメント）](https://docs.github.com/early-access/copilot/hydrafusion) / [フィードバック（GitHub Community）](https://github.com/orgs/community/discussions/206492)
