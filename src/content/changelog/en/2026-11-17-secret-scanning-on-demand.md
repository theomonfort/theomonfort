---
title: "Run secret scanning on demand with Copilot security review"
date: "2026-11-17"
summary: "Copilot security review can run GitHub secret scanning detectors on code changes after you opt in, with no additional plan required."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-11-17-secret-scanning-on-demand-for-developers-and-agents/"
---

### Key takeaways

- **What it does**: Copilot security review combines its existing LLM-based review with GitHub secret scanning detectors, including provider patterns and a fine-tuned model for secrets such as passwords and credentials in connection strings. It checks code changes, not repository history.
- **Where it works**: Public preview is available in Copilot CLI, Copilot app sessions, Copilot SDK integrations, and Copilot code review. VS Code is not included in this release.
- **How to enable it**: Secret scanning is off by default. In Copilot CLI, run `/settings aiSecretDetection on` in an interactive session. In the Copilot app, enable **AI secret detection** under **Settings → Experimental**. SDK integrations need the `SECURITY_REVIEW_FINE_TUNED_MODEL` feature flag and GitHub authentication. For Copilot code review, enable **Secret scanning** under **Settings → Copilot → Code review → Security**.
- **Availability and billing**: No additional plan is required for these Copilot experiences. Scans consume AI credits under the Secret Protection AI Credit SKU.

After enabling the feature, run `/security-review` or ask the `security-review` specialist to review the changes.
