import { ProjectModal } from "@/components/ui/ProjectModal";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ModalPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400; // 24시간마다 ISR로 페이지를 재생성

export default async function InterceptedProjectModal({
  params,
}: ModalPageProps) {
  const project = await getProjectBySlug((await params).slug);

  if (!project) {
    notFound();
  }

  return <ProjectModal project={project} />;
}
