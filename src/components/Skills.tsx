import React from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

/* ── Skill descriptions (Icon mapping fallback) ── */
const skillIcons: Record<string, string> = {
  // Frontend
  'Dart(Flutter)': '💙',
  'HTML5 & CSS': '🌐',
  'JavaScript,TypeScript': '⚡',
  'React': '⚛️',
  'Bootstrap': '🅱️',
  'UX/UI Designer': '🎨',
  'Responsive Design': '📱',
  'Mobile App Development': '📲',
  'Web Application Development': '🖥️',
  'Android': '🤖',
  'ios': '🍎',
  'Front-end Development': '🖥️',
  'Back-end Development': '🗄️',

  // Backend & DB
  'Node.js': '🟢',
  'Express.js': '🚂',
  'RESTful API': '🔌',
  'MongoDB': '🍃',
  'MySQL': '🐬',
  'JWT Authentication': '🔐',
  'Node mailer': '📧',
  'Render Server': '☁️',
  'Local Database': '💾',
  'Cloudinary': '🌤️',
  'Database Management': '🗄️',
  'Google OAuth Authentication': '🔑',

  // AI & Data
  'AI Chatbot Development with Cohere LLM': '🤖',
  'Profanity Detection System with Google Perspective API': '🛡️',
  'Machine Learning Basics': '🧠',
  'Data Processing': '⚙️',
  'Text Classification': '📊',
  'Image-to-Text Conversion with Hugging Face': '📸',
  'REST API Integration': '🔗',

  // Tools
  'Git & GitHub': '🐙',
  'Source Tree': '🌳',
  'Figma (UI/UX)': '🎭',
  'Postman': '📮',
  'Docker (Basic)': '🐳',
  'Visual Studio Code': '💻',
  'XAMPP': '🖥️',
  'Vercel': '▲',
  'Netlify': '🌍',
  'MySQL Workbench': '🔧',
  'Jupyter Notebook': '📓',
  'MatLab': '💻',
};

interface SkillPopup { skill: string }

type SkillSubgroup = {
  title: string;
  skills: string[];
};

type SkillCategory = {
  title: string;
  icon: string;
  skills?: string[];
  subgroups?: SkillSubgroup[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Fullstack Development',
    icon: '🧩',
    subgroups: [
      {
        title: 'Front-end Development',
        skills: [
          'Dart(Flutter)',
          'HTML5 & CSS',
          'React',
          'JavaScript,TypeScript',
          'UX/UI Designer',
        ],
      },
      {
        title: 'Back-end Development',
        skills: [
          'Node.js',
          'RESTful API',
          'MySQL',
          'Cloudinary',
          'JWT Authentication',
          'Render Server',
          'Local Database',
          'Google OAuth Authentication',
          'Database Management',
        ],
      },
    ],
  },
  {
    title: 'AI & Data Processing',
    icon: '🤖',
    skills: [
      'AI Chatbot Development with Cohere LLM',
      'Profanity Detection System with Google Perspective API',
      'Machine Learning Basics',
      'Text Classification',
      'Image-to-Text Conversion with Hugging Face',
    ],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      'Git & GitHub',
      'Source Tree',
      'Figma (UI/UX)',
      'Postman',
      'Docker (Basic)',
      'Visual Studio Code',
      'XAMPP',
      'Vercel',
      'MatLab',
      'MySQL Workbench',
      'Jupyter Notebook',
    ],
  },
];

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [popup, setPopup] = React.useState<SkillPopup | null>(null);

  const openPopup = (skill: string) => setPopup({ skill });
  const closePopup = () => setPopup(null);

  const detail = popup ? t.skills.details[popup.skill as keyof typeof t.skills.details] : null;

  React.useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [popup]);

  const getCategoryTitle = (title: string) => {
    if (title === 'Fullstack Development') return t.skills.fullstack;
    if (title === 'AI & Data Processing') return t.skills.ai_data;
    if (title === 'Tools') return t.skills.tools;
    return title;
  };

  const getSubgroupTitle = (title: string) => {
    if (language === 'th') {
      if (title.includes('Front-end')) return 'การพัฒนาฝั่งหน้าบ้าน (Front-end)';
      if (title.includes('Back-end')) return 'การพัฒนาฝั่งหลังบ้าน (Back-end)';
    }
    return title;
  };

  return (
    <section id="skills" className="section container">
      <h2 className="section-title reveal">{t.skills.title}</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`glass-card reveal ${category.title === 'Fullstack Development' ? 'skills-card-fullstack' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3 className="skills-category-title">
              <span className="skills-category-icon">{category.icon}</span>
              {getCategoryTitle(category.title)}
            </h3>
            {category.title === 'Fullstack Development' && (
              <div className="skills-fullstack-note" aria-label="fullstack platforms">
                <span className="skills-platform-keyword">{t.skills.web_dev}</span>
                <span className="skills-platform-keyword">{t.skills.mobile_dev}</span>
              </div>
            )}

            {category.subgroups ? (
              <div className="skills-subgroups skills-subgroups-inline">
                {category.subgroups.map((subgroup, subIdx) => (
                  <div
                    key={subIdx}
                    className={`skills-subgroup ${subgroup.title.includes('Front-end') ? 'skills-subgroup-front' : 'skills-subgroup-back'}`}
                  >
                    <div className="skills-subgroup-head">
                      <h4 className="skills-subgroup-title">{getSubgroupTitle(subgroup.title)}</h4>
                    </div>
                    <div className="skills-list">
                      {subgroup.skills.map((skill, sIdx) => {
                        const icon = skillIcons[skill] || '';
                        return (
                          <span
                            key={sIdx}
                            className="skill-tag"
                            onClick={() => openPopup(skill)}
                            title={`${t.skills.click_to_learn} ${skill}`}
                          >
                            {icon && <span style={{ marginRight: '0.3rem' }}>{icon}</span>}
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="skills-list">
                {category.skills?.map((skill, sIdx) => {
                  const icon = skillIcons[skill] || '';
                  return (
                    <span
                      key={sIdx}
                      className="skill-tag"
                      onClick={() => openPopup(skill)}
                      title={`${t.skills.click_to_learn} ${skill}`}
                    >
                      {icon && <span style={{ marginRight: '0.3rem' }}>{icon}</span>}
                      {skill}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Portal popup — renders directly on <body> to escape stacking contexts ── */}
      {popup && detail && ReactDOM.createPortal(
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>✕</button>
            <span className="popup-icon">{detail.icon}</span>
            <h3 className="popup-title">{popup.skill}</h3>
            <p className="popup-detail">{detail.desc}</p>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Skills;

