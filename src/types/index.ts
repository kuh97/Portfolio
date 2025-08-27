import { JSX } from "react";

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
  info: ProjectInfo;
  summary: string;
  descriptions: string[];
  technologies: string[];
  tasks: TaskItem[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: JSX.Element | "";
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

export const CONTACT_INFO: ContactInfo = {
  email: "rladml91gus@naver.com",
  phone: "010-8310-8853",
  github: "https://github.com/kuh97",
  linkedin:
    "https://www.linkedin.com/in/%EC%9D%98%ED%98%84-%EA%B9%80-64b608335/",
  blog: "https://kuh97.tistory.com/",
};

export const NAVIGATION_ITEMS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

export const SITE_CONFIG = {
  name: "포트폴리오",
  title: "개발자 포트폴리오",
  description: "next.js로 만든 개발자 포트폴리오입니다.",
  url: "https://domain.com", // 추후 변경
  keywords: [
    "개발자",
    "포트폴리오",
    "프론트엔드",
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
  ],
};
