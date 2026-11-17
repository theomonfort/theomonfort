---
title: "SDLC ステージ02：コード"
---

**SDLC ステージ02：コード**は、[[AI Developer Platform|AI 開発者プラットフォーム]]の実装フェーズです。クラウド上の開発コンテナと、同期型および非同期型の [[Copilot Surfaces|Copilot の利用環境]]を組み合わせます。

## 5つの主要なコーディング環境

- **Copilot Chat**（`Copilot`）：VS Code、Visual Studio、JetBrains、Xcode、Eclipse、Neovim 内で使う対話型の Ask、Edit、Agent モード（[[Copilot Interaction Modes|Copilot の対話モード]]）。
- **Cloud Agent**（`Copilot`）：[[SDLC Stage 01 Plan|SDLC ステージ01：計画]]で割り当てた Issue をドラフトプルリクエストに変える、非同期のバックグラウンドエージェント。[[Partner Agents on One Subscription|1つのサブスクリプションで使うパートナーエージェント]]と併用できます。
- **Copilot CLI**（`Copilot`）：ターミナルネイティブのエージェント型コーディング、シェル自動化、複数サブエージェントによる `/fleet` 実行。
- **Copilot App**（`Copilot`）：並列セッション、Projects、[[Copilot Automations|Copilot の自動化]]、Computer Use を操作するデスクトップワークスペース。[[Innovate Pillar|Innovate の柱]]に位置付けられます。
- **GitHub Codespaces**（`Native Platform`）：依存関係と拡張機能を事前に読み込んだ、セットアップ不要で再現可能なクラウドコンテナ。

すべての変更はブランチとドラフトプルリクエストに集約され、[[SDLC Stage 03 Review|SDLC ステージ03：レビュー]]に進みます。その過程では [[Copilot Fusion]] による動的なルーティングが行われます。
