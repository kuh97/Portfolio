import { ProjectModal } from "@/components/ui/ProjectModal";

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <ProjectModal slug={slug} />
      </div>
    </main>
  );
}
