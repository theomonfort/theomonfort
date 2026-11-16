---
title: "PR Diff & File Views"
group: "pr-workflow"
tags: ["diff", "files-changed", "viewed", "review-ui"]
aliases: ["Files Changed", "Viewed Checkboxes", "Split Diff"]
---

**PR Diff & File Views** power the **Files changed** tab of [[Pull Requests]], giving reviewers structured navigation, incremental diff scoping, and stateful progress tracking across multi-commit reviews.

## Diff Inspection Controls

| Capability | Where in `Files changed` | How It Helps Reviewers |
| --- | --- | --- |
| **Unified vs Split Diff** | Diff settings gear (`Unified` / `Split`) | Compare inline single-column hunks or side-by-side before/after columns |
| **Hide Whitespace** | Diff settings -> `Hide whitespace` (`?w=1`) | Filters indentation-only noise during refactors so logic edits stand out |
| **File Tree & Filters** | Left file-tree sidebar + `Filter changed files` | Filter by file extension, `.github/CODEOWNERS` ownership ([[CODEOWNERS]]), or unviewed files |
| **Per-File `Viewed` Checkbox** | Top-right header of every file card | Collapses inspected files and tracks `X / Y files viewed`; automatically resets if a later push modifies that file |
| **Commit & Range Selector** | `Changes from all commits` dropdown | Scope diffs to `Changes since your last review` or step commit-by-commit when authors preserve atomic commits |
| **Rich Diff Rendering** | Display rendered file button on `.md`, `.svg`, images | Previews rendered Markdown tables, diagrams, and visual image diffs alongside raw source |

## Connecting Diffs to Feedback

- Clicking or dragging line numbers in any diff hunk opens [[Inline Review Comments & Threads]] or inserts committable [[Suggested Changes]] directly against the selected range.
