import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 4s
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section container animate-fade-in delay-2">
      <h2 className="section-title">Contact Me</h2>
      <div className="glass-card contact-grid">
        <div className="contact-info-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>Contact Info</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            Whether you want to discuss a new project, share feedback, or simply say hello, feel free to reach out to me!
          </p>

          <a href="mailto:kasidit.pimpimai@example.com" className="contact-method-item">
            <span className="contact-method-icon">📧</span>
            <div className="contact-method-details">
              <h4>Email</h4>
              <p>kasidit.pimpimai@example.com</p>
            </div>
          </a>

          <a href="https://github.com/kasidit-p" target="_blank" rel="noopener noreferrer" className="contact-method-item">
            <span className="contact-method-icon">💻</span>
            <div className="contact-method-details">
              <h4>GitHub</h4>
              <p>github.com/kasidit-p</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/kasidit-p" target="_blank" rel="noopener noreferrer" className="contact-method-item">
            <span className="contact-method-icon">💼</span>
            <div className="contact-method-details">
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/kasidit-p</p>
            </div>
          </a>
        </div>

        <div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter message subject"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Your Message *</label>
              <textarea 
                id="message" 
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Write the details of your message here..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              {isSubmitting ? 'Sending message... ⏳' : 'Send Message ✉️'}
            </button>
          </form>

          {isSubmitted && (
            <div className="toast-msg">
              🎉 Message sent successfully! I will get back to you as soon as possible.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
