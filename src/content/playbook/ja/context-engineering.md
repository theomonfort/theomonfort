---
title: コンテキストエンジニアリング
titleEn: Context Engineering
summary: AI に渡す文脈を設計する技術。少なすぎず、多すぎず、タスク達成に必要な情報だけを届ける。
icon: /theomonfort/icons/context-engineering.png
color: green
accent:
  text: text-gb-green
  border: border-gb-green
  glow: hover:shadow-neon-green
  shadow: shadow-neon-green
  hex: "#86efac"
order: 8.5
category: plan
related: ['harness-engineering', 'instructions', 'agent-skills', 'mcp']
links:
  - group: 📚 Context Engineering
    label: Context Engineering — interactive guide
    url: https://blog.cloud-eng.nl/context-engineering/
  - group: 📚 Context Engineering
    label: Context Rot — Product Talk
    url: https://www.producttalk.org/context-rot
  - group: 📚 Context Engineering
    label: Well-Architected (GitHub)
    url: https://wellarchitected.github.com/
---

## 一言で

<div class="hero-quote">
  <p>
    <strong>Context Engineering</strong> は、AI に渡す文脈を「できるだけ少なく、でも必要なだけ多く」設計する技術。
  </p>
  <p>
    何でも全部読ませるのではなく、目的・制約・関連ファイル・検証方法を絞って、AI が迷わず次の一手を選べる状態を作る。
  </p>
</div>

> 良い context は量ではなく **選び方**。不要な情報を減らし、必要な情報を欠かさない。

## Context rot（コンテキスト劣化）

大きな window が賢さを保証するわけではない。詰め込みすぎると重要情報が中央に埋もれ（**Lost in the Middle**）、直近の情報を過大評価する（**Recency Bias**）。

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-block context-smart" style="--context-size:60">賢いゾーン</div>
<div class="context-block context-dumb" style="--context-size:40">鈍いゾーン</div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

> Context Engineering の目的は、context window を埋めることではなく、**必要な情報が目立つ状態を保つこと**。

## Input・Cached input・Output トークン

各ターンで context window の中身は **3 種類のトークン** として課金される。これを知ると、長いセッションのコストの理由が分かる。

| 種類 | 中身 | 相対コスト |
| --- | --- | --- |
| 🟥 Input | このターンで新規送信 — prompt・ファイル・ツール結果 | 標準 |
| 🟦 Cached input | 前ターンから再送され、キャッシュから供給される文脈 | 最安（大幅割引） |
| 🟩 Output | モデルが生成して返すテキスト | 最も高い |

長い会話では window の大半が **cached input**（履歴が毎ターン再送される）なので、キャッシュがコストを抑える鍵。節約は **output** と追加する **input** を削ることで効く。

> 💡 続くターン別スライドは、各ブロックをこのトークン種別で色分けしている。

## コンテキストウィンドウ：Start（turn 1）

Start はほぼ理想状態。常時必要な **System/tools**（skills descriptions / copilot-instructions / MCP servers）だけが入り、作業用の余白が大きい。最初のターンでは初めて送られるので、これらは **Input トークン** として課金される。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:10"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div></div>
<div class="context-available" style="--context-share:90"><div class="context-block context-free" style="--context-size:75">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

## コンテキストウィンドウ：Custom agent（turn 1）

Custom agent に切り替えると、その agent instruction が context に追加される。System & tools も Custom Agent もこのターンで初めて送られるので、すべて **Input トークン** として課金される。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:20"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div></div></div>
<div class="context-available" style="--context-share:80"><div class="context-block context-free" style="--context-size:65">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

## コンテキストウィンドウ：Prompt（turn 1）

Prompt を書く。たとえば「test を追加して」と頼むと、関連 skill と test 用の path instruction が読み込まれることがある。コンテキスト内の要素すべてが、このターンで初めて送られる **Input トークン**。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:50"><div class="context-part" style="--context-size:50;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div></div>
<div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Path instruction</div>
<div class="context-block context-input" style="--context-size:10">Skill</div>
<div class="context-block context-input" style="--context-size:10">Prompt</div></div></div></div>
<div class="context-available" style="--context-share:50"><div class="context-block context-free" style="--context-size:35">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

## コンテキストウィンドウ：Sub-agent（turn 1）

agent が **sub-agent** を呼ぶことがある。たとえば codebase の explore、database 検索、review など。sub-agent の summary が main context に返ってくる。コンテキスト内の要素すべてが、このターンで初めて送られる **Input トークン**。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:60"><div class="context-part" style="--context-size:60;--context-direction:row"><div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div>
<div class="context-block context-input" style="--context-size:10">Path instruction</div></div>
<div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Skill</div>
<div class="context-block context-input" style="--context-size:10">Prompt</div>
<div class="context-block context-input" style="--context-size:10">Sub-agent data</div></div></div></div>
<div class="context-available" style="--context-share:40"><div class="context-block context-free" style="--context-size:25">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

## コンテキストウィンドウ：Memory（turn 1）

Repo で作業を続けると、memory が生成され、必要な時に動的に読み込まれることがある。コンテキスト内の要素すべてが、依然としてこのターンの新規 **Input トークン**。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:70"><div class="context-part" style="--context-size:70;--context-direction:row"><div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div>
<div class="context-block context-input" style="--context-size:10">Path instruction</div></div>
<div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Skill</div>
<div class="context-block context-input" style="--context-size:10">Prompt</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Sub-agent data</div>
<div class="context-block context-input" style="--context-size:10">Memory</div></div></div></div></div>
<div class="context-available" style="--context-share:30"><div class="context-block context-free" style="--context-size:15">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

## コンテキストウィンドウ：Output（turn 1）

LLM が応答する。返ってきた **Answer** は context に追加される。これは **Output トークン** で、Input トークンとは別の（通常は高めの）レートで課金される。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規送信） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#a16207;border:1px solid #fbbf24;vertical-align:middle;margin-right:0.3em"></span><strong>Output トークン</strong>（LLM の応答） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:80"><div class="context-part" style="--context-size:80;--context-direction:row"><div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-input" style="--context-size:10">Custom Agent</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Path instruction</div>
<div class="context-block context-input" style="--context-size:10">Skill</div></div></div>
<div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Prompt</div>
<div class="context-block context-input" style="--context-size:10">Sub-agent data</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-input" style="--context-size:10">Memory</div>
<div class="context-block context-output" style="--context-size:10">Answer</div></div></div></div></div>
<div class="context-available" style="--context-share:20"><div class="context-block context-free" style="--context-size:5">Free space</div>
<div class="context-block context-buffer" style="--context-size:15">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>

## コンテキストウィンドウ：Cache input（turn 2）

turn 1 は**回答も含めて Cached input** として再利用できる。新しい Input は **Prompt #2** だけ。キャッシュヒットは保証されない。

<p class="legend"><span style="display:inline-block;width:0.85em;height:0.85em;background:#475569;border:1px solid #cbd5e1;vertical-align:middle;margin-right:0.3em"></span><strong>Cache input トークン</strong>（保証されない） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#7a1748;border:1px solid var(--c-neon-magenta);vertical-align:middle;margin-right:0.3em"></span><strong>Input トークン</strong>（このターンで新規） &nbsp;·&nbsp; <span style="display:inline-block;width:0.85em;height:0.85em;background:#0891b2;border:1px solid var(--c-link);vertical-align:middle;margin-right:0.3em"></span>Free space / Buffer</p>

<figure class="context-diagram">
<div class="context-window" role="group" aria-label="コンテキストウィンドウの構成例"><div class="context-occupied" style="--context-share:90"><div class="context-part" style="--context-size:90;--context-direction:row"><div class="context-part" style="--context-size:40;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">System &amp; tools</div>
<div class="context-block context-cache" style="--context-size:10">Custom Agent</div></div>
<div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">Path instruction</div>
<div class="context-block context-cache" style="--context-size:10">Skill</div></div></div>
<div class="context-part" style="--context-size:50;--context-direction:row"><div class="context-part" style="--context-size:20;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">Prompt</div>
<div class="context-block context-cache" style="--context-size:10">Sub-agent data</div></div>
<div class="context-part" style="--context-size:30;--context-direction:column"><div class="context-block context-cache" style="--context-size:10">Memory</div>
<div class="context-block context-cache" style="--context-size:10">Answer</div>
<div class="context-block context-input" style="--context-size:10">Prompt #2</div></div></div></div></div>
<div class="context-available" style="--context-share:10"><div class="context-block context-free" style="--context-size:5">Free space</div>
<div class="context-block context-buffer" style="--context-size:5">Buffer</div></div></div>
<figcaption>説明用の比率。実測トークン数ではない。</figcaption>
</figure>
