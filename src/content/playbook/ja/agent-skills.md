---
title: エージェント・スキル
titleEn: Agent Skills
summary: Copilot エージェントに「専門タスクのこなし方」を仕込む再利用可能な指示セット。プロンプトに合致したら自動で召喚され、毎回説明し直す必要がない。
icon: /theomonfort/icons/agent-skills.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
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
  - group: 📖 公式ドキュメント
    label: Agent Plugins 1.0 — プラグインの作り方
    url: https://agent-plugins.org/plugin-authors/build-an-agent-plugin
  - group: 📖 公式ドキュメント
    label: GitHub Docs — プラグインについて
    url: https://docs.github.com/en/copilot/concepts/agents/about-plugins
  - group: 🌟 コミュニティ製スキル
    label: github/awesome-copilot — Skills 一覧
    url: https://github.com/github/awesome-copilot/blob/main/docs/README.skills.md
  - group: 🌟 コミュニティ製スキル
    label: awesome-copilot.github.com — 検索 & 閲覧
    url: https://awesome-copilot.github.com/skills
  - group: 🌟 コミュニティ製スキル
    label: skills.sh — オープン Agent Skills レジストリ
    url: https://skills.sh/
  - group: 🌟 コミュニティ製スキル
    label: GitHub Agent Finder — スキル/MCP/エージェント探索
    url: https://github.com/agentfinder
  - group: 🛠️ 参考実装
    label: theomonfort skills
    url: https://theomonfort.github.io/theomonfort/skills/
  - group: 🛠️ 参考実装
    label: agent-plugins-example — サンプルと移行ガイド
    url: https://github.com/agentplugins/agent-plugins-example
  - group: 📰 Recent Changelog
    label: "Manage agent skills with the GitHub CLI (2026-04-16)"
    url: https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli
  - group: 📰 Recent Changelog
    label: "Agent Plugins 1.0 in VS Code, Copilot CLI, and the Copilot app (2026-08-12)"
    url: https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/
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

**段階的開示**：まず軽いメタデータだけを読み、依頼に合うスキルの本文だけを展開する。

| 段階 | 読み込むもの | いつ読む？ | 役割 |
| --- | --- | --- | --- |
| 1 | `name` / `description` | 起動時・候補選定時 | **「何をするか + いつ使うか」** でスキルを選ぶ |
| 2 | `SKILL.md` 本体 | description が依頼と一致した時 | 具体的な実行手順をエージェントに渡す |
| 3 | scripts / references / assets | `SKILL.md` が必要とした時 | 実行に必要な補助情報だけを追加する |

## ハーネスの中で何が起きる？

まず **全スキルのメタデータ** を読み、必要になった時だけ **SKILL.md の本文** を追加する。

<figure class="skills-pipeline">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="skills-title skills-desc">
<title id="skills-title">ハーネスによるスキルの段階的な読み込み</title>
<desc id="skills-desc">ハーネスは全スキルのメタデータをモデルのコンテキストに追加する。モデルが API スキルを要求したら、SKILL.md の本文を読み込んで追加する。</desc>
<defs>
<marker id="skills-amber" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker>
<marker id="skills-cyan" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker>
<marker id="skills-magenta" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker>
</defs>
<g fill="none" stroke-width="2">
<path d="M320 70 H730" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
<path d="M170 120 V375 H522.5 V390" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
<path d="M525 255 V365 H680 V390" stroke="var(--c-neon-magenta)" stroke-dasharray="6 5" marker-end="url(#skills-magenta)"/>
<path d="M817.5 390 V360" stroke="var(--c-neon-cyan)" marker-end="url(#skills-cyan)"/>
<path d="M920 325 H1090 V215 H1080" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
<path d="M870 360 V372 H990 V390" stroke="var(--c-crt-amber)" marker-end="url(#skills-amber)"/>
</g>
<rect x="20" y="20" width="300" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="38" y="48" fill="var(--c-crt-amber)" font-size="20" font-weight="700">ハーネス</text>
<text x="38" y="78" fill="var(--c-phosphor)" font-size="19"><tspan x="38">全スキルのメタデータを</tspan><tspan x="38" dy="25">コンテキストに追加</tspan></text>
<rect x="730" y="20" width="350" height="240" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="1.5"/>
<text x="746" y="45" fill="var(--c-neon-cyan)" font-size="18" font-weight="700">SKILL.md</text>
<text x="746" y="72" fill="var(--c-phosphor)" font-size="16">
<tspan x="746"><tspan fill="var(--c-crt-amber)">name:</tspan> api-endpoint</tspan>
<tspan x="746" dy="23"><tspan fill="var(--c-crt-amber)">description:</tspan> REST API endpoints</tspan>
<tspan x="746" dy="23">for OctoCAT Supply Chain.</tspan>
<tspan x="746" dy="23">Use for CRUD endpoints, routes,</tspan>
<tspan x="746" dy="23">and JPA repositories; follow patterns.</tspan>
<tspan x="746" dy="30" fill="var(--c-neon-cyan)" font-weight="700"># API Endpoint Development</tspan>
<tspan x="746" dy="24" fill="var(--c-neon-cyan)" font-weight="700">## Architecture Overview</tspan>
</text>
<rect x="430" y="155" width="190" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="525" y="187" text-anchor="middle" fill="var(--c-neon-magenta)" font-size="20" font-weight="700">ユーザー</text>
<text x="525" y="222" text-anchor="middle" fill="var(--c-phosphor)" font-size="20">「API を作って」</text>
<rect x="620" y="290" width="300" height="70" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="638" y="318" fill="var(--c-crt-amber)" font-size="18" font-weight="700">ハーネス（必要な時だけ）</text>
<text x="638" y="343" fill="var(--c-phosphor)" font-size="18">選んだスキルの本文を追加</text>
<text x="10" y="414" fill="var(--c-phosphor)" font-size="17" font-weight="700"><tspan x="10">モデル</tspan><tspan x="10" dy="24">CONTEXT</tspan></text>
<rect x="110" y="390" width="135" height="60" rx="3" fill="var(--c-gb-green)"/>
<rect x="260" y="390" width="160" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="435" y="390" width="175" height="60" rx="3" fill="var(--c-crt-amber)"/>
<rect x="625" y="390" width="110" height="60" rx="3" fill="var(--c-neon-magenta)"/>
<rect x="742.5" y="390" width="150" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="900" y="390" width="180" height="60" rx="3" fill="var(--c-crt-amber)"/>
<g fill="var(--c-shadow-ink)" text-anchor="middle" font-size="17" font-weight="700">
<text x="177.5" y="414"><tspan x="177.5">SYSTEM</tspan><tspan x="177.5" dy="23">+ TOOLS</tspan></text>
<text x="340" y="426">INSTRUCTIONS</text>
<text x="522.5" y="414"><tspan x="522.5">全スキルの</tspan><tspan x="522.5" dy="23">メタデータ</tspan></text>
<text x="680" y="426">PROMPT</text>
<text x="817.5" y="414"><tspan x="817.5">スキル要求</tspan><tspan x="817.5" dy="23" font-size="14">api-endpoint</tspan></text>
<text x="990" y="414"><tspan x="990">選んだスキルの</tspan><tspan x="990" dy="23">本文</tspan></text>
</g>
</svg>
</figure>

## Example

自作もコミュニティ製も利用できる。`gh skill install`（GitHub CLI v2.90.0+）で、GitHub-hosted skill を今のリポジトリの skill directory（例：`.github/skills/` or `.copilot/skills/`）に追加する。

<div class="setup-cards skill-examples">
<div class="setup-card">

### [github/awesome-copilot](https://awesome-copilot.github.com/skills)

GitHub 公式キュレーションのスキル集。欲しいスキルを選んで追加。

```bash
gh skills install github/awesome-copilot <skill-name>
```

</div>
<div class="setup-card">

### [skills.sh - Visit page](https://skills.sh/)

横断的なオープンレジストリ。GitHub-hosted skill を探して追加できる。

```bash
gh skills install <owner>/<repo> <skill-name>
```

</div>
<div class="setup-card">

### [GitHub Agent Finder](https://github.com/agentfinder)

タスクに合う **MCP サーバー、ツール、スキル、エージェント** を検索。`agentfinder` を入れ、`/agentfinder <やりたいこと>` で候補を一覧できる。[SKILL.md](https://github.com/ards-project/connectors/blob/main/skills/github-copilot/SKILL.md)

```bash
gh skills install ards-project/connectors skills/github-copilot
```

</div>
</div>

## Plugins

スキル、MCP 連携、カスタムエージェント、フック、対話型 canvas などの機能を、1つのパッケージとしてまとめてインストールする。

例: <a class="retro-link" href="https://github.com/github/awesome-copilot/blob/main/extensions/ai-credits-breakdown/README.md" target="_blank" rel="noopener noreferrer">AI Credits Breakdown</a> は、Copilot アプリに使用量ダッシュボードを追加するプラグイン。

## プラグインの導入と利用 <a class="h2-doc" href="https://awesome-copilot.github.com/plugins/" target="_blank" rel="noopener noreferrer">プラグインを探す ↗</a>

マーケットプレイスは 2 つが標準で使える。**`copilot-plugins`**（GitHub 公式）と **`awesome-copilot`**（コミュニティ）。

| コマンド | 用途 |
| --- | --- |
| 🔍 `copilot plugin marketplace browse awesome-copilot` | 一覧を見る |
| 📥 `copilot plugin install <name>@awesome-copilot` | マーケットプレイスから導入 |
| 📋 `copilot plugin list` | 導入済みと有効状態を確認 |
| 🗑️ `copilot plugin uninstall <name>` | 削除する |

> ⚠️ 導入は**リポジトリ単位ではなくユーザー単位**。`~/.copilot/installed-plugins/` に入り、全プロジェクトに適用される。
