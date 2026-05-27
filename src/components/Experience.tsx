import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      date: '2023 - Present',
      description: 'Lead developer for large-scale web application systems. Successfully optimized backend performance and page load speeds by 40%. Oversaw technical migration and integration of modern frontend architectures.',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Agency Co., Ltd.',
      date: '2021 - 2023',
      description: 'Crafted elegant, responsive UI/UX designs working flawlessly across all device categories using React.js and CSS. Collaborated closely with design teams to translate Figma mockups into clean, high-performance production code.',
    },
    {
      id: 3,
      title: 'Bachelor of Engineering',
      company: 'Major University (Computer Engineering)',
      date: '2017 - 2021',
      description: 'Completed comprehensive coursework in Computer Science, covering networking, Data Structures, Algorithms, and Software Engineering. Graduated with excellent academic performance.',
    }
  ];

  return (
    <section id="experience" className="section container animate-fade-in delay-3">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        {experiences.map(exp => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <span className="timeline-company">{exp.company}</span>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
