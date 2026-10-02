---
title: "Dynamic workflows：マルチエージェントの手順をコードで定義"
date: "2026-10-01"
summary: "Copilot CLI / Copilot App / Copilot SDK で、自動化された手順と複数のエージェントの作業を組み合わせた処理の流れをコードで定義できます。同じ手順で繰り返し実行でき、一時停止や再開も可能です。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app/"
demoUrl: "https://docs.github.com/copilot/how-tos/use-copilot-agents/use-dynamic-workflows"
demo:
  - "準備：Copilot App は設定不要。CLI では /update で最新版にし、/experimental on（または --experimental で起動）。デモ用リポジトリで、変更済みのファイルが数件ある状態にしておく。"
  - "変更されたファイルを一覧にし、エージェントにレビューさせて、指摘をまとめる review-changed という dynamic workflow を作成してください。"
  - "作成しただけでは実行されないことを伝え、「使える dynamic workflow は？」と聞いて登録を確認。次に、対象を 2〜3 ファイルに絞り、AI クレジットの上限を指定して実行を依頼する。"
  - "CLI の /workflows または App の Workflows ボタンで、フェーズ、サブエージェント、AI クレジットの使用量を見せる。実行中のランは一時停止して、あとから再開できる。"
---

### 覚えておきたいこと

- **何ができる？**：コマンドやツールの実行、タスクの並列実行、次のステージへの構造化された結果の受け渡し、サブエージェント同士の相互検証、確認のための一時停止と再開。
- **`/fleet` との違い**：`/fleet` は分担のしかたを Copilot が毎回決める。dynamic workflow は、手順、条件、引き継ぎをワークフローの作者がコードで決める。
- **作成と共有**：Copilot に作成を依頼するか、組み込みのガイダンスを見ながら自分で書く。実体は Copilot の拡張機能で、既定ではそのセッション限り。個人またはリポジトリの拡張機能ディレクトリにコピーすると再利用や共有ができる。
- **上限を設定**：同時実行数、サブエージェントの総数、実行時間、AI クレジットの上限を指定可能。クレジットの上限は目安で、超えることもあるため、まず小さい範囲で試す。
- **提供範囲**：すべての Copilot プランで利用可能。CLI では `copilot workflow run` でターミナルやスクリプトから直接実行できる（権限は事前に付与が必要）。

[dynamic workflows の仕組み（公式ドキュメント）](https://docs.github.com/en/copilot/concepts/agents/dynamic-workflows) / [autopilot、/fleet との違い](https://docs.github.com/en/copilot/concepts/agents/dynamic-workflows#how-dynamic-workflows-differ-from-autopilot-and-fleet)
