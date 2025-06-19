---
title: "Modern CSS Grid & Flexbox Demo"
permalink: /css-grid-flexbox/
header:
  image: /assets/images/css-grid-header.svg
  teaser: /assets/images/css-grid-teaser.svg
layout: single
toc: true
toc_sticky: true
author_profile: false
sidebar:
  nav: "main"
---

<style>
/* Modern CSS Grid & Flexbox Styles */
.css-grid-demo {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
}

/* CSS Grid Layouts */
.grid-container {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.grid-basic {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-complex {
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  min-height: 400px;
}

.grid-masonry {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 20px;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.grid-item.header {
  grid-area: header;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.grid-item.sidebar {
  grid-area: sidebar;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.grid-item.main {
  grid-area: main;
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.grid-item.aside {
  grid-area: aside;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.grid-item.footer {
  grid-area: footer;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #333;
}

/* Masonry specific */
.masonry-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  break-inside: avoid;
}

.masonry-item.tall {
  grid-row: span 8;
}

.masonry-item.medium {
  grid-row: span 6;
}

.masonry-item.short {
  grid-row: span 4;
}

/* Flexbox Layouts */
.flex-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.flex-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
}

.flex-item:hover {
  transform: scale(1.05);
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-column {
  flex-direction: column;
  height: 400px;
}

.flex-item-grow {
  flex: 1;
}

.flex-item-shrink {
  flex: 0 0 200px;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-space-between {
  justify-content: space-between;
  align-items: center;
}

.flex-space-around {
  justify-content: space-around;
  align-items: center;
}

/* Subgrid Demo */
.subgrid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.subgrid-item {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.subgrid-item:hover {
  transform: translateY(-5px);
}

.subgrid-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  font-weight: 600;
}

.subgrid-content {
  padding: 1rem;
  flex: 1;
}

.subgrid-footer {
  padding: 1rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

/* Container Queries */
.container-query-demo {
  container-type: inline-size;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  resize: horizontal;
  overflow: auto;
  min-width: 300px;
  border: 2px dashed #dee2e6;
}

.responsive-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

@container (min-width: 400px) {
  .responsive-card {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  .responsive-card img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }
}

@container (min-width: 600px) {
  .responsive-card {
    padding: 2rem;
  }
  
  .responsive-card img {
    width: 150px;
    height: 150px;
  }
}

/* Modern Layout Patterns */
.sidebar-layout {
  display: grid;
  grid-template-columns: minmax(200px, 25%) 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.holy-grail {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 200px;
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
  min-height: 500px;
  gap: 1rem;
}

.pancake-stack {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 400px;
  gap: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.modern-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.modern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.modern-card-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
}

.modern-card-content {
  padding: 1.5rem;
}

.modern-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
}

.modern-card-text {
  color: #666;
  margin-bottom: 1rem;
}

.modern-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modern-btn {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.modern-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  color: white;
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-complex {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
  }
  
  .sidebar-layout {
    grid-template-columns: 1fr;
  }
  
  .holy-grail {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "content"
      "aside"
      "footer";
  }
  
  .flex-container {
    flex-direction: column;
  }
}

/* CSS Scroll Snap */
.scroll-snap-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  scrollbar-width: thin;
}

.scroll-snap-item {
  flex: 0 0 300px;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  scroll-snap-align: start;
}

/* Aspect Ratio */
.aspect-ratio-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.aspect-ratio-item {
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

/* CSS Logical Properties */
.logical-properties {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-inline-start: 4px solid #667eea;
  margin-inline: 1rem;
  padding-block: 1rem;
  padding-inline: 1.5rem;
}
</style>

<div class="css-grid-demo">

# Modern CSS Grid & Flexbox Demo

Eine umfassende Demonstration moderner CSS Layout-Techniken mit Grid, Flexbox, Container Queries und weiteren fortgeschrittenen CSS-Features.

## CSS Grid Layouts

### Basic Grid Layout

<div class="grid-container grid-basic">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>

**Code:**
```css
.grid-basic {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### Complex Grid Layout (Grid Areas)

<div class="grid-container grid-complex">
  <div class="grid-item header">Header</div>
  <div class="grid-item sidebar">Sidebar</div>
  <div class="grid-item main">Main Content</div>
  <div class="grid-item aside">Aside</div>
  <div class="grid-item footer">Footer</div>
</div>

**Code:**
```css
.grid-complex {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
```

### Masonry-Style Layout

<div class="grid-container grid-masonry">
  <div class="masonry-item short">Short Content</div>
  <div class="masonry-item tall">
    <h3>Tall Content</h3>
    <p>This item has more content and takes up more vertical space in the masonry layout.</p>
  </div>
  <div class="masonry-item medium">
    <h3>Medium Content</h3>
    <p>Medium-sized content block.</p>
  </div>
  <div class="masonry-item short">Short</div>
  <div class="masonry-item medium">
    <h3>Another Medium</h3>
    <p>Another medium-sized content block with some additional text.</p>
  </div>
  <div class="masonry-item tall">
    <h3>Another Tall Item</h3>
    <p>This is another tall item with lots of content that spans multiple rows in our masonry-style grid layout.</p>
    <p>Additional paragraph to make it even taller.</p>
  </div>
</div>

## Flexbox Layouts

### Basic Flex Layout

<div class="flex-container">
  <div class="flex-item flex-item-grow">Flexible Item 1</div>
  <div class="flex-item flex-item-grow">Flexible Item 2</div>
  <div class="flex-item flex-item-shrink">Fixed Width</div>
</div>

### Flex with Wrap

<div class="flex-container flex-wrap">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
  <div class="flex-item">Item 4</div>
  <div class="flex-item">Item 5</div>
  <div class="flex-item">Item 6</div>
  <div class="flex-item">Item 7</div>
  <div class="flex-item">Item 8</div>
</div>

### Flex Column Layout

<div class="flex-container flex-column">
  <div class="flex-item">Header</div>
  <div class="flex-item flex-item-grow">Main Content (grows)</div>
  <div class="flex-item">Footer</div>
</div>

### Flex Alignment Options

<div class="flex-container flex-center">
  <div class="flex-item">Centered</div>
  <div class="flex-item">Items</div>
</div>

<div class="flex-container flex-space-between">
  <div class="flex-item">Space</div>
  <div class="flex-item">Between</div>
  <div class="flex-item">Items</div>
</div>

<div class="flex-container flex-space-around">
  <div class="flex-item">Space</div>
  <div class="flex-item">Around</div>
  <div class="flex-item">Items</div>
</div>

## Modern Layout Patterns

### The Holy Grail Layout

<div class="holy-grail">
  <div class="grid-item header" style="grid-area: header;">Header</div>
  <div class="grid-item sidebar" style="grid-area: nav;">Navigation</div>
  <div class="grid-item main" style="grid-area: content;">Main Content</div>
  <div class="grid-item aside" style="grid-area: aside;">Aside</div>
  <div class="grid-item footer" style="grid-area: footer;">Footer</div>
</div>

### Pancake Stack Layout

<div class="pancake-stack">
  <div class="grid-item header">Header</div>
  <div class="grid-item main">Main Content (grows to fill available space)</div>
  <div class="grid-item footer">Footer</div>
</div>

### Sidebar Layout

<div class="sidebar-layout">
  <div class="grid-item sidebar">Sidebar</div>
  <div class="grid-item main">
    <h3>Main Content Area</h3>
    <p>This layout automatically adapts to different screen sizes while maintaining the sidebar structure.</p>
  </div>
</div>

## Card Grid Layout

<div class="card-grid">
  <div class="modern-card">
    <div class="modern-card-image">🎨</div>
    <div class="modern-card-content">
      <h3 class="modern-card-title">Design System</h3>
      <p class="modern-card-text">Create consistent and beautiful user interfaces with our comprehensive design system.</p>
      <div class="modern-card-footer">
        <span style="color: #666; font-size: 0.9rem;">Free</span>
        <a href="#" class="modern-btn">Learn More</a>
      </div>
    </div>
  </div>
  
  <div class="modern-card">
    <div class="modern-card-image">⚡</div>
    <div class="modern-card-content">
      <h3 class="modern-card-title">Performance</h3>
      <p class="modern-card-text">Optimize your website's performance with modern CSS techniques and best practices.</p>
      <div class="modern-card-footer">
        <span style="color: #666; font-size: 0.9rem;">Premium</span>
        <a href="#" class="modern-btn">Get Started</a>
      </div>
    </div>
  </div>
  
  <div class="modern-card">
    <div class="modern-card-image">📱</div>
    <div class="modern-card-content">
      <h3 class="modern-card-title">Responsive</h3>
      <p class="modern-card-text">Build responsive layouts that work perfectly across all devices and screen sizes.</p>
      <div class="modern-card-footer">
        <span style="color: #666; font-size: 0.9rem;">Popular</span>
        <a href="#" class="modern-btn">Try Now</a>
      </div>
    </div>
  </div>
  
  <div class="modern-card">
    <div class="modern-card-image">🔧</div>
    <div class="modern-card-content">
      <h3 class="modern-card-title">Developer Tools</h3>
      <p class="modern-card-text">Enhance your development workflow with powerful tools and utilities.</p>
      <div class="modern-card-footer">
        <span style="color: #666; font-size: 0.9rem;">Free</span>
        <a href="#" class="modern-btn">Download</a>
      </div>
    </div>
  </div>
</div>

## Container Queries (Resize me!)

<div class="container-query-demo">
  <h3>Container Query Demo</h3>
  <p style="margin-bottom: 1rem; color: #666;">Resize this container by dragging the bottom-right corner to see how the card layout changes based on container size, not viewport size.</p>
  <div class="responsive-card">
    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIiByeD0iOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZmlsbD0id2hpdGUiPkltYWdlPC90ZXh0Pjwvc3ZnPg==" alt="Responsive image" style="border-radius: 8px;">
    <div>
      <h4 style="margin: 0 0 0.5rem 0;">Container Queries</h4>
      <p style="margin: 0; color: #666;">This card layout changes based on the container's width, not the viewport width. This is the future of responsive design!</p>
    </div>
  </div>
</div>

## CSS Scroll Snap

<h3>Horizontal Scroll with Snap Points</h3>
<div class="scroll-snap-container">
  <div class="scroll-snap-item">Slide 1</div>
  <div class="scroll-snap-item">Slide 2</div>
  <div class="scroll-snap-item">Slide 3</div>
  <div class="scroll-snap-item">Slide 4</div>
  <div class="scroll-snap-item">Slide 5</div>
  <div class="scroll-snap-item">Slide 6</div>
</div>

## Aspect Ratio

<h3>Consistent Aspect Ratios (16:9)</h3>
<div class="aspect-ratio-demo">
  <div class="aspect-ratio-item">16:9 Ratio</div>
  <div class="aspect-ratio-item">Always 16:9</div>
  <div class="aspect-ratio-item">No matter the width</div>
  <div class="aspect-ratio-item">Perfect for videos</div>
</div>

## CSS Logical Properties

<div class="logical-properties">
  <h3>CSS Logical Properties</h3>
  <p>This box uses logical properties like <code>margin-inline</code>, <code>padding-block</code>, and <code>border-inline-start</code> instead of traditional physical properties. This makes layouts more adaptable to different writing modes and directions.</p>
  <p>Benefits include better internationalization support and more semantic CSS that adapts to content flow direction.</p>
</div>

## Advanced CSS Features Summary

### 🎯 **CSS Grid**
- **2D Layout System**: Control both rows and columns
- **Grid Areas**: Named template areas for semantic layouts
- **Auto-placement**: Intelligent item positioning
- **Responsive**: Works seamlessly with media queries

### 🔄 **Flexbox**
- **1D Layout System**: Perfect for component-level layouts
- **Flexible Items**: Items can grow and shrink as needed
- **Alignment**: Powerful alignment options
- **Direction**: Easy to change layout direction

### 📐 **Container Queries**
- **Element-based**: Responsive design based on container size
- **Component-focused**: Style components based on their context
- **Future-proof**: The next evolution of responsive design

### 🎨 **Modern CSS Features**
- **Scroll Snap**: Smooth scrolling experiences
- **Aspect Ratio**: Consistent proportions
- **Logical Properties**: Better internationalization
- **Custom Properties**: Dynamic theming

### 🚀 **Best Practices**
- Use Grid for page-level layouts
- Use Flexbox for component-level layouts
- Combine Grid and Flexbox for complex layouts
- Consider container queries for component responsiveness
- Use logical properties for international support

## Code Examples

### CSS Grid Template

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav content aside"
    "footer footer footer";
  gap: 1rem;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
```

### Flexbox Template

```css
.flex-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.flex-header,
.flex-footer {
  flex: 0 0 auto;
}

.flex-main {
  display: flex;
  flex: 1;
}

.flex-sidebar {
  flex: 0 0 200px;
}

.flex-content {
  flex: 1;
}
```

### Container Query Template

```css
.card-container {
  container-type: inline-size;
}

.card {
  padding: 1rem;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    gap: 1rem;
  }
}

@container (min-width: 600px) {
  .card {
    padding: 2rem;
  }
}
```

</div>

<script>
// Add some interactive functionality
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add hover effects to grid items
  const gridItems = document.querySelectorAll('.grid-item, .flex-item, .modern-card');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe all major sections
  document.querySelectorAll('.grid-container, .flex-container, .card-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
</script>
