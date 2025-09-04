import { ProjectModal } from "@/components/ui/ProjectModal";

interface ModalPageProps {
  params: { slug: string };
}

export default async function InterceptedProjectModal({
  params,
}: ModalPageProps) {
  const { slug } = await params;
  return <ProjectModal slug={slug} />;
}
