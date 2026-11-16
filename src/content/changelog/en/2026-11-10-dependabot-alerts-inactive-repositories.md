---
title: "Dependabot alerts will pause on inactive repositories"
date: "2026-11-10"
summary: "Starting December 8, 2026, Dependabot alerts will pause on most repositories with no activity for a year. Existing alerts are archived, not deleted, and restored when alerts resume."
category: security
source: "https://github.blog/changelog/2026-11-10-dependabot-alerts-will-pause-on-inactive-repositories/"
---

### Key takeaways

- **The pressure behind the change**: Vulnerability discovery and alert volume are growing. Continuing to process inactive repositories at the same pace can make it harder to keep Dependabot fast and reliable for repositories under active development.
- **What changes**: Starting December 8, 2026, Dependabot alerts will turn off on most repositories with no activity in the previous year. Activity includes pushing to any branch or tag, creating the repository, or enabling Dependabot alerts.
- **Alerts are preserved**: Existing alerts are archived, not deleted. A push or manually turning alerts back on restores them, and the one-year activity window starts over.
- **Repositories exempt from the pause**: Repositories covered by an enforced security configuration that enables Dependabot alerts, and repositories in enterprises whose policy does not allow repository administrators to toggle alerts.
- **Where it applies**: All plans on GitHub.com and GitHub Enterprise Cloud, including data residency. For data residency customers, archived alerts stay in the same region. GitHub Enterprise Server is not included.

[Configure Dependabot alerts (official documentation)](https://docs.github.com/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-dependabot-alerts#enabling-or-disabling-dependabot-alerts-for-a-repository) / [Organization security configurations (official documentation)](https://docs.github.com/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/create-custom-configuration)
