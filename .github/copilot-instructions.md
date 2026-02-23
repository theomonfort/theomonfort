# Copilot Instructions - Project Overview

This repository (`cockpit`) is a personal workspace for managing daily notes, tasks, meetings, and AI automation tools (agents/skills). It is designed to streamline daily workflows using GitHub Copilot and custom CLI tools.

## Project Structure

- **`.github/`**:
  - `agents/`: Custom AI agents definitions (e.g., `meeting-summarizer`, `note-organizer`).
  - `skills/`: Reusable abilities for agents (e.g., meeting summarization logic).
  - `copilot-instructions.md`: This file (global context for Copilot).

- **`meetings/`** (`30-meetings/`):
  - Organized by project or person (e.g., `apac-weekly-standup/`, `1-1-anthony/`).
  - Stores Markdown notes for each session.

- **`knowledge/`** (`40-presentations/`):
  - Each topic folder contains bilingual subfolders: `*.01-english/` (source of truth) and `*.02-japanese/` (auto-translated).
  - `41-Copilot/`: GitHub Copilot tips, prompts, and best practices.
  - `42-Actions/`: Tips and patterns for GitHub Actions workflows.
  - `43-GHAS/`: GitHub Advanced Security knowledge.
  - `44-Admin/`: Administrative processes and reference guides.
  - **Translation rule**: When any English knowledge doc is created or updated, the note-organizer skill automatically generates/updates the Japanese translation in the corresponding `*.02-japanese/` folder.

- **`notes/`** (`20-notes/`):
  - `daily/`: Chronological daily logs and thoughts (`YYYY-MM-DD.md`).
  - General notes on various topics.

- **`tasks/`**:
  - `tasks.md`: Centralized task list categorized by context (e.g., Onboarding, Questions).

- **`templates/`**:
  - Markdown templates for standardized creation of notes, meetings, and agents.

- **`copilot/`** (Archive/Backup):
  - Previous location for instructions and preferences.

## Key Workflows

1. **Daily Notes**: Created in `notes/daily/` to log activities and thoughts.
2. **Tasks**: Managed centrally in `tasks/tasks.md`. Do not leave tasks scattered in daily notes.
3. **Meetings**:
  - Notes are stored in specific subfolders in `meetings/`.
  - Use the `meeting-summarizer` agent/skill to format raw notes into the standard template.
4. **Automation**:
  - Use custom agents (e.g., `@meeting-summarizer`, `@note-organizer`) to structure content automatically.

## Skill Documentation Policy

**Every skill in `.github/skills/` has a `SKILL.md` file that documents how it works.**

When you modify a skill's script, template, or behavior:
- **Always update the corresponding `SKILL.md`** in the same session, without being asked.
- Document any new features, changed behavior, new options, or technical details.
- Keep the "Critical Implementation Notes" section up to date with hard-won technical learnings.
- If you add a new label mapping, category, output path, or dependency — update SKILL.md immediately.
