---
title: インストラクション（Instructions）
titleEn: Instructions
summary: リポジトリやファイル単位でAIに常駐のルールを与える"指示書"。チーム全員のCopilotが同じ規約に従うようになる。
icon: /theomonfort/icons/instructions.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
order: 5
category: plan
related: ['agent-skills']
links:
  - group: 👤 Personal インストラクション
    label: GitHub Docs — GitHub.com Personal instructions for Copilot Chat
    url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-personal-instructions
  - group: 👤 Personal インストラクション
    label: GitHub Docs — Copilot CLI custom instructions
    url: https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions
  - group: 👤 Personal インストラクション
    label: VS Code — Customize Copilot Chat with instructions
    url: https://code.visualstudio.com/docs/copilot/copilot-customization
  - group: 📦 Repository インストラクション
    label: GitHub Docs — Add repository custom instructions
    url: https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions
  - group: 📦 Repository インストラクション
    label: VS Code — Use custom instructions in VS Code
    url: https://code.visualstudio.com/docs/agent-customization/custom-instructions
  - group: 🏢 Organization インストラクション
    label: GitHub Docs — Add organization custom instructions
    url: https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/configure-custom-instructions/add-organization-instructions
  - group: 📚 もっと学ぶ
    label: GitHub Docs — Customize Copilot responses with custom instructions
    url: https://docs.github.com/copilot/customizing-copilot/about-customizing-github-copilot-chat-responses
  - group: 📰 Recent Changelog
    label: "Organization custom instructions are now generally available (2026-04-02)"
    url: https://github.blog/changelog/2026-04-02-copilot-organization-custom-instructions-are-generally-available
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Instructions</strong> は、Copilot に守ってほしい開発ルールをあらかじめ渡すための指示書。
  </p>
  <p>
    Repository / Organization / Personal のスコープで読み込まれ、毎回プロンプトに書かなくてもチームの規約を適用できる。
  </p>
</div>


## 3 つのスコープ <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting/response-customization" target="_blank" rel="noopener noreferrer">📖 Docs</a>

| スコープ | 📁 場所 | 💡 用途 |
| --- | --- | --- |
| 👤 **Personal**（個人） | **CLI**：`~/.copilot/copilot-instructions.md`<br/>**VS Code**：User Settings（`github.copilot.chat.*.instructions`）<br/>**GitHub.com**：Copilot Chat → プロフィール画像 → Personal Instructions | スタイルの好み・回答言語・個人的な書き方 |
| 📦 **Repository**（リポジトリ） | `.github/copilot-instructions.md`（単一）<br/>または `.github/instructions/*.instructions.md`（`applyTo` 付き） | プロジェクト規約・フレームワーク固有ルール・「X ライブラリを必ず使う」 |
| 🏢 **Org / Enterprise**（組織） | GitHub.com → Organization Settings → Copilot -> Custom instructions | コンプライアンス・セキュリティ要件・全社共通ポリシー |

> 🎯 **優先順位**：**Personal → Repository → Organization**。Personal の指示が最も優先され、組織ポリシーを上書きする。

## 📦 Repository レベル

`git clone` で **チーム全員** にプロジェクトの規約を共有する。指示書は **2 つの形式**：

<div class="instructions-repository">
<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.github/copilot-instructions.md</code>
      <span class="setup-card-tag tag-cyan">🌍 グローバル</span>
    </div>
    <p>
      <strong>適用範囲</strong>：リポジトリ全体<br />
      <strong>読込</strong>：常に有効<br />
      <strong>用途</strong>：技術スタック・命名規則・使う / 使わないライブラリ・レビュー基準
    </p>
  </div>
  <div class="setup-card">
    <div class="setup-card-head">
      <code>.github/instructions/*.instructions.md</code>
      <span class="setup-card-tag tag-magenta">🎯 ファイル単位 (パスインストラクション)</span>
    </div>
    <p>
      <strong>適用範囲</strong>：<code>applyTo</code> グロブに一致するファイルのみ<br />
      <strong>読込</strong>：対象を操作する時だけ自動注入<br />
      <strong>用途</strong>：テスト専用・言語別・領域別ルール（フロント / API / DB など）
    </p>
  </div>
</div>

</div>

## ハーネスの中で何が起きる？

まず **常時ロードの指示**。ファイル編集時に **パス別の指示を追加** する。

<figure class="instructions-pipeline">
<svg viewBox="0 0 1100 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ハーネスがリポジトリの指示をモデルコンテキストへ読み込む。ユーザーの DB 編集要求に対し、既存のコンテキストを置き換えず、パスに一致する指示を追加する。">
<defs>
<marker id="instructions-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--c-crt-amber)"/></marker>
<marker id="instructions-cyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-cyan)"/></marker>
<marker id="instructions-magenta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="var(--c-neon-magenta)"/></marker>
</defs>
<g fill="none" stroke-width="2.5">
<path d="M320 70 H730" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
<path d="M170 120 V375 H390 V390" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
<path d="M525 255 V365 H575 V390" stroke="var(--c-neon-magenta)" stroke-dasharray="6 5" marker-end="url(#instructions-magenta)"/>
<path d="M760 390 V360" stroke="var(--c-neon-cyan)" marker-end="url(#instructions-cyan)"/>
<path d="M920 325 H1090 V180 H1080" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
<path d="M820 360 V372 H970 V390" stroke="var(--c-crt-amber)" marker-end="url(#instructions-amber)"/>
</g>
<rect x="20" y="20" width="300" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="38" y="48" fill="var(--c-crt-amber)" font-size="20" font-weight="700">ハーネス</text>
<text x="38" y="78" fill="var(--c-phosphor)" font-size="19"><tspan x="38">常時ロードの指示を</tspan><tspan x="38" dy="25">モデルコンテキストへ追加</tspan></text>
<rect x="730" y="20" width="350" height="240" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-cyan)" stroke-width="1.5"/>
<text x="746" y="45" fill="var(--c-phosphor)" font-size="16">
<tspan x="746" class="instruction-source">.github/copilot-instructions.md</tspan>
<tspan x="746" dy="24" fill="var(--c-neon-cyan)" font-weight="700"># 開発ルール</tspan>
<tspan x="746" dy="22">- TypeScript を使う</tspan><tspan x="746" dy="22">- pnpm を使う</tspan><tspan x="746" dy="22">- テストを書く</tspan>
<tspan x="746" dy="28" class="instruction-source">.github/instructions/db.instructions.md</tspan>
<tspan x="746" dy="24" fill="var(--c-crt-amber)">applyTo: src/db/**</tspan>
<tspan x="746" dy="24" fill="var(--c-neon-cyan)" font-weight="700"># DB ガイドライン</tspan>
<tspan x="746" dy="22">- prepared statement を使う</tspan>
</text>
<rect x="430" y="155" width="190" height="100" rx="3" fill="var(--c-midnight)" stroke="var(--c-neon-magenta)" stroke-width="2"/>
<text x="525" y="187" text-anchor="middle" fill="var(--c-neon-magenta)" font-size="20" font-weight="700">ユーザー</text>
<text x="525" y="222" text-anchor="middle" fill="var(--c-phosphor)" font-size="20">「DB を触って」</text>
<rect x="620" y="290" width="300" height="70" rx="3" fill="var(--c-midnight)" stroke="var(--c-crt-amber)" stroke-width="2"/>
<text x="638" y="318" fill="var(--c-crt-amber)" font-size="20" font-weight="700">ハーネス</text>
<text x="638" y="343" fill="var(--c-phosphor)" font-size="18">パスに一致する指示を追加</text>
<text x="12" y="414" fill="var(--c-phosphor)" font-size="17" font-weight="700"><tspan x="12">モデル</tspan><tspan x="12" dy="24">コンテキスト</tspan></text>
<rect x="120" y="390" width="150" height="60" rx="3" fill="var(--c-gb-green)"/>
<rect x="300" y="390" width="180" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="510" y="390" width="130" height="60" rx="3" fill="var(--c-neon-magenta)"/>
<rect x="670" y="390" width="180" height="60" rx="3" fill="var(--c-neon-cyan)"/>
<rect x="880" y="390" width="180" height="60" rx="3" fill="var(--c-crt-amber)"/>
<g fill="var(--c-shadow-ink)" text-anchor="middle" font-size="17" font-weight="700">
<text x="195" y="414"><tspan x="195">SYSTEM</tspan><tspan x="195" dy="23">+ TOOLS</tspan></text>
<text x="390" y="426">INSTRUCTIONS</text>
<text x="575" y="426">PROMPT</text>
<text x="760" y="414"><tspan x="760">編集リクエスト</tspan><tspan x="760" dy="23" font-size="14">src/db/users.ts</tspan></text>
<text x="970" y="414"><tspan x="970">PATH</tspan><tspan x="970" dy="23">INSTRUCTIONS</tspan></text>
</g>
</svg>
</figure>
