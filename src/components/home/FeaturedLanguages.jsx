import { Link } from 'react-router-dom';
import { LANGUAGES } from '../../data/languages';

/* Map difficulty to a friendlier label */
function difficultyLabel(diff) {
  const map = { Easy: "Beginner", Medium: "Intermediate", Hard: "Advanced" };
  return map[diff] || diff;
}

/* Map popularity to an emoji icon */
function popularityIcon(pop) {
  const map = { Popular: "🔥", Trending: "🚀", New: "✨" };
  return map[pop] || "";
}

export default function FeaturedLanguages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Choose your language</span>
          <h2>Six languages, one learning journey</h2>
          <p>Every course is built from scratch with native speakers, real dialogues and a structured roadmap from zero
            to conversational.</p>
        </div>

        <div className="grid lang-grid reveal-stagger" id="featuredLanguages">
          {LANGUAGES.slice(0, 6).map(lang => (
            <article key={lang.id} className="lang-card reveal">
              <div className="lang-card-top">
                <span className="lang-card-flag" aria-hidden="true">{lang.flag}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {lang.popularity && (
                    <span className="popularity-badge">{popularityIcon(lang.popularity)} {lang.popularity}</span>
                  )}
                  <span className={`difficulty-tag ${lang.difficulty}`}>{difficultyLabel(lang.difficulty)}</span>
                </div>
              </div>
              <h3>{lang.name}</h3>
              <p className="native-name">{lang.nativeName} · {lang.tagline}</p>
              <p className="desc">{lang.description}</p>
              <div className="lang-card-meta">
                <span><i className="fa-solid fa-book"></i> {lang.lessons} lessons</span>
                <span><i className="fa-regular fa-clock"></i> {lang.duration}</span>
                <span><i className="fa-solid fa-users"></i> {lang.learners}</span>
              </div>
              <Link className="btn btn-primary" to={`/languages/${lang.slug}`}>
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
          <Link to="/languages" className="btn btn-secondary reveal">View All Languages <i
              className="fa-solid fa-arrow-right"></i></Link>
        </div>
      </div>
    </section>
  );
}
