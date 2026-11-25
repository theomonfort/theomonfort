---
title: "Copilot code review: adaptive effort, secret detection, and more"
date: "2026-11-17"
summary: "Copilot can adapt review effort to each PR, use context from other public repositories, and flag exposed secrets. Code review for Azure Repos is generally available."
category: review
status: "Public preview / Generally available"
source: "https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more/"
---

### What's new

- **Adaptive effort (public preview)**: Copilot selects Lite, Balanced, or Max based on the PR's complexity and risk, and reports the level used. Select Adaptive for a PR or as a default in personal, repository, organization, or enterprise settings. Balanced remains the default, and Adaptive cannot exceed the configured maximum effort level.
- **Cross-repository context (public preview)**: when reviewing public repositories, Copilot can read related public repositories to find dependent code, documentation, custom instructions, and skills.
- **Secret detection (public preview)**: reviews can flag exposed credentials using both known-format detectors and AI/ML detection. Enable it under repository or organization Settings → Copilot → Code review.
- **Repository insights**: see how Copilot review feedback is addressed in a repository under Insights → Repository insights.
- **Azure Repos (generally available)**: request Copilot reviews manually or through branch policies, use custom instructions and skills, and track usage billed in GitHub AI credits to the linked Azure subscription.

Adaptive effort, cross-repository context, and secret detection are available with Copilot Pro, Pro+, Max, Business, and Enterprise.

[Configure Copilot code review](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review) / [Repository insights announcement](https://github.blog/changelog/2026-11-17-track-copilot-code-review-outcomes-in-repository-insights/) / [Azure DevOps setup](https://learn.microsoft.com/azure/devops/repos/git/copilot-code-reviews)
