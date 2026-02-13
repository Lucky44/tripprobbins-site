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

        const currentPath = window.location.pathname;
        const links = [
            { href: '/index.html', label: 'Home' },
            { href: '/fiction.html', label: 'Fiction' },
            { href: '/starcitizen.html', label: 'Star Citizen' },
            { href: '/journalism.html', label: 'Journalism' },
            { href: '/software.html', label: 'Apps' },
            { href: '/makecontact.html', label: 'Make Contact' }
        ];

        const linkHtml = links.map(link => {
            // Handle both / and /index.html for home
            const isActive = (currentPath === link.href) ||
                (link.href === '/index.html' && (currentPath === '/' || currentPath === ''));
            return `<a href="${link.href}" class="${isActive ? 'active' : ''}">${link.label}</a>`;
        }).join('');

        nav.innerHTML = `
      <div class="container nav-content">
        <div class="nav-links center-nav">
          ${linkHtml}
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
        footer.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(6, 182, 212, 0.1); padding-top: 2rem;">
                <p style="opacity: 0.5; font-size: 0.8rem; margin: 0;">&copy; ${new Date().getFullYear()} Tripp Robbins. DATA_LOG_SYNC: COMPLETE</p>
                <div class="footer-links">
                    <button id="contact-trigger" class="glass-link scifi-font" style="min-width: auto; padding: 0.4rem 1rem; font-size: 0.7rem; opacity: 0.6;">INITIALIZE_COMMS (CONTACT)</button>
                </div>
            </div>
        `;
        app.appendChild(footer);

        document.getElementById('contact-trigger')?.addEventListener('click', openContactModal);
    }
}

export function openContactModal() {
    const contactHtml = `
        <div class="header-coords">PROTOCOL: COMMS_ESTABLISH</div>
        <div class="mono-accent">DIRECT_UPLINK: TRI_ROBBINS</div>
        <h2 class="scifi-font" style="margin: 1.5rem 0;">Initialize Comms</h2>
        <p style="margin-bottom: 2rem; opacity: 0.8;">Transmit your query to the central hub. Safe-link encryption active.</p>
        
        <form id="contact-form" action="https://formspree.io/f/mojnedpl" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div class="form-field">
                <label class="hud-label" for="contact-name">Identity</label>
                <div class="hud-input-wrapper">
                    <div class="mono-accent">NAME:</div>
                    <input type="text" id="contact-name" name="name" class="hud-input" placeholder="ENTER NAME..." required>
                </div>
            </div>
            
            <div class="form-field">
                <label class="hud-label" for="contact-email">Return Path</label>
                <div class="hud-input-wrapper">
                    <div class="mono-accent">EMAIL:</div>
                    <input type="email" id="contact-email" name="email" class="hud-input" placeholder="ENTER RETURN ADDRESS..." required>
                </div>
            </div>
            
            <div class="form-field">
                <label class="hud-label" for="contact-message">Transmission Data</label>
                <div class="hud-input-wrapper" style="height: auto;">
                    <textarea id="contact-message" name="message" class="hud-textarea" placeholder="ENTER MESSAGE CONTENT..." required></textarea>
                </div>
            </div>
            
            <div class="form-status" id="contact-status">
                <div><span class="status-indicator"></span> STANDBY...</div>
                <div>SECURE_LINE_0xAF44</div>
            </div>
            
            <div style="margin-top: 2rem; text-align: right;">
                <button type="submit" class="cta-button primary" id="contact-submit" style="min-width: 250px;">TRANSMIT_DATA</button>
            </div>
        </form>
    `;

    openModal(contactHtml);

    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-status');
    const submitBtn = document.getElementById('contact-submit');

    if (form) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            submitBtn.innerText = 'TRANSMITTING...';
            submitBtn.disabled = true;
            status.innerHTML = '<div><span class="status-indicator pulse"></span> UPLOADING_TO_SERVER...</div><div>SEC_0xAF44</div>';

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    status.innerHTML = '<div><span class="status-indicator" style="background: var(--accent-color);"></span> SUCCESS: TRANSMISSION_RECEIVED</div><div>LOG_SEQ_ACK</div>';
                    form.reset();
                    submitBtn.innerText = 'TRANSMISSION_COMPLETE';
                    setTimeout(() => closeModal(), 2500);
                } else {
                    const data = await response.json();
                    throw new Error(data.error || 'General transmission failure.');
                }
            } catch (err) {
                status.innerHTML = `<div><span class="status-indicator" style="background: #ef4444;"></span> ERROR: ${err.message.toUpperCase()}</div><div>ERR_0x00ED</div>`;
                submitBtn.innerText = 'RETRY_TRANSMISSION';
                submitBtn.disabled = false;
            }
        };
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
