---
layout: single
title: "Häufig gestellte Fragen (FAQ)"
permalink: /faq/
excerpt: "Finden Sie schnell Antworten auf die häufigsten Fragen zu unseren Produkten und Dienstleistungen."
header:
  image: /assets/images/faq-header.svg
  teaser: /assets/images/faq-teaser.svg
sidebar:
  nav: "main"
toc: true
toc_sticky: true
---

<div class="faq-section">
  <div class="faq-header">
    <h1>❓ Häufig gestellte Fragen</h1>
    <p class="faq-subtitle">Finden Sie schnell Antworten auf Ihre Fragen</p>
    
    <!-- Search and Filter -->
    <div class="faq-controls">
      <div class="faq-search">
        <input type="text" id="faqSearch" placeholder="🔍 Durchsuchen Sie die FAQs..." onkeyup="searchFAQs()">
      </div>
      
      <div class="faq-categories">
        <button class="category-btn active" onclick="filterFAQs('all')">Alle</button>
        <button class="category-btn" onclick="filterFAQs('general')">Allgemein</button>
        <button class="category-btn" onclick="filterFAQs('pricing')">Preise</button>
        <button class="category-btn" onclick="filterFAQs('technical')">Technisch</button>
        <button class="category-btn" onclick="filterFAQs('support')">Support</button>
        <button class="category-btn" onclick="filterFAQs('billing')">Abrechnung</button>
      </div>
    </div>
  </div>

  <!-- FAQ Stats -->
  <div class="faq-stats">
    <div class="stat-item">
      <div class="stat-number">95%</div>
      <div class="stat-label">Fragen beantwortet</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">< 2min</div>
      <div class="stat-label">Durchschnittliche Lesezeit</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">24/7</div>
      <div class="stat-label">Verfügbarer Support</div>
    </div>
  </div>

  <!-- Quick Actions -->
  <div class="quick-actions">
    <h2>🚀 Schnellzugriff</h2>
    <div class="actions-grid">
      <a href="#getting-started" class="action-card">
        <div class="action-icon">🎯</div>
        <div class="action-title">Erste Schritte</div>
        <div class="action-desc">Wie fange ich an?</div>
      </a>
      
      <a href="#pricing-info" class="action-card">
        <div class="action-icon">💰</div>
        <div class="action-title">Preise & Pläne</div>
        <div class="action-desc">Welcher Plan passt zu mir?</div>
      </a>
      
      <a href="#technical-support" class="action-card">
        <div class="action-icon">🔧</div>
        <div class="action-title">Technischer Support</div>
        <div class="action-desc">Hilfe bei Problemen</div>
      </a>
      
      <a href="#billing-help" class="action-card">
        <div class="action-icon">📋</div>
        <div class="action-title">Abrechnung</div>
        <div class="action-desc">Rechnungen & Zahlungen</div>
      </a>
    </div>
  </div>

  <!-- FAQ Items -->
  <div class="faq-container">
    <h2>📚 Alle Fragen & Antworten</h2>
    
    <!-- General FAQs -->
    <div class="faq-item" data-category="general" id="getting-started">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Wie fange ich mit Ihrem Service an?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Der Einstieg ist ganz einfach:</p>
        <ol>
          <li>Registrieren Sie sich für ein kostenloses Konto</li>
          <li>Wählen Sie den passenden Plan für Ihre Bedürfnisse</li>
          <li>Folgen Sie unserem 5-minütigen Setup-Guide</li>
          <li>Beginnen Sie mit unseren vorgefertigten Templates</li>
        </ol>
        <p>Unser Onboarding-Team steht Ihnen bei jedem Schritt zur Seite.</p>
      </div>
    </div>

    <div class="faq-item" data-category="general">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Welche Funktionen bietet Ihr Service?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Unser Service bietet eine umfassende Suite von Features:</p>
        <ul>
          <li>🚀 <strong>Automatisierung:</strong> Workflow-Automatisierung und Prozessoptimierung</li>
          <li>📊 <strong>Analytics:</strong> Real-time Dashboards und detaillierte Berichte</li>
          <li>🔒 <strong>Sicherheit:</strong> Enterprise-grade Verschlüsselung und Compliance</li>
          <li>🌐 <strong>Integration:</strong> 500+ App-Integrationen verfügbar</li>
          <li>👥 <strong>Collaboration:</strong> Team-Tools und Kommunikationsfunktionen</li>
          <li>📱 <strong>Mobile:</strong> Native iOS und Android Apps</li>
        </ul>
      </div>
    </div>

    <div class="faq-item" data-category="general">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Gibt es eine kostenlose Testversion?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Ja! Wir bieten eine <strong>14-tägige kostenlose Testversion</strong> ohne Kreditkarte:</p>
        <ul>
          <li>✅ Vollzugriff auf alle Premium-Features</li>
          <li>✅ Unbegrenzte Projekte und Benutzer</li>
          <li>✅ Priority Support</li>
          <li>✅ Keine automatische Verlängerung</li>
        </ul>
        <p>Nach der Testphase können Sie jederzeit upgraden oder bei unserem kostenlosen Plan bleiben.</p>
      </div>
    </div>

    <!-- Pricing FAQs -->
    <div class="faq-item" data-category="pricing" id="pricing-info">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Wie funktioniert Ihre Preisgestaltung?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Unsere Preisgestaltung ist transparent und flexibel:</p>
        <div class="pricing-table">
          <div class="pricing-plan">
            <h4>Starter (Kostenlos)</h4>
            <ul>
              <li>Bis zu 3 Projekte</li>
              <li>5 GB Speicher</li>
              <li>Community Support</li>
            </ul>
          </div>
          <div class="pricing-plan">
            <h4>Professional (€29/Monat)</h4>
            <ul>
              <li>Unbegrenzte Projekte</li>
              <li>100 GB Speicher</li>
              <li>Priority Support</li>
              <li>Advanced Analytics</li>
            </ul>
          </div>
          <div class="pricing-plan">
            <h4>Enterprise (€99/Monat)</h4>
            <ul>
              <li>Alles aus Professional</li>
              <li>1 TB Speicher</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="faq-item" data-category="pricing">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Kann ich jederzeit kündigen?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Absolut! Sie haben vollständige Flexibilität:</p>
        <ul>
          <li>✅ Jederzeit kündigen - keine Kündigungsfrist</li>
          <li>✅ Keine versteckten Gebühren oder Strafzahlungen</li>
          <li>✅ Datenexport jederzeit möglich</li>
          <li>✅ Sofortige Rückerstattung bei Jahresplänen</li>
        </ul>
        <p>Sie behalten Zugriff auf Ihre Daten bis zum Ende des Abrechnungszeitraums.</p>
      </div>
    </div>

    <!-- Technical FAQs -->
    <div class="faq-item" data-category="technical" id="technical-support">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Welche Systemanforderungen gibt es?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Unser Service ist cloudbasiert und funktioniert auf allen gängigen Geräten:</p>
        <div class="system-requirements">
          <div class="requirement-section">
            <h4>🖥️ Desktop Browser</h4>
            <ul>
              <li>Chrome 90+ (empfohlen)</li>
              <li>Firefox 88+</li>
              <li>Safari 14+</li>
              <li>Edge 90+</li>
            </ul>
          </div>
          <div class="requirement-section">
            <h4>📱 Mobile Apps</h4>
            <ul>
              <li>iOS 14+ (iPhone/iPad)</li>
              <li>Android 8+ (Phone/Tablet)</li>
            </ul>
          </div>
          <div class="requirement-section">
            <h4>🌐 Internetverbindung</h4>
            <ul>
              <li>Mindestens 1 Mbps für grundlegende Funktionen</li>
              <li>5+ Mbps empfohlen für optimale Performance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="faq-item" data-category="technical">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Wie sicher sind meine Daten?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Datensicherheit hat bei uns höchste Priorität:</p>
        <div class="security-features">
          <div class="security-item">
            <div class="security-icon">🔒</div>
            <div class="security-content">
              <h4>Verschlüsselung</h4>
              <p>AES-256 Verschlüsselung für alle Daten in Ruhe und Übertragung</p>
            </div>
          </div>
          <div class="security-item">
            <div class="security-icon">🛡️</div>
            <div class="security-content">
              <h4>Compliance</h4>
              <p>GDPR, SOC 2, ISO 27001 zertifiziert</p>
            </div>
          </div>
          <div class="security-item">
            <div class="security-icon">🏢</div>
            <div class="security-content">
              <h4>Rechenzentren</h4>
              <p>Tier-4 Rechenzentren in Deutschland und EU</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Support FAQs -->
    <div class="faq-item" data-category="support">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Wie kann ich Support erhalten?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Wir bieten mehrere Support-Kanäle:</p>
        <div class="support-channels">
          <div class="support-channel">
            <div class="channel-icon">💬</div>
            <div class="channel-info">
              <h4>Live Chat</h4>
              <p>24/7 verfügbar für Premium-Kunden</p>
              <span class="response-time">< 5 Minuten Antwortzeit</span>
            </div>
          </div>
          <div class="support-channel">
            <div class="channel-icon">📧</div>
            <div class="channel-info">
              <h4>E-Mail Support</h4>
              <p>support@example.com</p>
              <span class="response-time">< 4 Stunden Antwortzeit</span>
            </div>
          </div>
          <div class="support-channel">
            <div class="channel-icon">📚</div>
            <div class="channel-info">
              <h4>Wissensdatenbank</h4>
              <p>Umfassende Dokumentation und Tutorials</p>
              <span class="response-time">Sofort verfügbar</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Billing FAQs -->
    <div class="faq-item" data-category="billing" id="billing-help">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Welche Zahlungsmethoden akzeptieren Sie?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Wir akzeptieren alle gängigen Zahlungsmethoden:</p>
        <div class="payment-methods">
          <div class="payment-category">
            <h4>💳 Kreditkarten</h4>
            <ul>
              <li>Visa, Mastercard, American Express</li>
              <li>Automatische Verlängerung</li>
              <li>Sofortige Aktivierung</li>
            </ul>
          </div>
          <div class="payment-category">
            <h4>🏦 Banküberweisung</h4>
            <ul>
              <li>SEPA-Überweisung für EU-Kunden</li>
              <li>Jährliche Vorauszahlung</li>
              <li>Rechnungskauf für Unternehmen</li>
            </ul>
          </div>
          <div class="payment-category">
            <h4>💰 Digital</h4>
            <ul>
              <li>PayPal, Apple Pay, Google Pay</li>
              <li>Sofort-Banking</li>
              <li>Cryptocurrency (Bitcoin, Ethereum)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="faq-item" data-category="billing">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <h3>Bieten Sie Rabatte für Jahrespläne?</h3>
        <span class="faq-toggle">+</span>
      </div>
      <div class="faq-answer">
        <p>Ja! Mit Jahresplänen sparen Sie erheblich:</p>
        <div class="discount-table">
          <div class="discount-item">
            <div class="discount-plan">Professional</div>
            <div class="discount-savings">
              <span class="monthly">€29/Monat</span>
              <span class="yearly">€290/Jahr</span>
              <span class="savings">2 Monate gratis!</span>
            </div>
          </div>
          <div class="discount-item">
            <div class="discount-plan">Enterprise</div>
            <div class="discount-savings">
              <span class="monthly">€99/Monat</span>
              <span class="yearly">€990/Jahr</span>
              <span class="savings">2 Monate gratis!</span>
            </div>
          </div>
        </div>
        <p>Zusätzlich erhalten Sie:</p>
        <ul>
          <li>✅ Priority Support</li>
          <li>✅ Early Access zu neuen Features</li>
          <li>✅ Kostenlose Migration und Setup</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Still Have Questions -->
  <div class="faq-cta">
    <h2>🤔 Haben Sie noch Fragen?</h2>
    <p>Unser Support-Team hilft Ihnen gerne weiter!</p>
    <div class="cta-buttons">
      <a href="/contact/" class="btn btn--primary btn--large">
        <i class="fas fa-envelope"></i> Kontakt aufnehmen
      </a>
      <a href="#" class="btn btn--secondary btn--large" onclick="startLiveChat()">
        <i class="fas fa-comments"></i> Live Chat starten
      </a>
    </div>
  </div>
</div>

<script>
// FAQ Search and Filter functionality
function searchFAQs() {
  const searchTerm = document.getElementById('faqSearch').value.toLowerCase();
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
    
    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  
  // Show "no results" message if needed
  const visibleItems = Array.from(faqItems).filter(item => item.style.display !== 'none');
  if (visibleItems.length === 0 && searchTerm !== '') {
    showNoResults();
  } else {
    hideNoResults();
  }
}

function filterFAQs(category) {
  const faqItems = document.querySelectorAll('.faq-item');
  const categoryBtns = document.querySelectorAll('.category-btn');
  
  // Update active button
  categoryBtns.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter items
  faqItems.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  
  // Clear search
  document.getElementById('faqSearch').value = '';
  hideNoResults();
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const toggle = element.querySelector('.faq-toggle');
  
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    toggle.textContent = '+';
    element.classList.remove('active');
  } else {
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach(ans => {
      ans.style.display = 'none';
    });
    document.querySelectorAll('.faq-toggle').forEach(tog => {
      tog.textContent = '+';
    });
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
    });
    
    // Open this FAQ
    answer.style.display = 'block';
    toggle.textContent = '−';
    element.classList.add('active');
  }
}

function showNoResults() {
  if (!document.querySelector('.no-results')) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.innerHTML = `
      <div class="no-results-icon">🔍</div>
      <h3>Keine Ergebnisse gefunden</h3>
      <p>Versuchen Sie es mit anderen Suchbegriffen oder kontaktieren Sie unseren Support.</p>
    `;
    document.querySelector('.faq-container').appendChild(noResults);
  }
}

function hideNoResults() {
  const noResults = document.querySelector('.no-results');
  if (noResults) {
    noResults.remove();
  }
}

function startLiveChat() {
  showNotification('Live Chat wird geöffnet...', 'info');
  
  setTimeout(() => {
    showNotification('Chat-Fenster geöffnet! Ein Support-Mitarbeiter wird sich gleich bei Ihnen melden.', 'success', {
      duration: 5000
    });
  }, 1500);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers for quick action cards
  document.querySelectorAll('.action-card').forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      if (target.startsWith('#')) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        // Auto-open the FAQ
        const faqQuestion = document.querySelector(target + ' .faq-question');
        if (faqQuestion) {
          setTimeout(() => toggleFAQ(faqQuestion), 500);
        }
      }
    });
  });
});
</script>

<style>
.faq-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;
}

.faq-header {
  text-align: center;
  margin-bottom: 3rem;
}

.faq-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.faq-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.faq-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.faq-search input {
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.faq-search input:focus {
  border-color: #007acc;
}

.faq-categories {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e9ecef;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn:hover,
.category-btn.active {
  background: #007acc;
  color: white;
  border-color: #007acc;
}

.faq-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #007acc;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.quick-actions {
  margin-bottom: 3rem;
}

.quick-actions h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.action-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  text-decoration: none;
}

.action-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.action-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.action-desc {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.faq-container h2 {
  margin-bottom: 2rem;
  color: #2c3e50;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: #f8f9fa;
}

.faq-question.active {
  background: #e3f2fd;
}

.faq-question h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.faq-toggle {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007acc;
  min-width: 30px;
  text-align: center;
}

.faq-answer {
  display: none;
  padding: 0 1.5rem 1.5rem 1.5rem;
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}

.faq-answer p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.faq-answer ul,
.faq-answer ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
}

.pricing-table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.pricing-plan {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
}

.pricing-plan h4 {
  margin: 0 0 1rem 0;
  color: #007acc;
}

.system-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.requirement-section h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.security-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.security-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.security-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.security-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.support-channels {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.support-channel {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.channel-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.channel-info h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.response-time {
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.payment-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.payment-category h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.discount-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.discount-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.discount-plan {
  font-weight: 600;
  color: #2c3e50;
}

.discount-savings {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.monthly {
  color: #7f8c8d;
  text-decoration: line-through;
}

.yearly {
  font-weight: 600;
  color: #2c3e50;
}

.savings {
  background: #e8f5e8;
  color: #2d5a2d;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

.faq-cta {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin-top: 3rem;
}

.faq-cta h2 {
  margin-bottom: 1rem;
}

.faq-cta p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.no-results h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .faq-header h1 {
    font-size: 2rem;
  }
  
  .faq-stats {
    gap: 2rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
  
  .faq-question {
    padding: 1rem;
  }
  
  .faq-answer {
    padding: 0 1rem 1rem 1rem;
  }
  
  .system-requirements,
  .payment-methods {
    grid-template-columns: 1fr;
  }
  
  .support-channel {
    flex-direction: column;
    text-align: center;
  }
  
  .discount-item {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
