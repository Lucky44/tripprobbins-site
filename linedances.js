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
  { song: "3 Tequilla Floor", dance: "3 Tequilla Floor", level: "Int", tutorial: "https://www.youtube.com/watch?v=m_0tZkxwiwA", demo: "https://youtu.be/RR7cP7-xAP4?si=L5fNUjbpZxRLjOMe" },
  { song: "3 To Tango", dance: "3 to Tango", level: "Int", tutorial: "https://www.youtube.com/watch?v=mNcFWHH2IyY", demo: "https://youtu.be/18MW-GqGXJ8?si=qulNgFnodXUrHxHx" },
  { song: "Tipsy", dance: "A Bar Song", level: "Beg", tutorial: "https://youtu.be/CLkqWNXJNQM?si=cy0GpfkP2vJ0FwoO", demo: "https://www.youtube.com/watch?v=m_0tZkxwiwA" },
  { song: "Can't Keep Up", dance: "Alligator Smile", level: "Beg", tutorial: "https://www.youtube.com/watch?v=to72YYlEcAQ&pp=0gcJCZkLAYcqIYzv", demo: "https://www.youtube.com/watch?v=LkZfZKLZSQk" },
  { song: "American Kids", dance: "American Kids", level: "Int", tutorial: "https://www.youtube.com/watch?v=ipGQrVhOXGA", demo: "https://www.youtube.com/watch?v=gscYyXoQDWM" },
  { song: "Angelina", dance: "Angelina", level: "Imp", tutorial: "https://www.youtube.com/watch?v=C2apVmgXQGk&pp=ygUTTGluZSBEYW5jZSBBbmdlbGluYQ%3D%3D", demo: "https://www.youtube.com/watch?v=kqEhgq2GZZs" },
  { song: "Me Too", dance: "Asking Questions", level: "Imp", tutorial: "https://www.youtube.com/watch?v=D8lY59xS-n8", demo: "https://www.youtube.com/watch?v=7iKQ1L7lbv0" },
  { song: "Austin", dance: "Austin", level: "Beg", tutorial: "https://youtu.be/mCXCq7tkn5g?si=R9v_cp3jkuHy85na", demo: "https://youtu.be/Yr4s5df_Xvc?si=BGU_h05YkriFERW3" },
  { song: "Baby Likes to Rock It", dance: "Baby Likes to Rock It", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=ykvbkU542Uw", demo: "https://www.youtube.com/watch?v=AOxnzL6ea0w" },
  { song: "Be Her", dance: "Hurts So Bad", level: "Imp", tutorial: "https://www.youtube.com/watch?v=GJoSc6DBxnA", demo: "https://www.youtube.com/watch?v=Xs3QFvFdYzU" },
  { song: "Big Blue Note", dance: "Big Blue Note", level: "Beg", tutorial: "https://www.youtube.com/watch?v=lWmscppjZJ4", demo: "https://www.youtube.com/watch?v=lWmscppjZJ4" },
  { song: "Boot Scootin Boogie", dance: "Boot Scootin' Boogie", level: "Beg", tutorial: "https://www.youtube.com/watch?v=bfqaT0hnZdA&pp=ygUcYm9vdCBzY29vdGluIGJvb2dpZSB0dXRvcmlhbNIHCQmZCwGHKiGM7w%3D%3D", demo: "https://www.youtube.com/watch?v=sOa1cFM5VTE&pp=ygUcYm9vdCBzY29vdGluIGJvb2dpZSB0dXRvcmlhbNIHCQmZCwGHKiGM7w%3D%3D" },
  { song: "Boots On Bars", dance: "Boots on Bars", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=Vj43iWJmV_8&pp=ygUWYm9vdHMgb24gYmFycyB0dXRvcmlhbA%3D%3D", demo: "https://www.youtube.com/watch?v=mrXG-jTdV1c&pp=ygUSYm9vdHMgb24gYmFycyBkZW1v" },
  { song: "Boots on the Ground", dance: "Boots on the Ground", level: "Beg", tutorial: "https://www.youtube.com/watch?v=-Tyn50VSd4s", demo: "https://www.youtube.com/watch?v=AgtI3-r9prE" },
  { song: "The Booze Cruise", dance: "Booze Cruise", level: "Int", tutorial: "https://www.youtube.com/watch?v=lavatjcf_CY", demo: "https://www.youtube.com/watch?v=jMQV_TDAcKA" },
  { song: "Broke", dance: "Broke", level: "Beg", tutorial: "https://www.youtube.com/watch?v=EOe8GaUJMUk", demo: "https://www.youtube.com/watch?v=YIWC8TexxEo&pp=ygUUQnJva2UgZGFuY2UgdHV0b3JpYWw%3D" },
  { song: "Brunette", dance: "Brown Eyed 5 5", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=bJpzrBC2dV0&pp=ygUXQnJ1bmV0dGUgZGFuY2UgdHV0b3JpYWw%3D", demo: "https://www.youtube.com/watch?v=Am2UgDkhirk" },
  { song: "Got A Feelin'", dance: "Bullfrog on a Log", level: "Beg", tutorial: "https://www.youtube.com/watch?v=a5MJjdWSXpg", demo: "https://www.youtube.com/watch?v=ivOvtm-79f8" },
  { song: "La Mordidita", dance: "Cha Cha Caliente", level: "Int", tutorial: "https://www.youtube.com/watch?v=_vhqaUfm9Is&pp=ygUkY2hhIGNoYSBjYWxpZW50ZSBsaW5lIGRhbmNlIHR1dG9yaWFs", demo: "https://www.youtube.com/watch?v=5SCsifMgcTc&pp=ygUgY2hhIGNoYSBjYWxpZW50ZSBsaW5lIGRhbmNlIGRlbW_SBwkJmQsBhyohjO8%3D" },
  { song: "U Gurl", dance: "Cherry Bottom Boom", level: "Int", tutorial: "https://www.youtube.com/watch?v=wvWFRLt7OSc&pp=ygUmQ2hlcnJ5IEJvdHRvbSBCb29tIGxpbmUgZGFuY2UgdHV0b3JpYWw%3D", demo: "https://www.youtube.com/watch?v=yMiv9kbzuuo" },
  { song: "", dance: "Choosin' Texas", level: "Beg", tutorial: "https://www.youtube.com/watch?v=zojkXBM2_iw", demo: "https://www.youtube.com/watch?v=yNGd8EEyvlQ" },
  { song: "Copperhead Road", dance: "Copperhead Road", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Bthvi4w0dgU", demo: "https://www.youtube.com/watch?v=0LWfnJyZgP0&pp=0gcJCZkLAYcqIYzv" },
  { song: "Country Boy", dance: "Country Boy", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Z1D433q_BUY", demo: "https://www.youtube.com/watch?v=WQ1LHeC2DqQ" },
  { song: "Country Girl (Shake It For Me)", dance: "Country Girl Shake", level: "Int", tutorial: "https://www.youtube.com/watch?v=zb3XC4RnYbk", demo: "https://youtu.be/W_7VpPtdYhc?si=s393_b1S0TO7MWpO" },
  { song: "Cowboi Boogie", dance: "Cowboi Boogie", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Bfif-QiJvAU", demo: "https://www.youtube.com/watch?v=iz31ZAdwt5k" },
  { song: "Cowboy Up", dance: "Cowboy Up", level: "Beg", tutorial: "https://www.youtube.com/watch?v=U2qEShA-NQA", demo: "https://www.youtube.com/watch?v=Ae-R-HANmuo" },
  { song: "Cowgirl", dance: "Cowgirl", level: "Beg", tutorial: "https://www.youtube.com/watch?v=i0uFtrtZulk", demo: "https://www.youtube.com/watch?v=m0VecvBJHzg&pp=ygUWY293Z2lybCBkYW5jZSB0dXRvcmlhbA%3D%3D" },
  { song: "Crank It Up", dance: "Goin' Ham", level: "Beg", tutorial: "https://www.youtube.com/watch?v=ovQSLv_LcZA", demo: "https://www.youtube.com/watch?v=zBQqXiaa0hc" },
  { song: "Dirt on My Boots", dance: "Dirt on My Boots", level: "Beg", tutorial: "https://www.youtube.com/watch?v=VO--Y45Sn9w", demo: "https://www.instagram.com/reels/DGWOz6fS_z_/" },
  { song: "Bring Down The House", dance: "Dizzy", level: "Int", tutorial: "https://www.youtube.com/watch?v=FKRrL5ItyuY", demo: "https://www.youtube.com/watch?v=PD-IL8p4T-8" },
  { song: "Do Si Do", dance: "Do Si Dough", level: "Int", tutorial: "https://www.youtube.com/watch?v=i1NspFmxQnM", demo: "https://www.youtube.com/watch?v=QZi5Ze7drIg" },
  { song: "Bad Habits", dance: "Easy Tonight", level: "Int", tutorial: "https://www.youtube.com/watch?v=K_N8EDJnCE0&pp=ygUeYmFkIGhhYml0cyBsaW5lIGRhbmNlIHR1dG9yaWFs", demo: "https://www.youtube.com/watch?v=yO56z2xDxI8" },
  { song: "Fireball", dance: "Fireball", level: "Beg", tutorial: "https://www.youtube.com/watch?v=h4KlN0hexQw&pp=0gcJCZkLAYcqIYzv", demo: "https://www.youtube.com/watch?v=0xNDiVM7_2s" },
  { song: "Fishin in the Dark", dance: "Fishin in the Dark", level: "E Imp", tutorial: "https://youtu.be/_twN0QvnTTo?si=_JQBhQcMIo_WycBQ", demo: "https://www.instagram.com/reels/DGnwCqyp0GQ/" },
  { song: "Fool", dance: "Fool 4 You", level: "Imp", tutorial: "https://www.youtube.com/watch?v=rxyee-LLQG4", demo: "https://www.youtube.com/watch?v=czCN1KJ4opI" },
  { song: "Good Directions", dance: "Good Directions", level: "Beg", tutorial: "", demo: "" },
  { song: "Good Time", dance: "Good Time", level: "Beg", tutorial: "https://youtu.be/_GT9-AcfQPY?si=ZbF_hk1A_yTUTrrY", demo: "https://youtu.be/8kWAJjX28_4?si=cC0HkVVc4qFm5d5-" },
  { song: "Good to Go", dance: "We're Good To Go", level: "Beg", tutorial: "https://www.youtube.com/watch?v=QDK6H2xoDmI", demo: "https://www.youtube.com/watch?v=zBgfA6M1d2k" },
  { song: "", dance: "Groovy Love", level: "", tutorial: "https://www.youtube.com/watch?v=rMsrWKfKFUU", demo: "https://www.youtube.com/watch?v=wQV46VZrVwI" },
  { song: "Half Moon Bay", dance: "Half Moon Bay", level: "H Beg", tutorial: "", demo: "https://www.youtube.com/watch?v=W2bh1zVMbT4" },
  { song: "", dance: "Heel Toe Rodeo", level: "Imp", tutorial: "https://www.youtube.com/watch?v=eZNtZHKa9E0", demo: "https://www.youtube.com/watch?v=kP2lL9Ho_TM" },
  { song: "Hicktown", dance: "Hicktown", level: "Beg", tutorial: "", demo: "https://www.instagram.com/p/DGeyjDUxP6K/" },
  { song: "High Class", dance: "We High Class", level: "Int", tutorial: "https://www.youtube.com/watch?v=L6CZq6CpIGQ", demo: "https://www.youtube.com/watch?v=LzRZcg7YxRo" },
  { song: "Hoedown", dance: "Hoedown", level: "Beg", tutorial: "https://www.youtube.com/watch?v=2jd53zoiKkw&pp=ygUbaG9lZG93biBsaW5lIGRhbmNlIHR1dG9yaWFs", demo: "https://www.youtube.com/watch?v=k4GQfqtAu5k&pp=ygUbaG9lZG93biBsaW5lIGRhbmNlIHR1dG9yaWFs" },
  { song: "I See Country", dance: "Honky Tonk Way", level: "Int", tutorial: "https://youtu.be/KMItGKCWkH4?si=Xz7WsGgfz_U2pteJ", demo: "https://www.youtube.com/watch?v=Ie3H31bWzlU" },
  { song: "Humble", dance: "Always Humble", level: "Beg", tutorial: "https://www.youtube.com/watch?v=HmoDeGjTrrI&pp=ygUaaHVtYmxlIGxpbmUgZGFuY2UgdHV0b3JpYWw%3D", demo: "https://www.youtube.com/watch?v=pPPnQhj4BHQ" },
  { song: "I Was on a Boat That Day", dance: "I Was on a Boat", level: "Beg", tutorial: "https://www.youtube.com/watch?v=LzoBPO3knp4", demo: "https://www.youtube.com/watch?v=ltAHZF0wQoc&pp=ygUjSSB3YXMgb24gYSBib2F0IGxpbmUgZGFuY2UgdHV0b3JpYWw%3D" },
  { song: "Infectious", dance: "Infectious", level: "H Int", tutorial: "https://youtu.be/Rzyp2iFXEag?si=Bq78RYq9kTKL4RCQ", demo: "https://youtu.be/NlQdEeE7iFI?si=aDT6xMA4K1vcf3UN" },
  { song: "Kerosene", dance: "Kerosene", level: "Beg", tutorial: "https://www.youtube.com/watch?v=ngS2SzQ5ZEc&pp=ygUca2Vyb3NlbmUgbGluZSBkYW5jZSB0dXRvcmlhbA%3D%3D", demo: "https://www.youtube.com/watch?v=6dEWKuL8jrg" },
  { song: "Knockin' Boots", dance: "Knockin' Boots", level: "Beg", tutorial: "https://www.youtube.com/watch?v=xOHX5n4vSRM", demo: "https://www.youtube.com/watch?v=VqfN7Xy_Fhc" },
  { song: "Let's Do Da Dance", dance: "Let's Do Da Dance", level: "Imp", tutorial: "https://www.youtube.com/watch?app=desktop&v=0dPkcfl52IA", demo: "https://www.youtube.com/watch?app=desktop&v=0dPkcfl52IA" },
  { song: "Liar", dance: "Liar", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=WWIKwDeNQ14", demo: "https://www.youtube.com/watch?v=sL-t7EoIVwQ" },
  { song: "Lasso", dance: "Like a Lasso", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=zpoHBcDrGps", demo: "https://www.youtube.com/watch?v=AyL0JA74yYE" },
  { song: "Lil Bit", dance: "Lil Bit", level: "H Imp", tutorial: "https://www.youtube.com/watch?v=BcZsp7-Ykr4", demo: "https://www.youtube.com/watch?v=HQwZF6BPXpU" },
  { song: "Love Button", dance: "Love Button", level: "Beg", tutorial: "https://www.youtube.com/watch?v=t9jmpINKfvU&pp=ygUfTGluZSBEYW5jZSBMb3ZlIEJ1dHRvbiB0dXRvcmlhbA%3D%3D", demo: "https://www.youtube.com/watch?v=hQTgJ3Fc7j8&pp=ygUfTGluZSBEYW5jZSBMb3ZlIEJ1dHRvbiB0dXRvcmlhbA%3D%3D" },
  { song: "Love Potion 666", dance: "Love Potion 666", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Kc64e7-U3v0", demo: "https://www.youtube.com/watch?v=sOUNlH8cKnc" },
  { song: "Miles On It", dance: "Miles On It", level: "Beg", tutorial: "https://www.youtube.com/watch?v=axPmuexZDBw", demo: "https://www.youtube.com/watch?v=3ELBDK7TiF8" },
  { song: "Mr. Lonely", dance: "Mr. Lonely", level: "Beg", tutorial: "https://www.youtube.com/watch?v=q8XTktyaNyI", demo: "https://www.youtube.com/watch?v=tCzFI-4MuP8" },
  { song: "", dance: "One More Silver Dollar", level: "", tutorial: "", demo: "" },
  { song: "Damn I Love Miami", dance: "Pieces to the Puzzle", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Ready For It", level: "", tutorial: "", demo: "" },
  { song: "Merry Go Round", dance: "Redneck Angel", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Rocket to the Sun", level: "", tutorial: "", demo: "" },
  { song: "", dance: "She Got My Head Spinnin'", level: "", tutorial: "", demo: "" },
  { song: "Natural", dance: "She's a Natural", level: "Beg", tutorial: "", demo: "" },
  { song: "", dance: "Shimmer", level: "Beg", tutorial: "https://youtu.be/aKz8I_reYDo?si=USnLhbfsow7sGkFD", demo: "https://youtu.be/aKz8I_reYDo?si=USnLhbfsow7sGkFD" },
  { song: "Shivers", dance: "Gives Me Shivers", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=6X0d0tmt4E0&pp=ygUbU2hpdmVycyBsaW5lIGRhbmNlIHR1dG9yaWFs0gcJCZkLAYcqIYzv", demo: "https://www.youtube.com/watch?v=_z-l8u6K95c" },
  { song: "Suit and Tie", dance: "Sold My Soul", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Sold My Soul", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Steal My Thunder", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Stetson", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Sugar Honey", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Sugar Honey I.T.", level: "", tutorial: "", demo: "" },
  { song: "", dance: "T.G.I.F", level: "", tutorial: "", demo: "" },
  { song: "Take Me to the Beach", dance: "Take Me to the Beach", level: "L Int", tutorial: "", demo: "" },
  { song: "", dance: "Tatlo", level: "", tutorial: "", demo: "" },
  { song: "", dance: "The Vibe", level: "INT", tutorial: "https://www.youtube.com/watch?v=EbprsL4kktE", demo: "https://www.youtube.com/watch?v=IWyVU_6tiKI" },
  { song: "", dance: "The Wolf", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Thicc as Thieves", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Three to Tango", level: "", tutorial: "", demo: "" },
  { song: "", dance: "TK Stomp", level: "", tutorial: "", demo: "" },
  { song: "Toes", dance: "Toes", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Tush Push", level: "", tutorial: "https://www.youtube.com/watch?v=1Ypvtyz6L4k", demo: "" },
  { song: "", dance: "Twenty Two", level: "", tutorial: "", demo: "" },
  { song: "Wagon Wheel", dance: "Wagon Wheel", level: "", tutorial: "", demo: "" },
  { song: "I Brake for Brunettes", dance: "Walk the Line", level: "", tutorial: "https://www.youtube.com/watch?v=_V5H02KQtbM", demo: "" },
  { song: "What Makes You Country", dance: "What Makes You Country", level: "Beg", tutorial: "", demo: "" },
  { song: "Whiskey Glasses", dance: "Whiskey Glasses", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Yeehaw", level: "", tutorial: "", demo: "" },
  { song: "", dance: "Yes Ma'am", level: "", tutorial: "", demo: "" },
];

// ---------------------------------------------------------------------
// STATE + RENDER
// ---------------------------------------------------------------------
let sortKey = 'song';
let sortDir = 1; // 1 = ascending, -1 = descending
let searchTerm = '';

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function linkCell(url, label) {
  if (!url) return '<span class="ld-empty">&mdash;</span>';
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ld-link">${label}</a>`;
}

function matchesSearch(d, term) {
  if (!term) return true;
  return (
    d.song.toLowerCase().includes(term) ||
    d.dance.toLowerCase().includes(term) ||
    d.level.toLowerCase().includes(term)
  );
}

function renderRows() {
  const term = searchTerm.trim().toLowerCase();

  const filtered = dances.filter(d => matchesSearch(d, term));

  if (filtered.length === 0) {
    return `<tr><td colspan="5" class="ld-no-results">No dances match "${escapeHtml(searchTerm)}".</td></tr>`;
  }

  const sorted = filtered.sort((a, b) => {
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

    <h2 style="border-left: 4px solid var(--accent-color); padding-left: 1.5rem; margin: 0 0 2rem; font-size: 2.5rem; line-height: 1.1; letter-spacing: 0.05em; text-transform: uppercase;">
      Line Dances
    </h2>

    <div class="ld-search-wrap">
      <div class="hud-input-wrapper">
        <div class="mono-accent">SEARCH:</div>
        <input type="text" id="ld-search" class="hud-input" placeholder="FILTER BY SONG, DANCE, OR LEVEL..." autocomplete="off">
      </div>
    </div>

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

document.getElementById('ld-search')?.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderTableBody();
});

initFooter();
