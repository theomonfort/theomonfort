---
title: "フック"
---

**フック**は、独自のシェル / PowerShell スクリプトを [[GitHub]] Copilot のセッションに直接組み込みます。`sessionStart`、`userPromptSubmitted`、`preToolUse`、`postToolUse`、`errorOccurred`、`sessionEnd` という**6つのライフサイクルイベント**を捉えます。

## 決定的な強制と確率的な指示

- [[Custom Instructions|カスタム指示]]（[[Organization Instructions|組織の指示]]を含む）は、LLM の判断に依存する自然言語の依頼です。
- **フックはモデルの外で実行され、ランタイムの処理自体を停止します**。セキュリティや運用ポリシーを決して回避させてはならない場面で不可欠です。

## イベントの種類と設定

- **実行をブロックするゲート**: ツール実行前に拒否や確認を行えるのは、[[PreToolUse Guardrails|ツール実行前のガードレール]]（`preToolUse`）だけです。
- **ライフサイクルのテレメトリとクリーンアップ**: 残る5つのイベントは [[Observation & Audit Hooks|監視と監査のフック]]として動作します。
- **ファイルと利用環境**: `.github/hooks/*.json`、または [[Plugin Manifest & Namespace|プラグインのマニフェストと名前空間]]の `com.github.copilot/` 内で定義します。環境ごとの読み込み方法と JSON キーは [[Hooks Configuration & Surfaces|フックの設定と利用環境]]に記載されています。
