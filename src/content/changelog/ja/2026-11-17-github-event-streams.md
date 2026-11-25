---
title: "GitHub Event Streams：プルリクエストの更新を待機"
date: "2026-11-17"
summary: "エージェントや連携ツールが GitHub に繰り返し問い合わせることなく、プルリクエストの変更を受け取れます。"
category: copilot
status: "パブリックプレビュー"
source: "https://github.blog/changelog/2026-11-17-github-event-streams-is-now-in-preview/"
---

### 何が変わる？

GitHub Event Streams は、購読したプルリクエストが変更されると、開いた接続を通じて通知します。エージェントはポーリングや公開 Webhook エンドポイントを用意せずに、レビュー、チェックの完了、新しいコミット、マージ競合、PR の状態変更を待てます。

### 例：エージェントが自分の PR を確認

これは Copilot app のセッションでエージェントが Event Streams を使う例であり、Copilot app が自動で Event Streams を使うという意味ではありません。エージェントに監視と対応を指示し、セッションを稼働させておく必要があります。

![シーケンス図：エージェントが PR を作成し、CI が開始。エージェントが購読して現在のチェックを取得し、チェック完了の通知を受けたら最新の状態を確認。失敗時はコードを修正して再度プッシュできます。](/theomonfort/changelog/img/event-streams-ja.svg)

ストリームが開いたら、エージェントは現在の PR とチェックの状態を取得します。チェックの通知はチェック・スイートごとに届くため、すべてのチェックが完了したと決めつけず、通知ごとに現在の PR の状態を確認します。失敗時はログを調べ、コードを修正して新しいコミットをプッシュできます。

### これまでとの違い

`gh run watch` などのコマンドは GitHub に繰り返し問い合わせます。Event Streams はこのポーリングを避け、API リクエストを減らせます。問い合わせのたびにモデルを呼び出していた場合はトークンも節約できますが、削減量はエージェントの実装に依存します。

### プレビューと制限

- **アクセス**：[ウェイトリスト](https://gh.io/event-streams-signup)で承認された GitHub.com のすべてのプラン。GHE.com と GitHub Enterprise Server には対応していません。
- **購読**：1 つの購読につき PR は 1 件。`gh event listen` が購読を作成または再利用し、購読は 24 時間後に期限切れになります。
- **再配信なし**：切断中のイベントは届きません。ストリームの接続時や再接続時に現在の PR の状態を確認します。
- **CLI**：`gh event listen` には GitHub CLI 2.105.0 以降が必要です。既定では最初のイベントを受け取ると終了するため、対応後に再び待機する必要があります。

[Event Streams ドキュメント](https://docs.github.com/en/integrations/how-tos/using-github-event-streams) · [GitHub CLI のイベントコマンド](https://cli.github.com/manual/gh_event_listen)
