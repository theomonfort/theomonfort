---
title: Copilot App
titleEn: Copilot App
summary: 目標とコンテキストを渡し、成果をレビュー。複数リポジトリのエージェントを指揮し、資料も作成。クラウドセッションは別の端末から続けられる。
icon: /theomonfort/github-copilot-white-icon.svg
color: magenta
accent:
  text: text-neon-magenta
  border: border-neon-magenta
  glow: hover:shadow-neon-magenta
  shadow: shadow-neon-magenta
  hex: "#93a8ff"
order: 16.7
category: develop
related: ['cloud-agent', 'cli', 'partner-agent', 'agentic-workflow']
links:
  - group: 📖 公式ドキュメント
    label: About the GitHub Copilot app
    url: https://docs.github.com/en/copilot/concepts/copilot-surfaces/github-copilot-app
  - group: 📖 公式ドキュメント
    label: Projects とコンテキスト共有
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects
  - group: 📖 公式ドキュメント
    label: Working with agent sessions
    url: https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions
  - group: 📖 公式ドキュメント
    label: Optimizing your AI usage
    url: https://docs.github.com/en/copilot/tutorials/optimize-ai-usage
  - group: 📖 公式ドキュメント
    label: Connectors とアクセス制御
    url: https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors
  - group: 📖 公式ドキュメント
    label: 画像の生成と編集
    url: https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation
  - group: 📖 公式ドキュメント
    label: クラウドサンドボックスとセッション継続
    url: https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes
  - group: 📰 発表
    label: "Copilot app の Universe 発表 (2026-10-28)"
    url: https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases
  - group: 📰 発表
    label: "Office ネイティブ対応: app v1.1.35"
    url: https://github.com/github/app/releases/tag/v1.1.35
  - group: 🎬 Universe
    label: Universe 2026 の発表とデモ
    url: https://github.com/events/universe/recap
  - group: ⬇️ ダウンロード
    label: GitHub Copilot app download
    url: https://gh.io/app
---

## 一言で

<div class="hero-quote">
  <p><strong>コードの作業だけでなく、達成したい目標を Copilot に渡す。</strong></p>
  <p>リポジトリ、デザイン、ツールを集めて並列エージェントを指揮。<strong>資料、変更、プルリクエスト</strong>を 1 つのアプリでレビューする。</p>
</div>

## コードの外へ広がる 6 つの機能 <a class="h2-doc" href="https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases" target="_blank" rel="noopener noreferrer">📖 Docs</a>

Universe '26 の機能、提供状況は **2026-11-11 時点**。

<div class="setup-cards">
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use" target="_blank" rel="noopener noreferrer">Computer use ↗</a></strong><span class="setup-card-tag tag-magenta">Public preview</span></div>
<p>API のないアプリも操作。</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors" target="_blank" rel="noopener noreferrer">Connectors ↗</a></strong><span class="setup-card-tag tag-magenta">Public preview</span></div>
<p>Slack、Figma、Work IQ を活用。</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation" target="_blank" rel="noopener noreferrer">画像の生成と編集 ↗</a></strong><span class="setup-card-tag tag-magenta">Public preview</span></div>
<p>チャットで画像を作り、修正する。</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://github.com/github/app/releases/tag/v1.1.35" target="_blank" rel="noopener noreferrer">Office ファイル ↗</a></strong><span class="setup-card-tag tag-cyan">App feature</span></div>
<p>文書、表、スライドを直接編集。</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes" target="_blank" rel="noopener noreferrer">クラウド実行 ↗</a></strong><span class="setup-card-tag tag-cyan">GA</span></div>
<p>PC を閉じてもエージェントは動く。</p>
</div>
<div class="setup-card">
<div class="setup-card-head"><strong><a class="retro-link" href="https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience" target="_blank" rel="noopener noreferrer">セッションの継続 ↗</a></strong><span class="setup-card-tag tag-cyan">GA</span></div>
<p>同じクラウド作業を別端末で継続。</p>
</div>
</div>

## Projects: 目標を渡して任せる <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-copilot-app-project" class="demo-toggle" /><label class="h2-demo" for="demo-copilot-app-project">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-copilot-app-project" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">仕様書からプロジェクトへ</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-copilot-app-project" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li><p class="demo-step-title">プロジェクトを作る</p><p><b>Projects</b> 横の <b>+</b> をクリック。所有する既存のデモリポジトリを選ぶか、リポジトリなしで開始する。</p></li>
<li><p class="demo-step-title">仕様書を渡す</p><p><b>Library → Add → Add file…</b> から、機密情報のないサンプル仕様書を追加する。</p></li>
<li><p class="demo-step-title">範囲を決めて依頼する</p><p><code class="demo-path">Library の仕様書を読み、実装タスク 3 件と受け入れ条件を提案して。コードの編集やプルリクエストの作成はしないで。</code></p></li>
<li><p class="demo-step-title">結果を確認する</p><p><b>Overview</b> で進捗と <b>Needs input</b> を確認。会話や <b>Library</b> で成果を見る。</p><p class="demo-out">仕様、判断、成果が 1 つのプロジェクトにまとまる。</p></li>
</ol>
</div>
</div>

**Public preview。** 継続的な目標を、**1 つ、複数、またはリポジトリなし**で進める。

| 人が渡すもの | Copilot が調整するもの | 人が確認するもの |
| --- | --- | --- |
| 目標と制約 | 並列エージェントセッション | **Overview** の進捗 |
| **Library** の仕様やデザイン | 共通の文脈と成果物 | **Needs input** の判断事項 |
| 定型作業とスケジュール | プロジェクトの自動化 | 結果と次回の実行予定 |

単一リポジトリの作業は直接 **session** を開始。広い目標に向けた調整には **project** を使う。

## リポジトリの外の情報をつなぐ <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/customizations/copilot-connectors" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**Connectors = GitHub 検証済み MCP サーバー。** 一度サインインすれば、対応する Copilot クライアントで接続を再利用できる。

| 情報源 | できること |
| --- | --- |
| **Slack** | API の設計を決めた議論を探す。 |
| **Figma** | デザインを実装のコンテキストにする。 |
| **Work IQ** | Teams や SharePoint から要件を探す。 |

**発表時は 26 サービス（2026-10-28）。** App / CLI / VS Code / Web、Mobile はクラウド経由。設定は **Customize → MCP → GitHub verified**。

> ⚠️ Public preview。プレビューと MCP のポリシー、許可リスト、接続先の権限が必要。ローカルとクラウドサンドボックスで利用でき、**Actions 上のセッションは対象外**。

## 回答だけでなく、ファイルを作る <a class="h2-doc" href="https://github.com/github/app/releases/tag/v1.1.35" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**画像はチャット**で、**Office ファイルはネイティブキャンバス**で作成、修正。

| 出力 | 依頼の例 |
| --- | --- |
| **画像** | アイコンを生成して、背景を変更。 |
| **Word** | 概要から仕様書を作成。 |
| **Excel** | 表を整理してグラフを追加。 |
| **PowerPoint** | 資料を作り、スライドを修正。 |

Office は直接編集で、Computer use とは別機能（**v1.1.35、2026-11-04**）。共有前にレイアウトと数式を確認する。

> ⚠️ <a class="retro-link" href="https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/image-generation" target="_blank" rel="noopener noreferrer">画像生成 ↗</a>は Public preview。Free / Student は対象外。画像モデルの許可が必要で、AI クレジットは会話モデルと別に計上される。

## Computer use: アプリを操作する <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/computer-use" target="_blank" rel="noopener noreferrer">📖 Docs</a> <input type="checkbox" id="demo-copilot-app-computer" class="demo-toggle" /><label class="h2-demo" for="demo-copilot-app-computer">&#9658; DEMO</label>

<div class="demo-panel">
<label class="demo-scrim" for="demo-copilot-app-computer" aria-label="デモ手順を閉じる"></label>
<div class="demo-window" role="group" aria-label="デモ手順">
<div class="demo-head"><span class="demo-tag">DEMO</span><span class="demo-name">アプリを読み取り専用で確認</span><span class="demo-note">発表者専用</span><label class="demo-close" for="demo-copilot-app-computer" aria-label="閉じる">&#10005;</label></div>
<ol class="demo-steps">
<li><p class="demo-step-title">ローカルで有効化</p><p>macOS または Windows のローカルセッションで、<b>Settings → Computer Use → Enable Computer Use</b> を有効化。macOS は <b>Accessibility</b> と <b>Screen Recording</b> を許可し、必要なら <b>Check again</b>。</p></li>
<li><p class="demo-step-title">承認を手動にする</p><p><b>Tool permissions → Ask every time</b> を選ぶ。機密情報のないサンプルを、インストール済みアプリで開く。</p></li>
<li><p class="demo-step-title">読み取りだけを依頼</p><p><code class="demo-path">APP_NAME のメイン画面を読み、要約して。値の変更や送信はしないで。</code> <b>APP_NAME</b> を実際のアプリ名に置き換え、意図したアクセスだけを承認する。</p></li>
<li><p class="demo-step-title">確認して停止</p><p>要約を元の画面と比較。実行中の操作は <b>Stop</b> または <b>Esc</b> で中断できる。</p><p class="demo-out">API を使わず、実際のデスクトップアプリを読み取れる。</p></li>
</ol>
</div>
</div>

**Public preview、macOS / Windows のローカルセッション限定。** API、CLI、MCP がないアプリにも使える。

- **読み取りと操作：** 画面の内容を読み、クリック、文字入力、画面遷移を行う。
- **範囲を指定：** アプリ名、期待する結果、変更してはいけないものを伝える。
- **アクセスを制御：** 有効化後も **Tool Permissions** に従う。**Esc** で停止でき、管理者による無効化も可能。

macOS は **Accessibility + Screen Recording** の許可が必要。Office キャンバスとは別機能で、クラウドサンドボックス内では動かない。

## 同じクラウドセッションを持ち歩く <a class="h2-doc" href="https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**App → Mobile → Web → VS Code / CLI。** 会話、ファイル、進捗を引き継ぐ。

| 機能 | できること |
| --- | --- |
| **実行** | GitHub 管理の隔離 Linux 環境。PC の接続を切っても動く。 |
| **再開** | スナップショットから再開。総実行時間 1 時間の上限なし。 |
| **継続** | Slack / Teams でも開始。DM のセッションは他クライアントで継続。 |

**有料 Copilot プランで GA**（<a class="retro-link" href="https://github.blog/changelog/2026-10-28-work-from-anywhere-with-a-new-connected-copilot-cloud-experience" target="_blank" rel="noopener noreferrer">2026-10-28 ↗</a>）。クラウドのポリシーに従う。

> ⚠️ 開始時に Cloud を選ぶ。ローカルセッションの自動移行ではない。計算資源とストレージは従量課金。**1 時間の上限なし ≠ 無料で無制限**。

## 作業を任せても、判断は手元に <a class="h2-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions" target="_blank" rel="noopener noreferrer">📖 Docs</a>

**協働のしかた**と、ツールに許可する操作は別々に選ぶ。

| モード | 人の役割 |
| --- | --- |
| **Interactive** | 一段階ずつ方針を伝える。 |
| **Plan** | 実行前に計画をレビューして承認する。 |
| **Autopilot** | 明確な作業を委任し、結果をレビューする。 |

- **モデルまたは Fusion** と instructions / skills を選ぶ。差分と PR をレビュー。
- **Worktree ≠ sandbox：** 編集はブランチで分離。ローカルツールの制限にはサンドボックスを使う。

アプリは **macOS / Windows / Linux** と全 Copilot プランに対応（**2026-11-11 時点**）。Business / Enterprise はアプリのポリシー許可が必要。個別機能の条件は別。

## <span class="app-demo-title">デモ：不正請求スコアリング</span>

<div class="app-demo-scenario">
<style>
.prose-akq .app-demo-scenario,.prose-akq .playbook-demo-video{font:clamp(16px,1.3vw,20px)/1.4 var(--font-prose),sans-serif;color:var(--c-phosphor)}
.prose-akq .app-demo-scenario p,.prose-akq .playbook-demo-video p{margin:0}
.prose-akq .app-demo-scenario .app-demo-lead{font-size:1.1em;margin-bottom:14px}
.prose-akq .app-demo-context{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 16px}
.prose-akq .app-demo-context span{padding:4px 10px;border:1px solid rgb(var(--rgb-neon-magenta) / 0.5);background:rgb(var(--rgb-deep-purple) / 0.8)}
.prose-akq .app-demo-stages{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.prose-akq .app-demo-stage{padding:14px;border-top:2px solid var(--c-neon-magenta);background:rgb(var(--rgb-deep-purple) / 0.8)}
.prose-akq .app-demo-scenario .app-demo-stage h3{margin:0 0 10px;font-size:1.1em;line-height:1.3;color:var(--c-neon-magenta)}
.prose-akq .app-demo-scenario .app-demo-control{margin-top:16px;padding-left:12px;border-left:3px solid var(--c-crt-amber)}
.prose-akq > h2:has(.app-demo-title){margin-bottom:14px}
.prose-akq .playbook-demo-video video{display:block;width:100%;aspect-ratio:16/9;object-fit:contain;background:var(--c-shadow-ink)}
.prose-akq .playbook-demo-video video:fullscreen{width:100vw;height:100dvh;max-height:none;aspect-ratio:auto;border:0;background:#000}
.prose-akq .playbook-demo-video video::backdrop{background:#000}
.prose-akq .playbook-demo-video video:focus-visible{outline:2px solid var(--c-neon-cyan);outline-offset:3px}
.prose-akq .playbook-video-actions{display:flex;flex-wrap:wrap;align-items:center;gap:10px 18px;margin-top:12px}
.prose-akq .playbook-video-actions button{padding:8px 14px;border:2px solid var(--c-neon-magenta);background:var(--c-deep-purple);color:var(--c-phosphor);font:600 1em var(--font-prose),sans-serif;cursor:pointer}
.prose-akq .playbook-video-actions button:hover,.prose-akq .playbook-video-actions button:focus-visible{background:rgb(var(--rgb-neon-magenta) / 0.13);outline:2px solid var(--c-neon-magenta);outline-offset:3px}
.prose-akq .playbook-video-actions button:disabled{opacity:.6;cursor:wait}
.prose-akq .playbook-demo-video .playbook-video-help{margin-top:8px;font-size:14px;color:var(--c-fg-body)}
.prose-akq .playbook-demo-video [data-video-status]{margin-top:8px;color:var(--c-crt-amber)}
.prose-akq .playbook-demo-video [data-video-status][hidden]{display:none}
body.present-mode .playbook-detail:has(.app-demo-scenario.akq-slide-active,.playbook-demo-video.akq-slide-active){padding-top:88px;padding-bottom:72px}
body.present-mode .prose-akq > h2:has(.app-demo-title){margin:0 0 12px;font-size:clamp(28px,2.2vw,36px);line-height:1.2;letter-spacing:0}
body.present-mode .prose-akq > h2:has(.app-demo-title)::before{top:.35em}
body.present-mode .prose-akq .playbook-demo-video video:not(:fullscreen){max-height:calc(100dvh - 330px)}
body.present-mode .prose-akq .playbook-demo-video:has([data-video-status]:not([hidden])) video:not(:fullscreen){max-height:calc(100dvh - 390px)}
@media(max-width:767px){body.present-mode .playbook-detail:has(.app-demo-scenario.akq-slide-active,.playbook-demo-video.akq-slide-active){padding-left:20px;padding-right:20px}}
@media(max-width:520px){.prose-akq .app-demo-stages{grid-template-columns:1fr}}
</style>
<p class="app-demo-lead"><b>架空の保険会社</b>に、不正請求スコアリングを導入。規程の解釈から、実際の査定業務までをつなぐ。</p>
<p><b>最初に渡すもの：</b>Excel の仕様書と社内規程を Projects / Library に追加。</p>
<div class="app-demo-context" aria-label="4 つのリポジトリ"><span>contracts</span><span>API</span><span>web UI</span><span>docs</span></div>
<div class="app-demo-stages">
<div class="app-demo-stage"><h3>01 / 整理する</h3><p>Fusion が仕様と実装の差を確認。人がルールを決め、Memory に判断を残す。</p></div>
<div class="app-demo-stage"><h3>02 / 実装する</h3><p><code>/goal</code> で委任。リポジトリ間の PR 更新、CI、コードレビュー対応を進める。</p></div>
<div class="app-demo-stage"><h3>03 / 業務につなぐ</h3><p>端末をまたいで継続。既存のデスクトップアプリを操作し、Automations で進捗を見守る。</p></div>
</div>
<p class="app-demo-control"><b>文脈を渡し、ルールを決め、重要な操作を承認するのは人。</b>このデモでは PR は未マージ。査定端末への登録も人が承認する。</p>
</div>

## <span class="app-demo-title">デモ動画：仕様から業務まで</span>

<div class="playbook-demo-video" data-playbook-video data-fullscreen-error="全画面表示を利用できません。通常のプレーヤーの操作ボタンを使ってください。" data-playback-error="再生を開始できませんでした。操作ボタンを試すか、MP4 を直接開いてください。" data-media-error="動画を読み込めませんでした。ページを再読み込みするか、MP4 を直接開いてください。">
<video id="copilot-app-demo-video" controls playsinline preload="metadata" tabindex="0" data-src="/theomonfort/media/copilot-app-fraud-scoring.mp4" poster="/theomonfort/media/copilot-app-fraud-scoring.jpg" aria-label="不正請求スコアリングのデモ動画、日本語テロップ付き" aria-describedby="copilot-app-video-help">
このブラウザーでは動画を再生できません。<a href="/theomonfort/media/copilot-app-fraud-scoring.mp4">MP4 を直接開く</a>。
</video>
<div class="playbook-video-actions"><button type="button" data-video-fullscreen aria-controls="copilot-app-demo-video">▶ 全画面で再生</button><a class="retro-link" href="/theomonfort/media/copilot-app-fraud-scoring.mp4" target="_blank" rel="noopener noreferrer">MP4 を直接開く ↗</a></div>
<p id="copilot-app-video-help" class="playbook-video-help">6 分 43 秒 / 日本語テロップ。標準の再生、シーク、音量操作に対応。Esc で全画面表示を終了。</p>
<p data-video-status role="status" aria-live="polite" hidden></p>
<noscript><p>このプレーヤーには JavaScript が必要です。上のリンクから MP4 を直接開いてください。</p></noscript>
</div>

## Project の継続と作り直しの使い分け <a class="h2-doc" href="https://docs.github.com/en/copilot/tutorials/optimize-ai-usage" target="_blank" rel="noopener noreferrer">📖 Docs</a>

同じ領域の継続目標には数日かけて**同じ Project** を使い、タスクや PR ごとに**新しい Session** を開始。領域が変わるときだけ**新しい Project** を作る。

<div class="ctl-widget">
<div class="ctl-list">
<details class="ctl-item" name="copilot-app-lifecycle" style="--entry-accent:var(--c-gb-green)" open>
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🗂️</span><span class="ctl-name">Project を継続（数日またぎの同じ目標）</span><span class="ctl-when">同じ領域 / 目標</span><a class="ctl-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">継続する状態</span><span class="ctl-v">Project は継続的な目標のための仕組み。紐づけたリポジトリ、<b>Library</b> の仕様書や成果物、<b>Overview</b> の進捗、<b>Automations</b> を日またぎで保持する。</span></p>
<p class="ctl-row"><span class="ctl-k">文脈の保護</span><span class="ctl-v">大量のファイル読み取り、ビルド、差分は子セッション側に隔離され、Project の調整スレッドが肥大化するのを防ぐ。</span></p>
</div>
</details>
<details class="ctl-item" name="copilot-app-lifecycle" style="--entry-accent:var(--c-neon-cyan)">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🔀</span><span class="ctl-name">タスクや PR マージごとに新しい Session</span><span class="ctl-when">PR / タスクごと</span><a class="ctl-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">軽量な文脈</span><span class="ctl-v">完了済みセッションの使い回しは、数万トークンの古い履歴を毎ターン再送する（<b>Optimizing your AI usage §3</b>: 課題が変わったら新しい会話を開始）。</span></p>
<p class="ctl-row"><span class="ctl-k">清潔な Worktree</span><span class="ctl-v"><code>main</code> への squash merge 後も古いセッションの worktree ブランチを使い続けると、<code>main</code> から乖離して不要な競合を招く。</span></p>
</div>
</details>
<details class="ctl-item" name="copilot-app-lifecycle" style="--entry-accent:var(--c-crt-amber)">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">⏱️</span><span class="ctl-name">プロンプトキャッシュの期限とトークンコスト</span><span class="ctl-when">1h / 24h TTL</span><a class="ctl-doc" href="https://docs.github.com/en/copilot/tutorials/optimize-ai-usage#4-preserve-the-cache" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">10% 対 100%</span><span class="ctl-v">キャッシュ済み入力トークンは通常単価の<b>約 10%</b>だが、無操作が続くと大半のモデルで <b>1 時間</b>（OpenAI モデルは <b>24 時間</b>）で失効する。</span></p>
<p class="ctl-row"><span class="ctl-k">再構築を回避</span><span class="ctl-v">数日放置した巨大セッションの再開や、途中のモデル / reasoning effort 変更は全履歴を通常単価で再構築する。新規開始か CLI の <code>/compact</code> を使う。</span></p>
</div>
</details>
<details class="ctl-item" name="copilot-app-lifecycle" style="--entry-accent:var(--c-neon-magenta)">
<summary class="ctl-btn"><span class="ctl-icon" aria-hidden="true">🧭</span><span class="ctl-name">新しい Project（または直接 Session）を作る場面</span><span class="ctl-when">別テーマ / 単発作業</span><a class="ctl-doc" href="https://docs.github.com/en/copilot/how-tos/github-copilot-app/working-with-projects" target="_blank" rel="noopener noreferrer">Docs</a><span class="ctl-toggle" aria-hidden="true"></span></summary>
<div class="ctl-body">
<p class="ctl-row"><span class="ctl-k">別テーマで分離</span><span class="ctl-v">テーマや対象リポジトリ群が変わるときは別 Project を作成し、<b>Library</b> の資料や文脈が混ざるのを防ぐ。</span></p>
<p class="ctl-row"><span class="ctl-k">単発と完了後</span><span class="ctl-v">単一リポジトリの単発修正は調整オーバーヘッドなしの直接 <b>Session</b> で十分。長期施策が 100% 完了し Library の成果物も不要になったら次回は新規作成する。</span></p>
</div>
</details>
</div>
</div>
