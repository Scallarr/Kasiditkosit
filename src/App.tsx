import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { translations } from './translations';
import { useScrollReveal } from './hooks/useScrollReveal';
import './index.css';
import { initGA, trackPageView } from './analytics';




function MainApp() {
  const { language } = useLanguage();
  const t = translations[language];
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useScrollReveal([language, loading]);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 500);
      }, 800);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const timeout = setTimeout(handleLoad, 3500); // 3.5s fallback
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeout);
      };
    }
  }, []);

useScrollReveal([language, loading]);
  useEffect(() => {
  initGA();
  trackPageView();
}, []);

  return (
    <div className="app">
      {loading && (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
          <div className="preloader-spinner-container">
            <div className="preloader-spinner"></div>
            <div className="preloader-spinner-inner"></div>
          </div>
          <span className="preloader-text">{t.loader.loading}</span>
        </div>
      )}

      {/* Premium Ambient Background Elements */}
      <div className="bg-grid-overlay"></div>
      <div className="ambient-light ambient-light-1"></div>
      <div className="ambient-light ambient-light-2"></div>
      <div className="ambient-light ambient-light-3"></div>

      {/* Glassmorphic Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{}}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '4rem 2rem 3rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '6rem',
          background: 'rgba(3, 0, 20, 0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          color: 'var(--text-secondary)',
          fontSize: '0.95rem'
        }}
      >
        <p style={{ fontWeight: 500, color: '#ffffff' }}>© {new Date().getFullYear()} Kasidit Kosit. {t.footer.rights}</p>
        <p style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {t.footer.designed}
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;

