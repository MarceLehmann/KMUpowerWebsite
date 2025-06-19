---
layout: single
title: "Fluent Design 2 Showcase"
permalink: /fluent-design/
excerpt: "Microsoft Fluent Design 2 - Modernes Design-System mit Acrylic, Depth, Motion und Material"
header:
  image: /assets/images/fluent-header.svg
  teaser: /assets/images/fluent-teaser.svg
sidebar:
  nav: "main"
toc: true
toc_sticky: true
---

<div class="fluent-design-page">
  <div class="fluent-hero">
    <div class="fluent-hero-content">
      <h1 class="fluent-title">✨ Fluent Design 2</h1>
      <p class="fluent-subtitle">Microsofts modernes Design-System mit natürlichen Interaktionen</p>
      <div class="fluent-hero-cards">
        <div class="fluent-card acrylic">
          <div class="fluent-icon">🎨</div>
          <h3>Acrylic Material</h3>
          <p>Translucent surfaces that let environmental context through</p>
        </div>
        <div class="fluent-card depth">
          <div class="fluent-icon">📐</div>
          <h3>Depth & Layers</h3>
          <p>Z-depth creates hierarchy and focus</p>
        </div>
        <div class="fluent-card motion">
          <div class="fluent-icon">🌊</div>
          <h3>Natural Motion</h3>
          <p>Smooth, purposeful animations</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation Pills -->
  <div class="fluent-navigation">
    <div class="fluent-nav-container">
      <button class="fluent-nav-item active" onclick="showFluentSection('components')">
        <span class="fluent-nav-icon">🧩</span>
        Components
      </button>
      <button class="fluent-nav-item" onclick="showFluentSection('typography')">
        <span class="fluent-nav-icon">📝</span>
        Typography
      </button>
      <button class="fluent-nav-item" onclick="showFluentSection('controls')">
        <span class="fluent-nav-icon">🎛️</span>
        Controls
      </button>
      <button class="fluent-nav-item" onclick="showFluentSection('layout')">
        <span class="fluent-nav-icon">📋</span>
        Layout
      </button>
    </div>
  </div>

  <!-- Components Section -->
  <div id="fluent-components" class="fluent-section active">
    <div class="fluent-container">
      <h2 class="fluent-section-title">🧩 Fluent Components</h2>
      
      <!-- Command Bar -->
      <div class="fluent-component-group">
        <h3>Command Bar</h3>
        <div class="fluent-command-bar">
          <div class="fluent-command-group">
            <button class="fluent-command-btn primary">
              <span class="fluent-btn-icon">💾</span>
              Save
            </button>
            <button class="fluent-command-btn">
              <span class="fluent-btn-icon">📤</span>
              Share
            </button>
            <button class="fluent-command-btn">
              <span class="fluent-btn-icon">✂️</span>
              Cut
            </button>
          </div>
          <div class="fluent-command-group">
            <button class="fluent-command-btn">
              <span class="fluent-btn-icon">⚙️</span>
              Settings
            </button>
          </div>
        </div>
      </div>

      <!-- Cards Grid -->
      <div class="fluent-component-group">
        <h3>Information Cards</h3>
        <div class="fluent-cards-grid">
          <div class="fluent-info-card">
            <div class="fluent-card-header">
              <div class="fluent-card-icon">📊</div>
              <div class="fluent-card-title">Analytics</div>
              <button class="fluent-card-menu">⋯</button>
            </div>
            <div class="fluent-card-content">
              <div class="fluent-metric">
                <div class="fluent-metric-value">2,847</div>
                <div class="fluent-metric-label">Active Users</div>
              </div>
              <div class="fluent-progress-ring">
                <svg width="60" height="60">
                  <circle cx="30" cy="30" r="25" stroke="#e1e1e1" stroke-width="4" fill="none"/>
                  <circle cx="30" cy="30" r="25" stroke="#0078d4" stroke-width="4" fill="none" 
                          stroke-dasharray="157" stroke-dashoffset="47" stroke-linecap="round"/>
                </svg>
                <div class="fluent-progress-text">70%</div>
              </div>
            </div>
          </div>

          <div class="fluent-info-card">
            <div class="fluent-card-header">
              <div class="fluent-card-icon">💰</div>
              <div class="fluent-card-title">Revenue</div>
              <button class="fluent-card-menu">⋯</button>
            </div>
            <div class="fluent-card-content">
              <div class="fluent-metric">
                <div class="fluent-metric-value">€125K</div>
                <div class="fluent-metric-label">This Month</div>
              </div>
              <div class="fluent-chart">
                <div class="fluent-chart-bar" style="height: 20%"></div>
                <div class="fluent-chart-bar" style="height: 45%"></div>
                <div class="fluent-chart-bar" style="height: 70%"></div>
                <div class="fluent-chart-bar" style="height: 35%"></div>
                <div class="fluent-chart-bar" style="height: 85%"></div>
              </div>
            </div>
          </div>

          <div class="fluent-info-card">
            <div class="fluent-card-header">
              <div class="fluent-card-icon">👥</div>
              <div class="fluent-card-title">Team</div>
              <button class="fluent-card-menu">⋯</button>
            </div>
            <div class="fluent-card-content">
              <div class="fluent-people-list">
                <div class="fluent-person">
                  <div class="fluent-avatar">MS</div>
                  <div class="fluent-person-info">
                    <div class="fluent-person-name">Max Schmidt</div>
                    <div class="fluent-person-status">Available</div>
                  </div>
                </div>
                <div class="fluent-person">
                  <div class="fluent-avatar">AK</div>
                  <div class="fluent-person-info">
                    <div class="fluent-person-name">Anna Klein</div>
                    <div class="fluent-person-status">In Meeting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pivot Control -->
      <div class="fluent-component-group">
        <h3>Pivot Navigation</h3>
        <div class="fluent-pivot">
          <button class="fluent-pivot-item active">Overview</button>
          <button class="fluent-pivot-item">Details</button>
          <button class="fluent-pivot-item">Settings</button>
          <button class="fluent-pivot-item">History</button>
        </div>
        <div class="fluent-pivot-content">
          <p>Pivot controls provide a quick way to navigate between related views or datasets.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Typography Section -->
  <div id="fluent-typography" class="fluent-section">
    <div class="fluent-container">
      <h2 class="fluent-section-title">📝 Fluent Typography</h2>
      
      <div class="fluent-type-scale">
        <div class="fluent-type-sample">
          <div class="fluent-type-display">Display</div>
          <div class="fluent-type-meta">68px / Bold / Segoe UI Variable</div>
        </div>
        <div class="fluent-type-sample">
          <div class="fluent-type-title-large">Title Large</div>
          <div class="fluent-type-meta">40px / Semibold / Segoe UI Variable</div>
        </div>
        <div class="fluent-type-sample">
          <div class="fluent-type-title">Title</div>
          <div class="fluent-type-meta">28px / Semibold / Segoe UI Variable</div>
        </div>
        <div class="fluent-type-sample">
          <div class="fluent-type-subtitle">Subtitle</div>
          <div class="fluent-type-meta">20px / Semibold / Segoe UI Variable</div>
        </div>
        <div class="fluent-type-sample">
          <div class="fluent-type-body-large">Body Large</div>
          <div class="fluent-type-meta">18px / Regular / Segoe UI Variable</div>
        </div>
        <div class="fluent-type-sample">
          <div class="fluent-type-body">Body</div>
          <div class="fluent-type-meta">14px / Regular / Segoe UI Variable</div>
        </div>
        <div class="fluent-type-sample">
          <div class="fluent-type-caption">Caption</div>
          <div class="fluent-type-meta">12px / Regular / Segoe UI Variable</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Controls Section -->
  <div id="fluent-controls" class="fluent-section">
    <div class="fluent-container">
      <h2 class="fluent-section-title">🎛️ Fluent Controls</h2>
      
      <!-- Form Controls -->
      <div class="fluent-form-group">
        <h3>Input Controls</h3>
        <div class="fluent-form-row">
          <div class="fluent-form-field">
            <label class="fluent-label">Text Input</label>
            <input type="text" class="fluent-input" placeholder="Enter text here">
          </div>
          <div class="fluent-form-field">
            <label class="fluent-label">Search Box</label>
            <div class="fluent-search-box">
              <input type="search" placeholder="Search..." class="fluent-search-input">
              <button class="fluent-search-btn">🔍</button>
            </div>
          </div>
        </div>
        
        <div class="fluent-form-row">
          <div class="fluent-form-field">
            <label class="fluent-label">Dropdown</label>
            <select class="fluent-dropdown">
              <option>Choose an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
          <div class="fluent-form-field">
            <label class="fluent-label">Number Spinner</label>
            <div class="fluent-spinner">
              <input type="number" value="5" class="fluent-spinner-input">
              <div class="fluent-spinner-buttons">
                <button class="fluent-spinner-btn">▲</button>
                <button class="fluent-spinner-btn">▼</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Buttons -->
      <div class="fluent-form-group">
        <h3>Button Styles</h3>
        <div class="fluent-button-group">
          <button class="fluent-btn fluent-btn-primary">Primary</button>
          <button class="fluent-btn fluent-btn-secondary">Secondary</button>
          <button class="fluent-btn fluent-btn-outline">Outline</button>
          <button class="fluent-btn fluent-btn-subtle">Subtle</button>
          <button class="fluent-btn" disabled>Disabled</button>
        </div>
      </div>

      <!-- Toggle Controls -->
      <div class="fluent-form-group">
        <h3>Toggle Controls</h3>
        <div class="fluent-toggles">
          <div class="fluent-toggle-group">
            <label class="fluent-toggle">
              <input type="checkbox" checked>
              <span class="fluent-toggle-slider"></span>
              <span class="fluent-toggle-label">Enable notifications</span>
            </label>
          </div>
          <div class="fluent-toggle-group">
            <label class="fluent-toggle">
              <input type="checkbox">
              <span class="fluent-toggle-slider"></span>
              <span class="fluent-toggle-label">Dark mode</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Layout Section -->
  <div id="fluent-layout" class="fluent-section">
    <div class="fluent-container">
      <h2 class="fluent-section-title">📋 Fluent Layouts</h2>
      
      <!-- Split View -->
      <div class="fluent-layout-demo">
        <h3>Split View Layout</h3>
        <div class="fluent-split-view">
          <div class="fluent-split-pane">
            <div class="fluent-split-header">Navigation</div>
            <div class="fluent-split-content">
              <div class="fluent-nav-list">
                <div class="fluent-nav-item">📊 Dashboard</div>
                <div class="fluent-nav-item active">📈 Analytics</div>
                <div class="fluent-nav-item">👥 Users</div>
                <div class="fluent-nav-item">⚙️ Settings</div>
              </div>
            </div>
          </div>
          <div class="fluent-split-pane main">
            <div class="fluent-split-header">Content Area</div>
            <div class="fluent-split-content">
              <p>This is the main content area of the split view layout.</p>
              <div class="fluent-content-cards">
                <div class="fluent-content-card">
                  <h4>Recent Activity</h4>
                  <p>Latest updates and changes</p>
                </div>
                <div class="fluent-content-card">
                  <h4>Quick Actions</h4>
                  <p>Frequently used functions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Fluent CTA -->
  <div class="fluent-cta">
    <div class="fluent-cta-content">
      <h2>🚀 Erleben Sie Fluent Design</h2>
      <p>Erstellen Sie moderne, zugängliche und benutzerfreundliche Interfaces</p>
      <div class="fluent-cta-buttons">
        <button class="fluent-btn fluent-btn-primary fluent-btn-large">
          <span class="fluent-btn-icon">📖</span>
          Documentation
        </button>
        <button class="fluent-btn fluent-btn-outline fluent-btn-large">
          <span class="fluent-btn-icon">💻</span>
          GitHub
        </button>
      </div>
    </div>
  </div>
</div>

<script>
function showFluentSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.fluent-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Remove active from nav items
  document.querySelectorAll('.fluent-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Show selected section
  document.getElementById(`fluent-${sectionName}`).classList.add('active');
  
  // Add active to clicked nav item
  event.target.classList.add('active');
}

// Initialize Fluent interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add ripple effect to buttons
  document.querySelectorAll('.fluent-btn, .fluent-command-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('fluent-ripple');
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
</script>

<style>
/* Fluent Design 2 Styles */
.fluent-design-page {
  font-family: 'Segoe UI Variable', 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #f0f2f5 0%, #fafbfc 100%);
  min-height: 100vh;
}

/* Hero Section */
.fluent-hero {
  background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%);
  color: white;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.fluent-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  opacity: 0.3;
}

.fluent-hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.fluent-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #e1f5fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.fluent-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.fluent-hero-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Acrylic Effect */
.fluent-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fluent-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.fluent-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.fluent-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* Navigation */
.fluent-navigation {
  background: white;
  border-bottom: 1px solid #e1e1e1;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(20px);
}

.fluent-nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 0.5rem;
  padding: 0 2rem;
}

.fluent-nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  color: #616161;
}

.fluent-nav-item.active {
  background: #f3f2f1;
  color: #0078d4;
}

.fluent-nav-item:hover {
  background: #f8f8f8;
}

.fluent-nav-icon {
  font-size: 1.1rem;
}

/* Sections */
.fluent-section {
  display: none;
  padding: 3rem 0;
}

.fluent-section.active {
  display: block;
}

.fluent-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.fluent-section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #323130;
}

.fluent-component-group {
  margin-bottom: 4rem;
}

.fluent-component-group h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #323130;
}

/* Command Bar */
.fluent-command-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.fluent-command-group {
  display: flex;
  gap: 0.5rem;
}

.fluent-command-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid transparent;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  position: relative;
  overflow: hidden;
}

.fluent-command-btn.primary {
  background: #0078d4;
  color: white;
}

.fluent-command-btn:not(.primary):hover {
  background: #f3f2f1;
  border-color: #e1e1e1;
}

.fluent-command-btn.primary:hover {
  background: #106ebe;
}

.fluent-btn-icon {
  font-size: 1rem;
}

/* Cards Grid */
.fluent-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.fluent-info-card {
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.fluent-info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.fluent-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.fluent-card-icon {
  font-size: 1.5rem;
}

.fluent-card-title {
  font-weight: 600;
  flex: 1;
  color: #323130;
}

.fluent-card-menu {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  color: #616161;
}

.fluent-card-menu:hover {
  background: #f3f2f1;
}

.fluent-card-content {
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.fluent-metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: #323130;
  margin-bottom: 0.25rem;
}

.fluent-metric-label {
  color: #616161;
  font-size: 0.9rem;
}

/* Progress Ring */
.fluent-progress-ring {
  position: relative;
  display: inline-block;
  margin-top: 1rem;
}

.fluent-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  color: #0078d4;
}

/* Chart */
.fluent-chart {
  display: flex;
  align-items: end;
  gap: 0.25rem;
  height: 60px;
  margin-top: 1rem;
}

.fluent-chart-bar {
  background: linear-gradient(180deg, #0078d4, #106ebe);
  width: 20px;
  border-radius: 2px 2px 0 0;
  transition: height 0.3s ease;
}

/* People List */
.fluent-people-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fluent-person {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.fluent-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0078d4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
}

.fluent-person-name {
  font-weight: 500;
  color: #323130;
}

.fluent-person-status {
  font-size: 0.8rem;
  color: #616161;
}

/* Pivot */
.fluent-pivot {
  display: flex;
  border-bottom: 1px solid #e1e1e1;
  margin-bottom: 1.5rem;
}

.fluent-pivot-item {
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;
  color: #616161;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.fluent-pivot-item.active {
  color: #0078d4;
  border-bottom-color: #0078d4;
}

.fluent-pivot-item:hover {
  color: #323130;
}

/* Typography */
.fluent-type-scale {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.fluent-type-sample {
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 1rem;
}

.fluent-type-display {
  font-size: 4.25rem;
  font-weight: 700;
  line-height: 1.1;
  color: #323130;
}

.fluent-type-title-large {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: #323130;
}

.fluent-type-title {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  color: #323130;
}

.fluent-type-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: #323130;
}

.fluent-type-body-large {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: #323130;
}

.fluent-type-body {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #323130;
}

.fluent-type-caption {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #616161;
}

.fluent-type-meta {
  font-size: 0.8rem;
  color: #616161;
  margin-top: 0.5rem;
}

/* Form Controls */
.fluent-form-group {
  margin-bottom: 3rem;
}

.fluent-form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.fluent-form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.fluent-label {
  font-weight: 500;
  color: #323130;
  font-size: 0.9rem;
}

.fluent-input,
.fluent-dropdown,
.fluent-search-input {
  padding: 0.75rem;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background: white;
}

.fluent-input:focus,
.fluent-dropdown:focus,
.fluent-search-input:focus {
  outline: none;
  border-color: #0078d4;
  box-shadow: 0 0 0 1px #0078d4;
}

.fluent-search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.fluent-search-input {
  flex: 1;
  padding-right: 3rem;
}

.fluent-search-btn {
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.fluent-search-btn:hover {
  background: #f3f2f1;
}

.fluent-spinner {
  display: flex;
  position: relative;
}

.fluent-spinner-input {
  flex: 1;
  padding-right: 2rem;
}

.fluent-spinner-buttons {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 2rem;
}

.fluent-spinner-btn {
  flex: 1;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  transition: background 0.2s ease;
}

.fluent-spinner-btn:hover {
  background: #f3f2f1;
}

/* Buttons */
.fluent-button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.fluent-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.fluent-btn-primary {
  background: #0078d4;
  color: white;
}

.fluent-btn-primary:hover {
  background: #106ebe;
}

.fluent-btn-secondary {
  background: #f3f2f1;
  color: #323130;
  border-color: #e1e1e1;
}

.fluent-btn-secondary:hover {
  background: #edebe9;
}

.fluent-btn-outline {
  background: none;
  color: #0078d4;
  border-color: #0078d4;
}

.fluent-btn-outline:hover {
  background: #f3f9fd;
}

.fluent-btn-subtle {
  background: none;
  color: #323130;
}

.fluent-btn-subtle:hover {
  background: #f3f2f1;
}

.fluent-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.fluent-btn-large {
  padding: 1rem 2rem;
  font-size: 1rem;
}

/* Toggles */
.fluent-toggles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fluent-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

.fluent-toggle input {
  display: none;
}

.fluent-toggle-slider {
  width: 44px;
  height: 24px;
  background: #e1e1e1;
  border-radius: 12px;
  position: relative;
  transition: all 0.2s ease;
}

.fluent-toggle-slider::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.fluent-toggle input:checked + .fluent-toggle-slider {
  background: #0078d4;
}

.fluent-toggle input:checked + .fluent-toggle-slider::before {
  transform: translateX(20px);
}

.fluent-toggle-label {
  font-weight: 500;
  color: #323130;
}

/* Split View */
.fluent-split-view {
  display: flex;
  height: 400px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.fluent-split-pane {
  display: flex;
  flex-direction: column;
}

.fluent-split-pane:first-child {
  width: 250px;
  border-right: 1px solid #e1e1e1;
}

.fluent-split-pane.main {
  flex: 1;
}

.fluent-split-header {
  padding: 1rem;
  background: #f8f8f8;
  border-bottom: 1px solid #e1e1e1;
  font-weight: 600;
  color: #323130;
}

.fluent-split-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}

.fluent-nav-list {
  display: flex;
  flex-direction: column;
}

.fluent-nav-item {
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;
  border-radius: 4px;
  margin-bottom: 0.25rem;
}

.fluent-nav-item:hover {
  background: #f3f2f1;
}

.fluent-nav-item.active {
  background: #e3f2fd;
  color: #0078d4;
}

.fluent-content-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.fluent-content-card {
  padding: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  background: #fafafa;
}

.fluent-content-card h4 {
  margin: 0 0 0.5rem 0;
  color: #323130;
}

/* CTA */
.fluent-cta {
  background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-top: 4rem;
}

.fluent-cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.fluent-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.fluent-cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.fluent-cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Ripple Effect */
.fluent-ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: fluent-ripple 0.6s linear;
  pointer-events: none;
}

@keyframes fluent-ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .fluent-title {
    font-size: 2.5rem;
  }
  
  .fluent-hero-cards {
    grid-template-columns: 1fr;
  }
  
  .fluent-nav-container {
    flex-wrap: wrap;
    padding: 0 1rem;
  }
  
  .fluent-cards-grid {
    grid-template-columns: 1fr;
  }
  
  .fluent-form-row {
    grid-template-columns: 1fr;
  }
  
  .fluent-split-view {
    flex-direction: column;
    height: auto;
  }
  
  .fluent-split-pane:first-child {
    width: auto;
    border-right: none;
    border-bottom: 1px solid #e1e1e1;
  }
  
  .fluent-cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
