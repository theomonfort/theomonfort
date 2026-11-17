---
title: "パートナーエージェント"
---

**パートナーエージェント**により、開発者はサードパーティーのコーディングエージェント基盤、具体的には [[Claude Code on GitHub|GitHub 上の Claude Code]] と [[OpenAI Codex on GitHub|GitHub 上の OpenAI Codex]] を、[[Copilot in VS Code|VS Code の Copilot]]や [[Copilot Cloud Agent]]（[[GitHub]] 上）内で直接実行できます。

## エージェント基盤の選択と課金の統合

- **エージェント基盤とチャットモードは別物**：パートナーエージェントに切り替えると、Copilot 独自の基盤ではなく、そのプロバイダーのエージェントループと SDK にタスクを委任します。
- **単一のサブスクリプション**：課金、AI クレジット、レート制限、[[Cloud Agent Validation Tools|クラウドエージェントの検証ツール]]は既存の GitHub Copilot サブスクリプションに集約され、ベンダーとの別契約は不要です。
- **オプトイン制御**：[[Partner Agent Governance|パートナーエージェントのガバナンス]]で有効にするまでは既定で無効です。
