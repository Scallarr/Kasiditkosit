import React from 'react';
import ReactDOM from 'react-dom';

/* ── Skill descriptions ── */
const skillDetails: Record<string, { icon: string; desc: string }> = {
  // Frontend
  'Dart(Flutter)': { icon: '💙', desc: 'Cross-platform mobile & web app development using the Flutter framework with Dart — producing native-quality iOS and Android apps from a single codebase.' },
  'HTML5 & CSS': { icon: '🌐', desc: 'Semantic HTML5 markup and modern CSS3 — including Flexbox, Grid, custom properties, transitions, and keyframe animations for pixel-perfect layouts.' },
  'JavaScript,TypeScript': { icon: '⚡', desc: 'ES2022+ JavaScript and strongly-typed TypeScript for reliable, maintainable frontend and Node.js codebases.' },
  'React': { icon: '⚛️', desc: 'Component-driven UIs with React 18 — hooks, context, lazy loading, and state management patterns for scalable SPA and SSR applications.' },
  'Bootstrap': { icon: '🅱️', desc: "Rapid responsive UI development using Bootstrap's grid system, utility classes, and pre-built component library." },
  'UX/UI Designer': { icon: '🎨', desc: 'User experience research, wireframing, prototyping, and high-fidelity visual design using Figma — focused on accessibility and delightful interaction.' },
  'Responsive Design': { icon: '📱', desc: 'Media-query-driven, mobile-first layouts that adapt fluidly across phones, tablets, and desktops.' },
  'Mobile App Development': { icon: '📲', desc: 'Full mobile application lifecycle — planning, development, testing, and deployment — on both Flutter (cross-platform) and native Android.' },
  'Web Application Development': { icon: '🖥️', desc: 'End-to-end web application development covering frontend UI, REST API integration, authentication, and cloud deployment.' },
  'Android': { icon: '🤖', desc: 'Android application development using Kotlin/Java and Flutter, published to Google Play Store.' },
  'ios': { icon: '🍎', desc: 'iOS application development via Flutter, supporting iPhone and iPad with native-feel UI and platform APIs.' },
  'Front-end Development': { icon: '🖥️', desc: 'Building responsive, user-focused interfaces with modern frontend technologies including React, TypeScript, HTML/CSS, and Flutter UI workflows.' },
  'Back-end Development': { icon: '🗄️', desc: 'Developing backend services, REST APIs, authentication flows, and database integrations using Node.js, Express, and SQL/NoSQL systems.' },

  // Backend & DB
  'Node.js': { icon: '🟢', desc: 'Server-side JavaScript runtime — building high-performance, event-driven REST APIs and microservices.' },
  'Express.js': { icon: '🚂', desc: 'Minimal and flexible Node.js web framework for routing, middleware pipelines, and REST API design.' },
  'RESTful API': { icon: '🔌', desc: 'Designing and consuming RESTful APIs with proper HTTP semantics, versioning, error handling, and documentation.' },
  'MongoDB': { icon: '🍃', desc: 'NoSQL document database — schema design, aggregation pipelines, indexing, and Mongoose ODM for Node.js backends.' },
  'MySQL': { icon: '🐬', desc: 'Relational database management — complex queries, joins, stored procedures, and schema migrations.' },
  'JWT Authentication': { icon: '🔐', desc: 'Stateless authentication using JSON Web Tokens — access/refresh token patterns, middleware guards, and secure storage.' },
  'Node mailer': { icon: '📧', desc: 'Automated email delivery with Nodemailer — transactional emails, SMTP configuration, and HTML templates.' },
  'Render Server': { icon: '☁️', desc: 'Cloud hosting and deployment of Node.js services on Render — environment variables, auto-deploy from Git.' },
  'Local Database': { icon: '💾', desc: 'On-device data persistence using SQLite, SharedPreferences, or Hive for offline-capable mobile applications.' },
  'Cloudinary': { icon: '🌤️', desc: 'Cloud media management — image/video upload, transformation, optimisation, and CDN delivery via Cloudinary API.' },
  'Database Management': { icon: '🗄️', desc: 'Database design, normalisation, indexing strategies, backup/restore procedures, and query optimisation across SQL and NoSQL systems.' },
  'Google OAuth Authentication': { icon: '🔑', desc: 'Social login integration using Google OAuth 2.0 — Passport.js strategy, session handling, and secure token exchange.' },

  // AI & Data
  'AI Chatbot Development with Cohere LLM': { icon: '🤖', desc: 'Built AI assistants using Cohere LLM models (Atlas/Nexus workflows) for recommendation and context-aware Q&A experiences.' },
  'Profanity Detection System with Google Perspective API': { icon: '🛡️', desc: 'Implemented toxicity filtering with Google Perspective API model scoring to moderate user-generated text content.' },
  'Machine Learning Basics': { icon: '🧠', desc: 'Applied ML fundamentals with TensorFlow/Keras CNN workflows for image model training, validation, and evaluation.' },
  'Data Processing': { icon: '⚙️', desc: 'Processed image/text data pipelines using Python scripts with OpenCV and Transformers-compatible input formatting.' },
  'Text Classification': { icon: '📊', desc: 'Used Perspective API toxicity classification scores for text risk labeling and moderation decisions.' },
  'Image-to-Text Conversion with Hugging Face': { icon: '📸', desc: 'Generated captions from images using BLIP (Salesforce/blip-image-captioning-base) via Hugging Face Transformers.' },
  'REST API Integration': { icon: '🔗', desc: 'Consuming third-party REST APIs — authentication flows, pagination, rate limiting, error handling, and response mapping.' },

  // Tools
  'Git & GitHub': { icon: '🐙', desc: 'Version control with Git — branching strategies, pull requests, merge conflict resolution, and CI/CD integration on GitHub.' },
  'Source Tree': { icon: '🌳', desc: "Visual Git client — managing branches, commits, and diffs through SourceTree's intuitive GUI." },
  'Figma (UI/UX)': { icon: '🎭', desc: 'Collaborative design in Figma — component libraries, auto-layout, prototyping, and design handoff to developers.' },
  'Postman': { icon: '📮', desc: 'API testing and documentation with Postman — collection runners, environment variables, and automated test scripts.' },
  'Docker (Basic)': { icon: '🐳', desc: 'Containerising applications with Docker — writing Dockerfiles, building images, and running containers with docker-compose.' },
  'Visual Studio Code': { icon: '💻', desc: 'Primary code editor — extensions, debugging, integrated terminal, and workspace customisation for maximum productivity.' },
  'XAMPP': { icon: '🖥️', desc: 'Local PHP/MySQL development server stack — Apache, MySQL, and PHP configuration for rapid local web development.' },
  'Vercel': { icon: '▲', desc: 'Serverless frontend deployment on Vercel — instant previews, edge functions, custom domains, and GitHub auto-deploy.' },
  'Netlify': { icon: '🌍', desc: 'JAMstack hosting on Netlify — continuous deployment, form handling, edge redirects, and split testing.' },
  'MySQL Workbench': { icon: '🔧', desc: 'Visual database design and management — EER diagrams, query profiling, and administration with MySQL Workbench.' },
  'Jupyter Notebook': { icon: '📓', desc: 'Interactive Python notebooks for data analysis, ML experiments, and data visualisation with matplotlib and pandas.' },
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
  const [popup, setPopup] = React.useState<SkillPopup | null>(null);

  const openPopup = (skill: string) => setPopup({ skill });
  const closePopup = () => setPopup(null);

  const detail = popup ? skillDetails[popup.skill] : null;

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

  return (
    <section id="skills" className="section container animate-fade-in delay-1">
      <h2 className="section-title">Skills Matrix</h2>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`glass-card animate-fade-in delay-${index + 1} ${category.title === 'Fullstack Development' ? 'skills-card-fullstack' : ''}`}
          >
            <h3 className="skills-category-title">
              <span className="skills-category-icon">{category.icon}</span>
              {category.title}
            </h3>
            {category.title === 'Fullstack Development' && (
              <div className="skills-fullstack-note" aria-label="fullstack platforms">
                <span className="skills-platform-keyword">Web Development</span>
                <span className="skills-platform-keyword">Mobile App Development</span>
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
                      <h4 className="skills-subgroup-title">{subgroup.title}</h4>
                      {/* <span className="skills-subgroup-count">{subgroup.skills.length} Skills</span> */}
                    </div>
                    <div className="skills-list">
                      {subgroup.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="skill-tag"
                          onClick={() => openPopup(skill)}
                          title={`Click to learn more about ${skill}`}
                        >
                          {skillDetails[skill]?.icon && <span style={{ marginRight: '0.3rem' }}>{skillDetails[skill].icon}</span>}
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="skills-list">
                {category.skills?.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="skill-tag"
                    onClick={() => openPopup(skill)}
                    title={`Click to learn more about ${skill}`}
                  >
                    {skillDetails[skill]?.icon && <span style={{ marginRight: '0.3rem' }}>{skillDetails[skill].icon}</span>}
                    {skill}
                  </span>
                ))}
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
