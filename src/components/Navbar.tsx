import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import resume from "../assets/resume.pdf";

const LOGO_NAMES = {
  en: 'KASIDIT KOSIT',
  th: 'กษิดิศ โกสิทธิ์',
};

const splitThaiGraphemes = (text: string) => {
  const result: string[] = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = char.charCodeAt(0);
    const isCombining = 
      (code >= 0x0e31 && code <= 0x0e3a) || // Vowels below/above
      (code >= 0x0e47 && code <= 0x0e4e);   // Tone marks & diacritics

    if (isCombining && result.length > 0) {
      result[result.length - 1] += char;
    } else {
      result.push(char);
    }
  }
  return result;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  // Logo animation state
  const name = LOGO_NAMES[language];
  const [position, setPosition] = useState<'center' | 'left' | 'right'>('center');

  useEffect(() => {
    let active = true;
    let nextAction = 'exit-left'; // 'exit-left' | 'enter-left' | 'exit-right' | 'enter-right'

    const runAnimation = () => {
      if (!active) return;

      if (nextAction === 'exit-left') {
        setPosition('left');
        nextAction = 'enter-left';
        setTimeout(runAnimation, 1200); // 1.2s to fully clear all characters + pause
      } else if (nextAction === 'enter-left') {
        setPosition('center');
        nextAction = 'exit-right';
        setTimeout(runAnimation, 4000); // visible duration
      } else if (nextAction === 'exit-right') {
        setPosition('right');
        nextAction = 'enter-right';
        setTimeout(runAnimation, 1200); // 1.2s to fully clear all characters + pause
      } else if (nextAction === 'enter-right') {
        setPosition('center');
        nextAction = 'exit-left';
        setTimeout(runAnimation, 4000); // visible duration
      }
    };

    const initialTimeout = setTimeout(runAnimation, 3000);

    return () => {
      active = false;
      clearTimeout(initialTimeout);
    };
  }, []);

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
          <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingRight: '4px' }}>
            {(() => {
              const graphemes = splitThaiGraphemes(name);
              const totalChars = graphemes.length;
              return (
                <>
                  {graphemes.map((char, index) => {
                    const bgPos = `${(index / (totalChars - 1)) * 100}% 0%`;
                    return (
                      <span
                        key={index}
                        style={{
                          opacity: position === 'center' ? 1 : 0,
                          transform: position === 'center'
                            ? 'translateX(0)'
                            : position === 'left'
                              ? 'translateX(-150%)'
                              : 'translateX(150%)',
                          transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                          transitionDelay: `${index * 25}ms`,
                          display: 'inline-block',
                          whiteSpace: 'pre',
                          background: 'linear-gradient(92deg, #ffd166 0%, #ff8a00 28%, #ff4d6d 58%, #7c3aed 100%)',
                          backgroundSize: `${totalChars * 100}% 100%`,
                          backgroundPosition: bgPos,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          filter: 'drop-shadow(0 2px 8px rgba(255, 138, 0, 0.15))',
                          fontWeight: 900,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  <span
                    className="nav-logo-dot"
                    aria-hidden="true"
                    style={{
                      opacity: position === 'center' ? 1 : 0,
                      transform: position === 'center'
                        ? 'translateX(0)'
                        : position === 'left'
                          ? 'translateX(-150%)'
                          : 'translateX(150%)',
                      transition: 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      transitionDelay: `${totalChars * 25}ms`,
                      display: 'inline-block',
                      verticalAlign: 'bottom',
                      marginLeft: '6px',
                    }}
                  />
                </>
        );
      })()}
    </span>
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