# 👋 テオ・モンフォル (Théo Monfort)

**ソリューションズ・エンジニア @ GitHub Japan 🇯🇵**

GitHub Japan で、日本の開発者と企業がより良いソフトウェアを作るお手伝いをしています。
Copilot、Actions、プラットフォーム規模の導入まで、**AI駆動開発** をテーマに日々活動しています。

---

## 🎮 AI 駆動開発 QUEST — レトロ道場

> AI 駆動開発をテーマにしたレトロ CRT 風サイト ── GitHub Copilot で何ができるのかを「読んで」「動かして」体験してもらうために作りました。

🌐 **公開中: https://theomonfort.github.io/theomonfort/**

バイリンガル (日本語 / 英語) 対応。H2 ごとにスライドに分割される **プレゼンテーション・モード** 付き。

- 📘 **プレイブック (Playbook)** — Copilot 各機能の解説カード集。**INTRODUCTION → PLAN → DEVELOP → REVIEW → SECURE → OPERATE → ADMINISTRATION** のライフサイクル順に整理 (Chat、CLI、Agent Mode、Cloud Agent、Code Review、Custom Agents、Hooks、MCP、Code Scanning、Secret Scanning、Dependabot、GHAS、Agentic Workflow、…)
- 🛠 **ハンズオン (Hands-on)** — 15 ステップのワークショップ。**PLAN → CODE → REVIEW → TEST & SECURE → OPERATE** を一気通貫で体験
- 🎴 **装備所 (Equipment)** — エージェント・スキルを `gh skill install …` でワンクリック導入
- 📰 **Changelog**: 気になる GitHub の更新を新しい順に紹介。日本語の要点、補足、デモメモと公式リンクを掲載。

**スタック:** Astro 6 · MDX · React 19 · Tailwind 3 · Mermaid (図) · GSAP (アニメーション)

本文の読みやすさを優先し、Playbook と Changelog の本文、カードタイトル、サイトナビゲーションには **Noto Sans JP**（`font-body`）を使用。Playbook の目次は DotGothic16、各記事の冒頭タイトル、ロゴ、大きなセクション名は Press Start 2P を維持。スライドの見出しは英字に目次と同じ DotGothic16、日本語に M PLUS 1 Code を使用し、カテゴリ色の文字に同色の小さな三角マーカーを添えています。`globals.css` の Latin 専用フォント定義で、日本語への影響を限定しています。下線や文字のグローは使用しません。スライドカウンターには VT323、コードには IBM Plex Mono を残し、ネオンカラーと角張った枠でゲームの雰囲気を保っています。日本語版と英語版で同じ方針を適用します。

Playbook の本文と引用ブロックでも、英字には DotGothic16、日本語には Noto Sans JP を使用します。コードの等幅書体と Changelog の本文書体は変更しません。

## Playbook galaxy

The Japanese and English playbook landing pages have a compact **2D / 3D** switch beside the page title. The 2D view is a complete, single-page glossary: every category and entry is visible, with no search or destination selector. Its SDLC links scroll to sections without filtering the page. In 3D, five planets represent the SDLC phases; Introduction is the departure station and Administration is the mothership. Select a destination, then a numbered satellite or a mission in the side panel to read its summary and open the playbook.

The 3D galaxy fills the browser viewport, with a destination selector and camera controls overlaid on the scene, but no search field. The sun is labeled simply **SDLC** in both languages. The Missions button opens a collapsible briefing panel; selecting a satellite opens its details automatically. The 2D button returns to the catalogue. Escape closes the briefing first, then returns to the galaxy overview, then exits 3D. The covered page is excluded from keyboard navigation until 3D is closed.

Develop is a volcanic world with a recessed crater and lava flows. Review has a tall sandstone tower surrounded by desert dunes. Operate is dominated by a giant branching tree and its broad canopy. Destination labels sit above each model's actual height.

The small 3D courier stays in the world, parked beside mission 01 when entering a category. Selecting another satellite or a mission in the panel sends it to that mission, with the camera following the same curved route around the planet. It remains docked on arrival, including when the camera is moved manually. Filtering uses the first matching mission if its current berth disappears. With Motion off or reduced motion requested, it moves directly to its berth without animation.

Both views use the same content collection. Destination selection is exclusive to 3D; returning to 2D clears it and restores the complete glossary. The URL parameters `view=3d` and `sector=plan` (or another category ID) make a 3D destination shareable. Legacy `q` search parameters are removed and never hide entries. The glossary is the default and remains available without JavaScript or WebGL. Three.js loads only when 3D is requested.

The galaxy uses original procedural solid models: five faceted worlds with distinct landmarks, a portal station, a cruiser mothership, and spacecraft for each mission. These are meshes with real depth, lighting, shadows, and emissive bloom, not image sprites. Drag to orbit in both axes, scroll or pinch to zoom, and right-drag to pan. Selecting a satellite flies the camera closer; “Back to planet” restores its orbit view. Camera buttons and the mission list also support keyboard navigation. The Motion toggle pauses model rotation; reduced-motion settings disable it and camera transitions. Rendering stops offscreen, and leaving 3D releases the WebGL resources. Visual reference: [Daiyu Hatakeyama's Prompt Galaxy](https://github.com/dahatake/GenerativeAI-Prompt-Sample-Japanese), especially its volumetric landmarks and orbit navigation.

The five SDLC worlds are equally spaced around a central 3D sun, with a shared solar orbit and separate mission orbits. The station and mothership sit outside the planetary ring. Glowing 3D lights drift through the scene; Motion also pauses these lights and the solar corona, and reduced-motion preferences leave them stationary.

3D mode has its own original Web Audio ambient score (soft chords, reverberation, and spatial chimes following the camera). It starts when entering 3D through the switch or on the first interaction with a directly linked 3D map. Music can be muted independently of Motion. Audio pauses in background tabs and is disposed on return to 2D, navigation, or a WebGL failure. The existing site BGM is paused throughout 3D mode to avoid two tracks playing together, then restored if it was previously enabled. No external music files are used.

## Changelog の追加方法

`src/content/changelog/ja/` と `src/content/changelog/en/` に同名の Markdown ファイルを追加します（例: `2026-09-21-pull-requests-page.md`）。

Frontmatter は `title`、`date`（`"YYYY-MM-DD"`）、`summary`、`category`（`review` / `security` / `copilot` / `actions` / `administration` / `issues`）、`source`（公式の完全な URL）が必須。`status`、`demo`（デモ手順の文字列配列）、`demoUrl`（公開デモへの完全な URL）は任意です。`demoUrl` はデモ欄の「デモを開く」リンクになります。複数のリンクを名前付きで並べたい場合は、任意の `demoLinks`（`label` と `url` を持つオブジェクトの配列）を使います。本文は要点や補足を自由に記述できます。日付の降順で自動表示されるため、並び順の手動管理は不要です。

`status` は機能の提供状況に使用し、未紹介、未検証、デモ失敗などの個人的な確認状況は `demo` に分けて記載します。非公開デモリポジトリの URL や実在ユーザーの利用データは掲載しません。

表示先は `/theomonfort/changelog` と `/theomonfort/en/changelog`。追加後は `pnpm build` で確認します。

各更新の「発表用」にチェックし、「選択した項目のみ」で紹介したい更新だけを表示できます。選択とフィルターはブラウザーの `localStorage`（`akq:changelog:selection:v1`）に保存され、日本語版と英語版で共有されます。他の端末には同期されません。未選択の更新への直接リンクを開くと、その更新が見えるようにフィルターを解除します。
