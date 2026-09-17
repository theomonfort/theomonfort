---
title: "HydraFusion：モデルだけでなく、解き方も自動で選ぶ"
date: "2026-09-10"
summary: "Copilot CLI の /experimental に Project HydraFusion が登場。タスクに応じてモデルと実行パターンを選び、品質、コスト、待ち時間のバランスを取ります。"
category: copilot
status: "リサーチプレビュー"
source: "https://github.blog/changelog/2026-09-10-github-copilot-weekly-releases-september-7/"
demo:
  - "Copilot CLI の /experimental で HydraFusion を有効にし、モデル選択で HydraFusion を選ぶ。"
  - "最初は、目的と完了条件が明確な実装タスクを 1 つのプロンプトで依頼する。長い対話を重ねる使い方より、単発のまとまったタスクが今回のプレビューの推奨対象。"
  - "通常の Auto と同じ課題で比較し、完了品質、所要時間、使用量を確認する。常に安い、常に高品質とは決めつけない。"
---

### 覚えておきたいこと

- **Single**：選んだ 1 つのモデルで直接解く。
- **Cascade**：効率的なモデルでまず回答を作り、品質の基準を満たさなければ、より強力なモデルへ引き継ぐ。
- **Critique**：別のモデルファミリーによる読み取り専用のレビューを挟み、元のモデルが 1 回修正する。

### Auto との違い

Auto が主に「どのモデルに任せるか」を選ぶのに対し、HydraFusion は **どのモデルを、どの流れで組み合わせるか** まで選びます。常に複数モデルを使うわけではありません。

週次リリースの中から HydraFusion に絞ったピックアップです。品質やコストの公開評価は、特定条件でのオフライン実験の結果であり、実際のタスクで同じ効果を保証するものではありません。機能や名称も今後変わる可能性があります。

[HydraFusion の仕組みと評価結果（公式ブログ）](https://github.blog/ai-and-ml/github-copilot/project-hydrafusion-frontier-quality-via-multi-model-orchestration/)
