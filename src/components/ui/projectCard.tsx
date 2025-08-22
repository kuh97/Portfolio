"use client";

import { Project } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section
      className={`overflow-hidden flex flex-col justify-start gap-8 rounded-2xl bg-stone-100 dark:bg-gray-800 relative h-[23rem] group transition-transform transition-shadow duration-300 ease-out hover:shadow-xl hover:-translate-y-2`}
    >
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image as string}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity group-hover:opacity-50"
            loading="lazy"
          />
        </div>
      )}

      <div className={`p-6 flex-grow flex flex-col`}>
        <h4 className="text-2xl font-bold dark:text-white mb-2">
          {project.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="absolute z-[3] flex flex-col items-center justify-center gap-10 text-black dark:text-white w-full h-full p-5 hover:bg-stone-100 dark:hover:bg-gray-800 opacity-0 transition group-hover:opacity-100">
        <h3 className="font-bold text-2xl group-hover:text-center">
          {project.title}
        </h3>
        <div className="w-2/3 flex flex-col gap-3">
          <button className="primary-button">자세히보기</button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`primary-button`}
            >
              Github 바로가기
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
