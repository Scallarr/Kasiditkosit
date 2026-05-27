import React from 'react';
import ReactDOM from 'react-dom';

const statData = [
  {
    icon: '💻',
    title: 'Full Stack',
    label: 'Web & Mobile Development',
    detail:
      'Experienced in both frontend and backend development, including user interface design, API development, server-side systems, and database management.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    label: 'Smart Systems & Automation',
    detail:
      'Integrating AI-powered features, automation systems, and intelligent tools into modern web and mobile applications.',
  },
  {
    icon: '🧠',
    title: '10+ Languages',
    label: 'Programming & Development Tools',
    detail:
      'Hands‑on experience with HTML5, CSS,Bootstrap,TypeScript, JavaScript, Python, Dart(Flutter), C++, C#,SQL.',
  },
  {
    icon: '🚀',
    title: 'Fast Learner',
    label: 'Quickly Adapt to New Technologies',
    detail:
      'Proven ability to pick up unfamiliar frameworks and ship production‑quality features in days, not weeks.',
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

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
      <h2 className="section-title">About Me</h2>
      <div className="glass-card about-grid">
        <div className="about-text">
          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.25rem' }}>
            I believe that great software is not just about writing correct code, but about delivering exceptional user experiences and solving real problems.
          </p>
          <p>
            Hello! I am a software developer with a strong passion for crafting stable web applications and highly intuitive user interfaces.
            My coding journey started with a deep curiosity to understand how web technologies function under the hood, and quickly grew into a professional pursuit of engineered solutions for real‑world business challenges.
          </p>
          <p style={{ margin: 0 }}>
            My goal is to collaborate with visionary teams to build scalable software solutions that improve people's everyday lives.
            Outside of programming, I constantly stay updated with modern design aesthetics and love experimenting with new frontend creative concepts.
          </p>
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
