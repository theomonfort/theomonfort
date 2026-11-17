---
title: "1つのサブスクリプションで使うパートナーエージェント"
---

**1つのサブスクリプションで使うパートナーエージェント**により、開発者は単一のエンタープライズ契約と共通の AI クレジットプールで、サードパーティーのコーディングエージェント基盤（**Anthropic Claude** と **OpenAI Codex**）を [[GitHub Copilot]] と併用できます。

## 2つの実行環境、それぞれ3つのエージェント基盤

| 環境 | 利用可能なエージェント基盤 | 適したワークフロー |
| --- | --- | --- |
| **IDE エージェント**（対話型） | **Copilot**、**Codex**、**Claude** | [[Copilot Surfaces|Copilot の利用環境]]での同期的なローカル調査、リファクタリング、ペアコーディング |
| **クラウドエージェント**（非同期コーディング） | **Copilot Cloud Agent**、**Claude Coding Agent**、**Codex Coding Agent** | [[SDLC Stage 02 Code|SDLC ステージ02：コード]]と [[Agent HQ & Agent Teams|Agent HQ とエージェントチーム]]での、Issue から PR への非同期委任と並列タスク |

## 課金とガバナンスの統合

- **単一のサブスクリプション**：すべてのパートナーエージェント実行で **GitHub Copilot AI クレジット**を直接消費します。個別の調達契約が不要になり、[[Copilot Multi-Model Catalog & BYOK|Copilot のマルチモデルカタログと BYOK]]とともにモデルの多様性を維持できます。
