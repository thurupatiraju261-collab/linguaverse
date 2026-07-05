/* ==========================================================================
   LinguaVerse — footer.js
   The footer is identical on every page, so it's kept in one place and
   injected wherever a <footer id="footer-include"> placeholder exists.
   This file runs immediately (it isn't deferred) so the footer is in the
   DOM before script.js's DOMContentLoaded handlers (newsletter form, etc.)
   look for it.
   ========================================================================== */

(function () {
  const target = document.getElementById("footer-include");
  if (!target) return;

  target.innerHTML = `
    <div class="container">
      <div class="grid footer-grid">

        <div class="footer-brand">
          <a href="index.html" class="nav-brand">
            <img src="images/logo.svg" alt="LinguaVerse logo" />
            <span>LinguaVerse</span>
          </a>
          <p>A premium space to learn English, Hindi, Spanish, French, Japanese and Telugu through real conversations, stories and daily practice.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="languages.html">Languages</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="index.html#pricing">Pricing</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Languages</h4>
          <ul>
            <li><a href="language-details.html?lang=english">English</a></li>
            <li><a href="language-details.html?lang=hindi">Hindi</a></li>
            <li><a href="language-details.html?lang=spanish">Spanish</a></li>
            <li><a href="language-details.html?lang=french">French</a></li>
            <li><a href="language-details.html?lang=japanese">Japanese</a></li>
            <li><a href="language-details.html?lang=telugu">Telugu</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Stay in the loop</h4>
          <p style="font-size:0.88rem;margin-bottom:0;">Get one useful language tip in your inbox every week.</p>
          <form class="newsletter-form" id="newsletterForm">
            <label for="newsletterEmail" class="sr-only" style="position:absolute;left:-9999px;">Email address</label>
            <input type="email" id="newsletterEmail" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe"><i class="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>

      </div>

      <div class="footer-bottom">
        <p>&copy; <span id="currentYear"></span> LinguaVerse. All rights reserved.</p>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </div>
      </div>
    </div>
  `;

  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
