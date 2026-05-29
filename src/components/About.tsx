import React from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const statData = t.about.stats;

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

  // Helper: wrap keyword matches in hero-keyword spans
  const highlightText = (text: string, keywords: string[]) => {
    if (!keywords.length) return text;
    // Build a regex that matches any keyword (longest first to avoid partial matches)
    const sorted = [...keywords].sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`(${sorted.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
    const parts = text.split(pattern);
    return parts.map((part, i) =>
      keywords.includes(part)
        ? <span key={i} className="hero-keyword">{part}</span>
        : part
    );
  };

  React.useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openIndex]);

  return (
    <section id="about" className="section container animate-fade-in delay-2">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="glass-card about-grid">
        <div className="about-text">
          <p
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}
          >
            {t.about.quote}
          </p>

          <p>{highlightText(t.about.p1, t.about.p1Highlights)}</p>

          <p style={{ margin: 0 }}>{highlightText(t.about.p2, t.about.p2Highlights)}</p>
        </div>

        <div className="stats-grid">
          {statData.map((s, i) => (
            <div
              key={i}
              className={`stat-item animate-fade-in delay-${i + 1}`}
              onClick={() => open(i)}
              style={{ cursor: 'pointer' }}
            >
              <span className="stat-icon">{s.icon}</span>
              <span className="stat-number">{s.title}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Modal overlay ── */}
        {openIndex !== null && ReactDOM.createPortal(
          <div className="popup-overlay" onClick={close}>
            <div className="popup-card" onClick={(e) => e.stopPropagation()}>
              <button className="popup-close" onClick={close}>✕</button>
              <span className="popup-icon">{statData[openIndex].icon}</span>
              <h3 className="popup-title">{statData[openIndex].title}</h3>
              <p className="popup-detail">{statData[openIndex].detail}</p>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};

export default About;

