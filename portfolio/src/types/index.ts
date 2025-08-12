export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
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
};

export const NAVIGATION_ITEMS = [
  { id: "home", label: "홈" },
  { id: "about", label: "소개" },
  { id: "skills", label: "스킬" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
] as const;
