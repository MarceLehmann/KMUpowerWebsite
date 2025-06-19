---
title: "Alle Button-Variationen im Detail"
date: 2025-06-16
categories:
  - Components
  - Buttons
tags:
  - css
  - styling
  - buttons
header:
  teaser: /assets/images/buttons-teaser.svg
excerpt: "Eine detaillierte Übersicht aller verfügbaren Button-Stile und deren Anwendung."
---

Buttons sind eines der wichtigsten **User Interface Elemente**. Das Minimal Mistakes Theme bietet eine umfangreiche Auswahl an Button-Stilen.

## Standard Button-Farben

### Basis-Buttons

[Standard](#){: .btn}
[Primary](#){: .btn .btn--primary}  
[Success](#){: .btn .btn--success}
[Warning](#){: .btn .btn--warning}
[Danger](#){: .btn .btn--danger}
[Info](#){: .btn .btn--info}
[Inverse](#){: .btn .btn--inverse}

### Code-Beispiel

```markdown
[Primary Button](#){: .btn .btn--primary}
[Success Button](#){: .btn .btn--success}
[Warning Button](#){: .btn .btn--warning}
```

## Button-Größen

### Alle verfügbaren Größen

[X-Small](#){: .btn .btn--primary .btn--x-small}
[Small](#){: .btn .btn--primary .btn--small}
[Normal](#){: .btn .btn--primary}
[Large](#){: .btn .btn--primary .btn--large}
[X-Large](#){: .btn .btn--primary .btn--x-large}

### Block Button

[Full Width Block Button](#){: .btn .btn--primary .btn--block}

## Best Practices

**Do's:**
- Verwende Primary für Haupt-Aktionen
- Success für positive Bestätigungen
- Warning für Aufmerksamkeit
- Danger für destruktive Aktionen

**Don'ts:**
- Nicht zu viele verschiedene Button-Typen mischen
- Primary sparsam verwenden (max. einer pro Sektion)
- Buttons nicht zu klein für Touch-Geräte

{: .notice--info}
**Tipp:** Buttons werden automatisch responsive und touch-friendly dargestellt.

## Implementation

Alle Buttons verwenden Jekyll's Kramdown Syntax:

```markdown
[Button Text](URL){: .btn .btn--FARBE .btn--GRÖSSE}
```

**Weitere Informationen:** [Showcase-Seite](/showcase/#buttons)
