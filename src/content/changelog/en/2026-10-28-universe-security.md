---
title: "Universe security roundup: detect, prioritize, and fix"
date: "2026-10-28"
summary: "Six security updates in one place: Copilot app's security extension, AI-aware push protection, scanning for AI applications and entire repositories, public monitoring, and Dependabot reachability."
category: security
event: universe-2026
status: "GA and public previews"
source: "https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app"
---

### Find and fix in Copilot app

**Security extension (public preview)**: browse code scanning alerts, ask Copilot to explain or fix them, and review local changes with `/security-review`. Fixes stay in the working copy; nothing is automatically committed or pushed. Private-repository alerts require Code Security and permission to view them. Explain, Fix, and reviews consume AI credits.

### Broader detection

- **AI-detected secrets in push protection (public preview)**: use code context to block secrets without predefined formats. Off by default; requires AI-detected secrets and push protection to be enabled. For organizations with Secret Protection or Advanced Security on github.com. This push-time detection consumes AI credits; post-push AI secret alerts remain included.
- **Code scanning for AI applications (public preview)**: flag indirect prompt injection, sensitive information disclosure, and excessive agency in PRs. Requires Advanced Security and enabled scanning on github.com; not available on GHES.
- **AI Scan for repositories (public preview)**: scan the latest default-branch commit, complementing CodeQL across languages and frameworks. Consumes Code Security AI credits, without requiring a Copilot license. Organization-owned private/internal repositories require Code Security or Advanced Security; personally owned private repositories are not supported. **Rescan after merging a fix to close resolved alerts.**

### Prioritize exposure

- **Public monitoring (GA)**: detect enterprise secrets exposed anywhere in public GitHub content, not private repositories belonging to others. Included with Secret Protection or Advanced Security on Enterprise Cloud, including data residency. Attribution uses membership or verified domains; data-residency enterprises use verified domains only.
- **Dependabot reachability (public preview)**: show whether JavaScript/TypeScript code can call vulnerable dependency functions. Available on Enterprise Cloud, including data residency, with an npm, Yarn, or pnpm lockfile. Off by default and free during preview, including its managed Actions runs. **Treat “Potentially reachable” as reachable**; verdicts do not dismiss alerts.

### All six official announcements

- [Security extension for Copilot app](https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app)
- [Push protection beyond predefined secret patterns](https://github.blog/changelog/2026-10-28-push-protection-beyond-predefined-secret-patterns)
- [Code scanning for AI applications](https://github.blog/changelog/2026-10-28-code-scanning-for-ai-applications-in-public-preview)
- [AI Scan for repositories](https://github.blog/changelog/2026-10-28-ai-scan-for-repositories-in-public-preview)
- [Public monitoring for enterprises](https://github.blog/changelog/2026-10-28-public-monitoring-for-enterprises-generally-available)
- [Dependabot reachability analysis](https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis)
