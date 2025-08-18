import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaGithub,
  FaSlack,
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoFigma } from "react-icons/bi";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiBearSmileFill,
} from "react-icons/ri";
import { SiMobx, SiOracle, SiVercel } from "react-icons/si";
import { AiFillGitlab } from "react-icons/ai";
import { SkillsData } from "@/types";

export const skills: SkillsData = {
  Frontend: [
    {
      id: 1,
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-yellow-400" />,
    },
    {
      id: 2,
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-blue-500" />,
    },
    { id: 3, name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { id: 4, name: "CSS", icon: <FaCss3 className="text-blue-500" /> },
    { id: 5, name: "React", icon: <FaReact className="text-cyan-400" /> },
    {
      id: 6,
      name: "Next.js",
      icon: <RiNextjsFill className="text-black dark:text-white" />,
    },
    {
      id: 7,
      name: "Tailwind",
      icon: <RiTailwindCssFill className="text-cyan-500" />,
    },
    { id: 8, name: "Mobx", icon: <SiMobx className="text-orange-500" /> },
    {
      id: 9,
      name: "Zustand",
      icon: <RiBearSmileFill className="text-amber-700" />,
    },
  ],
  Backend: [
    { id: 10, name: "Java", icon: <FaJava className="text-red-500" /> },
  ],
  Database: [
    {
      id: 11,
      name: "Tibero",
      icon: <FaDatabase className="text-black dark:text-white" />,
    },
    { id: 12, name: "Oracle", icon: <SiOracle className="text-red-600" /> },
  ],
  Others: [
    {
      id: 13,
      name: "GitHub",
      icon: <FaGithub className="text-black dark:text-white" />,
    },
    {
      id: 14,
      name: "GitLab",
      icon: <AiFillGitlab className="text-orange-600" />,
    },
    {
      id: 15,
      name: "Figma",
      icon: <BiLogoFigma className="text-purple-500" />,
    },
    { id: 16, name: "Slack", icon: <FaSlack className="text-purple-600" /> },
    {
      id: 17,
      name: "Vercel",
      icon: <SiVercel className="text-black dark:text-white" />,
    },
  ],
};
