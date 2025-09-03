import prisma from "@/lib/prisma";

export async function getProjectBySlug(slug: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
      include: {
        info: true,
        tasks: true,
      },
    });
    return project;
  } catch (error) {
    console.error("프로젝트를 찾을 수 없습니다:", error);
    return null;
  }
}
