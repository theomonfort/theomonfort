---
title: "Package firewall: block risky npm packages before installation"
date: "2026-10-20"
summary: "An enterprise-controlled gateway checks package requests before downloads reach developers, coding agents, or CI runners. It adds install-time enforcement, not just another dependency alert."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-20-github-package-firewall-in-public-preview/"
---

### What changes in practice?

**A malicious dependency can execute code during installation, before anyone reviews a PR.** Package firewall places a policy gate in that download path, including when an agent installs a package without a human approving each command.

Instead of contacting the public registry directly, configured endpoints send **metadata requests and package downloads through GitHub's firewall**. It evaluates the enterprise policy and blocks requests that fail it. This complements dependency alerts and PR checks; it does not replace them.

### What can the policy block?

- **Newly published versions**: a configurable minimum package age introduces a cooldown, leaving time for threats to be discovered. For example, an enterprise can require a version to be at least three days old.
- **Known malware and vulnerabilities**: checks use the GitHub Advisory Database. Administrators choose the vulnerability severity threshold that blocks installation.
- **Attestation downgrades**: blocks a version that lacks SLSA attestations when earlier versions had them, a possible sign of a compromised publishing process.
- **New install scripts**: the setup documentation also describes blocking newly introduced install scripts, such as `preinstall` or `postinstall`.

For example, a CI build attempting to download a version published minutes ago can be blocked by the cooldown **even before a malware advisory exists**. This reduces exposure; it does not prove that an older or allowed package is safe.

### Setup and exceptions matter

Configure controls under **Enterprise → Policies → Package firewall**, then point the package manager at the enterprise-specific firewall registry with an authentication token belonging to an enterprise member. Keep credentials in a secret store, never in a committed configuration.

**Enabling a policy alone does not reroute package traffic.** Only requests passing through the firewall are checked. Developer machines, agent environments, and CI runners must be configured accordingly. Existing direct registry routes can bypass it.

Blocked requests include a link to request an exception, useful when an urgent security fix is itself too new for the cooldown. Enterprise administrators and security managers review those requests.

### Availability

As of **2026-10-22**, the public preview supports **npm packages only** and is available to **GitHub Enterprise Cloud**, including data residency. It is **free during preview**; GitHub says general availability will use metered billing.

[Setup, policy controls, and exceptions](https://docs.github.com/en/enterprise-cloud@latest/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall)
