import './style.css'
import { initCommonUI, initFooter } from './shared.js'

initCommonUI();

// ---------------------------------------------------------------------
// DATA
// Edit this array to add/update/remove line dances. Each row needs:
//   song      - song title (string)
//   dance     - dance title (string)
//   level     - short level abbreviation, e.g. 'Beg', 'Imp', 'Int', 'Adv' (string)
//   tutorial  - URL to a tutorial video (string, or '' if none yet)
//   demo      - URL to a demo video (string, or '' if none yet)
// ---------------------------------------------------------------------
const dances = [
  { song: 'Copperhead Road', dance: 'Copperhead Road', level: 'Int', tutorial: 'https://www.youtube.com/watch?v=example1', demo: 'https://www.youtube.com/watch?v=example2' },
  { song: 'Watermelon Crawl', dance: 'Watermelon Crawl', level: 'Beg', tutorial: 'https://www.youtube.com/watch?v=example3', demo: '' },
  { song: 'Boot Scootin\' Boogie', dance: 'Boot Scootin\' Boogie', level: 'H Imp', tutorial: '', demo: 'https://www.youtube.com/watch?v=example4' },
  { song: 'Cotton Eye Joe', dance: 'Cotton Eye Joe', level: 'Beg', tutorial: '', demo: '' },
];

// ---------------------------------------------------------------------
// STATE + RENDER
// ---------------------------------------------------------------------
let sortKey = 'song';
let sortDir = 1; // 1 = ascending, -1 = descending

function linkCell(url, label) {
  if (!url) return '<span class="ld-empty">&mdash;</span>';
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ld-link">${label}</a>`;
}

function renderRows() {
  const sorted = [...dances].sort((a, b) => {
    const av = a[sortKey].toLowerCase();
    const bv = b[sortKey].toLowerCase();
    if (av < bv) return -1 * sortDir;
    if (av > bv) return 1 * sortDir;
    return 0;
  });

  return sorted.map(d => `
    <tr>
      <td>${d.song}</td>
      <td>${d.dance}</td>
      <td class="ld-col-lvl">${d.level}</td>
      <td>${linkCell(d.demo, 'Demo')}</td>
      <td>${linkCell(d.tutorial, 'Tutorial')}</td>
    </tr>
  `).join('');
}

function updateSortIndicators() {
  document.querySelectorAll('.ld-table th[data-sort-key]').forEach(th => {
    const key = th.dataset.sortKey;
    th.classList.remove('sorted-asc', 'sorted-desc');
    if (key === sortKey) {
      th.classList.add(sortDir === 1 ? 'sorted-asc' : 'sorted-desc');
    }
  });
}

function renderTableBody() {
  const tbody = document.getElementById('ld-tbody');
  if (tbody) tbody.innerHTML = renderRows();
  updateSortIndicators();
}

// ---------------------------------------------------------------------
// PAGE MARKUP
// ---------------------------------------------------------------------
const app = document.querySelector('#app');
const content = document.createElement('main');
content.className = 'container';
content.innerHTML = `
  <section id="linedances" class="glass-panel corner-brackets animate-in" style="animation-delay: 0.2s;">
    <div class="header-coords">LAT: 0x2C19 LONG: 0x88F4</div>
    <div class="bottom-corners"></div>
    <div class="mono-accent" style="margin-bottom: 2rem;">INTEL_ENTRY: LINE_DANCE_ARCHIVE</div>

    <h2 style="border-left: 4px solid var(--accent-color); padding-left: 1.5rem; margin: 0 0 2.5rem; font-size: 2.5rem; line-height: 1.1; letter-spacing: 0.05em; text-transform: uppercase;">
      Line Dances
    </h2>

    <div class="ld-table-wrap">
      <table class="ld-table">
        <thead>
          <tr>
            <th data-sort-key="song">Song Title</th>
            <th data-sort-key="dance">Dance Title</th>
            <th data-sort-key="level" class="ld-col-lvl">LVL</th>
            <th>Dance Demos</th>
            <th>Tutorials</th>
          </tr>
        </thead>
        <tbody id="ld-tbody"></tbody>
      </table>
    </div>
  </section>
`;
app.appendChild(content);

renderTableBody();

document.querySelectorAll('.ld-table th[data-sort-key]').forEach(th => {
  th.addEventListener('click', () => {
    const key = th.dataset.sortKey;
    if (sortKey === key) {
      sortDir *= -1;
    } else {
      sortKey = key;
      sortDir = 1;
    }
    renderTableBody();
  });
});

initFooter();
