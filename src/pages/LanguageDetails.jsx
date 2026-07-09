import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LANGUAGES } from '../data/languages';

function starsFor(level) {
  return "★".repeat(level) + "☆".repeat(5 - level);
}

function LanguageDetails() {
  const { slug } = useParams();
  const lang = LANGUAGES.find(l => l.slug === slug) || LANGUAGES[0];
  const d = lang;

  useEffect(() => {
    document.title = `${lang.name} — LinguaVerse`;
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [lang.name]);

  if (!d) {
    return (
      <main id="main">
        <div className="container" style={{ padding: '100px 0' }}>
          <h1>Language not found</h1>
          <Link to="/languages" className="btn btn-primary">Back to Languages</Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <section className="page-banner" id="detailsBanner">
        <div className="container">
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <Link to="/languages" className="btn" style={{ 
              background: 'rgba(255,255,255,0.2)', 
              color: '#fff', 
              padding: '8px 16px', 
              borderRadius: 'var(--radius-full)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontSize: '0.9rem', 
              transition: 'background 0.3s', 
              border: '1px solid rgba(255,255,255,0.3)', 
              textDecoration: 'none' 
            }}>
              <i className="fa-solid fa-arrow-left"></i> Go Back
            </Link>
          </div>
          <span className="flag-big">{lang.flag}</span>
          <h1>{lang.name} <span style={{ opacity: .7, fontWeight: 400, fontSize: '1.4rem' }}>({lang.nativeName})</span></h1>
          <p>{d.bannerSubtitle || d.description}</p>
          <div className="meta" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '15px' }}>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '0.9rem' }}><i className="fa-solid fa-signal"></i> {lang.difficulty} · {starsFor(lang.difficultyLevel)}</span>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '0.9rem' }}><i className="fa-solid fa-book"></i> {lang.lessons} lessons</span>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '0.9rem' }}><i className="fa-regular fa-clock"></i> {lang.duration}</span>
            <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '0.9rem' }}><i className="fa-solid fa-users"></i> {lang.learners} learners</span>
          </div>
        </div>
      </section>

      {/* Local navigation menu */}
      <div style={{ borderBottom: '1px solid var(--border-color)', position: 'sticky', top: '70px', background: 'var(--bg-card)', zIndex: 10 }}>
        <div className="container">
          <nav style={{ display: 'flex', gap: '20px', overflowX: 'auto', padding: '15px 0', fontSize: '0.9rem', fontWeight: 600 }}>
            <a href="#historyBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>History</a>
            <a href="#alphabetBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Alphabet</a>
            <a href="#greetingsBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Greetings</a>
            <a href="#numbersBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Numbers</a>
            <a href="#vocabularyBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Vocabulary</a>
            <a href="#grammarBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Grammar</a>
            <a href="#roadmapBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Roadmap</a>
            <a href="#cultureBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Culture</a>
            <a href="#resourcesBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Resources</a>
            <a href="#faqBlock" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>FAQ</a>
          </nav>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 0' }} id="languageDetails">
        
        {/* History */}
        <section id="historyBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>History</h2>
          <p className="block-intro" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '30px' }}>{d.history}</p>
          <h3 style={{ marginBottom: '12px' }}>Where it's spoken</h3>
          <div className="chip-list">
            {d.countries.map((c, i) => (
              <span key={i} className="chip"><i className="fa-solid fa-location-dot"></i> {c}</span>
            ))}
          </div>
        </section>

        {/* Alphabet */}
        <section id="alphabetBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Alphabet &amp; Pronunciation</h2>
          <div className="grid two-col">
            <div className="info-card">
              <div className="icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--primary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fa-solid fa-spell-check"></i>
              </div>
              <h3 style={{ marginBottom: '10px' }}>{d.alphabet.name}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{d.alphabet.count} characters. {d.alphabet.note}</p>
            </div>
            <div className="info-card">
              <div className="icon-wrap" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--gradient-secondary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <i className="fa-solid fa-volume-high"></i>
              </div>
              <h3 style={{ marginBottom: '10px' }}>Pronunciation tips</h3>
              <ul style={{ paddingLeft: '18px', listStyle: 'disc', color: 'var(--text-muted)' }}>
                {d.pronunciation.map((tip, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Greetings */}
        <section id="greetingsBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Greetings</h2>
          <div className="grid two-col" style={{ marginBottom: '30px' }}>
            {d.greetings.map((g, i) => (
              <div key={i} className="phrase-card" style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                <div className="phrase" style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>{g.phrase}</div>
                <div className="meaning" style={{ color: 'var(--text-muted)' }}>{g.meaning}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers */}
        <section id="numbersBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Numbers (1–20)</h2>
          <div className="grid number-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '15px' }}>
            {d.numbers.map((n, i) => (
              <div key={i} className="number-card" style={{ padding: '20px', textAlign: 'center', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-alt)' }}>
                <div className="num" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-color)', marginBottom: '5px' }}>{n.n}</div>
                <div className="word" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>{n.word}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Vocabulary */}
        <section id="vocabularyBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Basic Vocabulary</h2>
          <div className="grid two-col">
            {Object.entries(d.vocabulary).map(([category, words]) => (
              <div key={category} className="info-card" style={{ border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '15px' }}>{category}</h3>
                <div className="chip-list">
                  {words.map((w, i) => (
                    <span key={i} className="chip">{w}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grammar */}
        <section id="grammarBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Grammar Basics</h2>
          <div className="grid three-col" style={{ marginBottom: 'var(--space-lg)' }}>
            {d.grammar.map((g, i) => (
              <div key={i} className="info-card" style={{ border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
                <div className="icon-wrap" style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--primary-color)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px', fontWeight: 'bold' }}>
                  {i + 1}
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{g}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmapBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Learning Roadmap</h2>
          <p className="block-intro" style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>A step-by-step path to take you from zero to conversational in {lang.name}.</p>
          <ul className="roadmap-list" style={{ listStyle: 'none', padding: 0 }}>
            {d.roadmap.map((step, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '15px 0', borderBottom: '1px dashed var(--border-color)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-amber)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.85rem', fontWeight: 'bold' }}>
                  {i + 1}
                </div>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Culture */}
        <section id="cultureBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Culture & Traditions</h2>
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {d.culture.map((c, i) => (
              <div key={i} className="info-card" style={{ border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
                <i className="fa-solid fa-globe" style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '15px' }}></i>
                <p style={{ color: 'var(--text-muted)' }}>{c}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section id="resourcesBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Learning Resources</h2>
          <div className="grid two-col" style={{ gap: '20px' }}>
            {d.resources.map((r, i) => (
              <a key={i} className="resource-card" href="#" style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <div>
                  <strong style={{ display: 'block', marginBottom: '5px' }}>{r.label}</strong>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{r.note}</div>
                </div>
                <div className="icon-wrap" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gradient-secondary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faqBlock" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {d.faq.map((f, i) => (
              <div key={i} style={{ border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px', background: 'var(--bg-alt)' }}>
                <h3 style={{ marginBottom: '10px', fontSize: '1.1rem' }}>{f.q}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.5' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default LanguageDetails;
