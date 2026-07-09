import { Outlet, Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Import global admin styles
import '../../public/css/admin.css';
import '../../public/css/admin-responsive.css';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial theme check
    if (document.body.classList.contains('dark-mode')) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="admin-container admin-body">
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="admin-sidebar-overlay is-open" 
          onClick={() => setIsSidebarOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'block' }}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? 'is-open' : ''}`} id="adminSidebar">
        <div className="admin-sidebar-brand">
          <Link to="/" onClick={() => setIsSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#fff', textDecoration: 'none' }}>
            <img src="/images/logo.svg" alt="Logo" style={{ width: '32px', height: '32px' }} />
            <span>LinguaAdmin</span>
          </Link>
          <button className="sidebar-close d-lg-none" onClick={toggleSidebar} aria-label="Close sidebar" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer', marginLeft: 'auto' }}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <nav className="admin-sidebar-nav">
          <NavLink to="/admin/dashboard" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-chart-pie"></i> Dashboard
          </NavLink>
          <NavLink to="/admin/languages" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-language"></i> Languages
          </NavLink>
          <NavLink to="/admin/lessons" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-book"></i> Lessons
          </NavLink>
          <NavLink to="/admin/users" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-users"></i> Users
          </NavLink>
          <NavLink to="/admin/messages" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-envelope"></i> Messages
          </NavLink>
          <NavLink to="/admin/pricing" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-tag"></i> Pricing
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <NavLink to="/admin/settings" className={({ isActive }) => `${isActive ? 'active' : ''}`} onClick={() => setIsSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.65rem 0.85rem', color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem' }}>
            <i className="fa-solid fa-gear"></i> Settings
          </NavLink>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', padding: '0.65rem 0.85rem', color: '#ef4444', textDecoration: 'none', fontSize: '0.88rem', marginTop: '0.2rem' }}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </Link>
        </div>
      </aside>

      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
            <button className="admin-sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="admin-search">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="admin-topbar-actions">
            <button className="admin-icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
              <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button className="admin-icon-btn" aria-label="Notifications">
              <i className="fa-regular fa-bell"></i>
              <span className="admin-badge-dot"></span>
            </button>
            <div className="admin-profile" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginLeft: '0.5rem' }}>
              <div className="admin-profile-avatar">A</div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
