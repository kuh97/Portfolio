"use client";

import { Project } from "@/types";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

interface ProjectCardProps {
  project: Project;
  openDetailModal: () => void;
}

export function ProjectCard({ project, openDetailModal }: ProjectCardProps) {
  return (
    <section
      className={`overflow-hidden flex flex-col justify-start gap-8 rounded-2xl bg-stone-100 dark:bg-gray-800 
        relative h-[23rem] group transition-transform duration-300 ease-out hover:shadow-xl 
        hover:-translate-y-2`}
      id="ProjectCard"
    >
      {project.image && (
        <div className={`relative h-48 overflow-hidden`}>
          <Image
            alt={project.title}
            className={`transition-opacity group-hover:opacity-50`}
            layout="fill"
            loading="lazy"
            objectFit="cover"
            src={project.image as string}
          />
        </div>
      )}

      <div className={`p-6 flex-grow flex flex-col`}>
        <div className={`flex items-center mb-2`}>
          <div
            className={`px-2 py-1 bg-emerald-300/30 text-black dark:text-white rounded-full text-sm font-light mr-2`}
          >
            {project.info.name}
          </div>
          <span className={`text-gray-600 dark:text-gray-400 text-sm`}>
            {project.info.period}
          </span>
        </div>

        <h2
          className={`text-[clamp(1.25rem,1.8vw,1.3rem)] font-semibold dark:text-white mb-3 border-b border-gray-400 pb-2`}
        >
          {project.title}
        </h2>
        <ul className={`list-disc`}>
          {project.descriptions.map((description, index) => (
            <li
              key={index}
              className={`flex items-start text-gray-700 dark:text-gray-300 text-sm mb-2`}
            >
              <HiOutlineArrowRight
                className={`w-4 h-4 mt-1.5 mr-2 text-green-500 flex-shrink-0`}
              />
              {description}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`absolute z-[3] flex flex-col items-center justify-center gap-10 text-black dark:text-white w-full 
          h-full p-5 hover:bg-stone-100 dark:hover:bg-gray-800 opacity-0 transition group-hover:opacity-100`}
      >
        <h3 className={`font-bold text-2xl group-hover:text-center`}>
          {project.title}
        </h3>
        <div className={`w-2/3 flex flex-col gap-3`}>
          <button className={`primary-button`} onClick={openDetailModal}>
            자세히보기
          </button>
          {project.githubUrl && (
            <a
              className={`primary-button`}
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
