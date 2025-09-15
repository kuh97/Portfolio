import { Project } from "@/types";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section
      className={`project-card overflow-hidden flex flex-col justify-start gap-8 rounded-2xl bg-stone-100 dark:bg-gray-800
         relative h-[20rem] group transition-transform duration-300 ease-out`}
      id="ProjectCard"
    >
      <div className={`p-6 flex-grow flex flex-col`}>
        <div className={`text-sm flex items-center mb-3`}>
          <span
            className={`px-2 py-1 bg-emerald-300/50 dark:bg-emerald-400/40 text-gray-800 dark:text-gray-200 rounded-full font-medium mr-2`}
          >
            {project.info?.name}
          </span>
          <span className={`text-gray-600 dark:text-gray-400`}>
            {project.info?.period}
          </span>
        </div>

        <h3 className={`font-semibold dark:text-white mb-1 pb-2`}>
          {project.title}
        </h3>
        <p className={`flex items-start text-gray-800 dark:text-gray-300 mb-4`}>
          <HiOutlineArrowRight
            className={`w-4 h-4 mt-1.5 mr-2 text-green-500 flex-shrink-0`}
          />
          {project.summary}
        </p>

        <div className={`mobile-buttons mt-auto flex-col gap-2`}>
          <Link
            aria-label={`${project.title} 자세히보기`}
            className={`primary-button px-4 py-2 rounded-lg text-center block`}
            href={`/${project.slug}`}
          >
            자세히보기
          </Link>
          {project.githubUrl && (
            <a
              aria-label="Github 바로가기"
              className={`primary-button px-4 py-2 rounded-lg text-center block mt-2`}
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github 바로가기
            </a>
          )}
        </div>
      </div>

      <div
        className={`hover-overlay absolute z-[3] flex flex-col items-center justify-center gap-10 text-black dark:text-white w-full
           h-full p-5 bg-stone-100 dark:bg-gray-800 opacity-0 transition-opacity duration-300`}
      >
        <h3 className={`font-semibold text-center`}>{project.title}</h3>
        <div className={`w-2/3 flex flex-col gap-3`}>
          <Link
            aria-label={`${project.title} 자세히보기`}
            className={`primary-button px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,2vw,0.75rem)] rounded-lg text-center`}
            href={`/${project.slug}`}
          >
            자세히보기
          </Link>
          {project.githubUrl && (
            <a
              aria-label="Github 바로가기"
              className={`primary-button px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,2vw,0.75rem)] rounded-lg text-center`}
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github 바로가기
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
