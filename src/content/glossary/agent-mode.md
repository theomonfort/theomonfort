---
title: エージェントモード
titleEn: Agent Mode
summary: IDE内でAIが自律的にコード変更・コマンド実行・テスト実行までこなすモード。"会話"から"実行"へ。
icon: ⚔️
color: magenta
order: 13
category: develop
related: ['cli', 'cloud-agent', 'harness-engineering']
links:
  - label: VS Code Agent mode
    url: https://code.visualstudio.com/docs/copilot/copilot-vscode-features
---

チャットモードは "助言"、agent mode は "実行"。エージェントが計画 → 編集 → 実行 → 検証を自分で回す。

**いつ使う?**
- ✅ 複数ファイルにまたがる変更
- ✅ リファクタリング、依存更新、移行
- ✅ "テストが通るまで直す" 系のループ
- ❌ 仕様が曖昧なまま走らせる（事故の元）

**安全に使う3つの心得:**
1. 必ずブランチを切る
2. 小さなタスクに刻む
3. 出力を読む（自動承認はしない）
