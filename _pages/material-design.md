---
title: "Material Design 3 System Demo"
permalink: /material-design/
header:
  image: /assets/images/material-header.svg
  teaser: /assets/images/material-teaser.svg
layout: single
toc: true
toc_sticky: true
author_profile: false
sidebar:
  nav: "main"
---

<style>
/* Material Design 3 Custom Styles */
.material-demo {
  font-family: 'Roboto', system-ui, -apple-system, sans-serif;
  --md-sys-color-primary: #6750a4;
  --md-sys-color-on-primary: #ffffff;
  --md-sys-color-primary-container: #eaddff;
  --md-sys-color-on-primary-container: #21005d;
  --md-sys-color-secondary: #615b71;
  --md-sys-color-on-secondary: #ffffff;
  --md-sys-color-secondary-container: #e7ddf8;
  --md-sys-color-on-secondary-container: #1d192b;
  --md-sys-color-tertiary: #7d5260;
  --md-sys-color-on-tertiary: #ffffff;
  --md-sys-color-tertiary-container: #ffd8e4;
  --md-sys-color-on-tertiary-container: #31111d;
  --md-sys-color-error: #ba1a1a;
  --md-sys-color-on-error: #ffffff;
  --md-sys-color-error-container: #ffdad6;
  --md-sys-color-on-error-container: #410002;
  --md-sys-color-background: #fffbfe;
  --md-sys-color-on-background: #1c1b1f;
  --md-sys-color-surface: #fffbfe;
  --md-sys-color-on-surface: #1c1b1f;
  --md-sys-color-surface-variant: #e7e0ec;
  --md-sys-color-on-surface-variant: #49454f;
  --md-sys-color-outline: #79747e;
  --md-sys-color-outline-variant: #cab6cf;
  --md-sys-color-shadow: #000000;
  --md-sys-color-scrim: #000000;
  --md-sys-color-inverse-surface: #313033;
  --md-sys-color-inverse-on-surface: #f4eff4;
  --md-sys-color-inverse-primary: #d0bcff;
}

/* Typography Scale */
.md-display-large {
  font-size: 57px;
  line-height: 72px;
  font-weight: 400;
  letter-spacing: -0.25px;
}

.md-display-medium {
  font-size: 45px;
  line-height: 56px;
  font-weight: 400;
  letter-spacing: 0px;
}

.md-display-small {
  font-size: 36px;
  line-height: 44px;
  font-weight: 400;
  letter-spacing: 0px;
}

.md-headline-large {
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  letter-spacing: 0px;
}

.md-headline-medium {
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  letter-spacing: 0px;
}

.md-headline-small {
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 0px;
}

.md-title-large {
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: 0px;
}

.md-title-medium {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.15px;
}

.md-title-small {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
}

.md-body-large {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.md-body-medium {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

.md-body-small {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.4px;
}

.md-label-large {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
}

.md-label-medium {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.md-label-small {
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

/* Material Components */
.md-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.md-surface {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
}

.md-surface-elevated {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
}

.md-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 40px;
  padding: 0 24px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.md-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  opacity: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-button:hover::before {
  opacity: 0.08;
}

.md-button:focus::before {
  opacity: 0.12;
}

.md-button:active::before {
  opacity: 0.16;
}

.md-button-filled {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}

.md-button-filled:hover,
.md-button-filled:focus {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12);
}

.md-button-outlined {
  background-color: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);
}

.md-button-text {
  background-color: transparent;
  color: var(--md-sys-color-primary);
}

.md-button-tonal {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}

.md-fab {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.md-fab:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.12);
}

.md-card {
  background-color: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-card:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
}

.md-card-elevated {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);
}

.md-card-filled {
  background-color: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant);
}

.md-card-outlined {
  border: 1px solid var(--md-sys-color-outline-variant);
  box-shadow: none;
}

.md-text-field {
  position: relative;
  margin-bottom: 16px;
}

.md-text-field input {
  width: 100%;
  height: 56px;
  padding: 16px;
  border: 1px solid var(--md-sys-color-outline);
  border-radius: 4px;
  background-color: transparent;
  color: var(--md-sys-color-on-surface);
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-text-field input:focus {
  outline: none;
  border-color: var(--md-sys-color-primary);
  border-width: 2px;
}

.md-text-field label {
  position: absolute;
  left: 16px;
  top: 16px;
  color: var(--md-sys-color-on-surface-variant);
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  pointer-events: none;
  background-color: var(--md-sys-color-surface);
  padding: 0 4px;
}

.md-text-field input:focus + label,
.md-text-field input:not(:placeholder-shown) + label {
  top: -8px;
  font-size: 12px;
  color: var(--md-sys-color-primary);
}

.md-chip {
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  background-color: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface-variant);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  margin: 4px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-chip:hover {
  background-color: var(--md-sys-color-on-surface-variant);
  color: var(--md-sys-color-surface-variant);
}

.md-chip-selected {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-color: transparent;
}

.md-grid {
  display: grid;
  gap: 16px;
}

.md-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.md-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.md-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 768px) {
  .md-grid-2,
  .md-grid-3,
  .md-grid-4 {
    grid-template-columns: 1fr;
  }
}

.md-navigation-bar {
  background-color: var(--md-sys-color-surface);
  border-top: 1px solid var(--md-sys-color-outline-variant);
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
}

.md-navigation-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
  color: var(--md-sys-color-on-surface-variant);
  text-decoration: none;
}

.md-navigation-item:hover {
  background-color: var(--md-sys-color-surface-variant);
  color: var(--md-sys-color-on-surface);
}

.md-navigation-item.active {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}

.md-snackbar {
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--md-sys-color-inverse-surface);
  color: var(--md-sys-color-inverse-on-surface);
  padding: 14px 16px;
  border-radius: 4px;
  font-size: 14px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  opacity: 0;
  transform: translateX(-50%) translateY(100%);
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.md-snackbar.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Material Icons */
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div class="material-demo">

# Material Design 3 System Demo

Eine umfassende Demonstration von Googles Material Design 3 (Material You) Design System mit allen wichtigen Komponenten, Farben und Interaktionsmustern.

## Hero Section

<div class="md-surface md-surface-elevated" style="background: linear-gradient(135deg, var(--md-sys-color-primary) 0%, var(--md-sys-color-tertiary) 100%); color: var(--md-sys-color-on-primary); text-align: center; margin: 32px 0;">
  <h1 class="md-display-medium" style="margin-bottom: 16px;">Material Design 3</h1>
  <p class="md-body-large" style="margin-bottom: 32px; opacity: 0.8;">Google's most expressive and adaptable design system yet. Build beautiful, usable products with Material You.</p>
  <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <button class="md-button md-button-filled" style="background-color: var(--md-sys-color-on-primary); color: var(--md-sys-color-primary);">
      <span class="material-icons" style="margin-right: 8px;">explore</span>
      Explore Components
    </button>
    <button class="md-button md-button-outlined" style="border-color: var(--md-sys-color-on-primary); color: var(--md-sys-color-on-primary);">
      <span class="material-icons" style="margin-right: 8px;">code</span>
      View Guidelines
    </button>
  </div>
</div>

## Color System

<div class="md-container">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Dynamic Color</h2>
  
  <div class="md-grid md-grid-4">
    <div class="md-card">
      <div style="width: 100%; height: 80px; background-color: var(--md-sys-color-primary); border-radius: 8px; margin-bottom: 16px;"></div>
      <h3 class="md-title-medium">Primary</h3>
      <p class="md-body-small" style="color: var(--md-sys-color-on-surface-variant);">High-emphasis actions and key information</p>
    </div>
    
    <div class="md-card">
      <div style="width: 100%; height: 80px; background-color: var(--md-sys-color-secondary); border-radius: 8px; margin-bottom: 16px;"></div>
      <h3 class="md-title-medium">Secondary</h3>
      <p class="md-body-small" style="color: var(--md-sys-color-on-surface-variant);">Medium-emphasis actions and supporting information</p>
    </div>
    
    <div class="md-card">
      <div style="width: 100%; height: 80px; background-color: var(--md-sys-color-tertiary); border-radius: 8px; margin-bottom: 16px;"></div>
      <h3 class="md-title-medium">Tertiary</h3>
      <p class="md-body-small" style="color: var(--md-sys-color-on-surface-variant);">Contrasting accents for balance and focus</p>
    </div>
    
    <div class="md-card">
      <div style="width: 100%; height: 80px; background-color: var(--md-sys-color-error); border-radius: 8px; margin-bottom: 16px;"></div>
      <h3 class="md-title-medium">Error</h3>
      <p class="md-body-small" style="color: var(--md-sys-color-on-surface-variant);">Error states and destructive actions</p>
    </div>
  </div>
</div>

## Typography Scale

<div class="md-surface">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Material Typography</h2>
  
  <div class="md-grid md-grid-2">
    <div>
      <h1 class="md-display-large">Display Large</h1>
      <h2 class="md-display-medium">Display Medium</h2>
      <h3 class="md-display-small">Display Small</h3>
      <h4 class="md-headline-large">Headline Large</h4>
      <h5 class="md-headline-medium">Headline Medium</h5>
      <h6 class="md-headline-small">Headline Small</h6>
    </div>
    <div>
      <p class="md-title-large">Title Large</p>
      <p class="md-title-medium">Title Medium</p>
      <p class="md-title-small">Title Small</p>
      <p class="md-body-large">Body Large</p>
      <p class="md-body-medium">Body Medium</p>
      <p class="md-body-small">Body Small</p>
      <p class="md-label-large">Label Large</p>
      <p class="md-label-medium">Label Medium</p>
      <p class="md-label-small">Label Small</p>
    </div>
  </div>
</div>

## Buttons & Actions

<div class="md-surface">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Button Variations</h2>
  
  <div style="margin-bottom: 24px;">
    <h3 class="md-title-medium" style="margin-bottom: 16px;">Filled Buttons</h3>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <button class="md-button md-button-filled">Filled</button>
      <button class="md-button md-button-filled">
        <span class="material-icons" style="margin-right: 8px;">add</span>
        With Icon
      </button>
      <button class="md-button md-button-filled" disabled style="opacity: 0.38;">Disabled</button>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <h3 class="md-title-medium" style="margin-bottom: 16px;">Outlined Buttons</h3>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <button class="md-button md-button-outlined">Outlined</button>
      <button class="md-button md-button-outlined">
        <span class="material-icons" style="margin-right: 8px;">download</span>
        Download
      </button>
      <button class="md-button md-button-outlined" disabled style="opacity: 0.38;">Disabled</button>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <h3 class="md-title-medium" style="margin-bottom: 16px;">Text Buttons</h3>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <button class="md-button md-button-text">Text</button>
      <button class="md-button md-button-text">
        <span class="material-icons" style="margin-right: 8px;">share</span>
        Share
      </button>
      <button class="md-button md-button-text" disabled style="opacity: 0.38;">Disabled</button>
    </div>
  </div>
  
  <div style="margin-bottom: 24px;">
    <h3 class="md-title-medium" style="margin-bottom: 16px;">Tonal Buttons</h3>
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <button class="md-button md-button-tonal">Tonal</button>
      <button class="md-button md-button-tonal">
        <span class="material-icons" style="margin-right: 8px;">bookmark</span>
        Bookmark
      </button>
      <button class="md-button md-button-tonal" disabled style="opacity: 0.38;">Disabled</button>
    </div>
  </div>
  
  <div>
    <h3 class="md-title-medium" style="margin-bottom: 16px;">Floating Action Buttons</h3>
    <div style="display: flex; gap: 16px; align-items: center;">
      <button class="md-fab">
        <span class="material-icons">add</span>
      </button>
      <button class="md-fab" style="width: 96px; border-radius: 28px;">
        <span class="material-icons" style="margin-right: 8px;">edit</span>
        <span>Edit</span>
      </button>
    </div>
  </div>
</div>

## Cards & Surfaces

<div class="md-container">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Card Variations</h2>
  
  <div class="md-grid md-grid-3">
    <div class="md-card">
      <div style="width: 100%; height: 140px; background: linear-gradient(45deg, var(--md-sys-color-primary), var(--md-sys-color-secondary)); border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
        <span style="color: white; font-size: 48px;">🏔️</span>
      </div>
      <h3 class="md-title-large" style="margin-bottom: 8px;">Elevated Card</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant); margin-bottom: 16px;">This is an elevated card with a subtle shadow that creates depth.</p>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="md-button md-button-text">Share</button>
        <button class="md-button md-button-text">Learn More</button>
      </div>
    </div>
    
    <div class="md-card md-card-filled">
      <div style="width: 100%; height: 140px; background: var(--md-sys-color-outline-variant); border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
        <span style="color: var(--md-sys-color-on-surface-variant); font-size: 48px;">🎨</span>
      </div>
      <h3 class="md-title-large" style="margin-bottom: 8px;">Filled Card</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant); margin-bottom: 16px;">A filled card uses surface variant color for subtle emphasis.</p>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="md-button md-button-text">Edit</button>
        <button class="md-button md-button-text">Delete</button>
      </div>
    </div>
    
    <div class="md-card md-card-outlined">
      <div style="width: 100%; height: 140px; background: var(--md-sys-color-surface-variant); border-radius: 8px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center;">
        <span style="color: var(--md-sys-color-on-surface-variant); font-size: 48px;">📊</span>
      </div>
      <h3 class="md-title-large" style="margin-bottom: 8px;">Outlined Card</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant); margin-bottom: 16px;">An outlined card with a border and no shadow for less emphasis.</p>
      <div style="display: flex; justify-content: flex-end; gap: 8px;">
        <button class="md-button md-button-text">View</button>
        <button class="md-button md-button-text">Export</button>
      </div>
    </div>
  </div>
</div>

## Form Elements

<div class="md-surface">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Text Fields & Input</h2>
  
  <form>
    <div class="md-grid md-grid-2">
      <div class="md-text-field">
        <input type="text" id="firstName" placeholder=" ">
        <label for="firstName">First Name</label>
      </div>
      <div class="md-text-field">
        <input type="text" id="lastName" placeholder=" ">
        <label for="lastName">Last Name</label>
      </div>
      <div class="md-text-field" style="grid-column: 1 / -1;">
        <input type="email" id="email" placeholder=" ">
        <label for="email">Email Address</label>
      </div>
      <div class="md-text-field" style="grid-column: 1 / -1;">
        <input type="text" id="message" placeholder=" " style="height: 120px; padding-top: 16px;">
        <label for="message">Message</label>
      </div>
    </div>
    
    <div style="margin-top: 24px;">
      <button type="submit" class="md-button md-button-filled">
        <span class="material-icons" style="margin-right: 8px;">send</span>
        Send Message
      </button>
    </div>
  </form>
</div>

## Chips & Filters

<div class="md-surface">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Filter Chips</h2>
  
  <div style="margin-bottom: 16px;">
    <h3 class="md-title-medium" style="margin-bottom: 12px;">Categories</h3>
    <div>
      <span class="md-chip md-chip-selected">All</span>
      <span class="md-chip">Design</span>
      <span class="md-chip">Development</span>
      <span class="md-chip">Marketing</span>
      <span class="md-chip">Business</span>
      <span class="md-chip">Technology</span>
    </div>
  </div>
  
  <div>
    <h3 class="md-title-medium" style="margin-bottom: 12px;">Tags</h3>
    <div>
      <span class="md-chip">Material Design</span>
      <span class="md-chip">UI/UX</span>
      <span class="md-chip">Web Development</span>
      <span class="md-chip">Mobile</span>
      <span class="md-chip">Accessibility</span>
      <span class="md-chip">Performance</span>
      <span class="md-chip">Animation</span>
    </div>
  </div>
</div>

## Navigation

<div class="md-surface" style="padding: 0; overflow: hidden;">
  <h2 class="md-headline-large" style="padding: 24px 24px 16px;">Navigation Components</h2>
  
  <div class="md-navigation-bar">
    <a href="#" class="md-navigation-item active">
      <span class="material-icons">home</span>
      <span class="md-label-medium" style="margin-top: 4px;">Home</span>
    </a>
    <a href="#" class="md-navigation-item">
      <span class="material-icons">search</span>
      <span class="md-label-medium" style="margin-top: 4px;">Search</span>
    </a>
    <a href="#" class="md-navigation-item">
      <span class="material-icons">favorite</span>
      <span class="md-label-medium" style="margin-top: 4px;">Favorites</span>
    </a>
    <a href="#" class="md-navigation-item">
      <span class="material-icons">person</span>
      <span class="md-label-medium" style="margin-top: 4px;">Profile</span>
    </a>
  </div>
</div>

## Material You Features

<div class="md-container">
  <h2 class="md-headline-large" style="margin-bottom: 24px;">Material You Principles</h2>
  
  <div class="md-grid md-grid-2">
    <div class="md-card">
      <span style="font-size: 48px; margin-bottom: 16px; display: block;">🎨</span>
      <h3 class="md-title-large" style="margin-bottom: 12px;">Personal</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant);">Adapts to your wallpaper and preferences to create a unique, personalized experience.</p>
    </div>
    
    <div class="md-card">
      <span style="font-size: 48px; margin-bottom: 16px; display: block;">🔄</span>
      <h3 class="md-title-large" style="margin-bottom: 12px;">Adaptive</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant);">Scales across devices and contexts while maintaining design consistency.</p>
    </div>
    
    <div class="md-card">
      <span style="font-size: 48px; margin-bottom: 16px; display: block;">♿</span>
      <h3 class="md-title-large" style="margin-bottom: 12px;">Accessible</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant);">Built with accessibility in mind, ensuring usability for everyone.</p>
    </div>
    
    <div class="md-card">
      <span style="font-size: 48px; margin-bottom: 16px; display: block;">⚡</span>
      <h3 class="md-title-large" style="margin-bottom: 12px;">Performant</h3>
      <p class="md-body-medium" style="color: var(--md-sys-color-on-surface-variant);">Optimized for smooth interactions and efficient resource usage.</p>
    </div>
  </div>
</div>

## Call to Action

<div class="md-surface" style="background: linear-gradient(135deg, var(--md-sys-color-primary-container) 0%, var(--md-sys-color-tertiary-container) 100%); text-align: center;">
  <h2 class="md-headline-large" style="margin-bottom: 16px; color: var(--md-sys-color-on-primary-container);">Start Building with Material Design 3</h2>
  <p class="md-body-large" style="margin-bottom: 32px; color: var(--md-sys-color-on-primary-container); opacity: 0.8;">Create beautiful, accessible, and performant user interfaces with Google's latest design system.</p>
  <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
    <a href="https://m3.material.io/" class="md-button md-button-filled">
      <span class="material-icons" style="margin-right: 8px;">launch</span>
      Material Design 3
    </a>
    <a href="https://github.com/material-components" class="md-button md-button-outlined">
      <span class="material-icons" style="margin-right: 8px;">code</span>
      GitHub Repository
    </a>
    <button class="md-button md-button-text" onclick="showSnackbar()">
      <span class="material-icons" style="margin-right: 8px;">notifications</span>
      Show Snackbar
    </button>
  </div>
</div>

</div>

<!-- Snackbar -->
<div id="snackbar" class="md-snackbar">
  Material Design 3 snackbar example
</div>

<script>
// Material Design 3 Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Chip selection
  const chips = document.querySelectorAll('.md-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', function() {
      // Remove selected class from siblings in the same parent group
      const siblings = this.parentElement.querySelectorAll('.md-chip');
      siblings.forEach(sibling => sibling.classList.remove('md-chip-selected'));
      
      // Add selected class to clicked chip
      this.classList.add('md-chip-selected');
    });
  });
  
  // Navigation item interactions
  const navItems = document.querySelectorAll('.md-navigation-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Material ripple effect
  function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = diameter + 'px';
    circle.style.left = (event.clientX - rect.left - radius) + 'px';
    circle.style.top = (event.clientY - rect.top - radius) + 'px';
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.background = 'rgba(255, 255, 255, 0.3)';
    circle.style.transform = 'scale(0)';
    circle.style.animation = 'ripple 0.6s linear';
    circle.style.pointerEvents = 'none';
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
      ripple.remove();
    }
    
    circle.classList.add('ripple');
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(circle);
    
    setTimeout(() => {
      circle.remove();
    }, 600);
  }
  
  // Add ripple to buttons and FABs
  const buttons = document.querySelectorAll('.md-button, .md-fab');
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
  
  // Text field focus animations
  const textFields = document.querySelectorAll('.md-text-field input');
  textFields.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });
});

function showSnackbar() {
  const snackbar = document.getElementById('snackbar');
  snackbar.classList.add('show');
  
  setTimeout(() => {
    snackbar.classList.remove('show');
  }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

.md-text-field.focused input {
  border-color: var(--md-sys-color-primary);
  border-width: 2px;
}

.md-text-field.focused label {
  color: var(--md-sys-color-primary);
}
`;
document.head.appendChild(style);
</script>
