---
title: "Blog & News"
layout: posts
permalink: /blog/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/blog-header.svg
  caption: "Latest News & Updates"
  actions:
    - label: "Subscribe to Newsletter"
      url: "#newsletter"
      class: "btn--primary"
excerpt: "Stay up to date with our latest news, insights, and product updates."
entries_layout: grid
classes: wide
---

<div class="blog-intro">
  <h2>Welcome to Our Blog</h2>
  <p>Discover the latest insights, product updates, and industry news from our team. We share valuable content about web development, design trends, and technology innovations.</p>
</div>

<div class="blog-categories">
  <h3>Categories</h3>
  <div class="category-grid">
    <a href="/categories/#development" class="category-card">
      <span class="category-icon">💻</span>
      <span class="category-name">Development</span>
      <span class="category-count">{{ site.categories['development'].size | default: 0 }}</span>
    </a>
    <a href="/categories/#design" class="category-card">
      <span class="category-icon">🎨</span>
      <span class="category-name">Design</span>
      <span class="category-count">{{ site.categories['design'].size | default: 0 }}</span>
    </a>
    <a href="/categories/#business" class="category-card">
      <span class="category-icon">📈</span>
      <span class="category-name">Business</span>
      <span class="category-count">{{ site.categories['business'].size | default: 0 }}</span>
    </a>
    <a href="/categories/#technology" class="category-card">
      <span class="category-icon">⚡</span>
      <span class="category-name">Technology</span>
      <span class="category-count">{{ site.categories['technology'].size | default: 0 }}</span>
    </a>
  </div>
</div>

<div class="newsletter-signup" id="newsletter">
  <div class="newsletter-card">
    <h3>Subscribe to Our Newsletter</h3>
    <p>Get the latest posts delivered directly to your inbox.</p>
    <form class="newsletter-form" action="#" method="post">
      <div class="form-group">
        <input type="email" name="email" placeholder="Your email address" required>
        <button type="submit" class="btn btn--primary">Subscribe</button>
      </div>
      <p class="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
    </form>
  </div>
</div>

<style>
.blog-intro {
  text-align: center;
  margin: 2rem 0 3rem;
  padding: 2rem;
  background: var(--background-color);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.blog-categories {
  margin: 3rem 0;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color);
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-decoration: none;
  color: var(--link-color);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.category-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.category-count {
  font-size: 0.875rem;
  color: var(--muted-text-color);
}

.newsletter-signup {
  margin: 4rem 0;
  text-align: center;
}

.newsletter-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-color-dark));
  color: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.newsletter-card h3 {
  margin-bottom: 0.5rem;
  color: white;
}

.newsletter-card p {
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.newsletter-form .form-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  background: white;
  color: var(--primary-color);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  background: #f8f9fa;
  transform: translateY(-1px);
}

.newsletter-note {
  font-size: 0.875rem;
  opacity: 0.8;
  margin: 0;
}

@media (max-width: 600px) {
  .newsletter-form .form-group {
    flex-direction: column;
  }
  
  .category-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
