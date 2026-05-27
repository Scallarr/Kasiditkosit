import React from 'react';
import ReactDOM from 'react-dom';
import peaLifeReport from '../assets/ปัญหาที่แก้ PEA_LIFE.pdf';
import peaLifeImg from '../assets/pealife.jpg';
import peaprivillegeImg from '../assets/peaprivillege.png';
import pealifeios from '../assets/pealife_ios.jpg';
import mfufoodguide from '../assets/m.png'

type ProjectLink = {
  label: string;
  href: string;
  icon: string;
};

type Project = {
  id: number;
  title: string;
  role?: 'Front-end' | 'Back-end' | 'Full-stack';
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  ios?: string;
  android?: string;
  report?: string;
  location?: string;
  details: {
    subtitle: string;
    whatWeDid: string[];
    techHighlight: string | string[];
  };
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'PEA LIFE Application',
      role: 'Front-end',
      description:
        'An internal digital platform for Provincial Electricity Authority (PEA) personnel across Thailand, supporting employee management, online leave requests, travel authorization, and welfare services.',
      tech: ['Dart(Flutter)', 'VS code', 'Postman', 'Rest Api', 'UX/UI Designer', 'Fontend Developtment'],
      image: peaLifeImg,
      ios: pealifeios,
      android: 'https://play.google.com/store/apps/details?id=th.co.pea.peaeasylife&hl=en-SG',
      report: peaLifeReport,
      location: 'PEA',
      details: {
        subtitle:
          'Personnel management application for Provincial Electricity Authority (PEA) employees across Thailand',
        whatWeDid: [
          'Internal application exclusively designed for PEA personnel across Thailand.',
          'Personnel management application for Provincial Electricity Authority (PEA) employees across Thailand',
          'Employee profile and internal workforce information management system.',
          'Online leave request system with real-time approval status tracking.',
          'Off-site work and travel authorization request system.',
          'Internal document approval and workflow management system.',
          'Employee welfare, benefits, announcements, and internal service platform.',


        ],
        techHighlight: [
          'Responsibilities included updating legacy source code to support the latest framework and dependency versions',
          'Redesigning and improving the UI/UX for a more modern experience',
          'Implementing new features such as online leave request functionality',
          'Fixing system bugs and performance issues',
          'Upgrading API endpoints and integrations to the latest supported versions',
        ],
      },
    },
    {
      id: 2,
      title: 'PEA Privilege Application',
      role: 'Front-end',
      description:
        'A lifestyle benefit platform for Provincial Electricity Authority (PEA) employees, offering food discounts, merchant rewards, and exclusive dining privileges at partner restaurants.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Google Maps'],
      image: peaprivillegeImg,
      location: 'PEA',
      details: {
        subtitle: 'แอปพลิเคชันรวมสิทธิพิเศษและส่วนลดร้านอาหารสำหรับบุคลากร กฟภ.',
        whatWeDid: [
          'พัฒนาแอปพลิเคชันค้นหาร้านอาหารและสิทธิพิเศษสำหรับพนักงาน',
          'ออกแบบและพัฒนาระบบสแกนคิวอาร์โค้ด (QR Code) เพื่อรับสิทธิ์ส่วนลดหน้าร้าน',
          'เชื่อมต่อแผนที่และระบบนำทางไปยังร้านค้าพันธมิตรใกล้เคียง',
          'จัดหมวดหมู่สิทธิประโยชน์ เช่น เมนูอาหาร เครื่องดื่ม ท่องเที่ยว และที่พัก',
        ],
        techHighlight: 'React Native, Expo, Google Maps API, QR Code Scanner, Node.js, Express.js',
      },
    },
    {
      id: 3,
      title: 'MFU Food Guide And Review Application',
      role: 'Full-stack',
      location: 'MFU',
      description:
        'A collaborative workspace and team management application simulating interactive Kanban boards, task delegation, and progress milestones.',
      tech: ['React.js', 'Node.js', 'Socket.io', 'Express', 'PostgreSQL'],
      image:
        mfufoodguide,
      github: 'https://github.com',
      demo: 'https://demo.com',
      report: 'https://demo.com/synctask-report.pdf',
      details: {
        subtitle: 'แพลตฟอร์มบริหารจัดการงานและโครงการภายในทีมแบบร่วมมือกัน',
        whatWeDid: [
          'พัฒนากระดานงานแบบ Kanban Board',
          'ทำระบบแจ้งเตือนและอัปเดตงานแบบ Real-time',
          'ออกแบบฐานข้อมูลสำหรับบันทึกประวัติงาน',
          'สร้างแดชบอร์ดติดตามความคืบหน้าของทีม',
        ],
        techHighlight: 'React.js, Node.js, Express, Socket.io, PostgreSQL',
      },
    },
    {
      id: 1,
      title: 'PEA LIFE Application',
      role: 'Front-end',
      description:
        'An internal digital platform for Provincial Electricity Authority (PEA) personnel across Thailand, supporting employee management, online leave requests, travel authorization, and welfare services.',
      tech: ['Dart(Flutter)', 'VS code', 'Postman', 'Rest Api', 'UX/UI Designer', 'Fontend Developtment'],
      image: peaLifeImg,
      ios: pealifeios,
      android: 'https://play.google.com/store/apps/details?id=th.co.pea.peaeasylife&hl=en-SG',
      report: peaLifeReport,
      location: 'PEA',
      details: {
        subtitle:
          'Personnel management application for Provincial Electricity Authority (PEA) employees across Thailand',
        whatWeDid: [
          'Internal application exclusively designed for PEA personnel across Thailand.',
          'Personnel management application for Provincial Electricity Authority (PEA) employees across Thailand',
          'Employee profile and internal workforce information management system.',
          'Online leave request system with real-time approval status tracking.',
          'Off-site work and travel authorization request system.',
          'Internal document approval and workflow management system.',
          'Employee welfare, benefits, announcements, and internal service platform.',


        ],
        techHighlight: [
          'Responsibilities included updating legacy source code to support the latest framework and dependency versions',
          'Redesigning and improving the UI/UX for a more modern experience',
          'Implementing new features such as online leave request functionality',
          'Fixing system bugs and performance issues',
          'Upgrading API endpoints and integrations to the latest supported versions',
        ],
      },
    },
    {
      id: 2,
      title: 'PEA Privilege Application',
      role: 'Front-end',
      description:
        'A lifestyle benefit platform for Provincial Electricity Authority (PEA) employees, offering food discounts, merchant rewards, and exclusive dining privileges at partner restaurants.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Google Maps'],
      image: peaprivillegeImg,
      location: 'PEA',
      details: {
        subtitle: 'แอปพลิเคชันรวมสิทธิพิเศษและส่วนลดร้านอาหารสำหรับบุคลากร กฟภ.',
        whatWeDid: [
          'พัฒนาแอปพลิเคชันค้นหาร้านอาหารและสิทธิพิเศษสำหรับพนักงาน',
          'ออกแบบและพัฒนาระบบสแกนคิวอาร์โค้ด (QR Code) เพื่อรับสิทธิ์ส่วนลดหน้าร้าน',
          'เชื่อมต่อแผนที่และระบบนำทางไปยังร้านค้าพันธมิตรใกล้เคียง',
          'จัดหมวดหมู่สิทธิประโยชน์ เช่น เมนูอาหาร เครื่องดื่ม ท่องเที่ยว และที่พัก',
        ],
        techHighlight: 'React Native, Expo, Google Maps API, QR Code Scanner, Node.js, Express.js',
      },
    },
    {
      id: 3,
      title: 'MFU Food Guide And Review Application',
      role: 'Full-stack',
      location: 'MFU',
      description:
        'A collaborative workspace and team management application simulating interactive Kanban boards, task delegation, and progress milestones.',
      tech: ['React.js', 'Node.js', 'Socket.io', 'Express', 'PostgreSQL'],
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      github: 'https://github.com',
      demo: 'https://demo.com',
      report: 'https://demo.com/synctask-report.pdf',
      details: {
        subtitle: 'แพลตฟอร์มบริหารจัดการงานและโครงการภายในทีมแบบร่วมมือกัน',
        whatWeDid: [
          'พัฒนากระดานงานแบบ Kanban Board',
          'ทำระบบแจ้งเตือนและอัปเดตงานแบบ Real-time',
          'ออกแบบฐานข้อมูลสำหรับบันทึกประวัติงาน',
          'สร้างแดชบอร์ดติดตามความคืบหน้าของทีม',
        ],
        techHighlight: 'React.js, Node.js, Express, Socket.io, PostgreSQL',
      },
    },
  ];

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
    <section id="projects" className="section container animate-fade-in delay-2">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="glass-card project-card">
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
                    gap: '0.35rem'
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
                      project.role === 'Full-stack'
                        ? 'rgba(0, 229, 255, 0.08)'
                        : project.role === 'Back-end'
                          ? 'rgba(245, 158, 11, 0.08)'
                          : 'rgba(139, 92, 246, 0.08)',
                    border:
                      project.role === 'Full-stack'
                        ? '1px solid rgba(0, 229, 255, 0.3)'
                        : project.role === 'Back-end'
                          ? '1px solid rgba(245, 158, 11, 0.3)'
                          : '1px solid rgba(139, 92, 246, 0.3)',
                    color:
                      project.role === 'Full-stack'
                        ? '#00e5ff'
                        : project.role === 'Back-end'
                          ? '#f59e0b'
                          : '#c4b5fd',
                  }}
                >
                  {project.role === 'Full-stack' ? '⚡' : project.role === 'Back-end' ? '⚙️' : '🎨'}{' '}
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
                  <span>🔍 View Details</span>
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
              className="popup-card"
              style={{ maxWidth: '720px', width: '95%', textAlign: 'left' }}
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

              <div
                style={{
                  maxHeight: '55vh',
                  overflowY: 'auto',
                  paddingRight: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
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
                    Overview
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                    {activeProject.description}
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
                    Key Features
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
                      <li key={index}>{item}</li>
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
                    What I Did
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
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                      {activeProject.details.techHighlight}
                    </p>
                  )}
                </div>
              </div>

              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
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
                    className="project-link-btn"
                    style={{
                      marginLeft: 'auto',
                      background: 'rgba(245, 158, 11, 0.08)',
                      borderColor: 'rgba(245, 158, 11, 0.35)',
                      color: '#f59e0b',
                    }}
                  >
                    <span>View My Contributions</span>
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