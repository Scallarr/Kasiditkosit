import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app">
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
        <p style={{ fontWeight: 500, color: '#ffffff' }}>© {new Date().getFullYear()} Kasidit Kosit. All rights reserved.</p>
        <p style={{ marginTop: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Designed & Crafted with React, TypeScript & Premium Vanilla CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
