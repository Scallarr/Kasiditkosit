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
          <h1>
            Hi, I'm{' '}
            <span
              style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800
              }}
            >
              Kasidit Kosit
            </span>
          </h1>
          <div className="hero-subtitle">Software Developer & Frontend Specialist</div>
          <p className="hero-description">
            I am a passionate software developer dedicated to building beautiful, state-of-the-art web applications.
            I focus on writing clean, maintainable code, optimizing performance, and crafting pixel-perfect,
            intuitive user experiences.
          </p>
          <div className="btn-group">
            <a href="#contact" className="btn-primary">
              Contact Me 🚀
            </a>
            <a href="#about" className="btn-secondary">
              About Me 🧑‍💻
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
