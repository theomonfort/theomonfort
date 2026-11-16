---
title: "Copilot の Gemini 4：Argon、Carbon、Hydrogen を整理"
date: "2026-11-13"
summary: "Google の新しい Copilot モデルをまとめて紹介。複雑なタスク向けの Argon、セキュリティ重視の Carbon、高速なエージェント処理向けの Hydrogen。Argon と Gemini 3.8 Flash は 12 月 14 日までに移行が必要です。"
category: copilot
source: "https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot"
---

### 3 つのリリース、それぞれの特徴

| モデル | 発表日 | 想定する用途 |
| --- | --- | --- |
| **Gemini 4 Argon** | 10 月 13 日 | 複雑なコーディング、エージェント処理、推論。GitHub の初期検証では、Copilot CLI での改善とエッジケースの丁寧な確認が紹介されています。 |
| **Gemini 4 Carbon** | 11 月 10 日 | 複雑なコーディング、エージェント処理、推論に対応し、安全なコード生成とセキュリティ関連の作業を重視。 |
| **Gemini 4 Hydrogen** | 11 月 13 日 | Google の最新 Flash モデル。高速で効率的なエージェント型コーディング、ツール利用、複数ステップの処理向け。Gemini 3.8 Flash より指示追従を改善。 |

### どれを試す？

- **複雑な変更やセキュリティ重視の作業**：大規模なリファクタリングや、セキュリティを重視する実装で Carbon を試します。
- **高速なエージェント処理**：反復的な変更や、複数ステップでツールを呼び出す作業で Hydrogen を試します。
- **Argon または Gemini 3.8 Flash を利用中**：推奨される移行先を今から検証します。両モデルは **2026 年 12 月 14 日**に Copilot での提供を終了予定です。移行先は **Argon → Carbon**、**Gemini 3.8 Flash → Hydrogen**。

これは評価を始めるための目安であり、すべての用途に共通する順位ではありません。実際のタスクで結果を比較してください。

### 利用条件と管理

**2026 年 11 月 16 日時点**で、Carbon と Argon は **Pro+、Max、Business、Enterprise** が対象です。Hydrogen は **Pro** にも対応します。3 モデルとも一般提供されており、段階的に展開されます。

各発表には VS Code、Visual Studio、Copilot CLI、coding agent、Copilot app、JetBrains IDE、Xcode、Eclipse が記載されています。Carbon と Hydrogen は github.com と GitHub Mobile にも対応し、Hydrogen は Copilot SDK にも対応します。

Business と Enterprise の管理者はモデルポリシーでアクセスを制御できます。既定のモデル有効化では、全体の既定設定がオフ、または対象モデルが明示的に無効化されていない限り、新モデルが有効になります。提供終了モデルを明示的に指定するワークフローや連携は更新してください。

各リリースでは、従量課金でプロバイダーの定価が適用されると案内されています。定期的な処理に使う前に、最新の料金を確認してください。

### 公式発表

- [10 月 13 日：Gemini 4 Argon](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot/)
- [11 月 10 日：Gemini 4 Carbon](https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot/)
- [11 月 13 日：Gemini 4 Hydrogen](https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/)
- [11 月 13 日：12 月に予定されるモデルの提供終了](https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december/)

### ドキュメント

- [GitHub Copilot でサポートされるモデル](https://docs.github.com/copilot/reference/ai-models/supported-models)
- [GitHub Copilot のモデルと料金](https://docs.github.com/copilot/reference/copilot-billing/models-and-pricing)
