import{i,o as r,a}from"./shared-CvNkAlsk.js";i();const o=document.querySelector("#app"),e=document.createElement("main");e.className="container";e.innerHTML=`
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
        
        <div style="display: flex; gap: 3rem; align-items: flex-start; margin-top: 1rem; justify-content: center; flex-wrap: wrap;">
            <div class="project-info" style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: var(--accent-color);">SC Component Tracker</h3>
                <p>A specialized tool for Star Citizen players to manage and track ship components across their fleet. It provides a detailed interface for auditing pilot weapons, turrets, shield generators, and other critical systems.</p>
                
                <ul style="margin: 1.5rem 0; padding-left: 1.5rem; color: var(--text-secondary); font-size: 0.9rem; list-style-type: '>> ';">
                    <li>Comprehensive ship-by-ship component database</li>
                    <li>Individual slot tracking for Pilot Weapons and Turrets</li>
                    <li>Support for Power Plants, Coolers, and Quantum Drives</li>
                    <li>Data persistence via local storage and export utilities</li>
                </ul>

                <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                    <a href="https://github.com/lucky44/SC-Component-Tracker" target="_blank" class="glass-link scifi-font" style="min-width: auto; padding: 0.75rem 1.5rem;">VIEW_SOURCE</a>
                    <a href="https://lucky44.github.io/SC-Component-Tracker/" target="_blank" class="cta-button" style="padding: 0.75rem 1.5rem; font-size: 0.8rem;">ACCESS_SYSTEM</a>
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

      <!-- Featured Project: Workout Tracker -->
      <div class="featured-article glass-panel corner-brackets" style="margin-top: 3rem; padding: 2rem;">
        <div class="bottom-corners"></div>
        <div class="mono-accent">- PROJECT_LOG: WORKOUT_TRACKER_V0.55 -</div>
        
        <div style="display: flex; gap: 3rem; align-items: flex-start; margin-top: 1rem; justify-content: center; flex-wrap: wrap;">
            <div class="project-info" style="flex: 1;">
                <h3 style="margin: 0 0 1rem 0; color: var(--accent-color);">Workout Tracker</h3>
                <p>A high-performance PWA (Progressive Web App) designed for athletes who need a fast, offline-capable interface to log activities. Built with Vite, vanilla JavaScript, and a custom CSS design system inspired by futuristic HUDs.</p>
                
                <ul style="margin: 1.5rem 0; padding-left: 1.5rem; color: var(--text-secondary); font-size: 0.9rem; list-style-type: '>> ';">
                    <li>Mobile-first responsive architecture</li>
                    <li>Offline-capable Service Worker integration</li>
                    <li>Sci-fi inspired custom UI/UX</li>
                    <li>Zero-dependency core logic for maximum speed</li>
                </ul>

                <div style="margin-top: 2rem; display: flex; gap: 1rem;">
                    <a href="https://github.com/tripp" target="_blank" class="glass-link scifi-font" style="min-width: auto; padding: 0.75rem 1.5rem;">VIEW_REPOSITORY</a>
                    <a href="#" class="cta-button" style="padding: 0.75rem 1.5rem; font-size: 0.8rem;">LAUNCH_APPLICATION</a>
                </div>
            </div>

            <div class="project-visual glass-panel" style="flex: 0 0 300px; padding: 1rem; background: rgba(0,0,0,0.4);">
                <div class="mono-accent" style="font-size: 0.6rem; margin-bottom: 0.5rem;">DATA_VISUALIZATION: MOBILE_VIEW</div>
                <div style="aspect-ratio: 9/16; background: var(--bg-color); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
                    <div style="text-align: center; z-index: 1;">
                        <div class="pulse" style="width: 40px; height: 40px; border: 2px solid var(--accent-color); border-radius: 50%; margin: 0 auto 1rem;"></div>
                        <div class="mono-accent" style="font-size: 0.7rem; color: var(--accent-color);">LOG_CAPTURE_ACTIVE</div>
                    </div>
                    <!-- Background aesthetic for the visual -->
                    <div style="position: absolute; inset: 0; opacity: 0.2; background-image: radial-gradient(circle at center, var(--accent-color) 0%, transparent 70%);"></div>
                </div>
            </div>
        </div>
      </div>

      <!-- General Skills / Stack -->
      <div class="glass-panel corner-brackets" style="margin-top: 4rem; padding: 2rem;">
        <div class="bottom-corners"></div>
        <div class="mono-accent">TECH_STACK: DEPLOYED_CAPABILITIES</div>
        <h3 style="margin: 1rem 0;">Technical Capabilities</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; margin-top: 2rem;">
            <div>
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">CORE_FOUNDATION</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">JavaScript (ES6+), HTML5, CSS3, Modern UI Architectures</p>
            </div>
            <div>
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">ENVIRONMENT_CONTROL</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">Vite, Git/GitHub, NPM, Node.js</p>
            </div>
            <div>
                <div class="mono-accent" style="color: var(--accent-color); margin-bottom: 0.5rem;">USER_EXPERIENCE</div>
                <p style="font-size: 0.9rem; opacity: 0.8;">Responsive Design, PWA Development, Performance Audit</p>
            </div>
        </div>
      </div>
      
    </div>
  </section>
`;o.appendChild(e);const t=document.getElementById("sct-visual-trigger");t&&(t.onclick=()=>{r(`
            <div class="modal-image-view" style="text-align: center;">
                <div class="mono-accent" style="margin-bottom: 2rem; opacity: 0.8;">ASSET_VIEW // SC_COMPONENT_TRACKER_V0.88</div>
                <img src="assets/SCT_v0_88.png" style="width: 100%; height: auto; border: 1px solid var(--border-color); box-shadow: 0 0 50px rgba(0,0,0,0.8);">
                <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                    <a href="assets/SCT_v0_88.png" target="_blank" class="glass-link uniform-width" style="text-decoration: none;">OPEN_FULL_RESOLUTION_ASSET</a>
                </div>
            </div>
        `,!0)});a();
