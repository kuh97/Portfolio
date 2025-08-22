"use client";

import { projects } from "@/data/projects";
import { AnimatedSection } from "../common/AnimatedSection";
import { ProjectCard } from "../ui/projectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className={`section-padding bg-stone-200 dark:bg-gray-900`}
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header`}>Projects</h2>
        </AnimatedSection>

        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3`}>
          {projects.map((project) => (
            <AnimatedSection
              animation="slide-up"
              delay={parseFloat(project.id) * 0.1}
              key={project.id}
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
