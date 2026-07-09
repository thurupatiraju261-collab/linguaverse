import { Link } from 'react-router-dom';
import { useScrollReveal, useAnimatedCounters } from '../../hooks/useAnimations';

export default function Dashboard() {
  useScrollReveal();
  useAnimatedCounters();

  const handleQuickAction = (action) => {
    alert(`Quick Action Triggered: ${action}`);
  };

  return (
    <>
      <div className="admin-welcome-card admin-fade-in">
        <div>
          <h2>Welcome back, <span data-admin-name>Admin</span> 👋</h2>
          <p>Here's what's happening across LinguaVerse today.</p>
          <p className="admin-welcome-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <i className="fa-solid fa-graduation-cap" style={{ fontSize: '3rem', opacity: '0.35' }}></i>
      </div>

      <div className="grid admin-stats-grid">
        <div className="admin-stat-card admin-fade-in">
          <div className="admin-stat-icon"><i className="fa-solid fa-language"></i></div>
          <div>
            <div className="admin-stat-number" data-stat-counter="6">0</div>
            <div className="admin-stat-label">Total Languages</div>
          </div>
        </div>
        <div className="admin-stat-card admin-fade-in">
          <div className="admin-stat-icon"><i className="fa-solid fa-book"></i></div>
          <div>
            <div className="admin-stat-number" data-stat-counter="120">0</div>
            <div className="admin-stat-label">Total Lessons</div>
          </div>
        </div>
        <div className="admin-stat-card admin-fade-in">
          <div className="admin-stat-icon"><i className="fa-solid fa-users"></i></div>
          <div>
            <div className="admin-stat-number" data-stat-counter="350">0</div>
            <div className="admin-stat-label">Total Users</div>
          </div>
        </div>
        <div className="admin-stat-card admin-fade-in">
          <div className="admin-stat-icon"><i className="fa-solid fa-envelope"></i></div>
          <div>
            <div className="admin-stat-number" data-stat-counter="15">0</div>
            <div className="admin-stat-label">Contact Messages</div>
          </div>
        </div>
      </div>

      <div className="grid admin-two-col">
        <div className="admin-panel admin-fade-in">
          <div className="admin-panel-header">
            <h3>Learner Growth (last 6 months)</h3>
            <span className="badge"><i className="fa-solid fa-chart-line"></i> +18% this month</span>
          </div>
          <div className="admin-chart">
            <div className="admin-chart-bar" style={{ height: '45%' }}><span className="admin-chart-value">140</span></div>
            <div className="admin-chart-bar" style={{ height: '58%' }}><span className="admin-chart-value">180</span></div>
            <div className="admin-chart-bar" style={{ height: '52%' }}><span className="admin-chart-value">165</span></div>
            <div className="admin-chart-bar" style={{ height: '70%' }}><span className="admin-chart-value">220</span></div>
            <div className="admin-chart-bar" style={{ height: '86%' }}><span className="admin-chart-value">270</span></div>
            <div className="admin-chart-bar" style={{ height: '100%' }}><span className="admin-chart-value">350</span></div>
          </div>
          <div className="admin-chart-labels">
            <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
          </div>
        </div>

        <div className="admin-panel admin-fade-in">
          <div className="admin-panel-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="grid admin-quick-actions">
            <button className="admin-quick-action-btn" onClick={() => handleQuickAction('Add Language')}>
              <i className="fa-solid fa-plus"></i>
              <span>Add Language</span>
            </button>
            <button className="admin-quick-action-btn" onClick={() => handleQuickAction('Add Lesson')}>
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add Lesson</span>
            </button>
            <Link to="/admin/messages" className="admin-quick-action-btn" style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-envelope-open"></i>
              <span>View Messages</span>
            </Link>
            <Link to="/admin/pricing" className="admin-quick-action-btn" style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-tags"></i>
              <span>Manage Pricing</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid admin-two-col">
        <div className="admin-panel admin-fade-in">
          <div className="admin-panel-header">
            <h3>Recent Activity</h3>
          </div>
          <ul className="admin-activity-list">
            <li>
              <div className="admin-activity-icon"><i className="fa-solid fa-envelope"></i></div>
              <div>
                <div className="admin-activity-text">Priya S. sent a new contact message</div>
                <div className="admin-activity-time">10 minutes ago</div>
              </div>
            </li>
            <li>
              <div className="admin-activity-icon"><i className="fa-solid fa-user-plus"></i></div>
              <div>
                <div className="admin-activity-text">12 new learners signed up</div>
                <div className="admin-activity-time">2 hours ago</div>
              </div>
            </li>
            <li>
              <div className="admin-activity-icon"><i className="fa-solid fa-book-open"></i></div>
              <div>
                <div className="admin-activity-text">New lesson published in Japanese</div>
                <div className="admin-activity-time">Yesterday, 4:12 PM</div>
              </div>
            </li>
            <li>
              <div className="admin-activity-icon"><i className="fa-solid fa-tags"></i></div>
              <div>
                <div className="admin-activity-text">Pro plan pricing updated</div>
                <div className="admin-activity-time">2 days ago</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="admin-panel admin-fade-in">
          <div className="admin-panel-header">
            <h3>System Status</h3>
          </div>
          <div className="admin-status-row"><span><span className="admin-status-dot"></span>Website</span> <span>Operational</span></div>
          <div className="admin-status-row"><span><span className="admin-status-dot"></span>Database</span> <span>Operational</span></div>
          <div className="admin-status-row"><span><span className="admin-status-dot"></span>Authentication</span> <span>Operational</span></div>
          <div className="admin-status-row"><span><span className="admin-status-dot" style={{ background: 'var(--color-accent)', boxShadow: '0 0 0 4px rgba(245,158,11,0.15)' }}></span>Email Delivery</span> <span>Degraded</span></div>
        </div>
      </div>
    </>
  );
}
