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

Agent Skills は **Progressive disclosure（段階的開示）** で読み込まれる。  
最初から全スキルの本文をコンテキストに入れるのではなく、まず軽い **metadata** だけを見て、ユーザーの依頼に合うものだけを展開する。


| 段階 | 読み込むもの | いつ読む？ | 役割 |
| --- | --- | --- | --- |
| 1 | `name` / `description` | 起動時・候補選定時 | どのスキルが使えそうかを判断する |
| 2 | `SKILL.md` 本体 | description が依頼と一致した時 | 具体的な実行手順をエージェントに渡す |
| 3 | scripts / references / assets | `SKILL.md` が必要とした時 | 実行に必要な補助情報だけを追加する |

> 💡 **description が命**：曖昧だとマッチしない／違うスキルが呼ばれる。  
> **「何をするスキルか」+「いつ使うスキルか」** を明確に書く。

## ハーネスの中で何が起きる？

ユーザーが依頼をすると、ハーネスはまず全スキルの **メタデータだけ** をコンテキストに載せる。LLM が「このスキルが必要」と判断したら、ハーネスがその **本体（SKILL.md）を完全展開** してコンテキストに追加する。

<figure class="rpi-pipeline" style="margin:2em 0;">
<svg viewBox="0 0 1080 540" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;font-family:'JetBrains Mono','Courier New',monospace;">
  <path d="M 260 50 L 720 50" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="720" cy="50" r="4" fill="#ffb000"/>
  <path d="M 140 85 L 140 450 L 365 450 L 365 470" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 410 290 L 410 445 L 480 445 L 480 470" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M 580 290 L 580 445 L 585 445 L 585 470" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5 4"/>
  <path d="M 535 290 L 535 340 L 540 340 L 540 355" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <path d="M 540 425 L 540 450 L 715 450 L 715 470" fill="none" stroke="#ffb000" stroke-width="2"/>
  <path d="M 660 390 L 690 390 L 690 200 L 720 200" fill="none" stroke="#ffb000" stroke-width="2"/>
  <circle cx="720" cy="200" r="4" fill="#ffb000"/>
  <rect x="20" y="15" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="35" y="36" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="35" y="58" fill="#e8f4ff" font-size="12" font-weight="bold">PUT ALL SKILLS DESCRIPTIONS</text>
  <text x="35" y="74" fill="#e8f4ff" font-size="12" font-weight="bold">IN CONTEXT</text>
  <rect x="720" y="15" width="340" height="320" rx="6" fill="#0a0e27" stroke="#1e2a4a" stroke-width="1"/>
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
    <tspan x="735" dy="22">This skill guides the creation</tspan>
    <tspan x="735" dy="14">of REST API endpoints following</tspan>
    <tspan x="735" dy="14">the OctoCAT Supply Chain</tspan>
    <tspan x="735" dy="14">application's established patterns.</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold">## Architecture Overview</tspan>
    <tspan x="735" dy="22">The API follows a layered</tspan>
    <tspan x="735" dy="14">architecture: Controllers →</tspan>
    <tspan x="735" dy="14">Repository → SQLite Database.</tspan>
  </text>
  <rect x="370" y="230" width="80" height="60" rx="10" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="410" y="252" fill="#ff2e88" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">USER</text>
  <text x="410" y="271" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">"WORK ON</text>
  <text x="410" y="284" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">API"</text>
  <rect x="465" y="230" width="140" height="60" rx="10" fill="#0a0e27" stroke="#3b82f6" stroke-width="2"/>
  <text x="535" y="252" fill="#3b82f6" font-size="10" font-weight="bold" letter-spacing="1" text-anchor="middle">LLM TO HARNESS</text>
  <text x="535" y="271" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">I NEED THE</text>
  <text x="535" y="284" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">API SKILL</text>
  <rect x="420" y="355" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="435" y="376" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">HARNESS</text>
  <text x="435" y="398" fill="#e8f4ff" font-size="12" font-weight="bold">LOADS FULL SKILL INTO</text>
  <text x="435" y="414" fill="#e8f4ff" font-size="12" font-weight="bold">CONTEXT</text>
  <text x="20" y="495" fill="#e8f4ff" font-size="11" font-weight="bold">MODEL</text>
  <text x="20" y="511" fill="#e8f4ff" font-size="11" font-weight="bold">CONTEXT</text>
  <rect x="60" y="470" width="110" height="55" rx="10" fill="#9bbc0f"/>
  <text x="115" y="494" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="115" y="510" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="180" y="470" width="110" height="55" rx="10" fill="#3b82f6"/>
  <text x="235" y="503" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="300" y="470" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="365" y="494" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILLS</text>
  <text x="365" y="510" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DESCRIPTION</text>
  <rect x="440" y="470" width="80" height="55" rx="10" fill="#ff2e88"/>
  <text x="480" y="503" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="530" y="470" width="110" height="55" rx="10" fill="#3b82f6"/>
  <text x="585" y="494" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="585" y="510" fill="#e8f4ff" font-size="11" font-weight="bold" text-anchor="middle">REQUEST</text>
  <rect x="650" y="470" width="130" height="55" rx="10" fill="#ffb000"/>
  <text x="715" y="494" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SKILL</text>
  <text x="715" y="510" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">DOCUMENT</text>
</svg>
</figure>

> 💡 **段階的開示** のおかげで、何百個のスキルがあっても起動時のコストは **メタデータ分だけ**。実際に使うスキルだけが本体ごと読み込まれる。

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
