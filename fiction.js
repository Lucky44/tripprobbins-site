import './style.css'
import { initCommonUI, initFooter } from './shared.js'

initCommonUI();

const app = document.querySelector('#app');
const fictionContent = document.createElement('main');
fictionContent.className = 'container';
fictionContent.innerHTML = `
    <section id="fiction" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.2s;">
      <div class="header-coords">LAT: 0xFD44 LONG: 0x00A1</div>
      <div class="bottom-corners"></div>
      <div class="mono-accent">DATABASE_ENTRY: LUCKY'S STARS</div>
      <h2>Citizens & Denizens</h2>
      <div class="featured-book">
        <div class="book-card-visual">
          <img src="/assets/LS-cover-10b-600.jpg" alt="Lucky's Stars Book Cover" id="book-cover-img" onerror="this.style.display='none'; this.parentElement.innerText='LUCKY\\'S STARS'; textShadow='0 0 10px var(--accent-glow)'">
        </div>
        <div class="book-info">
          <h3>Lucky's Stars (Book 1)</h3>
          <p><em>Lucky's Stars</em> is the first novel approved by Cloud Imperium Games for commercial release. It's the first book of the Citizens and Denizens trilogy. The sci-fi action adventure story follows three bounty-hunting friends struggling against long odds and mysterious foes in the Star Citizen universe.</p>
          <a href="https://a.co/d/gtQmt7a" target="_blank" class="cta-button">Available on Amazon</a>
        </div>
      </div>

      <div class="sci-divider"></div>

      <div class="mono-accent">DATABASE_ENTRY: LUCKY'S GHOSTS</div>
      <div class="featured-book" style="margin-top: 2rem;">
        <div class="book-card-visual">
          <img src="/assets/luckys-ghosts-cover-v2.jpg" alt="Lucky's Ghosts Book Cover" onerror="this.style.display='none'; this.parentElement.innerText='LUCKY\\'S GHOSTS'; textShadow='0 0 10px var(--accent-glow)'">
        </div>
        <div class="book-info">
          <h3>Lucky's Ghosts: (Book 2)</h3>
          <p>Book 2 of the trilogy picks up with Lucky, Salty and Zero relaxing and enjoying their new Starlancer TAC ship. But (of course) that can&rsquo;t last long. Soon they&rsquo;re tangled up with the Nine Tails pirate gang, the Otoni crime syndicate and the UEE Navy. That little data cube they retrieved in Book 1 had some serious code on it, code that led to the creation of some powerful AI. Oh, and there&rsquo;s lots of sex in Book 2, so that&rsquo;s a big selling point, right? (Just kidding. There&rsquo;s no sex in the text, but one of the crew does get laid.)</p>
          <a href="https://a.co/d/0ftshYQL" target="_blank" class="cta-button">Available on Amazon</a>
        </div>
      </div>
    </section>
`;
app.appendChild(fictionContent);

initFooter();
