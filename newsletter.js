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
      <p>Get the latest updates on my writing, Star Citizen analysis, and more directly to your terminal.</p>
      <div style="margin-top: 2rem; text-align: center;">
        <a href="https://tripps-newsletter-618ab3.beehiiv.com/" target="_blank" class="cta-button primary">Initialize Subscription</a>
      </div>
    </section>
`;
app.appendChild(newsletterContent);

initFooter();
