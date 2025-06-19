---
title: "Bootstrap 5 Framework Demo"
permalink: /bootstrap-demo/
header:
  image: /assets/images/bootstrap-header.svg
  teaser: /assets/images/bootstrap-teaser.svg
layout: single
toc: true
toc_sticky: true
author_profile: false
sidebar:
  nav: "main"
---

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">

<style>
.bootstrap-demo {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
}

/* Custom Bootstrap theme colors */
:root {
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
}

.custom-hero {
  background: linear-gradient(135deg, var(--bs-primary), var(--bs-info));
  color: white;
  padding: 4rem 0;
  margin-bottom: 3rem;
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.gradient-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.card-hover {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: var(--bs-primary);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.timeline-item {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid var(--bs-primary);
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-left {
  left: 0;
}

.timeline-right {
  left: 50%;
}

.timeline-right::after {
  left: -16px;
}

.timeline-content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }
  
  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  .timeline-item::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .timeline-left::after, .timeline-right::after {
    left: 15px;
  }

  .timeline-right {
    left: 0%;
  }
}

.pricing-card {
  position: relative;
  z-index: 1;
}

.pricing-card.featured {
  transform: scale(1.05);
  z-index: 2;
}

.pricing-card.featured .card-header {
  background: linear-gradient(135deg, var(--bs-primary), var(--bs-info));
  color: white;
}
</style>

<div class="bootstrap-demo">

# Bootstrap 5 Framework Demo

Eine umfassende Demonstration des Bootstrap 5 CSS Frameworks mit allen wichtigen Komponenten, Utilities und Layout-Systemen.

<div class="custom-hero text-center">
  <div class="container">
    <h1 class="display-4 fw-bold mb-4">Build Fast with Bootstrap 5</h1>
    <p class="lead mb-4">The world's most popular framework for building responsive, mobile-first sites with a powerful grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="#components" class="btn btn-light btn-lg">
        <i class="bi bi-grid-3x3-gap me-2"></i>
        Explore Components
      </a>
      <a href="#utilities" class="btn btn-outline-light btn-lg">
        <i class="bi bi-palette me-2"></i>
        View Utilities
      </a>
    </div>
  </div>
</div>

## Grid System

<div class="container">
  <div class="row mb-5">
    <div class="col-12">
      <h2 class="h3 mb-4">Responsive Grid Layout</h2>
    </div>
    <div class="col-lg-4 col-md-6 mb-3">
      <div class="p-3 bg-primary text-white text-center rounded">
        <h5>Col 1</h5>
        <p class="mb-0 small">lg-4 md-6</p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-3">
      <div class="p-3 bg-success text-white text-center rounded">
        <h5>Col 2</h5>
        <p class="mb-0 small">lg-4 md-6</p>
      </div>
    </div>
    <div class="col-lg-4 col-md-12 mb-3">
      <div class="p-3 bg-warning text-dark text-center rounded">
        <h5>Col 3</h5>
        <p class="mb-0 small">lg-4 md-12</p>
      </div>
    </div>
  </div>
</div>

## Components {#components}

### Buttons & Form Controls

<div class="container mb-5">
  <div class="row">
    <div class="col-lg-6 mb-4">
      <h3 class="h4 mb-3">Button Variations</h3>
      
      <div class="mb-3">
        <h5 class="h6 mb-2">Solid Buttons</h5>
        <div class="d-flex gap-2 flex-wrap">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
        </div>
      </div>
      
      <div class="mb-3">
        <h5 class="h6 mb-2">Outline Buttons</h5>
        <div class="d-flex gap-2 flex-wrap">
          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
        </div>
      </div>
      
      <div class="mb-3">
        <h5 class="h6 mb-2">Button Sizes</h5>
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <button type="button" class="btn btn-primary btn-lg">Large</button>
          <button type="button" class="btn btn-primary">Default</button>
          <button type="button" class="btn btn-primary btn-sm">Small</button>
        </div>
      </div>
    </div>
    
    <div class="col-lg-6 mb-4">
      <h3 class="h4 mb-3">Form Elements</h3>
      
      <form>
        <div class="mb-3">
          <label for="exampleEmail" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleEmail" placeholder="name@example.com">
        </div>
        
        <div class="mb-3">
          <label for="exampleSelect" class="form-label">Example select</label>
          <select class="form-select" id="exampleSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        
        <div class="mb-3">
          <label for="exampleTextarea" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
        
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck">
          <label class="form-check-label" for="exampleCheck">
            Check me out
          </label>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>

### Cards & Content

<div class="container mb-5">
  <h3 class="h4 mb-4">Card Components</h3>
  
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card card-hover h-100">
        <div class="card-header bg-primary text-white">
          <i class="bi bi-star-fill me-2"></i>
          Featured Card
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text flex-grow-1">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary mt-auto">Go somewhere</a>
        </div>
      </div>
    </div>
    
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card card-hover h-100">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGVlMmU2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj4zMDB4MjAwPC90ZXh0Pjwvc3ZnPg==" class="card-img-top" alt="Card image">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Card with image</h5>
          <p class="card-text flex-grow-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-outline-primary">View</a>
            <a href="#" class="btn btn-primary">Download</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card gradient-card card-hover h-100">
        <div class="card-body d-flex flex-column text-center">
          <i class="bi bi-lightning-charge display-4 mb-3"></i>
          <h5 class="card-title">Premium Feature</h5>
          <p class="card-text flex-grow-1">This card has a gradient background and represents a premium feature or upgrade option.</p>
          <a href="#" class="btn btn-light mt-auto">Upgrade Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

### Alerts & Notifications

<div class="container mb-5">
  <h3 class="h4 mb-4">Alert Components</h3>
  
  <div class="alert alert-primary d-flex align-items-center" role="alert">
    <i class="bi bi-info-circle-fill me-2"></i>
    <div>
      A simple primary alert with an icon—check it out!
    </div>
  </div>
  
  <div class="alert alert-success d-flex align-items-center" role="alert">
    <i class="bi bi-check-circle-fill me-2"></i>
    <div>
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
  </div>
  
  <div class="alert alert-warning d-flex align-items-center" role="alert">
    <i class="bi bi-exclamation-triangle-fill me-2"></i>
    <div>
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
  </div>
  
  <div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
    <i class="bi bi-exclamation-octagon-fill me-2"></i>
    <div>
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>
</div>

### Navigation & Tabs

<div class="container mb-5">
  <h3 class="h4 mb-4">Navigation Components</h3>
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-bootstrap me-2"></i>
        Navbar
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">
        <i class="bi bi-house me-1"></i>Home
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button">
        <i class="bi bi-person me-1"></i>Profile
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button">
        <i class="bi bi-envelope me-1"></i>Contact
      </button>
    </li>
  </ul>
  
  <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="home" role="tabpanel">
      <div class="p-4 bg-light rounded">
        <h5>Home Content</h5>
        <p>This is the home tab content. Bootstrap's tab component is perfect for organizing content into separate views.</p>
      </div>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel">
      <div class="p-4 bg-light rounded">
        <h5>Profile Content</h5>
        <p>This is the profile tab content. You can switch between tabs to show different content panels.</p>
      </div>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel">
      <div class="p-4 bg-light rounded">
        <h5>Contact Content</h5>
        <p>This is the contact tab content. Each tab can contain different types of content and components.</p>
      </div>
    </div>
  </div>
</div>

## Advanced Components

### Timeline

<div class="container mb-5">
  <h3 class="h4 mb-4 text-center">Project Timeline</h3>
  <div class="timeline">
    <div class="timeline-item timeline-left">
      <div class="timeline-content">
        <h5>Project Planning</h5>
        <p class="text-muted">January 2024</p>
        <p>Initial project setup and requirements gathering. Team formation and tool selection.</p>
      </div>
    </div>
    <div class="timeline-item timeline-right">
      <div class="timeline-content">
        <h5>Design Phase</h5>
        <p class="text-muted">February 2024</p>
        <p>UI/UX design, wireframing, and prototyping. User research and testing.</p>
      </div>
    </div>
    <div class="timeline-item timeline-left">
      <div class="timeline-content">
        <h5>Development</h5>
        <p class="text-muted">March 2024</p>
        <p>Core development, feature implementation, and integration testing.</p>
      </div>
    </div>
    <div class="timeline-item timeline-right">
      <div class="timeline-content">
        <h5>Launch</h5>
        <p class="text-muted">April 2024</p>
        <p>Product launch, marketing campaign, and user onboarding.</p>
      </div>
    </div>
  </div>
</div>

### Pricing Cards

<div class="container mb-5">
  <h3 class="h4 mb-4 text-center">Pricing Plans</h3>
  <div class="row justify-content-center">
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card pricing-card h-100">
        <div class="card-header text-center">
          <h5 class="card-title">Basic</h5>
          <h2 class="display-4">$9<small class="text-muted fs-6">/mo</small></h2>
        </div>
        <div class="card-body d-flex flex-column">
          <ul class="list-unstyled">
            <li><i class="bi bi-check text-success me-2"></i>10 users included</li>
            <li><i class="bi bi-check text-success me-2"></i>2 GB of storage</li>
            <li><i class="bi bi-check text-success me-2"></i>Email support</li>
            <li><i class="bi bi-x text-danger me-2"></i>Premium features</li>
          </ul>
          <button class="btn btn-outline-primary mt-auto">Choose Plan</button>
        </div>
      </div>
    </div>
    
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card pricing-card featured h-100 border-primary">
        <div class="card-header text-center text-white">
          <h5 class="card-title">Pro <span class="badge bg-light text-primary">Most Popular</span></h5>
          <h2 class="display-4">$29<small class="text-white-50 fs-6">/mo</small></h2>
        </div>
        <div class="card-body d-flex flex-column">
          <ul class="list-unstyled">
            <li><i class="bi bi-check text-success me-2"></i>20 users included</li>
            <li><i class="bi bi-check text-success me-2"></i>10 GB of storage</li>
            <li><i class="bi bi-check text-success me-2"></i>Priority email support</li>
            <li><i class="bi bi-check text-success me-2"></i>Premium features</li>
          </ul>
          <button class="btn btn-primary mt-auto">Choose Plan</button>
        </div>
      </div>
    </div>
    
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card pricing-card h-100">
        <div class="card-header text-center">
          <h5 class="card-title">Enterprise</h5>
          <h2 class="display-4">$99<small class="text-muted fs-6">/mo</small></h2>
        </div>
        <div class="card-body d-flex flex-column">
          <ul class="list-unstyled">
            <li><i class="bi bi-check text-success me-2"></i>Unlimited users</li>
            <li><i class="bi bi-check text-success me-2"></i>Unlimited storage</li>
            <li><i class="bi bi-check text-success me-2"></i>24/7 phone support</li>
            <li><i class="bi bi-check text-success me-2"></i>All premium features</li>
          </ul>
          <button class="btn btn-outline-primary mt-auto">Contact Sales</button>
        </div>
      </div>
    </div>
  </div>
</div>

## Utilities & Helpers {#utilities}

<div class="container mb-5">
  <h3 class="h4 mb-4">Bootstrap Utilities</h3>
  
  <div class="row">
    <div class="col-lg-6 mb-4">
      <h5>Spacing Utilities</h5>
      <div class="bg-light p-3 rounded">
        <div class="bg-primary text-white p-2 mb-2 rounded">Padding: p-2</div>
        <div class="bg-success text-white p-3 mb-3 rounded">Padding: p-3</div>
        <div class="bg-warning text-dark px-4 py-2 rounded">Padding: px-4 py-2</div>
      </div>
    </div>
    
    <div class="col-lg-6 mb-4">
      <h5>Text Utilities</h5>
      <div class="bg-light p-3 rounded">
        <p class="text-primary mb-1">Primary text color</p>
        <p class="text-success mb-1">Success text color</p>
        <p class="text-warning mb-1">Warning text color</p>
        <p class="text-danger mb-1">Danger text color</p>
        <p class="fw-bold mb-1">Bold text</p>
        <p class="fst-italic mb-1">Italic text</p>
        <p class="text-decoration-underline mb-1">Underlined text</p>
        <p class="text-uppercase mb-0">Uppercase text</p>
      </div>
    </div>
    
    <div class="col-lg-6 mb-4">
      <h5>Display Utilities</h5>
      <div class="bg-light p-3 rounded">
        <div class="d-flex bg-primary text-white p-2 mb-2 rounded">
          <div class="me-2">Flex item 1</div>
          <div class="ms-auto">Flex item 2</div>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success">Grid button 1</button>
          <button class="btn btn-info">Grid button 2</button>
        </div>
      </div>
    </div>
    
    <div class="col-lg-6 mb-4">
      <h5>Border & Rounded</h5>
      <div class="bg-light p-3 rounded">
        <div class="border border-primary p-2 mb-2">Border primary</div>
        <div class="border border-success rounded p-2 mb-2">Border success rounded</div>
        <div class="border border-warning rounded-pill p-2 mb-2">Border warning rounded-pill</div>
        <div class="bg-danger text-white rounded-circle p-3 d-inline-block">Circle</div>
      </div>
    </div>
  </div>
</div>

## Interactive Features

<div class="container mb-5">
  <h3 class="h4 mb-4">JavaScript Components</h3>
  
  <div class="row">
    <div class="col-lg-6 mb-4">
      <h5>Modal Example</h5>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <i class="bi bi-window me-2"></i>Launch Modal
      </button>
      
      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Bootstrap Modal</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p>This is a Bootstrap modal dialog. It's perfect for displaying content that requires user attention without navigating away from the current page.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-lg-6 mb-4">
      <h5>Tooltip & Popover</h5>
      <button type="button" class="btn btn-outline-secondary me-2" data-bs-toggle="tooltip" title="This is a tooltip">
        <i class="bi bi-info-circle me-1"></i>Tooltip
      </button>
      <button type="button" class="btn btn-outline-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="This is a popover with some content.">
        <i class="bi bi-chat-dots me-1"></i>Popover
      </button>
    </div>
    
    <div class="col-12 mb-4">
      <h5>Accordion</h5>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              <i class="bi bi-gear me-2"></i>Bootstrap Features
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Bootstrap includes dozens of utilities for colors, sizing, spacing, and more. This comprehensive approach reduces the need for custom CSS.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              <i class="bi bi-phone me-2"></i>Responsive Design
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with flexbox and is fully responsive.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              <i class="bi bi-puzzle me-2"></i>Component Library
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Bootstrap comes with a comprehensive component library including buttons, forms, navigation, modals, and much more.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Call to Action

<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="text-center bg-primary text-white rounded p-5">
        <h2 class="display-5 fw-bold mb-3">Ready to Build with Bootstrap?</h2>
        <p class="lead mb-4">Get started with Bootstrap 5, the world's most popular framework for building responsive, mobile-first sites.</p>
        <div class="d-flex gap-3 justify-content-center flex-wrap">
          <a href="https://getbootstrap.com/" class="btn btn-light btn-lg">
            <i class="bi bi-download me-2"></i>Download Bootstrap
          </a>
          <a href="https://getbootstrap.com/docs/" class="btn btn-outline-light btn-lg">
            <i class="bi bi-book me-2"></i>Documentation
          </a>
          <button class="btn btn-outline-light btn-lg" onclick="showToast()">
            <i class="bi bi-bell me-2"></i>Show Toast
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<!-- Toast -->
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert">
    <div class="toast-header">
      <i class="bi bi-bootstrap-fill text-primary me-2"></i>
      <strong class="me-auto">Bootstrap</strong>
      <small>Just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Hello! This is a Bootstrap toast notification.
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>
// Initialize Bootstrap components
document.addEventListener('DOMContentLoaded', function() {
  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Initialize popovers
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

function showToast() {
  var toastElement = document.getElementById('liveToast');
  var toast = new bootstrap.Toast(toastElement);
  toast.show();
}
</script>
