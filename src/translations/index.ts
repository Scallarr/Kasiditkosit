export const translations = {
  en: {
    // Navbar
    nav: {
      logo_first: "KASIDIT",
      logo_last: "KOSIT",
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      resume: "Resume",
      contact: "Contact"
    },
    // Header (Hero)
    header: {
      available: "Available for Work",
      hello: "Hello, I'm",
      title_name: "Kasidit Kosit",
      role: "Full Stack Developer",
      focus: "Front-end + Back-end",
      description_prefix: "A passionate ",
      description_role: "Full Stack Developer",
      description_middle: " building modern ",
      description_web: "Web ",
      description_and: " and ",
      description_mobile: "Mobile Applications",
      description_post: " with intuitive user experiences, scalable ",
      description_backend: "Backend Systems",
      description_post_backend: ", and efficient ",
      description_db: "Databases",
      description_end: ".",
      btn_contact: "Contact Me",
      btn_about: "About Me"
    },
    // About
    about: {
      title: "About Me",
      quote: "I believe that great software is not just about writing code, but about solving real problems and delivering exceptional user experiences.",
      p1: "Hello! I am a passionate Full Stack Developer specializing in modern Web Applications and Mobile Applications. I enjoy turning ideas into digital products by combining intuitive user interfaces with scalable and reliable systems behind the scenes.",
      p1Highlights: ["Full Stack Developer", "Web Applications", "Mobile Applications"],
      p2: "My expertise includes developing Frontend Experiences, building scalable Backend Systems, designing efficient APIs, and managing robust Databases. I am passionate about creating impactful software solutions while continuously learning new technologies and modern development practices.",
      p2Highlights: ["Frontend Experiences", "Backend Systems", "APIs", "Databases"],
      stats: [
        {
          icon: '💻',
          title: 'Full Stack',
          label: 'Web & Mobile Development',
          detail: 'Experienced in both frontend and backend development, including user interface design, API development, server-side systems, and database management.'
        },
        {
          icon: '🤖',
          title: 'AI Integration',
          label: 'Smart Systems & Automation',
          detail: 'Integrating AI-powered features, automation systems, and intelligent tools into modern web and mobile applications.'
        },
        {
          icon: '🧠',
          title: '10+ Languages',
          label: 'Programming & Development Tools',
          detail: 'Hands‑on experience with HTML5, CSS, Bootstrap, TypeScript, JavaScript, Python, Dart(Flutter), C++, C#, SQL.'
        },
        {
          icon: '🚀',
          title: 'Fast Learner',
          label: 'Quick Adaptability',
          detail: 'Proven ability to pick up unfamiliar frameworks and ship production‑quality features in days, not weeks.'
        }
      ]
    },
    // Skills
    skills: {
      title: "Skills Matrix",
      fullstack: "Fullstack Development",
      ai_data: "AI & Data Processing",
      tools: "Tools",
      web_dev: "Web Development",
      mobile_dev: "Mobile App Development",
      click_to_learn: "Click to learn more about",
      details: {
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
        'AI Chatbot Development with Cohere LLM': { icon: '🤖', desc: 'Built AI assistants using Cohere LLM models (Atlas/Nexus workflows) for recommendation and context-aware Q&A experiences.' },
        'Profanity Detection System with Google Perspective API': { icon: '🛡️', desc: 'Implemented toxicity filtering with Google Perspective API model scoring to moderate user-generated text content.' },
        'Machine Learning Basics': { icon: '🧠', desc: 'Applied ML fundamentals with TensorFlow/Keras CNN workflows for image model training, validation, and evaluation.' },
        'Data Processing': { icon: '⚙️', desc: 'Processed image/text data pipelines using Python scripts with OpenCV and Transformers-compatible input formatting.' },
        'Text Classification': { icon: '📊', desc: 'Used Perspective API toxicity classification scores for text risk labeling and moderation decisions.' },
        'Image-to-Text Conversion with Hugging Face': { icon: '📸', desc: 'Generated captions from images using BLIP (Salesforce/blip-image-captioning-base) via Hugging Face Transformers.' },
        'REST API Integration': { icon: '🔗', desc: 'Consuming third-party REST APIs — authentication flows, pagination, rate limiting, error handling, and response mapping.' },
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
        'MatLab': { icon: '💻', desc: 'Mathematical computing environment used for data visualization, algorithm development, and interface creation.' }
      }
    },
    // Projects
    projects: {
      title: "Featured Projects",
      view_details: "🔍 View Details",
      overview: "Overview",
      key_features: "Key Features",
      responsibilities: "Responsibilities",
      contribution: "🎨 My Contribution",
      figma: "🎨 Figma",
      list: [
        {
          id: 1,
          title: "PEA LIFE Application",
          description: "An internal digital platform for Provincial Electricity Authority (PEA) personnel across Thailand, supporting employee management, online leave requests, travel authorization, and welfare services.",
          details: {
            subtitle: "Internal resource and workflow management mobile application for Provincial Electricity Authority (PEA) personnel",
            whatWeDid: [
              "**Target Audience:** Internal application exclusively designed for PEA personnel across Thailand.",
              "**Employee Profile:** Internal workforce profile and employee information management system.",
              "**Online Leave Request:** Supports online leave submissions with real-time approval status tracking.",
              "**Operations & Travel Management:** Platform for recording and approving business travel requests, cash advances, and expense reimbursements for off-site operations.",
              "**Document Approval:** Internal workflow and document approval management system.",
              "**Services & Employee Welfare:** Centralized platform for internal news, announcements, employee welfare, and lifestyle features such as PR House and other employee privileges."
            ],
            techHighlight: [
              "**Legacy Code Update:** Updated legacy [Dart (Flutter)](https://flutter.dev) source code to support the latest framework and dependency versions.",
              "**API Integration:** Upgraded [REST API](https://restfulapi.net/) endpoints and third-party integrations to the latest supported versions using [Postman](https://www.postman.com/).",
              "**UI/UX Improvement:** Redesigned the interface for a more modern, clean, and intuitive user experience.",
              "**Feature Implementation:** Implemented online leave request and approval functionalities within the internal employee management system.",
              "**Testing:** Added unit testing to improve system reliability and maintain code quality.",
              "**Debugging & Optimization:** Resolved critical system bugs and improved overall system performance and stability.",
              "**Team Collaboration:** Collaborated with team members using [Sourcetree](https://www.sourcetreeapp.com/) and [GitHub](https://github.com) for version control, code management, and collaborative development workflows."
            ]
          }
        },
        {
          id: 2,
          title: "PEA Privilege Application",
          description: "A digital platform developed for Provincial Electricity Authority (PEA) business customers, providing convenient access to important information, online services, and request tracking in one centralized system to enhance user experience and service efficiency.",
          details: {
            subtitle: "Customer service and privilege management application for Provincial Electricity Authority (PEA) customers across Thailand",
            whatWeDid: [
              "**Target Audience:** Digital platform designed for PEA business customers.",
              "**Customer Management:** Business customer management system.",
              "**Service Request:** Online service request tracking system.",
              "**Dashboard:** Centralized customer information dashboard.",
              "**Notifications:** Real-time notifications and updates.",
              "**Service Platform:** User-friendly digital service platform.",
              "**Secure Access:** Secure access to customer services.",
              "**Utility Management:** Convenient online utility management.",
              "**Voucher System:** Voucher management system (currently under development)."
            ],
            techHighlight: [
              "**Legacy Code Update:** Updated the [Dart (Flutter)](https://flutter.dev) source code to the latest version.",
              "**Security Enhancement:** Improved the registration system by implementing Gmail OTP verification.",
              "**UI/UX Design:** Enhanced the UI/UX for a better user experience.",
              "**Feature Development:** Developed the Voucher Management feature and integration tested via [Postman](https://www.postman.com/).",
              "**System Reliability:** Implemented unit testing to improve system reliability.",
              "**Debugging:** Fixed bugs and improved overall system stability.",
              "**Optimization:** Optimized the application to support responsive design on both Android and iOS.",
              "**Team Collaboration:** Collaborated with team members using [Sourcetree](https://www.sourcetreeapp.com/) and [GitHub](https://github.com) for version control, code management, and collaborative development workflows."
            ]
          }
        },
        {
          id: 3,
          title: "MFU Food Guide And Review Application",
          description: "A mobile application for Mae Fah Luang University (MFU) students and staff to discover restaurants, explore menus, write reviews, and interact with AI-powered chatbot, content moderation, and community features within the university.",
          details: {
            subtitle: "Restaurant recommendation and food review application for Mae Fah Luang University (MFU) students and staff",
            whatWeDid: [
              "**Authentication, Session & Role Management:** Secure login system with session handling and role-based access control for Guest, User, and Admin roles.",
              "**Restaurant Discovery & Recommendation:** Browse, search, filter, and explore restaurants within the university through categorized listings and recommendation features.",
              "**Review & Rating System:** Create, view, and manage restaurant reviews with multi-category rating systems to support user decision-making.",
              "**Community Threads & Social Interaction:** Community discussion system for posting questions, sharing opinions, and replying to other users, integrated with AI-powered inappropriate language detection and content filtering.",
              "**Leaderboard & Engagement System:** User ranking and engagement features designed to encourage participation and community interaction within the application.",
              "**Analytics Dashboard & Insights:** Dashboard for displaying restaurant statistics, review scores, and analytical insights for monitoring overall platform activity.",
              "**User Profile & Personalization:** Manage user profiles, profile images, and personal account information within the application.",
              "**AI Assistant Integration (Atlas/Nexus):** Dual-mode AI assistant designed to provide recommendations, answer questions, and support users based on different usage contexts.",
              "**Admin Management Suite:** Administrative tools for managing restaurants, menus, reviews, users, and backend system configurations.",
              "**Account Restriction Handling:** Account moderation system for handling user restrictions, bans, unban scheduling, and access control management."
            ],
            techHighlight: [
              "**Authentication, Session & Role Management:** Implemented secure authentication and persistent session handling using [JWT](https://jwt.io/) and [shared_preferences](https://pub.dev/packages/shared_preferences), including token-based API access, login state persistence, and role-aware navigation flows.",
              "**Mobile UI/UX & Frontend Development:** Designed and developed responsive multi-screen mobile interfaces with [Flutter](https://flutter.dev) and Dart for User and Admin experiences, covering restaurant discovery, dashboards, reviews, discussion threads, profile management, and AI chat modules.",
              "**Backend Integration & API Workflow:** Connected Flutter modules with [RESTful APIs](https://restfulapi.net/) powered by [Node.js](https://nodejs.org/) to support restaurant management, review workflows, thread interactions, account moderation, profile handling, and admin operations.",
              "**Database & Data Workflow Management:** Managed relational database operations in [MySQL](https://www.mysql.com/) for restaurant records, review states, user activity tracking, moderation history, ratings, and API-driven transactional workflows.",
              "**AI Assistant Integration (Atlas & Nexus):** Built dual-assistant AI experiences by integrating external LLM services such as [Cohere](https://cohere.com/) for general assistance (Atlas) and application-context guidance (Nexus), including conversational UI states, typing indicators, and assistant switching workflows.",
              "**Restaurant Discovery, Search & Rating Experience:** Developed restaurant search, filtering, sorting, category segmentation, and detailed rating systems (overall, hygiene, flavor, service) to improve restaurant discoverability and user decision support.",
              "**Community, Review & Engagement Features:** Implemented review, thread, and reply systems to support user interaction, community engagement, content visibility, and admin moderation workflows within the platform.",
              "**Content Safety & Toxic Language Detection:** Integrated [Perspective API](https://developers.perspectiveapi.com/) for real-time toxicity/profanity detection in user-generated text (e.g., reviews and threads), enabling safer community interactions and moderation support.",
              "**Analytics Dashboard & Reporting System:** Built dashboard visualizations and reporting interfaces for restaurant statistics, rating distributions, category insights, and operational monitoring for users and administrators.",
              "**Cloud Media Upload & Storage:** Integrated [Cloudinary](https://cloudinary.com/) for cloud-based image upload, storage, and delivery workflows, enabling reusable media assets across restaurant, menu, and user profile modules.",
              "**Image Loading & Performance Optimization:** Optimized image-heavy screens using [cached_network_image](https://pub.dev/packages/cached_network_image), [flutter_cache_manager](https://pub.dev/packages/flutter_cache_manager), and [shimmer](https://pub.dev/packages/shimmer) with retryable loading, caching, and precache strategies for improved performance and user experience.",
              "**Role-Based Access & Moderation System:** Developed role-specific operational flows for Users and Admins, including review approval pipelines, pending content handling, user management, account restriction controls, and ban-status presentation.",
              "**Testing & Debugging:** Conducted API validation, state-flow debugging, and end-to-end functional testing using [Postman](https://www.postman.com/), Flutter debugging tools, and backend response verification to ensure stable cross-module behavior and synchronized data flow.",
              "**Team Collaboration & Version Control:** Collaborated with team members through [GitHub](https://github.com/) using branch-based workflows, feature integration, version control, and coordinated frontend-backend development practices."
            ]
          }
        },
        {
          id: 4,
          title: "MFU Movie Assets Application",
          description: "A smart mobile application designed for Mae Fah Luang University (MFU) students and staff to search, borrow, and manage movies conveniently anytime and anywhere through a modern and user-friendly digital platform.",
          details: {
            subtitle: "Movie borrowing and asset management application for Mae Fah Luang University (MFU) students and staff",
            whatWeDid: [
              "**Target Audience:** Platform designed for MFU students, university staff, lecturers, and campus visitors interested in browsing, borrowing, and managing university movie and media assets through a centralized digital platform.",
              "**Authentication & Role-Based Access:** Secure user registration and login system with role-based access control for User, Approver, and Admin.",
              "**Asset Catalog & Discovery:** Browse and explore movie/assets collections with categorized listings, search functionality, and recommended items.",
              "**Borrow Request Workflow:** Allow users to submit borrowing requests and track request status throughout the approval process.",
              "**Approval Management:** Enable approvers to review, verify, approve, or reject borrowing requests through a dedicated workflow system.",
              "**Asset Administration:** Allow administrators to add, edit, manage, and disable movie/assets records and availability status.",
              "**Return & Status Processing:** Manage item return workflows and automatically update borrowing and availability statuses.",
              "**History & Audit Trail:** Record and display borrowing history, approval logs, and activity records for each user role.",
              "**Dashboard & Operational Insights:** Provide dashboard summaries and operational statistics for Admin and Approver management."
            ],
            techHighlight: [
              "**Authentication & Session Management:** Developed secure authentication and session handling with [JWT](https://jwt.io/) and [shared_preferences](https://pub.dev/packages/shared_preferences) to support login, access control, token persistence, and cross-screen session flow.",
              "**Mobile UI/UX & Frontend Development:** Designed and built responsive mobile interfaces with [Flutter](https://flutter.dev) and Dart, featuring API-driven interactions and user experiences tailored for multiple roles.",
              "**Backend Integration & API Workflow:** Connected Flutter frontend modules with [RESTful APIs](https://nodejs.org/) powered by [Node.js](https://nodejs.org/) to handle borrowing requests, approval workflows, return processing, and transaction tracking.",
              "**Database Management:** Managed relational database operations with [MySQL](https://www.mysql.com/), including SQL queries for asset records, borrow requests, approval updates, return logs, and activity history.",
              "**Asset & Media Handling:** Built media selection and asset presentation features with [file_picker](https://pub.dev/packages/file_picker) and [carousel_slider](https://pub.dev/packages/carousel_slider) for profile customization and featured content displays.",
              "**Role-Based Workflow System:** Developed end-to-end operational workflows for User, Approver, and Admin roles, covering request submission, approval actions, asset administration, return handling, and dashboard visibility.",
              "**Testing & Debugging:** Conducted API validation, debugging, and end-to-end system testing with [Postman](https://www.postman.com/), Flutter debugging tools, and database verification processes to ensure stable functionality and synchronized data flow.",
              "**Team Collaboration & Version Control:** Collaborated with team members through [GitHub](https://github.com/) for source control, branch management, feature integration, and coordinated frontend-backend development."
            ]
          }
        },
        {
          id: 5,
          title: "MFU Room Reservation Website",
          description: "A web-based room booking app for MFU students, lecturers, and staff to view room availability, submit and manage booking requests, and handle room schedules with role-based access and daily automated status reset.",
          details: {
            subtitle: "Room reservation and facility management website for Mae Fah Luang University (MFU) students and staff",
            whatWeDid: [
              "**Authentication & Roles:** Role-based login for student, lecturer, and staff.",
              "**Room Discovery:** Browse room lists with available time slots.",
              "**Booking Workflow:** Submit booking requests and track status (pending/approved/rejected).",
              "**Lecturer Management:** Review and approve/reject student booking requests.",
              "**Staff Administration:** Add/edit rooms, upload room images, and enable/disable slots.",
              "**History & Reporting:** View user booking history and staff-level activity records.",
              "**Automation:** Daily automatic slot status reset."
            ],
            techHighlight: [
              "**Authentication & Session Management:** Developed authentication and session management features using [bcrypt](https://www.npmjs.com/package/bcrypt), [express-session](https://www.npmjs.com/package/express-session), and [connect-flash](https://www.npmjs.com/package/connect-flash) for user registration, login, password encryption, and flash message handling.",
              "**Backend Development:** Designed and developed the backend system using [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/), including routes and business logic to support multi-role room booking workflows.",
              "**Database Management:** Designed and managed the database using [MySQL](https://www.mysql.com/), including writing SQL queries for room booking, request approval, and booking history management.",
              "**UI/UX Design & Frontend Development:** Designed user interface layouts and developed responsive frontend interfaces using [HTML](https://html.com/), [CSS](https://www.w3schools.com/css/), and [Bootstrap](https://getbootstrap.com/) to support role-based user experiences and seamless backend integration.",
              "**File Handling & Upload System:** Implemented room image upload and file management features using [Multer](https://www.npmjs.com/package/multer) and [Path](https://nodejs.org/api/path.html) for staff room management.",
              "**Automation System:** Implemented automation workflows using [node-cron](https://www.npmjs.com/package/node-cron) to automatically reset room slot statuses daily and reduce manual management tasks.",
              "**Testing & Debugging:** Performed system testing and debugging using [Postman](https://www.postman.com/) and [MySQL Workbench](https://www.mysql.com/products/workbench/) to ensure stable end-to-end system functionality.",
              "**Team Collaboration:** Collaborated with team members using [GitHub](https://github.com/) and [Sourcetree](https://www.sourcetreeapp.com/) for version control, code management, and collaborative development workflows."
            ]
          }
        },
        {
          id: 6,
          title: "Image Classification Website",
          description: "An AI-powered application that automatically recognizes and classifies objects from uploaded images, providing real-time prediction results with confidence scores.",
          details: {
            subtitle: "AI-powered application that automatically recognizes and classifies objects from uploaded images",
            whatWeDid: [
              "**Image Upload System:** Supported image uploads in JPG, JPEG, and PNG formats.",
              "**Object Recognition Engine:** Implemented AI-powered object detection and classification.",
              "**Real-Time Prediction:** Generated instant classification results from uploaded images.",
              "**Confidence Ranking:** Displayed Top-3 predictions with confidence scores.",
              "**User Interface Development:** Designed an intuitive and user-friendly application interface."
            ],
            techHighlight: [
              "**Web Application Development:** Developed the image classification web application.",
              "**AI Model Integration:** Integrated the [MobileNetV2](https://arxiv.org/abs/1801.04368) deep learning model for object recognition.",
              "**Prediction Pipeline Development:** Implemented image preprocessing and prediction workflows.",
              "**Result Visualization:** Displayed Top-3 classification results with confidence percentages.",
              "**User Interface Design:** Created a simple and intuitive interface for image uploads and predictions.",
              "**Environment & Dependency Management:** Managed application setup and required libraries."
            ]
          }
        },
        {
          id: 7,
          title: "Image Captioning Application",
          description: "A web-based application that automatically generates image captions using deep learning and computer vision. Users can upload images or use image URLs, and the system generates descriptive captions in real time through a simple and user-friendly interface.",
          details: {
            subtitle: "AI-powered image classification website for image recognition and machine learning prediction through an interactive web platform",
            whatWeDid: [
              "**Image Caption Generation:** Generate automatic captions from uploaded images using AI.",
              "**Local Image Upload:** Upload images directly from local devices.",
              "**Image URL Loading:** Load and analyze images from external URLs.",
              "**Real-Time AI Processing:** Process images and generate captions instantly.",
              "**Image Preview System:** Preview selected images before analysis.",
              "**User-Friendly Interface:** Simple and responsive web interface for easy interaction.",
              "**Computer Vision Integration:** Utilize deep learning and computer vision technologies.",
              "**API-Based Workflow:** Support API-driven image caption generation and processing."
            ],
            techHighlight: [
              "**AI Model Integration:** Integrated the [BLIP image captioning model](https://huggingface.co/Salesforce/blip-image-captioning-base) from Hugging Face for automatic caption generation from uploaded images.",
              "**Backend API Development:** Developed a [Python](https://python.org) using FastAPI to process image uploads and return AI-generated captions in real time.",
              "**Computer Vision Workflow:** Implemented image preprocessing and caption prediction workflows using [PIL](https://pillow.readthedocs.io/en/stable/), [Transformers](https://huggingface.co/docs/transformers/index), and deep learning-based image understanding.",
              "**Desktop UI Development:** Designed and developed an interactive GUI application in [MATLAB/Octave](https://www.mathworks.com/products/matlab.html) for image upload, preview, and caption visualization.",
              "**Image Upload & URL Processing:** Built support for local image uploads and external image URL loading with real-time preview functionality.",
              "**Frontend-Backend Communication:** Connected the [MATLAB](https://www.mathworks.com/products/matlab.html) frontend with the Python captioning server using HTTP-based API communication workflows.",
              "**Real-Time Caption Generation:** Implemented asynchronous caption generation flow with loading states and dynamic caption updates for improved user experience.",
              "**Testing & Debugging:** Performed system testing and debugging for image processing, API communication, and caption response handling across the application workflow."
            ]
          }
        }
      ]
    },
    // Experience
    experience: {
      title: "Experience & Education",
      evidence: "Location evidence.",
      list: [
        {
          id: 1,
          title: "Internship - Provincial Electricity Authority (PEA)",
          company: "PEA Head Office, Bangkok, Thailand",
          date: "Jan 2026 - May 2026",
          description: "Refactored legacy mobile application code for successful App Store deployment, updated API endpoints for data integration, implemented new features, and performed debugging/testing to improve stability and performance.",
          caption: "Internship activity at PEA Head Office, Bangkok."
        },
        {
          id: 4,
          title: "Bachelor's of Engineering",
          company: "Mae Fah Luang University, Chiang Rai, Thailand",
          date: "Aug 2022 - May 2026",
          description: "Major in Computer Engineering, GPAX 3.87, with strong foundation in software engineering and system development.",
          caption: "Mae Fah Luang University campus, Chiang Rai."
        },
        {
          id: 5,
          title: "High School Diploma",
          company: "Chonradsadornumrung School, Chonburi, Thailand",
          date: "Jan 2019 - Feb 2022",
          description: "Completed high school education with GPAX 3.63.",
          caption: "Chonradsadornumrung School, Chonburi."
        }
      ]
    },
    // Contact
    contact: {
      title: "Contact Me",
      heading: "Contact Info",
      intro: "Open to full-time opportunities in frontend, full-stack, Web and mobile application development.",
      labels: {
        gmail: "Gmail",
        phone: "Phone",
        address: "Address",
        github: "GitHub",
        facebook: "Facebook",
        line: "LINE"
      }
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      designed: "Designed & Crafted with React, TypeScript & Premium Vanilla CSS"
    },
    // Loader
    loader: {
      loading: "LOADING"
    }
  },

  th: {
    // Navbar
    nav: {
      logo_first: "กษิดิศ",
      logo_last: "โกสิทธิ์",
      home: "หน้าหลัก",
      about: "เกี่ยวกับฉัน",
      skills: "ทักษะ",
      experience: "ประสบการณ์",
      projects: "ผลงาน",
      resume: "เรซูเม่",
      contact: "ติดต่อ"
    },
    // Header (Hero)
    header: {
      available: "พร้อมเริ่มงานทันที",
      hello: "สวัสดีครับ ผมชื่อ",
      title_name: "กษิดิศ โกสิทธิ์",
      role: "Full Stack Developer",
      focus: "Front-end + Back-end",
      description_prefix: "นักพัฒนา ",
      description_role: "Full Stack Developer",
      description_middle: " ที่มีความหลงใหลในการพัฒนาและสร้างสรรค์ ",
      description_web: "เว็บแอปพลิเคชัน ",
      description_and: " และ ",
      description_mobile: "โมบายแอปพลิเคชัน",
      description_post: " ในยุคใหม่โดยมุ่งมั่นสร้างประสบการณ์การใช้งานที่ดีเยี่ยม, ระบบหลังบ้านที่ปรับขยายได้ดี ",
      description_backend: "(Backend Systems)",
      description_post_backend: " และระบบฐานข้อมูล ",
      description_db: "(Databases)",
      description_end: " ที่มีประสิทธิภาพ",
      btn_contact: "ติดต่อฉัน",
      btn_about: "เกี่ยวกับฉัน"
    },
    // About
    about: {
      title: "เกี่ยวกับฉัน",
      quote: "ผมเชื่อว่าซอฟต์แวร์ที่ยอดเยี่ยมไม่ใช่แค่เรื่องของการเขียนโค้ด แต่คือการแก้ปัญหาจริงและมอบประสบการณ์การใช้งานที่พิเศษแก่ผู้ใช้",
      p1: "สวัสดีครับ! ผมเป็นนักพัฒนา Full Stack ที่มีความเชี่ยวชาญในการพัฒนาเว็บแอปพลิเคชันและโมบายแอปพลิเคชันสมัยใหม่ ผมชื่นชอบการเปลี่ยนไอเดียความคิดให้เป็นผลิตภัณฑ์ดิจิทัลที่ใช้งานได้จริง โดยการผสมผสานหน้าจอการใช้งานที่สวยงามและใช้งานง่าย เข้ากับระบบหลังบ้านที่มีเสถียรภาพและรองรับการขยายตัวได้ดี",
      p1Highlights: ["Full Stack", "เว็บแอปพลิเคชัน", "โมบายแอปพลิเคชัน"],
      p2: "ทักษะความเชี่ยวชาญของผมประกอบไปด้วย การสร้างประสบการณ์ส่วนหน้าบ้าน (Frontend), การพัฒนาซอฟต์แวร์ระบบหลังบ้าน (Backend), การออกแบบและสร้าง APIs ที่มีประสิทธิภาพ และการดูแลจัดการฐานข้อมูลขนาดใหญ่ ผมมีความกระตือรือร้นในการส่งมอบโซลูชันซอฟต์แวร์ที่สร้างคุณค่าและสร้างผลกระทบเชิงบวก พร้อมทั้งเรียนรู้เทคโนโลยีใหม่ๆ และมาตรฐานการพัฒนาที่ทันสมัยอยู่เสมอ",
      p2Highlights: ["Frontend", "Backend", "APIs", "ฐานข้อมูล"],
      stats: [
        {
          icon: '💻',
          title: 'Full Stack',
          label: 'พัฒนาเว็บและแอปพลิเคชันมือถือ',
          detail: 'มีประสบการณ์ทั้งส่วนหน้าบ้านและระบบหลังบ้าน รวมถึงการออกแบบ UI/UX, การพัฒนา API ระบบฝั่งเซิร์ฟเวอร์ และการจัดการฐานข้อมูลอย่างมีประสิทธิภาพ'
        },
        {
          icon: '🤖',
          title: 'AI Integration',
          label: 'ระบบอัจฉริยะและการขับเคลื่อนอัตโนมัติ',
          detail: 'การนำฟีเจอร์ AI, ระบบตอบโต้อัตโนมัติ และระบบอัจฉริยะต่างๆ มาเชื่อมต่อและประยุกต์ใช้ในเว็บแอปพลิเคชันและโมบายแอปพลิเคชันสมัยใหม่'
        },
        {
          icon: '🧠',
          title: '10+ ภาษา & เครื่องมือ',
          label: 'ภาษาโปรแกรมและเครื่องมือพัฒนาหลัก',
          detail: 'มีความเข้าใจและประสบการณ์ลงมือทำจริงกับ HTML5, CSS, Bootstrap, TypeScript, JavaScript, Python, Dart(Flutter), C++, C#, SQL'
        },
        {
          icon: '🚀',
          title: 'เรียนรู้ไว',
          label: 'ปรับตัวกับเทคโนโลยีใหม่ได้อย่างรวดเร็ว',
          detail: 'มีความสามารถในการศึกษาและทำความเข้าใจเครื่องมือหรือเฟรมเวิร์กใหม่ๆ ได้อย่างรวดเร็ว และสามารถสร้างสรรค์ผลงานคุณภาพสูงส่งมอบได้ในเวลาสั้น'
        }
      ]
    },
    // Skills
    skills: {
      title: "ทักษะความสามารถ",
      fullstack: "Fullstack Development",
      ai_data: "AI & Data Processing",
      tools: "Tools",
      web_dev: "พัฒนาเว็บไซต์",
      mobile_dev: "พัฒนาโมบายแอป",
      click_to_learn: "คลิกเพื่อดูรายละเอียดเพิ่มเติมเกี่ยวกับ",
      details: {
        'Dart(Flutter)': { icon: '💙', desc: 'การพัฒนาแอปพลิเคชันบนมือถือและเว็บแบบ Cross-platform โดยใช้เฟรมเวิร์ก Flutter ร่วมกับภาษา Dart — สร้างแอปคุณภาพสูงสำหรับ iOS และ Android จากโค้ดเบสชุดเดียว' },
        'HTML5 & CSS': { icon: '🌐', desc: 'การจัดโครงสร้างแบบ Semantic ด้วย HTML5 และการจัดสไตล์ด้วย CSS3 ยุคใหม่ — รวมถึง Flexbox, Grid, ตัวแปรแบบ custom, การเปลี่ยนสถานะ และแอนิเมชัน keyframe สำหรับเลย์เอาต์ที่ประณีตและสวยงาม' },
        'JavaScript,TypeScript': { icon: '⚡', desc: 'การเขียนโปรแกรมด้วย JavaScript (ES2022+) และ TypeScript ที่มีการระบุประเภทตัวแปรอย่างเข้มงวด เพื่อความเสถียรและง่ายต่อการบำรุงรักษาของระบบหน้าบ้านรวมถึง Node.js' },
        'React': { icon: '⚛️', desc: 'การสร้าง UI ในรูปแบบคอมโพเนนต์ด้วย React 18 — ใช้งาน hooks, context, lazy loading และรูปแบบการจัดการสถานะเพื่อระบบ SPA และ SSR ขนาดใหญ่' },
        'Bootstrap': { icon: '🅱️', desc: 'การพัฒนา UI ที่ตอบสนองกับทุกหน้าจอ (Responsive) ได้อย่างรวดเร็ว โดยใช้ระบบ Grid คลาสยูทิลิตี้ และคลังคอมโพเนนต์สำเร็จรูปของ Bootstrap' },
        'UX/UI Designer': { icon: '🎨', desc: 'การทำวิจัยประสบการณ์ผู้ใช้, การสร้างโครงร่างสเก็ตช์ภาพ (Wireframing), การสร้างต้นแบบ (Prototyping) และการออกแบบอินเทอร์เฟซความละเอียดสูงด้วย Figma — เน้นที่การเข้าถึงได้ง่ายและประสบการณ์ที่ยอดเยี่ยม' },
        'Responsive Design': { icon: '📱', desc: 'การออกแบบที่เน้นการปรับหน้าจอให้เข้ากับทุกอุปกรณ์ (Mobile-First) โดยใช้ Media Queries เพื่อให้แอปใช้งานได้ลื่นไหลทั้งในมือถือ แท็บเล็ต และคอมพิวเตอร์' },
        'Mobile App Development': { icon: '📲', desc: 'กระบวนการดูแลแอปมือถือเต็มรูปแบบ — ตั้งแต่การวางแผน, การพัฒนา, การทดสอบระบบ และการเผยแพร่แอป — ทั้งในรูปแบบ Flutter และแบบ Native Android' },
        'Web Application Development': { icon: '🖥️', desc: 'การพัฒนาเว็บแอปพลิเคชันแบบครบวงจร ครอบคลุมทั้ง UI ฝั่งหน้าบ้าน, การเชื่อมต่อ REST API, ระบบยืนยันตัวตน และการอัปโหลดระบบขึ้นระบบคลาวด์' },
        'Android': { icon: '🤖', desc: 'การพัฒนาแอปพลิเคชันระบบ Android โดยใช้ภาษา Kotlin/Java และ Flutter พร้อมประสบการณ์อัปโหลดขึ้น Google Play Store' },
        'ios': { icon: '🍎', desc: 'การพัฒนาแอปพลิเคชันระบบ iOS ผ่าน Flutter รองรับการแสดงผลหน้าจอและการเข้าถึงระบบ API ของ iPhone และ iPad อย่างลื่นไหลเป็นธรรมชาติ' },
        'Front-end Development': { icon: '🖥️', desc: 'การสร้างอินเทอร์เฟซที่สวยงามและใช้งานง่ายสำหรับผู้ใช้ โดยใช้เทคโนโลยีหน้าบ้านที่ทันสมัย ได้แก่ React, TypeScript, HTML/CSS และระบบ UI ของ Flutter' },
        'Back-end Development': { icon: '🗄️', desc: 'การสร้างบริการหลังบ้าน, REST API, ระบบยืนยันตัวตน และการเชื่อมต่อฐานข้อมูลโดยใช้ Node.js, Express และระบบ SQL/NoSQL' },
        'Node.js': { icon: '🟢', desc: 'ระบบทำงาน JavaScript ฝั่งเซิร์ฟเวอร์ — พัฒนา REST APIs ความเร็วสูงและสถาปัตยกรรมแบบ Microservices ที่ประมวลผลตามเหตุการณ์' },
        'Express.js': { icon: '🚂', desc: 'เฟรมเวิร์กเว็บขนาดเล็กและยืดหยุ่นสำหรับ Node.js ใช้จัดการเส้นทาง (Routing), ท่อส่งมิดเดิลแวร์ และการออกแบบ API' },
        'RESTful API': { icon: '🔌', desc: 'การออกแบบและเรียกใช้บริการ RESTful APIs พร้อมรูปแบบ semantic ของ HTTP ที่ถูกต้อง รวมถึงการกำหนดเวอร์ชัน การจัดการข้อผิดพลาด และเอกสารประกอบ API' },
        'MongoDB': { icon: '🍃', desc: 'ฐานข้อมูล NoSQL แบบเอกสาร — การออกแบบโครงสร้างข้อมูล, คลัสเตอร์การคำนวณแบบยืดหยุ่น, การทำดัชนี และใช้งาน Mongoose ODM สำหรับหลังบ้าน Node.js' },
        'MySQL': { icon: '🐬', desc: 'การจัดการฐานข้อมูลเชิงสัมพันธ์ — การเขียนคิวรีที่ซับซ้อน, การเชื่อมโยงข้อมูล (Joins), สตอร์ดโพรซีเจอร์ และการปรับโครงสร้างข้อมูล' },
        'JWT Authentication': { icon: '🔐', desc: 'การยืนยันตัวตนแบบไร้สถานะโดยใช้ JSON Web Tokens — การออกโทเค็นเข้าถึง/โทเค็นฟื้นฟู ระบบมิดเดิลแวร์คัดกรองความปลอดภัย และการเก็บข้อมูลอย่างปลอดภัย' },
        'Node mailer': { icon: '📧', desc: 'ระบบส่งอีเมลอัตโนมัติด้วย Nodemailer — อีเมลแจ้งเตือนธุรกรรม, การตั้งค่าเซิร์ฟเวอร์ SMTP และเทมเพลตอีเมลแบบ HTML' },
        'Render Server': { icon: '☁️', desc: 'การติดตั้งและอัปโหลดเซิร์ฟเวอร์ Node.js ขึ้นระบบ Cloud ของ Render — การกำหนดค่าตัวแปรสภาพแวดล้อม และตั้งค่าอัปเดตอัตโนมัติจาก Git' },
        'Local Database': { icon: '💾', desc: 'การบันทึกข้อมูลแบบออฟไลน์บนอุปกรณ์ส่วนตัว โดยใช้ SQLite, SharedPreferences หรือ Hive สำหรับโมบายแอปพลิเคชัน' },
        'Cloudinary': { icon: '🌤️', desc: 'ระบบจัดการสื่อมีเดียแบบคลาวด์ — จัดการอัปโหลดรูปภาพ/วิดีโอ การแปลงรูปแบบไฟล์ การปรับแต่งความจุ และส่งผ่านเครือข่าย CDN ของ Cloudinary' },
        'Database Management': { icon: '🗄️', desc: 'การออกแบบฐานข้อมูล, การทำโครงสร้างข้อมูลให้เป็นมาตรฐาน (Normalisation), การทำดัชนี, ระบบสำรองและกู้คืนข้อมูล และปรับแต่งคิวรีให้เร็วขึ้นทั้ง SQL และ NoSQL' },
        'Google OAuth Authentication': { icon: '🔑', desc: 'การเชื่อมต่อระบบเข้าสู่ระบบด้วยบัญชี Google — ใช้งาน Passport.js, การดูแลระบบเซสชัน และการแลกเปลี่ยนโทเค็นความปลอดภัย' },
        'AI Chatbot Development with Cohere LLM': { icon: '🤖', desc: 'การพัฒนาผู้ช่วย AI โดยใช้โมเดลภาษาขนาดใหญ่ (LLM) ของ Cohere (โครงสร้างการทำงานแบบ Atlas/Nexus) สำหรับระบบแนะนำและระบบถาม-ตอบที่เข้าใจบริบท' },
        'Profanity Detection System with Google Perspective API': { icon: '🛡️', desc: 'การพัฒนาระบบกรองและตรวจจับคำหยาบคายรวมถึงข้อความท็อกซิก โดยใช้คะแนนประเมินจากโมเดล Google Perspective API' },
        'Machine Learning Basics': { icon: '🧠', desc: 'การประยุกต์ใช้งานพื้นฐานของ Machine Learning ด้วย TensorFlow/Keras ในสถาปัตยกรรม CNN เพื่อฝึกฝน ตรวจสอบ และประเมินผลโมเดลจำแนกรูปภาพ' },
        'Data Processing': { icon: '⚙️', desc: 'การทำกระบวนการจัดเตรียมท่อส่งข้อมูลประเภทรูปภาพและข้อความด้วยสคริปต์ Python ร่วมกับ OpenCV และจัดรูปแบบข้อมูลให้พร้อมสำหรับโมเดล Transformers' },
        'Text Classification': { icon: '📊', desc: 'การวิเคราะห์และจัดหมวดหมู่ข้อความ โดยนำคะแนนจาก Perspective API มาประเมินความเสี่ยงและคัดกรองเนื้อหา' },
        'Image-to-Text Conversion with Hugging Face': { icon: '📸', desc: 'การสร้างคำบรรยายภาพอัตโนมัติโดยใช้โมเดล BLIP (Salesforce/blip-image-captioning-base) ผ่านระบบ Hugging Face Transformers' },
        'REST API Integration': { icon: '🔗', desc: 'การเรียกใช้งานและเชื่อมต่อ REST APIs ของระบบภายนอก — รวมถึงการลงทะเบียนความปลอดภัย, การแบ่งหน้าข้อมูล, การควบคุมปริมาณการเรียกใช้งาน และการจัดข้อมูลผลลัพธ์' },
        'Git & GitHub': { icon: '🐙', desc: 'ระบบควบคุมเวอร์ชันซอร์สโค้ดด้วย Git — การจัดการกิ่ง (Branches), การสร้าง Pull Requests, การแก้ปัญหาโค้ดชนกัน (Merge Conflict) และการใช้ CI/CD บน GitHub' },
        'Source Tree': { icon: '🌳', desc: 'การใช้งานโปรแกรมจำลองกราฟิกสำหรับจัดการ Git เพื่อควบคุมกิ่งโค้ด คอมมิต และดูความเปลี่ยนแปลงผ่านอินเทอร์เฟซหน้าจอที่เข้าใจง่ายของ Sourcetree' },
        'Figma (UI/UX)': { icon: '🎭', desc: 'การออกแบบร่วมกันบน Figma — การสร้างคลังคอมโพเนนต์สำเร็จรูป, ระบบจัดเลย์เอาต์อัตโนมัติ, การสร้างต้นแบบจำลอง และการส่งต่องานออกแบบให้นักพัฒนา' },
        'Postman': { icon: '📮', desc: 'การทดสอบและจัดทำเอกสาร APIs ด้วย Postman — การสร้างชุดทดสอบสำเร็จรูป, การจัดการตัวแปรสภาพแวดล้อม และเขียนสคริปต์ทดสอบอัตโนมัติ' },
        'Docker (Basic)': { icon: '🐳', desc: 'การทำแอปให้อยู่ในตู้คอนเทนเนอร์ด้วย Docker — การเขียน Dockerfiles, การสร้างอิมเมจ และการรันคอนเทนเนอร์ร่วมกันด้วย docker-compose' },
        'Visual Studio Code': { icon: '💻', desc: 'เครื่องมือเขียนโค้ดหลัก — ติดตั้งส่วนขยายเพิ่มเติม, ระบบดีบักซอร์สโค้ด, เทอร์มินัลในตัว และปรับแต่งพื้นที่ทำงานเพื่อประสิทธิภาพสูงสุด' },
        'XAMPP': { icon: '🖥️', desc: 'ชุดโปรแกรมจำลองเซิร์ฟเวอร์ PHP/MySQL ในเครื่องคอมพิวเตอร์ — ประกอบไปด้วย Apache, MySQL และการตั้งค่า PHP สำหรับพัฒนาเว็บในเครื่องแบบรวดเร็ว' },
        'Vercel': { icon: '▲', desc: 'การติดตั้งและเปิดใช้งานเว็บฝั่งหน้าบ้านบนคลาวด์ Vercel — รองรับการพรีวิวหน้าเว็บทันที, Edge Functions, โดเมนส่วนตัว และอัปเดตอัตโนมัติจาก GitHub' },
        'Netlify': { icon: '🌍', desc: 'ระบบโฮสติ้งเว็บประเภท JAMstack บน Netlify — รองรับการอัปเดตระบบอัตโนมัติเมื่อพุชโค้ด, การจัดการฟอร์มกรอกข้อมูล และ Edge Redirects' },
        'MySQL Workbench': { icon: '🔧', desc: 'เครื่องมือออกแบบและจัดการฐานข้อมูลเชิงกราฟิก — การสร้างแผนภาพความสัมพันธ์ของข้อมูล (EER diagrams), วิเคราะห์ประสิทธิภาพคิวรี และดูแลระบบฐานข้อมูลเชิงลึก' },
        'Jupyter Notebook': { icon: '📓', desc: 'การใช้งานสมุดโน้ต Python สำหรับวิเคราะห์ข้อมูล, ทำการทดลองโมเดล Machine Learning และเขียนกราฟแสดงภาพข้อมูลด้วย matplotlib และ pandas' },
        'MatLab': { icon: '💻', desc: 'สภาพแวดล้อมการคำนวณทางคณิตศาสตร์ที่ใช้สำหรับการวิเคราะห์ข้อมูล การสร้างอัลกอริทึม และการพัฒนาอินเทอร์เฟซผู้ใช้แบบโต้ตอบ' }
      }
    },
    // Projects
    projects: {
      title: "ผลงานเด่น",
      view_details: "🔍 ดูรายละเอียดผลงาน",
      overview: "ภาพรวมผลงาน",
      key_features: "ฟีเจอร์เด่น",
      responsibilities: "หน้าที่การพัฒนาระบบ",
      contribution: "🎨 ผลงานของฉัน (PDF)",
      figma: "🎨 Figma",
      list: [
        {
          id: 1,
          title: "PEA LIFE Application",
          description: "แพลตฟอร์มดิจิทัลสำหรับบุคลากรของการไฟฟ้าส่วนภูมิภาค (กฟภ.) ทั่วประเทศไทย รองรับระบบการจัดการข้อมูลพนักงาน, การขออนุมัติลางานออนไลน์, การบันทึกและอนุมัติการเดินทางปฏิบัติงานภายนอก รวมถึงสวัสดิการของพนักงาน",
          details: {
            subtitle: "โมบายแอปพลิเคชันสำหรับการจัดการทรัพยากรบุคคลและระบบการทำงานภายในของการไฟฟ้าส่วนภูมิภาค (กฟภ.) ทั่วประเทศ",
            whatWeDid: [
              "**กลุ่มเป้าหมาย:** แอปพลิเคชันภายในที่พัฒนาขึ้นมาเฉพาะสำหรับบุคลากรของการไฟฟ้าส่วนภูมิภาค (กฟภ.) ทั่วประเทศไทยเท่านั้น",
              "**ระบบข้อมูลพนักงาน (Employee Profile):** ระบบจัดการประวัติการทำงาน,ข้อมูลส่วนตัว และโครงสร้างตำแหน่งของบุคลากรภายใน",
              "**การขอลางานออนไลน์ (Online Leave Request):** รองรับการยื่นใบลางานออนไลน์และตรวจสอบสถานะการอนุมัติได้แบบเรียลไทม์",
              "**ระบบจัดบันทึกการเดินทางและปฏิบัติงานภายนอก:** ระบบบันทึกและขออนุมัติการเดินทางไปปฏิบัติงานนอกสถานที่,การยืมเงินสำรอง และการยื่นขอเบิกค่าใช้จ่ายในการเดินทาง",
              "**การอนุมัติเอกสารและคำขอ (Document Approval):** ระบบการอนุมัติใบคำขอและเอกสารภายในของฝ่ายบริหารและหัวหน้างาน",
              "**บริการและสวัสดิการพนักงาน:** ศูนย์รวมข่าวสารประชาสัมพันธ์ ประกาศต่างๆ สวัสดิการพนักงาน และบริการไลฟ์สไตล์ เช่น PR House และสิทธิประโยชน์ของบุคลากร"
            ],
            techHighlight: [
              "**อัปเดตซอร์สโค้ดเดิม (Legacy Code):** ทำการอัปเกรดโค้ดดั้งเดิมภาษา [Dart (Flutter)](https://flutter.dev) ให้รองรับเฟรมเวิร์กและไลบรารีเวอร์ชันล่าสุดเพื่อลดความเสี่ยงด้านความปลอดภัยและแก้ปัญหาระบบค้าง",
              "**เชื่อมโยง API ใหม่:** ปรับเปลี่ยนและอัปเกรดระบบเชื่อมต่อ [REST API](https://restfulapi.net/) และบริการอื่นๆ ให้รองรับเวอร์ชันปัจจุบันผ่านการทดสอบด้วย [Postman](https://www.postman.com/)",
              "**พัฒนาปรับแต่งหน้าจอ UI/UX:** ปรับปรุงหน้าต่างการแสดงผลใหม่เพื่อให้ได้ดีไซน์ที่ทันสมัย สะอาดตา และเพิ่มความลื่นไหลในการสัมผัสใช้งานของผู้ใช้งาน",
              "**พัฒนาฟังก์ชันเพิ่มเติม:** ออกแบบและเขียนฟีเจอร์การขอลางานออนไลน์และการทำแบบประเมินต่างๆ ภายในระบบทรัพยากรบุคคล",
              "**เขียนการทดสอบระบบ (Testing):** เพิ่มการเขียน Unit Testing เพื่อสร้างความมั่นใจในความถูกต้องของตรรกะระบบและรักษาระดับคุณภาพของโค้ดให้ง่ายต่อการพัฒนาต่อยอด",
              "**แก้ไขข้อผิดพลาดระบบ (Debugging & Optimization):** ค้นหาและแก้ไขบั๊กสำคัญเพื่อเพิ่มความเสถียรและประสิทธิภาพโดยรวมของระบบปฏิบัติการมือถือให้ทำงานเร็วขึ้น",
              "**ทำงานร่วมกันแบบทีม:** ร่วมมือกับทีมงานโดยใช้ [Sourcetree](https://www.sourcetreeapp.com/) และ [GitHub](https://github.com) ในการควบคุมเวอร์ชันโค้ด ตรวจสอบความเปลี่ยนแปลง และประสานงานพัฒนาให้ตรงกันอย่างเป็นระบบ"
            ]
          }
        },
        {
          id: 2,
          title: "PEA Privilege Application",
          description: "แพลตฟอร์มดิจิทัลที่พัฒนาขึ้นเพื่อลูกค้ารายใหญ่และลูกค้าองค์กรของการไฟฟ้าส่วนภูมิภาค (กฟภ.) ช่วยให้เข้าถึงข้อมูลสำคัญ,บริการออนไลน์ต่างๆ และการติดตามสถานะการทำธุรกรรมได้อย่างสะดวกรวดเร็วในระบบเดียว เพื่อยกระดับประสบการณ์และความพึงพอใจของลูกค้า",
          details: {
            subtitle: "แอปพลิเคชันรวมสิทธิพิเศษและสิทธิประโยชน์สำหรับลูกค้าองค์กรและลูกค้ารายใหญ่ของการไฟฟ้าส่วนภูมิภาค (กฟภ.) ทั่วประเทศ",
            whatWeDid: [
              "**กลุ่มเป้าหมาย:** แพลตฟอร์มดิจิทัลที่พัฒนาขึ้นมาเพื่อลูกค้ารายใหญ่และพันธมิตรทางธุรกิจของ กฟภ.",
              "**ระบบข้อมูลลูกค้า (Customer Management):** ระบบจัดเก็บและบริหารข้อมูลลูกค้าองค์กรและประวัติการใช้บริการที่ปลอดภัย",
              "**ระบบขอรับบริการออนไลน์:** อำนวยความสะดวกในการติดตามสถานะคำขอใช้บริการและประวัติการแจ้งเรื่องต่างๆ ได้ทุกที่ทุกเวลา",
              "**แดชบอร์ดข้อมูลหลัก (Dashboard):** ศูนย์รวมแดชบอร์ดแสดงข้อมูลสถิติที่สำคัญและรายงานการใช้พลังงานไฟฟ้าของลูกค้า",
              "**ระบบแจ้งเตือนแบบเรียลไทม์:** ส่งข่าวสารประชาสัมพันธ์ โปรโมชัน และการแจ้งเตือนสิทธิ์ต่างๆ ทันทีถึงอุปกรณ์มือถือ",
              "**แพลตฟอร์มบริการที่เป็นมิตร:** ออกแบบโครงสร้างเมนูและฟังก์ชันต่างๆ ให้เรียบง่าย สบายตา และมีขั้นตอนใช้งานสั้นที่สุด",
              "**ระบบล็อกอินที่ปลอดภัย:** การล็อกอินเข้าถึงข้อมูลส่วนตัวที่มีความปลอดภัยสูงและสิทธิประโยชน์ทางธุรกิจเฉพาะบุคคล",
              "**การจัดการสาธารณูปโภคออนไลน์:** สนับสนุนระบบตรวจสอบการใช้ไฟฟ้า ค่าน้ำ และบริการพิเศษออนไลน์อื่นๆ",
              "**ระบบคูปองและสิทธิพิเศษ (Voucher System):** แพลตฟอร์มจัดการและแลกคูปอง ส่วนลดร้านค้า พันธมิตรทางธุรกิจต่างๆ (อยู่ระหว่างขั้นตอนพัฒนาเพิ่มเติม)"
            ],
            techHighlight: [
              "**อัปเดตโค้ดดั้งเดิม:** ปรับปรุงโค้ดโปรเจกต์เดิมที่เป็น [Dart (Flutter)](https://flutter.dev) ให้รองรับระบบความปลอดภัยและเวอร์ชันล่าสุดของระบบปฏิบัติการมือถือ",
              "**ปรับปรุงระบบสมัครสมาชิก:** พัฒนาระบบยืนยันตัวตนให้มีความปลอดภัยสูงยิ่งขึ้น โดยสร้างระบบรับส่งรหัสผ่าน OTP ผ่านบริการ Gmail",
              "**ยกระดับดีไซน์ UI/UX:** ออกแบบองค์ประกอบหน้าต่างการใช้งานใหม่ให้มีความสวยงาม ดูมีความน่าเชื่อถือทางธุรกิจ และช่วยให้ผู้ใช้เข้าถึงเมนูต่างๆ ได้ง่ายขึ้น",
              "**พัฒนาระบบแลกสิทธิ์ (Voucher feature):** พัฒนาและเชื่อมต่อระบบการจัดการและแลกบัตรกำนัลสิทธิพิเศษ พร้อมทำแบบทดสอบร่วมผ่าน [Postman](https://www.postman.com/)",
              "**เสริมความมั่นใจระบบ:** เขียน Unit Testing สำหรับทดสอบระบบการแลกสิทธิ์เพื่อให้แน่ใจว่าไม่มีข้อผิดพลาดเกิดขึ้นในขั้นตอนหักสิทธิ์จริง",
              "**แก้ไขจุดบกพร่อง:** วิเคราะห์บั๊กที่ส่งผลให้หน้าจอค้างหรือข้อมูลไม่โหลดบนหน้าจอ พร้อมแก้ไขเพื่อความเสถียรสูงสุด",
              "**เพิ่มการตอบสนองหน้าจอ (Responsive):** เขียนโครงสร้าง UI ให้สามารถยืดหยุ่นแสดงผลได้อย่างสวยงามบนอุปกรณ์มือถือและแท็บเล็ตทุกขนาด ทั้งในระบบ Android และ iOS",
              "**ประสานงานกับทีม:** ใช้กระบวนการทำงานผ่าน Git และร่วมพัฒนากับทีมโดยใช้เครื่องมือ [Sourcetree](https://www.sourcetreeapp.com/) และ [GitHub](https://github.com) เพื่อความต่อเนื่องและไร้รอยต่อในกระบวนการทำงาน"
            ]
          }
        },
        {
          id: 3,
          title: "MFU Food Guide And Review Application",
          description: "โมบายแอปพลิเคชันสำหรับนักศึกษาและบุคลากรมหาวิทยาลัยแม่ฟ้าหลวง (มฟล.) ในการค้นหาร้านอาหาร แนะนำเมนู เขียนรีวิว ตลอดจนฟีเจอร์กระทู้พูดคุย ชุมชนผู้ใช้งาน ระบบคัดกรองคำหยาบคายอัตโนมัติ และระบบแชตบอต AI อัจฉริยะ",
          details: {
            subtitle: "โมบายแอปพลิเคชันแนะนำร้านอาหารและรีวิวของกินสำหรับนักศึกษา อาจารย์ และบุคลากรของมหาวิทยาลัยแม่ฟ้าหลวง (Chiang Rai)",
            whatWeDid: [
              "**ระบบล็อกอินความปลอดภัยสูง & การแบ่งสิทธิ์ (Role Management):** ระบบล็อกอินพร้อมความจำสถานะการเข้าใช้งาน และการจำกัดสิทธิ์ควบคุมฟังก์ชันเฉพาะบทบาท ได้แก่ ผู้มาเยือน (Guest), สมาชิกทั่วไป (User) และผู้ดูแลระบบ (Admin)",
              "**ค้นหาและแนะนำร้านอาหารภายในมหาลัย:** ระบบค้นหา คัดกรองหมวดหมู่ และแสดงพิกัดร้านอาหารภายในมหาวิทยาลัย",
              "**ระบบรีวิวและให้คะแนน (Rating & Review System):** สมาชิกสามารถแชร์ประสบการณ์ เขียนรีวิว และให้คะแนนแยกเป็นด้านๆ (รสชาติ, ความสะอาด, บริการ, ความคุ้มค่า) เพื่อเป็นข้อมูลประกอบการตัดสินใจของชุมชน",
              "**กระดานข่าวสารและชุมชนพูดคุย (Community Threads):** ชุมชนสร้างกระทู้ถาม-ตอบ แลกเปลี่ยนข้อมูลและแสดงความเห็นร่วมกัน โดยเชื่อมโยงกับระบบ AI ในการสแกนคัดกรองคำหยาบและภาษาไม่เหมาะสมเพื่อความปลอดภัย",
              "**ระบบจัดอันดับและคะแนนสะสม (Leaderboard):** ฟีเจอร์เก็บคะแนนกิจกรรมการเขียนรีวิวเพื่อจัดอันดับผู้ใช้ที่ให้ข้อมูลมีประโยชน์ ช่วยกระตุ้นความกระตือรือร้นและเพิ่มการใช้งานระบบอย่างยั่งยืน",
              "**แดชบอร์ดวิเคราะห์กิจกรรมแอปพลิเคชัน (Admin Dashboard):** หน้าจอสรุปสถิติสำหรับผู้บริหารและแอดมิน เพื่อตรวจสอบจำนวนรีวิว ร้านอาหารยอดนิยม และแนวโน้มกิจกรรมของผู้ใช้แบบรายสัปดาห์/รายเดือน",
              "**หน้าข้อมูลส่วนตัวและโปรไฟล์ (Profile Page):** ฟังก์ชันจัดการบัญชีผู้ใช้ อัปเดตรูปภาพโปรไฟล์ส่วนตัว และเข้าดูคลังประวัติรีวิวและกระทู้เดิมของตนเอง",
              "**ผู้ช่วยแชตบอต AI อัจฉริยะ (Atlas/Nexus):** ผู้ช่วยแชตบอต AI ทำงานแยกโหมดในการแนะนำเมนูอาหาร (Atlas) และแนะนำการใช้งานระบบของแอปพลิเคชัน (Nexus) ตามความประสงค์การใช้งานของผู้ใช้",
              "**ระบบการจัดการหลังบ้านสำหรับผู้ดูแล:** เครื่องมือแผงควบคุมระบบสำหรับแอดมินในการอนุมัติร้านค้าใหม่ ลบเนื้อหาที่ไม่เหมาะสม และอัปเดตรายชื่อเมนูอาหาร",
              "**ระบบจำกัดสิทธิ์ผู้ใช้และระงับการเข้าใช้ชั่วคราว:** การตั้งระบบตักเตือน แบนไอดีผู้ใช้ที่โพสต์สแปม หรือภาษาหยาบคาย พร้อมตั้งเวลาระบบปลดแบนพฤติกรรมอัตโนมัติ"
            ],
            techHighlight: [
              "**ระบบลงทะเบียนและยืนยันสิทธิ์ผู้ใช้:** ออกแบบกลไกการล็อกอินและจำเซสชันการทำงานแบบถาวรด้วย [JWT (JSON Web Tokens)](https://jwt.io/) และ [shared_preferences](https://pub.dev/packages/shared_preferences) รวมถึงการส่งข้อมูลผ่าน HTTP Headers อย่างปลอดภัย",
              "**พัฒนา UI/UX และหน้าจอฝั่งแอปพลิเคชัน:** ออกแบบเฟรมหน้าจอมากกว่า 20 หน้าและพอร์ตงานโครงสร้างการเขียนจาก Figma มาเป็นโค้ดด้วยภาษา Dart บน [Flutter](https://flutter.dev) ทั้งฝั่ง User และแอดมิน",
              "**สร้างระบบบริการและเชื่อม API (Backend):** พัฒนาระบบเซิร์ฟเวอร์หลังบ้านด้วย [Node.js](https://nodejs.org/) เพื่อประมวลผลคำขอ ส่งผ่านข้อมูล และสื่อสารกับระบบฐานข้อมูลเชิงสัมพันธ์ผ่าน REST APIs",
              "**การจัดระเบียบข้อมูลและวางฐานข้อมูลเชิงสัมพันธ์:** ออกแบบโครงสร้างตารางข้อมูลเชื่อมโยงกัน (Relational Database) ใน [MySQL](https://www.mysql.com/) ครอบคลุมตารางพนักงาน ร้านค้า รีวิว และความปลอดภัย",
              "**ผสานระบบแชตบอต AI (Cohere LLM):** พัฒนาระบบสนทนาถามตอบแบบเรียลไทม์ด้วยปัญญาประดิษฐ์ของ [Cohere](https://cohere.com/) โดยมีฟังก์ชันเปลี่ยนโหมดผู้ช่วยอัจฉริยะ (General Assistant และ System Guide Context)",
              "**ระบบจัดหมวดหมู่และกรองร้านอาหาร:** เขียนตรรกะประเมินคะแนนเฉลี่ยแยกย่อยด้านต่างๆ ของร้านค้า และคำนวณสูตรเพื่อนำร้านค้าที่ดีที่สุดขึ้นแสดงบนระบบแนะนำ",
              "**พัฒนาส่วนติดต่อชุมชนและกิจกรรม:** ติดตั้งระบบชุมชนในการแสดงความคิดเห็นและการตอบกลับคอมเมนต์",
              "**การป้องกันความปลอดภัยสังคมออนไลน์ด้วย AI:** เชื่อมต่อและเรียกใช้โมเดล [Perspective API](https://developers.perspectiveapi.com/) เพื่อประเมินค่าความเหมาะสมของคำพูดเพื่อป้องกันคำหยาบคาย",
              "**แดชบอร์ดแสดงผลสถิติสำหรับผู้บริหาร:** พัฒนาแผนภูมิการแสดงผลทางสถิติและกราฟสรุปพฤติกรรมผู้ใช้ เพื่อประโยชน์ในการควบคุมระบบของแอดมิน",
              "**ระบบอัปโหลดสื่อและจัดเก็บมีเดียแบบคลาวด์:** เชื่อมระบบส่งไฟล์มีเดียขึ้นเซิร์ฟเวอร์คลาวด์ผ่าน [Cloudinary API](https://cloudinary.com/) ช่วยแปลงไฟล์ให้เหมาะสมและกระจายความเร็วด้วย CDN",
              "**เพิ่มประสิทธิภาพการดาวน์โหลดภาพ:** นำไลบรารี [cached_network_image](https://pub.dev/packages/cached_network_image) มาช่วยเก็บประวัติการโหลดภาพในเครื่องพกพา ช่วยลดการดึงข้อมูลเครือข่ายและสตรีมภาพได้เร็วและลื่นไหล",
              "**ระบบควบคุมกฎระเบียบแอปพลิเคชัน:** สร้างกระบวนการให้แอดมินตรวจสอบคำร้องเรียนเนื้อหา ระบบจำกัดสิทธิ์ตามเกณฑ์ และแจ้งเตือนแบนพฤติกรรมในหน้าจอผู้ใช้",
              "**ทดสอบการไหลของข้อมูล:** เขียนระบบจำลองและทดสอบการยิง APIs เครือข่ายด้วย [Postman](https://www.postman.com/) เพื่อการทำงานที่แม่นยำในโปรโตคอลระบบส่งข้อมูล",
              "**ควบคุมความสอดคล้องของโค้ดโปรเจกต์:** ร่วมพัฒนากับผู้เกี่ยวข้องผ่าน GitHub ในการแบ่งแยกการพัฒนาและรวมโค้ดหลังผ่านกระบวนการทดสอบเสร็จสมบูรณ์"
            ]
          }
        },
        {
          id: 4,
          title: "MFU Movie Assets Application",
          description: "แอปพลิเคชันอัจฉริยะบนมือถือสำหรับนักศึกษาและบุคลากรมหาวิทยาลัยแม่ฟ้าหลวง (มฟล.) ในการค้นหา ขอยืม และจัดการข้อมูลภาพยนตร์และทรัพยากรมีเดียต่างๆ ผ่านแพลตฟอร์มดิจิทัลที่ใช้งานง่าย สะดวก รวดเร็ว ทุกที่ทุกเวลา",
          details: {
            subtitle: "ระบบยืม-คืนภาพยนตร์และอุปกรณ์มีเดียการเรียนการสอนสำหรับนักศึกษาและอาจารย์มหาวิทยาลัยแม่ฟ้าหลวง",
            whatWeDid: [
              "**กลุ่มเป้าหมาย:** ออกแบบขึ้นเพื่อสนับสนุนนักศึกษา บุคลากรสายสนับสนุน อาจารย์ และแขกผู้มาเยือนที่ต้องการค้นหา ยืมใช้ และสืบค้นสื่อมีเดียภาพยนตร์ของมหาวิทยาลัยผ่านแพลตฟอร์มที่เป็นระบบ",
              "**ระบบสมัครล็อกอินและแบ่งแยกบทบาท:** เข้าสู่ระบบด้วยความปลอดภัยสูง โดยมีระบบจัดการสิทธิ์แบ่งประเภท ได้แก่ สมาชิกทั่วไป (User), ผู้อนุมัติยืม (Approver) และผู้จัดการระบบ (Admin)",
              "**ค้นหาคลังสื่อและแนะนำภาพยนตร์:** เรียกดูสื่อมีเดียทั้งหมด จัดหมวดหมู่ประเภทยอดนิยม ค้นหาผ่านกล่องค้นหาอัจฉริยะ และจัดลำดับสื่อแนะนำ",
              "**ระบบส่งใบคำขอยืมสื่อออนไลน์:** ผู้ใช้สามารถยื่นคำขอยืมระบุวันที่ต้องการ พร้อมระบบติดตามสถานะคำขอทางออนไลน์ได้ทันที",
              "**ระบบสำหรับผู้อนุมัติคำขอยืม:** เมนูสำหรับฝ่ายอนุมัติในการตรวจสอบเงื่อนไขความถูกต้อง และกดอนุมัติหรือปฏิเสธคำขอยืมพร้อมระบุเหตุผล",
              "**เครื่องมือจัดการคลังสื่อของแอดมิน:** หน้าจัดการระบบเพื่อให้ผู้ดูแลระบบสามารถเพิ่มสื่อภาพยนตร์ชิ้นใหม่ แก้ไขประวัติข้อมูล หรือปิดสิทธิ์การยืมชั่วคราว",
              "**ระบบบันทึกคืนสื่อและปรับปรุงสถานะ:** แอดมินสามารถจัดการขั้นตอนสแกนรับสินค้าคืน พร้อมระบบที่จะไปลด/เพิ่มจำนวนทรัพยากรว่างให้อัตโนมัติ",
              "**คลังบันทึกประวัติการทำรายการย้อนหลัง:** จัดเก็บข้อมูลประวัติยืมคืนทั้งหมดของสมาชิก เพื่อตรวจสอบสถานะย้อนหลังได้อย่างเป็นระบบ",
              "**แดชบอร์ดสรุปกิจกรรม:** หน้ารายงานสรุปยอดการยืม สื่อที่เป็นที่ต้องการสูงสุด และจำนวนรายการที่รอการอนุมัติสำหรับฝ่ายจัดการ"
            ],
            techHighlight: [
              "**พัฒนาระบบความปลอดภัยข้อมูลเซสชัน:** นำระบบรักษาความปลอดภัย [JWT Token](https://jwt.io/) มาใช้ควบคู่กับระบบบันทึกความจำ [shared_preferences](https://pub.dev/packages/shared_preferences) เพื่อจดจำตัวตนและปกป้อง API เครือข่าย",
              "**พัฒนา UI/UX แอนิเมชันสำหรับโมบายล์:** พัฒนาโครงสร้างการแสดงผลบนอุปกรณ์เคลื่อนที่ด้วยภาษา Dart บนเฟรมเวิร์ก [Flutter](https://flutter.dev) รองรับโหมดหน้าต่างหลายหน้าที่ลื่นไหลตามสิทธิ์ผู้ใช้งาน",
              "**เขียนบริการหลังบ้านและตรรกะระบบ:** เขียน API ด้วย [Node.js](https://nodejs.org/) เพื่อรับส่งข้อมูลจากเครื่องมือถือ ตรวจประเมินตรรกะกำหนดการยืม-คืนภาพยนตร์ให้สอดคล้องกัน",
              "**ระบบโครงสร้างและตารางฐานข้อมูลเชิงสัมพันธ์:** ออกแบบสถาปัตยกรรมข้อมูลบน [MySQL](https://www.mysql.com/) ทั้งตารางบัญชีผู้ใช้งาน ประวัติการยืม สิทธิ์อนุมัติ และคลังภาพยนตร์",
              "**ระบบอัปเดตไฟล์ภาพและสไลด์ไฮไลต์:** ติดตั้งระบบจัดเก็บรูปภาพโปสเตอร์หนัง และสไลด์แบนเนอร์ยอดนิยมโดยใช้แพ็กเกจ [file_picker](https://pub.dev/packages/file_picker) และ [carousel_slider](https://pub.dev/packages/carousel_slider)",
              "**กระบวนการดำเนินงานตามบทบาทสิทธิ์ (Workflow):** จัดเวิร์กโฟลว์ตามเงื่อนไขสิทธิ์ของผู้ใช้เพื่อความเป็นระเบียบในการดำเนินงานอนุมัติสื่อมีเดียและการคืนอุปกรณ์",
              "**การยืนยันระบบและดีบักโค้ด:** ทดสอบการยิง API และตรวจสอบการคืนค่าความถูกต้องด้วย [Postman](https://www.postman.com/) และระบบดีบักใน IDE เพื่อสร้างความมั่นใจสูงสุด",
              "**ควบคุมเวอร์ชันระบบ:** ใช้ระบบควบคุม Git บนแพลตฟอร์ม GitHub เพื่อควบคุมการแก้ไขความขัดแย้งของกิ่งพัฒนาและควบแน่นซอร์สโค้ดให้สะอาดเรียบร้อย"
            ]
          }
        },
        {
          id: 5,
          title: "MFU Room Reservation Website",
          description: "เว็บไซต์สำหรับจองห้องและสิ่งอำนวยความสะดวกในมหาวิทยาลัยแม่ฟ้าหลวง (มฟล.) ให้นักศึกษา อาจารย์ และเจ้าหน้าที่เรียกดูตารางว่าง ยื่นคำขอจองห้อง พร้อมแผงควบคุมระบบสำหรับอาจารย์ในการอนุมัติใบคำขอ และระบบรีเซ็ตสถานะอัตโนมัติรายวัน",
          details: {
            subtitle: "ระบบบริการเว็บไซต์จองห้องเรียนและพื้นที่ปฏิบัติงานภายในอาคารต่างๆ ของมหาวิทยาลัยแม่ฟ้าหลวง",
            whatWeDid: [
              "**การเข้าใช้งานและสิทธิ์ผู้ใช้:** ล็อกอินแยกสถานะเพื่อสิทธิ์การใช้งาน ได้แก่ นักศึกษา (Student), อาจารย์ (Lecturer) และเจ้าหน้าที่ผู้ดูแล (Staff)",
              "**สืบค้นตารางความว่าง:** ตรวจดูข้อมูลห้องว่างและช่วงเวลาว่างของห้องเรียนในอาคารต่างๆ แบบอัปเดตทันที",
              "**ขั้นตอนการส่งจองพื้นที่:** กรอกข้อมูลวัตถุประสงค์การใช้งาน ยื่นใบขอจอง และสืบค้นตรวจสอบสถานะคำขอจอง (รออนุมัติ / ผ่านการอนุมัติ / ถูกปฏิเสธ)",
              "**แผงพิจารณาใบคำขอสำหรับอาจารย์:** อาจารย์สามารถเข้าดูเอกสารคำขอของนักศึกษา ตรวจสอบเงื่อนไข และกดปุ่มตกลงอนุมัติหรือปฏิเสธคำขอจอง",
              "**ระบบบริหารเครื่องมือของพนักงาน (Staff Panel):** แผงจัดการระบบของพนักงานในการตั้งค่าเพิ่มห้องเรียนใหม่ อัปโหลดรูปภาพห้อง และเปิด-ปิดช่วงเวลาการจองรายวัน",
              "**ระบบเอกสารรายงานกิจกรรมย้อนหลัง:** คลังรวบรวมประวัติการเข้าใช้งานและการทำกิจกรรมจองห้องทั้งหมดจำแนกตามรายวิชาและผู้ยื่นจอง",
              "**ระบบจัดการตารางว่างอัตโนมัติ (Automation):** ระบบเครือข่ายตั้งเวลารีเซ็ตตารางช่วงเวลาว่างของการใช้ห้องแบบอัตโนมัติในทุกๆ วันเมื่อพ้นกำหนด"
            ],
            techHighlight: [
              "**พัฒนาการปกป้องรหัสผ่านและเซสชันเว็บ:** พัฒนาระบบยืนยันตัวตนบนเว็บไซต์โดยใช้ฟังก์ชันเข้ารหัสลับข้อมูลความปลอดภัยสูงอย่าง [bcrypt](https://www.npmjs.com/package/bcrypt) ร่วมกับ [express-session](https://www.npmjs.com/package/express-session) และระบบป๊อปอัปแจ้งข้อผิดพลาดด้วย [connect-flash](https://www.npmjs.com/package/connect-flash)",
              "**สร้างระบบบริการฝั่งหลังบ้าน (Backend Server):** พัฒนาระบบเว็บด้วย [Node.js](https://nodejs.org/) ควบคู่กับเฟรมเวิร์กจัดการข้อมูลที่ลื่นไหลอย่าง [Express.js](https://expressjs.com/)",
              "**การเชื่อมโยงระบบข้อมูลเชิงสัมพันธ์:** ออกแบบสถาปัตยกรรมและควบคุมระบบฐานข้อมูลด้วย [MySQL](https://www.mysql.com/) ทั้งการบันทึกสถานะช่วงเวลาของห้องและการสลับผลลัพธ์คำขอจอง",
              "**เขียนเลย์เอาต์หน้าต่างเว็บให้ยืดหยุ่น:** ออกแบบและประกอบพัฒนาหน้าจอเว็บไซต์ทั้งหมดด้วยภาษา [HTML](https://html.com/), [CSS](https://www.w3schools.com/css/) และระบบตอบสนองอย่างรวดเร็วของ [Bootstrap](https://getbootstrap.com/)",
              "**ระบบบันทึกและย้ายไฟล์มีเดียภาพห้องเรียน:** ติดตั้งเครื่องมือช่วยในการจัดเก็บไฟล์ภาพและจัดการรูปถ่ายห้องเรียนฝั่งหน้าบ้านด้วยไลบรารี [Multer](https://www.npmjs.com/package/multer) ของ Node.js",
              "**ติดตั้งฟังก์ชันจัดการเวลาอัตโนมัติ (Cron job):** เขียนระบบการทำงานเบื้องหลังอัตโนมัติโดยนำไลบรารี [node-cron](https://www.npmjs.com/package/node-cron) มาช่วยดูแลระบบการรีเซ็ตสถานะห้องตอนเที่ยงคืนของทุกวัน",
              "**ตรวจสอบประสิทธิภาพโปรเจกต์:** ดำเนินการทดสอบระบบยิง API เพื่อเช็กผลการทำงานของเส้นทางเซิร์ฟเวอร์ด้วย [Postman](https://www.postman.com/) และการจำลองตรรกะใน [MySQL Workbench](https://www.mysql.com/products/workbench/)",
              "**ทำงานประสานงานผ่านระบบทีมพัฒนา:** ควบคุมความปลอดภัยของซอร์สโค้ดและส่งผ่านงานพัฒนาอย่างเป็นเอกภาพผ่าน Git ร่วมกับซอฟต์แวร์ [GitHub](https://github.com) และ [Sourcetree](https://www.sourcetreeapp.com/)"
            ]
          }
        },
        {
          id: 6,
          title: "Image Classification Website",
          description: "แอปพลิเคชันปัญญาประดิษฐ์ (AI) สำหรับจำแนกประเภทและระบุวัตถุจากไฟล์รูปภาพที่ผู้ใช้อัปโหลด โดยจะแสดงผลลัพธ์การคาดคะเนวัตถุในรูปแบบเรียลไทม์พร้อมระบุเปอร์เซ็นต์ค่าความมั่นใจของแบบจำลอง",
          details: {
            subtitle: "ระบบจำแนกและประมวลผลวิเคราะห์ประเภทวัตถุบนรูปภาพอัจฉริยะผ่านเทคโนโลยีปัญญาประดิษฐ์",
            whatWeDid: [
              "**การรับไฟล์ภาพระบบอัปโหลด:** รองรับการลากไฟล์และอัปโหลดไฟล์ภาพหลากหลายตระกูล เช่น JPG, JPEG และ PNG",
              "**เครื่องยนต์ตรวจจับและระบุวัตถุ:** ประมวลผลรูปภาพด้วยสมองกลอัจฉริยะเพื่อคัดแยกประเภทวัตถุที่ซ่อนอยู่ในภาพ",
              "**การส่งผลลัพธ์วิเคราะห์เรียลไทม์:** แสดงรายละเอียดการจำแนกประเภทภาพที่ประมวลผลเสร็จได้อย่างทันทีผ่านระบบประมวลผลความเร็วสูง",
              "**จัดลำดับความมั่นใจผลลัพธ์ (Confidence):** นำเสนอผลการคาดคะเนที่มีความน่าจะเป็นสูงสุด 3 อันดับแรก (Top-3) พร้อมค่าความมั่นใจเป็นร้อยละ",
              "**การพัฒนาหน้าจอที่เป็นมิตรกับผู้ใช้งาน:** ออกแบบระบบให้มีหน้าจอเรียบง่าย สะอาดตา และเน้นขั้นตอนอัปโหลดภาพที่กระชับรวดเร็ว"
            ],
            techHighlight: [
              "**พัฒนาการแสดงผลและโครงร่างเว็บแอป:** พัฒนาหน้าตาแอปพลิเคชันอย่างรวดเร็วด้วยไลบรารีเฟรมเวิร์ก [Streamlit](https://streamlit.io/) ภาษา Python",
              "**ผสานขีดความสามารถสมองกลประดิษฐ์ (AI Integration):** นำโครงข่ายประสาทเทียมชนิดลึก [MobileNetV2](https://arxiv.org/abs/1801.04368) บน [TensorFlow](https://www.tensorflow.org/) มารับหน้าที่หลักในการคัดแยกภาพวัตถุทั่วไป",
              "**ออกแบบชุดกระบวนการเตรียมภาพก่อนเข้าโมเดล:** เขียนระบบย่อ/ขยายความละเอียดรูปภาพ ปรับทิศทางพิกเซลให้พร้อมก่อนยิงวิเคราะห์เพื่อความแม่นยำสูงสูด",
              "**แสดงแผนภูมิแท่งประเมินผลความมั่นใจ:** พัฒนาการแสดงผลค่าเปอร์เซ็นต์ความมั่นใจของแต่ละอันดับในรูปของแถบวัดความคืบหน้า (Progress bar) เพื่อให้เข้าใจง่ายทางสถิติ",
              "**สร้างอินเทอร์เฟซผู้ใช้ที่เรียบง่าย:** ออกแบบให้มีเครื่องมือพรีวิวรูปภาพที่อัปโหลดและกรอบกล่องสำหรับแสดงผลการตัดสินใจของ AI แยกสัดส่วนชัดเจน",
              "**การควบคุมสภาพแวดล้อมและจัดการตัวแปร:** จัดการดูแลเวอร์ชันของแพ็กเกจสมองกลและตัวแปรเสริมของ Python ให้เสถียรบนระบบปฏิบัติการ"
            ]
          }
        },
        {
          id: 7,
          title: "Image Captioning Application",
          description: "แอปพลิเคชันบนเว็บไซต์ที่ทำหน้าที่สร้างคำบรรยายสำหรับรูปภาพโดยอัตโนมัติ โดยการผสานการเรียนรู้เชิงลึก (Deep Learning) และระบบคอมพิวเตอร์วิทัศน์ (Computer Vision) สมาชิกลากไฟล์อัปโหลดหรือระบุลิงก์รูปภาพเพื่อให้ AI คิดคำอธิบายภาพออกมาทันที",
          details: {
            subtitle: "ระบบการสร้างคำอธิบายภาพและระบุรายละเอียดการทำกิจกรรมบนรูปภาพอัตโนมัติผ่านแบบจำลองสมองกลปัญญาประดิษฐ์เชิงลึก",
            whatWeDid: [
              "**ระบบบรรยายรายละเอียดรูปภาพอัจฉริยะ:** นำปัญญาประดิษฐ์มาประมวลผลพฤติกรรมบนภาพแล้วเรียบเรียงออกมาเป็นภาษาอธิบายอัตโนมัติ",
              "**อัปโหลดภาพจากเครื่องคอมพิวเตอร์:** สมาชิกสามารถเลือกนำเข้าภาพถ่ายส่วนบุคคลจากพื้นที่จัดเก็บในเครื่องของตนเองเข้าสู่ระบบ",
              "**วิเคราะห์จากที่อยู่ลิงก์รูปภาพ (URL):** ระบบสามารถดึงภาพจากแหล่งที่อยู่อินเทอร์เน็ตสาธารณะภายนอกมาวิเคราะห์ได้โดยตรง",
              "**การประมวลผลคำบรรยายความเร็วสูง:** ประมวลผลและออกผลลัพธ์คำอธิบายภาษาอังกฤษได้ในเวลาไม่กี่วินาที",
              "**ระบบดูตัวอย่างภาพถ่าย:** แสดงภาพถ่ายจำลองในกล่องพรีวิวก่อนที่ผู้ใช้งานจะกดส่งให้แบบจำลอง AI วิเคราะห์จริง",
              "**อินเทอร์เฟซตอบสนองดีเยี่ยม:** การแสดงหน้าจอแอปพลิเคชันอย่างสวยงามบนทุกระบบคอมพิวเตอร์พกพาด้วยดีไซน์โมเดิร์น",
              "**ใช้ระบบการประมวลผลคอมพิวเตอร์วิทัศน์:** ประยุกต์ตรรกะประเมินรูปร่าง แสงเงา และความสัมพันธ์บนภาพด้วยวิทยาการคอมพิวเตอร์วิทัศน์ขั้นสูง",
              "**สถาปัตยกรรมแลกเปลี่ยนข้อมูลผ่าน APIs:** รองรับการเชื่อมเซิร์ฟเวอร์ย่อยในการส่งคำขอบรรยายรูปภาพผ่านระบบโปรโตคอล API"
            ],
            techHighlight: [
              "**ติดตั้งโมเดลสร้างคำบรรยายสมองกลคลาวด์:** นำโมเดลเข้าใจภาษาเชิงลึกชั้นนำอย่าง [BLIP (Salesforce/blip-image-captioning-base)](https://huggingface.co/Salesforce/blip-image-captioning-base) ของค่าย Hugging Face มาเชื่อมโยงใช้งานในโปรเจกต์",
              "**พัฒนาสถาปัตยกรรมระบบเชื่อม API:** ออกแบบและเขียนสคริปต์ [FastAPI](https://fastapi.tiangolo.com/) ของภาษา Python ขึ้นมารับคำขออัปโหลดภาพและตอบกลับคำอธิบายในรูปประโยคแบบเรียลไทม์",
              "**ติดตั้งกระบวนการแปลงรหัสรูปภาพ:** ใช้คลังเครื่องมือประมวลผลยอดนิยมอย่าง [PIL](https://pillow.readthedocs.io/en/stable/) และไลบรารี [Transformers](https://huggingface.co/docs/transformers/index) เพื่อกรองข้อมูลภาพให้โมเดลประเมินได้อย่างลื่นไหล",
              "**ออกแบบหน้าอินเทอร์เฟซโปรแกรมหลัก:** พัฒนาการแสดงผลหน้าต่างโปรแกรมประยุกต์เชิงโต้ตอบในซอฟต์แวร์ [MATLAB](https://www.mathworks.com/products/matlab.html) สำหรับสั่งงานอัปโหลดและแสดงผลรูปภาพพร้อมประโยค",
              "**พัฒนาการรับส่งรูปภาพผ่านเครือข่าย:** พัฒนาระบบดึงพิกเซลข้อมูลรูปภาพผ่าน URL เครือข่ายสาธารณะ พร้อมพิกัดตัวอย่างสำหรับทดลองสแกน",
              "**การเชื่อมสะพานข้อมูลหน้าบ้าน-หลังบ้าน:** พัฒนาระบบส่งผ่านข้อมูลมีเดียจากหน้าต่างควบคุม MATLAB ไปยังฝั่งเซิร์ฟเวอร์ประมวลผลหลักของ Python ด้วยการเรียกแบบ HTTP Post Request",
              "**สร้างตัวบ่งชี้การโหลดข้อมูล:** ติดตั้งแอนิเมชันแถบรอกระบวนการวิเคราะห์ภาพ (Spinner) เพื่อให้ผู้ใช้ทราบขั้นตอนการคำนวณและลดการยกเลิกคำขอระหว่างคำนวณ",
              "**การทดสอบความลื่นไหลของระบบยิงข้ามแพลตฟอร์ม:** ร่วมทำขั้นตอนตรวจสอบการไหลและพฤติกรรมข้อมูลข้อความ พร้อมแก้ไขปัญหาโค้ดการแปลงไฟล์มีเดียให้ตรงมาตรฐานของสองระบบคอมพิวเตอร์"
            ]
          }
        }
      ]
    },
    // Experience
    experience: {
      title: "ประสบการณ์ & การศึกษา",
      evidence: "หลักฐานพิกัดสถานที่จริง",
      list: [
        {
          id: 1,
          title: "นักศึกษาฝึกงาน - การไฟฟ้าส่วนภูมิภาค (PEA สำนักงานใหญ่)",
          company: "กฟภ. สำนักงานใหญ่, กรุงเทพมหานคร, ประเทศไทย",
          date: "ม.ค. 2026 - พ.ค. 2026",
          description: "ทำการอัปเดตและปรับโครงสร้างโค้ดดั้งเดิมของแอปพลิเคชันมือถือภายในของ กฟภ. เพื่อให้พร้อมสำหรับการเผยแพร่ขึ้นสู่ App Store ได้สำเร็จ พร้อมทั้งปรับปรุงเส้นทางเชื่อมต่อ API ต่างๆ ให้ทันสมัย, เขียนฟังก์ชันระบบงานเพิ่มเติม และร่วมทำสอบระบบดีบักตรวจสอบการทำงานเพื่อความเสถียรและประสิทธิภาพสูงสุด",
          caption: "กิจกรรมระหว่างฝึกงาน ณ สำนักงานใหญ่ กฟภ. กรุงเทพฯ"
        },
        {
          id: 4,
          title: "ปริญญาตรี วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)",
          company: "มหาวิทยาลัยแม่ฟ้าหลวง, เชียงราย, ประเทศไทย",
          date: "ส.ค. 2022 - พ.ค. 2026",
          description: "สาขาวิชาวิศวกรรมคอมพิวเตอร์ สำนักวิชาวิศวกรรมศาสตร์, เกรดเฉลี่ยสะสม (GPAX) 3.87 โดยมุ่งเน้นศึกษาเชิงลึกด้านวิศวกรรมซอฟต์แวร์และการพัฒนาระบบเทคโนโลยีสารสนเทศขนาดใหญ่",
          caption: "บรรยากาศภายในมหาวิทยาลัยแม่ฟ้าหลวง จ.เชียงราย"
        },
        {
          id: 5,
          title: "มัธยมศึกษาตอนปลาย (แผนการเรียนวิทย์-คณิต)",
          company: "โรงเรียนชลราษฎรอำรุง, ชลบุรี, ประเทศไทย",
          date: "ม.ค. 2019 - ก.พ. 2022",
          description: "สำเร็จการศึกษาระดับมัธยมศึกษาตอนปลายด้วยเกรดเฉลี่ยสะสม (GPAX) 3.63",
          caption: "โรงเรียนชลราษฎรอำรุง อำเภอเมืองชลบุรี จังหวัดชลบุรี"
        }
      ]
    },
    // Contact
    contact: {
      title: "ติดต่อฉัน",
      heading: "ข้อมูลติดต่อ",
      intro: "พร้อมเปิดรับโอกาสทำงานเต็มเวลาในตำแหน่ง Frontend, Full-stack และผู้พัฒนาระบบเว็บหรือแอปพลิเคชันบนสมาร์ตโฟน",
      labels: {
        gmail: "Gmail",
        phone: "เบอร์โทรศัพท์",
        address: "ที่อยู่ติดต่อ",
        github: "GitHub",
        facebook: "Facebook",
        line: "LINE"
      }
    },
    // Footer
    footer: {
      rights: "สงวนลิขสิทธิ์ทั้งหมด",
      designed: "ออกแบบและสร้างสรรค์ขึ้นด้วย React, TypeScript & Premium Vanilla CSS"
    },
    // Loader
    loader: {
      loading: "กำลังโหลด"
    }
  }
};
