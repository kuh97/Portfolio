import { SkillsData } from "@/types";
import Image from "next/image";

const ICONS = {
  CSS: (
    <Image src={"/asserts/CSS.svg"} alt={"CSS Icon"} width={36} height={36} />
  ),
  FIGMA: (
    <Image
      src={"/asserts/Figma.svg"}
      alt={"Figma Icon"}
      width={36}
      height={36}
    />
  ),
  GITHUB: (
    <Image
      src={"/asserts/GitHub.svg"}
      alt={"GitHub Icon"}
      width={36}
      height={36}
    />
  ),
  GITLAB: (
    <Image
      src={"/asserts/GitLab.svg"}
      alt={"GitLab Icon"}
      width={36}
      height={36}
    />
  ),
  HTML: (
    <Image src={"/asserts/HTML.svg"} alt={"HTML Icon"} width={36} height={36} />
  ),
  JAVA: (
    <Image src={"/asserts/Java.svg"} alt={"Java Icon"} width={36} height={36} />
  ),
  JAVASCRIPT: (
    <Image
      src={"/asserts/JavaScript.svg"}
      alt={"JavaScript Icon"}
      width={36}
      height={36}
    />
  ),
  NEXTJS: (
    <Image
      src={"/asserts/NextJS.svg"}
      alt={"NextJS Icon"}
      width={36}
      height={36}
    />
  ),
  REACT: (
    <Image
      src={"/asserts/React.svg"}
      alt={"React Icon"}
      width={36}
      height={36}
    />
  ),
  TAILWIND: (
    <Image
      src={"/asserts/TailwindCSS.svg"}
      alt={"TailwindCSS Icon"}
      width={36}
      height={36}
    />
  ),
  TYPESCRIPT: (
    <Image
      src={"/asserts/TypeScript.svg"}
      alt={"TypeScript Icon"}
      width={36}
      height={36}
    />
  ),
  VERCEL: (
    <Image
      src={"/asserts/Vercel.svg"}
      alt={"Vercel Icon"}
      width={36}
      height={36}
    />
  ),
  ZUSTAND: (
    <Image
      src={"/asserts/Zustand.png"}
      alt={"Zustnad Icon"}
      width={36}
      height={36}
    />
  ),
  ORACLE: (
    <Image
      src={"/asserts/Oracle.svg"}
      alt={"Oracle Icon"}
      width={36}
      height={36}
    />
  ),
  SLACK: (
    <Image
      src={"/asserts/Slack.svg"}
      alt={"Slack Icon"}
      width={36}
      height={36}
    />
  ),
  MOBX: (
    <Image src={"/asserts/MobX.svg"} alt={"MobX Icon"} width={36} height={36} />
  ),
  JEST: (
    <Image src={"/asserts/Jest.svg"} alt={"Jest Icon"} width={36} height={36} />
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
    { id: 11, name: "Tibero", icon: "" },
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
