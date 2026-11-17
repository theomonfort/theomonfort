---
title: "GitHub Codespaces"
---

**GitHub Codespaces** は、[[GitHub]] 上でクラウドホスト型の Docker 開発環境をすぐに提供します（`1 session = 1 codespace`）。各コントリビューターと AI エージェントが同じ使い捨てサンドボックスを利用できます。

## 接続方法とデータレジデンシー

- **3つの接続方法**: `github.com` からブラウザーで直接開く、[[Copilot in VS Code|VS Code の Copilot]]からリモート接続する、または [[Copilot CLI]] と併せてターミナルから `gh codespace ssh` で SSH 接続します。
- **データレジデンシーが GA**: データレジデンシー対応の GitHub Enterprise Cloud で一般提供されています（`2026-04-01`）。日本リージョンでも利用できます（`2026-03-19`）。
- **安全な AI の試行**: [[Dev Containers & Machine Sizes|開発コンテナーとマシンサイズ]]で環境を標準化し、[[Local & Cloud Sandboxes|ローカルとクラウドのサンドボックス]]を補完して、ローカル設定のずれをなくします。
