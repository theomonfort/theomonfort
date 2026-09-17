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

**候補となるモデルは 3 つとも同じ**で、選択時の優先度が異なります。

VS Code、Copilot CLI、GitHub Copilot app に順次展開中。料金は選んだ優先度ではなく、Auto が実際に選択したモデルに基づきます。有料サブスクライバー向けの Auto 利用分の 10% 割引は継続します。

### Hydra と HydraFusion

**Auto はモデルのルーティングに HyDRA を使用します。** HydraFusion はこの仕組みを発展させ、単独実行、上位モデルへの引き継ぎ、別モデルによるレビューといった処理の流れも選びます。Copilot CLI で実験的なリサーチプレビューとして利用できます。

### モデルが切り替わるタイミング

以前はキャッシュを維持するため、セッション開始時とコンパクション後に再評価していました。現在の **CLI と Copilot App は、会話中もモデルを定期的に再評価**します。毎ターンではなく、最新のプロンプトと直近の会話を基に判断します。

[Auto model selection（公式ドキュメント）](https://docs.github.com/copilot/concepts/models/auto-model-selection)

[HydraFusion：モデル選択から処理の流れの自動選択へ（公式ブログ）](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)

[Playbook：モデル選びと Auto モード（スライド 9）](https://theomonfort.github.io/theomonfort/playbook/token-optimization/?present=1&slide=9)
