---
title: "Ant Design Showcase"
permalink: /ant-design/
layout: single
classes: wide
header:
  overlay_image: /assets/images/ant-header.svg
  overlay_filter: 0.5
  caption: "Ant Design - A design language for background applications"
excerpt: "Explore Ant Design's comprehensive component library and design principles for enterprise-class applications."
toc: true
toc_label: "Ant Design Components"
toc_icon: "cog"
---

<style>
/* Ant Design Color Palette */
:root {
  --ant-primary-color: #1890ff;
  --ant-primary-color-hover: #40a9ff;
  --ant-primary-color-active: #096dd9;
  --ant-success-color: #52c41a;
  --ant-warning-color: #faad14;
  --ant-error-color: #f5222d;
  --ant-info-color: #1890ff;
  --ant-text-color: rgba(0, 0, 0, 0.85);
  --ant-text-color-secondary: rgba(0, 0, 0, 0.45);
  --ant-disabled-color: rgba(0, 0, 0, 0.25);
  --ant-border-color: #d9d9d9;
  --ant-background-color: #fafafa;
  --ant-component-background: #ffffff;
  --ant-box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  --ant-border-radius: 6px;
}

.ant-showcase {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  line-height: 1.5715;
  color: var(--ant-text-color);
}

/* Ant Design Buttons */
.ant-btn {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: var(--ant-border-radius);
  color: var(--ant-text-color);
  background: var(--ant-component-background);
  border-color: var(--ant-border-color);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.016);
  text-decoration: none;
  margin: 0 8px 8px 0;
}

.ant-btn:hover {
  color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
}

.ant-btn-primary {
  color: #fff;
  background-color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
}

.ant-btn-primary:hover {
  background-color: var(--ant-primary-color-hover);
  border-color: var(--ant-primary-color-hover);
}

.ant-btn-success {
  color: #fff;
  background-color: var(--ant-success-color);
  border-color: var(--ant-success-color);
}

.ant-btn-danger {
  color: #fff;
  background-color: var(--ant-error-color);
  border-color: var(--ant-error-color);
}

.ant-btn-warning {
  color: #fff;
  background-color: var(--ant-warning-color);
  border-color: var(--ant-warning-color);
}

.ant-btn-large {
  height: 40px;
  padding: 6.4px 15px;
  font-size: 16px;
}

.ant-btn-small {
  height: 24px;
  padding: 0px 7px;
  font-size: 14px;
}

/* Ant Design Cards */
.ant-card {
  position: relative;
  background: var(--ant-component-background);
  border-radius: var(--ant-border-radius);
  border: 1px solid var(--ant-border-color);
  box-shadow: var(--ant-box-shadow);
  margin-bottom: 24px;
  transition: box-shadow 0.3s;
}

.ant-card:hover {
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
}

.ant-card-head {
  border-bottom: 1px solid var(--ant-border-color);
  padding: 16px 24px;
  background: transparent;
  border-radius: var(--ant-border-radius) var(--ant-border-radius) 0 0;
}

.ant-card-head-title {
  padding: 0;
  color: var(--ant-text-color);
  font-weight: 500;
  font-size: 16px;
  margin: 0;
}

.ant-card-body {
  padding: 24px;
}

/* Ant Design Form */
.ant-form-item {
  margin-bottom: 24px;
}

.ant-form-item-label {
  text-align: left;
  color: var(--ant-text-color);
  font-size: 14px;
  line-height: 1.5715;
  margin-bottom: 8px;
  display: block;
}

.ant-input {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: var(--ant-text-color);
  font-size: 14px;
  line-height: 1.5715;
  background-color: var(--ant-component-background);
  background-image: none;
  border: 1px solid var(--ant-border-color);
  border-radius: var(--ant-border-radius);
  transition: all 0.3s;
  box-sizing: border-box;
}

.ant-input:focus {
  border-color: var(--ant-primary-color-hover);
  border-right-width: 1px;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

/* Ant Design Table */
.ant-table {
  width: 100%;
  background-color: var(--ant-component-background);
  border-radius: var(--ant-border-radius);
  border: 1px solid var(--ant-border-color);
  overflow: hidden;
}

.ant-table th,
.ant-table td {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid var(--ant-border-color);
}

.ant-table th {
  background-color: var(--ant-background-color);
  font-weight: 500;
  color: var(--ant-text-color);
}

.ant-table tr:hover {
  background-color: #fafafa;
}

/* Ant Design Alerts */
.ant-alert {
  position: relative;
  padding: 8px 15px 8px 37px;
  border-radius: var(--ant-border-radius);
  margin-bottom: 16px;
  border: 1px solid transparent;
}

.ant-alert-success {
  background-color: #f6ffed;
  border-color: #b7eb8f;
  color: #389e0d;
}

.ant-alert-info {
  background-color: #e6f7ff;
  border-color: #91d5ff;
  color: #0958d9;
}

.ant-alert-warning {
  background-color: #fffbe6;
  border-color: #ffe58f;
  color: #d48806;
}

.ant-alert-error {
  background-color: #fff2f0;
  border-color: #ffccc7;
  color: #cf1322;
}

/* Ant Design Steps */
.ant-steps {
  display: flex;
  width: 100%;
  font-size: 0;
  margin-bottom: 24px;
}

.ant-steps-item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  flex: 1;
  overflow: hidden;
}

.ant-steps-item-icon {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  border: 1px solid var(--ant-border-color);
  border-radius: 50%;
  background-color: var(--ant-component-background);
  transition: background-color 0.3s, border-color 0.3s;
}

.ant-steps-item-process .ant-steps-item-icon {
  background-color: var(--ant-primary-color);
  border-color: var(--ant-primary-color);
  color: #fff;
}

.ant-steps-item-finish .ant-steps-item-icon {
  background-color: var(--ant-component-background);
  border-color: var(--ant-primary-color);
  color: var(--ant-primary-color);
}

/* Ant Design Progress */
.ant-progress {
  position: relative;
  margin-bottom: 16px;
}

.ant-progress-outer {
  display: inline-block;
  width: 100%;
  margin-right: 0;
  padding-right: 0;
}

.ant-progress-inner {
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  background-color: var(--ant-background-color);
  border-radius: 100px;
}

.ant-progress-bg {
  position: relative;
  background-color: var(--ant-primary-color);
  border-radius: 100px;
  transition: all 0.4s ease;
  height: 8px;
}

/* Ant Design Badges */
.ant-badge {
  position: relative;
  display: inline-block;
  margin-right: 16px;
  margin-bottom: 8px;
}

.ant-badge-count {
  position: absolute;
  top: -5px;
  right: -5px;
  height: 20px;
  min-width: 20px;
  padding: 0 6px;
  color: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  background: var(--ant-error-color);
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;
}

/* Ant Design Layout */
.ant-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: var(--ant-background-color);
}

.ant-layout-header {
  height: 64px;
  padding: 0 50px;
  color: var(--ant-text-color);
  line-height: 64px;
  background: var(--ant-component-background);
  border-bottom: 1px solid var(--ant-border-color);
}

.ant-layout-content {
  flex: auto;
  min-height: 0;
  padding: 24px;
}

.ant-layout-sider {
  position: relative;
  min-width: 0;
  background: var(--ant-component-background);
  border-right: 1px solid var(--ant-border-color);
  transition: all 0.2s;
}

/* Responsive Grid */
.ant-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
}

.ant-col {
  position: relative;
  max-width: 100%;
  min-height: 1px;
  padding-left: 12px;
  padding-right: 12px;
}

.ant-col-24 { flex: 0 0 100%; max-width: 100%; }
.ant-col-12 { flex: 0 0 50%; max-width: 50%; }
.ant-col-8 { flex: 0 0 33.33333333%; max-width: 33.33333333%; }
.ant-col-6 { flex: 0 0 25%; max-width: 25%; }

/* Demo Styles */
.demo-section {
  margin-bottom: 48px;
  padding: 24px;
  background: var(--ant-component-background);
  border-radius: var(--ant-border-radius);
  border: 1px solid var(--ant-border-color);
}

.demo-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
  color: var(--ant-text-color);
  font-size: 18px;
  font-weight: 500;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.component-example {
  padding: 16px;
  background: var(--ant-background-color);
  border-radius: var(--ant-border-radius);
  border: 1px solid var(--ant-border-color);
}

@media (max-width: 768px) {
  .ant-col-12, .ant-col-8, .ant-col-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="ant-showcase">

## Ant Design System Overview

Ant Design is a design language and component library created by Ant Financial (now Ant Group) for enterprise-class applications. It provides a comprehensive set of high-quality React components and follows design principles that emphasize natural, certain, meaningful, and growing user experiences.

### Key Design Principles

- **Natural**: The visual behavior should be natural and intuitive
- **Certain**: Interface should be straightforward and predictable
- **Meaningful**: Every element should serve a purpose
- **Growing**: Design should evolve and improve over time

---

## Color System

<div class="demo-section">
  <h3>Primary Colors</h3>
  <div class="demo-grid">
    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
      <div style="width: 80px; height: 80px; background: #1890ff; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">Primary</div>
      <div style="width: 80px; height: 80px; background: #52c41a; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">Success</div>
      <div style="width: 80px; height: 80px; background: #faad14; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">Warning</div>
      <div style="width: 80px; height: 80px; background: #f5222d; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 500;">Error</div>
    </div>
  </div>
</div>

---

## Typography

<div class="demo-section">
  <h3>Text Hierarchy</h3>
  <h1 style="color: var(--ant-text-color); font-size: 38px; font-weight: 600; margin-bottom: 16px;">Heading 1 - Display Large</h1>
  <h2 style="color: var(--ant-text-color); font-size: 30px; font-weight: 600; margin-bottom: 16px;">Heading 2 - Display Medium</h2>
  <h3 style="color: var(--ant-text-color); font-size: 24px; font-weight: 600; margin-bottom: 16px;">Heading 3 - Display Small</h3>
  <p style="color: var(--ant-text-color); font-size: 16px; line-height: 1.5715; margin-bottom: 16px;">
    This is body text using Ant Design's typography system. It maintains excellent readability with proper line height and spacing.
  </p>
  <p style="color: var(--ant-text-color-secondary); font-size: 14px; line-height: 1.5715;">
    Secondary text with reduced opacity for less important information.
  </p>
</div>

---

## Buttons

<div class="demo-section">
  <h3>Button Variations</h3>
  <div class="component-example">
    <button class="ant-btn ant-btn-primary">Primary Button</button>
    <button class="ant-btn">Default Button</button>
    <button class="ant-btn ant-btn-success">Success Button</button>
    <button class="ant-btn ant-btn-warning">Warning Button</button>
    <button class="ant-btn ant-btn-danger">Danger Button</button>
  </div>
  
  <h4 style="margin-top: 24px; margin-bottom: 16px;">Button Sizes</h4>
  <div class="component-example">
    <button class="ant-btn ant-btn-primary ant-btn-large">Large Button</button>
    <button class="ant-btn ant-btn-primary">Default Button</button>
    <button class="ant-btn ant-btn-primary ant-btn-small">Small Button</button>
  </div>
</div>

---

## Cards

<div class="demo-section">
  <h3>Card Components</h3>
  <div class="ant-row">
    <div class="ant-col ant-col-8">
      <div class="ant-card">
        <div class="ant-card-head">
          <div class="ant-card-head-title">Card Title</div>
        </div>
        <div class="ant-card-body">
          <p>Card content goes here. This is a standard Ant Design card with header and body sections.</p>
          <button class="ant-btn ant-btn-primary">Action</button>
        </div>
      </div>
    </div>
    <div class="ant-col ant-col-8">
      <div class="ant-card">
        <div class="ant-card-head">
          <div class="ant-card-head-title">Statistics Card</div>
        </div>
        <div class="ant-card-body">
          <div style="font-size: 30px; font-weight: 600; color: var(--ant-primary-color); margin-bottom: 8px;">1,234</div>
          <div style="color: var(--ant-text-color-secondary);">Total Users</div>
        </div>
      </div>
    </div>
    <div class="ant-col ant-col-8">
      <div class="ant-card">
        <div class="ant-card-head">
          <div class="ant-card-head-title">Progress Card</div>
        </div>
        <div class="ant-card-body">
          <div class="ant-progress">
            <div class="ant-progress-outer">
              <div class="ant-progress-inner">
                <div class="ant-progress-bg" style="width: 75%;"></div>
              </div>
            </div>
          </div>
          <div style="color: var(--ant-text-color-secondary);">75% Complete</div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Forms

<div class="demo-section">
  <h3>Form Elements</h3>
  <div class="ant-row">
    <div class="ant-col ant-col-12">
      <form>
        <div class="ant-form-item">
          <label class="ant-form-item-label">Name</label>
          <input class="ant-input" type="text" placeholder="Enter your name" />
        </div>
        <div class="ant-form-item">
          <label class="ant-form-item-label">Email</label>
          <input class="ant-input" type="email" placeholder="Enter your email" />
        </div>
        <div class="ant-form-item">
          <label class="ant-form-item-label">Message</label>
          <textarea class="ant-input" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <div class="ant-form-item">
          <button class="ant-btn ant-btn-primary" type="submit">Submit</button>
          <button class="ant-btn" type="reset" style="margin-left: 8px;">Reset</button>
        </div>
      </form>
    </div>
  </div>
</div>

---

## Data Display

<div class="demo-section">
  <h3>Table Component</h3>
  <table class="ant-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Brown</td>
        <td>32</td>
        <td>New York No. 1 Lake Park</td>
        <td><span style="color: var(--ant-success-color);">Active</span></td>
      </tr>
      <tr>
        <td>Jim Green</td>
        <td>42</td>
        <td>London No. 1 Lake Park</td>
        <td><span style="color: var(--ant-warning-color);">Pending</span></td>
      </tr>
      <tr>
        <td>Joe Black</td>
        <td>32</td>
        <td>Sidney No. 1 Lake Park</td>
        <td><span style="color: var(--ant-error-color);">Inactive</span></td>
      </tr>
    </tbody>
  </table>
</div>

---

## Feedback

<div class="demo-section">
  <h3>Alert Messages</h3>
  <div class="ant-alert ant-alert-success">
    ✓ Success: This is a success message showing that the operation completed successfully.
  </div>
  <div class="ant-alert ant-alert-info">
    ℹ Info: This is an informational message providing additional context.
  </div>
  <div class="ant-alert ant-alert-warning">
    ⚠ Warning: This is a warning message indicating potential issues.
  </div>
  <div class="ant-alert ant-alert-error">
    ✗ Error: This is an error message indicating something went wrong.
  </div>
</div>

---

## Navigation

<div class="demo-section">
  <h3>Steps Component</h3>
  <div class="ant-steps">
    <div class="ant-steps-item ant-steps-item-finish">
      <div class="ant-steps-item-icon">✓</div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">Finished</div>
      </div>
    </div>
    <div class="ant-steps-item ant-steps-item-process">
      <div class="ant-steps-item-icon">2</div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">In Progress</div>
      </div>
    </div>
    <div class="ant-steps-item ant-steps-item-wait">
      <div class="ant-steps-item-icon">3</div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">Waiting</div>
      </div>
    </div>
  </div>
</div>

---

## Data Entry

<div class="demo-section">
  <h3>Progress Indicators</h3>
  <div class="component-example">
    <div style="margin-bottom: 16px;">
      <div style="margin-bottom: 8px;">Progress 30%</div>
      <div class="ant-progress">
        <div class="ant-progress-outer">
          <div class="ant-progress-inner">
            <div class="ant-progress-bg" style="width: 30%;"></div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 16px;">
      <div style="margin-bottom: 8px;">Progress 70%</div>
      <div class="ant-progress">
        <div class="ant-progress-outer">
          <div class="ant-progress-inner">
            <div class="ant-progress-bg" style="width: 70%;"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="margin-bottom: 8px;">Progress 100%</div>
      <div class="ant-progress">
        <div class="ant-progress-outer">
          <div class="ant-progress-inner">
            <div class="ant-progress-bg" style="width: 100%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Badges & Indicators

<div class="demo-section">
  <h3>Badge Components</h3>
  <div class="component-example">
    <div class="ant-badge">
      <button class="ant-btn">Messages</button>
      <span class="ant-badge-count">5</span>
    </div>
    <div class="ant-badge">
      <button class="ant-btn">Notifications</button>
      <span class="ant-badge-count">99+</span>
    </div>
    <div class="ant-badge">
      <button class="ant-btn">Updates</button>
      <span class="ant-badge-count">1</span>
    </div>
  </div>
</div>

---

## Layout System

<div class="demo-section">
  <h3>Ant Design Layout</h3>
  <div class="ant-layout" style="height: 300px; border: 1px solid var(--ant-border-color);">
    <div class="ant-layout-header">
      <div style="font-weight: 500;">Application Header</div>
    </div>
    <div class="ant-layout" style="flex-direction: row;">
      <div class="ant-layout-sider" style="width: 200px; padding: 16px;">
        <div style="color: var(--ant-text-color-secondary);">Sidebar Navigation</div>
        <ul style="list-style: none; padding: 0; margin-top: 16px;">
          <li style="padding: 8px 0; color: var(--ant-primary-color);">Dashboard</li>
          <li style="padding: 8px 0;">Users</li>
          <li style="padding: 8px 0;">Settings</li>
        </ul>
      </div>
      <div class="ant-layout-content">
        <div style="background: var(--ant-component-background); padding: 24px; border-radius: var(--ant-border-radius); height: 100%; box-sizing: border-box;">
          <h4 style="margin-top: 0;">Main Content Area</h4>
          <p>This is the main content area of the application. It's responsive and adapts to different screen sizes.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## Grid System

<div class="demo-section">
  <h3>Responsive Grid</h3>
  <div class="ant-row">
    <div class="ant-col ant-col-6">
      <div style="background: var(--ant-primary-color); color: white; padding: 16px; text-align: center; border-radius: var(--ant-border-radius);">
        Col 6
      </div>
    </div>
    <div class="ant-col ant-col-6">
      <div style="background: var(--ant-success-color); color: white; padding: 16px; text-align: center; border-radius: var(--ant-border-radius);">
        Col 6
      </div>
    </div>
    <div class="ant-col ant-col-6">
      <div style="background: var(--ant-warning-color); color: white; padding: 16px; text-align: center; border-radius: var(--ant-border-radius);">
        Col 6
      </div>
    </div>
    <div class="ant-col ant-col-6">
      <div style="background: var(--ant-error-color); color: white; padding: 16px; text-align: center; border-radius: var(--ant-border-radius);">
        Col 6
      </div>
    </div>
  </div>
</div>

---

## Interactive Demo

<div class="demo-section">
  <h3>Interactive Components</h3>
  <div class="ant-row">
    <div class="ant-col ant-col-12">
      <div class="ant-card">
        <div class="ant-card-head">
          <div class="ant-card-head-title">User Profile</div>
        </div>
        <div class="ant-card-body">
          <form id="ant-demo-form">
            <div class="ant-form-item">
              <label class="ant-form-item-label">Username</label>
              <input class="ant-input" type="text" placeholder="Enter username" />
            </div>
            <div class="ant-form-item">
              <label class="ant-form-item-label">Status</label>
              <select class="ant-input" style="cursor: pointer;">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div class="ant-form-item">
              <button class="ant-btn ant-btn-primary" type="button" onclick="showAntMessage()">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="ant-col ant-col-12">
      <div class="ant-card">
        <div class="ant-card-head">
          <div class="ant-card-head-title">Statistics Dashboard</div>
        </div>
        <div class="ant-card-body">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: 600; color: var(--ant-primary-color);">856</div>
              <div style="color: var(--ant-text-color-secondary); font-size: 12px;">Total Users</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: 600; color: var(--ant-success-color);">342</div>
              <div style="color: var(--ant-text-color-secondary); font-size: 12px;">Active Sessions</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: 600; color: var(--ant-warning-color);">12</div>
              <div style="color: var(--ant-text-color-secondary); font-size: 12px;">Pending Tasks</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 24px; font-weight: 600; color: var(--ant-error-color);">3</div>
              <div style="color: var(--ant-text-color-secondary); font-size: 12px;">System Errors</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<script>
function showAntMessage() {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'ant-alert ant-alert-success';
  alertDiv.innerHTML = '✓ Success: Profile updated successfully!';
  alertDiv.style.position = 'fixed';
  alertDiv.style.top = '20px';
  alertDiv.style.right = '20px';
  alertDiv.style.zIndex = '1000';
  alertDiv.style.minWidth = '300px';
  alertDiv.style.boxShadow = 'var(--ant-box-shadow)';
  
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    alertDiv.style.opacity = '0';
    alertDiv.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 300);
  }, 3000);
}

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.ant-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});
</script>
