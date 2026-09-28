---
title: "Export your enterprise credential inventory"
date: "2026-09-21"
summary: "Export an enterprise-wide inventory of SSH keys, personal access tokens, and app credentials to review access and investigate security incidents."
category: security
source: "https://github.blog/changelog/2026-09-21-github-enterprise-adds-credential-inventory-exports/"
demoUrl: "https://github.com/enterprises/octodemo/settings/security"
demo:
  - "Open Settings → Authentication security → Credentials. Show the Overview counts and the Export CSV button. Use sanitized sample data if demonstrating CSV filtering."
---

### Key takeaways

- **UI and API**: export the full CSV from enterprise settings, then filter it by user, app, type, or organization. A paginated REST API supports automated reporting.
- **Metadata, not secrets**: review owners, permissions, creation / expiration dates, and last use. Token values are not included.
- **Access and availability**: enterprise owners or roles with `View enterprise credentials`. Available on GitHub Enterprise Cloud; Enterprise Server support is planned for a future release.

[Reviewing credentials (official documentation)](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents/reviewing-credentials-in-your-enterprise)

[Credential inventory export (REST API)](https://docs.github.com/enterprise-cloud@latest/rest/enterprise-admin/token-inventory?apiVersion=2026-03-10#create-an-enterprise-token-inventory-export)
