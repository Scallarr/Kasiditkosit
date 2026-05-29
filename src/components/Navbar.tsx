import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <span className="logo-first">KASIDIT</span>
          <span className="logo-last">KOSIT</span>
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
            <a href="#" className="nav-link" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
