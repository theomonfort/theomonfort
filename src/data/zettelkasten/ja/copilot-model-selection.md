---
title: "Copilot のモデル選択"
---

**Copilot のモデル選択**により、開発者や管理者はベンダーごとのアカウントを個別に管理する代わりに、ガバナンスの効いた 1 つの GitHub Copilot プラットフォーム内で Anthropic、OpenAI、Google、Microsoft のモデルを利用できます。

## 各環境でのモデルの割り当て

- **対話型モデル選択と `Auto`**: VS Code、Copilot CLI、Copilot App、GitHub.com で特定のプロバイダーモデルを選ぶか、**`Auto`** ルーティングで推論の深さ、速度、倍率に応じたコストのバランスを取ります。
- **カスタムエージェントごとの固定（`model:`）**: [[Agent Markdown Config]] で、[[Custom Agents]] の専門ペルソナを特定モデルに固定します。
- **サブエージェントごとの上書き（`/subagents`）**: [[Copilot CLI Subagents]] の `Rubber-duck` などの組み込みワーカーに異なるモデルファミリーを割り当て、独立したモデル間の批評を実施します。
- **機能の前提条件**: [[Copilot Dreaming]] などのバックグラウンド機能には、特定モデル（`GPT-6.1 Sol`）の有効化が必要です。
- **Enterprise ポリシー**: [[Copilot Managed Settings]] の既定の `model`（`2026-09-02`）、`autoTier`、Organization / Enterprise のモデルポリシーで一元管理します。
