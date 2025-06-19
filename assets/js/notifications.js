/**
 * Professional Notification System
 * Toast notifications with accessibility and animation support
 */
class NotificationSystem {
  constructor() {
    this.container = null;
    this.notifications = [];
    this.maxNotifications = 5;
    this.defaultDuration = 5000;
    this.init();
  }

  init() {
    this.createContainer();
    this.setupKeyboardNavigation();
  }

  createContainer() {
    if (this.container) return;

    this.container = document.createElement('div');
    this.container.className = 'notification-container';
    this.container.setAttribute('aria-live', 'polite');
    this.container.setAttribute('aria-label', 'Benachrichtigungen');
    document.body.appendChild(this.container);
  }

  show(message, type = 'info', options = {}) {
    const notification = this.createNotification(message, type, options);
    
    // Remove oldest if at maximum
    if (this.notifications.length >= this.maxNotifications) {
      this.remove(this.notifications[0].id);
    }

    this.notifications.push(notification);
    this.container.appendChild(notification.element);

    // Trigger animation
    requestAnimationFrame(() => {
      notification.element.classList.add('notification-show');
    });

    // Auto-remove after duration
    if (options.duration !== 0) {
      const duration = options.duration || this.defaultDuration;
      notification.timeout = setTimeout(() => {
        this.remove(notification.id);
      }, duration);
    }

    // Focus management for screen readers
    if (type === 'error' || options.important) {
      notification.element.focus();
    }

    return notification.id;
  }

  createNotification(message, type, options) {
    const id = 'notification-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    
    const element = document.createElement('div');
    element.className = `notification notification-${type}`;
    element.setAttribute('role', type === 'error' ? 'alert' : 'status');
    element.setAttribute('id', id);
    element.setAttribute('tabindex', '-1');

    const icon = this.getIcon(type);
    const actionButton = options.action ? 
      `<button class="notification-action" onclick="this.closest('.notification').dispatchEvent(new CustomEvent('action'))">${options.action.text}</button>` : '';
    
    element.innerHTML = `
      <div class="notification-content">
        <div class="notification-icon">${icon}</div>
        <div class="notification-message">
          ${options.title ? `<div class="notification-title">${options.title}</div>` : ''}
          <div class="notification-text">${message}</div>
        </div>
        ${actionButton}
        <button class="notification-close" onclick="notificationSystem.remove('${id}')" aria-label="Benachrichtigung schließen">
          ✕
        </button>
      </div>
      ${options.progress ? '<div class="notification-progress"><div class="notification-progress-bar"></div></div>' : ''}
    `;

    // Add action handler
    if (options.action) {
      element.addEventListener('action', options.action.handler);
    }

    // Add progress animation
    if (options.progress && options.duration !== 0) {
      const progressBar = element.querySelector('.notification-progress-bar');
      const duration = options.duration || this.defaultDuration;
      progressBar.style.animationDuration = `${duration}ms`;
    }

    return { id, element, type, timeout: null };
  }

  getIcon(type) {
    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️',
      loading: '⏳'
    };
    return icons[type] || icons.info;
  }

  remove(id) {
    const notification = this.notifications.find(n => n.id === id);
    if (!notification) return;

    // Clear timeout
    if (notification.timeout) {
      clearTimeout(notification.timeout);
    }

    // Animation
    notification.element.classList.add('notification-hide');
    
    setTimeout(() => {
      if (notification.element.parentNode) {
        notification.element.parentNode.removeChild(notification.element);
      }
      this.notifications = this.notifications.filter(n => n.id !== id);
    }, 300);
  }

  removeAll() {
    this.notifications.forEach(notification => {
      this.remove(notification.id);
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close focused notification or all notifications
        const focusedNotification = document.activeElement.closest('.notification');
        if (focusedNotification) {
          const id = focusedNotification.getAttribute('id');
          this.remove(id);
        } else if (this.notifications.length > 0) {
          this.removeAll();
        }
      }
    });
  }

  // Convenience methods
  success(message, options = {}) {
    return this.show(message, 'success', options);
  }

  error(message, options = {}) {
    return this.show(message, 'error', { ...options, important: true });
  }

  warning(message, options = {}) {
    return this.show(message, 'warning', options);
  }

  info(message, options = {}) {
    return this.show(message, 'info', options);
  }

  loading(message, options = {}) {
    return this.show(message, 'loading', { ...options, duration: 0 });
  }
}

// Notification helper functions
window.showNotification = function(message, type = 'info', options = {}) {
  if (!window.notificationSystem) {
    window.notificationSystem = new NotificationSystem();
  }
  return window.notificationSystem.show(message, type, options);
};

// Form validation helper
window.showFormValidation = function(form, errors) {
  if (!errors || errors.length === 0) return;
  
  const errorMessages = errors.map(error => `• ${error}`).join('<br>');
  showNotification(errorMessages, 'error', {
    title: 'Bitte korrigieren Sie die folgenden Fehler:',
    duration: 8000
  });
};

// Newsletter signup feedback
window.handleNewsletterSignup = function(form, event) {
  event.preventDefault();
  
  const email = form.querySelector('input[type="email"]').value;
  const errors = [];
  
  if (!email) {
    errors.push('E-Mail-Adresse ist erforderlich');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Bitte geben Sie eine gültige E-Mail-Adresse ein');
  }
  
  if (errors.length > 0) {
    showFormValidation(form, errors);
    return;
  }
  
  // Show loading
  const loadingId = showNotification('Newsletter-Anmeldung wird verarbeitet...', 'loading');
  
  // Simulate API call
  setTimeout(() => {
    window.notificationSystem.remove(loadingId);
    showNotification('Vielen Dank! Sie haben sich erfolgreich für unseren Newsletter angemeldet.', 'success', {
      duration: 7000,
      action: {
        text: 'Einstellungen',
        handler: () => {
          showNotification('Newsletter-Einstellungen werden geladen...', 'info');
        }
      }
    });
    form.reset();
  }, 2000);
};

// Contact form handler
window.handleContactForm = function(form, event) {
  event.preventDefault();
  
  const formData = new FormData(form);
  const errors = [];
  
  if (!formData.get('name')) errors.push('Name ist erforderlich');
  if (!formData.get('email')) errors.push('E-Mail-Adresse ist erforderlich');
  if (!formData.get('message')) errors.push('Nachricht ist erforderlich');
  
  if (errors.length > 0) {
    showFormValidation(form, errors);
    return;
  }
  
  const loadingId = showNotification('Nachricht wird gesendet...', 'loading');
  
  setTimeout(() => {
    window.notificationSystem.remove(loadingId);
    showNotification('Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen!', 'success', {
      duration: 8000
    });
    form.reset();
  }, 2500);
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  window.notificationSystem = new NotificationSystem();
  
  // Demo notifications for showcase
  setTimeout(() => {
    showNotification('Willkommen auf unserer Showcase-Website!', 'info', {
      title: '👋 Hallo!',
      duration: 6000
    });
  }, 1000);
});
