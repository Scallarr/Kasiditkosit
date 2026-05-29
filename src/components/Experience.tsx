import React from 'react';
import peaInternshipProof from '../assets/pea_internship_proof.png';
import peaLogoBig from '../assets/pea_logo_big.png';
import mfulogo from '../assets/MFU.jpg';
import MFUPLACE from '../assets/MFUPLACE.jpg';
import crulogo from '../assets/CRU.png';
import cruplace from '../assets/cruplace.jpg';

const LocationIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 22C12 22 19 16 19 10.5C19 6.35786 15.866 3 12 3C8.13401 3 5 6.35786 5 10.5C5 16 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Internship - Provincial Electricity Authority (PEA)',
      company: 'PEA Head Office, Bangkok, Thailand',
      placeLogo: peaLogoBig,
      placeLogoAlt: 'PEA logo',
      date: 'Jan 2026 - May 2026',
      description:
        'Refactored legacy mobile application code for successful App Store deployment, updated API endpoints for data integration, implemented new features, and performed debugging/testing to improve stability and performance.',
      image: peaInternshipProof,
      imageAlt: 'Internship meeting at Provincial Electricity Authority (PEA) Head Office',
      imageCaption: 'Internship activity at PEA Head Office, Bangkok.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=PEA+Head+Office+Bangkok+Thailand',
    },


    {
      id: 4,
      title: "Bachelor's of Engineering",
      company: 'Mae Fah Luang University, Chiang Rai, Thailand',
      placeLogo: mfulogo,
      placeLogoAlt: 'Mae Fah Luang University logo',
      image: MFUPLACE,
      date: 'Aug 2022 - May 2026',
      description: 'Major in Computer Engineering, GPAX 3.87, with strong foundation in software engineering and system development.',
      imageAlt: 'Mae Fah Luang University place',
      imageCaption: 'Mae Fah Luang University campus, Chiang Rai.',
      mapUrl: 'https://maps.google.com/?q=Mae+Fah+Luang+University',
    },
    {
      id: 5,
      title: 'High School Diploma',
      company: 'Chonradsadornumrung School, Chonburi, Thailand',
      placeLogo: crulogo,
      placeLogoAlt: 'Chonradsadornumrung School logo',
      date: 'Jan 2019 - Feb 2022',
      image: cruplace,
      description: 'Completed high school education with GPAX 3.63.',
      imageAlt: 'Chonradsadornumrung School campus',
      imageCaption: 'Chonradsadornumrung School, Chonburi.',
      mapUrl: 'https://maps.google.com/?q=Chonradsadornumrung+School',
    },
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
                <h3 className="timeline-title timeline-title-with-logo">
                  <span className="timeline-title-logo">
                    <img
                      src={exp.placeLogo}
                      alt={exp.placeLogoAlt || `${exp.company} logo`}
                      className="timeline-title-logo-image"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/72x72/0b1622/a6e9ff?text=LOGO';
                      }}
                    />
                  </span>
                  <span className="timeline-title-text">{exp.title}</span>
                </h3>
                <span className="timeline-date">{exp.date}</span>
              </div>
              <div className="timeline-company-row">
                <span className="timeline-company-icon">
                  <LocationIcon />
                </span>
                {exp.mapUrl ? (
                  <a
                    href={exp.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-company timeline-company-link"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="timeline-company">{exp.company}</span>
                )}
              </div>
              <p className="timeline-desc">{exp.description}</p>
              {exp.image && (
                <figure className="timeline-proof">
                  <img src={exp.image} alt={exp.imageAlt || exp.title} className="timeline-proof-image" />
                  <figcaption className="timeline-proof-caption">
                    {exp.imageCaption || 'Location evidence.'}
                  </figcaption>
                </figure>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
