import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return projects;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://uihyeon-portfolio.vercel.app";

  const projects = await getProjects();
  const projectUrls: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
