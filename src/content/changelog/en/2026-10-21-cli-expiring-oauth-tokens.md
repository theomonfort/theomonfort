---
title: "GitHub CLI: short-lived OAuth tokens without repeated sign-ins"
date: "2026-10-21"
summary: "Opt in to expiring access tokens that gh refreshes automatically. A leaked access token becomes unusable within hours, while normal CLI and configured HTTPS Git operations keep working."
category: security
status: "Public preview"
source: "https://github.blog/changelog/2026-10-21-github-cli-opt-in-to-expiring-auto-refreshing-oauth-tokens/"
---

### Before and after

**Before:** GitHub CLI's default interactive sign-in used a long-lived OAuth token. You did not need to sign in repeatedly, but a leaked token could remain usable until revoked.

**Now, if you opt in:** `gh` stores a **short-lived access token and a rotating refresh token**. When needed, it refreshes credentials automatically. You keep the sign-in convenience while a stolen access token becomes unusable within hours. You must still protect the stored refresh credential and revoke compromised credentials.

### How to opt in

With **GitHub CLI v2.103.0 or later**:

```sh
gh auth login --expiring
gh auth status
```

`gh auth status` shows the credential state, including access-token expiry. To request expiring credentials on subsequent sign-ins without repeating the flag:

```sh
gh config set expiring_credentials enabled
```

**Existing sign-ins are not automatically converted.** Manually supplied tokens keep their existing behavior; this does not turn a PAT or an environment-variable token into a refreshable OAuth credential.

### Two things to check before switching

- **Git over HTTPS**: run `gh auth setup-git` so `gh` serves and refreshes credentials as Git's credential helper. **Git 2.46 or newer is recommended** so expiring credentials are not cached beyond their lifetime. This is unrelated to SSH keys.
- **Scripts that copy tokens**: a script or extension that captures `gh auth token` once and stores the result will eventually hold an expired token. Prefer calling `gh` directly, or obtain a fresh token with `gh auth token` whenever an external tool needs one. Do not print it into logs. Delay migration for workflows that require a fixed, long-lived token.

When adding scopes later with `gh auth refresh`, also pass `--expiring` or keep the configuration setting enabled; otherwise the operation can replace the expiring credential with a non-expiring one.

### Availability

As of **2026-10-22**, this is an **opt-in public preview** on **github.com and ghe.com**, supported on **GHES starting with 3.23**. Unsupported servers fall back to non-expiring tokens, so check the resulting credential state rather than assuming the flag guarantees expiry.

[Authentication and expiring tokens](https://docs.github.com/en/enterprise-cloud@latest/github-cli/github-cli/authenticating-with-github-cli) / [GitHub CLI v2.103.0](https://github.com/cli/cli/releases/tag/v2.103.0)
