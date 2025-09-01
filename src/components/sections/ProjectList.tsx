"use client";

import { useState } from "react";
import { Project } from "@/types";
import { AnimatedSection } from "../common/AnimatedSection";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectModal } from "../ui/ProjectModal";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
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
    <>
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
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
}
