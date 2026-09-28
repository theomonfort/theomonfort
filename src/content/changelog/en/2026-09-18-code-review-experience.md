---
title: "Copilot code review: clearer progress and smarter suggestions"
date: "2026-09-18"
summary: "Track findings across reviews, keep comments open when requested, and get tailored commit messages when applying suggestions in a batch."
category: review
status: "Generally available"
source: "https://github.blog/changelog/2026-09-18-copilot-code-review-an-improved-review-experience/"
---

### Key takeaways

- **Clearer overview**: findings are grouped into `Open`, `Resolved since last review`, and `Previously missed`, with severity and the review effort level shown.
- **Previously missed**: findings newly discovered in existing changes appear in the overview only, not as additional inline comments.
- **Smarter auto-resolution**: Copilot respects replies asking it to leave a comment open. It can also resolve comments with `Won't Fix` or `Incorrect` reasons based on subsequent commits.
- **Batch suggestions**: committing an eligible, complete batch generates a relevant commit title and optional description based on the selected changes.
