import './style.css'
import { initCommonUI, initFooter } from './shared.js'

initCommonUI();

// This page has no site-wide nav menu. initCommonUI() adds it
// unconditionally (background layers, nav, modal, etc. all come as a
// bundle), so just remove the nav bar it created and reclaim the space
// that was reserved for it.
document.querySelector('.sticky-nav')?.remove();

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
  { song: "Tipsy", dance: "A Bar Song", level: "Beg", tutorial: "https://www.youtube.com/watch?v=CLkqWNXJNQM", demo: "https://www.youtube.com/watch?v=C8syXIES6Yg" },
  { song: "Can't Keep Up", dance: "Alligator Smile", level: "Beg", tutorial: "https://www.youtube.com/watch?v=to72YYlEcAQ", demo: "https://www.youtube.com/watch?v=LkZfZKLZSQk" },
  { song: "Humble", dance: "Always Humble", level: "Beg", tutorial: "https://www.youtube.com/watch?v=HmoDeGjTrrI", demo: "https://www.youtube.com/watch?v=pPPnQhj4BHQ" },
  { song: "American Kids", dance: "American Kids", level: "Int", tutorial: "https://www.youtube.com/watch?v=ipGQrVhOXGA", demo: "https://www.youtube.com/watch?v=gscYyXoQDWM" },
  { song: "Angelina", dance: "Angelina", level: "Imp", tutorial: "https://www.youtube.com/watch?v=C2apVmgXQGk", demo: "https://www.youtube.com/watch?v=kqEhgq2GZZs" },
  { song: "Me Too", dance: "Asking Questions", level: "Imp", tutorial: "https://www.youtube.com/watch?v=D8lY59xS-n8", demo: "https://www.youtube.com/watch?v=7iKQ1L7lbv0" },
  { song: "Austin", dance: "Austin", level: "Beg", tutorial: "https://youtu.be/mCXCq7tkn5g?si=R9v_cp3jkuHy85na", demo: "https://youtu.be/Yr4s5df_Xvc?si=BGU_h05YkriFERW3" },
  { song: "Baby Likes to Rock It", dance: "Baby Likes to Rock It", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=ykvbkU542Uw", demo: "https://www.youtube.com/watch?v=AOxnzL6ea0w" },
  { song: "Big Blue Note", dance: "Big Blue Note", level: "Beg", tutorial: "https://www.youtube.com/watch?v=lWmscppjZJ4", demo: "https://www.youtube.com/watch?v=lWmscppjZJ4" },
  { song: "Boot Scootin Boogie", dance: "Boot Scootin' Boogie", level: "Beg", tutorial: "https://www.youtube.com/watch?v=bfqaT0hnZdA", demo: "https://www.youtube.com/watch?v=sOa1cFM5VTE" },
  { song: "Boots On Bars", dance: "Boots on Bars", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=Vj43iWJmV_8", demo: "https://www.youtube.com/watch?v=mrXG-jTdV1c" },
  { song: "Boots on the Ground", dance: "Boots on the Ground", level: "Beg", tutorial: "https://www.youtube.com/watch?v=-Tyn50VSd4s", demo: "https://www.youtube.com/watch?v=AgtI3-r9prE" },
  { song: "The Booze Cruise", dance: "Booze Cruise", level: "Int", tutorial: "https://www.youtube.com/watch?v=lavatjcf_CY", demo: "https://www.youtube.com/watch?v=jMQV_TDAcKA" },
  { song: "Broke", dance: "Broke", level: "Beg", tutorial: "https://www.youtube.com/watch?v=EOe8GaUJMUk", demo: "https://www.youtube.com/watch?v=YIWC8TexxEo" },
  { song: "Brunette", dance: "Brown Eyed 5 5", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=bJpzrBC2dV0", demo: "https://www.youtube.com/watch?v=Am2UgDkhirk" },
  { song: "Got A Feelin'", dance: "Bullfrog on a Log", level: "Beg", tutorial: "https://www.youtube.com/watch?v=a5MJjdWSXpg", demo: "https://www.youtube.com/watch?v=ivOvtm-79f8" },
  { song: "La Mordidita", dance: "Cha Cha Caliente", level: "Int", tutorial: "https://www.youtube.com/watch?v=_vhqaUfm9Is", demo: "https://www.youtube.com/watch?v=5SCsifMgcTc" },
  { song: "U Gurl", dance: "Cherry Bottom Boom", level: "Int", tutorial: "https://www.youtube.com/watch?v=wvWFRLt7OSc", demo: "https://www.youtube.com/watch?v=yMiv9kbzuuo" },
  { song: "Choosin' Texas", dance: "Choosin' Texas", level: "Beg", tutorial: "https://www.youtube.com/watch?v=zojkXBM2_iw", demo: "https://www.youtube.com/watch?v=yNGd8EEyvlQ" },
  { song: "Copperhead Road", dance: "Copperhead Road", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Bthvi4w0dgU", demo: "https://www.youtube.com/watch?v=0LWfnJyZgP0" },
  { song: "Country Boy", dance: "Country Boy", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Z1D433q_BUY", demo: "https://www.youtube.com/watch?v=WQ1LHeC2DqQ" },
  { song: "Country Girl (Shake It For Me)", dance: "Country Girl Shake", level: "Int", tutorial: "https://www.youtube.com/watch?v=zb3XC4RnYbk", demo: "https://youtu.be/W_7VpPtdYhc?si=s393_b1S0TO7MWpO" },
  { song: "Cowboi Boogie", dance: "Cowboi Boogie", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Bfif-QiJvAU", demo: "https://www.youtube.com/watch?v=iz31ZAdwt5k" },
  { song: "Cowboy Up", dance: "Cowboy Up", level: "Beg", tutorial: "https://www.youtube.com/watch?v=U2qEShA-NQA", demo: "https://www.youtube.com/watch?v=Ae-R-HANmuo" },
  { song: "Cowgirl", dance: "Cowgirl", level: "Beg", tutorial: "https://www.youtube.com/watch?v=i0uFtrtZulk", demo: "https://www.youtube.com/watch?v=m0VecvBJHzg" },
  { song: "Dirt on My Boots", dance: "Dirt on My Boots", level: "Beg", tutorial: "https://www.youtube.com/watch?v=VO--Y45Sn9w", demo: "https://www.instagram.com/reels/DGWOz6fS_z_/" },
  { song: "Bring Down The House", dance: "Dizzy", level: "Int", tutorial: "https://www.youtube.com/watch?v=FKRrL5ItyuY", demo: "https://www.youtube.com/watch?v=PD-IL8p4T-8" },
  { song: "Do Si Do", dance: "Do Si Dough", level: "Int", tutorial: "https://www.youtube.com/watch?v=i1NspFmxQnM", demo: "https://www.youtube.com/watch?v=QZi5Ze7drIg" },
  { song: "Bad Habits", dance: "Easy Tonight", level: "Int", tutorial: "https://www.youtube.com/watch?v=K_N8EDJnCE0", demo: "https://www.youtube.com/watch?v=yO56z2xDxI8" },
  { song: "Fireball", dance: "Fireball", level: "Beg", tutorial: "https://www.youtube.com/watch?v=h4KlN0hexQw", demo: "https://www.youtube.com/watch?v=0xNDiVM7_2s" },
  { song: "Fishin in the Dark", dance: "Fishin in the Dark", level: "E Imp", tutorial: "https://youtu.be/_twN0QvnTTo?si=_JQBhQcMIo_WycBQ", demo: "https://www.instagram.com/reels/DGnwCqyp0GQ/" },
  { song: "Fool", dance: "Fool 4 You", level: "Imp", tutorial: "https://www.youtube.com/watch?v=rxyee-LLQG4", demo: "https://www.youtube.com/watch?v=czCN1KJ4opI" },
  { song: "Footloose", dance: "Footloose", level: "H Beg", tutorial: "https://youtu.be/6BPpvjlpQxc?si=FTuElBRiAp0QY3i4&t=62", demo: "https://youtu.be/dvjCzCFjmGo?si=qokkUfveCzve7gd5&t=15" },
  { song: "Shivers", dance: "Gives Me Shivers", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=6X0d0tmt4E0", demo: "https://www.youtube.com/watch?v=_z-l8u6K95c" },
  { song: "Crank It Up", dance: "Goin' Ham", level: "Beg", tutorial: "https://www.youtube.com/watch?v=ovQSLv_LcZA", demo: "https://www.youtube.com/watch?v=zBQqXiaa0hc" },
  { song: "Good Time", dance: "Good Time", level: "Beg", tutorial: "https://youtu.be/_GT9-AcfQPY?si=ZbF_hk1A_yTUTrrY", demo: "https://youtu.be/8kWAJjX28_4?si=cC0HkVVc4qFm5d5-" },
  { song: "If Jesus Loves Me", dance: "Groovy Love", level: "Int", tutorial: "https://www.youtube.com/watch?v=rMsrWKfKFUU", demo: "https://www.youtube.com/watch?v=wQV46VZrVwI" },
  { song: "Half Moon Bay", dance: "Half Moon Bay", level: "H Beg", tutorial: "", demo: "https://www.youtube.com/watch?v=W2bh1zVMbT4" },
  { song: "Cowboy Up", dance: "Heel Toe Rodeo", level: "Imp", tutorial: "https://www.youtube.com/watch?v=eZNtZHKa9E0", demo: "https://www.youtube.com/watch?v=kP2lL9Ho_TM" },
  { song: "Hicktown", dance: "Hicktown", level: "Beg", tutorial: "https://youtu.be/itokZwKRM-k?si=FRrEfZaSC1rkEnn7&t=12", demo: "https://www.instagram.com/p/DGeyjDUxP6K/" },
  { song: "Hoedown", dance: "Hoedown", level: "Beg", tutorial: "https://www.youtube.com/watch?v=2jd53zoiKkw", demo: "https://www.youtube.com/watch?v=k4GQfqtAu5k" },
  { song: "I See Country", dance: "Honky Tonk Way", level: "Int", tutorial: "https://youtu.be/KMItGKCWkH4?si=Xz7WsGgfz_U2pteJ", demo: "https://www.youtube.com/watch?v=Ie3H31bWzlU" },
  { song: "House Party", dance: "House Party", level: "Beg", tutorial: "https://www.youtube.com/watch?v=PGVLdkDmLyM", demo: "https://www.youtube.com/watch?v=_bmRf2o42bo" },
  { song: "Be Her", dance: "Hurts So Bad", level: "Imp", tutorial: "https://www.youtube.com/watch?v=GJoSc6DBxnA", demo: "https://www.youtube.com/watch?v=Xs3QFvFdYzU" },
  { song: "I Was on a Boat That Day", dance: "I Was on a Boat", level: "Beg", tutorial: "https://www.youtube.com/watch?v=LzoBPO3knp4", demo: "https://www.youtube.com/watch?v=ltAHZF0wQoc" },
  { song: "Infectious", dance: "Infectious", level: "H Int", tutorial: "https://youtu.be/Rzyp2iFXEag?si=Bq78RYq9kTKL4RCQ", demo: "https://youtu.be/NlQdEeE7iFI?si=aDT6xMA4K1vcf3UN" },
  { song: "Kerosene", dance: "Kerosene", level: "Beg", tutorial: "https://www.youtube.com/watch?v=ngS2SzQ5ZEc", demo: "https://www.youtube.com/watch?v=6dEWKuL8jrg" },
  { song: "Knockin' Boots", dance: "Knockin' Boots", level: "Beg", tutorial: "https://www.youtube.com/watch?v=xOHX5n4vSRM", demo: "https://www.youtube.com/watch?v=VqfN7Xy_Fhc" },
  { song: "Let's Do Da Dance", dance: "Let's Do Da Dance", level: "Imp", tutorial: "https://www.youtube.com/watch?app=desktop&v=0dPkcfl52IA", demo: "https://www.youtube.com/watch?app=desktop&v=0dPkcfl52IA" },
  { song: "Liar", dance: "Liar", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=WWIKwDeNQ14", demo: "https://www.youtube.com/watch?v=sL-t7EoIVwQ" },
  { song: "Lasso", dance: "Like a Lasso", level: "H Beg", tutorial: "https://www.youtube.com/watch?v=zpoHBcDrGps", demo: "https://www.youtube.com/watch?v=AyL0JA74yYE" },
  { song: "Lil Bit", dance: "Lil Bit", level: "H Imp", tutorial: "https://www.youtube.com/watch?v=BcZsp7-Ykr4", demo: "https://www.youtube.com/watch?v=HQwZF6BPXpU" },
  { song: "Love Button", dance: "Love Button", level: "Beg", tutorial: "https://www.youtube.com/watch?v=t9jmpINKfvU", demo: "https://www.youtube.com/watch?v=hQTgJ3Fc7j8" },
  { song: "Love Potion 666", dance: "Love Potion 666", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Kc64e7-U3v0", demo: "https://www.youtube.com/watch?v=sOUNlH8cKnc" },
  { song: "Miles On It", dance: "Miles On It", level: "Beg", tutorial: "https://www.youtube.com/watch?v=axPmuexZDBw", demo: "https://www.youtube.com/watch?v=3ELBDK7TiF8" },
  { song: "More Than My Hometown", dance: "More Than My Hometown", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Mzvliom3eiE", demo: "https://www.instagram.com/reels/DHtN4E9JzBr/" },
  { song: "Mr. Lonely", dance: "Mr. Lonely", level: "Beg", tutorial: "https://www.youtube.com/watch?v=q8XTktyaNyI", demo: "https://www.youtube.com/watch?v=tCzFI-4MuP8" },
  { song: "Everything I Love", dance: "One More Silver Dollar", level: "Beg", tutorial: "https://www.youtube.com/watch?v=yaOxcSZfaUw", demo: "https://www.youtube.com/watch?v=-f1l53LUHVk" },
  { song: "Damn I Love Miami", dance: "Pieces to the Puzzle", level: "Imp", tutorial: "https://www.youtube.com/watch?v=qeQsdKwdI1M", demo: "https://www.youtube.com/watch?v=S5A4bSVmwUM" },
  { song: "Ready For It", dance: "Ready For It", level: "Beg", tutorial: "https://www.youtube.com/watch?v=NwO5-NZsYBo&t=52s", demo: "https://www.youtube.com/watch?v=kzBqbZtkqmQ" },
  { song: "Red Solo Cup", dance: "Red Solo Scuff", level: "Beg", tutorial: "", demo: "https://www.youtube.com/watch?v=pYusVtUOAC0" },
  { song: "Merry Go Round", dance: "Redneck Angel", level: "Beg", tutorial: "https://www.youtube.com/watch?v=X1inL5HTj2U", demo: "https://www.youtube.com/watch?v=KWGcd0mm8nc" },
  { song: "Ten Rounds of Jose Cuervo", dance: "Rocket to the Sun", level: "Beg", tutorial: "https://www.youtube.com/watch?v=4SglE4mrOiQ", demo: "https://www.youtube.com/watch?v=FDbymq9PvUk" },
  { song: "Cowgirl (Parmalee)", dance: "She Got My Head Spinnin'", level: "Beg", tutorial: "https://www.youtube.com/watch?v=bpDsd72vJ1Q", demo: "https://www.youtube.com/watch?v=bpDsd72vJ1Q" },
  { song: "Natural", dance: "She's a Natural", level: "Beg", tutorial: "https://www.youtube.com/watch?v=uhBke1nJ-WU", demo: "https://www.youtube.com/watch?v=YpgLkB2pFbg" },
  { song: "Shimmer", dance: "Shimmer", level: "Beg", tutorial: "https://youtu.be/aKz8I_reYDo?si=USnLhbfsow7sGkFD", demo: "https://youtu.be/aKz8I_reYDo?si=USnLhbfsow7sGkFD" },
  { song: "Suit and Tie", dance: "Sold My Soul", level: "Beg", tutorial: "https://www.youtube.com/watch?v=Epb7BVFurcQ", demo: "https://www.youtube.com/watch?v=sTEttbsbOdI" },
  { song: "Steal My Thunder", dance: "Steal My Thunder", level: "Imp", tutorial: "https://www.youtube.com/watch?v=TO5HGVLcINI", demo: "https://www.youtube.com/watch?v=mBI2xeSQKCI" },
  { song: "Stetson", dance: "Stetson", level: "Int", tutorial: "https://youtu.be/bp28nr8i8MI?si=EmWja3FPYki3HGnY", demo: "https://www.youtube.com/watch?v=DaCPNuiSD1A" },
  { song: "Sugar Honey Iced Tea", dance: "Sugar Honey", level: "Int", tutorial: "https://www.youtube.com/watch?v=ZiCGNpK-Olc", demo: "https://www.youtube.com/watch?v=h-HkLsabl5U" },
  { song: "Greenlight", dance: "T.G.I.F", level: "H Int", tutorial: "https://www.youtube.com/watch?v=tatP43f_Cjs", demo: "https://www.youtube.com/watch?v=kTFE7LPFIbc" },
  { song: "Take Me to the Beach", dance: "Take Me to the Beach", level: "L Int", tutorial: "https://www.youtube.com/watch?v=KvMJ6RvelPA", demo: "https://www.youtube.com/watch?v=vVR2TkBZ1vU" },
  { song: "Turn All The Lights On", dance: "TATLO", level: "Int", tutorial: "https://www.youtube.com/watch?v=eVRmYg3Mbo4", demo: "https://youtu.be/TbXi_W3X514?si=HbwdjwOLDPh2ipRF" },
  { song: "Texass", dance: "Texass", level: "Imp", tutorial: "https://www.youtube.com/watch?v=oELQ9AtiNoU", demo: "" },
  { song: "Vibe", dance: "The Vibe", level: "Int", tutorial: "https://www.youtube.com/watch?v=EbprsL4kktE", demo: "https://www.youtube.com/watch?v=IWyVU_6tiKI" },
  { song: "The Wolf", dance: "The Wolf", level: "Imp", tutorial: "https://www.youtube.com/watch?v=oo8M9fbNCMU", demo: "https://www.youtube.com/watch?v=NIZXQUwUBvs" },
  { song: "Thicc As Thieves", dance: "Thicc as Thieves", level: "Imp", tutorial: "https://www.youtube.com/watch?v=NzyL_O0Klcg", demo: "https://www.youtube.com/watch?v=ixKytUOp9vQ" },
  { song: "3 to Tango", dance: "3 to Tango", level: "Int", tutorial: "https://www.youtube.com/watch?v=mNcFWHH2IyY", demo: "https://www.youtube.com/watch?v=18MW-GqGXJ8" },
  { song: "Getaway Truck", dance: "TK Stomp", level: "Beg", tutorial: "https://www.youtube.com/watch?v=zTJPKFCTffY", demo: "https://www.youtube.com/watch?v=-ccIKSeSAHQ" },
  { song: "Toes", dance: "Toes", level: "Imp", tutorial: "https://www.youtube.com/watch?v=q3srOH8ggn0", demo: "https://www.youtube.com/watch?v=s9vPkNzC8XY" },
  { song: "(various)", dance: "Tush Push", level: "Imp", tutorial: "https://www.youtube.com/watch?v=1Ypvtyz6L4k", demo: "https://www.youtube.com/watch?v=QaKFtHd05Gg" },
  { song: "You Look Like You Love Me", dance: "Twenty Two", level: "Beg", tutorial: "https://www.youtube.com/watch?v=iLcdCHVGdgg", demo: "https://www.youtube.com/watch?v=f_wPPOpnMyA" },
  { song: "Wagon Wheel", dance: "Wagon Wheel", level: "Beg", tutorial: "https://www.youtube.com/watch?v=UFW67HnwsmY", demo: "https://www.youtube.com/watch?v=C2H63XKN5ps" },
  { song: "Freight Train", dance: "Walk the Line", level: "Imp", tutorial: "https://www.youtube.com/watch?v=_V5H02KQtbM", demo: "https://www.youtube.com/watch?v=iN-BBMRm6tU" },
  { song: "High Class", dance: "We High Class", level: "Int", tutorial: "https://www.youtube.com/watch?v=L6CZq6CpIGQ", demo: "https://www.youtube.com/watch?v=LzRZcg7YxRo" },
  { song: "Good to Go", dance: "We're Good To Go", level: "Beg", tutorial: "https://www.youtube.com/watch?v=QDK6H2xoDmI", demo: "https://www.youtube.com/watch?v=zBgfA6M1d2k" },
  { song: "What Makes You Country", dance: "What Makes You Country", level: "Beg", tutorial: "https://www.youtube.com/watch?v=i0hhJ1OB0to", demo: "https://www.youtube.com/watch?v=8vxWuItMSfg" },
  { song: "Whiskey Glasses", dance: "Whiskey Glasses", level: "Beg", tutorial: "https://www.youtube.com/watch?v=4lW-S1uVpkE", demo: "https://youtu.be/yNxN49iHxJE?si=FCXBPTBy5Qp5szvx&t=12" },
];

// ---------------------------------------------------------------------
// STATE + RENDER
// ---------------------------------------------------------------------
let sortKey = 'dance';
let sortDir = 1; // 1 = ascending, -1 = descending
let searchTerm = '';

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function linkAnchor(url, label) {
  if (!url) return '';
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ld-link">${label}</a>`;
}

function linksCell(demo, tutorial) {
  const demoLink = linkAnchor(demo, 'Demo');
  const tutorialLink = linkAnchor(tutorial, 'Tutorial');
  if (!demoLink && !tutorialLink) return '<span class="ld-empty">&mdash;</span>';
  return `<div class="ld-links-cell">${demoLink}${tutorialLink}</div>`;
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
    return `<tr><td colspan="4" class="ld-no-results">No dances match "${escapeHtml(searchTerm)}".</td></tr>`;
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
      <td class="ld-col-title" title="${escapeHtml(d.dance)}">${d.dance}</td>
      <td class="ld-col-title" title="${escapeHtml(d.song)}">${d.song}</td>
      <td class="ld-col-lvl">${d.level}</td>
      <td>${linksCell(d.demo, d.tutorial)}</td>
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
    <div class="bottom-corners"></div>

    <div class="ld-sticky-header" id="ld-sticky-header">
      <div class="header-coords">LAT: 0x2C19 LONG: 0x88F4</div>

      <h2 style="border-left: 4px solid var(--accent-color); padding-left: 1.5rem; margin: 0 0 2rem; font-size: 2.5rem; line-height: 1.1; letter-spacing: 0.05em; text-transform: uppercase;">
        Line Dances
      </h2>

      <div class="ld-search-wrap">
        <div class="hud-input-wrapper">
          <div class="mono-accent">SEARCH:</div>
          <input type="text" id="ld-search" class="hud-input" placeholder="Filter by song, dance, or level..." autocomplete="off">
        </div>
      </div>
    </div>

    <div class="ld-table-wrap">
      <table class="ld-table">
        <thead>
          <tr>
            <th data-sort-key="dance" class="ld-col-title">Dance Title</th>
            <th data-sort-key="song" class="ld-col-title">Song Title</th>
            <th data-sort-key="level" class="ld-col-lvl">LVL</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody id="ld-tbody"></tbody>
      </table>
    </div>
  </section>
`;
// The 100px top padding on #app > main (set globally in style.css) exists
// to clear the fixed nav bar. This page has no nav, so reclaim that space.
content.style.paddingTop = '2.5rem';
app.appendChild(content);

renderTableBody();

// The panel uses "overflow: hidden" to clip its one-time entrance-sweep
// animation and keep the corner brackets crisp. But an ancestor with
// overflow other than "visible" hijacks position:sticky (the sticky
// element sticks relative to that ancestor instead of the viewport).
// Once the entrance animation finishes, switch it to visible so the
// sticky title/search/table-header behave correctly for the rest of
// the scroll session.
const panel = document.getElementById('linedances');
if (panel) {
  setTimeout(() => {
    panel.style.overflow = 'visible';
  }, 1800);
}

// ---------------------------------------------------------------------
// STICKY HEADER OFFSETS
// The title/search block sticks below the fixed top nav, and the table's
// header row sticks below that block. Offsets are measured at runtime so
// this keeps working if the nav or header block ever changes height.
// ---------------------------------------------------------------------
function updateStickyOffsets() {
  const nav = document.querySelector('.sticky-nav');
  const stickyHeader = document.getElementById('ld-sticky-header');
  if (!stickyHeader) return;

  const navHeight = nav ? nav.offsetHeight : 0;
  document.documentElement.style.setProperty('--ld-nav-h', `${navHeight}px`);

  const theadTop = navHeight + stickyHeader.offsetHeight;
  document.documentElement.style.setProperty('--ld-thead-top', `${theadTop}px`);
}

updateStickyOffsets();
window.addEventListener('load', updateStickyOffsets);
window.addEventListener('resize', () => {
  clearTimeout(window._ldResizeTimer);
  window._ldResizeTimer = setTimeout(updateStickyOffsets, 150);
});

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
