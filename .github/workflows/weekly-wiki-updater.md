---
description: |
  Weekly wiki maintainer for theomonfort/theomonfort. Inspects repository commits
  and content collections since the last wiki update, refreshes affected English
  wiki pages (architecture, authoring guides, and live Playbook/Hands-on/Equipment/
  Changelog catalogs), and publishes validated Markdown updates to the GitHub Wiki
  via a custom push-wiki safe-output job. Adapted from
  githubnext/agentics/workflows/agentic-wiki-writer.md.

on:
  schedule: weekly on sunday
  workflow_dispatch:
    inputs:
      mode:
        description: "Update mode: auto (full if uninitialized, else incremental), full, or incremental"
        required: false
        default: "auto"
        type: choice
        options:
          - auto
          - full
          - incremental
      focus:
        description: "Optional wiki page name or topic to focus on (e.g. Playbook-Catalog)"
        required: false
        type: string

permissions:
  contents: read
  issues: read
  pull-requests: read

concurrency:
  job-discriminator: ${{ github.run_id }}

network: defaults
timeout-minutes: 30

steps:
  - name: Checkout repository history
    uses: actions/checkout@v7.0.1
    with:
      fetch-depth: 0
      persist-credentials: false

  - name: Snapshot current wiki and build repository inventory
    id: wiki-prep
    shell: bash
    env:
      REPO: ${{ github.repository }}
      INPUT_MODE: ${{ inputs.mode }}
      INPUT_FOCUS: ${{ inputs.focus }}
    run: |
      set -euo pipefail
      mkdir -p /tmp/gh-aw/wiki-current /tmp/gh-aw/wiki-out /tmp/gh-aw/wiki-context

      WIKI_TMP=$(mktemp -d)
      LAST_WIKI_TS=""
      LAST_WIKI_SHA=""
      LAST_WIKI_MSG=""
      PAGE_COUNT=0
      HAS_SIDEBAR="false"

      if git clone --depth 10 "https://github.com/${REPO}.wiki.git" "$WIKI_TMP/wiki" 2>/dev/null; then
        LAST_WIKI_TS=$(git -C "$WIKI_TMP/wiki" log -1 --format="%cI" 2>/dev/null || echo "")
        LAST_WIKI_SHA=$(git -C "$WIKI_TMP/wiki" log -1 --format="%h" 2>/dev/null || echo "")
        LAST_WIKI_MSG=$(git -C "$WIKI_TMP/wiki" log -1 --format="%s" 2>/dev/null || echo "")
        for f in "$WIKI_TMP/wiki"/*.md; do
          [ -e "$f" ] || continue
          cp "$f" /tmp/gh-aw/wiki-current/
          PAGE_COUNT=$((PAGE_COUNT + 1))
        done
        if [ -f /tmp/gh-aw/wiki-current/_Sidebar.md ] && [ "$PAGE_COUNT" -ge 4 ]; then
          HAS_SIDEBAR="true"
        fi
      fi
      rm -rf "$WIKI_TMP"

      REQ_MODE="${INPUT_MODE:-auto}"
      if [ "$REQ_MODE" = "full" ]; then
        RESOLVED_MODE="full"
      elif [ "$REQ_MODE" = "incremental" ]; then
        if [ "$HAS_SIDEBAR" = "true" ]; then
          RESOLVED_MODE="incremental"
        else
          RESOLVED_MODE="full"
        fi
      else
        if [ "$HAS_SIDEBAR" = "true" ]; then
          RESOLVED_MODE="incremental"
        else
          RESOLVED_MODE="full"
        fi
      fi

      export LAST_WIKI_TS LAST_WIKI_SHA LAST_WIKI_MSG PAGE_COUNT HAS_SIDEBAR REQ_MODE RESOLVED_MODE INPUT_FOCUS REPO

      python3 - <<'PY'
      import datetime
      import glob
      import os
      import re
      import subprocess

      def parse_frontmatter(path):
          with open(path, encoding="utf-8") as fh:
              text = fh.read()
          m = re.match(r"^---\n(.*?)\n---\n", text, re.S)
          if not m:
              return {}
          lines = m.group(1).splitlines()
          fm = {}
          i = 0
          while i < len(lines):
              kv = re.match(r"^([A-Za-z0-9_]+):\s*(.*)\s*$", lines[i])
              if kv:
                  k, v = kv.group(1), kv.group(2).strip()
                  if v in ("|", ">", "|-", ">-"):
                      block = []
                      i += 1
                      while i < len(lines) and (lines[i].startswith("  ") or not lines[i].strip()):
                          if lines[i].strip():
                              block.append(lines[i].strip())
                          i += 1
                      fm[k] = " ".join(block)
                      continue
                  if (v.startswith('"') and v.endswith('"')) or (v.startswith("'") and v.endswith("'")):
                      v = v[1:-1]
                  fm[k] = v
              i += 1
          return fm

      today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")
      last_ts = os.environ.get("LAST_WIKI_TS", "")
      resolved_mode = os.environ.get("RESOLVED_MODE", "full")
      req_mode = os.environ.get("REQ_MODE", "auto")
      focus = os.environ.get("INPUT_FOCUS", "")
      page_count = int(os.environ.get("PAGE_COUNT", "0"))
      has_sidebar = os.environ.get("HAS_SIDEBAR", "false")
      last_sha = os.environ.get("LAST_WIKI_SHA", "")
      last_msg = os.environ.get("LAST_WIKI_MSG", "")

      since_arg = last_ts if (last_ts and has_sidebar == "true") else "7 days ago"
      commits = subprocess.check_output(
          ["git", "--no-pager", "log", f"--since={since_arg}", "--oneline"],
          text=True,
      ).strip()
      commit_lines = [c for c in commits.splitlines() if c.strip()]

      changed_files = []
      if commit_lines:
          oldest_sha = commit_lines[-1].split()[0]
          parent_check = subprocess.run(
              ["git", "rev-parse", "--verify", f"{oldest_sha}^"],
              capture_output=True, text=True
          )
          base_ref = f"{oldest_sha}^" if parent_check.returncode == 0 else oldest_sha
          diff_out = subprocess.check_output(
              ["git", "--no-pager", "diff", "--name-status", base_ref, "HEAD"],
              text=True,
          ).strip()
          changed_files = [l for l in diff_out.splitlines() if l.strip()]

      existing_pages = sorted(
          os.path.basename(p) for p in glob.glob("/tmp/gh-aw/wiki-current/*.md")
      )

      with open("/tmp/gh-aw/wiki-context/status.md", "w", encoding="utf-8") as out:
          out.write(f"# Wiki Sync Context ({today} UTC)\n\n")
          out.write(f"- **Requested mode**: `{req_mode}`\n")
          out.write(f"- **Resolved mode**: `{resolved_mode}`\n")
          out.write(f"- **Optional focus**: `{focus or '(none)'}`\n")
          out.write(f"- **Wiki initialized**: `{has_sidebar}` ({page_count} existing `.md` files)\n")
          out.write(f"- **Last wiki commit**: `{last_sha or 'n/a'}` at `{last_ts or 'n/a'}` — {last_msg or 'n/a'}\n")
          out.write(f"- **Existing wiki files** (`/tmp/gh-aw/wiki-current/`): {', '.join(f'`{p}`' for p in existing_pages) or '(none)'}\n")
          out.write(f"- **Commits on repo since `{since_arg}`**: {len(commit_lines)}\n\n")
          out.write("## Recent Commits\n\n")
          if commit_lines:
              for c in commit_lines[:60]:
                  out.write(f"- `{c}`\n")
          else:
              out.write("_No repository commits in window._\n")
          out.write("\n## Changed Files in Window\n\n")
          if changed_files:
              for cf in changed_files[:120]:
                  out.write(f"- `{cf}`\n")
          else:
              out.write("_No changed files in window._\n")

      # Build deterministic content inventory
      playbooks = []
      for p in sorted(glob.glob("src/content/playbook/en/*.md")):
          slug = os.path.splitext(os.path.basename(p))[0]
          fm = parse_frontmatter(p)
          ja_fm = parse_frontmatter(f"src/content/playbook/ja/{slug}.md") if os.path.exists(f"src/content/playbook/ja/{slug}.md") else {}
          playbooks.append({
              "slug": slug,
              "title": fm.get("titleEn") or fm.get("title") or slug,
              "ja_title": ja_fm.get("title", ""),
              "category": fm.get("category", "introduction"),
              "order": int(re.sub(r"[^0-9-]", "", fm.get("order", "0")) or "0"),
              "summary": fm.get("summary", ""),
          })
      playbooks.sort(key=lambda x: (x["category"], x["order"], x["slug"]))

      handsons = []
      for p in sorted(glob.glob("src/content/handson/en/*.mdx") + glob.glob("src/content/handson/en/*.md")):
          fm = parse_frontmatter(p)
          handsons.append({
              "file": os.path.basename(p),
              "order": int(re.sub(r"[^0-9-]", "", fm.get("order", "0")) or "0"),
              "stepSlug": fm.get("stepSlug", ""),
              "title": fm.get("titleEn") or fm.get("title") or os.path.basename(p),
              "duration": fm.get("duration", ""),
              "summary": fm.get("summary", ""),
          })
      handsons.sort(key=lambda x: x["order"])

      equipments = []
      for p in sorted(glob.glob("src/content/equipment/*.md")):
          fm = parse_frontmatter(p)
          equipments.append({
              "file": os.path.basename(p),
              "section": fm.get("section", "other"),
              "order": int(re.sub(r"[^0-9-]", "", fm.get("order", "0")) or "0"),
              "name": fm.get("name", os.path.basename(p)),
              "description": fm.get("descriptionEn") or fm.get("description", ""),
              "url": fm.get("url", ""),
              "badge": fm.get("badge", ""),
          })
      equipments.sort(key=lambda x: (x["section"], x["order"], x["name"]))

      changelogs = []
      for p in sorted(glob.glob("src/content/changelog/en/*.md"), reverse=True):
          slug = os.path.splitext(os.path.basename(p))[0]
          fm = parse_frontmatter(p)
          changelogs.append({
              "slug": slug,
              "date": fm.get("date", slug[:10]),
              "title": fm.get("title", slug),
              "category": fm.get("category", ""),
              "event": fm.get("event", ""),
              "source": fm.get("source", ""),
              "summary": fm.get("summary", ""),
          })
      changelogs.sort(key=lambda x: (x["date"], x["slug"]), reverse=True)

      workflows_md = sorted(os.path.basename(p) for p in glob.glob(".github/workflows/*.md"))
      workflows_yml = sorted(
          os.path.basename(p)
          for p in glob.glob(".github/workflows/*.yml")
          if not p.endswith(".lock.yml")
      )

      with open("/tmp/gh-aw/wiki-context/inventory.md", "w", encoding="utf-8") as inv:
          inv.write(f"# Repository Content Inventory (as of {today})\n\n")
          inv.write("## Exact Counts\n\n")
          inv.write(f"- **Playbook decks**: {len(playbooks)} (`src/content/playbook/en/` & `ja/`)\n")
          inv.write(f"- **Hands-on steps**: {len(handsons)} (`src/content/handson/en/` & `ja/`)\n")
          inv.write(f"- **Equipment items**: {len(equipments)} (`src/content/equipment/`)\n")
          inv.write(f"- **Changelog entries**: {len(changelogs)} (`src/content/changelog/en/` & `ja/`)\n")
          inv.write(f"- **Agentic workflow sources (.md)**: {len(workflows_md)} ({', '.join(f'`{w}`' for w in workflows_md)})\n")
          inv.write(f"- **Standard Actions workflows (.yml)**: {len(workflows_yml)} ({', '.join(f'`{w}`' for w in workflows_yml)})\n\n")

          inv.write("## Playbook Entries\n\n")
          inv.write("| Category | Order | Slug | Title (EN) | Summary |\n|---|---:|---|---|---|\n")
          for pb in playbooks:
              s = pb["summary"].replace("|", "\\|")
              t = pb["title"].replace("|", "\\|")
              inv.write(f"| `{pb['category']}` | {pb['order']} | `{pb['slug']}` | {t} | {s} |\n")

          inv.write("\n## Hands-on Workshop Steps\n\n")
          inv.write("| Order | Step Slug | Duration (min) | Title | Summary |\n|---:|---|---:|---|---|\n")
          for ho in handsons:
              s = ho["summary"].replace("|", "\\|")
              t = ho["title"].replace("|", "\\|")
              inv.write(f"| {ho['order']} | `{ho['stepSlug']}` | {ho['duration'] or '-'} | {t} | {s} |\n")

          inv.write("\n## Equipment Items\n\n")
          inv.write("| Section | Name | Badge | Description | URL |\n|---|---|---|---|---|\n")
          for eq in equipments:
              d = eq["description"].replace("|", "\\|")
              n = eq["name"].replace("|", "\\|")
              inv.write(f"| `{eq['section']}` | {n} | {eq['badge'] or '-'} | {d} | {eq['url'] or '-'} |\n")

          inv.write("\n## 25 Most Recent Changelog Entries\n\n")
          inv.write("| Date | Category | Event | Title | Source |\n|---|---|---|---|---|\n")
          for cl in changelogs[:25]:
              t = cl["title"].replace("|", "\\|")
              inv.write(f"| {cl['date']} | `{cl['category']}` | {cl['event'] or '-'} | {t} | {cl['source']} |\n")
      PY

tools:
  github:
    toolsets: [default]
  edit:
  bash:
    - "ls:*"
    - "cat:*"
    - "head:*"
    - "tail:*"
    - "find:*"
    - "wc:*"
    - "git log:*"
    - "git diff:*"
    - "git show:*"
    - "git --no-pager:*"
    - "python3:*"
    - "date:*"
  cache-memory: true

safe-outputs:
  mentions: false
  noop:
    report-as-issue: false
  jobs:
    push-wiki:
      description: "Publish created or updated Markdown wiki pages from /tmp/gh-aw/wiki-out/ to the GitHub Wiki repository"
      runs-on: ubuntu-latest
      permissions:
        contents: write
      artifacts:
        - "/tmp/gh-aw/wiki-out/"
      output: "Wiki pages pushed to GitHub Wiki!"
      inputs:
        commit_message:
          description: "Single-line git commit message for the wiki repository (e.g. 'docs(wiki): weekly sync 2026-11-15')"
          required: true
          type: string
        summary:
          description: "Short summary of wiki pages created or updated"
          required: false
          type: string
      steps:
        - name: Checkout wiki repository
          uses: actions/checkout@v7.0.1
          with:
            repository: ${{ github.repository }}.wiki
            token: ${{ secrets.GITHUB_TOKEN }}
            persist-credentials: false
            path: wiki-repo

        - name: Validate, sanitize, and push wiki pages
          env:
            REPO: ${{ github.repository }}
            GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          run: |
            set -euo pipefail
            if [ -z "${GH_AW_AGENT_OUTPUT:-}" ] || [ ! -f "$GH_AW_AGENT_OUTPUT" ]; then
              echo "::error::GH_AW_AGENT_OUTPUT not found"
              exit 1
            fi

            python3 - <<'PY'
            import base64
            import glob
            import json
            import os
            import re
            import subprocess
            import sys

            out_file = os.environ["GH_AW_AGENT_OUTPUT"]
            out_dir = os.path.dirname(os.path.abspath(out_file))
            runner_temp = os.environ.get("RUNNER_TEMP", "")
            repo = os.environ["REPO"]
            gh_token = os.environ["GH_TOKEN"]

            with open(out_file, encoding="utf-8") as fh:
                payload = json.load(fh)

            items = [
                item for item in payload.get("items", [])
                if item.get("type") == "push_wiki"
            ]
            if not items:
                print("No push_wiki safe-output item emitted; nothing to push.")
                sys.exit(0)

            latest = items[-1]
            raw_msg = str(latest.get("commit_message") or "docs(wiki): automated weekly wiki update")
            commit_msg = re.sub(r"[\r\n]+", " ", raw_msg).strip()[:120] or "docs(wiki): automated weekly wiki update"
            summary_note = str(latest.get("summary") or "").strip()

            # Locate staged wiki-out directory from downloaded agent artifact
            candidates = [
                os.path.join(out_dir, "wiki-out"),
                os.path.join(out_dir, "tmp", "gh-aw", "wiki-out"),
                "/tmp/gh-aw/wiki-out",
                "wiki-out",
            ]
            if runner_temp:
                for match in glob.glob(os.path.join(runner_temp, "**", "wiki-out"), recursive=True):
                    if os.path.isdir(match) and match not in candidates:
                        candidates.append(match)
            for match in glob.glob("**/wiki-out", recursive=True):
                if os.path.isdir(match) and match not in candidates:
                    candidates.append(match)

            src_dir = next((d for d in candidates if os.path.isdir(d) and glob.glob(os.path.join(d, "*.md"))), None)
            if not src_dir:
                print(f"::error::No .md files found in downloaded wiki-out artifact directory (checked {candidates})", file=sys.stderr)
                sys.exit(1)

            valid_name = re.compile(r"^[A-Za-z0-9_][A-Za-z0-9_.-]*\.md$")

            def sanitize_mermaid(md_text):
                def fix_block(match):
                    body = match.group(1)
                    # Remove backticks inside Mermaid node labels ["`foo`"] -> ["foo"]
                    body = re.sub(r'\["`([^`"]*)`"\]', r'["\1"]', body)
                    return f"```mermaid\n{body}```"
                return re.sub(r"```mermaid\n(.*?)```", fix_block, md_text, flags=re.S)

            written = []
            for path in sorted(glob.glob(os.path.join(src_dir, "*.md"))):
                if os.path.islink(path) or not os.path.isfile(path):
                    continue
                fname = os.path.basename(path)
                if not valid_name.fullmatch(fname) or ".." in fname:
                    print(f"::warning::Skipping invalid wiki filename: {fname}")
                    continue
                with open(path, encoding="utf-8") as fh:
                    content = fh.read()
                if not content.strip():
                    print(f"::warning::Skipping empty wiki file: {fname}")
                    continue
                cleaned = sanitize_mermaid(content).rstrip() + "\n"
                dest = os.path.join("wiki-repo", fname)
                with open(dest, "w", encoding="utf-8") as out:
                    out.write(cleaned)
                written.append(fname)

            if not written:
                print("::error::No valid .md pages remained after validation", file=sys.stderr)
                sys.exit(1)

            subprocess.run(["git", "-C", "wiki-repo", "config", "user.name", "github-actions[bot]"], check=True)
            subprocess.run(["git", "-C", "wiki-repo", "config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com"], check=True)
            subprocess.run(["git", "-C", "wiki-repo", "add", "--"] + written, check=True)

            diff_res = subprocess.run(["git", "-C", "wiki-repo", "diff", "--cached", "--quiet"])
            summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
            if diff_res.returncode == 0:
                print("Wiki pages are already identical to the repository; skipping commit.")
                if summary_path:
                    with open(summary_path, "a", encoding="utf-8") as sf:
                        sf.write("## 📚 Weekly Wiki Updater\n\nNo net Markdown changes detected in the wiki repository.\n")
                sys.exit(0)

            subprocess.run(["git", "-C", "wiki-repo", "commit", "--no-verify", "-m", commit_msg], check=True)
            auth = base64.b64encode(f"x-access-token:{gh_token}".encode("utf-8")).decode("ascii")
            subprocess.run(
                [
                    "git",
                    "-C",
                    "wiki-repo",
                    "-c",
                    f"http.https://github.com/.extraheader=AUTHORIZATION: basic {auth}",
                    "push",
                    "origin",
                    "HEAD",
                ],
                check=True,
            )
            new_sha = subprocess.check_output(["git", "-C", "wiki-repo", "rev-parse", "--short", "HEAD"], text=True).strip()
            print(f"Pushed {len(written)} wiki page(s) at commit {new_sha}: {', '.join(written)}")

            if summary_path:
                with open(summary_path, "a", encoding="utf-8") as sf:
                    sf.write(f"## 📚 Weekly Wiki Updated (`{new_sha}`)\n\n")
                    if summary_note:
                        sf.write(f"{summary_note}\n\n")
                    sf.write("| Wiki Page | Live Link |\n|---|---|\n")
                    for fn in written:
                        slug = fn[:-3]
                        url = f"https://github.com/{repo}/wiki" if slug == "Home" else f"https://github.com/{repo}/wiki/{slug}"
                        sf.write(f"| `{fn}` | [{slug}]({url}) |\n")
            PY
---

# Weekly Wiki Updater

You are the **Wiki Maintainer** for `${{ github.repository }}` (`https://github.com/${{ github.repository }}/wiki`).
The repository powers **Théo Monfort's AI-Driven Development Playbook** (`https://theomonfort.github.io/theomonfort/`): a bilingual (Japanese primary, English mirror) Astro 5 + Tailwind + React Islands site with a retro JRPG aesthetic covering GitHub Copilot, Agentic Workflows, Hands-on workshops, Equipment, and curated GitHub Changelogs.

All wiki pages MUST be written in **clear, concise English**.

## Pre-Computed Context Available on Disk

Before you started, a deterministic preparation step populated three directories:

1. `/tmp/gh-aw/wiki-context/status.md` — resolved run mode (`full` or `incremental`), optional focus topic, last wiki commit timestamp, existing wiki filenames, and every repo commit + changed file since the last wiki update.
2. `/tmp/gh-aw/wiki-context/inventory.md` — exact, authoritative counts and frontmatter tables for all Playbook decks, Hands-on steps, Equipment items, recent Changelog entries, and `.github/workflows/`. **Always trust these counts and slugs instead of guessing.**
3. `/tmp/gh-aw/wiki-current/` — read-only copy of every `.md` page currently live on the GitHub Wiki.
4. `/tmp/gh-aw/wiki-out/` — staging directory where you write any new or updated `.md` wiki pages you want published. Only place files in `/tmp/gh-aw/wiki-out/` that you intend to create or update on this run.

## Canonical Wiki Structure

Maintain these flat Markdown files (GitHub Wiki uses flat filenames where hyphens render as spaces in page titles):

1. **`Home.md`**
   - Concise overview of the project, its retro JRPG bilingual Playbook mission, and live site URL (`https://theomonfort.github.io/theomonfort/` and `/en/`).
   - Quick navigation table linking to every wiki page (`[[Page Title|Page-Slug]]` or `[Page Title](https://github.com/${{ github.repository }}/wiki/Page-Slug)`).
   - **At-a-Glance Repository Snapshot** with exact counts from `inventory.md` and an explicit `(as of YYYY-MM-DD)` timestamp.
   - Quick-start commands (`pnpm install`, `pnpm dev`, `pnpm build`) and repository directory map.
2. **`Architecture-and-UI.md`**
   - Astro 5 + Tailwind + React Islands architecture (`src/pages/`, `src/components/`, `src/lib/`, `src/styles/`), including a clean `mermaid` architecture diagram.
   - Bilingual routing (`/` Japanese primary vs `/en/` English mirror; shared page components vs mirrored playbook routes `src/pages/playbook/[slug].astro` and `src/pages/en/playbook/[slug].astro`).
   - Content Collections schema (`src/content.config.ts`: `playbook`, `handson`, `equipment`, `changelog`).
   - Presentation Mode engine (`?present=1&slide=N`, H2 slide splitting, client-side Mermaid render gate, lazy fullscreen video `src/lib/playbook-video.ts`, `.demo-panel` presenter overlays, `ctl-widget` compact/stable accordions, 3D Playbook Galaxy).
   - Retro JRPG design system (`src/styles/tokens.css`, CRT scanline overlay, audio/SFX, Konami listener).
3. **`Authoring-Guide.md`**
   - Practical contributor rules for all four content collections:
     - **Playbook** (`src/content/playbook/ja/` & `en/` parity, `titleEn` short English title rule, H2 = one slide with no body H1, official fully-qualified `links` grouped with emoji prefixes like `📖 Official Documentation` and `📰 Recent Changelog`, `src/lib/playbook-meta.ts` flags and `NAV_HINT_SLIDES`).
     - **Hands-on Workshop** (`src/content/handson/ja/` & `en/` `.mdx` steps, `order`, `stepSlug`, `MonaDialog`, `Aside`).
     - **Changelog** (`src/content/changelog/ja/` & `en/`, `event: universe-2026`, `demoUrl` vs `demoLinks`, shared `akq:changelog:selection:v1` localStorage key).
     - **Equipment** (`src/content/equipment/*.md` across `skills`, `workflows`, `custom-agents`, `mcp-servers`, `cli-plugins`, `vscode-extensions`).
   - Validation workflow (`pnpm build`).
4. **`Playbook-Catalog.md`**
   - Complete, categorized directory of all Playbook entries (`introduction`, `plan`, `develop`, `review`, `secure`, `operate`, `administration`) sourced from `inventory.md`, with explicit `(as of YYYY-MM-DD)` date.
   - For each entry: title, slug, concise summary, and direct links to both the English (`https://theomonfort.github.io/theomonfort/en/playbook/<slug>/`) and Japanese (`https://theomonfort.github.io/theomonfort/playbook/<slug>/`) live pages.
5. **`Hands-On-and-Equipment.md`**
   - Ordered guide to all Hands-on Workshop quest steps (`https://theomonfort.github.io/theomonfort/en/handson/<stepSlug>/`) with durations and summaries.
   - Grouped catalog of Equipment items across all 6 categories (`https://theomonfort.github.io/theomonfort/en/skills/`).
   - Summary of repository-local Copilot customizations (`.github/skills/`, `.github/agents/`, `.github/instructions/`).
6. **`Changelog-Highlights.md`**
   - Overview of how the curated Changelog page works (`https://theomonfort.github.io/theomonfort/en/changelog/`), category filters, presentation selection mode, and Universe 2026 badge support.
   - Category breakdown and a clean table of the 20 most recent changelog entries (date, category, title, official source URL) from `inventory.md`.
7. **`Agentic-Workflows-and-Automation.md`**
   - Reference to the repository's GitHub Actions and `gh-aw` Agentic Workflows (`deploy.yml`, `seed-workshop-repo.yml`, `daily-repo-status`, `weekly-status-chronicle`, `weekly-playbook-freshness`, `weekly-wiki-updater`, `monthly-playbook-link-check`, `agentics-maintenance`), with a `mermaid` schedule/pipeline diagram.
   - Supply-chain & safety architecture: workflow lockfiles (`actions.lock`, `.github/aw/actions-lock.json`, full-SHA action pinning), read-only AWF sandbox + safe-outputs, Dependabot weekly updates, and `.github/hooks/` guardrails.
8. **`_Sidebar.md`** and **`_Footer.md`**
   - `_Sidebar.md`: compact navigation sidebar linking `Home` and grouping all wiki pages (preserve links to any extra human-authored pages present in `/tmp/gh-aw/wiki-current/`).
   - `_Footer.md`: one-line footer with links to the [Live Playbook](https://theomonfort.github.io/theomonfort/), [English Site](https://theomonfort.github.io/theomonfort/en/), [Repository](https://github.com/${{ github.repository }}), and `Last synced: YYYY-MM-DD`.

## Workflow Steps

### Step 1: Read Context & Triage

1. Read `/tmp/gh-aw/wiki-context/status.md` and `/tmp/gh-aw/wiki-context/inventory.md`.
2. Check **Resolved mode** and **Optional focus**:
   - If **Resolved mode** is `incremental`, **Optional focus** is `(none)`, and **Commits on repo** is `0` (or the only commits since the last wiki sync are automated status/workflow commits that do not change code, workflows, or content counts): call `noop` explaining that the wiki is already up to date, and stop.
   - If **Resolved mode** is `full` (or the wiki is not yet initialized): inspect the key repository files (`README.md`, `package.json`, `astro.config.mjs`, `src/content.config.ts`, `.github/copilot-instructions.md`, representative `src/pages/` and `.github/workflows/` files) and generate all 9 canonical files in `/tmp/gh-aw/wiki-out/`.
   - If **Resolved mode** is `incremental` with relevant changes (or an explicit `focus` was requested): read the affected existing pages in `/tmp/gh-aw/wiki-current/`, inspect the changed source files, and write only the updated pages (plus `Home.md` and `_Footer.md` if counts or sync metadata changed) into `/tmp/gh-aw/wiki-out/`.

### Step 2: Author High-Quality Wiki Markdown

Follow these formatting and accuracy rules strictly:

- **Ground every fact in the repository**: verify file paths, scripts, and schemas against the actual workspace and `/tmp/gh-aw/wiki-context/inventory.md`. Never invent features or counts.
- **Explicit dates on counts**: whenever stating numeric totals (e.g. number of Playbook decks or Changelog entries), include `(as of YYYY-MM-DD)`.
- **No YAML frontmatter** in wiki `.md` files: GitHub Wiki renders YAML frontmatter as raw text/tables. Start content pages directly with a top-level overview paragraph or `##` section headings (GitHub Wiki already displays the filename as the page H1 title!).
- **Mermaid safety**:
  - Never put backticks inside Mermaid node labels (write `A["src/pages"]`, never `A["\`src/pages\`"]`).
  - Keep node labels short and avoid raw HTML tags or `\n` escape sequences inside Mermaid labels.
- **Clean prose**: concise, scannable tables and bullet lists. Avoid filler and marketing fluff.

### Step 3: Verify & Publish

1. Check `/tmp/gh-aw/wiki-out/` (`ls -la /tmp/gh-aw/wiki-out/`) to confirm every staged file is non-empty, valid `.md`, and starts without YAML frontmatter.
2. Update cache memory (`/tmp/gh-aw/cache-memory/wiki-sync.json`) with today's UTC date and the list of updated pages.
3. Call the `push_wiki` safe-output tool once with:
   - `commit_message`: e.g. `docs(wiki): initial wiki generation (YYYY-MM-DD)` or `docs(wiki): weekly sync (YYYY-MM-DD)`
   - `summary`: 1–2 sentences naming the pages created or updated.
