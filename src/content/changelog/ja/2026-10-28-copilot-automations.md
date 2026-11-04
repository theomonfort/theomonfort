---
title: "Copilot Automations：チーム共有、外部連携、結果に基づく改善"
date: "2026-10-28"
summary: "4 つの発表をまとめて紹介。チームで共有する自動化、VS Code からのクラウド管理、実行結果に基づく改善、新しいトリガーとツール、AI クレジット上限が加わりました。"
category: copilot
event: universe-2026
status: "有料プラン / 共有は順次提供"
source: "https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations"
---

### リポジトリに属する共有ワークフロー

read 権限で閲覧、write 権限で編集できます。Copilot として動作し、AI クレジットはリポジトリの所有者に課金。作成者がチームを離れても継続します。Organization のリポジトリでは、組織に課金する Copilot cloud agent の利用を許可するポリシーが必要です。個人用か共有かは作成時に選び、後から変更できません。

### VS Code からクラウドで実行

Agents ウィンドウで、スケジュールや GitHub イベントに反応するクラウド Automations を作成、管理できます。端末の電源を切っても動きます。VS Code 1.144 で `chat.automations.cloud.enabled` を有効化します。

### 実際の結果から改善

修正されたラベル、採用されたレビューコメント、マージされた PR などを使って改善を提案します。**プロンプト、ツール、トリガーの変更にはレビューと承認が必要**で、勝手に設定を書き換えるわけではありません。

### トリガー、ツール、コスト制御の拡充

- **トリガー**：外部システムからの REST API 呼び出し、追加の GitHub イベント、別 Automation の成功や失敗。
- **ツール**：GitHub 操作の拡充に加え、リポジトリに設定した MCP サーバーのツールを明示的に選択。
- **AI クレジット上限**：実行ごとの上限ではその実行を停止。日、週、月の上限では期間がリセットされるまで新規実行を止めます。

Copilot Pro、Pro+、Max、Business、Enterprise で利用できます。共有 Automations は段階的に提供されています。

### 4 つの公式発表

- [チームで共有するワークフロー](https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations)
- [VS Code のクラウド Automations](https://github.blog/changelog/2026-10-28-create-and-manage-copilot-automations-in-visual-studio-code)
- [結果から学ぶ自己改善](https://github.blog/changelog/2026-10-28-copilot-automations-now-learn-from-outcomes-and-self-improve)
- [新しいツール、トリガー、コスト制御](https://github.blog/changelog/2026-10-28-new-tools-triggers-and-cost-controls-for-copilot-automations)
