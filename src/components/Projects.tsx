import React from 'react';
import ReactDOM from 'react-dom';
import peaLifeReport from '../assets/ปัญหาที่แก้ PEA_LIFE.pdf';
import peaLifeImg from '../assets/pealife.jpg';
import peaprivillegeImg from '../assets/peaprivillege.png';
import pealifeios from '../assets/pealife_ios.jpg';
import mfufoodguide from '../assets/m.png'
import mfubookasset from '../assets/mfubookasset.png'
import mfuroomreservation from '../assets/mfuroomreservation.png'
import imageclassification from '../assets/imageclassification.png'
import mfureport from '../assets/Final_Report_MFU_Food_Guide_and_Review_Application.pdf'

/* ── Tech / Tool icon mapping ── */
const techIcons: Record<string, string> = {
  'Dart(Flutter)': '🐦',
  'Flutter': '🐦',
  'VS code': '💻',
  'Visual Studio Code': '💻',
  'Postman': '📮',
  'Rest Api': '🔌',
  'RESTful API': '🔌',
  'UX/UI Designer': '🎨',
  'Fontend Developtment': '🖥️',
  'Frontend Development': '🖥️',
  'Sourcetree': '🌳',
  'sourcetree': '🌳',
  'Node.js': '🟢',
  'Express': '🚂',
  'Express.js': '🚂',
  'MySQL': '🐬',
  'MongoDB': '🍃',
  'PostgreSQL': '🐘',
  'React': '⚛️',
  'React.js': '⚛️',
  'React Native': '⚛️',
  'TypeScript': '📘',
  'JavaScript': '⚡',
  'HTML5 & CSS': '🌐',
  'Bootstrap': '🅱️',
  'Google Maps': '🗺️',
  'Socket.io': '🔄',
  'Docker': '🐳',
  'Git & GitHub': '🐙',
  'GitHub': '🐙',
  'Figma': '🎭',
  'vs code': '💻',
  'Python': '🐍',
  'Jupyter Notebook': '📓',
};


type ProjectLink = {
  label: string;
  href: string;
  icon: string;
};

type Project = {
  id: number;
  title: string;
  role?: 'Front-end' | 'Back-end' | 'Full-stack' | 'AI-Machine learning';
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
  const target = 'Provincial Electricity Authority (PEA)';
  const target2 = 'Mae Fah Luang University (MFU)';
  if (!text.includes(target)) return text;

  const parts = text.split(target);
  const parts2 = text.split(target2);
  return parts.reduce((prev: React.ReactNode[], current, index) => {
    if (index === 0) {
      return [current];
    }
    return [
      ...prev,
      <a
        key={index}
        href="https://www.pea.co.th"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#ff7a00',
          fontWeight: 600,
          textDecoration: 'none',
          borderBottom: '1px dashed #ff7a00',
          transition: 'var(--transition-fast)',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#ff9d42';
          e.currentTarget.style.borderBottomColor = '#ff9d42';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#ff7a00';
          e.currentTarget.style.borderBottomColor = '#ff7a00';
        }}
      >
        Provincial Electricity Authority (PEA) ↗
      </a>,
      current
    ];
  }, []);
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

    const linkIcon = techIcons[linkText] || '';
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
        {linkIcon && `${linkIcon} `}{linkText} ↗
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
          '**Target Audience:** Internal application exclusively designed for PEA personnel across Thailand.',

          '**Employee Profile:** Internal workforce profile and employee information management system.',
          '**Online Leave Request:** Supports online leave submissions with real-time approval status tracking.',
          '**Operations & Travel Management:** Platform for recording and approving business travel requests, cash advances, and expense reimbursements for off-site operations.',
          '**Document Approval:** Internal workflow and document approval management system.',
          '**Services & Employee Welfare:** Centralized platform for internal news, announcements, employee welfare, and lifestyle features such as PR House and other employee privileges.',
        ],
        techHighlight: [
          '**Legacy Code Update:** Updated legacy [Dart (Flutter)](https://flutter.dev) source code to support the latest framework and dependency versions.',
          '**API Integration:** Upgraded [REST API](https://restfulapi.net/) endpoints and third-party integrations to the latest supported versions  using [Postman](https://www.postman.com/).',
          '**UI/UX Improvement:** Redesigned the interface  for a more modern, clean, and intuitive user experience.',
          '**Feature Implementation:** Implemented online leave request and approval functionalities within the internal employee management system.',
          '**Testing:** Added unit testing to improve system reliability and maintain code quality.',
          '**Debugging & Optimization:** Resolved critical system bugs and improved overall system performance and stability.',
          '**Team Collaboration:** Collaborated with team members using [Sourcetree](https://www.sourcetreeapp.com/) and [GitHub](https://github.com)) for version control, code management, and collaborative development workflows.',
        ],



      },
    },
    {
      id: 2,
      title: 'PEA Privilege Application',
      role: 'Front-end',
      description:
        'A digital platform developed for Provincial Electricity Authority (PEA) business customers, providing convenient access to important information, online services, and request tracking in one centralized system to enhance user experience and service efficiency.',
      tech: ['Dart(Flutter)', 'VS code', 'Postman', 'Rest Api', 'UX/UI Designer', 'Sourcetree', 'Fontend Developtment'],
      image: peaprivillegeImg,
      location: 'PEA',
      ios: 'https://apps.apple.com/md/app/pea-privilege/id6461728753',
      android: 'https://play.google.com/store/apps/details?id=com.pea.privilege',
      figma: 'https://www.figma.com/design/xPpMXPLLHtXJunCmyb854l/PEA-Privilege-Management--1?node-id=10074-494775&p=f&t=6SvVt4TubWUoI1D1-0',
      details: {
        subtitle: 'แอปพลิเคชันรวมสิทธิพิเศษและส่วนลดร้านอาหารสำหรับบุคลากร กฟภ.',
        whatWeDid: [
          '**Target Audience:** Digital platform designed for PEA business customers.',
          '**Customer Management:** Business customer management system.',
          '**Service Request:** Online service request tracking system.',
          '**Dashboard:** Centralized customer information dashboard.',
          '**Notifications:** Real-time notifications and updates.',
          '**Service Platform:** User-friendly digital service platform.',
          '**Secure Access:** Secure access to customer services.',
          '**Utility Management:** Convenient online utility management.',
          '**Voucher System:** Voucher management system (currently under development).',
        ],

        techHighlight: [
          '**Legacy Code Update:** Updated the [Dart (Flutter)](https://flutter.dev) source code to the latest version.',
          '**Security Enhancement:** Improved the registration system by implementing Gmail OTP verification.',
          '**UI/UX Design:** Enhanced the UI/UX for a better user experience.',
          '**Feature Development:** Developed the Voucher Management feature and integration tested via [Postman](https://www.postman.com/).',
          '**System Reliability:** Implemented unit testing to improve system reliability.',
          '**Debugging:** Fixed bugs  and improved overall system stability.',
          '**Optimization:** Optimized the application  to support responsive design on both Android and iOS.',
          '**Team Collaboration:** Collaborated with team members using [Sourcetree](https://www.sourcetreeapp.com/) and [GitHub](https://github.com)) for version control, code management, and collaborative development workflows.',
        ],
      },
    },
    {
      id: 3,
      title: 'MFU Food Guide And Review Application',
      role: 'Full-stack',
      location: 'MFU',
      description:
        'A mobile application for MFU students and staff to discover restaurants, explore menus, write reviews, and interact with AI-powered chatbot, content moderation, and community features within the university',
      tech: ['UX/UI Designer', 'Dart(Flutter)', 'Node.js', 'Express', 'MySQL', 'vs code', 'sourcetree'],
      image: mfufoodguide,
      github: 'https://github.com/Scallarr/MFU_FOOD_GUIDE_REVIEW',
      figma: 'https://www.figma.com/design/HQAn8H8CkwZOLRRJBbIV3Y/MFU-Food-Guide---Review-Application?node-id=0-1&p=f',
      report: mfureport,
      details: {
        subtitle: 'แพลตฟอร์มบริหารจัดการงานและโครงการภายในทีมแบบร่วมมือกัน',
        whatWeDid: [
          '**Target Audience:** Platform designed for MFU students, staff, and university visitors.',
          '**Food Recommendation System:** Restaurant recommendation and review system for MFU students and staff.',
          '**Smart Filtering:** Restaurant filtering by rating, location, and food category.',
          '**Leaderboard System:** Ranking system for top-rated restaurants and most-liked users.',
          '**Community Threads:** Threads community for food discussions and user interactions.',
          '**AI Assistant:** AI-powered chatbot assistant for application support and general questions.',
          '**AI Moderation:** AI moderation system for detecting inappropriate reviews and messages.',
          '**Reward & Coin System:** Coin and profile shop system with reward-based engagement.',
          '**Admin Management:** Administrative system for managing users, reviews, restaurants, and application content.',
          '**Role Management:** Role-based access control for Guest, User, and Admin management.',
        ],

        techHighlight: [
          '**Cross-Platform Development:** Developed and maintained the [Flutter](https://flutter.dev) mobile application for Android and iOS platforms.',

          '**UI/UX Implementation:** Designed and improved the user interface for a modern and user-friendly experience.',

          '**Secure Authentication:** Implemented [Google OAuth](https://developers.google.com/identity/protocols/oauth2) login to restrict access to verified MFU students and staff.',

          '**AI Chatbot Development:** Integrated [Cohere API](https://cohere.com/) to build AI-powered chatbot functionalities for user assistance and application guidance.',

          '**AI Safety System:** Implemented [Google Perspective API](https://perspectiveapi.com/) for real-time moderation of inappropriate reviews, threads, and user-generated content.',

          '**Community System Development:** Developed restaurant review, leaderboard, and discussion thread systems to improve user engagement.',

          '**Backend & API Integration:** Connected the  frontend with [Node.js](https://nodejs.org/) REST APIs for real-time communication and data handling.',

          '**Database Architecture:** Designed and managed [MySQL](https://www.mysql.com/) database structures, relationships, and system workflows.',

          '**Cloud Deployment:** Configured and deployed backend services on [Render](https://render.com) for cloud hosting and online accessibility.',

          '**Testing & Optimization:** Performed debugging, testing, and performance optimization  to improve stability and responsiveness.',

          '**Team Collaboration:** Collaborated with team members using [Sourcetree](https://www.sourcetreeapp.com/) and [GitHub](https://github.com)) for version control, code management, and collaborative development workflows.',

        ]
      },

    },
    {
      id: 4,
      title: 'MFU Movie Assets Application ',
      role: 'Full-stack',
      description:
        'A smart mobile application designed for MFU students and staff to search, borrow, and manage movies conveniently anytime and anywhere through a modern and user-friendly digital platform.',
      tech: ['Dart(Flutter)', 'VS code', 'Postman', 'Rest Api', 'UX/UI Designer', 'Fontend Developtment'],
      image: mfubookasset,
      ios: pealifeios,
      android: 'https://play.google.com/store/apps/details?id=th.co.pea.peaeasylife&hl=en-SG',
      report: peaLifeReport,
      location: 'MFU',
      details: {
        subtitle:
          'Personnel management application for Provincial Electricity Authority (PEA) employees across Thailand',
        whatWeDid: [
          '**Movie Borrowing System:** Search, borrow, and manage movie rentals through the mobile application.',
          '**Approval Workflow:** Approver system for approving movie borrowing requests.',
          '**Return Verification:** Administrative system for verifying and managing movie returns.',
          '**Admin Dashboard:** Dashboard for monitoring overall application activities and movie management.',
          '**User Authentication:** Secure login system for authorized MFU users.',
          '**Responsive UI:** Modern and user-friendly interface optimized for mobile devices.',
        ],
        techHighlight: [
          '**Cross-Platform Development:** Developed and maintained the movie borrowing mobile application using [Dart (Flutter)](https://flutter.dev) for Android and iOS platforms.',

          '**UI/UX Implementation:** Designed and improved the user interface  for a modern and user-friendly experience.',

          '**Secure Authentication:** Implemented secure login and user authentication for authorized MFU users.',

          '**Approval System Development:** Developed the workflow system for approving movie borrowing requests.',

          '**Admin System Implementation:** Developed administrative features for verifying movie returns and monitoring application activities.',

          '**Backend Development & API Integration:** Developed the backend system using [Node.js](https://www.nodejs.org/) and connected the Flutter frontend with [REST APIs](https://restfulapi.net/) for real-time data communication and management.',

          '**Database Management:** Designed and managed the [MySQL](https://www.mysql.com/) database structure using [MySQL Workbench](https://www.mysql.com/products/workbench/) for efficient data management and system workflows.',

          '**Testing & Optimization:** Performed debugging, testing, and performance optimization to improve system stability and responsiveness.',
          '**Team Collaboration:** Collaborated with team members using [Sourcetree](https://www.sourcetreeapp.com/) and [GitHub](https://github.com)) for version control, code management, and collaborative development workflows.',
        ],
      },
    },
    {
      id: 5,
      title: 'MFU Room Reservation Website',
      role: 'Full-stack',
      description:
        'A lifestyle benefit platform for Provincial Electricity Authority (PEA) employees, offering food discounts, merchant rewards, and exclusive dining privileges at partner restaurants.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Google Maps'],
      image: mfuroomreservation,
      location: 'MFU',
      details: {
        subtitle: 'แอปพลิเคชันรวมสิทธิพิเศษและส่วนลดร้านอาหารสำหรับบุคลากร กฟภ.',
        whatWeDid: [
          '**Restaurant Search:** พัฒนาแอปพลิเคชันค้นหาร้านอาหารและสิทธิพิเศษสำหรับพนักงาน',
          '**QR Code Scanner:** ออกแบบและพัฒนาระบบสแกนคิวอาร์โค้ด (QR Code) เพื่อรับสิทธิ์ส่วนลดหน้าร้าน',
          '**Navigation:** เชื่อมต่อแผนที่และระบบนำทางไปยังร้านค้าพันธมิตรใกล้เคียง',
          '**Categorization:** จัดหมวดหมู่สิทธิประโยชน์ เช่น เมนูอาหาร เครื่องดื่ม ท่องเที่ยว และที่พัก',
        ],
        techHighlight: 'React Native, Expo, Google Maps API, QR Code Scanner, Node.js, Express.js',
      },
    },
    {
      id: 6,
      title: 'Image Classification Website',
      role: 'AI-Machine learning',
      location: 'MFU',
      description:
        'A collaborative workspace and team management application simulating interactive Kanban boards, task delegation, and progress milestones.',
      tech: ['React.js', 'Node.js', 'Socket.io', 'Express', 'PostgreSQL'],
      image: imageclassification,
      github: 'https://github.com',
      demo: 'https://demo.com',
      report: 'https://demo.com/synctask-report.pdf',
      details: {
        subtitle: 'แพลตฟอร์มบริหารจัดการงานและโครงการภายในทีมแบบร่วมมือกัน',
        whatWeDid: [
          '**Kanban Board:** พัฒนากระดานงานแบบ Kanban Board',
          '**Real-time Updates:** ทำระบบแจ้งเตือนและอัปเดตงานแบบ Real-time',
          '**Database Design:** ออกแบบฐานข้อมูลสำหรับบันทึกประวัติงาน',
          '**Dashboard:** สร้างแดชบอร์ดติดตามความคืบหน้าของทีม',
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
                    {techIcons[tag] && <span style={{ marginRight: '0.3rem' }}>{techIcons[tag]}</span>}{tag}
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
                    Overview
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
                      🎨 My Contribution
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
                      🎨 Figma
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