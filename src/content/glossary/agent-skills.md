---
title: エージェント・スキル
titleEn: Agent Skills
summary: Copilot エージェントに「専門タスクのこなし方」を仕込む再利用可能な指示セット。プロンプトに合致したら自動で召喚され、毎回説明し直す必要がない。
icon: 🎴
color: magenta
order: 6
category: plan
related: ['mcp', 'instructions', 'custom-agent', 'cli']
links:
  - group: 📖 公式ドキュメント
    label: GitHub Docs — Create skills for Copilot
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills
  - group: 📖 公式ドキュメント
    label: Agent Skills 仕様（オープン標準）
    url: https://agentskills.io/specification
  - group: 🌟 コミュニティ製スキル
    label: github/awesome-copilot — Skills 一覧
    url: https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md
  - group: 🌟 コミュニティ製スキル
    label: awesome-copilot.github.com — 検索 & 閲覧
    url: https://awesome-copilot.github.com/skills
  - group: 🌟 コミュニティ製スキル
    label: skills.sh — オープン Agent Skills レジストリ
    url: https://skills.sh/
  - group: 🛠️ 参考実装
    label: theomonfort skills
    url: https://theomonfort.github.io/theomonfort/skills/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Agent Skills</strong> は、Copilot に <strong>専門タスクのこなし方</strong> を教える再利用可能な指示セット。
  </p>
  <p>
    依頼内容が <strong>description</strong> と合った時だけ読み込まれ、毎回説明し直さなくても専門知識を適用できる。
  </p>
</div>

## 2 つのスコープ

|  | 👥 チーム共有 | 👤 個人用 |
| --- | --- | --- |
| 📁 **配置場所** | リポジトリ内の `.github/skills/` | ユーザーホーム `~/.copilot/skills/` |
| 🎯 **適用範囲** | そのリポジトリのみ | そのユーザーの全セッション |
| 🤝 **共有性** | リポジトリに含まれるため、チーム全員が利用可能 | ローカル環境のみ、他のメンバーには共有されない |
| 💡 **用途** | プロジェクト固有のワークフロー（デプロイ、テスト生成など） | 個人の作業効率化 |

## 仕組み

Agent Skills は **Progressive disclosure（段階的開示）** で読み込まれる。  
最初から全スキルの本文をコンテキストに入れるのではなく、まず軽い **metadata** だけを見て、ユーザーの依頼に合うものだけを展開する。


| 段階 | 読み込むもの | いつ読む？ | 役割 |
| --- | --- | --- | --- |
| 1 | `name` / `description` | 起動時・候補選定時 | どのスキルが使えそうかを判断する |
| 2 | `SKILL.md` 本体 | description が依頼と一致した時 | 具体的な実行手順をエージェントに渡す |
| 3 | scripts / references / assets | `SKILL.md` が必要とした時 | 実行に必要な補助情報だけを追加する |

> 💡 **description が命**：曖昧だとマッチしない／違うスキルが呼ばれる。  
> **「何をするスキルか」+「いつ使うスキルか」** を明確に書く。

## Example

スキルは自分で書くだけでなく、コミュニティ製のものをそのままインストールできる。  
GitHub-hosted skill は GitHub CLI（v2.90.0+）の `gh skill install` で、今のリポジトリの skill directory（例：`.github/skills/` or `.copilot/skills/`）に追加する。

### [github/awesome-copilot](https://awesome-copilot.github.com/skills)

GitHub 公式キュレーションのスキル集。欲しいスキルを選んで追加できる。


```bash
gh skills install github/awesome-copilot <skill-name>
```

### [skills.sh - Visit page](https://skills.sh/)

横断的なオープンレジストリ。GitHub-hosted skill を探して追加できる。

```bash
gh skills install <owner>/<repo> <skill-name>
```
