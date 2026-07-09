import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Simulate newsletter subscription
    alert('Thank you for subscribing to the LinguaVerse newsletter!');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="grid footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-brand">
              <img src="/images/logo.svg" alt="LinguaVerse logo" />
              <span>LinguaVerse</span>
            </Link>
            <p>A premium space to learn English, Hindi, Spanish, French, Japanese and Telugu through real conversations, stories and daily practice.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              <a href="#" aria-label="X (Twitter)"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/languages">Languages</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/#pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Languages</h4>
            <ul>
              <li><Link to="/language-details?lang=english">English</Link></li>
              <li><Link to="/language-details?lang=hindi">Hindi</Link></li>
              <li><Link to="/language-details?lang=spanish">Spanish</Link></li>
              <li><Link to="/language-details?lang=french">French</Link></li>
              <li><Link to="/language-details?lang=japanese">Japanese</Link></li>
              <li><Link to="/language-details?lang=telugu">Telugu</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Stay in the loop</h4>
            <p style={{ fontSize: '0.88rem', marginBottom: 0 }}>Get one useful language tip in your inbox every week.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="newsletterEmail" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>Email address</label>
              <input type="email" id="newsletterEmail" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe"><i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} LinguaVerse. All rights reserved.</p>
          <p className="made-with-love">Made with <span className="heart">❤️</span> by Raju</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
