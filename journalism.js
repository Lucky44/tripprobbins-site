import './style.css'
import { initCommonUI, initFooter, openModal } from './shared.js'

initCommonUI();

const app = document.querySelector('#app');
const journalismContent = document.createElement('main');
journalismContent.className = 'container';
journalismContent.innerHTML = `
    <section id="journalism" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.2s;">
      <div class="header-coords">ID: 0xDE7A TS: 2026.02</div>
      <div class="bottom-corners"></div>
      <div class="mono-accent">PROFILE_ENTRY: CAREER_TRACK</div>
      <h2>Journalism & Media</h2>
      
      <div class="content-body" style="margin-top: 2rem;">
        <p>My first career path was in journalism, then I fell in love with teaching high school students. Now I have the best of both worlds, teaching journalism to teens. I also do some writing on the side now and then.</p>
        
        <!-- Half Moon Bay Magazine -->
        <div class="featured-article glass-panel corner-brackets" style="margin-top: 3rem; padding: 2rem;">
          <div class="bottom-corners"></div>
          <div class="mono-accent">- Archive_2020: Half_Moon_Bay_Magazine -</div>
          <h3 style="margin: 1rem 0;">Coyotes on the Coast</h3>
          <p>This is an article I wrote in 2020 for Half Moon Bay Magazine. It explores the delicate balance between urban expansion and local wildlife.</p>
          
          <div class="magazine-spreads" style="display: flex; flex-direction: column; gap: 3rem; margin-top: 2rem;">
            <div class="spread-item glass-panel" style="padding: 1rem;">
                <div class="mono-accent" style="margin-bottom: 0.5rem; font-size: 0.7rem;">- MAKING_PEACE_WITH_COYOTES_1-2 -</div>
                <img src="/assets/coyote-spread-1.jpg" alt="Coyotes on the Coast Spread 1" style="width: 100%; height: auto; border: 1px solid var(--border-color);">
            </div>
            <div class="spread-item glass-panel" style="padding: 1rem;">
                <div class="mono-accent" style="margin-bottom: 0.5rem; font-size: 0.7rem;">- MAKING_PEACE_WITH_COYOTES_3-4 -</div>
                <img src="/assets/coyote-spread-2.jpg" alt="Coyotes on the Coast Spread 2" style="width: 100%; height: auto; border: 1px solid var(--border-color);">
            </div>
            <div class="spread-item glass-panel" style="padding: 1rem;">
                <div class="mono-accent" style="margin-bottom: 0.5rem; font-size: 0.7rem;">- MAKING_PEACE_WITH_COYOTES_5-6 -</div>
                <img src="/assets/coyote-spread-3.jpg" alt="Coyotes on the Coast Spread 3" style="width: 100%; height: auto; border: 1px solid var(--border-color);">
            </div>
            <div class="spread-item glass-panel" style="padding: 1rem;">
                <div class="mono-accent" style="margin-bottom: 0.5rem; font-size: 0.7rem;">- MAKING_PEACE_WITH_COYOTES_7-8 -</div>
                <img src="/assets/coyote-spread-4.jpg" alt="Coyotes on the Coast Spread 4" style="width: 100%; height: auto; border: 1px solid var(--border-color);">
            </div>
          </div>
        </div>

        <!-- Coastside Magazine -->
        <div class="featured-article glass-panel corner-brackets" style="margin-top: 3rem; padding: 2rem;">
          <div class="bottom-corners"></div>
          <div class="mono-accent">- Archive_2021: Coastside_Magazine -</div>
          <h3 style="margin: 1rem 0;">Coastal Perspectives</h3>
          <p>Feature article for Coastside Magazine from 2021, focusing on local artisans and the maritime history of the region.</p>
          
          <div class="magazine-spreads" style="display: flex; flex-direction: column; gap: 3rem; margin-top: 2rem;">
            <div class="spread-item glass-panel" style="padding: 1rem;">
                <div class="mono-accent" style="margin-bottom: 0.5rem; font-size: 0.7rem;">- STEADY_AS_SHE_GOES_1-2 -</div>
                <img src="/assets/Cybell_Story_p1.jpg" alt="Coastal Perspectives Page 1" style="width: 100%; height: auto; border: 1px solid var(--border-color);">
            </div>
            <div class="spread-item glass-panel" style="padding: 1rem;">
                <div class="mono-accent" style="margin-bottom: 0.5rem; font-size: 0.7rem;">- STEADY_AS_SHE_GOES_3-4 -</div>
                <img src="/assets/Cybelle_story_p2.jpg" alt="Coastal Perspectives Page 2" style="width: 100%; height: auto; border: 1px solid var(--border-color);">
            </div>
          </div>
        </div>
      </div>
    </section>
`;

app.appendChild(journalismContent);

// Setup Spread Click Handlers for Full-Size Viewing
document.querySelectorAll('.spread-item').forEach(item => {
    item.style.cursor = 'zoom-in';
    item.onclick = () => {
        const img = item.querySelector('img');
        if (img) {
            openModal(`
                <div class="modal-image-view" style="text-align: center;">
                    <div class="mono-accent" style="margin-bottom: 2rem; opacity: 0.8;">ASSET_VIEW // ${img.alt}</div>
                    <img src="${img.src}" style="width: 100%; height: auto; border: 1px solid var(--border-color); box-shadow: 0 0 50px rgba(0,0,0,0.8);">
                    <div style="margin-top: 2rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                        <a href="${img.src}" target="_blank" class="glass-link uniform-width" style="text-decoration: none;">OPEN_FULL_RESOLUTION_ASSET</a>
                        <p style="margin-top: 1rem; font-size: 0.75rem; opacity: 0.5;" class="mono-accent">Click outside or 'X' to close database entry.</p>
                    </div>
                </div>
            `, true);
        }
    };
});

initFooter();
