import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import prisma from "@/lib/prisma";
import { Skill, SkillsData } from "@/types";

async function getAboutData() {
  const aboutData = await prisma.user.findFirst({
    where: { name: "김의현" },
  });
  return aboutData;
}

async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      info: true,
      tasks: true,
    },
  });
  return projects;
}

async function getSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: [
      {
        id: "asc", // name 필드를 오름차순으로 정렬
      },
      {
        category: "asc", // category 필드를 오름차순으로 정렬
      },
    ],
  });

  const skillsData = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      ...skill,
      icon: skill.iconUrl,
    });
    return acc;
  }, {}) as unknown as SkillsData;

  return skillsData;
}

export default async function Home() {
  const projects = await getProjects();
  const skills = await getSkills();
  const aboutData = await getAboutData();

  return (
    <>
      <Hero aboutData={aboutData || undefined} />
      <About aboutData={aboutData || undefined} />
      <Skills skills={skills} />
      <Projects projects={projects} />
    </>
  );
}
