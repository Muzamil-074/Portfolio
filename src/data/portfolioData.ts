import { Skill, Project, Experience, Education, Certification, Testimonial, Service, SocialLink } from '../types';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
export const personalInfo = {
  name: "Muzamil Dars",
  title: "AI Engineer & Full-Stack Web Developer",
  subTitles: [
    "AI Engineer",
    "Full Stack Web Developer",
    "React Developer",
    "Machine Learning Enthusiast"
  ],
  bio: "Highly skilled AI Engineer and Full-Stack Web Developer with a passion for building intelligent systems and high-performance web applications. Expert in bridging the gap between sophisticated machine learning models and polished, user-centric web interfaces. Committed to writing clean, maintainable code and engineering seamless user experiences.",
  location: "Hyderabad Sindh, Pakistan",
  email: "collabwithmuzamil@gmail.com",
  phone: "+92 3707558916", // Placeholder, easily replaceable
  whatsapp: "https://wa.me/923707558916", // Placeholder whatsapp
  languages: ["English (Professional)", "Urdu (Native)", "Sindhi (Native)"],
  nationality: "Pakistani",
  availability: "Available for Hire",
  freelanceStatus: "Available",
  yearsExperience: 4,
  resumeUrl: "#", // Direct scroll or dummy action
  cvDownloadName: "Muzamil_Dars_CV.pdf",
  profileImage:'/dp.jpg'
};

export const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Experience', target: 'experience' },
  { label: 'Education', target: 'education' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' }
];


export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/Muzamil-074',
    iconName: 'Github',
    color: 'hover:text-white hover:bg-neutral-800'
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muzamil-dars-212b273a9/',
    iconName: 'Linkedin',
    color: 'hover:text-blue-500 hover:bg-blue-950/30'
  },
  {
    id: 'leetcode',
    platform: 'LeetCode',
    url: 'https://leetcode.com/u/Muzamil74/',
    iconName: 'Leetcode',
    color: 'hover:text-yellow-400 hover:bg-yellow-900/20'
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://instagram.com/muzamil__00__',
    iconName: 'Instagram',
    color: 'hover:text-pink-500 hover:bg-pink-900/20'
  },
  {
    id: 'gmail',
    platform: 'Gmail',
    url: 'mailto:collabwithmuzamil@gmail.com',
    iconName: 'Mail',
    color: 'hover:text-red-500 hover:bg-red-900/20'
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    url: 'https://wa.me/923707558916',
    iconName: 'MessageSquare',
    color: 'hover:text-green-500 hover:bg-green-950/30'
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: 'html', name: 'HTML5', level: 95, yearsExp: 4, category: 'Frontend', iconName: 'Code' },
  { id: 'css', name: 'CSS3', level: 90, yearsExp: 4, category: 'Frontend', iconName: 'Layers' },
  { id: 'js', name: 'JavaScript', level: 95, yearsExp: 4, category: 'Frontend', iconName: 'Code' },
  { id: 'ts', name: 'TypeScript', level: 88, yearsExp: 3, category: 'Frontend', iconName: 'Code' },
  { id: 'react', name: 'React.js', level: 92, yearsExp: 3, category: 'Frontend', iconName: 'Atom' },
  { id: 'next', name: 'Next.js', level: 85, yearsExp: 2, category: 'Frontend', iconName: 'ArrowRight' },
  { id: 'tailwind', name: 'Tailwind CSS', level: 95, yearsExp: 3, category: 'Frontend', iconName: 'Palette' },
  { id: 'bootstrap', name: 'Bootstrap', level: 85, yearsExp: 4, category: 'Frontend', iconName: 'Grid' },

  // Backend
  { id: 'node', name: 'Node.js', level: 88, yearsExp: 3, category: 'Backend', iconName: 'Cpu' },
  { id: 'express', name: 'Express.js', level: 90, yearsExp: 3, category: 'Backend', iconName: 'Terminal' },
  { id: 'rest', name: 'REST APIs', level: 92, yearsExp: 3, category: 'Backend', iconName: 'Network' },

  // Database
  { id: 'mongodb', name: 'MongoDB', level: 85, yearsExp: 3, category: 'Database', iconName: 'Database' },
  { id: 'firebase', name: 'Firebase', level: 88, yearsExp: 3, category: 'Database', iconName: 'Flame' },
  { id: 'mysql', name: 'MySQL', level: 82, yearsExp: 4, category: 'Database', iconName: 'Database' },

  // Programming
  { id: 'python', name: 'Python', level: 92, yearsExp: 4, category: 'Programming', iconName: 'Terminal' },
  { id: 'cpp', name: 'C++', level: 75, yearsExp: 3, category: 'Programming', iconName: 'Terminal' },
  { id: 'java', name: 'Java', level: 78, yearsExp: 3, category: 'Programming', iconName: 'Coffee' },

  // AI / ML
  { id: 'tensorflow', name: 'TensorFlow', level: 85, yearsExp: 2, category: 'AI / ML', iconName: 'Brain' },
  { id: 'pytorch', name: 'PyTorch', level: 80, yearsExp: 2, category: 'AI / ML', iconName: 'Cpu' },
  { id: 'scikit', name: 'Scikit-learn', level: 88, yearsExp: 3, category: 'AI / ML', iconName: 'Binary' },
  { id: 'opencv', name: 'OpenCV', level: 82, yearsExp: 2, category: 'AI / ML', iconName: 'Eye' },
  { id: 'pandas', name: 'Pandas', level: 90, yearsExp: 3, category: 'AI / ML', iconName: 'Table' },
  { id: 'numpy', name: 'NumPy', level: 90, yearsExp: 3, category: 'AI / ML', iconName: 'Hash' },
  { id: 'langchain', name: 'LangChain', level: 86, yearsExp: 1, category: 'AI / ML', iconName: 'Link' },
  { id: 'openai', name: 'OpenAI API', level: 92, yearsExp: 2, category: 'AI / ML', iconName: 'Sparkles' },

  // Tools
  { id: 'git', name: 'Git', level: 90, yearsExp: 4, category: 'Tools', iconName: 'GitBranch' },
  { id: 'github', name: 'GitHub', level: 92, yearsExp: 4, category: 'Tools', iconName: 'Github' },
  { id: 'docker', name: 'Docker', level: 80, yearsExp: 2, category: 'Tools', iconName: 'Container' },
  { id: 'postman', name: 'Postman', level: 88, yearsExp: 3, category: 'Tools', iconName: 'Send' },
  { id: 'vscode', name: 'VS Code', level: 95, yearsExp: 4, category: 'Tools', iconName: 'Layers' },
  { id: 'linux', name: 'Linux', level: 85, yearsExp: 3, category: 'Tools', iconName: 'Terminal' }
];

// export const services: Service[] = [
//   {
//     id: 'ai-dev',
//     title: 'AI Development',
//     description: 'Engineering specialized LLM pipelines, autonomous agents, and smart features powered by Gemini API, OpenAI, and LangChain.',
//     iconName: 'Sparkles',
//     animationDelay: 0.1
//   },
//   {
//     id: 'ml-eng',
//     title: 'Machine Learning Solutions',
//     description: 'Designing and deploying predictive models, regression pipelines, neural networks, and computer vision systems using TensorFlow & PyTorch.',
//     iconName: 'Brain',
//     animationDelay: 0.2
//   },
//   {
//     id: 'react-dev',
//     title: 'Premium React Apps',
//     description: 'Crafting pixel-perfect, highly responsive Single Page Applications (SPAs) styled with Tailwind CSS and brought to life with Framer Motion animations.',
//     iconName: 'Atom',
//     animationDelay: 0.3
//   },
//   {
//     id: 'fullstack',
//     title: 'Full Stack Engineering',
//     description: 'Building modern, reliable end-to-end architectures utilizing the MERN stack (MongoDB, Express, React, Node.js) with strict type safety.',
//     iconName: 'Layers',
//     animationDelay: 0.4
//   },
//   {
//     id: 'rest-api',
//     title: 'REST API Design',
//     description: 'Architecting fast, secure, and fully documented REST and GraphQL microservices with robust error handling and JWT-based authentication.',
//     iconName: 'Network',
//     animationDelay: 0.5
//   },
//   {
//     id: 'ui-ux',
//     title: 'UI/UX Interactive Design',
//     description: 'Bridging technical capabilities with elegant interfaces designed following the highest Apple, Vercel, and Stripe design criteria.',
//     iconName: 'Eye',
//     animationDelay: 0.6
//   },
//   {
//     id: 'automation',
//     title: 'Workflow Automation',
//     description: 'Writing high-performance custom scripts, cron jobs, and web scrapers in Python or Node.js to eliminate repetitive actions and manual tasks.',
//     iconName: 'Cpu',
//     animationDelay: 0.7
//   }
// ];

export const projects: Project[] = [
  {
  id: 'proj-1',
  title: 'MedInsight-Web-App',
  description: 'A modern AI-powered healthcare web application that helps users access medical information through an intuitive interface. The platform combines intelligent features with a responsive design to provide a seamless experience for exploring health insights, managing medical data, and improving healthcare accessibility.',
  image: '/Project_1.jpg',
  techStack: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'AI Integration'
  ],
  features: [
    'AI-powered medical insights and healthcare assistance',
    'Responsive and modern user interface with Tailwind CSS',
    'Secure authentication and user management',
    'Medical information dashboard with interactive components',
    'Fast and scalable full-stack architecture',
    'Optimized performance with responsive design'
  ],
  githubUrl: 'https://github.com/Muzamil-074/MedInsight-Web-App-Project',
  liveUrl: 'https://med-insight-web-app-project.vercel.app/',
  category: 'AI'
}
];
export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Freelance & Personal Projects',
    role: 'Web Developer',
    duration: '2022 - 2024',
    responsibilities: [
      'Developed responsive and modern web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.',
      'Built full-stack applications with Node.js, Express.js, and MongoDB.',
      'Designed clean, user-friendly interfaces with a focus on performance and responsive design.',
      'Integrated REST APIs and implemented authentication and database management.'
    ],
    technologies: [
      'React',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Git',
      'GitHub'
    ],
    achievements: [
      'Successfully completed multiple real-world web development projects.',
      'Built scalable and responsive full-stack applications following modern development practices.'
    ],
    logoText: 'WD'
  },
  {
    id: 'exp-2',
    company: 'AI & Machine Learning Projects',
    role: 'AI & Machine Learning Developer',
    duration: '2024 - Present',
    responsibilities: [
      'Developing AI-powered web applications using modern machine learning technologies.',
      'Building intelligent applications by integrating Generative AI APIs and Large Language Models (LLMs).',
      'Working on machine learning, deep learning, computer vision, and natural language processing projects.',
      'Creating end-to-end AI solutions with Python, TensorFlow, Scikit-learn, and modern AI frameworks.'
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'Pandas',
      'NumPy',
      'LangChain',
      'Gemini API',
      'React',
      'Node.js'
    ],
    achievements: [
      'Developed multiple AI-powered applications integrating machine learning models.',
      'Built intelligent healthcare and automation projects using modern AI technologies.'
    ],
    logoText: 'AI'
  }
];

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Engineering in Software Engineering',
    university: 'Mehran University of Engineering and Technology (MUET), Jamshoro',
    year: '2023 - 2027',
    cgpa: '3.70 / 4.00',
    coursework: [
      'Software Engineering',
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Systems',
      'Web Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Operating Systems',
      'Computer Networks',
      'Software Project Management'
    ],
    achievements: [
      ''
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google AI Essentials',
    issuer: 'Google (Coursera)',
    date: 'December 25, 2025',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/HZ9T8OAFGR6J',
    image: '/Google_Ai.jpeg'
  },
  {
    id: 'cert-2',
    title: 'Backend',
    issuer: 'Udemy',
    date: 'May 16 2024',
    credentialUrl: 'https://www.udemy.com/certificate/UC-36abcda0-561b-4ecb-aa3d-898b4e54443c/',
    image: '/nodejs.jpg'
  },
  {
    id: 'cert-3',
    title: ' Complete Full Stack Web-development',
    issuer: 'Udemy',
    date: 'May 16 2024',
    credentialUrl: 'https://www.udemy.com/certificate/UC-79c9111f-5da1-4302-a509-74f2dda13ab9/',
    image: '/full_stack.jpg'
  },
];

export const gitHubStatsMock = {
  username: "Muzamil-074",
  totalContributions: 624,
  followers: 11,
  repositories: 8,
  stars: 8,
  mostUsedLanguages: [
    { name: 'JavaScript', percentage: 52, color: '#f1e05a' },
    { name: 'HTML & CSS', percentage: 24, color: '#e34c26' },
    { name: 'TypeScript', percentage: 16, color: '#3178c6' },
    { name: 'C++', percentage: 8, color: '#f34b7d' }
  ],
  pinnedRepos: [
    { name: 'MedInsight-Web-App-Project', stars: 12, forks: 3, description: 'Medicine Insight Web Application. A complete MERN stack medical assistance platform with interactive symptom analysis and clinical database lookups.', language: 'JavaScript' },
  ]
};
