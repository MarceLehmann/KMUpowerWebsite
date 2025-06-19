---
layout: single
title: "Business Dashboard"
permalink: /dashboard/
excerpt: "Comprehensive business metrics and analytics dashboard demonstrating data visualization and interactive components."
header:
  image: /assets/images/dashboard-header.svg
  teaser: /assets/images/dashboard-teaser.svg
sidebar:
  nav: "main"
toc: true
toc_sticky: true
---

<div class="business-dashboard">
  <div class="dashboard-header">
    <h1>📊 Business Dashboard</h1>
    <p class="dashboard-subtitle">Real-time analytics and key performance indicators</p>
    <div class="dashboard-actions">
      <button class="btn btn--primary" onclick="refreshDashboard()">
        <i class="fas fa-sync-alt"></i> Aktualisieren
      </button>
      <button class="btn btn--info" onclick="exportDashboard()">
        <i class="fas fa-download"></i> Exportieren
      </button>
    </div>
  </div>

  <!-- KPI Cards -->
  <div class="kpi-grid">
    <div class="kpi-card kpi-revenue">
      <div class="kpi-icon">💰</div>
      <div class="kpi-content">
        <h3>Umsatz</h3>
        <div class="kpi-value" data-counter="125000">€0</div>
        <div class="kpi-change positive">+12,5% vs. Vormonat</div>
      </div>
    </div>

    <div class="kpi-card kpi-customers">
      <div class="kpi-icon">👥</div>
      <div class="kpi-content">
        <h3>Aktive Kunden</h3>
        <div class="kpi-value" data-counter="2847">0</div>
        <div class="kpi-change positive">+8,3% vs. Vormonat</div>
      </div>
    </div>

    <div class="kpi-card kpi-orders">
      <div class="kpi-icon">📦</div>
      <div class="kpi-content">
        <h3>Bestellungen</h3>
        <div class="kpi-value" data-counter="1234">0</div>
        <div class="kpi-change negative">-2,1% vs. Vormonat</div>
      </div>
    </div>

    <div class="kpi-card kpi-conversion">
      <div class="kpi-icon">📈</div>
      <div class="kpi-content">
        <h3>Conversion Rate</h3>
        <div class="kpi-value" data-counter="3.47">0%</div>
        <div class="kpi-change positive">+0,8% vs. Vormonat</div>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="dashboard-charts">
    <div class="chart-container">
      <h3>📊 Umsatzentwicklung</h3>
      <div class="chart-placeholder">
        <canvas id="revenue-chart" width="400" height="200"></canvas>
      </div>
    </div>

    <div class="chart-container">
      <h3>🎯 Traffic Quellen</h3>
      <div class="chart-placeholder">
        <canvas id="traffic-chart" width="400" height="200"></canvas>
      </div>
    </div>
  </div>

  <!-- Recent Activity -->
  <div class="dashboard-activity">
    <h3>📋 Aktuelle Aktivitäten</h3>
    <div class="activity-list">
      <div class="activity-item">
        <div class="activity-icon success">✅</div>
        <div class="activity-content">
          <strong>Neue Bestellung #1234</strong>
          <p>Kunde Max Mustermann hat eine Bestellung über €299 aufgegeben</p>
          <small>vor 5 Minuten</small>
        </div>
      </div>

      <div class="activity-item">
        <div class="activity-icon info">📧</div>
        <div class="activity-content">
          <strong>Newsletter versendet</strong>
          <p>Monatlicher Newsletter an 2.847 Abonnenten erfolgreich versendet</p>
          <small>vor 2 Stunden</small>
        </div>
      </div>

      <div class="activity-item">
        <div class="activity-icon warning">⚠️</div>
        <div class="activity-content">
          <strong>Lagerbestand niedrig</strong>
          <p>Produkt "Premium Widget" hat nur noch 5 Einheiten auf Lager</p>
          <small>vor 4 Stunden</small>
        </div>
      </div>

      <div class="activity-item">
        <div class="activity-icon success">🎉</div>
        <div class="activity-content">
          <strong>Monatsziel erreicht</strong>
          <p>Umsatzziel für diesen Monat wurde um 12,5% übertroffen</p>
          <small>vor 1 Tag</small>
        </div>
      </div>
    </div>
  </div>

  <!-- Performance Metrics -->
  <div class="performance-metrics">
    <h3>⚡ Performance Metriken</h3>
    <div class="metrics-grid">
      <div class="metric-item">
        <div class="metric-label">Seitenladezeit</div>
        <div class="metric-value">1.2s</div>
        <div class="metric-bar">
          <div class="metric-progress" style="width: 85%;"></div>
        </div>
      </div>

      <div class="metric-item">
        <div class="metric-label">Verfügbarkeit</div>
        <div class="metric-value">99.9%</div>
        <div class="metric-bar">
          <div class="metric-progress" style="width: 99.9%;"></div>
        </div>
      </div>

      <div class="metric-item">
        <div class="metric-label">Kundenzufriedenheit</div>
        <div class="metric-value">4.8/5</div>
        <div class="metric-bar">
          <div class="metric-progress" style="width: 96%;"></div>
        </div>
      </div>

      <div class="metric-item">
        <div class="metric-label">Support Response</div>
        <div class="metric-value">< 2h</div>
        <div class="metric-bar">
          <div class="metric-progress" style="width: 92%;"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Team Performance -->
  <div class="team-performance">
    <h3>👥 Team Performance</h3>
    <div class="team-grid">
      <div class="team-member">
        <div class="team-avatar">👨‍💼</div>
        <div class="team-info">
          <h4>Max Mustermann</h4>
          <p>Sales Manager</p>
          <div class="team-stats">
            <div class="stat">
              <span class="stat-label">Deals</span>
              <span class="stat-value">23</span>
            </div>
            <div class="stat">
              <span class="stat-label">Revenue</span>
              <span class="stat-value">€45K</span>
            </div>
          </div>
        </div>
      </div>

      <div class="team-member">
        <div class="team-avatar">👩‍💻</div>
        <div class="team-info">
          <h4>Sarah Schmidt</h4>
          <p>Marketing Lead</p>
          <div class="team-stats">
            <div class="stat">
              <span class="stat-label">Campaigns</span>
              <span class="stat-value">8</span>
            </div>
            <div class="stat">
              <span class="stat-label">ROI</span>
              <span class="stat-value">285%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="team-member">
        <div class="team-avatar">👨‍🔧</div>
        <div class="team-info">
          <h4>Tom Weber</h4>
          <p>Technical Lead</p>
          <div class="team-stats">
            <div class="stat">
              <span class="stat-label">Tickets</span>
              <span class="stat-value">156</span>
            </div>
            <div class="stat">
              <span class="stat-label">Uptime</span>
              <span class="stat-value">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Goal Tracking -->
  <div class="goal-tracking">
    <h3>🎯 Zielverfolg</h3>
    <div class="goals-list">
      <div class="goal-item">
        <div class="goal-header">
          <h4>Q1 Umsatzziel</h4>
          <span class="goal-percentage">112%</span>
        </div>
        <div class="goal-progress">
          <div class="goal-bar">
            <div class="goal-fill" style="width: 112%;"></div>
          </div>
        </div>
        <div class="goal-details">
          <span>€112K von €100K</span>
          <span class="goal-status achieved">Erreicht</span>
        </div>
      </div>

      <div class="goal-item">
        <div class="goal-header">
          <h4>Kundenwachstum</h4>
          <span class="goal-percentage">87%</span>
        </div>
        <div class="goal-progress">
          <div class="goal-bar">
            <div class="goal-fill" style="width: 87%;"></div>
          </div>
        </div>
        <div class="goal-details">
          <span>2.847 von 3.000 Kunden</span>
          <span class="goal-status in-progress">In Bearbeitung</span>
        </div>
      </div>

      <div class="goal-item">
        <div class="goal-header">
          <h4>Produktlaunches</h4>
          <span class="goal-percentage">67%</span>
        </div>
        <div class="goal-progress">
          <div class="goal-bar">
            <div class="goal-fill" style="width: 67%;"></div>
          </div>
        </div>
        <div class="goal-details">
          <span>2 von 3 Produkten</span>
          <span class="goal-status in-progress">In Bearbeitung</span>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// Dashboard functionality
function refreshDashboard() {
  showNotification('Dashboard wird aktualisiert...', 'loading');
  
  setTimeout(() => {
    window.notificationSystem.removeAll();
    showNotification('Dashboard erfolgreich aktualisiert!', 'success');
    animateCounters();
  }, 2000);
}

function exportDashboard() {
  showNotification('Dashboard-Export wird vorbereitet...', 'info');
  
  setTimeout(() => {
    showNotification('Dashboard-Report erfolgreich exportiert!', 'success', {
      action: {
        text: 'Download',
        handler: () => {
          showNotification('Download gestartet...', 'info');
        }
      }
    });
  }, 1500);
}

function animateCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-counter'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      if (counter.textContent.includes('€')) {
        counter.textContent = '€' + Math.floor(current).toLocaleString('de-DE');
      } else if (counter.textContent.includes('%')) {
        counter.textContent = current.toFixed(2) + '%';
      } else {
        counter.textContent = Math.floor(current).toLocaleString('de-DE');
      }
    }, 16);
  });
}

// Initialize dashboard on load
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(animateCounters, 500);
  
  // Simulate real-time updates
  setInterval(() => {
    const activities = document.querySelectorAll('.activity-item');
    if (activities.length > 0) {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      randomActivity.style.background = '#f0f9ff';
      setTimeout(() => {
        randomActivity.style.background = '';
      }, 1000);
    }
  }, 5000);
});
</script>

<style>
.business-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
}

.dashboard-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.dashboard-subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.dashboard-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.kpi-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.kpi-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.kpi-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f8f9fa;
}

.kpi-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #7f8c8d;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.kpi-value {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.kpi-change {
  font-size: 0.85rem;
  font-weight: 500;
}

.kpi-change.positive {
  color: #27ae60;
}

.kpi-change.negative {
  color: #e74c3c;
}

.dashboard-charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.chart-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.chart-container h3 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
}

.chart-placeholder {
  height: 200px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7f8c8d;
  font-style: italic;
}

.dashboard-activity,
.performance-metrics,
.team-performance,
.goal-tracking {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.dashboard-activity h3,
.performance-metrics h3,
.team-performance h3,
.goal-tracking h3 {
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

.activity-item:hover {
  background: #f8f9fa;
}

.activity-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 1.2rem;
}

.activity-icon.success {
  background: #d4edda;
  color: #155724;
}

.activity-icon.info {
  background: #d1ecf1;
  color: #0c5460;
}

.activity-icon.warning {
  background: #fff3cd;
  color: #856404;
}

.activity-content strong {
  display: block;
  margin-bottom: 0.25rem;
  color: #2c3e50;
}

.activity-content p {
  margin: 0 0 0.5rem 0;
  color: #7f8c8d;
  line-height: 1.4;
}

.activity-content small {
  color: #95a5a6;
  font-size: 0.8rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.metric-item {
  text-align: center;
}

.metric-label {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.metric-bar {
  background: #e9ecef;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}

.metric-progress {
  background: linear-gradient(90deg, #007acc, #00a8e6);
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.team-member {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: #f8f9fa;
}

.team-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.team-info h4 {
  margin: 0 0 0.25rem 0;
  color: #2c3e50;
}

.team-info p {
  margin: 0 0 0.75rem 0;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.team-stats {
  display: flex;
  gap: 1rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-label {
  font-size: 0.8rem;
  color: #7f8c8d;
}

.stat-value {
  font-weight: 600;
  color: #2c3e50;
}

.goals-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.goal-item {
  padding: 1.5rem;
  border-radius: 8px;
  background: #f8f9fa;
}

.goal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.goal-header h4 {
  margin: 0;
  color: #2c3e50;
}

.goal-percentage {
  font-size: 1.2rem;
  font-weight: 700;
  color: #007acc;
}

.goal-progress {
  margin-bottom: 1rem;
}

.goal-bar {
  background: #e9ecef;
  height: 12px;
  border-radius: 6px;
  overflow: hidden;
}

.goal-fill {
  background: linear-gradient(90deg, #28a745, #34ce57);
  height: 100%;
  border-radius: 6px;
  transition: width 0.3s ease;
}

.goal-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.goal-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.goal-status.achieved {
  background: #d4edda;
  color: #155724;
}

.goal-status.in-progress {
  background: #fff3cd;
  color: #856404;
}

@media (max-width: 768px) {
  .dashboard-header h1 {
    font-size: 2rem;
  }
  
  .dashboard-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .kpi-grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard-charts {
    grid-template-columns: 1fr;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
