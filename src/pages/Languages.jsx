import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LANGUAGES } from '../data/languages';

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

export default function Languages() {
  const [filter, setFilter] = useState('all');

  const filteredLanguages = filter === 'all' 
    ? LANGUAGES 
    : LANGUAGES.filter((l) => l.difficulty === filter);

  return (
    <main id="main">
      <section className="page-banner">
        <div className="container">
          <h1>Explore Every Language</h1>
          <p>Six carefully crafted courses, each with its own roadmap, culture and community. Pick one — or start them all.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chip-list reveal is-visible" id="difficultyFilter" style={{ justifyContent: 'center', marginBottom: 'var(--space-xl)' }}>
            <button className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')} style={{ cursor: 'pointer' }}>All Languages</button>
            <button className={`chip ${filter === 'Easy' ? 'active' : ''}`} onClick={() => setFilter('Easy')} style={{ cursor: 'pointer' }}>Easy</button>
            <button className={`chip ${filter === 'Medium' ? 'active' : ''}`} onClick={() => setFilter('Medium')} style={{ cursor: 'pointer' }}>Medium</button>
            <button className={`chip ${filter === 'Hard' ? 'active' : ''}`} onClick={() => setFilter('Hard')} style={{ cursor: 'pointer' }}>Hard</button>
          </div>

          <div className="grid lang-grid reveal-stagger">
            {filteredLanguages.map(lang => (
              <article key={lang.id} className="lang-card reveal is-visible">
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
        </div>
      </section>
    </main>
  );
}
