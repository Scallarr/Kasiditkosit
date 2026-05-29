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
import imagecaptioning from '../assets/image_captioning.png'
import mfureport from '../assets/Final_Report_MFU_Food_Guide_and_Review_Application.pdf'


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

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'PEA LIFE Application',
      role: 'Front-end Development',
      description:
        'An internal digital platform for Provincial Electricity Authority (PEA) personnel across Thailand, supporting employee management, online leave requests, travel authorization, and welfare services.',
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
      details: {
        subtitle:
          'Customer service and privilege management application for Provincial Electricity Authority (PEA) customers across Thailand',
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
      role: 'Front-end Development',
      description:
        'A digital platform developed for Provincial Electricity Authority (PEA) business customers, providing convenient access to important information, online services, and request tracking in one centralized system to enhance user experience and service efficiency.',
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
      role: 'Full-stack Development',
      location: 'MFU',
      description:
        'A mobile application for Mae Fah Luang University (MFU) students and staff to discover restaurants, explore menus, write reviews, and interact with AI-powered chatbot, content moderation, and community features within the university',
      tech: [
        '🎯 Dart',
        '⚡ Node.js',
        '🖌️ Figma',

        '🛡️ Perspective API',

        '☁️ Render Server',
        '📸 Cloudinary',
        '🗄️ MySQL',
        '🔐 Google OAuth   Authentication'
        ,



      ],

      image: mfufoodguide,
      github: 'https://github.com/Scallarr/MFU_FOOD_GUIDE_REVIEW',
      figma: 'https://www.figma.com/design/HQAn8H8CkwZOLRRJBbIV3Y/MFU-Food-Guide---Review-Application?node-id=0-1&p=f',
      report: mfureport,
      details: {
        subtitle: 'Restaurant recommendation and food review application for Mae Fah Luang University (MFU) students and staff',
        whatWeDid: [
          '**Authentication, Session & Role Management:** Secure login system with session handling and role-based access control for Guest, User, and Admin roles.',
          '**Restaurant Discovery & Recommendation:** Browse, search, filter, and explore restaurants within the university through categorized listings and recommendation features.',
          '**Review & Rating System:** Create, view, and manage restaurant reviews with multi-category rating systems to support user decision-making.',
          '**Community Threads & Social Interaction:** Community discussion system for posting questions, sharing opinions, and replying to other users, integrated with AI-powered inappropriate language detection and content filtering.',
          '**Leaderboard & Engagement System:** User ranking and engagement features designed to encourage participation and community interaction within the application.',
          '**Analytics Dashboard & Insights:** Dashboard for displaying restaurant statistics, review scores, and analytical insights for monitoring overall platform activity.',
          '**User Profile & Personalization:** Manage user profiles, profile images, and personal account information within the application.',

          '**AI Assistant Integration (Atlas/Nexus):** Dual-mode AI assistant designed to provide recommendations, answer questions, and support users based on different usage contexts.',

          '**Admin Management Suite:** Administrative tools for managing restaurants, menus, reviews, users, and backend system configurations.',

          '**Account Restriction Handling:** Account moderation system for handling user restrictions, bans, unban scheduling, and access control management.'

        ],

        techHighlight: [
          '**Authentication, Session & Role Management:** Implemented secure authentication and persistent session handling using [JWT](https://jwt.io/) and [shared_preferences](https://pub.dev/packages/shared_preferences), including token-based API access, login state persistence, and role-aware navigation flows.',

          '**Mobile UI/UX & Frontend Development:** Designed and developed responsive multi-screen mobile interfaces with [Flutter](https://flutter.dev) and Dart for User and Admin experiences, covering restaurant discovery, dashboards, reviews, discussion threads, profile management, and AI chat modules.',

          '**Backend Integration & API Workflow:** Integrated Flutter modules with [RESTful APIs](https://restfulapi.net/) powered by [Node.js](https://nodejs.org/) to support restaurant management, review workflows, thread interactions, account moderation, profile handling, and admin operations.',

          '**Database & Data Workflow Management:** Managed relational database operations in [MySQL](https://www.mysql.com/) for restaurant records, review states, user activity tracking, moderation history, ratings, and API-driven transactional workflows.',

          '**AI Assistant Integration (Atlas & Nexus):** Built dual-assistant AI experiences by integrating external LLM services such as [Cohere](https://cohere.com/) for general assistance (Atlas) and application-context guidance (Nexus), including conversational UI states, typing indicators, and assistant switching workflows.',

          '**Restaurant Discovery, Search & Rating Experience:** Developed restaurant search, filtering, sorting, category segmentation, and detailed rating systems (overall, hygiene, flavor, service) to improve restaurant discoverability and user decision support.',

          '**Community, Review & Engagement Features:** Implemented review, thread, and reply systems to support user interaction, community engagement, content visibility, and admin moderation workflows within the platform.',
          '**Content Safety & Toxic Language Detection:** Integrated [Perspective API](https://developers.perspectiveapi.com/) for real-time toxicity/profanity detection in user-generated text (e.g., reviews and threads), enabling safer community interactions and moderation support.',
          '**Analytics Dashboard & Reporting System:** Built dashboard visualizations and reporting interfaces for restaurant statistics, rating distributions, category insights, and operational monitoring for users and administrators.',

          '**Cloud Media Upload & Storage:** Integrated [Cloudinary](https://cloudinary.com/) for cloud-based image upload, storage, and delivery workflows, enabling reusable media assets across restaurant, menu, and user profile modules.',

          '**Image Loading & Performance Optimization:** Optimized image-heavy screens using [cached_network_image](https://pub.dev/packages/cached_network_image), [flutter_cache_manager](https://pub.dev/packages/flutter_cache_manager), and [shimmer](https://pub.dev/packages/shimmer) with retryable loading, caching, and precache strategies for improved performance and user experience.',

          '**Role-Based Access & Moderation System:** Developed role-specific operational flows for Users and Admins, including review approval pipelines, pending content handling, user management, account restriction controls, and ban-status presentation.',

          '**Testing & Debugging:** Conducted API validation, state-flow debugging, and end-to-end functional testing using [Postman](https://www.postman.com/), Flutter debugging tools, and backend response verification to ensure stable cross-module behavior and synchronized data flow.',

          '**Team Collaboration & Version Control:** Collaborated with team members through [GitHub](https://github.com/) using branch-based workflows, feature integration, version control, and coordinated frontend-backend development practices.'
        ]
      },

    },
    {
      id: 4,
      title: 'MFU Movie Assets Application ',
      role: 'Full-stack Development',
      description:
        'A smart mobile application designed for Mae Fah Luang University (MFU) students and staff to search, borrow, and manage movies conveniently anytime and anywhere through a modern and user-friendly digital platform.',
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
      details: {
        subtitle:
          'Movie borrowing and asset management application for Mae Fah Luang University (MFU) students and staff',
        whatWeDid: [
          '**Target Audience:** Platform designed for MFU students, university staff, lecturers, and campus visitors interested in browsing, borrowing, and managing university movie and media assets through a centralized digital platform.',
          '**Authentication & Role-Based Access:** Secure user registration and login system with role-based access control for User, Approver, and Admin.',

          '**Asset Catalog & Discovery:** Browse and explore movie/assets collections with categorized listings, search functionality, and recommended items.',

          '**Borrow Request Workflow:** Allow users to submit borrowing requests and track request status throughout the approval process.',

          '**Approval Management:** Enable approvers to review, verify, approve, or reject borrowing requests through a dedicated workflow system.',

          '**Asset Administration:** Allow administrators to add, edit, manage, and disable movie/assets records and availability status.',

          '**Return & Status Processing:** Manage item return workflows and automatically update borrowing and availability statuses.',

          '**History & Audit Trail:** Record and display borrowing history, approval logs, and activity records for each user role.',

          '**Dashboard & Operational Insights:** Provide dashboard summaries and operational statistics for Admin and Approver management.'
        ],
        techHighlight: [
          '**Authentication & Session Management:** Developed secure authentication and session handling with [JWT](https://jwt.io/) and [shared_preferences](https://pub.dev/packages/shared_preferences) to support login, access control, token persistence, and cross-screen session flow.',

          '**Mobile UI/UX & Frontend Development:** Designed and built responsive mobile interfaces with [Flutter](https://flutter.dev) and Dart, featuring API-driven interactions and user experiences tailored for multiple roles.',

          '**Backend Integration & API Workflow:** Connected Flutter frontend modules with [RESTful APIs](https://nodejs.org/) powered by [Node.js](https://nodejs.org/) to handle borrowing requests, approval workflows, return processing, and transaction tracking.',

          '**Database Management:** Managed relational database operations with [MySQL](https://www.mysql.com/), including SQL queries for asset records, borrow requests, approval updates, return logs, and activity history.',

          '**Asset & Media Handling:** Built media selection and asset presentation features with [file_picker](https://pub.dev/packages/file_picker) and [carousel_slider](https://pub.dev/packages/carousel_slider) for profile customization and featured content displays.',

          '**Role-Based Workflow System:** Developed end-to-end operational workflows for User, Approver, and Admin roles, covering request submission, approval actions, asset administration, return handling, and dashboard visibility.',

          '**Testing & Debugging:** Conducted API validation, debugging, and end-to-end system testing with [Postman](https://www.postman.com/), Flutter debugging tools, and database verification processes to ensure stable functionality and synchronized data flow.',

          '**Team Collaboration & Version Control:** Collaborated with team members through [GitHub](https://github.com/) for source control, branch management, feature integration, and coordinated frontend-backend development.'
        ]
      },
    },
    {
      id: 5,
      title: 'MFU Room Reservation Website',
      role: 'Full-stack Development',
      description: 'A web-based room booking app for MFU students, lecturers, and staff to view room availability, submit and manage booking requests, and handle room schedules with role-based access and daily automated status reset.',
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
      details: {
        subtitle: 'Room reservation and facility management website for Mae Fah Luang University (MFU) students and staff',

        whatWeDid: [
          "**Authentication & Roles:** Role-based login for student, lecturer, and staff",
          "**Room Discovery:** Browse room lists with available time slots",
          "**Booking Workflow:** Submit booking requests and track status (pending/approved/rejected)",
          "**Lecturer Management:** Review and approve/reject student booking requests",
          "**Staff Administration:** Add/edit rooms, upload room images, and enable/disable slots",
          "**History & Reporting:** View user booking history and staff-level activity records",
          "**Automation:** Daily automatic slot status reset "
        ],
        techHighlight: [
          '**Authentication & Session Management:** Developed authentication and session management features using [bcrypt](https://www.npmjs.com/package/bcrypt), [express-session](https://www.npmjs.com/package/express-session), and [connect-flash](https://www.npmjs.com/package/connect-flash) for user registration, login, password encryption, and flash message handling.',

          '**Backend Development:** Designed and developed the backend system using [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/), including routes and business logic to support multi-role room booking workflows.',

          '**Database Management:** Designed and managed the database using [MySQL](https://www.mysql.com/), including writing SQL queries for room booking, request approval, and booking history management.',

          '**UI/UX Design & Frontend Development:** Designed user interface layouts and developed responsive frontend interfaces using [HTML](https://html.com/), [CSS](https://www.w3schools.com/css/), and [Bootstrap](https://getbootstrap.com/) to support role-based user experiences and seamless backend integration.',
          '**File Handling & Upload System:** Implemented room image upload and file management features using [Multer](https://www.npmjs.com/package/multer) and [Path](https://nodejs.org/api/path.html) for staff room management.',

          '**Automation System:** Implemented automation workflows using [node-cron](https://www.npmjs.com/package/node-cron) to automatically reset room slot statuses daily and reduce manual management tasks.',

          '**Testing & Debugging:** Performed system testing and debugging using [Postman](https://www.postman.com/) and [MySQL Workbench](https://www.mysql.com/products/workbench/) to ensure stable end-to-end system functionality.',

          '**Team Collaboration:** Collaborated with team members using [GitHub](https://github.com/) and [Sourcetree](https://www.sourcetreeapp.com/) for version control, code management, and collaborative development workflows.'
        ],

      },
    },
    {
      id: 6,
      title: 'Image Classification Website',
      role: 'AI-Machine learning',
      location: 'MFU',
      description:
        'An AI-powered application that automatically recognizes and classifies objects from uploaded images, providing real-time prediction results with confidence scores.',
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


      details: {
        subtitle: '',
        // subtitle: 'An AI-powered application that automatically recognizes and classifies objects from uploaded images, providing real-time prediction results with confidence scores.',
        whatWeDid: [
          '**Image Upload System:** Supported image uploads in JPG, JPEG, and PNG formats.',

          '**Object Recognition Engine:** Implemented AI-powered object detection and classification.',

          '**Real-Time Prediction:** Generated instant classification results from uploaded images.',

          '**Confidence Ranking:** Displayed Top-3 predictions with confidence scores.',


          '**User Interface Development:** Designed an intuitive and user-friendly application interface.'
        ]
        ,
        techHighlight: ['**Web Application Development:** Developed the image classification web application.',

          '**AI Model Integration:** Integrated the [MobileNetV2](https://arxiv.org/abs/1801.04368) deep learning model for object recognition.',

          '**Prediction Pipeline Development:** Implemented image preprocessing and prediction workflows.',

          '**Result Visualization:** Displayed Top-3 classification results with confidence percentages.',

          '**User Interface Design:** Created a simple and intuitive interface for image uploads and predictions.',

          '**Environment & Dependency Management:** Managed application setup and required libraries.',
        ]
      },
    },
    {
      id: 7,
      title: 'Image Captioning Application',
      role: 'AI-Machine learning',
      location: 'MFU',
      description:
        'A web-based application that automatically generates image captions using deep learning and computer vision. Users can upload images or use image URLs, and the system generates descriptive captions in real time through a simple and user-friendly interface.',
      tech: [
        '🐍 Python',
        '🧠 Deep Learning',
        '📚 TensorFlow',
        '🔢 NumPy',
        '🖼️ Computer Vision',
        '📝 Image Captioning'
      ],
      image: imagecaptioning,
      github: 'https://github.com/Scallarr/Image_captioning',

      details: {
        subtitle: 'AI-powered image classification website for image recognition and machine learning prediction through an interactive web platform',
        whatWeDid: [
          '**Image Caption Generation:** Generate automatic captions from uploaded images using AI.',

          '**Local Image Upload:** Upload images directly from local devices.',

          '**Image URL Loading:** Load and analyze images from external URLs.',

          '**Real-Time AI Processing:** Process images and generate captions instantly.',

          '**Image Preview System:** Preview selected images before analysis.',

          '**User-Friendly Interface:** Simple and responsive web interface for easy interaction.',

          '**Computer Vision Integration:** Utilize deep learning and computer vision technologies.',

          '**API-Based Workflow:** Support API-driven image caption generation and processing.'
        ],
        techHighlight: ['**AI Model Integration:** Integrated the [BLIP image captioning model](https://huggingface.co/Salesforce/blip-image-captioning-base) from Hugging Face for automatic caption generation from uploaded images.',

          '**Backend API Development:** Developed a [Python](https://python.org)  using FastAPI to process image uploads and return AI-generated captions in real time.',

          '**Computer Vision Workflow:** Implemented image preprocessing and caption prediction workflows using [PIL](https://pillow.readthedocs.io/en/stable/), [Transformers](https://huggingface.co/docs/transformers/index), and deep learning-based image understanding.',

          '**Desktop UI Development:** Designed and developed an interactive GUI application in [MATLAB/Octave](https://www.mathworks.com/products/matlab.html) for image upload, preview, and caption visualization.',

          '**Image Upload & URL Processing:** Built support for local image uploads and external image URL loading with real-time preview functionality. ',

          '**Frontend-Backend Communication:** Connected the [MATLAB](https://www.mathworks.com/products/matlab.html) frontend with the Python captioning server using HTTP-based API communication workflows. ',

          '**Real-Time Caption Generation:** Implemented asynchronous caption generation flow with loading states and dynamic caption updates for improved user experience.',

          '**Testing & Debugging:** Performed system testing and debugging for image processing, API communication, and caption response handling across the application workflow.'
        ]
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
                    Responsibilities
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
