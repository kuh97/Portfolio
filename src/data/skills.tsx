import { SkillsData } from "@/types";
import Image from "next/image";

const ICONS = {
  CSS: (
    <Image alt={"CSS Icon"} height={36} src={"/asserts/CSS.svg"} width={36} />
  ),
  FIGMA: (
    <Image
      alt={"Figma Icon"}
      height={36}
      src={"/asserts/Figma.svg"}
      width={36}
    />
  ),
  GITHUB: (
    <Image
      alt={"GitHub Icon"}
      height={36}
      src={"/asserts/GitHub.svg"}
      width={36}
    />
  ),
  GITLAB: (
    <Image
      alt={"GitLab Icon"}
      height={36}
      src={"/asserts/GitLab.svg"}
      width={36}
    />
  ),
  HTML: (
    <Image alt={"HTML Icon"} height={36} src={"/asserts/HTML.svg"} width={36} />
  ),
  JAVA: (
    <Image alt={"Java Icon"} height={36} src={"/asserts/Java.svg"} width={36} />
  ),
  JAVASCRIPT: (
    <Image
      alt={"JavaScript Icon"}
      height={36}
      src={"/asserts/JavaScript.svg"}
      width={36}
    />
  ),
  NEXTJS: (
    <Image
      alt={"NextJS Icon"}
      height={36}
      src={"/asserts/NextJS.svg"}
      width={36}
    />
  ),
  REACT: (
    <Image
      alt={"React Icon"}
      height={36}
      src={"/asserts/React.svg"}
      width={36}
    />
  ),
  TAILWIND: (
    <Image
      alt={"TailwindCSS Icon"}
      height={36}
      src={"/asserts/TailwindCSS.svg"}
      width={36}
    />
  ),
  TYPESCRIPT: (
    <Image
      alt={"TypeScript Icon"}
      height={36}
      src={"/asserts/TypeScript.svg"}
      width={36}
    />
  ),
  VERCEL: (
    <Image
      alt={"Vercel Icon"}
      height={36}
      src={"/asserts/Vercel.svg"}
      width={36}
    />
  ),
  ZUSTAND: (
    <Image
      alt={"Zustnad Icon"}
      height={36}
      src={"/asserts/Zustand.png"}
      width={36}
    />
  ),
  ORACLE: (
    <Image
      alt={"Oracle Icon"}
      height={36}
      src={"/asserts/Oracle.svg"}
      width={36}
    />
  ),
  SLACK: (
    <Image
      alt={"Slack Icon"}
      height={36}
      src={"/asserts/Slack.svg"}
      width={36}
    />
  ),
  MOBX: (
    <Image alt={"MobX Icon"} height={36} src={"/asserts/MobX.svg"} width={36} />
  ),
  JEST: (
    <Image alt={"Jest Icon"} height={36} src={"/asserts/Jest.svg"} width={36} />
  ),
  TIBERO: (
    <Image
      alt={"Tibero Icon"}
      height={36}
      src={"/asserts/Tibero.svg"}
      width={36}
    />
  ),
};

export const skills: SkillsData = {
  All: [],
  Frontend: [
    { id: 1, name: "JavaScript", icon: ICONS.JAVASCRIPT },
    { id: 2, name: "TypeScript", icon: ICONS.TYPESCRIPT },
    { id: 3, name: "HTML5", icon: ICONS.HTML },
    { id: 4, name: "CSS", icon: ICONS.CSS },
    { id: 5, name: "React", icon: ICONS.REACT },
    { id: 6, name: "Next.js", icon: ICONS.NEXTJS },
    { id: 7, name: "Tailwind", icon: ICONS.TAILWIND },
    { id: 8, name: "Mobx", icon: ICONS.MOBX },
    { id: 9, name: "Zustand", icon: ICONS.ZUSTAND },
    { id: 18, name: "Jest", icon: ICONS.JEST },
  ],
  Backend: [{ id: 10, name: "Java", icon: ICONS.JAVA }],
  Database: [
    { id: 11, name: "Tibero", icon: ICONS.TIBERO },
    { id: 12, name: "Oracle", icon: ICONS.ORACLE },
  ],
  Others: [
    { id: 13, name: "GitHub", icon: ICONS.GITHUB },
    { id: 14, name: "GitLab", icon: ICONS.GITLAB },
    { id: 15, name: "Figma", icon: ICONS.FIGMA },
    { id: 16, name: "Slack", icon: ICONS.SLACK },
    { id: 17, name: "Vercel", icon: ICONS.VERCEL },
  ],
};
