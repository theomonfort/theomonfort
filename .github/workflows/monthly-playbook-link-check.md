---
description: |
  Monthly link checker for the playbook (src/content/playbook/**). Extracts every
  link from frontmatter (`links:`) and the markdown body, tests them with curl,
  and either fixes broken URLs (PR) or files an issue listing what needs human
  attention. Adapted from githubnext/agentics/workflows/link-checker.md.

on:
  schedule:
    # 1st of every month at 03:00 UTC (12:00 JST)
    - cron: "0 3 1 * *"
  workflow_dispatch:

permissions: read-all
timeout-minutes: 60

network:
  allowed:
    - defaults
    - node
    - python
    - github

steps:
  - name: Checkout repository
    uses: actions/checkout@v4
    with:
      fetch-depth: 0
      persist-credentials: false

  - name: Collect and test playbook links
    id: link-check
    shell: bash
    run: |
      set -euo pipefail
      mkdir -p /tmp/aw
      RESULTS=/tmp/aw/link-check-results.md
      ALL=/tmp/aw/all-links.txt
      UNIQ=/tmp/aw/unique-links.txt
      : > "$ALL"

      echo "# Playbook Link Check Results" > "$RESULTS"
      echo "" >> "$RESULTS"
      echo "_Run: $(date -u +%Y-%m-%dT%H:%M:%SZ)_" >> "$RESULTS"
      echo "" >> "$RESULTS"

      MARKDOWN_FILES=$(find src/content/playbook -type f -name "*.md" | sort)
      if [ -z "$MARKDOWN_FILES" ]; then
        echo "No playbook markdown files found under src/content/playbook." >> "$RESULTS"
        echo "no_files=true" >> "$GITHUB_OUTPUT"
        cat "$RESULTS"
        exit 0
      fi

      FILE_COUNT=$(echo "$MARKDOWN_FILES" | wc -l | tr -d ' ')
      echo "Scanned **${FILE_COUNT}** playbook files." >> "$RESULTS"
      echo "" >> "$RESULTS"

      for file in $MARKDOWN_FILES; do
        # frontmatter `url: https://...` entries
        grep -oE 'url:[[:space:]]*https?://[^[:space:]]+' "$file" \
          | sed -E 's/^url:[[:space:]]*//' >> "$ALL" 2>/dev/null || true
        # markdown inline links [text](url)
        grep -oE '\]\(https?://[^)[:space:]]+\)' "$file" \
          | sed -E 's/^\]\(//; s/\)$//' >> "$ALL" 2>/dev/null || true
        # bare http(s) URLs (href="...", plain text)
        grep -oE 'https?://[^"<>[:space:])]+' "$file" >> "$ALL" 2>/dev/null || true
      done

      # Strip trailing punctuation and dedupe
      sed -E 's/[\.,);!?\]]+$//' "$ALL" | sort -u > "$UNIQ"
      LINK_COUNT=$(wc -l < "$UNIQ" | tr -d ' ')
      echo "Found **${LINK_COUNT}** unique HTTP(S) URLs." >> "$RESULTS"
      echo "" >> "$RESULTS"
      echo "## Results" >> "$RESULTS"
      echo "" >> "$RESULTS"

      BROKEN=0
      OK=0
      : > /tmp/aw/broken-links.txt

      while IFS= read -r url; do
        [ -z "$url" ] && continue
        CODE=$(curl -L -s -o /dev/null \
          -A "Mozilla/5.0 (compatible; theomonfort-link-checker/1.0)" \
          -w "%{http_code}" --max-time 15 "$url" 2>/dev/null || echo "000")
        if [[ "$CODE" =~ ^(2|3) ]]; then
          OK=$((OK+1))
          echo "- ✅ \`$CODE\` $url" >> "$RESULTS"
        else
          BROKEN=$((BROKEN+1))
          echo "- ❌ \`$CODE\` $url" >> "$RESULTS"
          echo "$url $CODE" >> /tmp/aw/broken-links.txt
        fi
      done < "$UNIQ"

      echo "" >> "$RESULTS"
      echo "**Summary:** ${OK} working, ${BROKEN} broken." >> "$RESULTS"

      # Map broken URLs back to the files they appear in
      if [ "$BROKEN" -gt 0 ]; then
        echo "" >> "$RESULTS"
        echo "## Broken link locations" >> "$RESULTS"
        echo "" >> "$RESULTS"
        while IFS= read -r line; do
          url="${line% *}"
          escaped=$(printf '%s\n' "$url" | sed -e 's/[]\/$*.^|[]/\\&/g')
          files=$(grep -lE "$escaped" $MARKDOWN_FILES || true)
          if [ -n "$files" ]; then
            echo "- $url" >> "$RESULTS"
            for f in $files; do
              echo "  - \`$f\`" >> "$RESULTS"
            done
          fi
        done < /tmp/aw/broken-links.txt
      fi

      echo "broken_count=$BROKEN" >> "$GITHUB_OUTPUT"
      echo "ok_count=$OK" >> "$GITHUB_OUTPUT"
      echo "link_count=$LINK_COUNT" >> "$GITHUB_OUTPUT"
      cat "$RESULTS"

tools:
  github:
    toolsets: [default]
  cache-memory: true
  web-fetch:
  edit:
  bash:
    - "cat /tmp/aw/*"
    - "ls /tmp/aw/*"
    - "grep:*"
    - "find src/content/playbook *"

safe-outputs:
  create-pull-request:
    title-prefix: "[playbook-link-check] "
    labels: [documentation, automation, playbook, agentic-workflows]
    draft: false
    protected-files: fallback-to-issue
    if-no-changes: "ignore"
  create-issue:
    title-prefix: "[playbook-link-check] "
    labels: [documentation, automation, playbook, agentic-workflows]
  noop:
---

# Monthly Playbook Link Checker

You are an automated link maintainer for the **playbook** of `${{ github.repository }}`
(content under `src/content/playbook/`). The previous step has already collected and
tested every HTTP(S) URL in those markdown files.

## Step 1 — Read the test report

```bash
cat /tmp/aw/link-check-results.md
cat /tmp/aw/broken-links.txt
```

The report lists every URL with its HTTP status. The "Broken link locations" section
maps each broken URL to the playbook file(s) where it appears.

## Step 2 — Consult cache memory

Load cache memory and read `unfixable_links` — URLs we have previously tried and
failed to fix. Skip any broken URL that appears there.

Cache shape:

```json
{
  "unfixable_links": [
    {
      "url": "https://example.com/removed",
      "reason": "404 — content removed, no replacement found",
      "first_seen": "2026-05-01"
    }
  ],
  "last_run": "2026-05-01"
}
```

## Step 3 — Try to fix each remaining broken URL

For each broken URL not in the unfixable list:

1. Use `web-fetch` to investigate. Try:
   - the original URL (it may have been a transient failure),
   - common variants (`http`↔`https`, with/without `www`, trailing slash),
   - GitHub Docs / Blog / Changelog search if it looks like an official page that moved.
2. If you find a working replacement that points to **equivalent or better** content,
   use the `edit` tool on the playbook file(s) to swap the URL. Preserve the link
   label and any surrounding markdown/HTML.
3. If you cannot find a good replacement, append the URL to `unfixable_links` in
   cache memory with the reason and today's date. Do **not** delete the link from
   the playbook — leave it for a human to decide.

## Step 4 — Update cache memory

Set `last_run` to today and persist any new `unfixable_links` entries.

## Step 5 — Decide what to emit

- **If you fixed at least one URL**: emit a `create-pull-request` with:
  - title body: `Fix broken playbook links`
  - body: a table of `old URL → new URL` and the file(s) updated.
- **If broken URLs remain that you could not fix** (and there is no PR worth opening):
  emit a `create-issue` with the broken-link report inline so a human can review.
- **If everything is healthy**: emit `noop` with the message
  `All ${{ steps.link-check.outputs.link_count }} playbook links are reachable`.

## Guardrails

- Only touch files under `src/content/playbook/`.
- Never change link **labels** — only the URLs.
- Skip relative links (`./foo.md`, `#anchor`) — they are validated by the Astro build.
- A 403/429 from a single host is not necessarily a broken link; if `web-fetch` succeeds
  on that URL, treat it as healthy and do **not** add it to the unfixable list.
