---
description: |
  Weekly site release workflow for theomonfort/theomonfort. Runs every Friday
  night (21:00 JST / 12:00 UTC), inspects commits and content changes merged to
  main since the latest GitHub Release tag, drafts concise bilingual (Japanese +
  English) release notes matching the repository's v1.0.0 convention, and
  publishes a new semver GitHub Release via a hardened publish-release safe-output
  job (or noops on quiet weeks with no site changes).

on:
  schedule:
    # Every Friday at 12:00 UTC (Friday 21:00 JST)
    - cron: "0 12 * * 5"
  workflow_dispatch:
    inputs:
      bump:
        description: "Version bump strategy: auto (minor for new content/features, patch for fixes), minor, or patch"
        required: false
        default: "auto"
        type: choice
        options:
          - auto
          - minor
          - patch
      force:
        description: "Publish a release even if only .github/ automation files changed since the last release"
        required: false
        default: false
        type: boolean

permissions:
  contents: read
  issues: read
  pull-requests: read

concurrency:
  job-discriminator: ${{ github.run_id }}

network: defaults
timeout-minutes: 25

steps:
  - name: Checkout repository with full history and tags
    uses: actions/checkout@v7.0.1
    with:
      fetch-depth: 0
      fetch-tags: true
      persist-credentials: false

  - name: Compute release diff and suggested semver tag
    id: release-prep
    shell: bash
    env:
      REPO: ${{ github.repository }}
      INPUT_BUMP: ${{ inputs.bump }}
      INPUT_FORCE: ${{ inputs.force }}
    run: |
      set -euo pipefail
      mkdir -p /tmp/gh-aw/release-context /tmp/gh-aw/release-out

      python3 - <<'PY'
      import datetime
      import json
      import os
      import re
      import subprocess
      import urllib.request

      repo = os.environ["REPO"]
      bump_pref = (os.environ.get("INPUT_BUMP") or "auto").strip()
      force_flag = (os.environ.get("INPUT_FORCE") or "false").strip().lower() == "true"
      today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")

      def parse_frontmatter(path):
          if not os.path.isfile(path):
              return {}
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

      def semver_tuple(tag):
          m = re.fullmatch(r"v(\d+)\.(\d+)\.(\d+)", tag.strip())
          return (int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else None

      # Collect local semver tags sorted highest-first
      raw_tags = subprocess.check_output(["git", "tag", "-l", "v*"], text=True).splitlines()
      semver_tags = sorted(
          [t.strip() for t in raw_tags if semver_tuple(t.strip()) is not None],
          key=semver_tuple,
          reverse=True,
      )

      latest_release_info = {}
      try:
          req = urllib.request.Request(
              f"https://api.github.com/repos/{repo}/releases/latest",
              headers={"Accept": "application/vnd.github+json", "User-Agent": "theomonfort-release-prep"},
          )
          with urllib.request.urlopen(req, timeout=10) as resp:
              latest_release_info = json.loads(resp.read().decode("utf-8"))
      except Exception:
          latest_release_info = {}

      api_tag = str(latest_release_info.get("tag_name") or "").strip()
      if api_tag and semver_tuple(api_tag) is not None:
          last_tag = api_tag
      elif semver_tags:
          last_tag = semver_tags[0]
      else:
          last_tag = ""

      target_sha = subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()

      if last_tag:
          commits_raw = subprocess.check_output(
              ["git", "--no-pager", "log", f"{last_tag}..HEAD", "--no-merges", "--format=%h|%ad|%s", "--date=short"],
              text=True,
          ).splitlines()
          diff_raw = subprocess.check_output(
              ["git", "--no-pager", "diff", "--name-status", last_tag, "HEAD"],
              text=True,
          ).splitlines()
      else:
          commits_raw = subprocess.check_output(
              ["git", "--no-pager", "log", "-n", "50", "--no-merges", "--format=%h|%ad|%s", "--date=short"],
              text=True,
          ).splitlines()
          diff_raw = []

      commits = [c for c in commits_raw if c.strip()]
      changes = []
      for line in diff_raw:
          parts = line.split("\t")
          if len(parts) >= 2:
              status = parts[0][0]
              path = parts[-1]
              changes.append((status, path))

      # Categorize file changes
      playbook_added, playbook_modified = [], []
      handson_changed = []
      equipment_added, equipment_modified = [], []
      changelog_added, changelog_modified = [], []
      ui_changed = []
      automation_changed = []
      other_site_changed = []

      has_new_site_addition = False
      site_file_count = 0

      seen_playbook = set()
      seen_changelog = set()

      for status, path in changes:
          if path.startswith(("src/", "public/")) or path in ("package.json", "astro.config.mjs", "tailwind.config.mjs"):
              site_file_count += 1

          m_pb = re.match(r"^src/content/playbook/(en|ja)/([^/]+)\.md$", path)
          if m_pb:
              slug = m_pb.group(2)
              if slug not in seen_playbook:
                  seen_playbook.add(slug)
                  en_fm = parse_frontmatter(f"src/content/playbook/en/{slug}.md")
                  ja_fm = parse_frontmatter(f"src/content/playbook/ja/{slug}.md")
                  label = f"`{slug}` ({en_fm.get('titleEn') or en_fm.get('title') or slug} / {ja_fm.get('title') or slug})"
                  if status == "A":
                      playbook_added.append(label)
                      has_new_site_addition = True
                  elif status != "D":
                      playbook_modified.append(label)
              continue

          if path.startswith("src/content/handson/"):
              handson_changed.append(f"{status} `{path}`")
              if status == "A":
                  has_new_site_addition = True
              continue

          if path.startswith("src/content/equipment/"):
              fm = parse_frontmatter(path)
              label = f"`{os.path.basename(path)}` ({fm.get('name') or os.path.basename(path)})"
              if status == "A":
                  equipment_added.append(label)
                  has_new_site_addition = True
              elif status != "D":
                  equipment_modified.append(label)
              continue

          m_cl = re.match(r"^src/content/changelog/(en|ja)/([^/]+)\.md$", path)
          if m_cl:
              slug = m_cl.group(2)
              if slug not in seen_changelog:
                  seen_changelog.add(slug)
                  en_fm = parse_frontmatter(f"src/content/changelog/en/{slug}.md")
                  ja_fm = parse_frontmatter(f"src/content/changelog/ja/{slug}.md")
                  label = f"`{slug}` ({en_fm.get('title') or slug} / {ja_fm.get('title') or slug})"
                  if status == "A":
                      changelog_added.append(label)
                      has_new_site_addition = True
                  elif status != "D":
                      changelog_modified.append(label)
              continue

          if path.startswith(("src/pages/", "src/components/", "src/lib/", "src/styles/", "public/")) or path == "src/content.config.ts":
              ui_changed.append(f"{status} `{path}`")
              if status == "A" and path.startswith(("src/pages/", "src/components/", "public/media/")):
                  has_new_site_addition = True
              continue

          if path.startswith(".github/"):
              automation_changed.append(f"{status} `{path}`")
              continue

          if path in ("package.json", "astro.config.mjs", "tailwind.config.mjs"):
              other_site_changed.append(f"{status} `{path}`")

      base_ver = semver_tuple(last_tag) if last_tag else (1, 0, 0)
      highest_ver = semver_tags[0] if semver_tags else last_tag
      if highest_ver and semver_tuple(highest_ver) > base_ver:
          base_ver = semver_tuple(highest_ver)

      if not last_tag:
          resolved_bump = "initial"
          suggested_tag = "v1.0.0"
      elif bump_pref == "minor":
          resolved_bump = "minor"
          suggested_tag = f"v{base_ver[0]}.{base_ver[1] + 1}.0"
      elif bump_pref == "patch":
          resolved_bump = "patch"
          suggested_tag = f"v{base_ver[0]}.{base_ver[1]}.{base_ver[2] + 1}"
      else:
          if has_new_site_addition:
              resolved_bump = "minor"
              suggested_tag = f"v{base_ver[0]}.{base_ver[1] + 1}.0"
          else:
              resolved_bump = "patch"
              suggested_tag = f"v{base_ver[0]}.{base_ver[1]}.{base_ver[2] + 1}"

      should_release = len(commits) > 0 and (site_file_count > 0 or force_flag)

      meta = {
          "today_utc": today,
          "last_tag": last_tag,
          "last_release_title": latest_release_info.get("name", ""),
          "last_release_published_at": latest_release_info.get("published_at", ""),
          "target_sha": target_sha,
          "requested_bump": bump_pref,
          "resolved_bump": resolved_bump,
          "suggested_tag": suggested_tag,
          "force": force_flag,
          "commit_count": len(commits),
          "site_file_count": site_file_count,
          "should_release": should_release,
      }
      with open("/tmp/gh-aw/release-context/meta.json", "w", encoding="utf-8") as mf:
          json.dump(meta, mf, indent=2)

      with open("/tmp/gh-aw/release-context/context.md", "w", encoding="utf-8") as cf:
          cf.write(f"# Weekly Site Release Context ({today} UTC)\n\n")
          cf.write(f"- **Previous release tag**: `{last_tag or '(none)'}` ({meta['last_release_title'] or 'n/a'}, published `{meta['last_release_published_at'] or 'n/a'}`)\n")
          cf.write(f"- **Target HEAD SHA on `main`**: `{target_sha}`\n")
          cf.write(f"- **Non-merge commits since `{last_tag or 'start'}`**: {len(commits)}\n")
          cf.write(f"- **Site-facing files changed (`src/`, `public/`, config)**: {site_file_count}\n")
          cf.write(f"- **Force release input**: `{force_flag}`\n")
          cf.write(f"- **Should publish release**: `{should_release}`\n")
          cf.write(f"- **Suggested next tag**: `{suggested_tag}` (`{resolved_bump}` bump)\n\n")

          if latest_release_info.get("body"):
              cf.write("## Previous Release Body (Style Reference)\n\n```markdown\n")
              cf.write(latest_release_info["body"].strip() + "\n```\n\n")

          def write_list(heading, items, limit=40):
              cf.write(f"## {heading} ({len(items)})\n\n")
              if not items:
                  cf.write("_None_\n\n")
                  return
              for item in items[:limit]:
                  cf.write(f"- {item}\n")
              if len(items) > limit:
                  cf.write(f"- _...and {len(items) - limit} more_\n")
              cf.write("\n")

          write_list("Added Playbook Decks", playbook_added)
          write_list("Updated Playbook Decks", playbook_modified)
          write_list("Added Equipment Items", equipment_added)
          write_list("Updated Equipment Items", equipment_modified)
          write_list("Added Product Changelog Entries", changelog_added)
          write_list("Updated Product Changelog Entries", changelog_modified)
          write_list("Hands-on Workshop File Changes", handson_changed)
          write_list("UI, Layout, Presentation Mode & Media Changes", ui_changed, limit=60)
          write_list("GitHub Actions & Agentic Workflow Changes", automation_changed)

          cf.write(f"## Commits Since `{last_tag or 'start'}` ({len(commits)})\n\n")
          for c in commits[:80]:
              sha, dt, subj = c.split("|", 2)
              cf.write(f"- `{sha}` ({dt}) {subj}\n")
          if len(commits) > 80:
              cf.write(f"- _...and {len(commits) - 80} earlier commits_\n")
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
    - "git log:*"
    - "git diff:*"
    - "git show:*"
    - "git --no-pager:*"
    - "python3:*"
    - "date:*"

safe-outputs:
  mentions: false
  noop:
    report-as-issue: false
  jobs:
    publish-release:
      description: "Create and publish a new semver GitHub Release from /tmp/gh-aw/release-out/RELEASE_NOTES.md"
      runs-on: ubuntu-latest
      permissions:
        contents: write
      artifacts:
        - "/tmp/gh-aw/release-out/"
      output: "GitHub Release published!"
      inputs:
        tag:
          description: "Semver tag for the new release (e.g. 'v1.1.0' or 'v1.1.1')"
          required: true
          type: string
        title:
          description: "Release title formatted as '<tag> - <short English summary>' (e.g. 'v1.1.0 - Playbook updates and weekly automation')"
          required: true
          type: string
        target_sha:
          description: "Exact 40-character commit SHA on main from /tmp/gh-aw/release-context/meta.json"
          required: true
          type: string
      steps:
        - name: Validate and publish GitHub Release
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
            import glob
            import json
            import os
            import re
            import subprocess
            import sys
            import tempfile

            out_file = os.environ["GH_AW_AGENT_OUTPUT"]
            out_dir = os.path.dirname(os.path.abspath(out_file))
            runner_temp = os.environ.get("RUNNER_TEMP", "")
            repo = os.environ["REPO"]

            with open(out_file, encoding="utf-8") as fh:
                payload = json.load(fh)

            items = [
                item for item in payload.get("items", [])
                if item.get("type") == "publish_release"
            ]
            if not items:
                print("No publish_release safe-output item emitted; nothing to publish.")
                sys.exit(0)

            latest = items[-1]
            tag = str(latest.get("tag") or "").strip()
            raw_title = str(latest.get("title") or "").strip()
            target_sha = str(latest.get("target_sha") or "").strip().lower()

            def semver_tuple(t):
                m = re.fullmatch(r"v(\d+)\.(\d+)\.(\d+)", t)
                return (int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else None

            new_ver = semver_tuple(tag)
            if new_ver is None:
                print(f"::error::Invalid semver tag '{tag}'. Expected vMAJOR.MINOR.PATCH.", file=sys.stderr)
                sys.exit(1)

            if not re.fullmatch(r"[0-9a-f]{40}", target_sha):
                print(f"::error::Invalid target_sha '{target_sha}'. Expected 40-char hex SHA.", file=sys.stderr)
                sys.exit(1)

            # Verify target_sha is an ancestor of (or identical to) main
            cmp_raw = subprocess.check_output(
                ["gh", "api", f"repos/{repo}/compare/main...{target_sha}"],
                text=True,
            )
            cmp_data = json.loads(cmp_raw)
            cmp_status = cmp_data.get("status")
            if cmp_status not in ("identical", "behind"):
                print(f"::error::target_sha {target_sha} is not on main (compare status: {cmp_status})", file=sys.stderr)
                sys.exit(1)

            # Check existing tags/releases to enforce strictly monotonic semver
            tags_raw = subprocess.check_output(
                ["gh", "api", "--paginate", f"repos/{repo}/tags", "--jq", ".[].name"],
                text=True,
            ).splitlines()
            existing_semvers = [semver_tuple(t.strip()) for t in tags_raw if semver_tuple(t.strip()) is not None]
            if new_ver in existing_semvers:
                print(f"Release tag {tag} already exists; skipping duplicate creation.")
                sys.exit(0)
            if existing_semvers and new_ver <= max(existing_semvers):
                print(f"::error::Tag {tag} must be greater than highest existing tag v{'.'.join(map(str, max(existing_semvers)))}", file=sys.stderr)
                sys.exit(1)

            # Locate RELEASE_NOTES.md from downloaded artifact
            candidates = [
                os.path.join(out_dir, "release-out", "RELEASE_NOTES.md"),
                os.path.join(out_dir, "tmp", "gh-aw", "release-out", "RELEASE_NOTES.md"),
                "/tmp/gh-aw/release-out/RELEASE_NOTES.md",
                "release-out/RELEASE_NOTES.md",
            ]
            if runner_temp:
                for match in glob.glob(os.path.join(runner_temp, "**", "RELEASE_NOTES.md"), recursive=True):
                    if os.path.isfile(match) and match not in candidates:
                        candidates.append(match)
            for match in glob.glob("**/RELEASE_NOTES.md", recursive=True):
                if os.path.isfile(match) and match not in candidates:
                    candidates.append(match)

            notes_src = next((p for p in candidates if os.path.isfile(p) and not os.path.islink(p)), None)
            if not notes_src:
                print(f"::error::RELEASE_NOTES.md not found in downloaded artifacts (checked {candidates})", file=sys.stderr)
                sys.exit(1)

            with open(notes_src, encoding="utf-8") as fh:
                notes = fh.read().strip()

            if not notes or "## 日本語" not in notes or "## English" not in notes:
                print("::error::RELEASE_NOTES.md must be non-empty and contain both '## 日本語' and '## English' sections.", file=sys.stderr)
                sys.exit(1)

            # Sanitize accidental @mentions outside code spans/URLs and em dashes
            notes = notes.replace(" — ", " - ").replace("—", "-")
            notes = re.sub(r"(?<![A-Za-z0-9_/.`])@([A-Za-z0-9_]+)", r"`@\1`", notes) + "\n"

            # Normalize title to '<tag> - <summary>'
            clean_title = re.sub(r"[\r\n]+", " ", raw_title).replace("—", "-").strip()
            if clean_title.startswith(f"{tag} - "):
                final_title = clean_title
            elif clean_title.startswith(tag):
                rest = clean_title[len(tag):].lstrip(" -:")
                final_title = f"{tag} - {rest}" if rest else f"{tag} - Weekly site release"
            else:
                final_title = f"{tag} - {clean_title}" if clean_title else f"{tag} - Weekly site release"
            final_title = final_title[:100]

            with tempfile.NamedTemporaryFile("w", encoding="utf-8", suffix=".md", delete=False) as tf:
                tf.write(notes)
                cleaned_path = tf.name

            try:
                out_url = subprocess.check_output(
                    [
                        "gh", "release", "create", tag,
                        "--repo", repo,
                        "--target", target_sha,
                        "--title", final_title,
                        "--notes-file", cleaned_path,
                        "--latest",
                        "--fail-on-no-commits",
                    ],
                    text=True,
                ).strip()
            finally:
                os.unlink(cleaned_path)

            print(f"Published GitHub Release: {final_title} -> {out_url}")

            summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
            if summary_path:
                with open(summary_path, "a", encoding="utf-8") as sf:
                    sf.write(f"## 🚀 Published [{final_title}]({out_url})\n\n")
                    sf.write(f"- **Tag**: `{tag}`\n")
                    sf.write(f"- **Target SHA**: `{target_sha[:7]}`\n\n")
                    sf.write(notes)
            PY
---

# Weekly Site Release

You are the **Release Steward** for `${{ github.repository }}` (`https://theomonfort.github.io/theomonfort/`).
Every Friday night (21:00 JST), you inspect what shipped on `main` since the previous GitHub Release and publish a concise, bilingual (`## 日本語` + `## English`) GitHub Release matching the repository's `v1.0.0` release style.

## Pre-Computed Release Context

Before you started, a deterministic preparation step analyzed git history and tags and wrote:

1. `/tmp/gh-aw/release-context/meta.json` — structured fields: `last_tag`, `target_sha`, `suggested_tag`, `resolved_bump`, `commit_count`, `site_file_count`, `force`, `should_release`.
2. `/tmp/gh-aw/release-context/context.md` — categorized diff of added/updated Playbook decks, Equipment items, curated Changelog entries, Hands-on steps, UI/presentation changes, workflow updates, commits since `last_tag`, and the previous release's exact body as a style reference.
3. `/tmp/gh-aw/release-out/` — staging folder where you write `RELEASE_NOTES.md`.

## Step 1: Check Whether a Release Is Needed

Read `/tmp/gh-aw/release-context/meta.json` and `/tmp/gh-aw/release-context/context.md`.

- If `should_release` is `false` (for example, `commit_count` is `0`, or no site-facing files under `src/`, `public/`, or site config changed and `force` is `false`):
  - Call `noop` with a one-sentence explanation (e.g. `No site-facing changes since <last_tag>; skipping weekly release.`), and stop immediately.
- If `should_release` is `true`: proceed to Step 2.

## Step 2: Inspect Key Changes & Choose Semver Tag

1. Start from `suggested_tag` in `meta.json` (which already applies `minor` when new Playbook decks, Changelog entries, Equipment items, pages, components, or media were added, and `patch` when changes are fixes/refinements only, unless overridden by workflow dispatch input `requested_bump`).
2. If `requested_bump` is `auto` and inspecting the commits shows a major new UI capability (e.g. a new interactive widget or presentation feature) even without newly added files, you may upgrade `patch` to `minor`. Never downgrade a `minor` when new content entries were added, and never deviate from `requested_bump` when it is explicitly `minor` or `patch`.
3. Inspect key commit messages or diffs (`git show --stat <sha>` or reading modified files) only as needed to describe user-visible changes accurately. Do not guess what a commit did from an ambiguous title alone.

## Step 3: Write Concise Bilingual Release Notes

Write `/tmp/gh-aw/release-out/RELEASE_NOTES.md` following the exact structure established in `v1.0.0`:

```markdown
## 日本語

<1〜2文で、今回のリリースに含まれる主な更新テーマを簡潔にまとめます。>

- <ユーザーにとって分かりやすい変更点の箇条書き（3〜6項目程度。関連する細かい修正は1項目にまとめる）>
- <新しいプレイブックやスライド追加、プレゼン表示の改善、ハンズオンや装備所の更新、製品更新情報の追加など、実際にあったカテゴリのみ記載>

[サイトを見る](https://theomonfort.github.io/theomonfort/)

## English

<1-2 sentences summarizing the main theme of this release in clear, direct English.>

- <3-6 concise, user-focused bullets mirroring the Japanese bullets; group small polish commits into thematic bullets rather than listing individual commits>
- <Only include categories that actually changed since the previous release>

[Visit the site](https://theomonfort.github.io/theomonfort/en/)

---
**Full Changelog**: https://github.com/theomonfort/theomonfort/compare/<last_tag>...<tag>
```

### Style Rules

- **Brief and concrete**: Keep the release notes crisp ("a little description and highlights"). Summarize themes and user-visible improvements rather than dumping raw commit lists or internal file paths.
- **Bilingual parity**: Keep the `## 日本語` and `## English` sections aligned in meaning and bullet count.
- **Punctuation**: Do NOT use em dashes or the Japanese middle dot character (`・`) in prose; use commas, colons, parentheses, or slashes instead.
- **No @-mentions**: Never @-mention GitHub usernames.
- **No YAML frontmatter**: `RELEASE_NOTES.md` is the raw GitHub Release body; start directly with `## 日本語`.

## Step 4: Verify & Publish

1. Verify `/tmp/gh-aw/release-out/RELEASE_NOTES.md` exists, is non-empty, and includes both `## 日本語` and `## English`.
2. Call `publish_release` once with:
   - `tag`: the chosen semver tag (e.g. `v1.1.0`)
   - `title`: `<tag> - <short English headline in 3 to 8 words>` (matching `v1.0.0 - First site release`, no em dash)
   - `target_sha`: the exact 40-character `target_sha` from `/tmp/gh-aw/release-context/meta.json`
