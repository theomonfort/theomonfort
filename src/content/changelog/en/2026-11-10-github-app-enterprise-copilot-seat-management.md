---
title: "GitHub Apps can manage enterprise Copilot seats"
date: "2026-11-10"
summary: "Enterprise-installed GitHub Apps can now assign and remove Copilot seats for enterprise users and teams with a dedicated fine-grained permission."
category: administration
source: "https://github.blog/changelog/2026-11-10-github-app-support-for-enterprise-copilot-seat-management"
---

Enterprise-installed GitHub Apps can now manage Copilot seats through the `Enterprise Copilot license management` permission. Here are a few workflows this enables:

### Example workflows

- **Self-service requests**: A developer requests access through an internal portal. After approval, an App assigns a Copilot seat to them.
- **Team-based access**: Assign seats to an enterprise team so access follows team membership.
- **Seat reviews**: List seat assignments and flag potentially unused seats for an admin to review. IDE activity data depends on telemetry being enabled, so missing activity alone is not proof that a seat is unused.
- **Offboarding**: Remove a user's or team's seat assignment. Cancellation takes effect at the end of the billing cycle, and users keep access if another team or organization still grants it.

The seat-management APIs are in public preview and may change. Enterprise installations do not automatically get access to organizations or repositories.

### Documentation

- [Copilot seat management REST API](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-user-management)
- [Permissions required for GitHub Apps](https://docs.github.com/en/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps#enterprise-permissions-for-enterprise-copilot-license-management)
- [Installing a GitHub App on your enterprise](https://docs.github.com/en/enterprise-cloud@latest/apps/using-github-apps/installing-a-github-app-on-your-enterprise)
