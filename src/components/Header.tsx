import React, { useState, useEffect } from 'react';
import studentImg from "../assets/รูปนักศึกษา.jpg";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const focusWords = {
  en: ['Front-end Developer', 'Back-end Developer', 'Mobile Apps Developer', 'Web Development', 'AI Integration Engineer'],
  th: ['นักพัฒนา Front-end', 'นักพัฒนา Back-end', 'นักพัฒนาแอปพลิเคชันมือถือ', 'นักพัฒนาเว็บไซต์', 'วิศวกรการผสานรวม AI'],
};

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const words = focusWords[language] ?? focusWords.en;

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        // Fade in
        setVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="section container animate-fade-in delay-1">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="badge-glow" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-dot"></span>
            {t.header.available}
          </div>
          <h1 className="hero-title">
            {t.header.hello}{' '}
            <span className="hero-name-gradient">{t.header.title_name}</span>
          </h1>

          <div className="hero-subtitle-row">
            <span className="hero-subtitle">{t.header.role}</span>
            <span className="hero-subtitle-dot">•</span>
            <span
              className="hero-subtitle-focus"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(-8px)',
                transition: 'opacity 0.35s ease, transform 0.35s ease',
                display: 'inline-block',
                minWidth: '130px',
              }}
            >
              {words[index]}
            </span>
          </div>

          <p className="hero-description">
            {t.header.description_prefix}
            <span className="hero-keyword">{t.header.description_role}</span>
            {t.header.description_middle}
            <span className="hero-keyword">{t.header.description_web}</span>
            {t.header.description_and}
            <span className="hero-keyword">{t.header.description_mobile}</span>
            {t.header.description_post}
            <span className="hero-keyword">{t.header.description_backend}</span>
            {t.header.description_post_backend}
            <span className="hero-keyword">{t.header.description_db}</span>
            {t.header.description_end}
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn-primary">
              {t.header.btn_contact}
            </a>
            <a href="#about" className="btn-secondary">
              {t.header.btn_about}
            </a>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-glow-ring"></div>
          <div className="profile-ring-rotate"></div>
          <div className="profile-orbit">
            <span className="orbit-dot orbit-dot-1"></span>
            <span className="orbit-dot orbit-dot-2"></span>
            <span className="orbit-dot orbit-dot-3"></span>
          </div>
          <div className="profile-float">
            <div className="profile-card">
              <img
                src={studentImg}
                alt="Kasidit Pimpimai"
                onError={(e) => {
                  // Failback to fallback illustration or empty placeholder if image has issues
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80";
                }}
              />
              <span className="profile-shine"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

