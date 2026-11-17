---
title: "Copilot Dreaming"
---

**Copilot Dreaming** *（パブリックプレビュー、既定でオフ）* は、[[GitHub]] Copilot の定期的なバックグラウンド保守ジョブです。[[Copilot Memory]] を改善し、リポジトリのカスタマイズ更新を自動提案します。

## 要件と提供範囲

- 対象の **Pro 以外の有料プラン**、[[Copilot Model Selection]] での **`GPT-6.1 Sol` の有効化**、Repository と Personal スコープでの**クラウドセッション同期**の有効化が必要です（データレジデンシー付き GHEC では利用できません）。
- ファイルやメモリに変更が生じない場合でも、バックグラウンド実行ごとに AI クレジットを消費します。

## 3 つのスコープと反映方法

| スコープ | Dreaming の更新対象 | 変更の反映方法 |
| --- | --- | --- |
| **Repository** | [[Copilot Memory]] の重複を除き、[[Repository Instructions]] と [[Agent Skills]] の改善を提案 | **プルリクエスト**を作成（リポジトリのファイルを変更するにはマージが必要） |
| **Personal** | 個人メモリの重複排除と更新 | [[Personal Instructions]] や個人のスキルファイルは変更しない |
| **Code Review** | マージ済み PR のレビュースレッドから得た内部レビューガイダンス | プルリクエストを作成せず、内部ガイダンスを更新 |
