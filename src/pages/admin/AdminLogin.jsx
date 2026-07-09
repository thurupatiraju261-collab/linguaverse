import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Import global admin styles
import '../../../public/css/admin.css';
import '../../../public/css/admin-responsive.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply admin body class
    document.body.classList.add('admin-body');
    if (document.body.classList.contains('dark-mode')) {
      setIsDarkMode(true);
    }
    return () => {
      document.body.classList.remove('admin-body');
    };
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <main className="admin-auth-page">
      <Link to="/" className="admin-back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to Website
      </Link>
      
      {/* Moved theme toggle to the right illustration panel for desktop, or keep absolute for mobile if needed */}
      <button className="admin-auth-theme-toggle theme-toggle d-lg-none" onClick={toggleTheme} aria-label="Toggle dark mode" style={{ background: 'none', border: 'none', fontSize: '1.2rem', color: 'var(--text-color)', cursor: 'pointer' }}>
        <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </button>

      <div className="admin-auth-wrapper">
        {/* Left Form Panel */}
        <div className="admin-auth-form-panel">
          <div className="admin-auth-card">
            <Link to="/" className="admin-auth-logo">
              <img src="/images/logo.svg" alt="LinguaVerse" />
              <span>LinguaVerse <span style={{ color: 'var(--color-primary)' }}>Admin</span></span>
            </Link>

            <h1>Welcome back 👋</h1>
            <p className="admin-auth-subtitle">Sign in to manage languages, lessons, users and messages.</p>

            <form onSubmit={handleLogin}>
              <div className="admin-form-group">
                <label htmlFor="email">Email Address</label>
                <div className="admin-input-wrap">
                  <i className="fa-solid fa-envelope admin-input-icon"></i>
                  <input type="email" id="email" placeholder="admin@linguaverse.com" defaultValue="admin@linguaverse.com" required />
                </div>
              </div>

              <div className="admin-form-group">
                <label htmlFor="password">Password</label>
                <div className="admin-input-wrap">
                  <i className="fa-solid fa-lock admin-input-icon"></i>
                  <input type={showPassword ? "text" : "password"} id="password" placeholder="••••••••" defaultValue="admin123" required />
                  <button type="button" className="admin-toggle-password" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Hide password" : "Show password"}>
                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="admin-form-row">
                <label className="admin-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#" className="admin-forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', fontSize: '1rem', borderRadius: '2rem' }}>
                Log In <i className="fa-solid fa-arrow-right"></i>
              </button>

              <p className="admin-auth-demo-hint">Demo credentials — admin@linguaverse.com / admin123</p>
            </form>
          </div>
        </div>

        {/* Right Illustration Panel */}
        <div className="admin-auth-illustration-panel">
          <button className="admin-auth-theme-toggle theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" style={{ background: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e293b', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <i className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          
          <div className="admin-shape a1"></div>
          <div className="admin-shape a2"></div>
          
          <div className="admin-auth-illustration-content">
            {/* SVG placeholder matching the screenshot roughly */}
            <svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 auto 2rem', display: 'block', maxWidth: '250px' }}>
              <rect x="50" y="30" width="100" height="70" rx="4" fill="#a5d8d3" />
              <rect x="55" y="35" width="90" height="60" rx="2" fill="#5c4ee5" />
              <path d="M45 100 L155 100 L160 105 L40 105 Z" fill="#e2e8f0" />
              
              <path d="M100 45 L115 50 L115 65 C115 75 105 85 100 88 C95 85 85 75 85 65 L85 50 Z" fill="#fff" />
              <path d="M95 65 L100 70 L108 55" stroke="#1d5d59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
              <circle cx="35" cy="110" r="10" fill="#fbc3a1" />
              <path d="M20 130 C20 120 50 120 50 130" fill="#e2e8f0" />
              
              <circle cx="165" cy="115" r="9" fill="#fbc3a1" />
              <path d="M152 135 C152 125 178 125 178 135" fill="#e2e8f0" />
            </svg>
            <h2>Manage LinguaVerse with ease</h2>
            <p>Add languages, publish lessons, and keep an eye on every learner — all from one secure dashboard.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
