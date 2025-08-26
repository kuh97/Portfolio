"use client";

import { projects } from "@/data/projects";
import { AnimatedSection } from "../common/AnimatedSection";
import { Project } from "@/types";
import { useState } from "react";
import { ProjectCard } from "../ui/projectCard";
import { ProjectModal } from "../ui/projectModal";

export function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      className={`section-padding bg-stone-200 dark:bg-gray-900`}
      id="projects"
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header text-3xl md:text-4xl `}>Projects</h2>
        </AnimatedSection>

        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3`}>
          {projects.map((project) => (
            <AnimatedSection
              key={project.id}
              animation="slide-up"
              delay={parseFloat(project.id) * 0.1}
            >
              <ProjectCard
                openDetailModal={() => handleOpenModal(project)}
                project={project}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}
