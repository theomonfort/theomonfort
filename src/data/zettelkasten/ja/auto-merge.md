---
title: "自動マージ"
---

**自動マージ**は、作成者やメンテナーが [[Pull Requests]] を事前設定し、必須チェックと承認がすべて揃った瞬間に自動統合する機能です。長時間の CI 実行を手動で繰り返し確認する必要がなくなります。

## 設定と使い方

- **リポジトリの切り替え**: `Allow auto-merge` を、`Repo -> Settings -> General -> Pull Requests` で有効にします。
- **Web と CLI での有効化**: 開いている PR で **Enable auto-merge** をクリックし、許可された [[Merge Methods]] のいずれかを選ぶか、次を実行します。

```bash
gh pr merge --auto --squash
```

## ゲートとの連携と安全性

- **すべてのルールを尊重**: 自動マージは [[PR Rulesets]] を迂回しません。[[Required Pull Request Reviews]]、[[Inline Review Comments & Threads]] の会話解決、[[Required Status Checks]]、[[Code Scanning PR Merge Protection]] がすべて満たされるまで待機します。
- **プッシュによる承認の無効化**: `Dismiss stale pull request approvals` が有効な状態で新しいコミットがプッシュされると、新たな承認とチェックの成功が揃うまで自動マージは待機します。
- **自律型ツールとの比較**: [[Merge Queue]] を利用する変更の多い `main` ブランチでは、自動マージを有効にすると承認後に PR が自動でキューへ追加されます。チェックの失敗やレビューコメントがある場合、[[Agent Merge]] はさらに踏み込み、統合前に障害を能動的に修正します。
