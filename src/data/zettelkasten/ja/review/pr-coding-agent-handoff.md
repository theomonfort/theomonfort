---
title: "PR からコーディングエージェントへの引き継ぎ"
---

**PR からコーディングエージェントへの引き継ぎ**は、[[Pull Requests|プルリクエスト]]でコードレビューと実装をつなぎます。[[Inline Review Comments & Threads|インラインレビューコメントとスレッド]]、CI の失敗、マージコンフリクトを、PR ブランチへコミットをプッシュする非同期コーディングエージェントに委任します。

## プルリクエストの修正を委任する方法

| トリガー | リリース / 仕組み | PR ブランチで行われる処理 |
| --- | --- | --- |
| **Copilot のレビューフィードバックを適用** | [[Copilot Code Review]] のコメントからワンクリックで引き継ぎ（`2026-05-19`） | Actions ランナー上で Copilot Cloud Agent を起動し、単純な [[Suggested Changes|変更提案]]を超える複数ファイルの修正を実装 |
| **コメントで `@copilot` にメンション** | レビュースレッドまたは PR 本文に `@copilot <instructions>` とコメント | PR の差分、レビュースレッドのコンテキスト、リポジトリの指示を読み、テスト済みのコミットをプッシュ（または後続の [[Draft Pull Requests|ドラフトプルリクエスト]]を作成） |
| **パートナーエージェント（`@claude`、`@codex`）** | `@claude`（Anthropic Claude Agent SDK）または `@codex`（OpenAI Codex SDK）にメンション | 既存の GitHub Copilot クレジットで課金されるパートナークラウドエージェントを実行（**既定で無効**、Enterprise、Organization、個人の Copilot 設定で有効化） |
| **CI とコンフリクトのクイック修正** | 失敗した Actions のワンクリック修正（`2026-05-18`）と3クリックでのコンフリクト解消（`2026-04-13`） | PR ページから直接、失敗した [[Required Status Checks|必須ステータスチェック]]を修復、または競合する差分をリベース（[[Agent Merge]] で継続的に行うことも可能） |

## プッシュ前の組み込み自己検証

- コミットをプッシュする前に、Copilot Cloud Agent は**4つの組み込みチェック**で自身の作業を検証します（`Settings -> Copilot -> Cloud agent -> Validation tools`、GHAS ライセンス不要）：**CodeQL**、**Copilot Code Review**、**Secret Scanning**、**依存関係の脆弱性チェック**。
