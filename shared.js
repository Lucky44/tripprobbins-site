import './style.css'

export function initCommonUI() {
    const app = document.querySelector('#app');
    if (!app) return;

    // Add background layers if not present
    if (!document.querySelector('.stars-back')) {
        const bgContainer = document.createElement('div');
        bgContainer.innerHTML = `
      <div class="star-layer stars-back"></div>
      <div class="star-layer stars-mid"></div>
      <div class="star-layer stars-front"></div>
      <div class="scan-line-overlay"></div>
      <div class="vignette"></div>
    `;
        app.prepend(...bgContainer.childNodes);
    }

    // Add navigation if not present
    if (!document.querySelector('.sticky-nav')) {
        const nav = document.createElement('nav');
        nav.className = 'glass-panel sticky-nav';
        nav.innerHTML = `
      <div class="container nav-content">
        <div class="nav-links center-nav">
          <a href="/index.html">Home</a>
          <a href="/fiction.html">Fiction</a>
          <a href="/starcitizen.html">Star Citizen</a>
          <a href="/journalism.html">Journalism</a>
          <a href="/software.html">Software</a>
          <a href="/newsletter.html">Newsletter</a>
        </div>
      </div>
    `;
        app.appendChild(nav);
    }

    // Setup Effects
    initParallax();
    initCoordRandomizer();
    initModal();
}

export function initParallax() {
    const starLayers = document.querySelectorAll('.star-layer');
    window.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const moveY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        starLayers.forEach((layer, index) => {
            const depth = (index + 1) * 3;
            layer.style.transform = `translate(${moveX * depth * 15}px, ${moveY * depth * 15}px)`;
        });
    });
}

export function randomizeCoords(element) {
    const originalText = element.dataset.originalText || element.innerText;
    if (!element.dataset.originalText) {
        element.dataset.originalText = originalText;
    }

    // Use a regex to find hex numbers (0x...) or decimal/integer numbers
    const randomized = originalText.replace(/0x[0-9A-F]+|[-+]?[0-9]*\.?[0-9]+/gi, (match) => {
        if (match.toLowerCase().startsWith('0x')) {
            return '0x' + Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
        } else if (match.includes(':')) {
            // Handle LAT: 0x... style logic if needed, but for now let's keep it simple
            return match;
        } else if (match.includes('.')) {
            const parts = match.split('.');
            const precision = parts[1] ? parts[1].length : 2;
            return (Math.random() * 100).toFixed(precision);
        } else {
            return Math.floor(Math.random() * 99).toString().padStart(match.length, '0');
        }
    });

    element.innerText = randomized;
}

export function initCoordRandomizer() {
    document.querySelectorAll('.glass-panel, .hero-section').forEach(section => {
        const coordsElem = section.querySelector('.header-coords');
        if (coordsElem) {
            section.addEventListener('mouseenter', () => {
                const interval = setInterval(() => randomizeCoords(coordsElem), 50);
                section.dataset.coordInterval = interval;
            });
            section.addEventListener('mouseleave', () => {
                clearInterval(section.dataset.coordInterval);
            });
        }
    });
}

export function typeWriter(text, elementId, speed = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, 800);
}

export function initFooter() {
    const app = document.querySelector('#app');
    if (!app) return;
    if (!document.querySelector('footer')) {
        const footer = document.createElement('footer');
        footer.className = 'container';
        footer.style.marginTop = '4rem';
        footer.style.paddingBottom = '4rem';
        footer.innerHTML = `<p style="opacity: 0.5; font-size: 0.8rem;">&copy; ${new Date().getFullYear()} Tripp Robbins. DATA_LOG_SYNC: COMPLETE</p>`;
        app.appendChild(footer);
    }
}

export function initModal() {
    if (document.getElementById('ui-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'ui-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content glass-panel corner-brackets">
            <div class="bottom-corners"></div>
            <button class="close-modal">&times;</button>
            <div id="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

export function openModal(contentHtml, isLarge = false) {
    const modal = document.getElementById('ui-modal');
    const body = document.getElementById('modal-body');
    if (modal && body) {
        body.innerHTML = contentHtml;
        if (isLarge) {
            modal.classList.add('large');
        } else {
            modal.classList.remove('large');
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

export function closeModal() {
    const modal = document.getElementById('ui-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
