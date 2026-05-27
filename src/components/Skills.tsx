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
  'AI Chatbot Development': { icon: '🤖', desc: 'Building conversational AI chatbots with NLP APIs (OpenAI, Gemini) — intent detection, context management, and fallback handling.' },
  'Profanity Detection Systems': { icon: '🛡️', desc: 'Text moderation pipelines that classify and filter harmful content using rule-based and ML approaches.' },
  'Machine Learning Basics': { icon: '🧠', desc: 'Foundational ML concepts — supervised/unsupervised learning, model evaluation, and feature engineering using scikit-learn.' },
  'Data Cleansing': { icon: '🧹', desc: 'Identifying and correcting dirty data — handling nulls, duplicates, inconsistent formats, and outliers with pandas.' },
  'Data Processing': { icon: '⚙️', desc: 'ETL pipelines and batch/stream data transformations using Python scripts and JSON/CSV manipulation.' },
  'Prompt Engineering': { icon: '✍️', desc: 'Crafting effective prompts for LLMs — zero-shot, few-shot, chain-of-thought techniques for reliable AI output.' },
  'Text Classification': { icon: '📊', desc: 'Categorising text data using ML classifiers and pre-trained transformer models for sentiment analysis and topic detection.' },
  'Image-to-Text Conversion': { icon: '📸', desc: 'Extracting text from images using OCR (Tesseract, Google Vision API) and post-processing the results for structured data.' },
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

const skillCategories = [
  {
    title: 'Frontend Development', icon: '🎨',
    skills: ['Dart(Flutter)', 'HTML5 & CSS', 'JavaScript,TypeScript', 'React', 'Bootstrap',
      'UX/UI Designer', 'Responsive Design', 'Mobile App Development',
      'Web Application Development', 'Android', 'ios'],
  },
  {
    title: 'Backend & Database', icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'RESTful API', 'MongoDB', 'MySQL',
      'JWT Authentication', 'Node mailer', 'Render Server', 'Local Database',
      'Cloudinary', 'Database Management', 'Google OAuth Authentication'],
  },
  {
    title: 'AI & Data Processing', icon: '🤖',
    skills: ['AI Chatbot Development', 'Profanity Detection Systems', 'Machine Learning Basics',
      'Data Cleansing', 'Data Processing', 'Prompt Engineering',
      'Text Classification', 'Image-to-Text Conversion', 'REST API Integration'],
  },
  {
    title: 'Tools', icon: '🛠️',
    skills: ['Git & GitHub', 'Source Tree', 'Figma (UI/UX)', 'Postman', 'Docker (Basic)',
      'Visual Studio Code', 'XAMPP', 'Vercel', 'Netlify', 'MySQL Workbench', 'Jupyter Notebook'],
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
          <div key={index} className={`glass-card animate-fade-in delay-${index + 1}`}>
            <h3 className="skills-category-title">
              <span className="skills-category-icon">{category.icon}</span>
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="skill-tag"
                  onClick={() => openPopup(skill)}
                  title={`Click to learn more about ${skill}`}
                >
                  {skill}
                </span>
              ))}
            </div>
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
