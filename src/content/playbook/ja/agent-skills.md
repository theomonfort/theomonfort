---
title: エージェント・スキル
titleEn: Agent Skills
summary: Copilot エージェントに「専門タスクのこなし方」を仕込む再利用可能な指示セット。プロンプトに合致したら自動で召喚され、毎回説明し直す必要がない。
icon: /theomonfort/icons/agent-skills.png
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#ff2e88"
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
  - group: 📰 Recent Changelog
    label: "Manage agent skills with the GitHub CLI (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli
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

Agent Skills は **段階的開示** で読み込まれる。  
最初から全スキルの本文をコンテキストに入れるのではなく、まず軽い **metadata** だけを見て、ユーザーの依頼に合うものだけを展開する。


| 段階 | 読み込むもの | いつ読む？ | 役割 |
| --- | --- | --- | --- |
| 1 | `name` / `description` | 起動時・候補選定時 | どのスキルが使えそうかを判断する<br/>※ **「何をするスキルか」+「いつ使うスキルか」** を明確に書く |
| 2 | `SKILL.md` 本体 | description が依頼と一致した時 | 具体的な実行手順をエージェントに渡す |
| 3 | scripts / references / assets | `SKILL.md` が必要とした時 | 実行に必要な補助情報だけを追加する |

## ハーネスの中で何が起きる？

ユーザーが依頼をすると、ハーネスはまず全スキルの **メタデータだけ** をコンテキストに載せる。LLM が「このスキルが必要」と判断したら、ハーネスがその **本体（SKILL.md）を完全展開** してコンテキストに追加する。

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 490" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'DotGothic16','Courier New',monospace;">
  <defs>
    <marker id="arrow-orange" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffb000"/>
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6"/>
    </marker>
    <marker id="arrow-pink" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff2e88"/>
    </marker>
  </defs>
  <path d="M 260 50 L 720 50" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 140 85 L 140 400 L 400 400 L 400 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 410 290 L 410 400 L 515 400 L 515 420" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-pink)"/>
  <path d="M 620 420 L 620 376" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <path d="M 660 375 L 750 375 L 750 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 660 340 L 690 340 L 690 200 L 720 200" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <rect x="20" y="15" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="35" y="36" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">ハーネス</text>
  <text x="35" y="58" fill="#e8f4ff" font-size="12" font-weight="bold">全スキルの description を</text>
  <text x="35" y="74" fill="#e8f4ff" font-size="12" font-weight="bold">Context に追加</text>
  <rect x="720" y="15" width="340" height="215" rx="6" fill="#0a0e27" stroke="#1e2a4a" stroke-width="1"/>
  <text x="735" y="40" font-size="10" fill="#cfe9ff">
    <tspan x="735" dy="0" fill="#555">---</tspan>
    <tspan x="735" dy="14"><tspan fill="#ffb000">name:</tspan> api-endpoint</tspan>
    <tspan x="735" dy="14"><tspan fill="#ffb000">description:</tspan> Generate REST API</tspan>
    <tspan x="735" dy="14">  endpoints for the OctoCAT Supply</tspan>
    <tspan x="735" dy="14">  Chain application following</tspan>
    <tspan x="735" dy="14">  established patterns. Use this</tspan>
    <tspan x="735" dy="14">  skill when creating new CRUD</tspan>
    <tspan x="735" dy="14">  endpoints, adding routes,</tspan>
    <tspan x="735" dy="14">  implementing JPA repositories.</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold"># API Endpoint Development</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold">## Architecture Overview</tspan>
  </text>
  <rect x="370" y="230" width="80" height="60" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="410" y="252" fill="#ff2e88" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">ユーザー</text>
  <text x="410" y="271" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">「API を</text>
  <text x="410" y="284" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">作って」</text>
  <rect x="420" y="305" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="435" y="326" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">ハーネス</text>
  <text x="435" y="348" fill="#e8f4ff" font-size="12" font-weight="bold">スキル本体を</text>
  <text x="435" y="364" fill="#e8f4ff" font-size="12" font-weight="bold">Context に読み込む</text>
  <text x="635" y="389" fill="#3b82f6" font-size="10" font-weight="bold">API スキルが</text>
  <text x="635" y="402" fill="#3b82f6" font-size="10" font-weight="bold">必要</text>
  <text x="20" y="445" fill="#e8f4ff" font-size="11" font-weight="bold">モデル</text>
  <text x="20" y="461" fill="#e8f4ff" font-size="11" font-weight="bold">コンテキスト</text>
  <rect x="95" y="420" width="110" height="55" rx="10" fill="#9bbc0f"/>
  <text x="150" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="150" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="215" y="420" width="110" height="55" rx="10" fill="#00f0ff"/>
  <text x="270" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="335" y="420" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="400" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILLS</text>
  <text x="400" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DESCRIPTION</text>
  <rect x="475" y="420" width="80" height="55" rx="10" fill="#ff2e88"/>
  <text x="515" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="565" y="420" width="110" height="55" rx="10" fill="#00f0ff"/>
  <text x="620" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="620" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">REQUEST</text>
  <rect x="685" y="420" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="750" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="750" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOCUMENT</text>
</svg>
</figure>

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
