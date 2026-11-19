---
title: Copilot Memory（エージェント記憶）
titleEn: Copilot Memory
summary: リポジトリの知識、自分の好み、Dreaming による整理。
icon: /theomonfort/icons/copilot-memory.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
order: 19
category: operate
related: ['cloud-agent', 'copilot-code-review', 'cli', 'instructions']
links:
  - group: 📖 公式ドキュメント
    label: Copilot Memory
    url: https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory
  - group: 📖 公式ドキュメント
    label: 記憶を作る
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/create-memories
  - group: 📖 公式ドキュメント
    label: Copilot Dreaming
    url: https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming
  - group: 🛠️ 設定と管理
    label: 個人の Memory / Dreaming
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-for-yourself
  - group: 🛠️ 設定と管理
    label: リポジトリと組織の管理 / Dreaming の実行結果
    url: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/copilot-memory/manage-as-administrator
---

## 一言で <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory" target="_blank" rel="noopener noreferrer">📖 Docs</a>

<div class="hero-quote">
  <p>
    <strong>Memory</strong> は repo の知識と自分の好みを記憶。<strong>Dreaming</strong> は記憶を自動で整理。
  </p>
  <p>
    repo レベルでは、Dreaming が <strong>ハーネスの更新</strong>（Skills / Instructions）を <strong>PR で提案</strong>することも。
  </p>
</div>

## Repo の知識 / 自分の好み <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#types-of-memories" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Copilot Memory のスコープは 2 つ：**Repository**（repo の全員で共有）と **Personal**（自分だけ、repo をまたぐ）。

<div class="setup-cards">
  <div class="setup-card">
    <div class="setup-card-head"><strong>📦 Repository</strong><span class="setup-card-tag tag-cyan">チームの知識</span></div>
    <p>構造、規約、ビルド手順。<br />例：「検証は <code>pnpm build</code>」</p>
    <ul class="setup-card-paths">
      <li><strong>範囲：</strong>同じリポジトリだけ</li>
      <li><strong>根拠：</strong>ソースコードの引用</li>
    </ul>
  </div>
  <div class="setup-card">
    <div class="setup-card-head"><strong>👤 Personal</strong><span class="setup-card-tag tag-magenta">自分の作業へ</span></div>
    <p>機密ではない、明確に伝えた好み。<br />例：「説明は短く」</p>
    <ul class="setup-card-paths">
      <li><strong>範囲：</strong>repo をまたぐ自分だけの好み</li>
      <li><strong>根拠：</strong>自分の発言</li>
    </ul>
  </div>
</div>

Business / Enterprise：個人記憶は**請求元ごとに分離**。管理者も閲覧、エクスポート、削除が可能。

**Code Review / Agentic Autofix は repo 記憶のみ**を使う。

## 覚える → 確かめる → 見直す <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-memory#how-memories-are-created" target="_blank" rel="noopener noreferrer">📖 Docs</a>

「**覚えて**」と依頼もできる。保存するかは Copilot が判断。

| ステップ | Copilot がすること |
| --- | --- |
| **① 保存** | 長く役立つ事実や好みを選ぶ |
| **② 再利用** | 関連する repo の事実を現在のブランチと照合 |
| **③ 見直し** | 有用なら upvote、古い情報や誤りなら downvote |

記憶は**作成または最後の upvote から 90 日**で期限切れ。読み出すだけでは延長されない。repo の記憶は管理者が **7〜180 日**に変更可能（2026-11-11 時点）。

## Copilot Dreaming（NEW） <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming#how-changes-are-applied" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Dreaming は記憶の追加、更新、削除を **自動で行う**。

| 対象 | 更新対象 | 変更の反映方法 |
| --- | --- | --- |
| **📦 Repo** | repo の記憶 | Instructions / Skills の変更を **PR で提案** |
| **👤 Personal** | 個人の記憶 | 個人の Instructions / Skills ファイルは **変更しない** |
| **🔍 Code review** | マージ済み PR のフィードバックと現コードに基づく内部ガイダンス | 内部ガイダンスを更新し、**PR は作らない** |

ファイルは **PR マージ後**に変更。変更なしでも **AI credits を消費**。

## 設定もスコープごとに分ける <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/prompting-and-context/copilot-dreaming#availability-and-prerequisites" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Memory は有料プランで利用可能。Dreaming は対象プランの **Public preview**、別設定で既定 **OFF**（2026-11-11 時点）。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">👤</span><span class="ctl-name">Personal</span><span class="ctl-when">自分の記憶だけ</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">設定</span><span class="ctl-v"><strong>GitHub.com → Settings → Copilot → Features</strong> の Memory と Dreaming。管理対象ではポリシーの許可も必要。</span></p>
<p class="ctl-row"><span class="ctl-k">境界</span><span class="ctl-v">個人の Dreaming を OFF にしても、組織の repo 実行は止まらない。</span></p>
</div>
</details>
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">📦</span><span class="ctl-name">Repository</span><span class="ctl-when">repo の知識とガイダンス</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Organization</span><span class="ctl-v"><strong>Settings → Copilot → Policies</strong> の Repository access と Dreaming。Enterprise の制限が優先。</span></p>
<p class="ctl-row"><span class="ctl-k">個人所有 repo</span><span class="ctl-v">対象の個人契約のみの場合：<strong>Repo → Settings → Copilot → Memory / Dreaming</strong>。個人記憶とは別設定。</span></p>
</div>
</details>
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔑</span><span class="ctl-name">Dreaming の利用条件</span><span class="ctl-when">Public preview</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">必要なもの</span><span class="ctl-v">対象の有料プラン（<strong>Pro は対象外</strong>）、GPT-6.1 Sol、対象の Memory と Dreaming の許可。データレジデンシー付き GHEC は非対応。</span></p>
<p class="ctl-row"><span class="ctl-k">有効化</span><span class="ctl-v">前提条件を後から満たした場合、該当スコープの Dreaming を OFF → ON にする。</span></p>
</div>
</details>
<details class="ctl-item" name="memory-settings">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">☁️</span><span class="ctl-name">セッション同期</span><span class="ctl-when">機能によって異なる</span><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">Repo / Personal</span><span class="ctl-v">同期が必要。管理対象では CLI の <strong>Store local sessions in the Cloud</strong> を少なくとも <strong>View from cloud</strong> に設定。</span></p>
<p class="ctl-row"><span class="ctl-k">Code review</span><span class="ctl-v">同期不要。Code review とその preview 機能は有効化が必要。</span></p>
</div>
</details>
</div>
</div>
