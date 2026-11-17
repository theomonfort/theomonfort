---
title: "カスタムエージェントのスコープ"
---

**カスタムエージェントのスコープ**により、チームは同じ [[Agent Markdown Config]]（`.agent.md`）を [[Custom Agents]] 用に、利用範囲とガバナンスの異なる 4 つのレベルで公開できます。

## 4 つの公開スコープ

| スコープ | ディレクトリの場所 | 利用範囲と管理 |
| --- | --- | --- |
| **Enterprise** *（パブリックプレビュー）* | 指定 Organization の [[.github-private Repository]] → `/agents/` | Enterprise 内の全リポジトリ。メンバーは `.github-private` の読み取り権限がなくてもエージェントを利用可能 |
| **Organization** *（パブリックプレビュー）* | Organization の `.github` または `.github-private` → `/agents/` | Organization の全メンバー。Organization Owner が管理 |
| **リポジトリ** | `.github/agents/*.agent.md` | そのリポジトリ / ワークスペース。チームが Git でバージョン管理 |
| **個人** | `~/.copilot/agents/*.agent.md` | 自分のマシン上の全ワークスペース |

## ガバナンスの注意点

Enterprise Owner はリポジトリルールセットで `/agents/` ファイルを保護できますが、**そのルールセットのスコープを指定したソース Organization だけに厳密に限定する必要があります**。範囲を限定しない Enterprise ルールセットを `/agents/` に適用すると、Organization Owner が自分の Organization レベルのエージェントを編集することもブロックされます。
