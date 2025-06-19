---
title: "Erweiterte Komponenten & Formulare"
layout: single
permalink: /advanced-components/
toc: true
toc_sticky: true
author_profile: true
header:
  overlay_color: "#667eea"
  overlay_filter: "0.6"
  overlay_image: /assets/images/advanced-header.svg
---

Diese Seite zeigt **erweiterte visuelle Komponenten** und **Formulare**, die im Standard-Showcase nicht enthalten sind.

## Forms & Input Elements

### Basic Form Elements

<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Ihr vollständiger Name" style="width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ddd; border-radius: 4px;">
  </div>
  
  <div class="form-group">
    <label for="email">E-Mail:</label>
    <input type="email" id="email" name="email" placeholder="ihre.email@beispiel.de" style="width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ddd; border-radius: 4px;">
  </div>
  
  <div class="form-group">
    <label for="message">Nachricht:</label>
    <textarea id="message" name="message" rows="4" placeholder="Ihre Nachricht hier..." style="width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ddd; border-radius: 4px; resize: vertical;"></textarea>
  </div>
  
  <div class="form-group">
    <label for="category">Kategorie:</label>
    <select id="category" name="category" style="width: 100%; padding: 8px; margin: 5px 0; border: 1px solid #ddd; border-radius: 4px;">
      <option value="">Bitte wählen...</option>
      <option value="general">Allgemeine Anfrage</option>
      <option value="support">Support</option>
      <option value="feedback">Feedback</option>
    </select>
  </div>
  
  <div class="form-group" style="margin: 15px 0;">
    <input type="checkbox" id="newsletter" name="newsletter" style="margin-right: 8px;">
    <label for="newsletter">Newsletter abonnieren</label>
  </div>
  
  <div class="form-group" style="margin: 15px 0;">
    <strong>Kontakt-Präferenz:</strong><br>
    <input type="radio" id="contact-email" name="contact" value="email" style="margin-right: 5px;">
    <label for="contact-email" style="margin-right: 15px;">E-Mail</label>
    
    <input type="radio" id="contact-phone" name="contact" value="phone" style="margin-right: 5px;">
    <label for="contact-phone">Telefon</label>
  </div>
  
  <button type="submit" class="btn btn--primary">Nachricht senden</button>
  <button type="reset" class="btn btn--inverse">Zurücksetzen</button>
</form>

### Form Code Example

```html
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Ihr Name">
  </div>
  
  <button type="submit" class="btn btn--primary">Senden</button>
</form>
```

## Advanced Notice Variations

### Icon-Enhanced Notices

<div class="notice notice--info" style="position: relative; padding-left: 50px;">
  <i class="fas fa-info-circle" style="position: absolute; left: 15px; top: 15px; font-size: 18px; color: #3498db;"></i>
  <strong>Info mit Icon:</strong> Diese Notice hat ein Custom-Icon für bessere visuelle Kommunikation.
</div>

<div class="notice notice--warning" style="position: relative; padding-left: 50px;">
  <i class="fas fa-exclamation-triangle" style="position: absolute; left: 15px; top: 15px; font-size: 18px; color: #f39c12;"></i>
  <strong>Warnung mit Icon:</strong> Wichtige Informationen werden durch Icons verstärkt.
</div>

<div class="notice notice--success" style="position: relative; padding-left: 50px;">
  <i class="fas fa-check-circle" style="position: absolute; left: 15px; top: 15px; font-size: 18px; color: #27ae60;"></i>
  <strong>Erfolg mit Icon:</strong> Bestätigungen werden optisch hervorgehoben.
</div>

### Custom Callout Boxes

<div style="border-left: 4px solid #667eea; background: #f8f9ff; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0;">
  <h4 style="margin-top: 0; color: #667eea;">💡 Pro-Tipp</h4>
  <p style="margin-bottom: 0;">Verwende Custom-Callouts für besonders wichtige Informationen, die sich vom normalen Content abheben sollen.</p>
</div>

<div style="border-left: 4px solid #e74c3c; background: #fdf2f2; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0;">
  <h4 style="margin-top: 0; color: #e74c3c;">⚠️ Wichtiger Hinweis</h4>
  <p style="margin-bottom: 0;">Kritische Informationen können in roten Callout-Boxen hervorgehoben werden.</p>
</div>

<div style="border-left: 4px solid #27ae60; background: #f2f8f2; padding: 20px; margin: 20px 0; border-radius: 0 4px 4px 0;">
  <h4 style="margin-top: 0; color: #27ae60;">✅ Best Practice</h4>
  <p style="margin-bottom: 0;">Empfehlungen und bewährte Praktiken werden in grünen Boxen präsentiert.</p>
</div>

## Progress Indicators

### Progress Bars

**HTML & CSS**
<div style="background: #f0f0f0; border-radius: 10px; padding: 3px; margin: 10px 0;">
  <div style="background: linear-gradient(90deg, #667eea, #764ba2); height: 20px; border-radius: 8px; width: 90%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: bold;">90%</div>
</div>

**JavaScript**
<div style="background: #f0f0f0; border-radius: 10px; padding: 3px; margin: 10px 0;">
  <div style="background: linear-gradient(90deg, #f093fb, #f5576c); height: 20px; border-radius: 8px; width: 75%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: bold;">75%</div>
</div>

**Jekyll & Markdown**
<div style="background: #f0f0f0; border-radius: 10px; padding: 3px; margin: 10px 0;">
  <div style="background: linear-gradient(90deg, #4facfe, #00f2fe); height: 20px; border-radius: 8px; width: 85%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px; font-weight: bold;">85%</div>
</div>

## Custom Cards

### Feature Cards

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
  
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;">
    <div style="font-size: 32px; margin-bottom: 10px;">🎨</div>
    <h3 style="margin: 0 0 10px 0; color: #333;">Design</h3>
    <p style="color: #666; margin: 0;">Moderne und ansprechende visuelle Gestaltung für alle Komponenten.</p>
  </div>
  
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;">
    <div style="font-size: 32px; margin-bottom: 10px;">⚡</div>
    <h3 style="margin: 0 0 10px 0; color: #333;">Performance</h3>
    <p style="color: #666; margin: 0;">Optimiert für schnelle Ladezeiten und beste User Experience.</p>
  </div>
  
  <div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.2s;">
    <div style="font-size: 32px; margin-bottom: 10px;">📱</div>
    <h3 style="margin: 0 0 10px 0; color: #333;">Responsive</h3>
    <p style="color: #666; margin: 0;">Perfekte Darstellung auf allen Geräten und Bildschirmgrößen.</p>
  </div>
  
</div>

## Social Media Integration

### Social Share Buttons (Custom Style)

<div style="display: flex; gap: 10px; margin: 20px 0; flex-wrap: wrap;">
  <a href="#" style="background: #1da1f2; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 14px; display: flex; align-items: center; gap: 5px;">
    <i class="fab fa-twitter"></i> Twitter
  </a>
  <a href="#" style="background: #4267b2; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 14px; display: flex; align-items: center; gap: 5px;">
    <i class="fab fa-facebook-f"></i> Facebook
  </a>
  <a href="#" style="background: #0077b5; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 14px; display: flex; align-items: center; gap: 5px;">
    <i class="fab fa-linkedin-in"></i> LinkedIn
  </a>
  <a href="#" style="background: #25d366; color: white; padding: 8px 16px; border-radius: 20px; text-decoration: none; font-size: 14px; display: flex; align-items: center; gap: 5px;">
    <i class="fab fa-whatsapp"></i> WhatsApp
  </a>
</div>

## Advanced Typography

### Text Highlighting Variations

Das ist ein Text mit <mark style="background: linear-gradient(90deg, #667eea, #764ba2); color: white; padding: 2px 6px; border-radius: 3px;">Gradient-Highlighting</mark> für besonderen Fokus.

<p style="position: relative; display: inline-block;">
  Dieser Text hat einen 
  <span style="position: relative;">
    <span style="background: linear-gradient(90deg, #ff6b6b, #feca57); height: 8px; position: absolute; bottom: 2px; left: 0; right: 0; z-index: -1; border-radius: 2px;"></span>
    Unterstrich-Effekt
  </span>
  für moderne Hervorhebung.
</p>

### Quote Variations

<blockquote style="border-left: 4px solid #667eea; background: linear-gradient(135deg, #667eea11, #764ba211); padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0; position: relative;">
  <p style="font-size: 18px; font-style: italic; margin: 0 0 10px 0;">"Design ist nicht nur, wie es aussieht und wie es sich anfühlt. Design ist, wie es funktioniert."</p>
  <footer style="font-size: 14px; color: #666;">— Steve Jobs</footer>
</blockquote>

## Custom Tables

### Enhanced Table Styling

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <thead>
      <tr style="background: linear-gradient(90deg, #667eea, #764ba2); color: white;">
        <th style="padding: 15px; text-align: left; font-weight: 600;">Feature</th>
        <th style="padding: 15px; text-align: center; font-weight: 600;">Status</th>
        <th style="padding: 15px; text-align: center; font-weight: 600;">Priority</th>
        <th style="padding: 15px; text-align: right; font-weight: 600;">Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #f0f0f0;">
        <td style="padding: 15px; font-weight: 500;">Responsive Design</td>
        <td style="padding: 15px; text-align: center;"><span style="background: #27ae60; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px;">✓ Complete</span></td>
        <td style="padding: 15px; text-align: center;"><span style="color: #e74c3c; font-weight: 600;">High</span></td>
        <td style="padding: 15px; text-align: right; font-weight: 600;">100%</td>
      </tr>
      <tr style="border-bottom: 1px solid #f0f0f0; background: #f8f9fa;">
        <td style="padding: 15px; font-weight: 500;">SEO Optimization</td>
        <td style="padding: 15px; text-align: center;"><span style="background: #f39c12; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px;">⚠ In Progress</span></td>
        <td style="padding: 15px; text-align: center;"><span style="color: #f39c12; font-weight: 600;">Medium</span></td>
        <td style="padding: 15px; text-align: right; font-weight: 600;">75%</td>
      </tr>
      <tr style="border-bottom: 1px solid #f0f0f0;">
        <td style="padding: 15px; font-weight: 500;">Performance Tuning</td>
        <td style="padding: 15px; text-align: center;"><span style="background: #95a5a6; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px;">◐ Planned</span></td>
        <td style="padding: 15px; text-align: center;"><span style="color: #3498db; font-weight: 600;">Low</span></td>
        <td style="padding: 15px; text-align: right; font-weight: 600;">30%</td>
      </tr>
    </tbody>
  </table>
</div>

## Implementation Notes

Alle diese erweiterten Komponenten verwenden:

- **Inline CSS** für maximale Kompatibilität
- **Font Awesome Icons** (bereits im Theme enthalten)
- **Responsive Design** Prinzipien
- **Accessibility** Guidelines

{: .notice--success}
**Tipp:** Du kannst diese Komponenten als Templates verwenden und das Styling in deine Custom CSS-Datei übertragen für bessere Wartbarkeit.

---

**Zurück zum [Hauptshowcase](/showcase/){: .btn .btn--primary}**
