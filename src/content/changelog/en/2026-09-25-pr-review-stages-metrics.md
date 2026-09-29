---
title: "Usage metrics API adds pull request review stages"
date: "2026-09-25"
summary: "Repository-level Copilot usage metrics now break down pull request review time by stage, showing with a median and 90th percentile whether pull requests wait for a first look, on reviewer back-and-forth, or after approval."
category: administration
source: "https://github.blog/changelog/2026-09-25-usage-metrics-api-adds-pull-request-review-stages/"
---

### What it measures

Each row of the enterprise and organization `repos-1-day` reports gets a new `pull_request_review_times` array. For each of three stages it returns a **median** and a **90th percentile**, in minutes.

- **Ready for review → first review**: how long until someone looks at it.
- **First review → final review**: time spent on back-and-forth between reviewers. `0` when there was a single review.
- **Final review → merge**: time spent approved but unmerged.

Each entry also includes `authored_by` / `reviewed_by` (both `human` in this release) and `total_merged`. Durations are attributed to the **day the pull request merged**, and the existing `pull_requests` fields are unchanged.

### Key takeaways

- **Only human reviews are timed**: covers pull requests opened by a person and reviewed by at least one other person. Copilot code review, other bots, and the author are ignored, so `total_merged` is usually lower than `pull_requests.total_merged`.
- **No backfill**: data builds forward from the release date. Pull requests that became ready for review before September 21, 2026 are left out.
- **An empty array is not zero**: the array is `[]` on days with no qualifying merged pull requests.
- **Access**: requires the Copilot usage metrics policy to be enabled. Available to enterprise owners / billing managers, organization owners, and custom roles with `View Copilot Metrics`.

[Copilot usage metrics API](https://docs.github.com/rest/copilot/copilot-usage-metrics)
