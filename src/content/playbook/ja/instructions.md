---
title: インストラクション（Instructions）
titleEn: Instructions
summary: リポジトリやファイル単位でAIに常駐のルールを与える"指示書"。チーム全員のCopilotが同じ規約に従うようになる。
icon: /theomonfort/icons/instructions.png
color: amber
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


## 3 つのスコープ

| スコープ | 📁 場所 | 💡 用途 |
| --- | --- | --- |
| 👤 **Personal**（個人） | **CLI**：`~/.copilot/copilot-instructions.md`<br/>**VS Code**：User Settings（`github.copilot.chat.*.instructions`）<br/>**GitHub.com**：Copilot Chat → プロフィール画像 → Personal Instructions | スタイルの好み・回答言語・個人的な書き方 |
| 📦 **Repository**（リポジトリ） | `.github/copilot-instructions.md`（単一）<br/>または `.github/instructions/*.instructions.md`（`applyTo` 付き） | プロジェクト規約・フレームワーク固有ルール・「X ライブラリを必ず使う」 |
| 🏢 **Org / Enterprise**（組織） | GitHub.com → Organization Settings → Copilot -> Custom instructions | コンプライアンス・セキュリティ要件・全社共通ポリシー |

> 🎯 **優先順位**：Personal → Repository → Organization の順に強い。**Personal の指示が最も優先される**ため、ユーザー設定が組織ポリシーよりも上書きする側に立つ（詳細は <a href="https://docs.github.com/en/copilot/concepts/prompting/response-customization" target="_blank" rel="noopener noreferrer" class="retro-link">公式ドキュメント</a> を参照）。

## 📦 Repository レベル

**チーム全員** に効くルール。`git clone` した瞬間にプロジェクト固有の規約が Copilot に伝わる。**2 つのファイル形式** がある：

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

```yaml
---
applyTo: "server/tests/test_*.py"
---
このファイルは pytest の関数型テスト。
- fixture は `conftest.py` から読む
- assert は 1 関数に 1 つまで
- LLM call は必ず mock すること
```

## ハーネスの中で何が起きる？

セッション開始時、ハーネスはまず **常時ロードの Instructions**（`.github/copilot-instructions.md`）をコンテキストに入れる。その後、ユーザーが特定パスのファイルを編集しようとすると、ハーネスは `applyTo` グロブが一致する **path-specific Instructions** だけを追加でコンテキストに読み込む。

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
  <path d="M 140 85 L 140 415 L 350 415 L 350 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 475 240 L 475 420" fill="none" stroke="#ff2e88" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrow-pink)"/>
  <path d="M 610 420 L 610 338" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <path d="M 660 335 L 660 400 L 775 400 L 775 420" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <path d="M 705 290 L 712 290 L 712 195 L 720 195" fill="none" stroke="#ffb000" stroke-width="2" marker-end="url(#arrow-orange)"/>
  <rect x="20" y="15" width="240" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="35" y="36" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">ハーネス</text>
  <text x="35" y="58" fill="#e8f4ff" font-size="12" font-weight="bold">INSTRUCTIONS を</text>
  <text x="35" y="74" fill="#e8f4ff" font-size="12" font-weight="bold">Context に追加</text>
  <rect x="720" y="15" width="340" height="215" rx="6" fill="#0a0e27" stroke="#1e2a4a" stroke-width="1"/>
  <text x="735" y="40" font-size="10" fill="#cfe9ff">
    <tspan x="735" dy="0" fill="#888">.github/copilot-instructions.md</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="14" fill="#00f0ff" font-weight="bold"># 開発ルール</tspan>
    <tspan x="735" dy="14">- TypeScript を使う</tspan>
    <tspan x="735" dy="14">- pnpm を使う</tspan>
    <tspan x="735" dy="14">- テストを書く</tspan>
    <tspan x="735" dy="22" fill="#888">.github/instructions/db.instructions.md</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="14"><tspan fill="#ffb000">applyTo:</tspan> src/db/**</tspan>
    <tspan x="735" dy="14" fill="#555">---</tspan>
    <tspan x="735" dy="22" fill="#00f0ff" font-weight="bold"># DB ガイドライン</tspan>
    <tspan x="735" dy="14">- prepared statement を使う</tspan>
  </text>
  <rect x="415" y="160" width="120" height="80" rx="12" fill="#0a0e27" stroke="#ff2e88" stroke-width="2"/>
  <text x="475" y="185" fill="#ff2e88" font-size="12" font-weight="bold" letter-spacing="1" text-anchor="middle">ユーザー</text>
  <text x="475" y="212" fill="#e8f4ff" font-size="14" font-weight="bold" text-anchor="middle">「DB を</text>
  <text x="475" y="230" fill="#e8f4ff" font-size="14" font-weight="bold" text-anchor="middle">触って」</text>
  <rect x="485" y="265" width="220" height="70" rx="12" fill="#0a0e27" stroke="#ffb000" stroke-width="2"/>
  <text x="500" y="286" fill="#ffb000" font-size="11" font-weight="bold" letter-spacing="1">ハーネス</text>
  <text x="500" y="308" fill="#e8f4ff" font-size="12" font-weight="bold">path に一致する</text>
  <text x="500" y="324" fill="#e8f4ff" font-size="12" font-weight="bold">INSTRUCTION を読込</text>
  <text x="605" y="375" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="end"><tspan x="605" dy="0">src/db/users.ts</tspan><tspan x="605" dy="12">を編集する</tspan></text>
  <text x="80" y="441" fill="#e8f4ff" font-size="11" font-weight="bold" letter-spacing="1"><tspan x="80" dy="0">モデル</tspan><tspan x="80" dy="13">コンテキスト</tspan></text>
  <rect x="155" y="420" width="110" height="55" rx="10" fill="#9bbc0f"/>
  <text x="210" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">SYSTEM</text>
  <text x="210" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">&amp; TOOLS</text>
  <rect x="295" y="420" width="110" height="55" rx="10" fill="#00f0ff"/>
  <text x="350" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTIONS</text>
  <rect x="435" y="420" width="80" height="55" rx="10" fill="#ff2e88"/>
  <text x="475" y="453" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PROMPT</text>
  <rect x="545" y="420" width="130" height="55" rx="10" fill="#00f0ff"/>
  <text x="610" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">FILE EDIT</text>
  <text x="610" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">REQUEST</text>
  <rect x="705" y="420" width="140" height="55" rx="10" fill="#ffb000"/>
  <text x="775" y="444" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">PATH</text>
  <text x="775" y="460" fill="#05060f" font-size="11" font-weight="bold" text-anchor="middle">INSTRUCTION</text>
</svg>
</figure>
