---
title: "Copilot review automatically resolves addressed comments"
date: "2026-09-11"
summary: "After you push a fix, Copilot resolves its own addressed comments during rereview. Suggested commit messages and the analysis behind reviews have also improved."
category: review
source: "https://github.blog/changelog/2026-09-11-auto-resolution-and-analysis-updates-in-copilot-code-review/"
demo:
  - "Demo ready. Use the prepared private demo repository to show Copilot review comments."
  - "Address only some findings and push. After rereview, show resolved comments alongside feedback that remains open."
  - "Apply a Copilot code suggestion and inspect the commit-message suggestion based on the change."
---

### Key takeaways

- **Resolution happens during rereview.** When a later commit addresses the underlying feedback, Copilot resolves its own comment. Pushing a commit does not simply close every thread.
- **Outstanding feedback stays open.** Open comments remain useful for tracking work that still needs attention.
- **Smarter commit messages for suggestions.** Applying a Copilot suggestion now offers a message based on the change rather than a standard placeholder.

### Analysis improvements behind the scenes

Copilot now uses the Copilot SDK's full set of shell tools behind the Copilot agent firewall. It has more ways to validate code, including builds, tests, and targeted scripts. This does not guarantee that every review runs every test.

**Lite reviews also use an ensemble of agents**, combining their perspectives into one review. Published quality and cost improvements are experimental results, not guarantees for individual reviews. The way you request reviews is unchanged.
