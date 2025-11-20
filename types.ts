export interface Project {
  title: string;
  description: string;
  techStack: string[];
  type: 'Work' | 'Independent' | 'Academic';
  link?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  about: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    phone: string;
    location: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
}

export enum SectionId {
  HERO = 'hero',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}
