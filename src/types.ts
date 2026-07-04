export interface Skill {
  id: string;
  name: string;
  level: number; // percentage (0-100)
  yearsExp: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'AI / ML' | 'Tools';
  iconName: string; // key of lucide-react or similar
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'AI' | 'Web' | 'React' | 'Python' | 'Machine Learning' | 'Node';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  logoText: string;
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  year: string;
  cgpa: string;
  coursework: string[];
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  photoUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  animationDelay: number;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  iconName: string;
  color: string;
}
