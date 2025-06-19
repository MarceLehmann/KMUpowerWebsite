---
title: "Layout-Optionen: Von Single bis Splash"
date: 2025-06-15
categories:
  - Layouts
  - Design
tags:
  - layout
  - pages
  - design
header:
  teaser: /assets/images/layouts-teaser.svg
  overlay_color: "#333"
  overlay_filter: 0.3
toc: true
excerpt: "Alle verfügbaren Layout-Optionen des Themes und wann sie verwendet werden sollten."
---

Das Jekyll Minimal Mistakes Theme bietet **verschiedene Layout-Optionen** für unterschiedliche Content-Arten.

## Verfügbare Layouts

### 1. Single Layout

Das **Standard-Layout** für normale Seiten und Posts:

```yaml
---
layout: single
author_profile: true
toc: true
toc_sticky: true
---
```

**Ideal für:**
- Blog Posts
- Dokumentation
- About-Seiten
- Content-schwere Seiten

### 2. Splash Layout  

Das **Landing-Page Layout** für Hero-Bereiche:

```yaml
---
layout: splash
header:
  overlay_image: /assets/images/splash-bg.svg
  overlay_filter: 0.5
---
```

**Ideal für:**
- Homepage
- Landing Pages
- Portfolio-Übersichten
- Marketing-Seiten

### 3. Archive Layouts

Verschiedene **Übersichts-Layouts**:

- `layout: posts` - Chronologische Post-Liste
- `layout: categories` - Posts nach Kategorien
- `layout: tags` - Posts nach Tags
- `layout: collection` - Collection-Übersicht

### 4. Home Layout

**Dashboard-artiges Layout** für die Startseite.

## Layout-Komponenten

### Header-Optionen

```yaml
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/header.svg
  actions:
    - label: "Button Text"
      url: "/link/"
      class: "btn--primary"
```

### Sidebar-Konfiguration

```yaml
sidebar:
  - title: "Titel"
    text: "Beschreibung"
  - title: "Links"
    text: |
      - [Link 1](#)
      - [Link 2](#)
```

## Responsive Verhalten

Alle Layouts sind **vollständig responsive**:

- **Desktop:** Volle Layout-Features
- **Tablet:** Angepasste Sidebar
- **Mobile:** Single-Column Layout

{: .notice--success}
**Automatisch:** Alle Layouts passen sich automatisch an die Bildschirmgröße an.

## Customization

### CSS-Klassen

Zusätzliche Styling-Optionen:

```yaml
classes: wide  # Volle Breite ohne Sidebar
```

### Custom Layouts

Du kannst eigene Layouts in `_layouts/` erstellen.

**Mehr Details:** [Showcase-Seite](/showcase/#layouts)
