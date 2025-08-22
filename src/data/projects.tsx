import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "No Code / Low Code 백엔드 개발 스튜디오",
    description:
      "비개발자도 비즈니스 요구사항에 맞게 백엔드 서비스를 설계하고, Java 기반 서비스 코드를 자동으로 생성할 수 있는 백엔드 개발 스튜디오입니다.",
    technologies: [
      "React",
      "JavaScript(ES6+)",
      "TypeScript",
      "MobX",
      "React Dnd",
      "Tibero",
      "Java",
      "FreeMarker",
      "Figma",
      "Slack",
      "Google Sheet",
    ],
  },
  {
    id: "2",
    title: "RDBMS 기반 데이터 모델링 설계 플랫폼",
    description:
      "데이터베이스 테이블과 컬럼을 설계하고 이를 기반으로 데이터베이스 구조를 시각적으로 확인할 수 있는 플랫폼입니다.",
    technologies: [
      "React",
      "JavaScript(ES6+)",
      "TypeScript",
      "MobX",
      "React Flow",
      "Jest",
      "React Testing Library",
      "Tibero",
      "Java",
      "Figma",
      "Slack",
    ],
  },
  {
    id: "3",
    title: "프로젝트 관리 시스템",
    description:
      "프로젝트를 관리할 수 있는 시스템입니다. Jira의 기능을 참고하여 개발했습니다.",
    technologies: [
      "React",
      "JavaScript(ES6+)",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Google oauth",
      "react query",
      "tanstack query",
      "vite",
      "mongodb",
    ],
    githubUrl: "https://github.com/kuh97/task-flow",
  },
  {
    id: "4",
    title: "포트폴리오 웹사이트",
    description: "Next.js 기반으로 만든 포트폴리오 웹 사이트입니다.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Framer Motion",
      "React Intersection Observer",
      "Vercel",
      "Google Analytics",
    ],
    image: "/profile.jpg",
    githubUrl: "https://github.com/kuh97/Portfolio",
  },
];
