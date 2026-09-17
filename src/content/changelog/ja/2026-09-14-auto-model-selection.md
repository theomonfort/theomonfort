---
title: "Auto のモデル選択に、コストと品質の優先度を指定"
date: "2026-09-14"
summary: "Copilot Auto に Efficiency、Balance、Intelligence の 3 つの選択肢が追加。モデルの自動選択で何を優先するかを指定できます。"
category: copilot
status: "順次展開中"
source: "https://github.blog/changelog/2026-09-14-configure-cost-and-quality-in-copilot-auto-model-selection/"
---

### 覚えておきたいこと

- **Efficiency**：コストを重視。短く、単純なタスク向け。
- **Balance**：コスト、品質、応答時間のバランスを重視。日常的な作業向け。
- **Intelligence**：品質を重視。複雑なタスク向け。

### 3 つのモデルセットではない

**候補となるモデルは 3 つとも同じ。** 違うのは選択時の優先度です。Intelligence でも、docstring の追加などの単純な依頼には小さく効率的なモデルが選ばれる場合があります。

VS Code、Copilot CLI、GitHub Copilot app に順次展開中。料金は選んだ優先度ではなく、Auto が実際に選択したモデルに基づきます。有料サブスクライバー向けの Auto 利用分の 10% 割引は継続します。

### HydraFusion と混同しない

こちらは **モデル選択の優先度**、HydraFusion は **モデルと実行パターンの組み合わせ** を選ぶ仕組みです。単純に「どちらが上」とするより、同じタスクで品質、コスト、時間を比較したいところです。

[Auto model selection（公式ドキュメント）](https://docs.github.com/copilot/concepts/models/auto-model-selection)
