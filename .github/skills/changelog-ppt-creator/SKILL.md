# Changelog PPT Creator Skill

## Purpose

Automatically fetch the latest GitHub changelog updates, translate them to Japanese, and generate two PowerPoint presentations (English + Japanese) that faithfully reproduce the dark-themed Catppuccin Mocha template with full formatting, sections, images, and slide notes.

## When to Use

- User wants a summary of recent GitHub changelog updates
- User needs English and/or Japanese PowerPoint presentations of GitHub changes
- User asks to generate the weekly/biweekly changelog deck

## How It Works

The Copilot agent orchestrates the full pipeline when you invoke this skill:

1. The agent runs `scripts/fetch-changelog.py` which:
   - Fetches the RSS feed from `https://github.blog/changelog/feed/` (paginated — fetches `?paged=2`, `?paged=3`, etc. since each page only returns 10 items)
   - Filters entries from the last N days (default: 14)
   - Scrapes actual changelog pages for images (RSS feed has no images)
   - Extracts bullet-point summaries as plain text
   - Generates English + Japanese markdown summaries
   - Generates two PowerPoint presentations (English + Japanese)
2. The agent **translates** titles and summaries to Japanese using its own LLM capabilities (the script leaves `title_ja`/`bullets_ja` as English placeholders for the agent to replace)

```bash
# The agent runs this — you can also run it directly (English-only Japanese):
python3 scripts/fetch-changelog.py [--days 14]
```

> **Note:** There is also an automated GitHub Actions workflow (`changelog-generate.yml`) that runs this pipeline daily using the GitHub Models API for translation instead of the Copilot agent. See `.github/workflows/README.md` for details.

## Output

| Path | Description |
|------|-------------|
| `10-news/11-changelog/11.01-english/FROM_to_TO-changelog.md` | English markdown summary |
| `10-news/11-changelog/11.02-japanese/FROM_to_TO-changelog.md` | Japanese markdown summary |
| `10-news/11-changelog/11.03-ppt-english/FROM_to_TO-changelog.pptx` | English PowerPoint |
| `10-news/11-changelog/11.04-ppt-japanese/FROM_to_TO-changelog.pptx` | Japanese PowerPoint |

Filenames use the date range of the actual entries (e.g., `2026-02-06_to_2026-02-19-changelog.pptx`).

## PowerPoint Structure

1. **Title slide** (template slide 0): "GitHub Updates" with date range subtitle and profile picture
2. **Table of Contents** (template slide 1): Categories with entry counts (件 suffix in Japanese)
3. **Per-category group** — each category has:
   - **Section header** (template slide 2): Category name with count (e.g., "Copilot (5件)")
   - **Summary slide** (template slide 3): Per changelog entry with:
     - Title (Japanese or English depending on version)
     - Gray bullet-point summary (concise, max 5 bullets, max 120 chars each)
     - Date tile at bottom (e.g., "FEBRUARY 19, 2026")
     - Category tile at bottom with color-coded type
   - **Image slide** (template slide 4): Full illustration from changelog post (only if image available), follows immediately after the summary slide
4. **PowerPoint sections**: Real collapsible sections in the slide panel (Introduction, then one per category)
5. **Slide notes**: Full English changelog content + link in the notes of each summary slide

## Category Consolidation

The RSS feed uses many granular labels. The script consolidates them into 5 broad presentation categories using the `LABEL_GROUP_MAP` dict in `fetch-changelog.py`. Categories are displayed in a fixed preferred order via `LABEL_ORDER`.

| Presentation Category | RSS Feed Labels Merged |
|----------------------|------------------------|
| **Actions** | `actions` |
| **Copilot** | `copilot`, `client apps` |
| **Collaboration** | `collaboration tools`, `projects & issues`, `projects and issues` |
| **Security** | `application security`, `supply chain security`, `code security`, `secret scanning`, `dependabot`, `code scanning` |
| **Administration** | `account management`, `enterprise management tools`, `platform governance` |

Any RSS label not in the mapping will appear as its own category (title-cased) after the known categories.

**To add new mappings**: Update the `LABEL_GROUP_MAP` dictionary in `scripts/fetch-changelog.py`. The key is the lowercase RSS label, the value is the target presentation category name.

## Template Details

**File**: `.github/skills/changelog-ppt-creator/changelog-template.pptx`

### Template Slide Map

| Index | Purpose | Key elements |
|-------|---------|--------------|
| 0 | Title slide | Title, subtitle (date range), profile picture |
| 1 | Table of Contents | Content placeholder with bullet items |
| 2 | Section header | Title only |
| 3 | Content/Summary (IMPROVEMENT) | Title, Content bullets, Date tile, Category tile (#092F69) |
| 4 | Image slide | Title, Image placeholder, Date tile, Category tile |
| 5 | Content (RETIRED variant) | Same as 3 but Category tile color #67070C |
| 6 | Content (RELEASE variant) | Same as 3 but Category tile color #053A16 |

### Category Tile Colors

| Type | Color | Hex |
|------|-------|-----|
| IMPROVEMENT | Dark blue | `#092F69` |
| RELEASE | Dark green | `#053A16` |
| RETIRED | Dark red | `#67070C` |

### Theme & Formatting

- **Background**: Catppuccin Mocha dark (#1E1E2E)
- **Title color**: accent2 scheme color
- **Body font**: Hiragino Sans GB W6 (both `<a:latin>` and `<a:ea>`)
- **Bullet text**: Gray color, ~20pt
- **Title size**: ~28pt (355600 EMU) to fit slide width
- **Paragraph spacing**: No spcBef/spcAft; empty paragraphs as separators between bullets
- **Date tile**: First Rounded Rectangle shape, bg2 scheme color
- **Category tile**: Second Rounded Rectangle shape, srgbClr fill
- **Image frame**: roundRect preset with accent2 border

### Critical Implementation Notes

These are hard-won technical details — **do not change** without careful testing:

1. **XML-level slide cloning is mandatory**: Using `tf.clear()` + `add_run()` destroys all template formatting (scheme colors, fonts, spacing). Must use `copy.deepcopy()` of template slide XML elements and only replace `<a:t>` text nodes.

2. **Relationship cloning**: When cloning slides, all non-layout relationships (images, hyperlinks) must be explicitly copied with the correct `rId` and `base_uri`. Missing rels cause "PowerPoint found a problem" repair dialogs. Use `slide.part.rels._rels[rId] = _Relationship(...)` with `slide.part.rels._base_uri`.

3. **python-pptx SlidePlaceholders bug**: `1 in slide.placeholders` returns `False` even when `slide.placeholders[1]` exists. Use `try/except` instead of `in` operator.

4. **Image handling**: RSS feed `<content:encoded>` rarely contains `<img>` tags. Must scrape actual changelog pages via `scrape_page_images()`. Validate downloads with PIL before embedding.

5. **ImagePart API**: `ImagePart.from_image()` doesn't exist. Use `Image.from_blob(bytes)` then `ImagePart.new(prs.part.package, image)`.

6. **PowerPoint sections**: Stored in `<p:extLst><p:ext uri="{521415D9-36F7-43E2-AB2F-B90AF26B5E84}"><p14:sectionLst>` with `p14:` namespace. Must replace content of existing element, not append a new `sectionLst` to the root.

7. **Label cleanup**: RSS feed labels contain HTML entities (e.g., `&amp;`). Must `html.unescape()` and replace `&` with "and" to avoid `&Amp;` artifacts.

8. **Bullet overflow prevention**: Cap at 5 bullets, 120 chars each. Japanese text at 20pt with slide width fits ~45-50 chars per line.

9. **Python 3.9 compatibility**: No `type | None` union syntax. Use `Optional[type]` with `from __future__ import annotations`.

10. **RSS feed pagination**: The feed at `github.blog/changelog/feed/` only returns 10 items per page. Must fetch `?paged=2`, `?paged=3`, etc. to get all entries within the date range. Stop when a page contains entries older than the cutoff.

## Dependencies

```bash
pip3 install python-pptx requests beautifulsoup4 Pillow
```

## Options

| Flag | Default | Description |
|------|---------|-------------|
| `--days` | 14 | Number of days to look back |
| `--output-dir` | `10-news/11-changelog` | Output base directory |
