import { Link } from 'react-router-dom';

export default function PricingPlans() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans for every learner</h2>
          <p>Start for free, upgrade when you're ready to go further. No hidden fees, cancel any time.</p>
        </div>

        <div className="grid pricing-grid">
          <div className="price-card reveal">
            <h3>Starter</h3>
            <p>Perfect for trying LinguaVerse out.</p>
            <div className="price">$0 <span>/ forever</span></div>
            <ul>
              <li><i className="fa-solid fa-circle-check"></i> Access to 1 language</li>
              <li><i className="fa-solid fa-circle-check"></i> 20 core lessons</li>
              <li><i className="fa-solid fa-circle-check"></i> Basic vocabulary trainer</li>
              <li><i className="fa-solid fa-circle-check"></i> Community support</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary btn-block">Get Started</Link>
          </div>

          <div className="price-card featured reveal">
            <span className="ribbon">Most Popular</span>
            <h3>Pro</h3>
            <p>Everything you need to become fluent.</p>
            <div className="price">$12 <span>/ month</span></div>
            <ul>
              <li><i className="fa-solid fa-circle-check"></i> All 6 languages, unlimited</li>
              <li><i className="fa-solid fa-circle-check"></i> Full lesson & phrase library</li>
              <li><i className="fa-solid fa-circle-check"></i> Progress tracking & roadmaps</li>
              <li><i className="fa-solid fa-circle-check"></i> Offline mode</li>
              <li><i className="fa-solid fa-circle-check"></i> Priority support</li>
            </ul>
            <Link to="/contact" className="btn btn-accent btn-block">Start Pro Trial</Link>
          </div>

          <div className="price-card reveal">
            <h3>Lifetime</h3>
            <p>Pay once, learn for life.</p>
            <div className="price">$199 <span>/ one-time</span></div>
            <ul>
              <li><i className="fa-solid fa-circle-check"></i> Everything in Pro</li>
              <li><i className="fa-solid fa-circle-check"></i> Lifetime updates & new languages</li>
              <li><i className="fa-solid fa-circle-check"></i> Downloadable certificates</li>
              <li><i className="fa-solid fa-circle-check"></i> 1:1 onboarding session</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary btn-block">Get Lifetime Access</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
