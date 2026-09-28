---
title: "Copilot code review can approve pull requests"
date: "2026-09-01"
summary: "Every Copilot review now includes an approval assessment. Administrators can also enable actual approvals and choose whether they count toward merge requirements."
category: review
status: "Public preview"
source: "https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests/"
---

### Key takeaways

- **Assessment is not approval**: the overview comment gives Copilot's judgment, but this alone does not satisfy merge requirements. Actual approvals are **off by default**.
- **Fresh review after new commits**: pushing additional commits dismisses Copilot's approval. Request another review for a fresh approval.
- **Availability**: public preview for Copilot Pro, Pro+, Max, Business, and Enterprise.

### Setup

Follow the policy levels that apply to your repository:

1. **Enterprise, if applicable**: `AI controls → Copilot code review`. For `Allow Copilot to approve pull requests`, choose `Let organizations decide` (or enable selected organizations).
2. **Organization, if applicable**: `Settings → Copilot → Code review → Approvals`. For `Count Copilot approvals toward merge requirements`, choose `Let repositories decide`.
3. **Repository**: `Settings → Copilot → Code review → Auto-approval`. Enable `Allow Copilot to approve pull requests`.
4. **Count the approval if desired**: separately enable `Allow Copilot approvals to count toward merge requirements`. Submitting an approval and counting it are two different controls.
5. **Limit the scope**: under `File paths`, enter one glob per line, for example `docs/**`. For an approval to count, **every changed file** must match at least one allowed glob. Blank means all files; up to 15 globs are supported.

[Configuration instructions (official documentation)](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review)
