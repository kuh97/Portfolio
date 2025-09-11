import { AnimatedSection } from "../common/AnimatedSection";
import { ProjectList } from "./ProjectList";
import prisma from "@/lib/prisma";

async function getProjects() {
  const projects = await prisma.project.findMany({
    include: {
      info: true,
      tasks: {
        orderBy: {
          id: "asc",
        },
      },
    },
    orderBy: {
      id: "asc",
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
        <AnimatedSection className={`animate-fade text-center`}>
          <h2 className={`section-header`}>Projects</h2>
        </AnimatedSection>

        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
