---
description: How to add a new post to the Musings feed
---

To add a new entry to the **Musings** section on the homepage, follow these steps:

1. Open the data file: `c:\Users\tripp\.gemini\antigravity\scratch\personal-website\public\data\musings.json`
2. Add a new JSON object to the top of the list. Each entry follows this format:

```json
{
    "id": "unique_id_here",
    "date": "YYYY.MM.DD",
    "title": "TITLE_IN_ALL_CAPS",
    "summary": "Your short blog post or update text here.",
    "link": "/optional-link-to-page.html"
}
```

### Pro-Tips for the Sci-Fi Aesthetic:
- **Title**: Use `ALL_CAPS` with underscores for a "terminal log" feel.
- **Link**: If there is no specific page to link to, you can omit the `"link"` line entirely.
- **ID**: This is a background identifier; incrementing the number (e.g., `musing_04`) is the easiest way.

### Example Entry:
```json
{
    "id": "musing_04",
    "date": "2026.02.08",
    "title": "SECTOR_CLEARED",
    "summary": "The homepage restructure is complete. The signal is now broadcasting through the new two-column array."
}
```
