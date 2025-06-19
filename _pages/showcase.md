---
title: "Komplette Übersicht aller visuellen Elemente"
layout: single
permalink: /showcase/
toc: true
toc_sticky: true
toc_label: "Komponenten"
sidebar:
  nav: "showcase_nav"
header:
  overlay_color: "#333"
  overlay_filter: "0.4"
  overlay_image: /assets/images/showcase-header.svg
  caption: "Alle Minimal Mistakes Komponenten auf einen Blick"

gallery:
  - url: /assets/images/gallery-1.svg
    image_path: /assets/images/gallery-1-th.svg
    alt: "Beispiel Gallery Bild 1"
    title: "Gallery Bild 1"
  - url: /assets/images/gallery-2.svg
    image_path: /assets/images/gallery-2-th.svg
    alt: "Beispiel Gallery Bild 2"
    title: "Gallery Bild 2"
  - url: /assets/images/gallery-3.svg
    image_path: /assets/images/gallery-3-th.svg
    alt: "Beispiel Gallery Bild 3"
    title: "Gallery Bild 3"

feature_row_demo:
  - image_path: /assets/images/demo-feature-1.svg
    alt: "Feature 1"
    title: "Erste Feature"
    excerpt: "Dies ist eine **Beispiel-Feature** mit Text und Bild."
    url: "#"
    btn_label: "Mehr erfahren"
    btn_class: "btn--primary"
  - image_path: /assets/images/demo-feature-2.svg
    alt: "Feature 2"
    title: "Zweite Feature"
    excerpt: "Noch eine Feature mit *kursivem Text* und Button."
    url: "#"
    btn_label: "Details"
    btn_class: "btn--inverse"
  - image_path: /assets/images/demo-feature-3.svg
    alt: "Feature 3"
    title: "Dritte Feature"
    excerpt: "Letzte Feature mit `Code-Text` und Link."
    url: "#"
    btn_label: "Ansehen"
    btn_class: "btn--success"
---

Diese Seite zeigt **alle verfügbaren visuellen Elemente** des Jekyll Minimal Mistakes Themes. Jedes Element wird mit einer Beschreibung und dem entsprechenden Code gezeigt.

{: .notice--primary}
**Hinweis:** Diese Seite dient als vollständige Referenz für alle verfügbaren Komponenten. Du kannst den Code direkt kopieren und in deinen eigenen Seiten verwenden.

## Typography

### Überschriften

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

### Text-Styling

Das ist **fetter Text**, das ist *kursiver Text*, das ist `Inline-Code`, das ist ~~durchgestrichener Text~~.

Hier ist ein Link zu [Google](https://google.com) und hier ist ein externer Link zu [GitHub](https://github.com){:target="_blank"}.

### Text-Alignment

Links ausgerichteter Text.
{: .text-left}

Zentrierter Text.
{: .text-center}

Rechts ausgerichteter Text.
{: .text-right}

**Blocksatz-Text.** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio, eu elementum purus. In hac habitasse platea dictumst.
{: .text-justify}

### Hervorhebungen

Das ist ein ==hervorgehobener Text== mit Marker.

Das ist ein <mark>anderer hervorgehobener Text</mark> mit HTML.

## Buttons

### Standard Buttons

[Standard Button](#){: .btn}
[Primary Button](#){: .btn .btn--primary}
[Success Button](#){: .btn .btn--success}
[Warning Button](#){: .btn .btn--warning}
[Danger Button](#){: .btn .btn--danger}
[Info Button](#){: .btn .btn--info}
[Inverse Button](#){: .btn .btn--inverse}

### Button-Größen

[X-Small](#){: .btn .btn--primary .btn--x-small}
[Small](#){: .btn .btn--primary .btn--small}
[Large](#){: .btn .btn--primary .btn--large}
[X-Large](#){: .btn .btn--primary .btn--x-large}

### Block Buttons

[Block Button](#){: .btn .btn--primary .btn--block}

## Notice Boxes

### Standard Notices

**Watch out!** Dies ist eine Standard-Notiz.
{: .notice}

**Primary Notice!** Dies ist eine primäre Notiz mit wichtigen Informationen.
{: .notice--primary}

**Info Notice!** Dies ist eine Info-Notiz mit zusätzlichen Details.
{: .notice--info}

**Warning Notice!** Dies ist eine Warn-Notiz - bitte beachten!
{: .notice--warning}

**Danger Notice!** Dies ist eine Gefahr-Notiz - Vorsicht geboten!
{: .notice--danger}

**Success Notice!** Dies ist eine Erfolgs-Notiz - alles in Ordnung!
{: .notice--success}

### Erweiterte Notice

**ProTip:** Du kannst Notice-Boxen auch mit Markdown-Formatierung verwenden:

- Liste mit **fettem Text**
- Element mit *kursivem Text*  
- Element mit `Inline-Code`

{: .notice--info}

## Images & Figures

### Einfaches Bild

![Beispiel Bild](/assets/images/example.svg)

### Bild mit Ausrichtung

![Left Aligned Image](/assets/images/example-left.svg){: .align-left}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio, eu elementum purus. In hac habitasse platea dictumst. Fusce sed sapien eleifend, sollicitudin neque non, faucibus est.

![Center Aligned Image](/assets/images/example-center.svg){: .align-center}

![Right Aligned Image](/assets/images/example-right.svg){: .align-right}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio, eu elementum purus. In hac habitasse platea dictumst.

### Figure mit Caption

{% include figure image_path="/assets/images/example-figure.svg" alt="Beispiel Figure" caption="Dies ist eine Figure mit Caption und Popup-Funktionalität." popup=true %}

## Galleries

### Standard Gallery

{% include gallery caption="Dies ist eine Beispiel-Gallery mit drei Bildern." %}

### Gallery mit Layout

{% include gallery id="gallery" layout="half" caption="Gallery mit Half-Layout" %}

## Feature Rows

### Standard Feature Row

{% include feature_row id="feature_row_demo" %}

### Feature Row Left

{% include feature_row id="feature_row_demo" type="left" %}

### Feature Row Right  

{% include feature_row id="feature_row_demo" type="right" %}

### Feature Row Center

{% include feature_row id="feature_row_demo" type="center" %}

## Code Blocks

### Inline Code

Hier ist etwas `inline code` im Text.

### Code Block ohne Syntax Highlighting

```
Dies ist ein einfacher Code-Block
ohne Syntax-Highlighting.
Perfekt für einfache Beispiele.
```

### Code Block mit Syntax Highlighting

```html
<!DOCTYPE html>
<html>
<head>
    <title>Beispiel HTML</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Dies ist ein <strong>HTML-Beispiel</strong>.</p>
</body>
</html>
```

```css
.example-class {
    color: #333;
    font-size: 16px;
    margin: 10px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 4px;
}
```

```javascript
function greetUser(name) {
    console.log(`Hello, ${name}!`);
    return `Welcome to the showcase, ${name}!`;
}

greetUser('Jekyll User');
```

```yaml
# _config.yml Beispiel
title: "Meine Jekyll Seite"
description: "Eine tolle Jekyll Website"
plugins:
  - jekyll-feed
  - jekyll-sitemap
```

## Tables

### Einfache Tabelle

| Name | Position | Alter | Stadt |
|------|----------|-------|-------|
| Max Mustermann | Entwickler | 28 | Berlin |
| Lisa Schmidt | Designerin | 32 | München |
| Tom Weber | Manager | 35 | Hamburg |

### Tabelle mit Alignment

| Links | Zentriert | Rechts |
|:------|:---------:|-------:|
| Links | Mitte | Rechts |
| Ausgerichtet | Text | Spalten |

## Lists

### Ungeordnete Liste

- Erstes Element
- Zweites Element
  - Verschachteltes Element
  - Noch ein verschachteltes Element
- Drittes Element

### Geordnete Liste

1. Erster Schritt
2. Zweiter Schritt
   1. Unterschritt A
   2. Unterschritt B
3. Dritter Schritt

### Aufgabenliste

- [x] Erledigte Aufgabe
- [x] Noch eine erledigte Aufgabe  
- [ ] Offene Aufgabe
- [ ] Weitere offene Aufgabe

### Definition Liste

Apple
: Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

Orange  
: The fruit of an evergreen tree of the genus Citrus.

## Blockquotes

> Dies ist ein einfaches Blockquote.
> Es kann über mehrere Zeilen gehen.

> Dies ist ein Blockquote mit einer **Quelle**.
>
> <cite>-- Berühmte Person</cite>

## Horizontal Rules

Text vor der Linie.

---

Text nach der Linie.

***

Noch eine Linie.

## Abbreviations

HTML ist eine *[HTML]: HyperText Markup Language Markup-Sprache.

CSS wird für *[CSS]: Cascading Style Sheets das Styling verwendet.

## Footnotes

Dies ist ein Text mit einer Fußnote[^1]. Hier ist noch eine[^2].

[^1]: Dies ist die erste Fußnote.
[^2]: Dies ist die zweite Fußnote mit mehr Text und einem [Link](https://example.com).

## Video Embed

### YouTube Video

{% include video id="dQw4w9WgXcQ" provider="youtube" %}

### Vimeo Video  

{% include video id="212731897" provider="vimeo" %}

## Archive Single

Hier ist ein Beispiel für die Archive-Single Darstellung:

{% include archive-single.html type="grid" %}

## Social Share

Die Social-Share Buttons erscheinen automatisch bei Posts, aber können auch manuell eingefügt werden.

## Author Profile

Das Author Profile wird in der Sidebar angezeigt und kann wie folgt konfiguriert werden.

## Custom Utility Classes

### Text mit verschiedenen Größen

Text normal
{: .text-normal}

Text klein
{: .text-small}

Text groß  
{: .text-large}

### Padding und Margin

Text mit extra Padding
{: .padding--large}

Text mit Margin
{: .margin--large}

## Navigation Breadcrumbs

Die Breadcrumbs werden automatisch generiert basierend auf der Seitenstruktur.

## Table of Contents (TOC)

Das Inhaltsverzeichnis (rechts) wird automatisch aus den Überschriften generiert.

## Search

Die Suchfunktionalität ist standardmäßig aktiviert und durchsucht alle Inhalte.

---

## Implementation Code

Alle hier gezeigten Elemente können direkt kopiert und verwendet werden. Der entsprechende Code ist in der Dokumentation des Themes verfügbar.

**[Minimal Mistakes Dokumentation](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/){: .btn .btn--primary}**
**[GitHub Repository](https://github.com/mmistakes/minimal-mistakes){: .btn .btn--inverse}**

{: .notice--success}
**Fertig!** Du hast jetzt eine vollständige Übersicht aller verfügbaren visuellen Elemente des Jekyll Minimal Mistakes Themes gesehen.
