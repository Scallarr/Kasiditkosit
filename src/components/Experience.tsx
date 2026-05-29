import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

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

const experienceBases = [
  {
    id: 1,
    placeLogo: peaLogoBig,
    placeLogoAlt: 'PEA logo',
    image: peaInternshipProof,
    imageAlt: 'Internship meeting at Provincial Electricity Authority (PEA) Head Office',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=PEA+Head+Office+Bangkok+Thailand',
  },
  {
    id: 4,
    placeLogo: mfulogo,
    placeLogoAlt: 'Mae Fah Luang University logo',
    image: MFUPLACE,
    imageAlt: 'Mae Fah Luang University place',
    mapUrl: 'https://maps.google.com/?q=Mae+Fah+Luang+University',
  },
  {
    id: 5,
    placeLogo: crulogo,
    placeLogoAlt: 'Chonradsadornumrung School logo',
    image: cruplace,
    imageAlt: 'Chonradsadornumrung School campus',
    mapUrl: 'https://maps.google.com/?q=Chonradsadornumrung+School',
  },
];

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const experiences = experienceBases.map((base) => {
    const trans = t.experience.list.find((e) => e.id === base.id);
    return {
      ...base,
      title: trans?.title || '',
      company: trans?.company || '',
      date: trans?.date || '',
      description: trans?.description || '',
      imageCaption: trans?.caption || '',
    };
  });

  return (
    <section id="experience" className="section container animate-fade-in delay-3">
      <h2 className="section-title">{t.experience.title}</h2>
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
                    {exp.imageCaption || t.experience.evidence}
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

