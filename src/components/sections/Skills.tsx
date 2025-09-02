import { Skill, SkillsData } from "@/types";
import { AnimatedSection } from "../common/AnimatedSection";
import { SkillList } from "./SkillList";
import prisma from "@/lib/prisma";

async function getSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: [
      {
        id: "asc",
      },
      {
        category: "asc",
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

export async function Skills() {
  const skills = await getSkills();
  return (
    <section
      className={`section-padding bg-stone-100 dark:bg-gray-800`}
      id="skills"
    >
      <div className={`section-container`}>
        <AnimatedSection className={`animate-fade text-center mb-16`}>
          <h2 className={`section-header text-3xl md:text-4xl `}>Skills</h2>
        </AnimatedSection>
        <SkillList skills={skills} />
      </div>
    </section>
  );
}
