# Personal Website - Session Notes

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
