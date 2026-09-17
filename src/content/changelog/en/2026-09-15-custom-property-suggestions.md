---
title: "Copilot suggests allowed values for custom properties"
date: "2026-09-15"
summary: "When you create a repository custom property definition, Copilot suggests allowed values, helping establish consistent metadata for governance and ruleset targeting."
category: administration
status: "Public preview"
source: "https://github.blog/changelog/2026-09-15-github-copilot-suggests-custom-properties-definitions/"
demo:
  - "Not yet presented. The previous demo attempt did not work, so do not present this as a validated success."
  - "Check the eligible Copilot Business / Enterprise plan and the Repository custom property suggestions policy."
  - "Create a new selection-based property at enterprise or organization level and retry the suggestions. For example, use a single-select internet-facing property."
---

### Key takeaways

- **Suggestions concern allowed values during definition.** This does not mean Copilot automatically determines or sets each repository's property values.
- **Candidates reflect the property.** Official examples include `yes` / `no` for a single-select `internet-facing` property and compliance-related values for a multi-select `FedRAMP` property.
- **Consistent metadata supports governance.** Custom properties can scope which repositories receive rulesets.

### Availability

Public preview for Copilot Business and Copilot Enterprise. It applies when creating new property definitions at enterprise or organization level. Owners can control availability through the **Repository custom property suggestions** policy.

The cause of the unsuccessful demo attempt is still unknown. Published feature behavior and local demo validation should be treated separately.

[Managing repository custom properties (official documentation)](https://docs.github.com/organizations/managing-organization-settings/managing-custom-properties-for-repositories-in-your-organization)
