import React from 'react';
import studentImg from "../assets/รูปนักศึกษา.jpg";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
            <span className="hero-subtitle-focus">{t.header.focus}</span>
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
          <div className="profile-card">
            <img
              src={studentImg}
              alt="Kasidit Pimpimai"
              onError={(e) => {
                // Failback to fallback illustration or empty placeholder if image has issues
                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

