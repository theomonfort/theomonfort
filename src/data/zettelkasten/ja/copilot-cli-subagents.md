---
title: "Copilot CLI のサブエージェント"
---

**Copilot CLI のサブエージェント**は、組み込みの [[Subagents]] として [[Copilot CLI]] 内で動作します。分離されたコンテキストウィンドウで専門作業を実行し、探索、テストログ、批評によるメイン会話の肥大化を防ぎます。`.agent.md` の [[Custom Agents]] とも円滑に組み合わせられます。

## CLI の組み込みサブエージェント

| サブエージェント | 主な役割 |
| --- | --- |
| **Explore** | 親のコンテキストを圧迫しない、高速で読み取り専用のコードベース検索と Q&A |
| **Task** | ビルド、テスト、lint を実行し、簡潔な成功の要約または完全な失敗出力を返す |
| **General-purpose** | CLI の全ツールを使った複数ステップの推論と編集 |
| **Rubber-duck** | [[Rubber Duck Review]] で使う、計画とコードの独立した批評役（異なるモデルファミリーを割り当ててモデル間の批評を実施） |
| **Code-review** | 実際のバグとロジックエラーに焦点を当てた有用な差分レビュー |
| **Research** | 検証済みの出典引用を伴う、複数リポジトリの GitHub 調査と Web 調査 |
| **Security-review** | 確度の高い脆弱性分析 |

## 確認とサブエージェントごとのモデル振り分け

- [[CLI Slash Commands & Fleet]] の `/subagents` でアクティブなサブエージェントを確認し、[[Copilot Model Selection]] で個別にモデルを上書きできます。または、ローカルの `*.agent.yaml` 定義を `~/.copilot/pkg/<platform>/<version>/definitions/` で確認します。
