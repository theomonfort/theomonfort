---
title: "Secret scanning now scans GitHub Actions workflow logs"
date: "2026-11-09"
summary: "Secret scanning can now detect secrets accidentally printed in GitHub Actions workflow logs and surface them in the existing alert list."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs/"
---

### Key takeaways

- **The risk**: A workflow can accidentally print a token or API key in its logs, which were not previously covered by secret scanning. Anyone who can access the logs could use the credential to access repositories, cloud environments, or other services.
- **The response**: GitHub scans completed workflow logs for provider patterns and adds findings to the Secret scanning alert list. Alerts link to the relevant log, supported secret types get validity checks, and alerts remain after the log is deleted.
- **Availability**: Public preview for GitHub Enterprise Cloud customers with Secret Protection or GitHub Advanced Security. An enterprise owner enables it under **Policies → Advanced Security**; it applies to repositories covered by the license where secret scanning is enabled. It is off by default.
- **Limitations**: Only workflow runs completed after enablement are scanned; there is no backfill. Generic, custom, and AI-detected patterns, as well as secrets already masked by Actions, are not detected. Preview alerts do not send notifications, so check the alert list directly.

[Playbook: Secret scanning alerts (slide 3)](https://theomonfort.github.io/theomonfort/en/playbook/secret-scanning/?present=1&slide=3)
