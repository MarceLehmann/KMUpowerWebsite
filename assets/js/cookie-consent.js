/**
 * GDPR Cookie Consent Banner
 * Professional implementation with accessibility features
 */
class CookieConsent {
  constructor() {
    this.cookieName = 'gdpr-cookie-consent';
    this.cookieExpiry = 365; // days
    this.init();
  }

  init() {
    // Check if consent was already given
    if (!this.hasConsent()) {
      this.showBanner();
    } else {
      this.loadAnalytics();
    }
    
    // Add event listeners for preference center
    this.setupPreferenceCenter();
  }

  hasConsent() {
    const consent = this.getCookie(this.cookieName);
    return consent !== null;
  }

  showBanner() {
    const banner = this.createBanner();
    document.body.appendChild(banner);
    
    // Focus management for accessibility
    setTimeout(() => {
      const acceptBtn = banner.querySelector('.cookie-accept');
      if (acceptBtn) acceptBtn.focus();
    }, 100);
  }

  createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'cookie-banner-title');
    banner.setAttribute('aria-describedby', 'cookie-banner-desc');
    
    banner.innerHTML = `
      <div class="cookie-banner-content">
        <div class="cookie-banner-text">
          <h3 id="cookie-banner-title">🍪 Cookie-Einstellungen</h3>
          <p id="cookie-banner-desc">
            Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. 
            Dazu gehören essentielle Cookies für die Funktionalität und optionale Cookies für Analytics und Marketing.
          </p>
        </div>
        <div class="cookie-banner-actions">
          <button class="cookie-btn cookie-customize" onclick="cookieConsent.showPreferences()">
            Einstellungen
          </button>
          <button class="cookie-btn cookie-decline" onclick="cookieConsent.decline()">
            Ablehnen
          </button>
          <button class="cookie-btn cookie-accept" onclick="cookieConsent.accept()">
            Alle akzeptieren
          </button>
        </div>
      </div>
    `;
    
    return banner;
  }

  showPreferences() {
    const modal = this.createPreferenceModal();
    document.body.appendChild(modal);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  createPreferenceModal() {
    const modal = document.createElement('div');
    modal.className = 'cookie-preferences-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'cookie-prefs-title');
    
    modal.innerHTML = `
      <div class="cookie-preferences-backdrop" onclick="cookieConsent.closePreferences()"></div>
      <div class="cookie-preferences-content">
        <div class="cookie-preferences-header">
          <h2 id="cookie-prefs-title">Cookie-Einstellungen</h2>
          <button class="cookie-close" onclick="cookieConsent.closePreferences()" aria-label="Schließen">
            ✕
          </button>
        </div>
        
        <div class="cookie-preferences-body">
          <div class="cookie-category">
            <div class="cookie-category-header">
              <h3>Essentielle Cookies</h3>
              <span class="cookie-required">Erforderlich</span>
            </div>
            <p>Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich.</p>
            <input type="checkbox" id="essential" checked disabled>
            <label for="essential">Immer aktiv</label>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category-header">
              <h3>Analytics Cookies</h3>
              <input type="checkbox" id="analytics" ${this.getCookiePreference('analytics') ? 'checked' : ''}>
            </div>
            <p>Helfen uns zu verstehen, wie Besucher mit der Website interagieren.</p>
            <label for="analytics">Analytics aktivieren</label>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category-header">
              <h3>Marketing Cookies</h3>
              <input type="checkbox" id="marketing" ${this.getCookiePreference('marketing') ? 'checked' : ''}>
            </div>
            <p>Werden verwendet, um personalisierte Werbung anzuzeigen.</p>
            <label for="marketing">Marketing aktivieren</label>
          </div>
        </div>
        
        <div class="cookie-preferences-footer">
          <button class="cookie-btn cookie-decline" onclick="cookieConsent.declineAll()">
            Alle ablehnen
          </button>
          <button class="cookie-btn cookie-save" onclick="cookieConsent.savePreferences()">
            Einstellungen speichern
          </button>
          <button class="cookie-btn cookie-accept" onclick="cookieConsent.acceptAll()">
            Alle akzeptieren
          </button>
        </div>
      </div>
    `;
    
    return modal;
  }

  accept() {
    this.setConsent({ essential: true, analytics: true, marketing: true });
    this.removeBanner();
    this.loadAnalytics();
  }

  decline() {
    this.setConsent({ essential: true, analytics: false, marketing: false });
    this.removeBanner();
  }

  acceptAll() {
    this.accept();
    this.closePreferences();
  }

  declineAll() {
    this.decline();
    this.closePreferences();
  }

  savePreferences() {
    const analytics = document.getElementById('analytics').checked;
    const marketing = document.getElementById('marketing').checked;
    
    this.setConsent({ essential: true, analytics, marketing });
    this.removeBanner();
    this.closePreferences();
    
    if (analytics) {
      this.loadAnalytics();
    }
  }

  closePreferences() {
    const modal = document.querySelector('.cookie-preferences-modal');
    if (modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  }

  setConsent(preferences) {
    const consent = {
      timestamp: new Date().toISOString(),
      preferences: preferences
    };
    
    this.setCookie(this.cookieName, JSON.stringify(consent), this.cookieExpiry);
  }

  getCookiePreference(type) {
    const consent = this.getCookie(this.cookieName);
    if (!consent) return false;
    
    try {
      const parsed = JSON.parse(consent);
      return parsed.preferences[type] || false;
    } catch (e) {
      return false;
    }
  }

  removeBanner() {
    const banner = document.querySelector('.cookie-banner');
    if (banner) {
      banner.remove();
    }
  }

  loadAnalytics() {
    if (this.getCookiePreference('analytics')) {
      // Load Google Analytics
      window.gtag = window.gtag || function(){dataLayer.push(arguments);};
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  }

  setupPreferenceCenter() {
    // Add cookie settings link to footer or menu
    const cookieLink = document.createElement('a');
    cookieLink.href = '#';
    cookieLink.textContent = 'Cookie-Einstellungen';
    cookieLink.className = 'cookie-settings-link';
    cookieLink.onclick = (e) => {
      e.preventDefault();
      this.showPreferences();
    };
    
    // Add to footer if it exists
    const footer = document.querySelector('.page__footer');
    if (footer) {
      const footerLinks = footer.querySelector('.social-icons') || footer;
      footerLinks.appendChild(cookieLink);
    }
  }

  // Cookie utilities
  setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict;Secure`;
  }

  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}

// Initialize cookie consent when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.cookieConsent = new CookieConsent();
});
