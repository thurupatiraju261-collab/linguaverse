export default function TrustStats() {
  return (
    <section className="section trust-section" id="trust">
      <div className="container">
        <div className="grid stats-grid">
          <div className="stat-card glass-stat reveal">
            <div className="stat-icon-wrap stat-icon--learners"><i className="fa-solid fa-user-graduate"></i></div>
            <div className="stat-number" data-counter="25000" data-suffix="+">0</div>
            <div className="stat-label">Happy Learners</div>
          </div>
          <div className="stat-card glass-stat reveal">
            <div className="stat-icon-wrap stat-icon--topics"><i className="fa-solid fa-layer-group"></i></div>
            <div className="stat-number" data-counter="50" data-suffix="+">0</div>
            <div className="stat-label">Topics Covered</div>
          </div>
          <div className="stat-card glass-stat reveal">
            <div className="stat-icon-wrap stat-icon--languages"><i className="fa-solid fa-language"></i></div>
            <div className="stat-number" data-counter="6">0</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stat-card glass-stat reveal">
            <div className="stat-icon-wrap stat-icon--rating"><i className="fa-solid fa-star"></i></div>
            <div className="stat-number" data-counter="4.9">0</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card glass-stat reveal">
            <div className="stat-icon-wrap stat-icon--lessons"><i className="fa-solid fa-gamepad"></i></div>
            <div className="stat-number" data-counter="100" data-suffix="+">0</div>
            <div className="stat-label">Learning Lessons</div>
          </div>
          <div className="stat-card glass-stat reveal">
            <div className="stat-icon-wrap stat-icon--responsive"><i className="fa-solid fa-mobile-screen"></i></div>
            <div className="stat-number" data-counter="100" data-suffix="%">0</div>
            <div className="stat-label">Responsive Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
}
