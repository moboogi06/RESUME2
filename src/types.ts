export interface Project {
  id: string;
  title: string;
  koreanTitle: string;
  year: string;
  period: string;
  category: 'Riot & Global IP' | 'Major Broadcasts & Sponsorships' | 'Regional & Public Initiatives';
  client: string;
  description: string;
  koreanDescription: string;
  role: string;
  keyDeliverables: string[];
}

export interface WorkExperience {
  company: string;
  koreanCompany: string;
  role: string;
  koreanRole: string;
  period: string;
  bullets: string[];
  koreanBullets: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  koreanInstitution: string;
  degree: string;
  koreanDegree: string;
  period: string;
}

export interface SkillCategory {
  name: string;
  score: number;
  subskills: { name: string; matchReason: string }[];
}

export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  birthYear?: string;
  summary: string;
  experience: WorkExperience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
}
