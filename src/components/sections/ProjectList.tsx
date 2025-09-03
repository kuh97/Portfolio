import { Project } from "@/types";
import { AnimatedSection } from "../common/AnimatedSection";
import { ProjectCard } from "../ui/ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3`}>
      {projects.map((project) => (
        <AnimatedSection
          key={project.id}
          className={`animate-slide-up`}
          delay={parseFloat(project.id) * 0.1}
        >
          <ProjectCard project={project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
