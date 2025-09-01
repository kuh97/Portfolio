import { AnimatedSection } from "../common/AnimatedSection";
import { ProjectList } from "./ProjectList";
import prisma from "@/lib/prisma";

async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      info: true,
      tasks: true,
    },
  });
  return projects;
}

export async function Projects() {
  const projects = await getProjects();

  return (
    <section
      className={`section-padding bg-stone-200 dark:bg-gray-900`}
      id="projects"
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header text-3xl md:text-4xl `}>Projects</h2>
        </AnimatedSection>

        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
