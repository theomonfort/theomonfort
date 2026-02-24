---
name: meeting-summarizer
description: Create compact meeting summaries using the standard template. Use when user provides raw meeting notes to format into structured summaries.
---

# Meeting Summarizer Skill

## Purpose

Create compact meeting summaries using the standard template and required section order. Remove empty sections and avoid invented details.

## When to Use

- User provides meeting notes, transcript, or screenshots
- User asks for a compact summary or structured meeting note
- User wants consistent meeting note formatting
- User points to a `.docx` transcript file in a meeting folder

## Input Sources

### Text / Screenshots
- Title, date, time, participants (from text or screenshots)
- Discussion notes or bullet points
- Explicit decisions, actions, and blockers (if present)

### `.docx` Transcript Files
When the input is a Word document (e.g., a Teams/Zoom meeting transcript exported as `.docx`):

1. **Install the library** (if not already available):
   ```bash
   pip3 install python-docx
   ```
2. **Extract the transcript** using `python-docx`:
   ```python
   from docx import Document
   doc = Document("path/to/transcript.docx")
   for p in doc.paragraphs:
       print(p.text)
   ```
3. The first lines of the transcript typically contain the meeting title, date, and duration — extract header metadata from there.
4. Speaker turns are formatted as `Speaker Name   MM:SS` followed by their text on the next lines.

## Output Format

- Header (as-is)
- Objectives
- Decisions Made
- Action Items
- Blockers Identified
- Discussion Points
- Next Meeting (only if provided)
- Additional Notes (only if provided)

## Output Location

The summary markdown file goes in the same folder as the source transcript, following the naming convention:
```
YYYY-MM-DD-meeting-name.md
```
Example: `30-meetings/31 manager/2026-02-20-anthony-theo-weekly-call.md`

## Rules

- Keep the summary compact and scannable
- Use short bullets; avoid deep nesting
- Do not invent details or schedules
- Extract screenshot metadata and map to header fields
- Remove any empty sections

## Post-Processing

**After the summary has been created and confirmed, delete the source `.docx` file from the folder.** The transcript has served its purpose — the structured markdown summary is the permanent record. This keeps the meeting folders clean and avoids accumulating large binary files in the repository.

## Dependencies

```bash
pip3 install python-docx
```

## Template Reference

- `templates/meetings/meeting-template.md`
