---
description: Run a full system and project status check
---

// turbo-all

This workflow performs a comprehensive sweep of the project state to identify active servers, git status, and asset integrity.

1. Check active local servers (Vite/Dev):
   `Get-NetTCPConnection | Where-Object { $_.LocalPort -match "5173|5174|5175" } | Select-Object LocalPort, OwningProcess, State`

2. Verify Git status:
   `git status`

3. List recent builds:
   `Get-ChildItem -Path .\dist -Recurse | Select-Object Name, LastWriteTime -First 10`

4. Verify high-resolution assets:
   `Get-ChildItem -Path .\public\assets -Filter *.jpg`
