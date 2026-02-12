import './style.css'
import { initCommonUI, initFooter, openContactModal } from './shared.js'

initCommonUI();

const app = document.querySelector('#app');
const contactContent = document.createElement('main');
contactContent.className = 'container';
contactContent.innerHTML = `
    <div class="home-split-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 4rem; margin: 2.7rem 0; width: 100%;">
      
      <!-- Left Column: Contact Me Now -->
      <section id="direct-contact" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.2s; display: flex; flex-direction: column;">
        <div class="header-coords">PROTOCOL: DIRECT_UPLINK</div>
        <div class="bottom-corners"></div>
        <div class="mono-accent">INPUT_SIGNAL: AWAITING_ID</div>
        <h2 style="border: none; padding: 0;">Contact Me Now</h2>
        
        <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: center; text-align: center; margin-top: 4rem;">
          <p style="max-width: 450px; font-size: 1.1rem; line-height: 1.6; margin: 0 0 3rem 0; min-height: 4.8em; display: flex; align-items: center; justify-content: center;">
            If you have comments or questions about my writing, about Star Citizen, - or just want to say thanks for all the fish, you can send me an email here.
          </p>
          
          <button id="page-contact-trigger" class="cta-button primary" style="min-width: 300px; cursor: pointer;">INITIALIZE_COMMS</button>
          <p style="font-size: 0.7rem; opacity: 0.5; margin-top: 1rem;" class="mono-accent">REF: FORM_ENCRYPTION_ACTIVE</p>
        </div>
      </section>

      <!-- Right Column: Stay Connected -->
      <section id="newsletter" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.4s; display: flex; flex-direction: column;">
        <div class="header-coords">SIGNAL: 99.8% SYNC: LOCKED</div>
        <div class="bottom-corners"></div>
        <div class="mono-accent">COMMS_LINK: ENCRYPTED</div>
        <h2 style="border: none; padding: 0;">Stay Connected</h2>
        
        <div style="flex-grow: 1; display: flex; flex-direction: column; align-items: center; margin-top: 4rem;">
          <p style="text-align: center; max-width: 600px; margin: 0 auto 3rem auto; min-height: 4.8em; display: flex; align-items: center; justify-content: center;">
            If you would like to get occasional updates on my writing<br>(I promise not to spam you or give/sell anyone your info)<br>please sign up here.<br>You can unsubscribe below as well.
          </p>
          
          <div class="form-group" style="width: 100%; margin-top: 0;">
            <div class="hud-input-wrapper">
              <div class="mono-accent">USER_ID:</div>
              <input type="email" id="subscriber-email" class="hud-input" placeholder="ENTER EMAIL ADDRESS..." required spellcheck="false">
            </div>
            <div class="form-status">
              <div id="status-text"><span class="status-indicator"></span> STANDBY...</div>
              <div id="status-id">COORD_0x00FF</div>
            </div>
            
            <div style="margin-top: 3rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
              <button id="initialize-link" class="cta-button primary" style="min-width: 300px; cursor: pointer;">INITIALIZE_LINK</button>
              <button id="cancel-link" class="glass-link scifi-font" style="min-width: 300px; font-size: 0.7rem; opacity: 0.6;">UNSUBSCRIBE - DISSOLVE_LINK -</button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
`;
app.appendChild(contactContent);

const emailInput = document.getElementById('subscriber-email');
const statusText = document.getElementById('status-text');
const statusId = document.getElementById('status-id');
const submitBtn = document.getElementById('initialize-link');
const cancelBtn = document.getElementById('cancel-link');
const pageContactBtn = document.getElementById('page-contact-trigger');

// Contact Modal Trigger
pageContactBtn.addEventListener('click', () => {
  openContactModal();
});

// Unsubscribe Handler
cancelBtn.addEventListener('click', () => {
  statusText.innerHTML = '<span class="status-indicator" style="background: #f87171;"></span> TERMINATING_CONNECTION...';
  setTimeout(() => {
    window.location.href = 'https://tripps-newsletter-618ab3.beehiiv.com/unsubscribe';
  }, 800);
});

// Dynamic HUD status updates
emailInput.addEventListener('input', (e) => {
  if (e.target.value.includes('@')) {
    statusText.innerHTML = '<span class="status-indicator pulse"></span> VALID_FORMAT_DETECTED';
    statusId.innerText = 'SYNC_READY';
  } else if (e.target.value.length > 0) {
    statusText.innerHTML = '<span class="status-indicator" style="background: #facc15;"></span> AWAITING_COMPLETE_ENTRY...';
    statusId.innerText = 'COORD_LOGGING';
  } else {
    statusText.innerHTML = '<span class="status-indicator"></span> STANDBY...';
    statusId.innerText = 'COORD_0x00FF';
  }
});

submitBtn.addEventListener('click', async () => {
  const email = emailInput.value;
  if (!email || !email.includes('@')) {
    statusText.innerHTML = '<span class="status-indicator" style="background: #ef4444;"></span> ERROR: INVALID_IDENTITY';
    return;
  }

  submitBtn.innerText = 'SYNCING_WITH_NETWORK...';
  submitBtn.style.pointerEvents = 'none';
  submitBtn.style.opacity = '0.5';
  statusText.innerHTML = '<span class="status-indicator pulse"></span> LINKING_TO_COMMS_HUB...';

  await new Promise(r => setTimeout(r, 1500));

  statusText.innerHTML = '<span class="status-indicator pulse"></span> DECRYPTING_PROTOCOL...';
  await new Promise(r => setTimeout(r, 1000));

  const beehiivUrl = `https://tripps-newsletter-618ab3.beehiiv.com/subscribe`;
  statusText.innerHTML = '<span class="status-indicator" style="background: var(--accent-color);"></span> REDIRECTING_FOR_FINAL_SYNC...';

  setTimeout(() => {
    window.location.href = beehiivUrl;
  }, 800);
});

initFooter();
