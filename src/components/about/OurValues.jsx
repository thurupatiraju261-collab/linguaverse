export default function OurValues() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Our Values</span>
          <h2>What guides every lesson we build</h2>
        </div>
        <div className="grid values-grid">
          <div className="info-card reveal">
            <div className="icon-wrap"><i className="fa-solid fa-heart"></i></div>
            <h3>Empathy</h3>
            <p>We design for the nervous first-timer, not just the confident polyglot.</p>
          </div>
          <div className="info-card reveal">
            <div className="icon-wrap" style={{ background: 'var(--gradient-secondary)' }}><i
                className="fa-solid fa-scale-balanced"></i></div>
            <h3>Accuracy</h3>
            <p>Every lesson is checked against real usage, not machine-guessed grammar.</p>
          </div>
          <div className="info-card reveal">
            <div className="icon-wrap" style={{ background: 'var(--gradient-accent)' }}><i className="fa-solid fa-door-open"></i>
            </div>
            <h3>Accessibility</h3>
            <p>A free tier that's genuinely useful, not just a teaser.</p>
          </div>
          <div className="info-card reveal">
            <div className="icon-wrap"><i className="fa-solid fa-seedling"></i></div>
            <h3>Growth</h3>
            <p>We ship new languages and lessons based on what learners ask for.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
