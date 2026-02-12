---
description: Build and preview the website redesign
---

// turbo-all

This workflow automates the process of building the personal website and preparing it for a local preview or deployment check.

1. Clean the previous build:
   `Remove-Item -Path .\dist -Recurse -Force -ErrorAction SilentlyContinue`

2. Install dependencies (if needed):
   `npm install`

3. Build the project using Vite:
   `npm run build`

4. Check the local preview server port:
   `Get-NetTCPConnection -LocalPort 5174 -ErrorAction SilentlyContinue`

5. If the port is busy, you can use the `Stop-Process` command to clear it before restarting.
