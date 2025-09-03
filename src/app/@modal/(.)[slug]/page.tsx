import { ProjectModal } from "@/components/ui/ProjectModal";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ModalPageProps {
  params: { slug: string };
}

export default async function InterceptedProjectModal({
  params,
}: ModalPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectModal project={project} />;
}
