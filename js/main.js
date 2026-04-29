// ============================================================
//  Al Mizan Law Firm — main.js
//  Injects shared nav & footer, handles scroll, active states
// ============================================================

// Load Arabic Google Fonts + RTL stylesheet once
(function loadGlobalAssets() {
  // Arabic fonts
  const arFont = document.createElement('link');
  arFont.rel  = 'stylesheet';
  arFont.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Tajawal:wght@300;400;700&display=swap';
  document.head.appendChild(arFont);

  // RTL stylesheet
  const rtlLink = document.createElement('link');
  rtlLink.rel  = 'stylesheet';
  rtlLink.href = 'css/rtl.css';
  document.head.appendChild(rtlLink);
})();

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  injectFooter();
  initNav();
});

// ── Nav HTML ────────────────────────────────────────────────
function injectNav() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';
  nav.innerHTML = `
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon"></div>
      <div class="nav-logo-text">
        <span class="nav-logo-en">${CONFIG.FIRM.name}</span>
        <span class="nav-logo-ar">${CONFIG.FIRM.nameAr}</span>
      </div>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-i18n="nav_home">Home</a></li>
      <li><a href="appointments.html" data-i18n="nav_appointments">Appointments</a></li>
      <li><a href="courses.html" data-i18n="nav_courses">Courses</a></li>
      <li><a href="about.html" data-i18n="nav_about">About Us</a></li>
      <li><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
      <li><a href="appointments.html" class="nav-cta" data-i18n="nav_book">Book Now</a></li>
    </ul>
    <div class="nav-right-controls">
      <button class="lang-toggle" id="langToggle" aria-label="Toggle language">عربي</button>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
  document.body.prepend(nav);
}

// ── Footer HTML ─────────────────────────────────────────────
function injectFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-brand-name">⚖ ${CONFIG.FIRM.name}</div>
        <div class="footer-brand-ar">${CONFIG.FIRM.nameAr}</div>
        <p class="footer-tagline">"${CONFIG.FIRM.tagline}"</p>
        <div class="footer-social">
          <a href="${CONFIG.FIRM.facebook}" aria-label="Facebook">f</a>
          <a href="${CONFIG.FIRM.linkedin}" aria-label="LinkedIn">in</a>
        </div>
      </div>

      <div>
        <div class="footer-heading" data-i18n="footer_nav">Navigation</div>
        <ul class="footer-links">
          <li><a href="index.html" data-i18n="nav_home">Home</a></li>
          <li><a href="appointments.html" data-i18n="nav_appointments">Book Appointment</a></li>
          <li><a href="courses.html" data-i18n="nav_courses">Law Courses</a></li>
          <li><a href="about.html" data-i18n="nav_about">About Us</a></li>
          <li><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-heading" data-i18n="footer_legal">Legal</div>
        <ul class="footer-links">
          <li><a href="terms.html" data-i18n="footer_terms">Terms of Service</a></li>
          <li><a href="privacy.html" data-i18n="footer_privacy">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-heading" data-i18n="footer_contact">Contact Us</div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📞</span>
          <span>${CONFIG.FIRM.phone}</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">✉</span>
          <span>${CONFIG.FIRM.email}</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon">📍</span>
          <span>${CONFIG.FIRM.address}</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span data-i18n="footer_copy">© ${new Date().getFullYear()} Al Mizan Law Firm. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="terms.html" data-i18n="footer_terms">Terms</a>
        <a href="privacy.html" data-i18n="footer_privacy">Privacy</a>
        <a href="contact.html" data-i18n="nav_contact">Contact</a>
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

// ── Nav Behaviour ───────────────────────────────────────────
function initNav() {
  const navbar   = document.getElementById('navbar');
  const toggle   = document.getElementById('navToggle');
  const links    = document.getElementById('navLinks');
  const allLinks = links?.querySelectorAll('a:not(.nav-cta)') || [];

  // Scroll → add .scrolled class
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
  });

  // Hamburger toggle
  toggle?.addEventListener('click', () => {
    links?.classList.toggle('open');
  });

  // Close on link click (mobile)
  allLinks.forEach(a => {
    a.addEventListener('click', () => links?.classList.remove('open'));
  });

  // Mark active link
  const current = location.pathname.split('/').pop() || 'index.html';
  allLinks.forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ── API Helper ──────────────────────────────────────────────
// Google Apps Script redirects to script.googleusercontent.com which
// blocks CORS even with redirect:follow. The only fully reliable
// solution for a static site is JSONP — a <script> tag injection that
// bypasses CORS entirely. Both apiGet and apiPost use this approach.

async function apiGet(params) {
  return _jsonpFetch(params);
}

async function apiPost(data) {
  return _jsonpFetch(data);
}

function _jsonpFetch(params, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    // Unique callback name per request
    const cbName = '_gascb_' + Date.now() + '_' + Math.floor(Math.random() * 9999);

    // Build URL with all params + callback name
    const url = new URL(CONFIG.SCRIPT_URL);
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
    url.searchParams.set('callback', cbName);

    // Cleanup helper
    let timer;
    function cleanup() {
      clearTimeout(timer);
      delete window[cbName];
      const el = document.getElementById(cbName);
      if (el) el.parentNode.removeChild(el);
    }

    // Timeout guard
    timer = setTimeout(() => {
      cleanup();
      reject(new Error('Request timed out. Please try again.'));
    }, timeoutMs);

    // JSONP callback — Apps Script calls this with the result object
    window[cbName] = function(data) {
      cleanup();
      resolve(data);
    };

    // Inject script tag — this is what bypasses CORS
    const script = document.createElement('script');
    script.id  = cbName;
    script.src = url.toString();
    script.onerror = function() {
      cleanup();
      reject(new Error('Could not reach the server. Check your SCRIPT_URL in config.js.'));
    };
    document.body.appendChild(script);
  });
}

// ── Utility ─────────────────────────────────────────────────
function showAlert(container, msg, type = 'info') {
  const el = document.getElementById(container) || document.querySelector(container);
  if (!el) return;
  el.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function formatDate(d) {
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function formatTime(t) {
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hr   = h % 12 || 12;
  return `${hr}:${m.toString().padStart(2, '0')} ${ampm}`;
}

function formatCurrency(amount) {
  return `EGP ${Number(amount).toLocaleString('en-EG')}`;
}
