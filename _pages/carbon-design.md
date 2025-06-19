---
title: "Carbon Design System"
permalink: /carbon-design/
layout: single
classes: wide
header:
  overlay_image: /assets/images/carbon-header.svg
  overlay_filter: 0.5
  caption: "Carbon Design System - IBM's open source design system"
excerpt: "Explore IBM's Carbon Design System with its comprehensive component library, design tokens, and accessibility-first approach."
toc: true
toc_label: "Carbon Components"
toc_icon: "leaf"
---

<style>
/* Carbon Design Color Palette */
:root {
  --cds-interactive-01: #0f62fe;
  --cds-interactive-02: #393939;
  --cds-interactive-03: #0f62fe;
  --cds-interactive-04: #0f62fe;
  --cds-ui-background: #ffffff;
  --cds-ui-01: #f4f4f4;
  --cds-ui-02: #ffffff;
  --cds-ui-03: #e0e0e0;
  --cds-ui-04: #8d8d8d;
  --cds-ui-05: #161616;
  --cds-text-01: #161616;
  --cds-text-02: #525252;
  --cds-text-03: #a8a8a8;
  --cds-text-04: #ffffff;
  --cds-text-05: #6f6f6f;
  --cds-icon-01: #161616;
  --cds-icon-02: #525252;
  --cds-icon-03: #ffffff;
  --cds-field-01: #f4f4f4;
  --cds-field-02: #ffffff;
  --cds-field-03: #e0e0e0;
  --cds-border-subtle-00: #e0e0e0;
  --cds-border-subtle-01: #c6c6c6;
  --cds-border-strong-01: #8d8d8d;
  --cds-border-strong-02: #525252;
  --cds-border-inverse: #161616;
  --cds-support-01: #da1e28;
  --cds-support-02: #24a148;
  --cds-support-03: #f1c21b;
  --cds-support-04: #0043ce;
  --cds-focus: #0f62fe;
  --cds-layer-01: #f4f4f4;
  --cds-layer-02: #ffffff;
  --cds-layer-03: #e0e0e0;
  --cds-layer-accent-01: #e0e0e0;
  --cds-layer-accent-02: #e0e0e0;
  --cds-layer-accent-03: #e0e0e0;
}

.carbon-showcase {
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.5;
  color: var(--cds-text-01);
  background-color: var(--cds-ui-background);
}

/* Carbon Button */
.cds-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  letter-spacing: 0.16px;
  min-height: 48px;
  padding: 13px 16px;
  border: none;
  border-radius: 0;
  background-color: var(--cds-interactive-01);
  color: var(--cds-text-04);
  cursor: pointer;
  text-decoration: none;
  transition: all 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cds-btn:hover {
  background-color: #0050e6;
}

.cds-btn:focus {
  border: 2px solid var(--cds-focus);
  outline: none;
}

.cds-btn--secondary {
  background-color: var(--cds-interactive-02);
  color: var(--cds-text-04);
}

.cds-btn--secondary:hover {
  background-color: #4c4c4c;
}

.cds-btn--tertiary {
  background-color: transparent;
  color: var(--cds-interactive-01);
  border: 1px solid var(--cds-interactive-01);
}

.cds-btn--tertiary:hover {
  background-color: var(--cds-interactive-01);
  color: var(--cds-text-04);
}

.cds-btn--ghost {
  background-color: transparent;
  color: var(--cds-interactive-01);
  border: 1px solid transparent;
}

.cds-btn--ghost:hover {
  background-color: var(--cds-layer-01);
}

.cds-btn--danger {
  background-color: var(--cds-support-01);
}

.cds-btn--danger:hover {
  background-color: #ba1b23;
}

.cds-btn--sm {
  min-height: 32px;
  padding: 7px 15px;
  font-size: 12px;
}

.cds-btn--lg {
  min-height: 56px;
  padding: 16px 20px;
  font-size: 16px;
}

/* Carbon Text Input */
.cds-text-input {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.cds-text-input__label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33333;
  letter-spacing: 0.32px;
  color: var(--cds-text-02);
  margin-bottom: 0.5rem;
  display: block;
}

.cds-text-input__field-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.cds-text-input__field {
  background-color: var(--cds-field-01);
  border: none;
  border-bottom: 1px solid var(--cds-border-strong-01);
  color: var(--cds-text-01);
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  letter-spacing: 0.16px;
  outline: none;
  padding: 11px 16px;
  width: 100%;
  transition: background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9), outline 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
}

.cds-text-input__field:focus {
  outline: 2px solid var(--cds-focus);
  outline-offset: -2px;
}

.cds-text-input__field::placeholder {
  color: var(--cds-text-03);
  opacity: 1;
}

/* Carbon Checkbox */
.cds-checkbox {
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.cds-checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.cds-checkbox__label {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  letter-spacing: 0.16px;
  color: var(--cds-text-01);
  cursor: pointer;
  min-height: 1.5rem;
  padding-left: 1.5rem;
}

.cds-checkbox__appearance {
  position: absolute;
  left: 0;
  top: 0.125rem;
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--cds-border-strong-01);
  background-color: var(--cds-field-01);
  display: flex;
  align-items: center;
  justify-content: center;
}

.cds-checkbox__input:checked + .cds-checkbox__label .cds-checkbox__appearance {
  background-color: var(--cds-interactive-01);
  border-color: var(--cds-interactive-01);
}

.cds-checkbox__input:checked + .cds-checkbox__label .cds-checkbox__appearance::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.cds-checkbox__input:focus + .cds-checkbox__label .cds-checkbox__appearance {
  outline: 2px solid var(--cds-focus);
  outline-offset: 2px;
}

/* Carbon Tile */
.cds-tile {
  background-color: var(--cds-layer-01);
  border: 1px solid var(--cds-border-subtle-01);
  display: block;
  min-height: 4rem;
  min-width: 8rem;
  padding: 1rem;
  transition: background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
  margin-bottom: 1rem;
}

.cds-tile--clickable {
  cursor: pointer;
}

.cds-tile--clickable:hover {
  background-color: var(--cds-layer-02);
}

.cds-tile--clickable:focus {
  outline: 2px solid var(--cds-focus);
  outline-offset: -2px;
}

/* Carbon Tag */
.cds-tag {
  align-items: center;
  background-color: var(--cds-layer-accent-01);
  border: 1px solid transparent;
  border-radius: 15px;
  color: var(--cds-text-01);
  cursor: default;
  display: inline-flex;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33333;
  letter-spacing: 0.32px;
  justify-content: center;
  max-width: 100%;
  min-height: 1.5rem;
  padding: 0 0.75rem;
  vertical-align: top;
  word-break: break-word;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.cds-tag--red {
  background-color: #ffd7d9;
  color: var(--cds-support-01);
}

.cds-tag--green {
  background-color: #defbe6;
  color: var(--cds-support-02);
}

.cds-tag--blue {
  background-color: #d0e2ff;
  color: var(--cds-support-04);
}

.cds-tag--yellow {
  background-color: #fcf4d6;
  color: #8e6a00;
}

/* Carbon Modal */
.cds-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(22, 22, 22, 0.5);
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
}

.cds-modal.is-visible {
  display: flex;
}

.cds-modal__container {
  background-color: var(--cds-layer-01);
  max-width: 48rem;
  max-height: 100%;
  width: 100%;
  margin: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  transform: translateY(-2rem);
  transition: transform 240ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cds-modal.is-visible .cds-modal__container {
  transform: translateY(0);
}

.cds-modal__header {
  background-color: var(--cds-layer-02);
  border-bottom: 1px solid var(--cds-border-subtle-01);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cds-modal__heading {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
  color: var(--cds-text-01);
  margin: 0;
}

.cds-modal__close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--cds-icon-01);
  font-size: 16px;
}

.cds-modal__body {
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
}

.cds-modal__footer {
  background-color: var(--cds-layer-02);
  border-top: 1px solid var(--cds-border-subtle-01);
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

/* Carbon Data Table */
.cds-data-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: var(--cds-layer-01);
  margin-bottom: 2rem;
}

.cds-data-table th,
.cds-data-table td {
  padding: 0.875rem 1rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid var(--cds-border-subtle-01);
}

.cds-data-table th {
  background-color: var(--cds-layer-02);
  color: var(--cds-text-01);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571;
  letter-spacing: 0.16px;
}

.cds-data-table tbody tr {
  transition: background-color 110ms cubic-bezier(0.2, 0, 0.38, 0.9);
}

.cds-data-table tbody tr:hover {
  background-color: var(--cds-layer-hover-01);
}

/* Carbon Progress Indicator */
.cds-progress {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cds-progress-step {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 7rem;
  flex: 1;
}

.cds-progress-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 0.6875rem;
  left: 50%;
  width: 100%;
  height: 1px;
  background-color: var(--cds-border-subtle-01);
  z-index: -1;
}

.cds-progress-step--complete:not(:last-child)::after {
  background-color: var(--cds-interactive-01);
}

.cds-progress-step__svg {
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  background-color: var(--cds-layer-02);
  border: 3px solid var(--cds-border-subtle-01);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.cds-progress-step--complete .cds-progress-step__svg {
  background-color: var(--cds-interactive-01);
  border-color: var(--cds-interactive-01);
  color: white;
}

.cds-progress-step--current .cds-progress-step__svg {
  border-color: var(--cds-interactive-01);
  background-color: var(--cds-layer-01);
}

.cds-progress-step__label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33333;
  letter-spacing: 0.32px;
  color: var(--cds-text-02);
  text-align: center;
}

.cds-progress-step--complete .cds-progress-step__label,
.cds-progress-step--current .cds-progress-step__label {
  color: var(--cds-text-01);
}

/* Carbon Loading */
.cds-loading {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--cds-ui-03);
  border-top: 2px solid var(--cds-interactive-01);
  border-radius: 50%;
  animation: cds-spin 1s linear infinite;
  margin: 1rem auto;
}

@keyframes cds-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Carbon Notification */
.cds-inline-notification {
  background-color: var(--cds-support-02);
  color: var(--cds-text-04);
  padding: 0.875rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  min-height: 3rem;
}

.cds-inline-notification--error {
  background-color: var(--cds-support-01);
}

.cds-inline-notification--warning {
  background-color: var(--cds-support-03);
  color: var(--cds-text-01);
}

.cds-inline-notification--info {
  background-color: var(--cds-support-04);
}

.cds-inline-notification__icon {
  margin-right: 0.5rem;
  font-size: 1rem;
}

.cds-inline-notification__text-wrapper {
  flex: 1;
}

.cds-inline-notification__title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571;
  letter-spacing: 0.16px;
  margin-bottom: 0.125rem;
}

.cds-inline-notification__subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28571;
  letter-spacing: 0.16px;
}

/* Layout */
.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--cds-layer-01);
  border: 1px solid var(--cds-border-subtle-01);
}

.demo-section h3 {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;
  color: var(--cds-text-01);
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--cds-border-subtle-01);
  padding-bottom: 0.5rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.component-example {
  padding: 1.5rem;
  background-color: var(--cds-layer-02);
  border: 1px solid var(--cds-border-subtle-01);
}

@media (max-width: 768px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="carbon-showcase">

## Carbon Design System Overview

Carbon is IBM's open source design system for products and digital experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.

### Design Philosophy

Carbon follows IBM's design philosophy of being:
- **Purposeful**: Every element serves a clear function
- **Transparent**: Clear and honest in communication
- **Respectful**: Inclusive and accessible for all users
- **Human**: Natural and intuitive interactions

---

## Color System

<div class="demo-section">
  <h3>Color Tokens</h3>
  <div class="demo-grid">
    <div>
      <h4 style="margin-bottom: 1rem; color: var(--cds-text-01);">Interactive Colors</h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
        <div style="width: 4rem; height: 4rem; background: var(--cds-interactive-01); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center;">Interactive 01</div>
        <div style="width: 4rem; height: 4rem; background: var(--cds-interactive-02); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center;">Interactive 02</div>
        <div style="width: 4rem; height: 4rem; background: var(--cds-interactive-03); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center;">Interactive 03</div>
      </div>
    </div>
    <div>
      <h4 style="margin-bottom: 1rem; color: var(--cds-text-01);">Support Colors</h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <div style="width: 4rem; height: 4rem; background: var(--cds-support-01); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center;">Error</div>
        <div style="width: 4rem; height: 4rem; background: var(--cds-support-02); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center;">Success</div>
        <div style="width: 4rem; height: 4rem; background: var(--cds-support-03); display: flex; align-items: center; justify-content: center; color: var(--cds-text-01); font-size: 12px; text-align: center;">Warning</div>
        <div style="width: 4rem; height: 4rem; background: var(--cds-support-04); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; text-align: center;">Info</div>
      </div>
    </div>
  </div>
</div>

---

## Typography

<div class="demo-section">
  <h3>IBM Plex Font Family</h3>
  <div style="font-family: 'IBM Plex Sans', sans-serif;">
    <h1 style="font-size: 3.375rem; font-weight: 300; line-height: 1.17; letter-spacing: 0; margin-bottom: 1rem; color: var(--cds-text-01);">Display 04</h1>
    <h2 style="font-size: 2.625rem; font-weight: 300; line-height: 1.19; letter-spacing: 0; margin-bottom: 1rem; color: var(--cds-text-01);">Display 03</h2>
    <h3 style="font-size: 2.125rem; font-weight: 300; line-height: 1.18; letter-spacing: 0; margin-bottom: 1rem; color: var(--cds-text-01);">Display 02</h3>
    <h4 style="font-size: 1.75rem; font-weight: 300; line-height: 1.21; letter-spacing: 0; margin-bottom: 1rem; color: var(--cds-text-01);">Display 01</h4>
    <p style="font-size: 1rem; font-weight: 400; line-height: 1.5; letter-spacing: 0; margin-bottom: 1rem; color: var(--cds-text-01);">
      Body 01: This is the primary body text style used throughout Carbon applications. It provides excellent readability and accessibility.
    </p>
    <p style="font-size: 0.875rem; font-weight: 400; line-height: 1.43; letter-spacing: 0.16px; margin-bottom: 1rem; color: var(--cds-text-02);">
      Body 02: This is the secondary body text style with smaller size and adjusted line height for dense content areas.
    </p>
  </div>
</div>

---

## Buttons

<div class="demo-section">
  <h3>Button Variations</h3>
  <div class="component-example">
    <button class="cds-btn">Primary</button>
    <button class="cds-btn cds-btn--secondary">Secondary</button>
    <button class="cds-btn cds-btn--tertiary">Tertiary</button>
    <button class="cds-btn cds-btn--ghost">Ghost</button>
    <button class="cds-btn cds-btn--danger">Danger</button>
  </div>
  
  <h4 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--cds-text-01);">Button Sizes</h4>
  <div class="component-example">
    <button class="cds-btn cds-btn--lg">Large</button>
    <button class="cds-btn">Default</button>
    <button class="cds-btn cds-btn--sm">Small</button>
  </div>
</div>

---

## Form Controls

<div class="demo-section">
  <h3>Input Fields</h3>
  <div class="demo-grid">
    <div>
      <div class="cds-text-input">
        <label class="cds-text-input__label">Text input label</label>
        <div class="cds-text-input__field-wrapper">
          <input class="cds-text-input__field" type="text" placeholder="Placeholder text" />
        </div>
      </div>
      
      <div class="cds-text-input">
        <label class="cds-text-input__label">Email address</label>
        <div class="cds-text-input__field-wrapper">
          <input class="cds-text-input__field" type="email" placeholder="Enter your email" />
        </div>
      </div>
      
      <div class="cds-text-input">
        <label class="cds-text-input__label">Password</label>
        <div class="cds-text-input__field-wrapper">
          <input class="cds-text-input__field" type="password" placeholder="Enter password" />
        </div>
      </div>
    </div>
    
    <div>
      <h4 style="margin-bottom: 1rem; color: var(--cds-text-01);">Checkboxes</h4>
      <div class="cds-checkbox">
        <input class="cds-checkbox__input" type="checkbox" id="checkbox-1" checked />
        <label class="cds-checkbox__label" for="checkbox-1">
          <span class="cds-checkbox__appearance"></span>
          Checkbox option 1 (checked)
        </label>
      </div>
      
      <div class="cds-checkbox">
        <input class="cds-checkbox__input" type="checkbox" id="checkbox-2" />
        <label class="cds-checkbox__label" for="checkbox-2">
          <span class="cds-checkbox__appearance"></span>
          Checkbox option 2
        </label>
      </div>
      
      <div class="cds-checkbox">
        <input class="cds-checkbox__input" type="checkbox" id="checkbox-3" />
        <label class="cds-checkbox__label" for="checkbox-3">
          <span class="cds-checkbox__appearance"></span>
          Checkbox option 3
        </label>
      </div>
    </div>
  </div>
</div>

---

## Tiles & Cards

<div class="demo-section">
  <h3>Tile Components</h3>
  <div class="demo-grid">
    <div class="cds-tile">
      <h4 style="margin-top: 0; margin-bottom: 0.5rem; color: var(--cds-text-01);">Read-only tile</h4>
      <p style="margin: 0; color: var(--cds-text-02);">This tile contains read-only information and cannot be interacted with.</p>
    </div>
    
    <div class="cds-tile cds-tile--clickable" tabindex="0" onclick="showCarbonNotification()">
      <h4 style="margin-top: 0; margin-bottom: 0.5rem; color: var(--cds-text-01);">Clickable tile</h4>
      <p style="margin: 0; color: var(--cds-text-02);">This tile can be clicked or activated with keyboard navigation. Click to see notification.</p>
    </div>
    
    <div class="cds-tile">
      <h4 style="margin-top: 0; margin-bottom: 0.5rem; color: var(--cds-text-01);">Data tile</h4>
      <div style="font-size: 2rem; font-weight: 300; color: var(--cds-interactive-01); margin-bottom: 0.5rem;">1,234</div>
      <p style="margin: 0; color: var(--cds-text-02); font-size: 0.75rem;">Total active users</p>
    </div>
  </div>
</div>

---

## Tags & Status

<div class="demo-section">
  <h3>Tag Components</h3>
  <div class="component-example">
    <span class="cds-tag">Default</span>
    <span class="cds-tag cds-tag--red">Error</span>
    <span class="cds-tag cds-tag--green">Success</span>
    <span class="cds-tag cds-tag--blue">Info</span>
    <span class="cds-tag cds-tag--yellow">Warning</span>
  </div>
</div>

---

## Data Tables

<div class="demo-section">
  <h3>Data Table</h3>
  <table class="cds-data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Protocol</th>
        <th>Port</th>
        <th>Rule</th>
        <th>Attached Groups</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Load Balancer 3</td>
        <td>HTTP</td>
        <td>3000</td>
        <td>Round Robin</td>
        <td>Kevin's VM Groups</td>
        <td><span class="cds-tag cds-tag--green">Active</span></td>
      </tr>
      <tr>
        <td>Load Balancer 1</td>
        <td>HTTP</td>
        <td>443</td>
        <td>Round Robin</td>
        <td>Mauricio's VM Groups</td>
        <td><span class="cds-tag cds-tag--red">Disabled</span></td>
      </tr>
      <tr>
        <td>Load Balancer 2</td>
        <td>HTTP</td>
        <td>80</td>
        <td>DNS delegation</td>
        <td>Andrew's VM Groups</td>
        <td><span class="cds-tag cds-tag--yellow">Starting</span></td>
      </tr>
      <tr>
        <td>Load Balancer 6</td>
        <td>TCP</td>
        <td>3000</td>
        <td>Round Robin</td>
        <td>Marc's VM Groups</td>
        <td><span class="cds-tag cds-tag--green">Active</span></td>
      </tr>
    </tbody>
  </table>
</div>

---

## Progress & Loading

<div class="demo-section">
  <h3>Progress Indicator</h3>
  <ol class="cds-progress">
    <li class="cds-progress-step cds-progress-step--complete">
      <svg class="cds-progress-step__svg">
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em" style="font-size: 12px;">✓</text>
      </svg>
      <p class="cds-progress-step__label">First step</p>
    </li>
    <li class="cds-progress-step cds-progress-step--current">
      <svg class="cds-progress-step__svg">
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em" style="font-size: 12px;">2</text>
      </svg>
      <p class="cds-progress-step__label">Second step</p>
    </li>
    <li class="cds-progress-step">
      <svg class="cds-progress-step__svg">
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em" style="font-size: 12px;">3</text>
      </svg>
      <p class="cds-progress-step__label">Third step</p>
    </li>
    <li class="cds-progress-step">
      <svg class="cds-progress-step__svg">
        <text x="50%" y="50%" text-anchor="middle" dy="0.3em" style="font-size: 12px;">4</text>
      </svg>
      <p class="cds-progress-step__label">Fourth step</p>
    </li>
  </ol>
  
  <h4 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--cds-text-01);">Loading Spinner</h4>
  <div class="cds-loading"></div>
</div>

---

## Notifications

<div class="demo-section">
  <h3>Inline Notifications</h3>
  <div class="cds-inline-notification">
    <span class="cds-inline-notification__icon">✓</span>
    <div class="cds-inline-notification__text-wrapper">
      <p class="cds-inline-notification__title">Success</p>
      <p class="cds-inline-notification__subtitle">Your changes have been saved successfully.</p>
    </div>
  </div>
  
  <div class="cds-inline-notification cds-inline-notification--info">
    <span class="cds-inline-notification__icon">ℹ</span>
    <div class="cds-inline-notification__text-wrapper">
      <p class="cds-inline-notification__title">Information</p>
      <p class="cds-inline-notification__subtitle">This is additional information that might be helpful.</p>
    </div>
  </div>
  
  <div class="cds-inline-notification cds-inline-notification--warning">
    <span class="cds-inline-notification__icon">⚠</span>
    <div class="cds-inline-notification__text-wrapper">
      <p class="cds-inline-notification__title">Warning</p>
      <p class="cds-inline-notification__subtitle">Please review your settings before continuing.</p>
    </div>
  </div>
  
  <div class="cds-inline-notification cds-inline-notification--error">
    <span class="cds-inline-notification__icon">✗</span>
    <div class="cds-inline-notification__text-wrapper">
      <p class="cds-inline-notification__title">Error</p>
      <p class="cds-inline-notification__subtitle">An error occurred while processing your request.</p>
    </div>
  </div>
</div>

---

## Modal Dialog

<div class="demo-section">
  <h3>Modal Component</h3>
  <div class="component-example">
    <button class="cds-btn" onclick="openCarbonModal()">Open Modal</button>
    <p style="margin-top: 1rem; color: var(--cds-text-02); font-size: 0.875rem;">
      Click the button above to open a Carbon modal dialog. The modal follows Carbon's design principles for overlays and focus management.
    </p>
  </div>
</div>

<!-- Modal -->
<div class="cds-modal" id="carbon-modal">
  <div class="cds-modal__container">
    <div class="cds-modal__header">
      <h3 class="cds-modal__heading">Modal Example</h3>
      <button class="cds-modal__close" onclick="closeCarbonModal()" aria-label="Close modal">✕</button>
    </div>
    <div class="cds-modal__body">
      <p>This is a Carbon Design System modal. It demonstrates the proper use of typography, spacing, and interaction patterns according to Carbon guidelines.</p>
      <div class="cds-text-input" style="margin-top: 1rem;">
        <label class="cds-text-input__label">Sample input</label>
        <div class="cds-text-input__field-wrapper">
          <input class="cds-text-input__field" type="text" placeholder="Enter some text" />
        </div>
      </div>
    </div>
    <div class="cds-modal__footer">
      <button class="cds-btn cds-btn--ghost" onclick="closeCarbonModal()">Cancel</button>
      <button class="cds-btn" onclick="closeCarbonModal()">Confirm</button>
    </div>
  </div>
</div>

---

## Component Showcase

<div class="demo-section">
  <h3>Interactive Dashboard</h3>
  <div class="demo-grid">
    <div class="cds-tile">
      <h4 style="margin-top: 0; margin-bottom: 1rem; color: var(--cds-text-01);">System Status</h4>
      <div style="margin-bottom: 1rem;">
        <span class="cds-tag cds-tag--green">Online</span>
        <span class="cds-tag cds-tag--blue">Monitoring</span>
      </div>
      <div style="font-size: 1.5rem; font-weight: 300; color: var(--cds-interactive-01); margin-bottom: 0.5rem;">99.8%</div>
      <p style="margin: 0; color: var(--cds-text-02); font-size: 0.75rem;">Uptime this month</p>
    </div>
    
    <div class="cds-tile">
      <h4 style="margin-top: 0; margin-bottom: 1rem; color: var(--cds-text-01);">Performance</h4>
      <div style="margin-bottom: 1rem;">
        <div style="background-color: var(--cds-layer-accent-01); height: 0.5rem; border-radius: 0.25rem; overflow: hidden;">
          <div style="width: 75%; height: 100%; background-color: var(--cds-interactive-01);"></div>
        </div>
      </div>
      <div style="font-size: 1.5rem; font-weight: 300; color: var(--cds-interactive-01); margin-bottom: 0.5rem;">2.3s</div>
      <p style="margin: 0; color: var(--cds-text-02); font-size: 0.75rem;">Average response time</p>
    </div>
    
    <div class="cds-tile">
      <h4 style="margin-top: 0; margin-bottom: 1rem; color: var(--cds-text-01);">Usage</h4>
      <div style="margin-bottom: 1rem;">
        <span class="cds-tag">Peak Hours</span>
      </div>
      <div style="font-size: 1.5rem; font-weight: 300; color: var(--cds-interactive-01); margin-bottom: 0.5rem;">1,847</div>
      <p style="margin: 0; color: var(--cds-text-02); font-size: 0.75rem;">Active users now</p>
    </div>
  </div>
  
  <div style="margin-top: 2rem;">
    <button class="cds-btn">Refresh Data</button>
    <button class="cds-btn cds-btn--secondary">Export Report</button>
    <button class="cds-btn cds-btn--ghost">View Details</button>
  </div>
</div>

</div>

<script>
// Modal functionality
function openCarbonModal() {
  const modal = document.getElementById('carbon-modal');
  modal.classList.add('is-visible');
  
  // Focus management
  const firstFocusable = modal.querySelector('button, input, textarea, select');
  if (firstFocusable) {
    firstFocusable.focus();
  }
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeCarbonModal() {
  const modal = document.getElementById('carbon-modal');
  modal.classList.remove('is-visible');
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('carbon-modal');
    if (modal.classList.contains('is-visible')) {
      closeCarbonModal();
    }
  }
});

// Close modal on backdrop click
document.getElementById('carbon-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeCarbonModal();
  }
});

// Notification function
function showCarbonNotification() {
  const notification = document.createElement('div');
  notification.className = 'cds-inline-notification';
  notification.innerHTML = `
    <span class="cds-inline-notification__icon">✓</span>
    <div class="cds-inline-notification__text-wrapper">
      <p class="cds-inline-notification__title">Tile Clicked</p>
      <p class="cds-inline-notification__subtitle">You successfully interacted with the clickable tile!</p>
    </div>
  `;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '10000';
  notification.style.minWidth = '400px';
  notification.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Enhanced keyboard navigation for tiles
document.addEventListener('DOMContentLoaded', function() {
  const clickableTiles = document.querySelectorAll('.cds-tile--clickable');
  
  clickableTiles.forEach(tile => {
    tile.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});
</script>
