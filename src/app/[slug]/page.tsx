import { ProjectModal } from "@/components/ui/ProjectModal";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 86400; // 24시간마다 ISR로 페이지를 재생성

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug((await params).slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <ProjectModal project={project} returnUrl={"/"} />
      </div>
    </main>
  );
}
