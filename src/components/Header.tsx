import React from 'react';
import studentImg from "../assets/รูปนักศึกษา.jpg";

const Header = () => {
  return (
    <section id="home" className="section container animate-fade-in delay-1">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="badge-glow" style={{ marginBottom: '1.5rem' }}>
            <span className="badge-dot"></span>
            Available for Work
          </div>
          <h1 className="hero-title">
            Hello, I'm{' '}
            <span className="hero-name-gradient">Kasidit Kosit</span>
          </h1>

          <div className="hero-subtitle-row">
            <span className="hero-subtitle">Full Stack Developer</span>
            <span className="hero-subtitle-dot">•</span>
            <span className="hero-subtitle-focus">Front-end + Back-end</span>
          </div>

          <p className="hero-description">
            A passionate Full Stack Developer building modern{' '}
            <span className="hero-keyword">Web </span> and{' '}
            <span className="hero-keyword">Mobile Applications</span> with intuitive user experiences, scalable{' '}
            <span className="hero-keyword">Backend Systems</span>, and efficient{' '}
            <span className="hero-keyword">Databases</span>.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn-primary">
              Contact Me
            </a>
            <a href="#about" className="btn-secondary">
              About Me
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
