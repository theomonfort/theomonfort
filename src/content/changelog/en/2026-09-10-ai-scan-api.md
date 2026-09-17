---
title: "Manage AI Scan for PR enablement through APIs"
date: "2026-09-10"
summary: "Read and update organization and repository AI Scan settings through REST APIs, making staged rollout across selected repositories easier to automate."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-09-10-ai-scan-for-pull-request-apis-in-public-preview/"
demo:
  - "Demo still needs validation. First check enterprise permission, required licenses, and code scanning and AI Scan settings."
  - "Read organization and repository settings through the APIs. Confirm that repository settings cannot enable scans when the organization has disabled them."
  - "Try staged enablement and disablement in a test environment, and check usage and findings on PRs."
---

### Key takeaways

- **This release adds settings-management APIs.** Use `/orgs/{org}/code-scanning/ai-scan` and `/repos/{owner}/{repo}/code-scanning/ai-scan` to read and update enablement. These are not on-demand scan or findings-retrieval APIs.
- **Higher-level controls still apply.** A repository cannot override an organization-level disabled state.
- **Available on github.com.** This release targets GitHub Advanced Security customers and does not support GitHub Enterprise Server.

### What does AI Scan itself do?

It complements CodeQL by examining PR changes in languages and frameworks CodeQL does not cover, such as PHP, Shell/Bash, Terraform, and Dockerfiles. Current documentation requires **GHAS and Copilot licenses** during preview, and usage consumes AI credits.

**Findings are advisory and do not block merging.** They appear on PRs, not as full-repository scans or backlog alerts in the Security view. Fork PRs and Dependabot PRs are excluded. This is separate from secret-scanning merge protection.

[AI Scan requirements and limitations (official documentation)](https://docs.github.com/en/code-security/concepts/code-scanning/ai-powered-security-detections)
