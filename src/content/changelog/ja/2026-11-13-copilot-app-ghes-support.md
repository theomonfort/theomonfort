---
title: "Copilot app が GitHub Enterprise Server に正式対応"
date: "2026-11-13"
summary: "GitHub Enterprise Server アカウントを追加して、Copilot app からリポジトリ、Issue、Pull Request を利用できます。アプリのバージョン 1.2.0 以降が必要です。Cloud セッションには対応していません。"
category: copilot
source: "https://github.blog/changelog/2026-11-13-github-enterprise-server-support-in-the-github-copilot-app"
---

### Copilot app で GHES を利用

オプトイン形式のプレビューを経て、GHES 対応が一般提供になりました。GHES アカウントを追加すると、Copilot app からリモートのリポジトリ、Issue、Pull Request を利用できます。

1. まず GitHub.com または GHE.com のアカウントでアプリにサインインします。
2. **Settings → Accounts → Add account** を開き、**GitHub Enterprise Server** を選択します。
3. 案内に沿ってアプリを認証します。

Copilot app **バージョン 1.2.0 以降**で利用できます。リクエストを実行するには、Copilot ライセンスを持つクラウドアカウントでのサインイン、または独自のモデルプロバイダーの設定も必要です。GHES では Cloud セッションを利用できません。

### ドキュメント

- [Copilot app で GitHub Enterprise Server にサインイン](https://docs.github.com/enterprise-server@latest/copilot/copilot-on-ghes/sign-in-on-copilot-app)
