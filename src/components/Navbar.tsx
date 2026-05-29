import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import resume from "../assets/resume.pdf";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <span className="logo-first">{t.nav.logo_first}</span>
          <span className="logo-last">{t.nav.logo_last}</span>
          <span className="nav-logo-dot" aria-hidden="true"></span>
        </a>

        <button
          className={`nav-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="nav-toggle-icon"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#" className="nav-link" onClick={closeMenu}>
              {t.nav.home}
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMenu}>
              {t.nav.skills}
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={closeMenu}>
              {t.nav.experience}
            </a>
          </li>






          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>
              {t.nav.contact}
            </a>
          </li>



          {/* Resume Button */}
          <li>
            <a
              href={resume}
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"


              onClick={closeMenu}
            >
              {t.nav.resume}
            </a>
          </li>

          <li className="lang-switcher-container">
            <button
              className="lang-toggle-btn"

              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}

              aria-label={`Switch language to ${language === 'en' ? 'Thai' : 'English'
                }`}
              title={`Switch language to ${language === 'en' ? 'Thai' : 'English'
                }`}
            >
              <span
                className={`lang-option ${language === 'en' ? 'active' : ''
                  }`}
              >
                EN
              </span>
              <span
                className={`lang-option ${language === 'th' ? 'active' : ''
                  }`}
              >
                TH
              </span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;