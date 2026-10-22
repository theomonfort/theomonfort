---
title: "Copilot model policy API: automate existing model controls"
date: "2026-10-19"
summary: "Read and update model availability through REST instead of repeating settings changes by hand. Automate policy checks, approved rollouts, and enterprise-wide restrictions."
category: administration
status: "GA"
source: "https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams/"
---

### What can we do now that we could not do before?

**The new capability is a supported REST interface, not model restrictions themselves.** Administrators could already control model availability in GitHub's settings. Generally available **GET and PATCH endpoints** now expose those policies at four scopes: **enterprise, organization, enterprise team, and agent apps**.

This lets you build automation around those controls rather than repeat manual settings changes:

- **Check policy drift**: retrieve current settings, compare them with an approved baseline, and report differences on a schedule.
- **Apply reviewed changes**: store the intended configuration in a repository, review it through a PR, then have an authorized workflow call PATCH. This is a workflow you can build with the API, not a new built-in GitOps feature.
- **Automate selective rollouts**: enable a delegated model for approved organizations, or for pilot enterprise teams in teams mode. Later, expand access through the same automation.
- **Respond centrally**: disable a model at enterprise level after a compliance decision, instead of updating each delegated group separately.

### The existing policy hierarchy still applies

Organization mode delegates decisions to organizations. **Enterprise teams mode is still a separate opt-in preview**: it deactivates organization-level model settings and delegates to enterprise teams and apps instead. These are not four independent layers that you can freely combine.

An enterprise-level restriction cannot be overridden by a team. In teams mode, access is additive across a user's teams. API responses describe configured and inherited policy states, **not a definitive per-user access report**.

### A read-only first step

With an appropriately authorized account, replace `ENTERPRISE` with the enterprise slug:

```sh
gh api \
  -H "X-GitHub-Api-Version: 2026-03-10" \
  /enterprises/ENTERPRISE/copilot/model-policies
```

Use the returned model identifiers when preparing updates, and check the relevant endpoint's permissions and editable states before writing.

[Enterprise AI controls REST API](https://docs.github.com/en/enterprise-cloud@latest/rest/enterprise-admin/ai-controls) / [Organization Copilot REST API](https://docs.github.com/en/enterprise-cloud@latest/rest/copilot/copilot-model-policy-management) / [Model availability and delegation](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-availability-of-default-models)
