import './style.css'
import { initCommonUI, initFooter, typeWriter } from './shared.js'

initCommonUI();

const app = document.querySelector('#app');
const newsletterContent = document.createElement('main');
newsletterContent.className = 'container';
newsletterContent.innerHTML = `
    <section id="newsletter" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.2s;">
      <div class="header-coords">SIGNAL: 99.8% SYNC: LOCKED</div>
      <div class="bottom-corners"></div>
      <div class="mono-accent">COMMS_LINK: ENCRYPTED</div>
      <h2>Stay Connected</h2>
      <p style="text-align: center; max-width: 600px; margin: 0 auto;">If you'd like to get occasional updates on my writing - I promise not to spam you or give/sell anyone your info, sign up here.<br>You can unsubscribe below too.</p>
      
      <div class="form-group">
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
    </section>
`;
app.appendChild(newsletterContent);

const emailInput = document.getElementById('subscriber-email');
const statusText = document.getElementById('status-text');
const statusId = document.getElementById('status-id');
const submitBtn = document.getElementById('initialize-link');
const cancelBtn = document.getElementById('cancel-link');

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

  // HUD Submission Sequence
  submitBtn.innerText = 'SYNCING_WITH_NETWORK...';
  submitBtn.style.pointerEvents = 'none';
  submitBtn.style.opacity = '0.5';

  statusText.innerHTML = '<span class="status-indicator pulse"></span> LINKING_TO_COMMS_HUB...';

  // Aesthetic delay for the "HUD" feel
  await new Promise(r => setTimeout(r, 1500));

  statusText.innerHTML = '<span class="status-indicator pulse"></span> DECRYPTING_PROTOCOL...';
  await new Promise(r => setTimeout(r, 1000));

  // Redirect to Beehiiv for final confirmation
  // Since we don't have the API key, we redirect to the subscribe page
  // Most users will find this transition smooth if the local UI feels "part of the process"
  const beehiivUrl = `https://tripps-newsletter-618ab3.beehiiv.com/subscribe`;

  statusText.innerHTML = '<span class="status-indicator" style="background: var(--accent-color);"></span> REDIRECTING_FOR_FINAL_SYNC...';

  setTimeout(() => {
    window.location.href = beehiivUrl;
  }, 800);
});

initFooter();
