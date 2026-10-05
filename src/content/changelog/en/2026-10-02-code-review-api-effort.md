---
title: "Copilot code review: request via API, Balanced is the new default"
date: "2026-10-02"
summary: "Request a Copilot code review through the REST and GraphQL APIs and set the review effort level per request. The Default review effort level now uses Balanced."
category: review
status: "Generally available"
source: "https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level/"
demoUrl: "https://docs.github.com/en/rest/pulls/review-requests#request-reviewers-for-a-pull-request"
demo:
  - "Setup: in a demo repository where Copilot code review is available, prepare one PR with a small change, and sign in to the gh CLI."
  - "Run gh api -X POST repos/OWNER/REPO/pulls/NUMBER/requested_reviewers -f 'reviewers[]=copilot-pull-request-reviewer[bot]' (replace OWNER / REPO / NUMBER with your demo PR). Show Copilot appearing under Reviewers and the review starting."
  - "When the review finishes, check the severity levels and the effort level used in the overview comment."
  - "Open the organization's Settings → Copilot → Code review and show the Default (uses Balanced) and Lite options. Do not change the setting."
---

### Key takeaways

- **Request reviews via API**: request a Copilot review through the REST and GraphQL APIs, optionally setting the review effort level per request. Start reviews from your own scripts, workflows, and internal tools.
- **Balanced is the default**: as announced on August 28, Default uses Balanced since September 28, for new and existing repositories and organizations. Settings where Lite was explicitly selected are unchanged.
- **Watch the cost**: Balanced analyzes more deeply than Lite, so it consumes more AI credits. Estimates are $0.05 to $1 for Lite and $0.25 to $5 for Balanced (per review, excluding Actions minutes).
- **Plans**: Copilot Pro, Pro+, Max, Business, and Enterprise.

### Switching back to Lite

Change Default to Lite at the level you manage. Each level can override the one above it.

- **Enterprise**: AI controls → Agents → Copilot code review
- **Organization / repository**: Settings → Copilot → Code review
- **Personal**: profile → Copilot settings → Copilot → Code review

For personal settings and enterprise defaults, see [Code review settings on Sept 23](#2026-09-23-code-review-settings).

[Configuring code review (official documentation)](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) / [Review effort and estimated cost](https://docs.github.com/en/copilot/concepts/agents/code-review#estimated-consumption)
