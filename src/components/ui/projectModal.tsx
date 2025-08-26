"use client";

import { useEffect } from "react";
import { Project } from "@/types";
import { IoMdClose } from "react-icons/io";
import { FcCalendar } from "react-icons/fc";
import { CollapsibleSection } from "./CollapsibleSection";
import { HiOutlineArrowRight } from "react-icons/hi";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50`}
      id="ProjectModal"
      onClick={onClose}
    >
      <div
        className={`bg-stone-200 dark:bg-gray-800 rounded-lg p-8 m-4 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-start justify-between mb-6`}>
          <h2
            className={`text-2xl md:text-3xl font-bold text-gray-900 dark:text-white`}
          >
            {project.title}
          </h2>
          <button
            aria-label="Close modal"
            className={`text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors`}
            onClick={onClose}
          >
            <IoMdClose className={`w-7 h-7`} />
          </button>
        </div>

        <div className={`space-y-6`}>
          <div
            className={`flex items-center text-sm text-gray-600 dark:text-gray-400`}
          >
            <FcCalendar className={`w-4 h-4 mr-1`} />
            <span
              className={`font-semibold mr-2 text-gray-700 dark:text-gray-300`}
            >
              기간 :
            </span>
            <span>{project.period}</span>
          </div>

          <div>
            <h3
              className={`font-semibold text-xl mb-3 text-gray-900 dark:text-gray-100`}
            >
              프로젝트 설명
            </h3>
            <ul className={`list-disc list-inside space-y-2`}>
              {project.descriptions.map((desc, index) => (
                <li key={index} className={`flex items-start`}>
                  <HiOutlineArrowRight
                    className={`w-4 h-4 mt-1.5 mr-2 text-emerald-500 flex-shrink-0`}
                  />
                  <p
                    className={`text-gray-700 dark:text-gray-300 leading-relaxed`}
                  >
                    {desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`font-semibold text-xl mb-3 text-gray-900 dark:text-gray-100`}
            >
              사용 기술
            </h3>
            <div className={`flex flex-wrap gap-2`}>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`bg-stone-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`border-t border-gray-400 dark:border-gray-700 pt-6 space-y-4`}
          >
            <h3
              className={`font-semibold text-xl mb-3 text-gray-900 dark:text-gray-100`}
            >
              주요 업무 및 성과
            </h3>
            {project.tasks.map((task) => (
              <CollapsibleSection key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
