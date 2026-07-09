export default function WhyLinguaVerse() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Why LinguaVerse</span>
          <h2>Built around how people actually learn</h2>
          <p>Every feature exists to remove friction between you and real conversation.</p>
        </div>
        <div className="grid four-col">
          <div className="info-card reveal">
            <div className="icon-wrap"><i className="fa-solid fa-comments"></i></div>
            <h3>Real conversations</h3>
            <p>Practice with dialogue-based lessons, not disconnected flashcards.</p>
          </div>
          <div className="info-card reveal">
            <div className="icon-wrap" style={{ background: 'var(--gradient-secondary)' }}><i className="fa-solid fa-route"></i>
            </div>
            <h3>Guided roadmaps</h3>
            <p>Every language has a clear path from beginner to conversational.</p>
          </div>
          <div className="info-card reveal">
            <div className="icon-wrap" style={{ background: 'var(--gradient-accent)' }}><i className="fa-solid fa-earth-asia"></i>
            </div>
            <h3>Culture built in</h3>
            <p>Learn the history, customs and context behind every phrase.</p>
          </div>
          <div className="info-card reveal">
            <div className="icon-wrap"><i className="fa-solid fa-chart-line"></i></div>
            <h3>Visible progress</h3>
            <p>Track lessons completed, streaks, and skills unlocked over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
