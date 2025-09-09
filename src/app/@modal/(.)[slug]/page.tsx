import { ProjectModal } from "@/components/ui/ProjectModal";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ModalPageProps {
  params: Promise<{ slug: string }>;
}

export default async function InterceptedProjectModal({
  params,
}: ModalPageProps) {
  const project = await getProjectBySlug((await params).slug);

  if (!project) {
    notFound();
  }

  return <ProjectModal project={project} />;
}
