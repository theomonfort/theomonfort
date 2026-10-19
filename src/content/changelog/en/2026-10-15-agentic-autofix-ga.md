---
title: "Agentic autofix for code scanning alerts is generally available"
date: "2026-10-15"
summary: "Assign code scanning alerts to Copilot: it explores the codebase, proposes a fix, reruns CodeQL, and opens a draft pull request for review."
category: security
status: "GA"
source: "https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability/"
demoLinks:
  - label: "octodemo → Advanced Security global settings"
    url: "https://github.com/organizations/octodemo/settings/security_analysis"
demo:
  - "Open octodemo's Settings → Advanced Security → Global settings and show Agentic Autofix under Code scanning. Inspect the setting without changing it."
  - "Explain the rollout: the enterprise must first allow Agentic Autofix under Policies → Advanced Security. The organization can then enable it for eligible repositories, and repository administrators can opt out."
  - "Explain the result and cost: Copilot prepares a draft pull request after validating the fix with CodeQL. Starting a session consumes Code Security AI Credits and GitHub Actions minutes."
---

### What's new?

- **End-to-end remediation**: Copilot explores relevant files, proposes a fix, reruns CodeQL, and iterates if needed before opening a draft pull request. The PR explains the fix and its validation steps.
- **Individual or bulk assignment**: use **Assign to Copilot** on an alert, or select up to **25 alerts** in the repository alert list or a security campaign to fix together in one PR.
- **Default branch only**: alerts detected only on pull requests or other branches cannot be assigned to Copilot.
- **REST API**: assign alerts through the Update a Code Scanning Alert endpoint with `assignees: ["copilot-swe-agent[bot]"]`.

### Access and billing

Available to GitHub Code Security and GitHub Advanced Security customers on GitHub Enterprise Cloud, including data residency. An enterprise administrator must allow the **Agentic Autofix** policy, then an organization or repository administrator enables the feature. A Copilot billing method is required.

When enabled, **Assign to Copilot** replaces the free **Generate Fix** option on individual alerts. Agentic autofix consumes **Code Security AI Credits** and **GitHub Actions minutes**. AI Credit usage appears under **Advanced Security** in enterprise billing's **AI usage** section.

Organizations that used the public preview must enable the feature again. Always review and test the proposed changes before merging.

[Autofix documentation](https://docs.github.com/enterprise-cloud@latest/code-security/concepts/code-scanning/autofix-for-code-scanning) / [Managing access](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning)
