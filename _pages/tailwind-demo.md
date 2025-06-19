---
title: "Tailwind CSS Design System Demo"
permalink: /tailwind-demo/
header:
  image: /assets/images/tailwind-header.svg
  teaser: /assets/images/tailwind-teaser.svg
layout: single
toc: true
toc_sticky: true
author_profile: false
sidebar:
  nav: "main"
---

<style>
/* Tailwind CSS Custom Demo Styles */
.tailwind-demo {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

/* Tailwind Color Palette */
.tw-bg-slate-50 { background-color: #f8fafc; }
.tw-bg-slate-100 { background-color: #f1f5f9; }
.tw-bg-slate-900 { background-color: #0f172a; }
.tw-bg-blue-50 { background-color: #eff6ff; }
.tw-bg-blue-500 { background-color: #3b82f6; }
.tw-bg-blue-600 { background-color: #2563eb; }
.tw-bg-emerald-50 { background-color: #ecfdf5; }
.tw-bg-emerald-500 { background-color: #10b981; }
.tw-bg-amber-50 { background-color: #fffbeb; }
.tw-bg-amber-500 { background-color: #f59e0b; }
.tw-bg-red-50 { background-color: #fef2f2; }
.tw-bg-red-500 { background-color: #ef4444; }

.tw-text-slate-900 { color: #0f172a; }
.tw-text-slate-600 { color: #475569; }
.tw-text-slate-500 { color: #64748b; }
.tw-text-white { color: #ffffff; }
.tw-text-blue-600 { color: #2563eb; }
.tw-text-emerald-600 { color: #059669; }
.tw-text-amber-600 { color: #d97706; }
.tw-text-red-600 { color: #dc2626; }

/* Tailwind Utilities */
.tw-container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.tw-grid {
  display: grid;
}

.tw-grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.tw-grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tw-grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.tw-grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.tw-gap-4 { gap: 1rem; }
.tw-gap-6 { gap: 1.5rem; }
.tw-gap-8 { gap: 2rem; }

.tw-p-2 { padding: 0.5rem; }
.tw-p-4 { padding: 1rem; }
.tw-p-6 { padding: 1.5rem; }
.tw-p-8 { padding: 2rem; }

.tw-px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.tw-px-4 { padding-left: 1rem; padding-right: 1rem; }
.tw-px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.tw-py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.tw-py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.tw-py-4 { padding-top: 1rem; padding-bottom: 1rem; }

.tw-m-2 { margin: 0.5rem; }
.tw-m-4 { margin: 1rem; }
.tw-mb-2 { margin-bottom: 0.5rem; }
.tw-mb-4 { margin-bottom: 1rem; }
.tw-mb-6 { margin-bottom: 1.5rem; }
.tw-mb-8 { margin-bottom: 2rem; }

.tw-text-xs { font-size: 0.75rem; line-height: 1rem; }
.tw-text-sm { font-size: 0.875rem; line-height: 1.25rem; }
.tw-text-base { font-size: 1rem; line-height: 1.5rem; }
.tw-text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.tw-text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.tw-text-2xl { font-size: 1.5rem; line-height: 2rem; }
.tw-text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
.tw-text-4xl { font-size: 2.25rem; line-height: 2.5rem; }

.tw-font-medium { font-weight: 500; }
.tw-font-semibold { font-weight: 600; }
.tw-font-bold { font-weight: 700; }

.tw-rounded { border-radius: 0.25rem; }
.tw-rounded-md { border-radius: 0.375rem; }
.tw-rounded-lg { border-radius: 0.5rem; }
.tw-rounded-xl { border-radius: 0.75rem; }
.tw-rounded-full { border-radius: 9999px; }

.tw-shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
.tw-shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
.tw-shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.tw-shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }

.tw-border { border-width: 1px; }
.tw-border-slate-200 { border-color: #e2e8f0; }
.tw-border-blue-200 { border-color: #bfdbfe; }

.tw-flex { display: flex; }
.tw-inline-flex { display: inline-flex; }
.tw-items-center { align-items: center; }
.tw-justify-center { justify-content: center; }
.tw-justify-between { justify-content: space-between; }

.tw-w-full { width: 100%; }
.tw-h-10 { height: 2.5rem; }
.tw-h-12 { height: 3rem; }

.tw-transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
.tw-transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }

/* Hover effects */
.tw-hover-bg-blue-600:hover { background-color: #2563eb; }
.tw-hover-bg-slate-50:hover { background-color: #f8fafc; }
.tw-hover-shadow-lg:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }

/* Focus effects */
.tw-focus-ring:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

/* Responsive */
@media (min-width: 768px) {
  .md\:tw-grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .md\:tw-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .md\:tw-text-lg { font-size: 1.125rem; line-height: 1.75rem; }
  .md\:tw-text-xl { font-size: 1.25rem; line-height: 1.75rem; }
}

@media (min-width: 1024px) {
  .lg\:tw-grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lg\:tw-grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* Custom Tailwind Components */
.tw-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-decoration: none;
}

.tw-btn:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.tw-btn-primary {
  background-color: #3b82f6;
  color: #ffffff;
}

.tw-btn-primary:hover {
  background-color: #2563eb;
  color: #ffffff;
  text-decoration: none;
}

.tw-btn-secondary {
  background-color: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}

.tw-btn-secondary:hover {
  background-color: #e2e8f0;
  color: #334155;
  text-decoration: none;
}

.tw-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.15s ease-in-out;
}

.tw-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.tw-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.tw-input:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.tw-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
}

.tw-alert {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.tw-alert-info {
  background-color: #eff6ff;
  color: #1e40af;
  border: 1px solid #bfdbfe;
}

.tw-alert-success {
  background-color: #ecfdf5;
  color: #065f46;
  border: 1px solid #a7f3d0;
}

.tw-alert-warning {
  background-color: #fffbeb;
  color: #92400e;
  border: 1px solid #fde68a;
}

.tw-alert-error {
  background-color: #fef2f2;
  color: #991b1b;
  border: 1px solid #fecaca;
}
</style>

<div class="tailwind-demo">

# Tailwind CSS Design System Demo

Eine umfassende Demonstration des Tailwind CSS Utility-First Frameworks mit allen wichtigen Komponenten, Layouts und Designprinzipien.

## Hero Section

<div class="tw-bg-slate-900 tw-text-white tw-p-8 tw-rounded-xl tw-mb-8">
  <div class="tw-container">
    <h1 class="tw-text-4xl tw-font-bold tw-mb-4">Build anything with Tailwind CSS</h1>
    <p class="tw-text-xl tw-text-slate-300 tw-mb-6">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
    <div class="tw-flex tw-gap-4">
      <a href="#components" class="tw-btn tw-btn-primary tw-px-6 tw-py-3">Explore Components</a>
      <a href="#utilities" class="tw-btn tw-btn-secondary tw-px-6 tw-py-3">View Utilities</a>
    </div>
  </div>
</div>

## Color System

<div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 tw-mb-8">
  <div class="tw-card">
    <div class="tw-bg-slate-500 tw-h-12 tw-rounded tw-mb-4"></div>
    <h3 class="tw-font-semibold tw-mb-2">Slate</h3>
    <p class="tw-text-sm tw-text-slate-600">Cool grays for sophisticated interfaces</p>
  </div>
  <div class="tw-card">
    <div class="tw-bg-blue-500 tw-h-12 tw-rounded tw-mb-4"></div>
    <h3 class="tw-font-semibold tw-mb-2">Blue</h3>
    <p class="tw-text-sm tw-text-slate-600">Primary brand colors and links</p>
  </div>
  <div class="tw-card">
    <div class="tw-bg-emerald-500 tw-h-12 tw-rounded tw-mb-4"></div>
    <h3 class="tw-font-semibold tw-mb-2">Emerald</h3>
    <p class="tw-text-sm tw-text-slate-600">Success states and positive actions</p>
  </div>
  <div class="tw-card">
    <div class="tw-bg-red-500 tw-h-12 tw-rounded tw-mb-4"></div>
    <h3 class="tw-font-semibold tw-mb-2">Red</h3>
    <p class="tw-text-sm tw-text-slate-600">Error states and destructive actions</p>
  </div>
</div>

## Typography Scale

<div class="tw-card tw-mb-8">
  <h1 class="tw-text-4xl tw-font-bold tw-mb-2">Heading 1 - 36px</h1>
  <h2 class="tw-text-3xl tw-font-bold tw-mb-2">Heading 2 - 30px</h2>
  <h3 class="tw-text-2xl tw-font-bold tw-mb-2">Heading 3 - 24px</h3>
  <h4 class="tw-text-xl tw-font-bold tw-mb-2">Heading 4 - 20px</h4>
  <h5 class="tw-text-lg tw-font-bold tw-mb-2">Heading 5 - 18px</h5>
  <p class="tw-text-base tw-mb-2">Body Text - 16px</p>
  <p class="tw-text-sm tw-mb-2">Small Text - 14px</p>
  <p class="tw-text-xs">Extra Small - 12px</p>
</div>

## Buttons & Interactive Elements {#components}

<div class="tw-card tw-mb-8">
  <h3 class="tw-text-2xl tw-font-bold tw-mb-6">Button Variations</h3>
  
  <div class="tw-mb-6">
    <h4 class="tw-text-lg tw-font-semibold tw-mb-4">Primary Buttons</h4>
    <div class="tw-flex tw-flex-wrap tw-gap-4">
      <button class="tw-btn tw-btn-primary">Default</button>
      <button class="tw-btn tw-btn-primary tw-px-6 tw-py-3">Large</button>
      <button class="tw-btn tw-btn-primary tw-px-3 tw-py-2 tw-text-sm">Small</button>
      <button class="tw-btn tw-btn-primary tw-rounded-full">Rounded</button>
    </div>
  </div>

  <div class="tw-mb-6">
    <h4 class="tw-text-lg tw-font-semibold tw-mb-4">Secondary Buttons</h4>
    <div class="tw-flex tw-flex-wrap tw-gap-4">
      <button class="tw-btn tw-btn-secondary">Default</button>
      <button class="tw-btn tw-btn-secondary tw-px-6 tw-py-3">Large</button>
      <button class="tw-btn tw-btn-secondary tw-px-3 tw-py-2 tw-text-sm">Small</button>
      <button class="tw-btn tw-btn-secondary tw-rounded-full">Rounded</button>
    </div>
  </div>
</div>

## Form Elements

<div class="tw-card tw-mb-8">
  <h3 class="tw-text-2xl tw-font-bold tw-mb-6">Form Components</h3>
  
  <form>
    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
      <div>
        <label class="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-2">Full Name</label>
        <input type="text" class="tw-input" placeholder="Enter your name">
      </div>
      <div>
        <label class="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-2">Email Address</label>
        <input type="email" class="tw-input" placeholder="you@example.com">
      </div>
      <div class="md:col-span-2">
        <label class="tw-block tw-text-sm tw-font-medium tw-text-slate-700 tw-mb-2">Message</label>
        <textarea class="tw-input" rows="4" placeholder="Your message here..."></textarea>
      </div>
      <div class="md:col-span-2">
        <button type="submit" class="tw-btn tw-btn-primary tw-w-full">Send Message</button>
      </div>
    </div>
  </form>
</div>

## Cards & Content

<div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6 tw-mb-8">
  <div class="tw-card">
    <div class="tw-w-full tw-h-48 tw-bg-slate-200 tw-rounded tw-mb-4 tw-flex tw-items-center tw-justify-center">
      <span class="tw-text-slate-500">Image Placeholder</span>
    </div>
    <h3 class="tw-text-xl tw-font-semibold tw-mb-2">Card Title</h3>
    <p class="tw-text-slate-600 tw-mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
    <button class="tw-btn tw-btn-primary tw-w-full">Learn More</button>
  </div>
  
  <div class="tw-card">
    <div class="tw-w-full tw-h-48 tw-bg-blue-100 tw-rounded tw-mb-4 tw-flex tw-items-center tw-justify-center">
      <span class="tw-text-blue-600">🚀</span>
    </div>
    <h3 class="tw-text-xl tw-font-semibold tw-mb-2">Fast Development</h3>
    <p class="tw-text-slate-600 tw-mb-4">Build faster with utility classes that map directly to CSS properties.</p>
    <button class="tw-btn tw-btn-primary tw-w-full">Get Started</button>
  </div>
  
  <div class="tw-card">
    <div class="tw-w-full tw-h-48 tw-bg-emerald-100 tw-rounded tw-mb-4 tw-flex tw-items-center tw-justify-center">
      <span class="tw-text-emerald-600">⚡</span>
    </div>
    <h3 class="tw-text-xl tw-font-semibold tw-mb-2">Responsive Design</h3>
    <p class="tw-text-slate-600 tw-mb-4">Every utility class works at any breakpoint with responsive prefixes.</p>
    <button class="tw-btn tw-btn-primary tw-w-full">Explore</button>
  </div>
</div>

## Alerts & Notifications

<div class="tw-mb-8">
  <h3 class="tw-text-2xl tw-font-bold tw-mb-6">Alert Components</h3>
  
  <div class="tw-alert tw-alert-info">
    <strong>Info:</strong> This is an informational alert with some important details.
  </div>
  
  <div class="tw-alert tw-alert-success">
    <strong>Success:</strong> Your action was completed successfully!
  </div>
  
  <div class="tw-alert tw-alert-warning">
    <strong>Warning:</strong> Please review the following information carefully.
  </div>
  
  <div class="tw-alert tw-alert-error">
    <strong>Error:</strong> There was a problem processing your request.
  </div>
</div>

## Badges & Labels

<div class="tw-card tw-mb-8">
  <h3 class="tw-text-2xl tw-font-bold tw-mb-6">Badge Variations</h3>
  
  <div class="tw-flex tw-flex-wrap tw-gap-4 tw-mb-4">
    <span class="tw-badge tw-bg-blue-100 tw-text-blue-800">Primary</span>
    <span class="tw-badge tw-bg-emerald-100 tw-text-emerald-800">Success</span>
    <span class="tw-badge tw-bg-amber-100 tw-text-amber-800">Warning</span>
    <span class="tw-badge tw-bg-red-100 tw-text-red-800">Error</span>
    <span class="tw-badge tw-bg-slate-100 tw-text-slate-800">Neutral</span>
  </div>
</div>

## Utility Classes {#utilities}

<div class="tw-card tw-mb-8">
  <h3 class="tw-text-2xl tw-font-bold tw-mb-6">Core Utility Classes</h3>
  
  <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6">
    <div>
      <h4 class="tw-text-lg tw-font-semibold tw-mb-3">Spacing</h4>
      <ul class="tw-text-sm tw-text-slate-600 tw-space-y-1">
        <li><code>p-{size}</code> - Padding</li>
        <li><code>m-{size}</code> - Margin</li>
        <li><code>px-{size}</code> - Horizontal padding</li>
        <li><code>py-{size}</code> - Vertical padding</li>
        <li><code>gap-{size}</code> - Grid/Flex gap</li>
      </ul>
    </div>
    
    <div>
      <h4 class="tw-text-lg tw-font-semibold tw-mb-3">Layout</h4>
      <ul class="tw-text-sm tw-text-slate-600 tw-space-y-1">
        <li><code>flex</code> - Display flex</li>
        <li><code>grid</code> - Display grid</li>
        <li><code>grid-cols-{n}</code> - Grid columns</li>
        <li><code>items-center</code> - Align items</li>
        <li><code>justify-between</code> - Justify content</li>
      </ul>
    </div>
    
    <div>
      <h4 class="tw-text-lg tw-font-semibold tw-mb-3">Typography</h4>
      <ul class="tw-text-sm tw-text-slate-600 tw-space-y-1">
        <li><code>text-{size}</code> - Font size</li>
        <li><code>font-{weight}</code> - Font weight</li>
        <li><code>text-{color}</code> - Text color</li>
        <li><code>leading-{size}</code> - Line height</li>
        <li><code>tracking-{size}</code> - Letter spacing</li>
      </ul>
    </div>
    
    <div>
      <h4 class="tw-text-lg tw-font-semibold tw-mb-3">Styling</h4>
      <ul class="tw-text-sm tw-text-slate-600 tw-space-y-1">
        <li><code>bg-{color}</code> - Background color</li>
        <li><code>border-{size}</code> - Border width</li>
        <li><code>rounded-{size}</code> - Border radius</li>
        <li><code>shadow-{size}</code> - Box shadow</li>
        <li><code>hover:{utility}</code> - Hover states</li>
      </ul>
    </div>
  </div>
</div>

## Responsive Grid

<div class="tw-card tw-mb-8">
  <h3 class="tw-text-2xl tw-font-bold tw-mb-6">Responsive Layout System</h3>
  
  <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4">
    <div class="tw-bg-blue-100 tw-p-4 tw-rounded tw-text-center">
      <div class="tw-text-2xl tw-mb-2">📱</div>
      <h4 class="tw-font-semibold">Mobile First</h4>
      <p class="tw-text-sm tw-text-slate-600">Base styles for mobile devices</p>
    </div>
    <div class="tw-bg-emerald-100 tw-p-4 tw-rounded tw-text-center">
      <div class="tw-text-2xl tw-mb-2">💻</div>
      <h4 class="tw-font-semibold">Tablet (md:)</h4>
      <p class="tw-text-sm tw-text-slate-600">768px and up</p>
    </div>
    <div class="tw-bg-amber-100 tw-p-4 tw-rounded tw-text-center">
      <div class="tw-text-2xl tw-mb-2">🖥️</div>
      <h4 class="tw-font-semibold">Desktop (lg:)</h4>
      <p class="tw-text-sm tw-text-slate-600">1024px and up</p>
    </div>
    <div class="tw-bg-purple-100 tw-p-4 tw-rounded tw-text-center">
      <div class="tw-text-2xl tw-mb-2">🖥️</div>
      <h4 class="tw-font-semibold">Large (xl:)</h4>
      <p class="tw-text-sm tw-text-slate-600">1280px and up</p>
    </div>
  </div>
</div>

## Performance Features

<div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 tw-mb-8">
  <div class="tw-card">
    <h3 class="tw-text-xl tw-font-semibold tw-mb-4">🚀 Performance</h3>
    <ul class="tw-text-sm tw-text-slate-600 tw-space-y-2">
      <li>• Automatically removes unused CSS</li>
      <li>• Minimal file size in production</li>
      <li>• JIT compilation for faster builds</li>
      <li>• Tree-shaking optimization</li>
    </ul>
  </div>
  
  <div class="tw-card">
    <h3 class="tw-text-xl tw-font-semibold tw-mb-4">🎨 Developer Experience</h3>
    <ul class="tw-text-sm tw-text-slate-600 tw-space-y-2">
      <li>• Utility-first approach</li>
      <li>• Consistent design system</li>
      <li>• Excellent VS Code support</li>
      <li>• Comprehensive documentation</li>
    </ul>
  </div>
</div>

## Call to Action

<div class="tw-bg-blue-600 tw-text-white tw-p-8 tw-rounded-xl tw-text-center">
  <h2 class="tw-text-3xl tw-font-bold tw-mb-4">Ready to build with Tailwind?</h2>
  <p class="tw-text-xl tw-text-blue-100 tw-mb-6">Start creating beautiful, responsive interfaces with the world's most popular utility-first CSS framework.</p>
  <div class="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 tw-justify-center">
    <a href="https://tailwindcss.com/docs" class="tw-btn tw-bg-white tw-text-blue-600 tw-px-8 tw-py-3 hover:tw-bg-blue-50">Get Started</a>
    <a href="https://github.com/tailwindlabs/tailwindcss" class="tw-btn tw-border tw-border-blue-300 tw-text-white tw-px-8 tw-py-3 hover:tw-bg-blue-500">View on GitHub</a>
  </div>
</div>

</div>

<script>
// Tailwind Demo Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.tw-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255,255,255,0.5)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.tw-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
</script>
