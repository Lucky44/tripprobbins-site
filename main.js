import { initCommonUI, initFooter, typeWriter, openModal } from './shared.js'

initCommonUI();

const app = document.querySelector('#app');
const homeContent = document.createElement('div');
homeContent.innerHTML = `
  <header class="hero-section">
    <div class="header-coords">X: 00.00 Y: 00.00</div>
    <div class="container animate-in" style="display: flex; flex-direction: column; align-items: center;">
      <div class="mono-accent">SYS_STATUS: ONLINE</div>
      <h1>Tripp Robbins Writing</h1>
      <p class="tagline"><span id="typewriter-text"></span></p>
    </div>
  </header>

  <main class="container">
    <div class="home-split-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 4rem; margin: 2.7rem 0; width: 100%;">
      
      <!-- Left Column: What's Current (Featured Book) -->
      <section class="current-sector glass-panel corner-brackets animate-in" style="min-height: 800px; display: flex; flex-direction: column;">
        <div class="header-coords">SECTOR: FEATURED_WORKS</div>
        <div class="bottom-corners"></div>
        <div class="mono-accent">LOG_STATUS: CURRENT_IMPACT</div>
        <h2 style="border: none; padding: 0;">What's Current</h2>
        
        <div class="featured-book-container" style="margin-top: 3rem; flex-grow: 1; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 2rem;">
          <div class="book-cover-frame" style="width: 100%; max-width: 214px; position: relative;">
            <div class="corner-brackets small"></div>
            <img src="assets/luckys-stars-cover.png" alt="Lucky's Stars Cover" style="width: 100%; border-radius: 4px; box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); display: block; image-rendering: -webkit-optimize-contrast;">
            <div class="header-coords" style="top: -1.5rem; right: 0;">ID: LS01_C_DEN</div>
          </div>

          <div class="book-details" style="max-width: 450px;">
            <div class="mono-accent" style="margin-bottom: 1rem;">PROJECT: CITIZENS_&_DENIZENS</div>
            <h3 class="scifi-font" style="font-size: 1.5rem; color: var(--accent-color); margin-bottom: 1.5rem;">Lucky's Stars</h3>
            <p style="font-size: 1.1rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 2rem;">
              <strong>LUCKY'S STARS</strong> is the first book in my science fiction adventure series, <em>Citizens and Denizens</em>. It's available now on Amazon. It was inspired by the computer game Star Citizen, from Cloud Imperium Games.
            </p>
            
            <a href="/fiction.html" class="cta-button primary" style="width: 100%; max-width: 300px;">Enter Sector</a>
            <p style="font-size: 0.7rem; margin-top: 1rem; opacity: 0.5;" class="mono-accent">REF: AMZN_INTEL_LINK</p>
          </div>
        </div>
      </section>

      <!-- Right Column: Musings -->
      <section class="musings-sector glass-panel corner-brackets animate-in" style="animation-delay: 0.2s;">
        <div class="header-coords">STREAM: LIVE_FEED</div>
        <div class="bottom-corners"></div>
        <div class="mono-accent">INPUT_SIGNAL: RECEIVING</div>
        <h2 style="border: none; padding: 0;">Musings</h2>
        
        <div id="musings-stream" class="musings-list" style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
          <div class="mono-accent pulse">SYNCHRONIZING_BUFFER...</div>
        </div>
      </section>
      
    </div>
  </main>
`;
app.appendChild(homeContent);

async function loadMusings() {
  const stream = document.getElementById('musings-stream');
  if (!stream) return;

  try {
    const response = await fetch('/data/musings.json');
    const data = await response.json();

    stream.innerHTML = data.map((entry, index) => {
      const showModal = !!entry.body;
      const linkLabel = showModal ? "LINK: ACCESS_DATA_LOG" : "LINK: ACCESS_ENTRY";
      const linkHref = showModal ? "#" : (entry.link || "#");

      return `
            <div class="musing-item animate-in" style="animation-delay: ${0.4 + (index * 0.1)}s; border-bottom: ${index === data.length - 1 ? 'none' : '1px solid rgba(6, 182, 212, 0.1)'}; padding-bottom: 1.5rem;">
                <div class="musing-header" style="display: flex; justify-content: space-between; align-items: baseline;">
                    <div class="mono-accent" style="font-size: 0.7rem;">${entry.date}</div>
                    <div class="musing-id" style="font-size: 0.6rem; opacity: 0.3;">${entry.id}</div>
                </div>
                <h4 class="scifi-font" style="margin: 0.5rem 0; color: var(--accent-color); font-size: 0.9rem; letter-spacing: 0.1em;">${entry.title}</h4>
                <p style="font-size: 0.85rem; margin: 0; line-height: 1.5; opacity: 0.8; color: var(--text-secondary);">${entry.summary}</p>
                <a href="${linkHref}" 
                   class="glass-link scifi-font musing-trigger" 
                   data-id="${entry.id}"
                   style="font-size: 0.6rem; padding: 0.4rem 0.8rem; margin-top: 1rem; display: inline-block; min-width: auto; width: auto; border-radius: 4px;">
                   ${linkLabel}
                </a>
            </div>
        `;
    }).join('');

    // Attach modal events
    stream.querySelectorAll('.musing-trigger').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        const id = trigger.getAttribute('data-id');
        const entry = data.find(d => d.id === id);

        if (entry && entry.body) {
          e.preventDefault();
          const modalHtml = `
            <div class="mono-accent" style="margin-bottom: 1rem;">DATA_LOG_ID: ${entry.id} // ${entry.date}</div>
            <h2 class="scifi-font" style="margin-bottom: 2rem;">${entry.title}</h2>
            <div class="musing-full-body" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-primary);">
                ${entry.body}
            </div>
            <div class="mono-accent" style="margin-top: 3rem; opacity: 0.5;">EOF_SIGNAL_TERMINATED</div>
          `;
          openModal(modalHtml);
        }
      });
    });

  } catch (error) {
    console.error('Error loading musings:', error);
    stream.innerHTML = '<div class="mono-accent" style="color: #ef4444;">SIGNAL_ERROR: FETCH_FAILED</div>';
  }
}

loadMusings();
typeWriter("Writer. Citizen of the Stars.", "typewriter-text");
initFooter();
