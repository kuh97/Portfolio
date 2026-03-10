import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

export const getProjectBySlug = unstable_cache(
  async (slug: string) => {
    try {
      const project = await prisma.project.findUnique({
        where: { slug },
        include: {
          info: true,
          tasks: {
            orderBy: {
              id: "asc",
            },
          },
        },
      });
      return project;
    } catch (error) {
      console.error("프로젝트를 찾을 수 없습니다:", error);
      return null;
    }
  },
  ["project-by-slug"],
  { revalidate: 86400 },
);
