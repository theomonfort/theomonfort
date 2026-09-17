---
title: "Control Actions cache access with cache-mode"
date: "2026-09-10"
summary: "Limit cache restores and saves at workflow or job level. Least-privilege cache access helps reduce the risk of cache poisoning."
category: actions
status: "Generally available"
source: "https://github.blog/changelog/2026-09-10-control-github-actions-cache-access-with-cache-mode/"
demo:
  - "Demo not yet validated. Try read, write-only, and none in a test workflow, checking whether restores and saves are allowed."
  - "Check that job settings override workflow settings and that reusable workflows cannot exceed the caller's cache permissions."
  - "Do not grant write access to low-trust events such as pull_request_target merely to demonstrate the feature."
---

### Four modes

- **`read`**: restore only, no saves. The default for low-trust events such as `pull_request_target`.
- **`write`**: both restore and save, not save-only. The default for trusted events such as `push`.
- **`write-only`**: save only, no restores.
- **`none`**: neither restore nor save.

### Why it matters

Job settings override workflow settings. The cache service enforces the restriction, including through reusable workflows. A called workflow cannot receive more access than its caller granted.

**Explicit settings also override secure defaults.** Granting `write` or `write-only` for low-trust events increases cache-poisoning risk and produces a warning annotation. Omitting the setting preserves existing secure defaults. Generally available on github.com for all plans.

[cache-mode workflow syntax (official documentation)](https://docs.github.com/actions/reference/workflows-and-actions/workflow-syntax#cache-mode)
