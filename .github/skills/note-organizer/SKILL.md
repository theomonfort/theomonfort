# Note Organizer Skill

This skill automatically organizes raw notes into a structured format using the standard note template. It analyzes unstructured note content and reorganizes it into clean, properly formatted notes while managing task workflows across daily, weekly, and task files.

## Objective

Transform unorganized note content into well-structured markdown files that follow the standard note template format, while maintaining a unified task management system that consolidates completed tasks in daily and weekly notes rather than a separate completed file.

## Capabilities

- **Content Analysis**: Parses raw note content to identify different types of information
- **Template Application**: Organizes content into the standard note structure (Context, Content, Key Points, Links, Action Items, Related Notes)
- **Smart Cleanup**: Automatically removes empty sections and unnecessary categories
- **Metadata Extraction**: Extracts and formats dates and tags from the note content
- **Section Detection**: Intelligently categorizes content into appropriate sections
- **Task Extraction**: Automatically detects task markers and adds them to the task management system
- **Task Completion Workflow**: Marks completed tasks in `tasks.md` and propagates them to daily and weekly notes

## Task Management Structure

### Files
- **`20-notes/21-tasks/tasks.md`**: Unified task file containing both active and completed tasks
  - Active tasks use checkbox syntax: `- [ ] Task description`
  - Completed tasks use checkbox syntax: `- [X] Task description`
  - Organized by category (Onboarding, Questions to Ask, Contributions, etc.)

### Workflow
1. **Adding New Tasks**: Add as `- [ ]` in appropriate category in `tasks.md`
2. **Completing Tasks**: 
   - Mark as `- [X]` in `tasks.md`
   - Add to daily note (`20-notes/22-daily/YYYY-MM-DD.md`) in "What I Did Today" section
   - Add to weekly note (`20-notes/23-weekly/YYYY-MM-DD.md`) in appropriate section as a summarized entry with a date reference to the daily note
3. **No Separate Completed Files**: All task history is maintained in daily and weekly notes, not in a separate `completed.md` file

## Instructions

### Context
When you receive a note that needs to be organized, analyze its content and restructure it according to the standard template format. When completing tasks, ensure they are:
1. Marked as complete in `tasks.md`
2. Added to today's daily note
3. Added to the weekly note with a reference to the daily note

### Expected Behavior

1. **Input Analysis**: Review the raw note content provided
2. **Content Categorization**: Sort the content into appropriate template sections:
   - **Context**: Background or situation information
   - **Content**: Main body of the note
   - **Key Points**: Main takeaways and important information
   - **Links and References**: URLs and reference materials
   - **Action Items**: Tasks or follow-ups (marked with checkboxes)
   - **Related Notes**: Links to other relevant notes

3. **Template Formatting**: Apply the standard note template structure with proper markdown formatting
4. **Section Removal**: Remove any sections that don't have content
5. **Date and Tags**: Extract date from context and organize tags appropriately
6. **Task Extraction**: Detect and extract tasks that need to be added to the task management system
   - Look for patterns like `task [text]` or `task: [text]` in the note content
   - Extract the task text and add it to `20-notes/21-tasks/tasks.md` in the appropriate category
   - Remove the task marker from the organized note (or keep in Action Items section if appropriate)
   - Format tasks with proper checkbox syntax `- [ ]` in the task file

7. **Task Completion**: When marking a task as completed
   - Find and mark the task as `- [X]` in `20-notes/21-tasks/tasks.md`
   - Add the completed task to today's daily note (`20-notes/22-daily/YYYY-MM-DD.md`) in the "What I Did Today" section with a clear, descriptive description
   - **CRITICAL**: Also add the completed task to today's weekly note (`20-notes/23-weekly/YYYY-MM-DD.md`) in the appropriate section (e.g., Contributions, What I Did This Week, etc.) as a summarized entry using the format:
     - `Task summary (see [YYYY-MM-DD](../22-daily/YYYY-MM-DD.md) for details)`
     - This link allows readers to refer to the daily note for the full explanation
   - If today's weekly note doesn't exist, create it with the standard weekly note template
   - If today's daily note doesn't exist, create it with the standard daily note template

8. **File Naming**: 
   - Daily notes: Use format `YYYY-MM-DD.md` (e.g., `2026-02-19.md`)
   - Weekly notes: Use the last day of the week in format `YYYY-MM-DD.md` (e.g., `2026-02-20.md` for the week ending Thursday, February 20)
   - Meeting notes: Use format `YYYY-MM-DD-meeting-name.md`

9. **Cross-File Synchronization**: Every time content is added to daily notes:
   - Always also add a summarized version to the weekly note with a date reference
   - Use consistent formatting and link syntax

### Constraints

- Keep the note focused and concise
- Only use sections that contain actual content
- Maintain the markdown formatting standards
- Preserve the original information without distorting meaning
- Use proper checkbox syntax `- [ ]` for uncompleted action items and `- [X]` for completed items
- Use proper link syntax `[text](url)` for references
- When extracting tasks (marked with `task` or `task:`), add them to `20-notes/21-tasks/tasks.md` under the appropriate category (default to "Onboarding" if unclear)
- **When completing tasks**: ALWAYS update three sections: mark complete in tasks.md, daily note (add to "What I Did Today"), and weekly note (add summarized entry with date reference)
- Do NOT create or maintain a separate `completed.md` file
- All completed tasks are documented through daily and weekly notes

## Usage Examples

### Example 1: Completing a Task
```
Input: "task completed: Check PRU usage"

Output:
1. Mark in `20-notes/21-tasks/tasks.md`:
   - [X] Check PRU usage
2. Add to today's daily note `20-notes/22-daily/2026-02-20.md` in "What I Did Today":
   - Checked PRU usage
3. Add to today's weekly note with reference:
   - Checked PRU usage (see [2026-02-20](../22-daily/2026-02-20.md) for details)
```

### Example 2: Adding New Task
```
Input: "task: Follow up with engineering team about API limits"

Output: 
1. Added to `20-notes/21-tasks/tasks.md`:
   - [ ] Follow up with engineering team about API limits
```

### Example 3: Detailed Task Completion with Long Explanation
```
Input Daily Note: "Created a skill to automatically download Change Log as PPT with robust template, multi-page RSS fetching..."

Output:
1. Mark in `20-notes/21-tasks/tasks.md`:
   - [X] Create skill to automatically download Change Log as PPT
2. In daily note (full detailed explanation):
   - Created skill to automatically download Change Log as PPT with robust template, multi-page RSS fetching, native Japanese translation, and visual categorization
3. In weekly note (summarized with reference):
   - Created skill to automatically download Change Log as PPT with robust template, multi-page RSS fetching, native Japanese translation, and visual categorization (see [2026-02-20](../22-daily/2026-02-20.md) for details)
```

## Critical Implementation Notes

- **No Completed File**: The `completed.md` file is no longer used. All task completion history is maintained through daily and weekly notes.
- **Date References**: Weekly notes must include date references in format `(see [YYYY-MM-DD](../22-daily/YYYY-MM-DD.md) for details)` to link to daily notes with full explanations.
- **Summarization**: Weekly entries should be concise summaries, with the full detailed explanation living in the daily note.
- **File Organization**: Uses Johnny Decimal numbering: `20-notes/21-tasks/`, `20-notes/22-daily/`, `20-notes/23-weekly/`

## Knowledge Base Bilingual Sync

### Structure

All knowledge documents in `40-presentations/` are maintained in both English and Japanese using paired subfolders:

```
40-presentations/
├── 41-Copilot/
│   ├── 41.01-english/       # English originals
│   └── 41.02-japanese/      # Japanese translations
├── 42-Actions/
│   ├── 42.01-english/
│   └── 42.02-japanese/
├── 43-GHAS/
│   ├── 43.01-english/
│   └── 43.02-japanese/
└── 44-Admin/
    ├── 44.01-english/
    └── 44.02-japanese/
```

### Auto-Translation Behavior

**Whenever an English knowledge document is created or updated**, the note-organizer must automatically create or update the corresponding Japanese translation:

1. **Detect the change**: When organizing or editing any file under a `*.01-english/` folder in `40-presentations/`, trigger translation.
2. **Translate**: Produce a natural, professional Japanese translation of the full document. Preserve all markdown formatting, code blocks, links, and structure. Translate prose, headings, and descriptions — keep code, commands, URLs, and proper nouns (product names, tool names) in their original form.
3. **Save**: Write the translated file to the matching `*.02-japanese/` folder with the **same filename**.
   - Example: `41-Copilot/41.01-english/github-copilot-cli.md` → `41-Copilot/41.02-japanese/github-copilot-cli.md`
4. **Incremental updates**: If the Japanese file already exists, update only the sections that changed rather than retranslating the entire document (unless the changes are extensive).

### Constraints

- English is always the source of truth. Never propagate changes from Japanese → English.
- If a Japanese translation exists but no English source, flag it as an orphan for review.
- Code blocks, shell commands, and URLs must never be translated.
- Technical terms that are commonly used in their English form in Japanese IT contexts (e.g., "GitHub Actions", "pull request", "CLI") should be kept in English within the Japanese text.

## Limitations

- May require clarification for ambiguous content categories
- Cannot create new links if URLs are incomplete or missing
- Depends on clear, readable input content for best results
- Works best with notes that have at least some organized information

## Template Reference

Uses the standard template from the standard note template which includes:
- Title and metadata (Date, Tags)
- Context
- Content
- Key Points
- Links and References
- Action Items
- Related Notes
