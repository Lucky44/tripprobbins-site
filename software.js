import './style.css'
import { initCommonUI, initFooter, openModal } from './shared.js'

initCommonUI();

const app = document.querySelector('#app');
const softwareContent = document.createElement('main');
softwareContent.className = 'container';
softwareContent.innerHTML = `
  <section id="software" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.2s;">
    <div class="header-coords">ID: 0x5046 TS: 2026.02</div>
    <div class="bottom-corners"></div>
    <div class="mono-accent">PROFILE_ENTRY: SOFTWARE</div>
    <h2>Digital Messing About</h2>

    <div class="content-body" style="margin-top: 2rem;">
      <p>I sometimes make resouces for Star Citizen (and other stuff) that I'm happy to share. I'll keep this section updated with some resources I've made and some links to my favorite stuff by others.</p>

      <!-- Featured Project: SC Component Tracker -->
      <div class="featured-article glass-panel corner-brackets" style="margin-top: 3rem; padding: 2rem;">
        <div class="bottom-corners"></div>
        <div class="mono-accent">- PROJECT_LOG: SC_COMPONENT_TRACKER -</div>
        
        <h3 style="margin: 1.5rem 0 1rem 0; color: var(--accent-color); font-size: 1.8rem;">Star Citizen Component Tracker</h3>
        
        <div style="display: flex; gap: 3rem; align-items: flex-start; justify-content: center; flex-wrap: wrap;">
            <div class="project-info" style="flex: 1;">
                <p>This tool is for Star Citizen players who want to have a local copy (even on a phone) of their ships, their current loadouts, and any extra components/weapons they have in storage. I designed it to help me keep track of loadouts on my 25+ ships and zillions of components while I try to optimize loadouts. -It's not for everyone, but I like it!</p>
                
                <ul style="margin: 1.5rem 0; padding-left: 1.5rem; color: var(--text-secondary); font-size: 0.9rem; list-style-type: '>> ';">
                    <li>All files stored on local device - no login needed</li>
                    <li>Ability to backup/share/import your data</li>
                    <li>Note: you must enter your data; no pulling from game</li>
                    <li>Ability to search all ships and storage for components</li>
                </ul>

                <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.8rem; align-items: flex-start;">
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <a href="https://lucky44.github.io/SC-Component-Tracker/" target="_blank" class="cta-button scifi-font" style="padding: 0.75rem 1.5rem; min-width: 160px; display: inline-flex; align-items: center; justify-content: center; font-size: 1rem;">TRY IT!</a>
                        <a href="https://github.com/lucky44/SC-Component-Tracker" target="_blank" class="glass-link scifi-font" style="min-width: 160px; padding: 0.75rem 1.5rem; display: inline-flex; align-items: center; justify-content: center; font-size: 1rem;">On Github</a>
                    </div>
                    <a href="https://docs.google.com/spreadsheets/d/1y5cyht4vvhUgfY9_2TyoJmUt8LUPgWj99CDHuAkYp4I/edit?usp=sharing" target="_blank" class="mono-accent scifi-font" style="text-decoration: none; font-size: 1rem; color: #fff;">
                        TOP COMPONENTS SPREADSHEET
                    </a>
                </div>
            </div>

            <div class="project-visual glass-panel" style="flex: 0 0 300px; padding: 1rem; background: rgba(0,0,0,0.4); cursor: zoom-in;" id="sct-visual-trigger">
                <div class="mono-accent" style="font-size: 0.6rem; margin-bottom: 0.5rem;">SC_DATA_STREAM: SYSTEM_CAPTURE_v0.88</div>
                <div style="background: var(--bg-color); border: 1px solid var(--border-color); position: relative; overflow: hidden; display: flex;">
                    <img src="assets/SCT_v0_88.png" alt="SC Component Tracker v0.88 Interface" style="width: 100%; height: auto; display: block;">
                    <!-- Background grid visual layer -->
                    <div style="position: absolute; inset: 0; opacity: 0.1; background-image: linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px); background-size: 20px 20px; pointer-events: none;"></div>
                </div>
            </div>
        </div>
      </div>

      <!-- Featured Project: Workout Tracker (ARCHIVED)
      <div class="featured-article glass-panel corner-brackets" style="margin-top: 3rem; padding: 2rem;">
        <div class="bottom-corners"></div>
        <div class="mono-accent">- PROJECT_LOG: WORKOUT_TRACKER_V0.55 -</div>
        
        <h3 style="margin: 1.5rem 0 1rem 0; color: var(--accent-color); font-size: 1.8rem;">Workout Tracker</h3>
        
        <div style="display: flex; gap: 3rem; align-items: flex-start; justify-content: center; flex-wrap: wrap;">
            <div class="project-info" style="flex: 1;">
                <p>This simple PWA (Progressive Web App) is just a way to list activities, their desired frequencies, and then track when you do them. I am using it to track my daily stretcing and exercises. So I can create an activity, give it a name, the number of reps and sets I want to do, then track when I do it. It's very basic, there are no bells or whistles!</p>
                
                <ul style="margin: 1.5rem 0; padding-left: 1.5rem; color: var(--text-secondary); font-size: 0.9rem; list-style-type: '>> ';">
                    <li>Mobile-first responsive architecture</li>
                    <li>Offline-capable Service Worker integration</li>
                    <li>Sci-fi inspired custom UI/UX</li>
                    <li>Zero-dependency core logic for maximum speed</li>
                </ul>

                <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                    <a href="https://Lucky44.github.io/Workout-Tracker/" target="_blank" class="cta-button" style="padding: 0.75rem 1.5rem; font-size: 0.8rem;">LAUNCH_APPLICATION</a>
                    <a href="https://github.com/Lucky44/Workout-Tracker" target="_blank" class="glass-link scifi-font" style="min-width: auto; padding: 0.75rem 1.5rem;">ON GITHUB</a>
                </div>
            </div>

            <div class="project-visual glass-panel" style="flex: 0 0 300px; padding: 1rem; background: rgba(0,0,0,0.4); cursor: zoom-in;" id="wt-visual-trigger">
                <div class="mono-accent" style="font-size: 0.6rem; margin-bottom: 0.5rem;">DATA_VISUALIZATION: MOBILE_VIEW_LOG</div>
                <div style="background: var(--bg-color); border: 1px solid var(--border-color); position: relative; overflow: hidden; display: flex;">
                    <img src="assets/WT_capture.png" alt="Workout Tracker Activity View" style="width: 100%; height: auto; display: block;">
                    <div style="position: absolute; inset: 0; opacity: 0.2; background-image: radial-gradient(circle at center, var(--accent-color) 0%, transparent 70%); pointer-events: none;"></div>
                </div>
            </div>
        </div>
      </div>
      -->

      <!-- Functional Assets: Web Links -->
      <div class="glass-panel corner-brackets" style="margin-top: 4rem; padding: 2rem;">
        <div class="bottom-corners"></div>
        <div class="mono-accent">FUNCTIONAL_ASSETS: WEB_LINKS</div>
        <h3 style="margin: 1rem 0; font-family: var(--font-scifi); font-size: 1.5rem; letter-spacing: 0.1em;">A FEW HANDY WEBSITES FOR STAR CITIZEN</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_01</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://www.erkul.games/" target="_blank" style="color: var(--text-primary); text-decoration: none;">Erkul.games</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Excellent data on ships, components, weapons, etc.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_02</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://spviewer.eu/" target="_blank" style="color: var(--text-primary); text-decoration: none;">SC Ships Performance Viewer</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Also excellent data on ships, components, weapons, etc.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_03</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://sc-trade.tools" target="_blank" style="color: var(--text-primary); text-decoration: none;">SC Trade Tools</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Great site for data on trade, commodities, routes and shops.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_04</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://uexcorp.space/" target="_blank" style="color: var(--text-primary); text-decoration: none;">UEXcorp.space</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Nice info about mining, trading and prices.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_05</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://finder.cstone.space/" target="_blank" style="color: var(--text-primary); text-decoration: none;">Cornerstone Universal Item Finder</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Where to find personal gear items and components.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_06</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://regolith.rocks/" target="_blank" style="color: var(--text-primary); text-decoration: none;">Regolith.rocks</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Great tools for mining solo or in groups.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_07</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://verseguide.com/" target="_blank" style="color: var(--text-primary); text-decoration: none;">VerseGuide</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Nifty site for locations, times of day, how to find places, etc.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_08</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://fleetyards.net/" target="_blank" style="color: var(--text-primary); text-decoration: none;">Fleetyards.net</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">Visualize your fleet! Very cool.</p>
            </div>
            <div class="musing-item" style="padding: 1rem; border-left: 2px solid var(--accent-color); background: rgba(255,255,255,0.03);">
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">RESOURCE_09</div>
                <h4 style="margin: 0 0 0.5rem 0; font-family: var(--font-scifi);"><a href="https://sc-cargo.space/" target="_blank" style="color: var(--text-primary); text-decoration: none;">SC-Cargo.space</a></h4>
                <p style="font-size: 0.9rem; opacity: 0.8; margin: 0;">For the anal-retentive cargo planner!</p>
            </div>
        </div>
      </div>
      
    </div>
  </section>
`;
app.appendChild(softwareContent);

const sctTrigger = document.getElementById('sct-visual-trigger');
if (sctTrigger) {
    sctTrigger.onclick = () => {
        openModal(`
            <div class="modal-image-view" style="text-align: center;">
                <div class="mono-accent" style="margin-bottom: 2rem; opacity: 0.8;">ASSET_VIEW // SC_COMPONENT_TRACKER_V0.88</div>
                <img src="assets/SCT_v0_88.png" style="width: 100%; height: auto; border: 1px solid var(--border-color); box-shadow: 0 0 50px rgba(0,0,0,0.8);">
                <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                    <a href="assets/SCT_v0_88.png" target="_blank" class="glass-link uniform-width" style="text-decoration: none;">OPEN_FULL_RESOLUTION_ASSET</a>
                </div>
            </div>
        `, true);
    };
}

/* ARCHIVED: WT Modal Trigger
const wtTrigger = document.getElementById('wt-visual-trigger');
if (wtTrigger) {
    wtTrigger.onclick = () => {
        openModal(`
            <div class="modal-image-view" style="text-align: center;">
                <div class="mono-accent" style="margin-bottom: 2rem; opacity: 0.8;">ASSET_VIEW // WORKOUT_TRACKER_UI_v0.55</div>
                <img src="assets/WT_capture.png" style="width: 100%; height: auto; border: 1px solid var(--border-color); box-shadow: 0 0 50px rgba(0,0,0,0.8);">
                <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                    <a href="assets/WT_capture.png" target="_blank" class="glass-link uniform-width" style="text-decoration: none;">OPEN_FULL_RESOLUTION_ASSET</a>
                </div>
            </div>
        `, true);
    };
}
*/

initFooter();
