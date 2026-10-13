---
title: "Copilot code review: organization billing and review request controls"
date: "2026-10-08"
summary: "Organization owners can bill Copilot code reviews from licensed members to the organization instead of the members' quotas, and can limit review requests to people with a Copilot license from the organization or enterprise."
category: review
status: "Generally available"
source: "https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls/"
demo:
  - "Open the organization's Settings → Copilot → Code review and show Choose how members with a Copilot license are billed (Member / Organization). Do not change the setting."
  - "On the same page, show Only allow Copilot code review to be triggered by authorized users and explain that, when on at the organization level, repository admins cannot turn it off."
  - "Open a repository's Settings → Copilot → Code review and show the same toggle at the repository level."
---

### Key takeaways

- **Bill the organization**: by default, reviews associated with members who have a Copilot license use that member's entitlement, and the review fails once their quota is exhausted. Choose **Organization** to bill the organization that owns the repository instead, so member quotas are not used up.
- **Requirements**: billing the organization requires AI credits paid usage; a budget is optional. The choice applies to manual and automatic reviews and changes billing only. It does not grant access to Copilot code review.
- **Block external licenses**: by default, anyone with a paid Copilot license (including a personal license or one from another organization) can request a review in repositories they can access. Turn on **Only allow Copilot code review to be triggered by authorized users** to accept only licenses provided by your organization or enterprise.
- **Scope of the restriction**: unauthorized people do not see Copilot as a reviewer, and their API requests do not start a review. Automatic reviews from their personal settings do not run, but automatic reviews from repository or organization rulesets still run.

### Settings

- **Enterprise**: AI controls → Agents → Copilot code review → Choose how members with a Copilot license are billed (Member / Organization / Let organizations decide)
- **Organization**: Settings → Copilot → Code review → Choose how members with a Copilot license are billed, and Only allow Copilot code review to be triggered by authorized users. When the latter is on at this level, it applies to every repository and repository admins cannot turn it off.
- **Repository**: Settings → Copilot → Code review → Only allow Copilot code review to be triggered by authorized users

For the estimated cost per review, see [Code review on Oct 2](#2026-10-02-code-review-api-effort).

[Configuring code review (official documentation)](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) / [Code review usage and billing](https://docs.github.com/en/copilot/concepts/agents/code-review#code-review-usage-and-billing) / [Reviews requested with an external license](https://docs.github.com/en/copilot/concepts/agents/code-review#reviews-requested-with-an-external-copilot-license)
