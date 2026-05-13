---
name: md-slides-creator
description: Author a Markdown file that doubles as both a long-form reference doc AND a clean slide deck when rendered with an "H2 = new slide" engine (the kind used on theomonfort.github.io/theomonfort/playbook/). Use this skill when the user asks to "create a playbook entry", "draft slides on …", "write a deck about …", "add a new playbook md", "explain X as slides", or any time the deliverable is a single Markdown file that must read top-to-bottom AND look right when split slide-by-slide on every H2. Produces frontmatter + body that respect the splitter, plus retro-themed visual blocks (hero-quote, comparison tables, emoji-prefixed callouts, code blocks, link group).
license: MIT
---

# md-slides-creator

Helps you author a single `.md` file that is **simultaneously**:

1. A linear reference doc you can scroll top-to-bottom.
2. A clean slide deck — every `## H2` becomes one slide, and the frontmatter auto-generates the title slide and a final "links" slide.

This is the exact format used by the playbook on https://theomonfort.github.io/theomonfort/playbook/ (Astro content collection rendered by `src/pages/playbook/[slug].astro`). The skill captures the conventions so anyone — including an agent — can produce a new entry that fits in without manual fixup.

> 🎯 **One rule above all**: a slide is everything between two `##` headings. Plan the deck slide-by-slide before you write prose.

---

## When to use

Trigger this skill when the user says any of:

- "create a new playbook entry on X"
- "draft slides about X"
- "add an md file in `src/content/playbook/...`"
- "write a deck on X like the others"
- "explain X as a slide deck"
- "I need a md that breaks into slides on every H2"

If the user only wants prose (a blog post, a README), do **not** use this skill — pick a more general writing helper.

---

## File layout & destination

In the playbook repo (`theomonfort/theomonfort`):

```
src/content/playbook/
  ja/<slug>.md   ← Japanese (primary; the site's default locale)
  en/<slug>.md   ← English mirror (same frontmatter shape, prose translated)
```

`<slug>` is kebab-case ASCII. The same slug must exist in both `ja/` and `en/`.

For other projects: any single `.md` file works as long as the renderer splits on `## H2`.

---

## Step 1 — Plan the deck (do this BEFORE writing)

Open with the user and agree on:

1. **Title (ja + en)** and a 1-line `summary` (≤ 280 chars).
2. **`category`** — one of `introduction | plan | develop | review | secure | operate`. This drives accent color and section ordering on the index page.
3. **`color`** — `magenta | cyan | amber | green`. Pick to match category if unsure (cyan for intro/secure, magenta for develop, amber for review, green for plan/operate).
4. **`icon`** — single emoji **or** absolute path to an SVG/PNG (e.g. `🪝` or `/theomonfort/github-white-icon.svg`).
5. **`order`** — decimal so you can squeeze entries in later (e.g. `19.6`).
6. **5–9 H2 slide titles** — write them as a numbered outline first. Each one must stand alone on screen.

> ✋ **Do not start writing prose until the slide list is approved.** Prose without a slide outline produces walls of text that look fine in the doc but render as one giant unreadable slide.

A typical playbook entry has 6–8 slides:

| # | Slide title pattern | Body |
|---|---|---|
| 1 | (auto from frontmatter) | title + icon + summary |
| 2 | `## 一言で` / `## In one line` | `hero-quote` + 1–2 callout `>` lines |
| 3 | `## 何ができる?` / `## What it does` | comparison table or 3–5 bullets |
| 4 | `## 設定方法` / `## Setup` | code fence + 4 bullets max |
| 5 | `## ★ 使いどころ` / `## ★ Killer use case` | the one thing the reader must remember |
| 6 | `## トラブルシュート` / `## Troubleshooting` | bullet list with ❌ and ✅ |
| 7 | (auto from frontmatter `links`) | grouped link list |

Adjust freely — but keep ≤ 1 H2 per "concept", and don't let a single slide exceed ~150 words.

---

## Step 2 — Frontmatter

Required schema (Zod-validated in `src/content.config.ts`):

```yaml
---
title: フック（Hooks）            # JA in ja/*.md, EN in en/*.md
titleEn: Hooks                    # ALWAYS the English short label (used in TOC)
summary: 1 行説明。280 字以内。
icon: 🪝                          # emoji OR absolute path to /icon.svg
color: green                      # magenta | cyan | amber | green
order: 8.75                       # decimal — leave gaps for future inserts
category: plan                    # introduction | plan | develop | review | secure | operate
related: ['harness-engineering', 'custom-agent']  # other slugs
links:
  - group: 📖 公式ドキュメント
    label: About hooks
    url: https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-hooks
  - group: 🎓 チュートリアル
    label: Hooks tutorial
    url: https://docs.github.com/en/copilot/tutorials/copilot-cli-hooks
---
```

**Rules**

- `links[].url` MUST be a fully-qualified URL (Zod `.url()` rejects bare paths).
- Group with emoji prefix: `📖 公式ドキュメント`, `🎓 チュートリアル`, `📰 発表`, `💰 課金`, `🆓 無料`, `🤖 …`. Same `group` string = same bucket on the rendered page.
- 5–9 links is the sweet spot. <3 looks empty; >12 forces scroll on the last slide.

---

## Step 3 — Body: the slide-splitting contract

The renderer literally does `for child in <article>: if child.tagName === 'H2': start a new slide`. This means:

| Element | Behaviour |
|---|---|
| `## …` | starts a new slide |
| `### …` | stays inside the current slide (use for sub-sections) |
| `# …` | **never use** — frontmatter generates the title slide; an extra `#` makes a duplicate |
| `<hr>` / `---` in body | does NOT split slides — only `## H2` does |
| `<aside class="links-aside">` | auto-injected at end from frontmatter — don't write it manually |

So: **every section you want as a separate slide MUST start with `##`**. To group sub-points on the same slide, use `###` or just bullets/tables.

---

## Step 4 — Visual building blocks

These are the recurring patterns the deck uses. Use them — they're styled, accessible, and present-mode friendly. Don't invent new HTML wrappers.

### 4a. Hero-quote (the "speech bubble" lead block)

Use **one per slide max**, typically on the first content slide (`## 一言で`) and occasionally as a section divider mid-deck.

```html
<div class="hero-quote">
  <p>
    <strong>X</strong> は ⋯ する仕組み。
  </p>
  <p>
    一番のポイントは <strong>Y</strong>。
  </p>
</div>
```

**Variants** (add a second class):

| Class | Mascot shown | When to use |
|---|---|---|
| (none) | default octocat | generic intro |
| `hero-quote-chat` | chatting octocat | conversational / Q&A framing |
| `hero-quote-soon` | monocle octocat | "coming soon" / preview |
| `hero-quote-green` | green octocat | plan / operate categories |
| `hero-quote-red` | red octocat | warning / dangerous topic |
| `hero-quote-stars` | starry octocat | celebratory / launch |
| `hero-quote-plain` | **none** (no mascot, no speech bubble notch) | mid-deck section header — when you want the styled box without the talking-character framing |

> 💡 The **secure** category auto-applies the blue monocle octocat. Use `hero-quote-plain` to opt out per-slide.

### 4b. Comparison tables

GFM tables render with retro styling. Use them for: feature comparisons, pricing, flag references, "before/after", "X vs Y".

```markdown
| 項目 | A | B |
| --- | --- | --- |
| 価格 | $19/mo | $30/mo |
| 用途 | secret 検出 | コード解析 |
```

**Tips**

- Keep ≤ 5 columns and ≤ 8 rows per slide.
- Use emoji as row icons (🔑 / 🔍 / 🛡️) for scannability.
- Bold the column the reader should look at first.

### 4c. Callouts (`>` blockquotes)

Use sparingly — 1 to 3 short lines per slide. Always lead with an emoji to set the tone:

```markdown
> 🎯 **要点**: PreToolUse だけが agent の動きを止められる。
> 🔑 認証は `COPILOT_GITHUB_TOKEN` が最優先。
> ⚠️ classic PAT (`ghp_…`) は使えない。
```

Common emojis: 🎯 takeaway · 🔑 key · ⚠️ warning · 💡 tip · 📝 note · 🤖 automation · 🔧 config · 🌐 public · 🆓 free · 💰 paid · 📦 module · ✅ do · ❌ don't.

### 4d. Code blocks

Use fenced code with a language hint (`bash`, `json`, `yaml`, `js`, `ts`, `python`). Each code block must fit on one slide — if it doesn't, split into two slides with `### Step 1` / `### Step 2` headings.

```bash
copilot -p "Generate a one-line conventional commit for the staged diff." -s --no-ask-user
```

### 4e. Inline external links

Inside prose / table cells / blockquotes, prefer the styled retro-link with an arrow glyph instead of plain markdown links:

```html
<a class="retro-link" href="https://docs.github.com/..." target="_blank" rel="noopener noreferrer">label ↗</a>
```

Reserve plain `[text](url)` for the final paragraph "📘 詳細:" listing.

### 4f. Internal cross-links

Link to another playbook entry by slug:

```html
<a class="retro-link" href="/theomonfort/playbook/dependabot">Dependabot ↗</a>
```

---

## Step 5 — Authoring workflow (recommended order)

1. **Confirm metadata with the user** (title, category, color, order, summary). Use a single `ask_user` form if anything is ambiguous.
2. **Write the slide outline** as a numbered list of H2 titles. Get user buy-in.
3. **Draft the frontmatter** with placeholder `links[]` (you'll fill in URLs after the body).
4. **Fill each slide** in order, following the visual-blocks recipe. After each slide, mentally check: "would this fit on a 1080p screen at 1.5× font without overflow?"
5. **Add 5–9 official links** to frontmatter, grouped by emoji-prefix labels.
6. **Mirror to the other locale** (ja ↔ en). Keep the slide count and frontmatter shape identical; only the prose changes.
7. **Build & preview**:
   ```bash
   pnpm build              # 32 pages should build with 0 errors
   pnpm dev --host 127.0.0.1   # open http://127.0.0.1:4321/theomonfort/playbook/<slug>/
   ```
   Press `P` to enter present mode and arrow through slides — confirm:
   - First slide is the title (auto)
   - Each `##` becomes its own slide
   - No slide overflows the viewport
   - The final auto-slide shows the grouped links

---

## Step 6 — Final checklist

Before declaring done, verify EVERY item:

- [ ] Frontmatter has all required fields (`title, summary, icon, color, order, category`).
- [ ] `titleEn` set (used in TOC + present-mode tag).
- [ ] `order` doesn't collide with an existing entry (check `src/content/playbook/ja/*.md`).
- [ ] All `links[].url` are fully-qualified URLs.
- [ ] Slide count is 5–9.
- [ ] At least one `hero-quote` block (typically the first content slide).
- [ ] Each slide stands on its own — no orphan H2 with no body, no body before the first H2.
- [ ] Tables ≤ 5 cols, ≤ 8 rows.
- [ ] Code blocks fit one slide each.
- [ ] No `# H1` in body (frontmatter handles the title).
- [ ] Both `ja/<slug>.md` and `en/<slug>.md` exist with matching structure.
- [ ] `pnpm build` passes.

---

## References

- `references/example.md` — a complete, minimal entry showing every block in use.
- `references/style-cheatsheet.md` — quick-lookup table of categories, colors, hero-quote variants, link-group emojis.
