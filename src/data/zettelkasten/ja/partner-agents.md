---
title: "パートナーエージェント"
---

**パートナーエージェント**により、開発者は単一のエンタープライズ契約と共通の AI クレジットプールで、サードパーティーのコーディングエージェント基盤、具体的には [[Claude Code on GitHub|GitHub 上の Claude Code]] と [[OpenAI Codex on GitHub|GitHub 上の OpenAI Codex]] を [[GitHub Copilot]] と併用できます。

## 2つの実行環境、それぞれ3つのエージェント基盤

| 環境 | 利用可能なエージェント基盤 | 適したワークフロー |
| --- | --- | --- |
| **IDE エージェント**（対話型） | **Copilot**、**Codex**、**Claude** | [[Copilot in VS Code|VS Code の Copilot]]や [[Copilot Surfaces|Copilot の各利用環境]]での同期的なローカル調査、リファクタリング、ペアコーディング |
| **クラウドエージェント**（非同期コーディング） | **[[Copilot Cloud Agent]]**、**Claude Coding Agent**、**Codex Coding Agent** | [[Agent HQ & Agent Teams|Agent HQ とエージェントチーム]]および [[SDLC Stage 02 Code|SDLC ステージ02：コード]]での、Issue から PR への非同期委任と並列タスク |

## エージェント基盤の選択、ガバナンス、課金の統合

- **エージェント基盤とチャットモードは別物**：パートナーエージェントに切り替えると、Copilot 独自の基盤ではなく、そのプロバイダーのエージェントループと SDK に実行を委任します。PR の成果物には引き続き [[Cloud Agent Validation Tools|クラウドエージェントの検証ツール]]が適用されます。
- **単一のサブスクリプションとオプトインポリシー**：[[Partner Agent Governance|パートナーエージェントのガバナンス]]で有効にするまでは既定で無効です。すべての実行は [[Shared AI Credit Pool|共有 AI クレジットプール]]を [[Usage-Based Billing|従量課金]]の仕組みで消費し、[[Copilot Multi-Model Catalog & BYOK|Copilot のマルチモデルカタログと BYOK]]を補完します。
