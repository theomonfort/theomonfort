---
title: "Copilot Fusion"
---

**Copilot Fusion**（`Project HydraFusion`、[[Copilot in VS Code]]、[[Copilot CLI]]、[[GitHub Copilot App]]、JetBrains で `2026-10-28` に GA）は、[[GitHub]] Copilot のマルチモデル調整機能です。ユーザーが推論の労力レベルを選び、Fusion がリクエストごとにモデルの利用計画と振り分けを動的に行います。

## 4 つの計画シグナルとベンチマーク効果

- **プロンプトごとの評価**: 各プロンプトを**推論**、**コード生成**、**デバッグ**、**ツール利用**の観点で評価し、Enterprise のモデルポリシー、データレジデンシー、FedRAMP ルール、キャッシュの境界を尊重します。
- **測定された効果**: Artificial Analysis Coding Agent Index で **60**（`Fusion Max`）を達成し、平均トークン / API コストを**約 50%**、タスク時間を**約 40%**削減します。DeepSWE ではコストを最大 **77%** 削減します（`Fusion High` と単一の最先端モデルの比較）。
- **実行と課金**: [[Fusion Effort & Execution Patterns]] と組み合わせ、モデル間の [[Rubber Duck Review]] を補完します。有料プランでは `2026-11-30` まで開始記念の**モデルコスト 30% 割引**を提供します（それ以外は通常のモデルごとの AI クレジット料金で、Fusion の追加料金はありません）。
