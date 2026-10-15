---
title: "HydraFusion の更新と HydraFusion Max の登場"
date: "2026-10-14"
summary: "HydraFusion のモデルプールが最新のフロンティアモデルに更新され、推論エフォートの調整と Cascade / Critique のワークフローも改善。より難しいタスク向けに、高い推論エフォートを使う HydraFusion Max が加わりました。"
category: copilot
status: "リサーチプレビュー"
source: "https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option/"
demo:
  - "準備：Copilot CLI は copilot --experimental で起動して /model から、VS Code は chat.copilot.hydraFusion.enabled を有効にしてモデルピッカーから、Copilot App は Settings → Experimental で HydraFusion をオンにしてモデルピッカーから HydraFusion Max を選ぶ。"
  - "デモ用リポジトリで、原因調査が必要なバグ修正など、目的と完了条件が明確な難しめのタスクを 1 つのプロンプトで依頼。進捗表示で、選ばれた実行パターン（Single / Cascade / Critique）と各ステップを見せる。"
  - "同じタスクを HydraFusion でも実行し、品質、所要時間、使用量を比べる。Copilot CLI では /usage でモデルごとの AI クレジット消費を確認できる。"
---

### HydraFusion の変更点

- **最新のフロンティアモデル**：モデルプールが更新され、Claude Opus 5.5、GPT-6 Astra、GPT-6.1 Sol、GPT-6 Luna が含まれるようになりました。タスクごとに使うモデルはワークフローによって変わります。
- **ステップごとの推論エフォート**：これまでは各モデルの既定値のみ。今回から、下書きは medium、レビューは high と段階ごとに調整し、下書きは効率よく、確認と改善には深い推論を使います。
- **Cascade**：最初の回答を判定するステップが入り、必要なときだけ修正を依頼するようになりました。
- **Critique**：テキストの要約に頼らず、ツールでワークスペースを直接確認。複数の批評モデルが並列でレビューします。

### HydraFusion Max とは

HydraFusion と同じ仕組みとワークフローを使い、より難しいタスクでのフロンティア級の性能に合わせて調整したオプションです。深さが重要な場面では、より高い推論エフォート（extra high）を使いつつ、オーケストレーションでトークン効率も考慮します。

- **HydraFusion**：速度、コスト、性能のバランス型で、トークンも適度に節約。一般的なエージェントタスク向け。
- **HydraFusion Max**：最も深い推論と徹底した分析が必要なタスク向け。

### 導入前に確認したいこと

- **利用環境**：VS Code、Copilot App、Copilot CLI のすべてで両方を選べます。
- **対象プラン**：Copilot Pro、Pro+、Business、Enterprise で、実験的機能またはプレビュー機能を有効にしている場合。Organization のモデルポリシーが適用されます。
- **課金**：これまでと同じく、使われた各モデルの通常料金で課金され、Auto の割引は適用されません。Max の使用量の目安は公表されていないため、同じタスクで HydraFusion と比べて確認するのがおすすめです。
- **リサーチプレビュー**：SLA はなく、本番ワークロード向けではありません。

3 つのワークフローと Auto との違いは [9 月 10 日の HydraFusion（CLI 版）](#2026-09-10-hydrafusion)、VS Code と Copilot App での有効化は [9 月 30 日の HydraFusion](#2026-09-30-hydrafusion-vscode-app) を参照。

[HydraFusion の使い方（公式ドキュメント）](https://docs.github.com/en/early-access/copilot/hydrafusion) / [フィードバック（GitHub Community）](https://github.com/orgs/community/discussions/206492)
