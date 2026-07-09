import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">
          <img src="/images/logo.svg" alt="LinguaVerse logo" />
          <span>LinguaVerse</span>
        </Link>

        <nav className="nav-menu" aria-label="Primary">
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/languages">Languages</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="nav-actions">
            <div className="lang-select">
              <button className="lang-select-btn" aria-haspopup="true" aria-expanded="false">
                <i className="fa-solid fa-globe"></i> Explore <i className="fa-solid fa-chevron-down"
                  style={{ fontSize: '0.7rem' }}></i>
              </button>
              <div className="lang-select-menu" role="menu">
                <button data-lang-id="english" role="menuitem">🇬🇧 English</button>
                <button data-lang-id="hindi" role="menuitem">🇮🇳 Hindi</button>
                <button data-lang-id="spanish" role="menuitem">🇪🇸 Spanish</button>
                <button data-lang-id="french" role="menuitem">🇫🇷 French</button>
                <button data-lang-id="japanese" role="menuitem">🇯🇵 Japanese</button>
                <button data-lang-id="telugu" role="menuitem">🇮🇳 Telugu</button>
              </div>
            </div>

            <button className="theme-toggle" aria-label="Toggle dark mode" onClick={() => {
              const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
              const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
              document.documentElement.setAttribute('data-theme', newTheme);
              localStorage.setItem('theme', newTheme);
            }}>
              <i className="fa-solid fa-moon"></i>
              <i className="fa-solid fa-sun"></i>
            </button>

            <Link to="/admin/login" className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
              <i className="fa-solid fa-lock"></i> Admin
            </Link>
          </div>
        </nav>

        <button className="hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
