---
title: "Slack / Teams の Copilot：会話の文脈をもっと活用"
date: "2026-09-25"
summary: "会話内の情報をより広く参照し、Issue 作成前に類似の Issue を確認。作成した GitHub の成果物と元の会話もリンクでつながります。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams/"
demoUrl: "https://docs.github.com/copilot/how-tos/copilot-integrations/integrate-cloud-agent-with-teams"
demo:
  - "準備：Copilot cloud agent と cloud sandboxes を有効化し、Teams の GitHub アプリをインストールまたは更新。デモ用リポジトリへの Write 権限を持つ GitHub アカウントを接続。"
  - "Teams の新しいスレッドに、不具合のスクリーンショットと簡単な説明を投稿。実際の @GitHub メンションを選択し、次のプロンプトの OWNER/DEMO_REPO を置き換える。"
  - "@GitHub このスクリーンショットとスレッドを参考に、repo=OWNER/DEMO_REPO で類似の Issue を探してください。なければ、再現手順、期待する動作、実際の動作、この会話へのリンクを含む Issue を作成してください。コード変更や PR 作成は不要です。"
  - "返された Issue のリンクと、Teams への参照リンクを見せる。スレッド全体が文脈として取得され成果物に保存されるため、機密情報を含まないデモ用の会話を使う。"
---

### 覚えておきたいこと

- **文脈を拡充**：Slack は対応ファイルやメッセージリンク、Teams はインライン画像、転送メッセージ、チャネル / スレッドの履歴を活用。
- **操作性も改善**：次のメッセージからモデルを切り替え、会話中はその選択を維持。処理状況の表示や中断後の復旧も改善。
- **提供範囲**：Copilot Business / Enterprise の組織向けパブリックプレビュー。既存の Copilot 利用枠と cloud agent の予算を使用。一部機能は順次展開。
