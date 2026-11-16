---
title: カスタムエージェント
titleEn: Custom Agent
summary: 役割・モデル・ツール・指示・スキルを束ねた専用エージェント。"フロントエンド職人"や"レビュー番長"を作れる。
icon: /theomonfort/icons/custom-agent.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
order: 7
category: plan
related: ['agent-skills', 'cli']
links:
  - group: 📖 リファレンス（共通）
    label: GitHub Docs — Custom agents configuration
    url: https://docs.github.com/en/copilot/reference/custom-agents-configuration
  - group: 🏛️ Organization / Enterprise
    label: GitHub Docs — Preparing to use custom agents in your organization
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-organization/prepare-for-custom-agents
  - group: 🏛️ Organization / Enterprise
    label: GitHub Docs — Preparing to use custom agents in your enterprise
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents
  - group: ☁️ Cloud Agent
    label: GitHub Docs — Creating custom agents for Copilot cloud agent
    url: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-custom-agents
  - group: 💻 Copilot CLI
    label: GitHub Docs — About Copilot CLI custom agents
    url: https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-custom-agents
  - group: 💻 Copilot CLI
    label: GitHub Docs — Create custom agents for Copilot CLI
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli
  - group: 🆚 VS Code
    label: VS Code Docs — Custom agents
    url: https://code.visualstudio.com/docs/agent-customization/custom-agents
  - group: 🆚 VS Code
    label: VS Code Docs — Subagents
    url: https://code.visualstudio.com/docs/agents/subagents
  - group: 📰 発表
    label: "Built-in Explore subagent (VS Code 1.110)"
    url: https://github.blog/changelog/2026-03-06-github-copilot-in-visual-studio-code-v1-110-february-release
  - group: 🌟 コミュニティ例
    label: github/awesome-copilot — Custom agents
    url: https://github.com/github/awesome-copilot/tree/main/agents
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Custom Agent</strong> は、Copilot に <strong>役割・道具・振る舞い</strong> をセットで渡す専門家プロファイル。
  </p>
  <p>
    「同じ AI」でも、Planner / Reviewer / Tester のように人格と権限を切り替えられる。
  </p>
</div>

## 何を固定する？

Custom Agent は **プロンプトだけ** ではなく、エージェントの「働き方」をまとめて固定する。

| 要素 | 何を決める？ | 例 |
| --- | --- | --- |
| Identity | 何者として振る舞うか | `Planner`, `Security Reviewer`, `Test Specialist` |
| Description | いつ呼ぶべきか | 「実装前に計画を作る時」 |
| Tools | どの道具を使えるか | `read`, `search`, `edit`, `agent`, `github/*` |
| Agents | 委任先（`agent` tool が必要） | `Research`, `Reviewer`, `*` |
| Model | どのモデルで動くか | 設計は強いモデル、探索は速いモデル |
| Target | どの実行環境で使うか | `github-copilot`, `vscode` |
| MCP | 専用の外部ツール | Jira, Figma, Playwright, internal API |
| Prompt | 判断基準・出力形式 | 成功条件、禁止事項、レビュー観点 |

## 4 つのスコープ

同じ `.agent.md` を 4 レベルで配布。範囲が広いほどガバナンスが重要になる。

|  | 🏢 Enterprise | 🏛️ Organization | 👥 Repository | 👤 個人用 |
| --- | --- | --- | --- | --- |
| 📁 場所 | 指定した org の `.github-private` → `/agents/` | org の `.github` または `.github-private` → `/agents/` | `.github/agents/` | `~/.copilot/agents/` |
| 🎯 適用範囲 | enterprise 内の全 repository | organization のメンバー全員 | その repository / workspace | 自分の全 workspace |
| 🤝 管理者 | enterprise owner / AI manager | organization owner | repository のチーム（Git 管理） | 自分だけ |
| 💡 用途 | 全社標準・コンプライアンス | 部門標準の Planner / Reviewer | プロジェクト固有の Tester / Reviewer | 個人の作業スタイル・好み |

> 🆕 **Public preview**：配布元 repo へのアクセス権がなくても org / enterprise agent が届く。Enterprise owner の保護 ruleset は指定した org に絞り、org owner が自分の agent を編集できるようにする。

## `.agent.md` の中身 <a class="h2-doc" href="https://docs.github.com/en/copilot/reference/custom-agents-configuration" target="_blank" rel="noopener noreferrer">DOCS ↗</a>

1 つの Markdown ファイルに、**YAML の設定**と**エージェントへの指示**を書く。

<div class="example-columns">
<div>

### 設定

```yaml
---
name: design-reviewer
description: Figma と実装を照合して UI 差分をレビューする
target: github-copilot
model: Claude Sonnet 4.5
tools: [read, search, github/pull-request-read, figma/*]
mcp-servers:
  figma:
    type: local
    command: npx
    args: ["-y", "figma-mcp-server"]
---
```

</div>
<div>

### 指示

```markdown
# Role

あなたは UI 実装の design reviewer。
Figma の仕様と Pull Request の差分を比較し、見た目・余白・色・状態差分だけをレビューする。

# Rules

- コードは編集しない
- blocking / non-blocking を分けて指摘する
- 再現手順と確認すべき画面幅を必ず書く
- 推測で断定せず、Figma または diff に根拠があるものだけ指摘する
```

</div>
</div>

> 良い Custom Agent は「誰か」ではなく、**どの判断を任せるか** が明確。

## Agent と内部 Subagent

VS Code でユーザーが選べるのは **Agent、Plan、Ask**。`searchSubagent` のような内部 helper は、別の Agent が呼び出す tool であり、選択可能な `.agent.md` profile ではない。

| Surface | Agent / tool | 何をする？ |
| --- | --- | --- |
| Copilot Chat / VS Code | Agent | 編集と tool を使って複雑な task を実装する |
| Copilot Chat / VS Code | Ask | 変更せずに質問へ回答し、必要な調査を行う |
| Copilot Chat / VS Code | Plan | 調査して、複数ステップの計画を組み立てる |
| VS Code internal | `searchSubagent` | 独立した context で並列に codebase を調査し、summary を返す |

> 🔑 VS Code の旧 Explore 相当の動作は `searchSubagent` に移った。Prompt と tool は TypeScript/TSX で実装され、編集可能な Explore `.agent.md` は存在しない。

## Copilot CLI の組み込み Subagent

| Agent | 得意な task |
| --- | --- |
| Explore | 高速で read-only の codebase 調査 |
| Task | Tests、builds、出力の多い command の実行 |
| General-purpose | Full toolset を使う複雑な multi-step task |
| Rubber-duck | 計画や実装を独立レビュー。`/subagents` で別の model を割り当て、作成に使った model とは異なる視点で test できる |
| Code-review | Diff の確度が高い review |
| Research | Citation 付きの GitHub と Web の徹底調査 |
| Security-review | 確度が高い脆弱性 review |

> 🦆 Rubber-duck の強みは **cross-model review**。同じ model に自己評価させるのではなく、別の model に計画や実装を批判させることで、見落としや思考の偏りを発見しやすくなる。

## ハーネスの中で何が起きる？

`.agent.md` を読み、ツールを絞り、定義とプロンプトを追加。元の Instructions は残る。

<figure class="agent-pipeline">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="agent-harness-title agent-harness-desc">
<title id="agent-harness-title">カスタムエージェントの読み込み</title>
<desc id="agent-harness-desc">ハーネスは agent.md を取得し、ツールを絞り、エージェント定義とプロンプトを追加する。既存の Instructions は残る。</desc>
<defs><marker id="agent-harness-green" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-gb-green)"/></marker><marker id="agent-harness-cyan" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker><marker id="agent-harness-amber" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker><marker id="agent-harness-magenta" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker></defs>
<path d="M550 57 H610" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" marker-end="url(#agent-harness-magenta)"/>
<path d="M730 85 V105 H590 V125" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M590 195 V220 H270 V245" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M590 195 V245" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M590 220 H910 V245" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#agent-harness-amber)"/>
<path d="M270 330 V370 H255 V390" fill="none" stroke="var(--c-gb-green)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#agent-harness-green)"/>
<path d="M590 330 V365 H705 V390" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#agent-harness-amber)"/>
<path d="M910 330 V365 H937.5 V390" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#agent-harness-magenta)"/>
<text x="20" y="60" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">USER</tspan></text>
<rect x="110" y="30" width="440" height="55" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="330" y="64" font-size="19" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="330">「/TDD-RED API を追加して」</tspan></text>
<rect x="610" y="30" width="240" height="55" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="730" y="64" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="730">カスタムエージェント</tspan></text>
<rect x="865" y="30" width="185" height="55" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="957.5" y="64" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="957.5">プロンプト</tspan></text>
<rect x="395" y="125" width="390" height="70" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="590" y="152" font-size="18" font-weight="700" fill="var(--c-crt-amber)" text-anchor="middle"><tspan x="590">HARNESS</tspan></text>
<text x="590" y="179" font-size="20" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="590">.agent.md ファイルを取得</tspan></text>
<rect x="145" y="245" width="250" height="85" rx="3" fill="var(--c-midnight)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="270" y="275" font-size="17" font-weight="700" fill="var(--c-gb-green)" text-anchor="middle"><tspan x="270">HARNESS</tspan></text>
<text x="270" y="306" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="270">使えるツールを絞る</tspan></text>
<rect x="465" y="245" width="250" height="85" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="590" y="275" font-size="17" font-weight="700" fill="var(--c-crt-amber)" text-anchor="middle"><tspan x="590">HARNESS</tspan></text>
<text x="590" y="306" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="590">エージェント定義を追加</tspan></text>
<rect x="785" y="245" width="250" height="85" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="910" y="275" font-size="17" font-weight="700" fill="var(--c-neon-magenta)" text-anchor="middle"><tspan x="910">HARNESS</tspan></text>
<text x="910" y="306" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="910">プロンプトを追加</tspan></text>
<text x="20" y="415" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">MODEL</tspan><tspan x="20" dy="23">CONTEXT</tspan></text>
<rect x="145" y="390" width="220" height="60" rx="3" fill="var(--c-gb-green)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="255" y="414" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="255">SYSTEM</tspan><tspan x="255" dy="23">+ TOOLS</tspan></text>
<rect x="380" y="390" width="190" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="475" y="426" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="475">INSTRUCTIONS</tspan></text>
<rect x="585" y="390" width="240" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="705" y="426" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="705">カスタムエージェント</tspan></text>
<rect x="840" y="390" width="195" height="60" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="937.5" y="426" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="937.5">プロンプト</tspan></text>
</svg>
</figure>

## サブエージェント

サブエージェントは別のコンテキストでファイルを読み、**サマリだけ**をメインへ返す。

<figure class="agent-pipeline">
<svg viewBox="0 0 1100 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="subagent-flow-title subagent-flow-desc">
<title id="subagent-flow-title">独立したコンテキストで調査し、サマリだけを返す</title>
<desc id="subagent-flow-desc">サブエージェントは自分のコンテキストでファイルを読み、ハーネスはサマリだけをメインに追加する。</desc>
<defs><marker id="subagent-flow-green" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-gb-green)"/></marker><marker id="subagent-flow-cyan" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker><marker id="subagent-flow-amber" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker><marker id="subagent-flow-magenta" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker></defs>
<path d="M600 75 V105" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" marker-end="url(#subagent-flow-magenta)"/>
<path d="M600 165 V195" fill="none" stroke="var(--c-neon-magenta)" stroke-width="2" marker-end="url(#subagent-flow-magenta)"/>
<path d="M600 260 V280 H572.5 V295" fill="none" stroke="var(--c-crt-amber)" stroke-width="2" marker-end="url(#subagent-flow-amber)"/>
<path d="M1065 325 H1090 V135 H875" fill="none" stroke="var(--c-neon-cyan)" stroke-width="2" marker-end="url(#subagent-flow-cyan)"/>
<rect x="400" y="25" width="400" height="50" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="600" y="57" font-size="20" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="600">「コードでこの機能を探して」</tspan></text>
<text x="20" y="130" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">MAIN</tspan><tspan x="20" dy="23">SESSION</tspan></text>
<rect x="145" y="105" width="165" height="60" rx="3" fill="var(--c-gb-green)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="227.5" y="129" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="227.5">SYSTEM</tspan><tspan x="227.5" dy="23">+ TOOLS</tspan></text>
<rect x="325" y="105" width="190" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="420" y="141" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="420">INSTRUCTIONS</tspan></text>
<rect x="530" y="105" width="140" height="60" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="600" y="141" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="600">プロンプト</tspan></text>
<rect x="685" y="105" width="190" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="780" y="141" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="780">サマリ</tspan></text>
<rect x="395" y="195" width="410" height="65" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="600" y="222" font-size="18" font-weight="700" fill="var(--c-crt-amber)" text-anchor="middle"><tspan x="600">LLM → HARNESS</tspan></text>
<text x="600" y="248" font-size="20" font-weight="700" fill="var(--c-phosphor)" text-anchor="middle"><tspan x="600">サブエージェントを作る</tspan></text>
<text x="1070" y="212" font-size="17" font-weight="700" fill="var(--c-neon-cyan)" text-anchor="end"><tspan x="1070">HARNESS</tspan></text>
<text x="1070" y="239" font-size="18" font-weight="700" fill="var(--c-phosphor)" text-anchor="end"><tspan x="1070">サマリだけを</tspan><tspan x="1070" dy="23">メインに戻す</tspan></text>
<text x="20" y="322" font-size="17" font-weight="700" fill="var(--c-phosphor)" text-anchor="start"><tspan x="20">SUBAGENT</tspan><tspan x="20" dy="23">CONTEXT</tspan></text>
<rect x="145" y="295" width="160" height="60" rx="3" fill="var(--c-gb-green)" stroke="var(--c-gb-green)" stroke-width="2"/>
<text x="225" y="319" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="225">SYSTEM</tspan><tspan x="225" dy="23">+ TOOLS</tspan></text>
<rect x="315" y="295" width="180" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="405" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="405">INSTRUCTIONS</tspan></text>
<rect x="505" y="295" width="135" height="60" rx="3" fill="var(--c-neon-magenta)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="572.5" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="572.5">プロンプト</tspan></text>
<rect x="650" y="295" width="80" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="690" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="690">FILE 1</tspan></text>
<rect x="740" y="295" width="80" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="780" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="780">FILE 2</tspan></text>
<rect x="830" y="295" width="80" height="60" rx="3" fill="var(--c-crt-amber)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="870" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="870">FILE 3</tspan></text>
<rect x="920" y="295" width="145" height="60" rx="3" fill="var(--c-neon-cyan)" stroke="var(--c-neon-cyan)" stroke-width="2"/>
<text x="992.5" y="331" font-size="17" font-weight="700" fill="var(--c-shadow-ink)" text-anchor="middle"><tspan x="992.5">サマリ</tspan></text>
</svg>
</figure>

## Custom Agent で適材適所の LLM を活用

AI モデルは、それぞれ異なるデータ・異なるアーキテクチャで学習されている。**すべてに最強な単一モデルは存在しない。**

<div class="agent-model-benefits">
<div class="agent-model-benefit" style="--benefit-color:var(--c-gb-green)"><strong>📚 異なる学習データ</strong><p>学習コーパスが違えば、知識の穴と強みも変わる。</p></div>
<div class="agent-model-benefit" style="--benefit-color:var(--c-neon-cyan)"><strong>⚙️ 異なるアーキテクチャ</strong><p>推論力・速度・コンテキスト長。モデルごとに得意なタスクが違う。</p></div>
<div class="agent-model-benefit" style="--benefit-color:var(--c-neon-magenta)"><strong>✅ クロス検証</strong><p>同じタスクを複数モデルで走らせると、1 モデルでは見逃すバグに気づける。</p></div>
<div class="agent-model-benefit" style="--benefit-color:var(--c-crt-amber)"><strong>🎯 コスト最適化</strong><p>タスクごとの最適モデル選びは、品質だけでなく予算の話にもなる。</p></div>
</div>

> Claude + Gemini + Codex + Microsoft を、統制・監査可能な **単一プラットフォーム** で動かせるのは Copilot だけ。

## ベストなモデルは？ ❌

❌ 一番いいモデル？ → ✅ **このタスクに**一番いいモデル？

<table class="compact-table agent-model-table">
<thead><tr><th>開発タスク</th><th>ベストなモデル：コスト/性能（例）</th></tr></thead>
<tbody>
<tr><td>要件定義</td><td><span style="color:var(--c-crt-amber)">Claude Opus 4.8</span></td></tr>
<tr><td>アーキテクチャ・設計</td><td><span style="color:var(--c-neon-magenta)">Gemini 3.1 Pro</span></td></tr>
<tr><td>コード計画</td><td><span style="color:var(--c-crt-amber)">Claude Opus 4.8</span></td></tr>
<tr><td>コード生成</td><td><span style="color:var(--c-crt-amber)">Claude Sonnet 4.6</span></td></tr>
<tr><td>テスト作成</td><td><span style="color:var(--c-crt-amber)">Claude Sonnet 4.6</span></td></tr>
<tr><td>コードレビュー</td><td><span style="color:var(--c-neon-cyan)">GPT-5.5 Codex</span></td></tr>
<tr><td>CI/CD・自動化</td><td><span style="color:var(--c-neon-cyan)">GPT-5.4 Codex</span></td></tr>
<tr><td>ドキュメント</td><td><span style="color:var(--c-neon-magenta)">Gemini 3.1 Pro</span></td></tr>
<tr><td>大量処理・コスト重視</td><td><span style="color:var(--c-gb-green)">MAI-Code-1-Flash</span></td></tr>
</tbody>
</table>

<div style="font-size:0.85em;margin-top:0.6em;letter-spacing:0.05em;">
<span style="color:var(--c-crt-amber);font-weight:bold;">● Anthropic</span>&nbsp;&nbsp;<span style="color:var(--c-neon-cyan);font-weight:bold;">● OpenAI</span>&nbsp;&nbsp;<span style="color:var(--c-neon-magenta);font-weight:bold;">● Google</span>&nbsp;&nbsp;<span style="color:var(--c-gb-green);font-weight:bold;">● Microsoft</span>
</div>

> 出典（ベンチマーク）：<a href="https://www.swebench.com/" target="_blank" rel="noopener noreferrer" class="retro-link">SWE-bench Verified ↗</a> ・ <a href="https://www.tbench.ai/" target="_blank" rel="noopener noreferrer" class="retro-link">Terminal-Bench ↗</a> ・ <a href="https://aider.chat/docs/leaderboards/" target="_blank" rel="noopener noreferrer" class="retro-link">Aider Polyglot ↗</a> ・ <a href="https://lmarena.ai/" target="_blank" rel="noopener noreferrer" class="retro-link">LMArena ↗</a>。モデルはあくまで一例で、タスクや好みによって変わる。
