import { Skill, SkillsData } from "@/types";
import { AnimatedSection } from "../common/AnimatedSection";
import { SkillList } from "./SkillList";
import prisma from "@/lib/prisma";

async function getSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: [
      {
        category: "asc",
      },
      {
        id: "asc",
      },
    ],
  });

  const allSkills: Skill[] = skills.map((skill) => ({
    id: skill.id,
    name: skill.name,
    icon: skill.iconUrl,
    category: skill.category,
  }));

  const skillsData: SkillsData = {
    All: allSkills,
    Frontend: allSkills.filter((skill) => skill.category === "Frontend"),
    Backend: allSkills.filter((skill) => skill.category === "Backend"),
    Database: allSkills.filter((skill) => skill.category === "Database"),
    Others: allSkills.filter((skill) => skill.category === "Others"),
  };

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
        <AnimatedSection className={`animate-fade text-center`}>
          <h2 className={`section-header`}>Skills</h2>
        </AnimatedSection>
        <SkillList skills={skills} />
      </div>
    </section>
  );
}
