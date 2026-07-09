import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        {/* Left: text content */}
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge badge-shimmer"><i className="fa-solid fa-sparkles"></i> Language Learning Platform</span>
          </div>

          <h1 style={{ marginTop: '20px' }}>Speak a new language. <br/>The human way.</h1>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', marginTop: '15px', marginBottom: '30px', fontSize: '1.1rem', maxWidth: '700px' }}>
            LinguaVerse turns real conversations, stories and culture into bite-sized daily lessons — so you actually remember what you learn, not just memorize it.
          </p>

          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <Link to="/languages" className="btn btn-primary btn-glow">Start Learning <i className="fa-solid fa-arrow-right"></i></Link>
            <a href="#languages" className="btn btn-secondary">Explore Languages</a>
          </div>

          {/* Trust bar: animated stats shown beneath hero CTA */}
          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <i className="fa-solid fa-star"></i>
              <div>
                <span className="hero-trust-number" data-counter="4.9">0</span><span className="hero-trust-suffix">/5 Rating</span>
              </div>
            </div>
            <span className="hero-trust-divider" aria-hidden="true"></span>
            <div className="hero-trust-item">
              <i className="fa-solid fa-users"></i>
              <div>
                <span className="hero-trust-number" data-counter="25000" data-suffix="+">0</span><span className="hero-trust-suffix"> Learners</span>
              </div>
            </div>
            <span className="hero-trust-divider" aria-hidden="true"></span>
            <div className="hero-trust-item">
              <i className="fa-solid fa-language"></i>
              <div>
                <span className="hero-trust-number" data-counter="6">0</span><span className="hero-trust-suffix"> Languages</span>
              </div>
            </div>
            <span className="hero-trust-divider" aria-hidden="true"></span>
            <div className="hero-trust-item">
              <i className="fa-solid fa-book-open"></i>
              <div>
                <span className="hero-trust-number" data-counter="100" data-suffix="+">0</span><span className="hero-trust-suffix"> Lessons</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: SVG illustration with floating animation */}
        <div className="hero-illustration hero-float" aria-hidden="true">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
            <circle cx="250" cy="250" r="180" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
            <ellipse cx="250" cy="250" rx="180" ry="60" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none"/>
            <ellipse cx="250" cy="250" rx="60" ry="180" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none"/>
            <line x1="70" y1="250" x2="430" y2="250" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <line x1="250" y1="70" x2="250" y2="430" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

            <g className="hero-float-child" style={{ animationDelay: '0.2s' }}>
              <circle cx="130" cy="350" r="28" fill="#E3B27C"/>
              <rect x="110" y="378" width="40" height="50" rx="12" fill="#2B7A78"/>
              <rect x="105" y="390" width="50" height="20" rx="4" fill="#fff" opacity="0.3"/>
              <text x="130" y="346" textAnchor="middle" fontSize="22">📖</text>
            </g>

            <g className="hero-float-child" style={{ animationDelay: '0.6s' }}>
              <circle cx="370" cy="340" r="28" fill="#4BB5B5"/>
              <rect x="350" y="368" width="40" height="50" rx="12" fill="#E08546"/>
              <text x="395" y="325" fontSize="18">👋</text>
            </g>

            <g className="hero-float-child" style={{ animationDelay: '0.4s' }}>
              <circle cx="250" cy="130" r="32" fill="#167A78"/>
              <rect x="227" y="162" width="46" height="55" rx="14" fill="#0A3D3C"/>
              <text x="250" y="126" textAnchor="middle" fontSize="26">🎧</text>
            </g>

            <g className="hero-float-child" style={{ animationDelay: '0.8s' }}>
              <rect x="155" y="270" width="80" height="36" rx="18" fill="rgba(255,255,255,0.2)"/>
              <text x="195" y="294" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="600">Hola!</text>
            </g>
            <g className="hero-float-child" style={{ animationDelay: '1.0s' }}>
              <rect x="275" y="240" width="90" height="36" rx="18" fill="rgba(255,255,255,0.2)"/>
              <text x="320" y="264" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="600">Bonjour!</text>
            </g>
            <g className="hero-float-child" style={{ animationDelay: '1.2s' }}>
              <rect x="190" y="180" width="120" height="36" rx="18" fill="rgba(255,255,255,0.18)"/>
              <text x="250" y="204" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="600">こんにちは!</text>
            </g>

            <text x="90" y="200" fontSize="26" className="hero-float-child" style={{ animationDelay: '0.3s' }}>🇪🇸</text>
            <text x="380" y="180" fontSize="26" className="hero-float-child" style={{ animationDelay: '0.7s' }}>🇫🇷</text>
            <text x="400" y="440" fontSize="26" className="hero-float-child" style={{ animationDelay: '1.1s' }}>🇯🇵</text>
            <text x="80" y="430" fontSize="26" className="hero-float-child" style={{ animationDelay: '0.5s' }}>🇮🇳</text>
            <text x="310" y="100" fontSize="26" className="hero-float-child" style={{ animationDelay: '0.9s' }}>🇲🇽</text>

            <g className="hero-float-child" style={{ animationDelay: '0.1s' }}>
              <rect x="220" y="330" width="60" height="14" rx="3" fill="#E3B27C" opacity="0.8"/>
              <rect x="215" y="344" width="70" height="14" rx="3" fill="#E08546" opacity="0.8"/>
              <rect x="225" y="358" width="50" height="14" rx="3" fill="#4BB5B5" opacity="0.8"/>
            </g>

            <circle cx="160" cy="150" r="4" fill="rgba(227,178,124,0.6)"/>
            <circle cx="350" cy="400" r="3" fill="rgba(75,181,181,0.6)"/>
            <circle cx="420" cy="260" r="5" fill="rgba(224,133,70,0.5)"/>
            <circle cx="100" cy="300" r="3" fill="rgba(255,255,255,0.3)"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
