# Personal Website - Session Notes

## Session: July 30, 2026

### 1. Home Page: "What's Current" Announcement
- **Copy**: Opening sentence now reads "Book 2 of the Citizens and Denizens trilogy is now available on Amazon!" The rest of the synopsis moved into its own paragraph below.
- **New Amazon link**: Added a HUD-styled acquisition block (`.amazon-link` in `style.css`) linking to `https://a.co/d/0ftshYQL` — cyan border, gradient fill, mono `ACQUIRE // AMZN_LINK` label above the title, fills solid on hover to match the existing `.glass-link` interaction language.
- **Caption fix**: The `REF:` line under "Enter Sector" said `AMZN_INTEL_LINK` but the button points at the fiction page. Now `FICTION_INTEL_LINK`.

### 2. New Cover Art
- **Asset**: Replaced the cover with the version carrying the HUMAN AUTHORED badge, web-sized to 600×906 (512KB, down from 1.2MB).
- **Naming**: Saved as `luckys-ghosts-cover-v2.jpg` rather than overwriting `luckys-ghost-cover.jpg`, so the CDN and returning visitors can't serve the cached badge-less image. Old asset deleted.

### 3. Fiction Page Overhaul
- **Removed**: The three "Sneak Peek" draft chapter links, the modal reader system behind them (`loadChapters`, `openReader`, prev/next nav), and `public/data/chapters.json`. Book 2 is published, so draft chapters are obsolete. `fiction.js` went from 119 lines to ~40; built bundle from 4.0kB to 1.4kB.
- **Added**: A `DATABASE_ENTRY: LUCKY'S GHOSTS` section mirroring the Book 1 card — same cover frame, headline "Lucky's Ghosts: (Book 2)", new synopsis, and an "Available on Amazon" button.
- **Layout fix**: `.book-card-visual` used `flex: 0 0 188px`, but flex-basis governs *height* once the layout stacks below 1012px, so the frame sized itself to each image's natural width (Stars 242px, Ghosts 602px). Changed to `flex: 0 0 auto; width: 188px`. Both cards now render 190×270 at every breakpoint. This also fixed a pre-existing bug on the Book 1 card.

### 4. Deploy Pipeline Fix
- **Problem**: `.github/workflows/deploy.yml` had `url: \${{ steps.deployment.outputs.page_url }}` — the backslash escaped the expression, so GitHub logged the literal `\http://tripprobbins.com/` and refused to render it as a link in the workflow graph.
- **Fix**: Removed the backslash. Annotation is gone.

### 5. New Musing (`musing_09`, "The Lucky's Ghosts release")
- **Content**: The CIG clearance delay behind the Book 2 release, the Authors Guild "Human Authored" badge now on the covers, and the editorial policy behind it — AI used for feedback and discussion only, never to write text.
- **Process**: Drafted in `musing-draft.md` and compiled with `npm run add-musing`, which auto-assigned `musing_09` / `2026.07.30` and reset the draft template.

### 6. Repo Cleanup
- **Untracked `dist/`**: The folder was committed before `.gitignore` listed it, and gitignore doesn't apply to already-tracked files — so every local build dirtied `git status` with ~19 files. Ran `git rm -r --cached dist`; the folder stays on disk, Git just stops watching it. Verified a rebuild now leaves the tree clean.
- **Safe because**: Actions runs `npm run build` on its own runner and deploys that output, so the committed `dist/` was never read by production. The custom domain comes from `public/CNAME` (still tracked), which Vite copies into `dist` on every build — checked before committing, since a missing CNAME is how Pages custom domains silently break.
- **Deleted `extract_chapters.py` and `extracted_text.txt`**: The script scraped the draft chapters out of the old site's HTML and was hardcoded to a path outside the repo; the .txt was its output, HTML tags and all. Both obsolete now that the chapter reader is gone. Recoverable from Git history if ever needed.

### 7. Commits (all deployed to `main`)
- `e9d3c2b` — Amazon announcement + new cover art
- `1b411f8` — `FICTION_INTEL_LINK` caption
- `2f80d56` — Workflow environment URL
- `e645033` — Fiction page: chapters out, Ghosts entry in
- `ed0733c` — Session notes
- `63a4f74` — Musing 09
- `29ba304` — Session notes: musing 09
- `ff06817` — Untrack `dist/`, remove chapter extraction files

### 8. Notes for Next Time
- **High-res cover**: The repo holds only the 600px web version (`public/assets/luckys-ghosts-cover-v2.jpg`). The full-resolution original lives on Tripp's PC — confirmed July 30.
- **`site_source.html`** (370kB) is still in the repo root: a snapshot of the pre-Vite site, kept as reference. Not referenced by any page.
- **Musings workflow**: draft in `musing-draft.md`, run `npm run add-musing`. The script auto-assigns the next ID and today's date, then resets the draft template.

## Session: May 26, 2026

### 1. New Musing Added ("Upcoming Stuff")
- **Content**: Added the `musing_06` entry announcing the July 1st release of *Lucky's Ghosts* (Book 2), second edition of *Lucky's Stars* with cover art by Alicia Vogel, and upcoming events (Bay Area Book Fair on May 31, Austin Bar Citizen on June 13, and BayCon on July 3-6).
- **Process**: Drafted the entry in `musing-draft.md` and compiled it into `public/data/musings.json` using the automated `npm run add-musing` script.

### 2. Live Deployment
- **Action**: Verified the local preview using Vite's development server, successfully built the static assets, and pushed the commit directly to the `main` branch to trigger the GitHub Actions deployment pipeline.

## Session: March 25, 2026


### 1. Deployment Pipeline Fix (GitHub Actions)
- **Problem**: Website updates (including a new Musing and app updates) were pushed to the local `master` branch but didn't deploy to the live site.
- **Solution**:
  - Discovered that the `.github/workflows/deploy.yml` action only triggers on the `main` branch.
  - Merged the un-deployed `master` branch changes into `main` and pushed the updates to trigger the deployment.
  - Committed previously unstaged musing script (`scripts/add-musing.js`) and its `package.json` entry into source control.

### 2. UI Quick Fix
- **Outcome**: Updated the heading text on the Apps page to "STAR CITIZEN COMPONENT TRACKER - DB".

---

## Session: Feb 11, 2026

## 🏆 Completed in this Session
### 1. "Digital Messing About" Overhaul
- **Objective**: Full implementation of the Software sector.
- **Outcome**: Created a professional hub for Star Citizen tools and external resources.
- **Key Task**: Updated the **SC Component Tracker** with personal text, specific feature bullets, and an interactive "Visual Log" (screenshot modal).
- **Expansion**: Integrated a "Functional Assets" grid with 9 community links, using a high-legibility font variant for technical data.

### 2. The "Reliability Patch" (UX Fix)
- **Problem**: Glitch-buttons were jittering during hover, causing missed clicks (the "6-click frustration").
- **Solution**: 
  - Stabilized the hit-box by moving the jitter animation to a pseudo-element layering system.
  - Added a tactile `:active` state (`scale(0.95)` + `brightness(1.3)`) providing instant confirmation of user input.
  - Verified 100% click-through reliability on Home, Software, and Journalism pages.

### 3. Layout & Typography Tuning
- **Alignment**: Restructured project panes so headlines sit above the content, ensuring perfect vertical alignment between description paragraphs and visual captures.
- **Readable HUD**: Swapped certain technical headlines to **Orbitron** (solid) to ensure they are readable at smaller sizes, while keeping **Wallpoet** (stencil) for the hero headers to preserve the "Cinematic" vibe.
- **Maintenance**: "Archived" the Workout Tracker pane to streamline the current Software offering while keeping the code accessible for a future toggle-on.

## 💡 Future Plans
- **Fiction Sector**: Build out the reading interface for stories.
- **Star Citizen Hub**: Dedicated landing page for SC fragments and logos.
- **Newsletter**: Finalize the sign-up HUD design.
