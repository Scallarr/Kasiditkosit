import React from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

import peaLifeReport from '../assets/ปัญหาที่แก้ PEA_LIFE.pdf';
import peaLifeImg from '../assets/pealife.jpg';
import peaprivillegeImg from '../assets/peaprivillege.png';
import pealifeios from '../assets/pealife_ios.jpg';
import mfufoodguide from '../assets/m.png';
import mfubookasset from '../assets/mfubookasset.png';
import mfuroomreservation from '../assets/mfuroomreservation.png';
import imageclassification from '../assets/imageclassification.png';
import imagecaptioning from '../assets/image_captioning.png';
import mfureport from '../assets/Final_Report_MFU_Food_Guide_and_Review_Application.pdf';

type ProjectLink = {
  label: string;
  href: string;
  icon: string;
};

type Project = {
  id: number;
  title: string;
  role?: 'Front-end Development' | 'Back-end Development' | 'Full-stack Development' | 'AI-Machine learning';
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  ios?: string;
  android?: string;
  report?: string;
  figma?: string;
  location?: string;
  details: {
    subtitle: string;
    whatWeDid: string[];
    techHighlight: string | string[];
  };
};

const renderHighlightedDescription = (text: string) => {
  const mappings = [
    {
      target: 'Provincial Electricity Authority (PEA)',
      href: 'https://www.pea.co.th',
      color: '#ff7a00',
      hover: '#ff9d42',
    },
    {
      target: 'Mae Fah Luang University (MFU)',
      href: 'https://www.mfu.ac.th',
      color: '#00e5ff',
      hover: '#67e8f9',
    },
  ];

  let result: React.ReactNode[] = [text];

  mappings.forEach(({ target, href, color, hover }) => {
    const next: React.ReactNode[] = [];

    result.forEach((item) => {
      if (typeof item !== 'string' || !item.includes(target)) {
        next.push(item);
        return;
      }

      const parts = item.split(target);
      parts.forEach((part, index) => {
        if (part) next.push(part);
        if (index < parts.length - 1) {
          next.push(
            <a
              key={`${target}-${index}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color,
                fontWeight: 600,
                textDecoration: 'none',
                borderBottom: `1px dashed ${color}`,
                transition: 'var(--transition-fast)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hover;
                e.currentTarget.style.borderBottomColor = hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = color;
                e.currentTarget.style.borderBottomColor = color;
              }}
            >
              {target}
            </a>
          );
        }
      });
    });

    result = next;
  });

  return <>{result}</>;
};

const renderBoldText = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  const renderBoldHelpers = (subText: string, baseKey: string): React.ReactNode[] => {
    if (!subText.includes('**')) return [subText];
    const boldParts = subText.split('**');
    return boldParts.map((part, index) =>
      index % 2 === 1 ? (
        <strong key={`${baseKey}-bold-${index}`} style={{ color: 'var(--text-primary)' }}>
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  while ((match = linkRegex.exec(text)) !== null) {
    const before = text.substring(lastIndex, match.index);
    if (before) {
      parts.push(...renderBoldHelpers(before, `before-${match.index}`));
    }
    const linkText = match[1];
    const url = match[2];
    const isPeaLink = url.includes('peachannel.com') || url.includes('pea.co.th');

    parts.push(
      <a
        key={`link-${match.index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: isPeaLink ? '#ff7a00' : 'var(--accent-cyan)',
          fontWeight: 600,
          textDecoration: 'none',
          borderBottom: `1px dashed ${isPeaLink ? '#ff7a00' : 'var(--accent-cyan)'}`,
          transition: 'var(--transition-fast)',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = isPeaLink ? '#ff9d42' : '#ffffff';
          e.currentTarget.style.borderBottomColor = isPeaLink ? '#ff9d42' : '#ffffff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = isPeaLink ? '#ff7a00' : 'var(--accent-cyan)';
          e.currentTarget.style.borderBottomColor = isPeaLink ? '#ff7a00' : 'var(--accent-cyan)';
        }}
      >
        {linkText} ↗
      </a>
    );
    lastIndex = linkRegex.lastIndex;
  }

  const remainder = text.substring(lastIndex);
  if (remainder) {
    parts.push(...renderBoldHelpers(remainder, 'remainder'));
  }

  return parts.length > 0 ? <>{parts}</> : text;
};

// Base static metadata for projects
const projectBases = [
  {
    id: 1,
    role: 'Front-end Development' as const,
    tech: [
      '🎯 Dart (Flutter)',
      '🔗 REST API',
      '🔑 JWT',
      '  💾 Local storage',
      '🧪 Postman',
      '🖌️ Figma',
      '🌳 Sourcetree',
    ],
    image: peaLifeImg,
    ios: pealifeios,
    android: 'https://play.google.com/store/apps/details?id=th.co.pea.peaeasylife&hl=en-SG',
    report: peaLifeReport,
    location: 'PEA',
  },
  {
    id: 2,
    role: 'Front-end Development' as const,
    tech: [
      '🎯 Dart (Flutter)',
      '🔗 REST API',
      '🔑 JWT Authentication',
      '🧪 Postman',
      '🖌️ Figma',
      '  💾 Local storage',
      '🌳 Sourcetree',
    ],
    image: peaprivillegeImg,
    location: 'PEA',
    ios: 'https://apps.apple.com/md/app/pea-privilege/id6461728753',
    android: 'https://play.google.com/store/apps/details?id=com.pea.privilege',
    figma: 'https://www.figma.com/design/xPpMXPLLHtXJunCmyb854l/PEA-Privilege-Management--1?node-id=10074-494775&p=f&t=6SvVt4TubWUoI1D1-0',
  },
  {
    id: 3,
    role: 'Full-stack Development' as const,
    location: 'MFU',
    tech: [
      '🎯 Dart',
      '⚡ Node.js',
      '🖌️ Figma',
      '🛡️ Perspective API',
      '☁️ Render Server',
      '📸 Cloudinary',
      '🗄️ MySQL',
      '🔐 Google OAuth   Authentication',
    ],
    image: mfufoodguide,
    github: 'https://github.com/Scallarr/MFU_FOOD_GUIDE_REVIEW',
    figma: 'https://www.figma.com/design/HQAn8H8CkwZOLRRJBbIV3Y/MFU-Food-Guide---Review-Application?node-id=0-1&p=f',
    report: mfureport,
  },
  {
    id: 4,
    role: 'Full-stack Development' as const,
    tech: [
      '🎯 Dart (Flutter)',
      '🚂 Node.js',
      '🔗 REST API',
      '🖌️ Figma',
      '🔑 JWT Authentication',
      '🗄️ MySQL',
    ],
    image: mfubookasset,
    github: "https://github.com/Scallarr/Mobile_App_Project",
    location: 'MFU',
  },
  {
    id: 5,
    role: 'Full-stack Development' as const,
    tech: [
      '🖌️ Figma',
      '🌐 HTML & CSS',
      '⚡ JavaScript',
      '🚂 Node.js',
      '🗄️ MySQL',
      '🌳 Sourcetree',
    ],
    github: "https://github.com/Scallarr/WebappProject",
    image: mfuroomreservation,
    location: 'MFU',
  },
  {
    id: 6,
    role: 'AI-Machine learning' as const,
    location: 'MFU',
    tech: [
      '🐍 Python',
      '🎈 Streamlit',
      '📚 TensorFlow',
      '📱 MobileNetV2',
      '🔢 NumPy',
      '🖼️ Pillow',
    ],
    image: imageclassification,
    github: 'https://github.com/Scallarr/image_classifier_app',
  },
  {
    id: 7,
    role: 'AI-Machine learning' as const,
    location: 'MFU',
    tech: [
      '🐍 Python',
      '🧠 Deep Learning',
      '📚 TensorFlow',
      '🔢 NumPy',
      '🖼️ Computer Vision',
      '📝 Image Captioning',
    ],
    image: imagecaptioning,
    github: 'https://github.com/Scallarr/Image_captioning',
  },
];

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Map translation texts to base metadata
  const projects: Project[] = projectBases.map((base) => {
    const trans = t.projects.list.find((p) => p.id === base.id);
    return {
      ...base,
      title: trans?.title || '',
      description: trans?.description || '',
      details: {
        subtitle: trans?.details.subtitle || '',
        whatWeDid: trans?.details.whatWeDid || [],
        techHighlight: trans?.details.techHighlight || [],
      },
    };
  });

  const [activeProject, setActiveProject] = React.useState<Project | null>(null);

  const openDetails = (project: Project) => setActiveProject(project);
  const closeDetails = () => setActiveProject(null);

  React.useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const getPrimaryLinks = (project: Project): ProjectLink[] => {
    const links: ProjectLink[] = [];

    if (project.android) {
      links.push({ label: 'Android', href: project.android, icon: '🤖' });
    }

    if (project.ios) {
      links.push({ label: 'iOS', href: project.ios, icon: '🍎' });
    }

    if (!project.android && !project.ios && project.demo) {
      links.push({ label: 'Live Demo', href: project.demo, icon: '🌐' });
    }

    if (links.length < 2 && project.github) {
      links.push({ label: 'GitHub', href: project.github, icon: '💻' });
    }

    return links.slice(0, 2);
  };

  return (
    <section id="projects" className="section container">
      <div className="title-frame-container reveal">
        <div className="title-frame">
          <h2 className="section-title">{t.projects.title}</h2>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="glass-card project-card reveal"
            style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
          >
            <div
              className="project-img-container"
              style={{ cursor: 'pointer' }}
              onClick={() => openDetails(project)}
            >
              {project.location && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    zIndex: 10,
                    background: 'rgba(3, 0, 15, 0.75)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', boxShadow: '0 0 6px var(--accent-cyan)' }}></span>
                  {project.location}
                </div>
              )}
              <div className="project-img-overlay"></div>
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <h3
                className="project-title"
                style={{ cursor: 'pointer' }}
                onClick={() => openDetails(project)}
              >
                {project.title}
              </h3>

              {project.role && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    marginBottom: '0.65rem',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    width: 'fit-content',
                    background:
                      project.role === 'Full-stack Development'
                        ? 'rgba(0, 229, 255, 0.08)'
                        : project.role === 'Back-end Development'
                          ? 'rgba(245, 158, 11, 0.08)'
                          : 'rgba(139, 92, 246, 0.08)',
                    border:
                      project.role === 'Full-stack Development'
                        ? '1px solid rgba(0, 229, 255, 0.3)'
                        : project.role === 'Back-end Development'
                          ? '1px solid rgba(245, 158, 11, 0.3)'
                          : '1px solid rgba(139, 92, 246, 0.3)',
                    color:
                      project.role === 'Full-stack Development'
                        ? '#00e5ff'
                        : project.role === 'Back-end Development'
                          ? '#f59e0b'
                          : '#c4b5fd',
                  }}
                >
                  {project.role === 'Full-stack Development' ? '⚡' : project.role === 'Back-end Development' ? '⚙️' : '🤖'}{' '}
                  {project.role}
                </span>
              )}

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tag, idx) => (
                  <span key={idx} className="tech-badge">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <button
                  onClick={() => openDetails(project)}
                  className="project-link-btn"
                  style={{
                    width: '100%',
                    background: 'rgba(139,92,246,0.1)',
                    border: '1px solid rgba(139,92,246,0.3)',
                    color: '#c4b5fd',
                    cursor: 'pointer',
                  }}
                >
                  <span>{t.projects.view_details}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeProject &&
        ReactDOM.createPortal(
          <div className="popup-overlay" onClick={closeDetails}>
            <div
              className="popup-card project-popup-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="popup-close" onClick={closeDetails}>
                ✕
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span className="popup-icon" style={{ fontSize: '2.5rem', marginBottom: 0 }}>
                  📂
                </span>
                <h3 className="popup-title" style={{ marginBottom: 0, fontSize: '1.8rem' }}>
                  {activeProject.title}
                </h3>
              </div>

              <p style={{ color: '#c4b5fd', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1rem' }}>
                {activeProject.details.subtitle}
              </p>

              <div className="project-popup-body">
                <div style={{ marginBottom: '1.25rem' }}>
                  <h4
                    style={{
                      color: '#fff',
                      fontSize: '1.05rem',
                      marginBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      paddingBottom: '0.35rem',
                    }}
                  >
                    {t.projects.overview}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                    {renderHighlightedDescription(activeProject.description)}
                  </p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h4
                    style={{
                      color: '#fff',
                      fontSize: '1.05rem',
                      marginBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      paddingBottom: '0.35rem',
                    }}
                  >
                    {t.projects.key_features}
                  </h4>

                  <ul
                    style={{
                      paddingLeft: '1.2rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      margin: 0,
                    }}
                  >
                    {activeProject.details.whatWeDid.map((item, index) => (
                      <li key={index}>{renderBoldText(item)}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <h4
                    style={{
                      color: '#fff',
                      fontSize: '1.05rem',
                      marginBottom: '0.75rem',
                      borderBottom: '1px solid rgba(255,255,255,0.1)',
                      paddingBottom: '0.35rem',
                    }}
                  >
                    {t.projects.responsibilities}
                  </h4>

                  {Array.isArray(activeProject.details.techHighlight) ? (
                    <ul
                      style={{
                        paddingLeft: '1.2rem',
                        color: 'var(--text-secondary)',
                        fontSize: '0.94rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                        margin: 0,
                      }}
                    >
                      {activeProject.details.techHighlight.map((item, index) => (
                        <li key={index}>{renderBoldText(item)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                      {renderBoldText(activeProject.details.techHighlight)}
                    </p>
                  )}
                </div>
              </div>

              <div className="project-popup-footer">
                <div className="project-popup-primary-links">
                  {getPrimaryLinks(activeProject).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                    >
                      <span>
                        {link.icon} {link.label}
                      </span>
                    </a>
                  ))}
                </div>

                {activeProject.report && (
                  <a
                    href={activeProject.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn report-btn"
                  >
                    <span>
                      {t.projects.contribution}
                    </span>
                  </a>
                )}
                {activeProject.figma && (
                  <a
                    href={activeProject.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn figma-btn"
                  >
                    <span>
                      {t.projects.figma}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Projects;

