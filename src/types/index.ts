export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'AI / ML' | 'Full Stack' | 'Cloud & Systems' | 'Mobile';
  image: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  architecture: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Open Source' | 'Freelance';
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1 to 100
    icon?: string;
    experience: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  highlight: string;
}

export interface GithubDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

