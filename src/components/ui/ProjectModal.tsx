import { Suspense } from "react";
import { ProjectModalClient } from "./ProjectModalClient";
import { ProjectModalContent } from "./ProjectModalContent";
import { ProjectModalLoading } from "./ProjectModalLoading";

interface ProjectModalProps {
  slug: string;
}

export function ProjectModal({ slug }: ProjectModalProps) {
  return (
    <ProjectModalClient>
      <Suspense fallback={<ProjectModalLoading />}>
        <ProjectModalContent slug={slug} />
      </Suspense>
    </ProjectModalClient>
  );
}
