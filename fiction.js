import './style.css'
import { initCommonUI, initFooter, openModal, closeModal } from './shared.js'

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
          <img src="/assets/luckys-stars-cover.png" alt="Lucky's Stars Book Cover" id="book-cover-img" onerror="this.style.display='none'; this.parentElement.innerText='LUCKY\\'S STARS'; textShadow='0 0 10px var(--accent-glow)'">
        </div>
        <div class="book-info">
          <h3>Lucky's Stars (Book 1)</h3>
          <p><em>Lucky's Stars</em> is the first novel approved by Cloud Imperium Games for commercial release. It's the first book of the Citizens and Denizens trilogy. The sci-fi action adventure story follows three bounty-hunting friends struggling against long odds and mysterious foes in the Star Citizen universe.</p>
          <a href="https://a.co/d/gtQmt7a" target="_blank" class="cta-button">Available on Amazon</a>
        </div>
      </div>
      
      <div class="sci-divider"></div>

      <div class="sneak-peek">
        <div class="mono-accent">ACCESSING_DRAFT_FILES...</div>
        <h3 style="font-size: 2rem; margin-top: 1rem;">Sneak Peek: Lucky's Ghosts (Book 2)</h3>
        <p>I'm currently writing the second book of the trilogy. You can read a draft of the first three chapters here!</p>
        <div class="chapter-links" style="display: flex; gap: 1.5rem; margin-top: 2rem; flex-wrap: wrap;">
          <button class="glass-link chapter-trigger" data-chapter="1">INITIALIZE_READ: CH_01</button>
          <button class="glass-link chapter-trigger" data-chapter="2">INITIALIZE_READ: CH_02</button>
          <button class="glass-link chapter-trigger" data-chapter="3">INITIALIZE_READ: CH_03</button>
        </div>
      </div>
    </section>
`;
app.appendChild(fictionContent);

let chapters = null;

async function loadChapters() {
  try {
    const response = await fetch('/data/chapters.json');
    chapters = await response.json();
  } catch (error) {
    console.error('Failed to load chapters:', error);
  }
}

function openReader(chapterId) {
  if (!chapters) return;
  const chapter = chapters[chapterId];
  if (!chapter) return;

  const idNum = parseInt(chapterId);
  const hasNext = !!chapters[idNum + 1];
  const hasPrev = !!chapters[idNum - 1];

  const readerHtml = `
        <div class="reader-view">
            <div class="reader-scanline"></div>
            <div class="reader-metadata">
                <div>DOC_TYPE: SNEAK_PEEK // SOURCE: LUCKY_GHOSTS</div>
                <div>SECURE_TRANS_ID: RD_${chapterId.padStart(2, '0')}</div>
            </div>
            
            <div class="decryption-effect">
                <div class="reader-body" id="reader-scroll-target">
                    <h2 class="scifi-font" style="margin-bottom: 0.5rem; text-fill-color: initial; -webkit-text-fill-color: var(--accent-color);">${chapter.title}</h2>
                    <div class="mono-accent" style="margin-bottom: 2.5rem; opacity: 0.6;">SUB_TITLE: ${chapter.subtitle || 'UNNAMED_ENTRY'}</div>
                    ${chapter.content}
                </div>
            </div>

            <div class="reader-controls">
                ${hasPrev ? `<button class="glass-link reader-nav" data-target="${idNum - 1}" style="min-width: 150px;">&lt;&lt; PREV_CH</button>` : '<div></div>'}
                <button class="cta-button" onclick="const m = document.querySelector('.modal'); m.classList.remove('active');" style="padding: 0.6rem 2rem; font-size: 0.8rem;">CLOSE_DATA_LOG</button>
                ${hasNext ? `<button class="glass-link reader-nav" data-target="${idNum + 1}" style="min-width: 150px;">NEXT_CH &gt;&gt;</button>` : '<div></div>'}
            </div>
        </div>
    `;

  openModal(readerHtml, true);

  // Scroll to top of modal content
  const modalContent = document.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;

  // Attach navigation events
  document.querySelectorAll('.reader-nav').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const body = document.querySelector('.decryption-effect');
      body.style.opacity = '0';
      body.style.transform = 'translateY(10px)';
      body.style.transition = 'all 0.3s ease';

      setTimeout(() => {
        openReader(targetId);
      }, 300);
    });
  });
}

// Initialize triggers after loading
loadChapters().then(() => {
  document.querySelectorAll('.chapter-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const chapterId = trigger.getAttribute('data-chapter');
      openReader(chapterId);
    });
  });
});

initFooter();
