---
title: "Modern UI Components"
permalink: /modern-components/
header:
  image: /assets/images/modern-header.svg
  teaser: /assets/images/modern-teaser.svg
excerpt: "State-of-the-art UI components for modern web applications"
toc: true
toc_sticky: true
---

# Modern UI Components

Entdecken Sie unsere Sammlung modernster UI-Komponenten, die für optimale Performance, Accessibility und User Experience entwickelt wurden.

## Performance Dashboard

<div class="performance-metrics">
  <div class="metric-card metric-card--excellent">
    <div class="metric-score">100</div>
    <div class="metric-label">Performance</div>
    <div class="metric-details">Lighthouse Score</div>
  </div>
  <div class="metric-card metric-card--excellent">
    <div class="metric-score">100</div>
    <div class="metric-label">Accessibility</div>
    <div class="metric-details">WCAG 2.1 AA</div>
  </div>
  <div class="metric-card metric-card--excellent">
    <div class="metric-score">100</div>
    <div class="metric-label">Best Practices</div>
    <div class="metric-details">Modern Standards</div>
  </div>
  <div class="metric-card metric-card--excellent">
    <div class="metric-score">100</div>
    <div class="metric-label">SEO</div>
    <div class="metric-details">Search Optimized</div>
  </div>
</div>

## Interactive Elements

### Smart Loading States

<div class="loading-demos">
  <button class="btn btn--primary loading-demo-btn" data-demo="skeleton">Skeleton Loading</button>
  <button class="btn btn--primary loading-demo-btn" data-demo="spinner">Spinner Loading</button>
  <button class="btn btn--primary loading-demo-btn" data-demo="progress">Progress Loading</button>
</div>

<div id="loading-demo-area" class="demo-area">
  <div class="demo-content">
    <h4>Demo Content Area</h4>
    <p>Click a button above to see different loading states in action.</p>
  </div>
</div>

### Advanced Progress Indicators

<div class="progress-showcase">
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-title">Project Completion</span>
      <span class="progress-percentage">75%</span>
    </div>
    <div class="progress-bar advanced">
      <div class="progress-fill" style="width: 75%"></div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-title">Skills Assessment</span>
      <span class="progress-percentage">90%</span>
    </div>
    <div class="progress-bar gradient">
      <div class="progress-fill" style="width: 90%"></div>
    </div>
  </div>
  
  <div class="progress-item">
    <div class="progress-header">
      <span class="progress-title">Performance Score</span>
      <span class="progress-percentage">100%</span>
    </div>
    <div class="progress-bar animated">
      <div class="progress-fill" style="width: 100%"></div>
    </div>
  </div>
</div>

### Interactive Cards

<div class="card-grid">
  <div class="interactive-card" tabindex="0" role="button" aria-label="Feature card">
    <div class="card-icon">
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z"/>
      </svg>
    </div>
    <h4>Real-time Communication</h4>
    <p>Advanced messaging system with instant notifications and typing indicators.</p>
    <div class="card-stats">
      <span class="stat-item">
        <strong>99.9%</strong>
        <small>Uptime</small>
      </span>
      <span class="stat-item">
        <strong>&lt;50ms</strong>
        <small>Latency</small>
      </span>
    </div>
  </div>
  
  <div class="interactive-card" tabindex="0" role="button" aria-label="Analytics card">
    <div class="card-icon">
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path fill="currentColor" d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21Z"/>
      </svg>
    </div>
    <h4>Advanced Analytics</h4>
    <p>Comprehensive data visualization with real-time insights and predictive analytics.</p>
    <div class="card-stats">
      <span class="stat-item">
        <strong>1M+</strong>
        <small>Data Points</small>
      </span>
      <span class="stat-item">
        <strong>Real-time</strong>
        <small>Updates</small>
      </span>
    </div>
  </div>
  
  <div class="interactive-card" tabindex="0" role="button" aria-label="Security card">
    <div class="card-icon">
      <svg viewBox="0 0 24 24" width="32" height="32">
        <path fill="currentColor" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
      </svg>
    </div>
    <h4>Enterprise Security</h4>
    <p>Military-grade encryption with advanced threat detection and prevention systems.</p>
    <div class="card-stats">
      <span class="stat-item">
        <strong>256-bit</strong>
        <small>Encryption</small>
      </span>
      <span class="stat-item">
        <strong>0</strong>
        <small>Breaches</small>
      </span>
    </div>
  </div>
</div>

## Form Components

### Smart Form Validation

<form class="smart-form" novalidate>
  <div class="form-section">
    <h4>Personal Information</h4>
    
    <div class="form-row">
      <div class="form-group">
        <label for="smartFirstName">First Name *</label>
        <input type="text" id="smartFirstName" name="firstName" required 
               data-validate="required,minLength:2" 
               aria-describedby="smartFirstNameHelp">
        <div class="validation-message" id="smartFirstNameHelp"></div>
      </div>
      
      <div class="form-group">
        <label for="smartLastName">Last Name *</label>
        <input type="text" id="smartLastName" name="lastName" required 
               data-validate="required,minLength:2">
        <div class="validation-message"></div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="smartEmail">Email Address *</label>
      <input type="email" id="smartEmail" name="email" required 
             data-validate="required,email" 
             autocomplete="email">
      <div class="validation-message"></div>
      <div class="field-strength email-strength"></div>
    </div>
    
    <div class="form-group">
      <label for="smartPassword">Password *</label>
      <div class="password-field">
        <input type="password" id="smartPassword" name="password" required 
               data-validate="required,password" 
               autocomplete="new-password">
        <button type="button" class="password-toggle" aria-label="Toggle password visibility">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
          </svg>
        </button>
      </div>
      <div class="validation-message"></div>
      <div class="field-strength password-strength">
        <div class="strength-meter">
          <div class="strength-fill"></div>
        </div>
        <div class="strength-text">Password Strength</div>
      </div>
    </div>
  </div>
  
  <div class="form-section">
    <h4>Preferences</h4>
    
    <div class="form-group">
      <label for="smartCountry">Country</label>
      <select id="smartCountry" name="country" data-validate="required">
        <option value="">Select your country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="de">Germany</option>
        <option value="fr">France</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
        <option value="jp">Japan</option>
      </select>
      <div class="validation-message"></div>
    </div>
    
    <fieldset class="checkbox-group">
      <legend>Notification Preferences</legend>
      <div class="checkbox-item">
        <input type="checkbox" id="notifyEmail" name="notifications[]" value="email" checked>
        <label for="notifyEmail">Email notifications</label>
      </div>
      <div class="checkbox-item">
        <input type="checkbox" id="notifySMS" name="notifications[]" value="sms">
        <label for="notifySMS">SMS notifications</label>
      </div>
      <div class="checkbox-item">
        <input type="checkbox" id="notifyPush" name="notifications[]" value="push" checked>
        <label for="notifyPush">Push notifications</label>
      </div>
    </fieldset>
  </div>
  
  <div class="form-actions">
    <button type="submit" class="btn btn--primary btn--large">
      <span class="btn-text">Create Account</span>
      <span class="btn-spinner"></span>
    </button>
    <button type="reset" class="btn btn--secondary">Reset</button>
  </div>
</form>

## Data Visualization

### Live Statistics

<div class="stats-dashboard">
  <div class="stat-widget" data-value="99.9" data-suffix="%">
    <div class="stat-icon">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
    <div class="stat-content">
      <div class="stat-value">0</div>
      <div class="stat-label">Uptime</div>
    </div>
  </div>
  
  <div class="stat-widget" data-value="1.2" data-suffix="M">
    <div class="stat-icon">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    </div>
    <div class="stat-content">
      <div class="stat-value">0</div>
      <div class="stat-label">Active Users</div>
    </div>
  </div>
  
  <div class="stat-widget" data-value="45" data-suffix="ms">
    <div class="stat-icon">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
      </svg>
    </div>
    <div class="stat-content">
      <div class="stat-value">0</div>
      <div class="stat-label">Response Time</div>
    </div>
  </div>
  
  <div class="stat-widget" data-value="150" data-suffix="K">
    <div class="stat-icon">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
      </svg>
    </div>
    <div class="stat-content">
      <div class="stat-value">0</div>
      <div class="stat-label">API Calls/min</div>
    </div>
  </div>
</div>

## Interactive Notifications

<div class="notification-demo">
  <h4>Notification System</h4>
  <div class="notification-controls">
    <button class="btn btn--small btn--primary" data-notification="success">Success Message</button>
    <button class="btn btn--small btn--info" data-notification="info">Info Message</button>
    <button class="btn btn--small btn--warning" data-notification="warning">Warning Message</button>
    <button class="btn btn--small btn--danger" data-notification="error">Error Message</button>
  </div>
</div>

<div id="notification-container" class="notification-container"></div>

## Accessibility Features

### Screen Reader Support
- **ARIA Labels:** All interactive elements have descriptive ARIA labels
- **Semantic HTML:** Proper heading hierarchy and semantic structure
- **Keyboard Navigation:** Full keyboard accessibility for all components
- **Focus Management:** Visible focus indicators and logical tab order

### Performance Optimizations
- **Lazy Loading:** Images and components load only when needed
- **Code Splitting:** JavaScript bundles are optimized and split
- **Resource Hints:** Preload and prefetch for critical resources
- **Service Worker:** Offline support and caching strategies

### Modern Web Standards
- **Progressive Enhancement:** Works without JavaScript
- **Responsive Design:** Mobile-first approach with fluid layouts
- **Dark Mode:** Automatic dark mode detection and support
- **Reduced Motion:** Respects user motion preferences

<style>
/* Modern UI Components Specific Styles */

.performance-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.metric-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--bg-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  border: 2px solid;
  transition: var(--transition);
}

.metric-card--excellent {
  border-color: #52c41a;
  background: linear-gradient(135deg, rgba(82, 196, 26, 0.1) 0%, rgba(115, 209, 61, 0.05) 100%);
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.metric-score {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  color: #52c41a;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 1.1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--text-color);
  margin-bottom: 0.25rem;
}

.metric-details {
  font-size: 0.9rem;
  color: var(--text-light);
}

.loading-demos {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.demo-area {
  background: var(--bg-light);
  border: 2px dashed var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  margin: 1rem 0;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: var(--transition);
}

.demo-content h4 {
  margin: 0 0 1rem 0;
  color: var(--text-color);
}

.demo-content p {
  margin: 0;
  color: var(--text-light);
}

.progress-showcase {
  margin: 2rem 0;
}

.progress-item {
  margin-bottom: 2rem;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.progress-title {
  font-weight: var(--font-weight-semibold);
  color: var(--text-color);
}

.progress-percentage {
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  font-size: 0.9rem;
}

.progress-bar.advanced {
  height: 12px;
  background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 100%);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

.progress-bar.gradient .progress-fill {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.progress-bar.animated .progress-fill {
  background: linear-gradient(135deg, #52c41a 0%, #73d13d 100%);
  position: relative;
  overflow: hidden;
}

.progress-bar.animated .progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%);
  animation: shimmer 2s infinite;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.interactive-card {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.interactive-card:hover,
.interactive-card:focus {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
  border-color: var(--primary-color);
  outline: none;
}

.interactive-card:focus {
  box-shadow: var(--shadow-medium), 0 0 0 2px var(--primary-color);
}

.card-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
}

.interactive-card h4 {
  margin: 0 0 1rem 0;
  color: var(--text-color);
  font-weight: var(--font-weight-semibold);
}

.interactive-card p {
  margin: 0 0 1.5rem 0;
  color: var(--text-light);
  line-height: 1.6;
}

.card-stats {
  display: flex;
  gap: 2rem;
}

.card-stats .stat-item {
  text-align: center;
}

.card-stats .stat-item strong {
  display: block;
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  font-size: 1.1rem;
}

.card-stats .stat-item small {
  color: var(--text-light);
  font-size: 0.8rem;
}

.smart-form {
  max-width: 600px;
  margin: 2rem auto;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-light);
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.form-section h4 {
  margin: 0 0 1.5rem 0;
  color: var(--text-color);
  font-weight: var(--font-weight-semibold);
  font-size: 1.2rem;
}

.password-field {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  transition: var(--transition);
}

.password-toggle:hover {
  color: var(--primary-color);
}

.field-strength {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

.strength-meter {
  height: 4px;
  background: var(--border-color);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.strength-fill {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.strength-text {
  color: var(--text-light);
  font-size: 0.8rem;
}

.checkbox-group {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-small);
  padding: 1.5rem;
  margin: 1rem 0;
}

.checkbox-group legend {
  font-weight: var(--font-weight-semibold);
  color: var(--text-color);
  padding: 0 0.5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.75rem 0;
}

.checkbox-item input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.stats-dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.stat-widget {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--transition);
}

.stat-widget:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-light);
}

.stat-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-widget .stat-value {
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-widget .stat-label {
  font-size: 0.9rem;
  color: var(--text-light);
  font-weight: var(--font-weight-medium);
}

.notification-demo {
  background: var(--bg-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.notification-demo h4 {
  margin: 0 0 1.5rem 0;
}

.notification-controls {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 400px;
}

.notification {
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1rem 1.5rem;
  margin-bottom: 0.75rem;
  box-shadow: var(--shadow-medium);
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: translateX(100%);
  animation: slideIn 0.3s ease-out forwards;
  position: relative;
}

.notification--success { border-left: 4px solid #52c41a; }
.notification--info { border-left: 4px solid #1890ff; }
.notification--warning { border-left: 4px solid #fa8c16; }
.notification--error { border-left: 4px solid #f5222d; }

.notification-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.notification-content {
  flex: 1;
}

.notification-title {
  font-weight: var(--font-weight-semibold);
  margin: 0 0 0.25rem 0;
  font-size: 0.95rem;
}

.notification-message {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-light);
}

.notification-close {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  padding: 0.25rem;
  border-radius: var(--border-radius-small);
  transition: var(--transition);
}

.notification-close:hover {
  background: var(--bg-light);
  color: var(--text-color);
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes slideOut {
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
}

.notification.removing {
  animation: slideOut 0.3s ease-in forwards;
}

/* Loading states */
.skeleton-loading {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: var(--border-radius-small);
}

.skeleton-text {
  height: 1rem;
  margin-bottom: 0.75rem;
}

.skeleton-text:last-child {
  width: 60%;
  margin-bottom: 0;
}

.spinner-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.progress-loading {
  width: 100%;
}

.progress-loading .progress-bar {
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-loading .progress-fill {
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  border-radius: 4px;
  animation: progressLoad 3s ease-in-out infinite;
}

@keyframes progressLoad {
  0% { width: 0%; }
  50% { width: 75%; }
  100% { width: 100%; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .performance-metrics,
  .stats-dashboard {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .card-grid {
    grid-template-columns: 1fr;
  }
  
  .smart-form {
    margin: 1rem;
    padding: 1.5rem;
  }
  
  .notification-container {
    left: 20px;
    right: 20px;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .performance-metrics,
  .stats-dashboard {
    grid-template-columns: 1fr;
  }
  
  .loading-demos {
    flex-direction: column;
  }
  
  .notification-controls {
    flex-direction: column;
    align-items: center;
  }
  
  .notification-controls .btn {
    width: 100%;
    max-width: 200px;
  }
}
</style>

<script>
// Modern UI Components JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initializeLoadingDemos();
  initializeSmartForm();
  initializeAnimatedStats();
  initializeNotifications();
  initializeAccessibility();
});

function initializeLoadingDemos() {
  const buttons = document.querySelectorAll('.loading-demo-btn');
  const demoArea = document.getElementById('loading-demo-area');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const demo = this.dataset.demo;
      showLoadingDemo(demo, demoArea);
    });
  });
}

function showLoadingDemo(type, container) {
  const demos = {
    skeleton: `
      <div class="skeleton-loading skeleton-text" style="width: 80%;"></div>
      <div class="skeleton-loading skeleton-text" style="width: 60%;"></div>
      <div class="skeleton-loading skeleton-text" style="width: 90%;"></div>
      <div class="skeleton-loading skeleton-text"></div>
    `,
    spinner: `
      <div class="spinner-loading">
        <div class="spinner"></div>
        <span>Loading content...</span>
      </div>
    `,
    progress: `
      <div class="progress-loading">
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <p>Loading: <span id="progress-text">0%</span></p>
      </div>
    `
  };
  
  container.innerHTML = demos[type];
  
  if (type === 'progress') {
    animateProgress();
  }
  
  // Reset after 3 seconds
  setTimeout(() => {
    container.innerHTML = `
      <div class="demo-content">
        <h4>Demo Content Area</h4>
        <p>Click a button above to see different loading states in action.</p>
      </div>
    `;
  }, 3000);
}

function animateProgress() {
  const progressText = document.getElementById('progress-text');
  let progress = 0;
  
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    progressText.textContent = Math.round(progress) + '%';
  }, 200);
}

function initializeSmartForm() {
  const form = document.querySelector('.smart-form');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input[data-validate]');
  const passwordInput = form.querySelector('#smartPassword');
  const passwordToggle = form.querySelector('.password-toggle');
  
  // Real-time validation
  inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('blur', () => validateField(input));
  });
  
  // Password strength indicator
  if (passwordInput) {
    passwordInput.addEventListener('input', updatePasswordStrength);
  }
  
  // Password toggle
  if (passwordToggle) {
    passwordToggle.addEventListener('click', togglePassword);
  }
  
  // Form submission
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      simulateFormSubmission();
    }
  });
}

function validateField(input) {
  const rules = input.dataset.validate.split(',');
  const value = input.value.trim();
  const messageEl = input.parentNode.querySelector('.validation-message');
  
  for (let rule of rules) {
    const [type, param] = rule.split(':');
    
    switch (type) {
      case 'required':
        if (!value) {
          showValidationError(input, messageEl, 'This field is required');
          return false;
        }
        break;
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          showValidationError(input, messageEl, 'Please enter a valid email address');
          return false;
        }
        break;
      case 'minLength':
        if (value && value.length < parseInt(param)) {
          showValidationError(input, messageEl, `Minimum ${param} characters required`);
          return false;
        }
        break;
      case 'password':
        if (value && value.length < 8) {
          showValidationError(input, messageEl, 'Password must be at least 8 characters');
          return false;
        }
        break;
    }
  }
  
  showValidationSuccess(input, messageEl);
  return true;
}

function showValidationError(input, messageEl, message) {
  input.classList.add('error');
  input.classList.remove('success');
  if (messageEl) {
    messageEl.textContent = message;
    messageEl.style.display = 'block';
    messageEl.style.color = 'var(--danger-color)';
  }
}

function showValidationSuccess(input, messageEl) {
  input.classList.remove('error');
  input.classList.add('success');
  if (messageEl) {
    messageEl.style.display = 'none';
  }
}

function updatePasswordStrength() {
  const password = document.getElementById('smartPassword').value;
  const strengthFill = document.querySelector('.password-strength .strength-fill');
  const strengthText = document.querySelector('.password-strength .strength-text');
  
  const score = calculatePasswordStrength(password);
  const percentage = (score / 4) * 100;
  
  strengthFill.style.width = percentage + '%';
  
  if (score === 0) {
    strengthFill.style.background = '#f5222d';
    strengthText.textContent = 'Very Weak';
  } else if (score === 1) {
    strengthFill.style.background = '#fa8c16';
    strengthText.textContent = 'Weak';
  } else if (score === 2) {
    strengthFill.style.background = '#fadb14';
    strengthText.textContent = 'Fair';
  } else if (score === 3) {
    strengthFill.style.background = '#52c41a';
    strengthText.textContent = 'Good';
  } else {
    strengthFill.style.background = '#52c41a';
    strengthText.textContent = 'Strong';
  }
}

function calculatePasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return Math.min(score, 4);
}

function togglePassword() {
  const passwordInput = document.getElementById('smartPassword');
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
}

function simulateFormSubmission() {
  const submitBtn = document.querySelector('.smart-form .btn--primary');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnSpinner = submitBtn.querySelector('.btn-spinner');
  
  submitBtn.classList.add('loading');
  btnText.textContent = 'Creating Account...';
  btnSpinner.style.display = 'inline-block';
  
  setTimeout(() => {
    showNotification('success', 'Account Created!', 'Your account has been successfully created.');
    submitBtn.classList.remove('loading');
    btnText.textContent = 'Create Account';
    btnSpinner.style.display = 'none';
  }, 2000);
}

function initializeAnimatedStats() {
  const statWidgets = document.querySelectorAll('.stat-widget');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStatValue(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
  
  statWidgets.forEach(widget => observer.observe(widget));
}

function animateStatValue(widget) {
  const valueEl = widget.querySelector('.stat-value');
  const targetValue = parseFloat(widget.dataset.value);
  const suffix = widget.dataset.suffix || '';
  
  let currentValue = 0;
  const increment = targetValue / 60; // 60 frames for 1 second at 60fps
  
  function updateValue() {
    currentValue += increment;
    if (currentValue >= targetValue) {
      currentValue = targetValue;
      valueEl.textContent = formatStatValue(currentValue) + suffix;
      return;
    }
    
    valueEl.textContent = formatStatValue(currentValue) + suffix;
    requestAnimationFrame(updateValue);
  }
  
  updateValue();
}

function formatStatValue(value) {
  if (value < 1) {
    return value.toFixed(1);
  } else if (value < 100) {
    return Math.round(value);
  } else {
    return Math.round(value);
  }
}

function initializeNotifications() {
  const buttons = document.querySelectorAll('[data-notification]');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const type = this.dataset.notification;
      const messages = {
        success: { title: 'Success!', message: 'Operation completed successfully.' },
        info: { title: 'Information', message: 'Here is some useful information for you.' },
        warning: { title: 'Warning', message: 'Please review your input before proceeding.' },
        error: { title: 'Error', message: 'Something went wrong. Please try again.' }
      };
      
      const { title, message } = messages[type];
      showNotification(type, title, message);
    });
  });
}

function showNotification(type, title, message) {
  const container = document.getElementById('notification-container');
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  
  const icons = {
    success: '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',
    info: '<path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/>',
    warning: '<path fill="currentColor" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>',
    error: '<path fill="currentColor" d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"/>'
  };
  
  notification.innerHTML = `
    <div class="notification-icon">
      <svg viewBox="0 0 24 24" width="24" height="24">
        ${icons[type]}
      </svg>
    </div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close" aria-label="Close notification">
      <svg viewBox="0 0 24 24" width="20" height="20">
        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
      </svg>
    </button>
  `;
  
  container.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification);
  }, 5000);
  
  // Close button
  notification.querySelector('.notification-close').addEventListener('click', () => {
    removeNotification(notification);
  });
}

function removeNotification(notification) {
  notification.classList.add('removing');
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

function initializeAccessibility() {
  // Keyboard navigation for cards
  const cards = document.querySelectorAll('.interactive-card');
  cards.forEach(card => {
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
  
  // Focus management
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // Scroll animations with reduced motion support
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    initializeScrollAnimations();
  }
}

function initializeScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        entry.target.style.willChange = 'auto';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    el.style.willChange = 'transform, opacity';
    observer.observe(el);
  });
}
</script>
