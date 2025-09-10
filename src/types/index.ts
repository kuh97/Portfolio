export interface TaskItem {
  id: string;
  title: string;
  issue: string;
  solutions: string[];
  achievements: string[];
}

export type ProjectType = "Company" | "Team" | "Personal";

export interface ProjectInfo {
  type: ProjectType;
  name: string;
  period: string;
  members?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  info: ProjectInfo | null;
  summary: string;
  descriptions: string[];
  technologies: string[];
  tasks: TaskItem[];
  image?: string | null;
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export interface SkillsData {
  All: Skill[];
  Frontend: Skill[];
  Backend: Skill[];
  Database: Skill[];
  Others: Skill[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin?: string;
  blog?: string;
}

export const NAVIGATION_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

export const SITE_CONFIG = {
  name: "포트폴리오",
  title: "김의현 | 포트폴리오",
  description: "next.js로 만든 개발자 포트폴리오입니다.",
  url: "https://uihyeon-portfolio.vercel.app",
  keywords: [
    "개발자",
    "프론트엔드",
    "프론트엔드 개발자",
    "개발자 포트폴리오",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
};
