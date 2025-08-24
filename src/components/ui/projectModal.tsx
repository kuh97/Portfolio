"use client";

import { useEffect } from "react";
import { Project } from "@/types";
import { IoMdClose } from "react-icons/io";

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
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-stone-200 dark:bg-gray-800 rounded-lg p-8 m-4 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <h4 className="section-header text-xl md:text-2xl font-bold">
            {project.title}
          </h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <IoMdClose className={`w-7 h-7`} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold mr-2">기한 :</span>
            <span>{project.period}</span>
          </div>

          <div>
            <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              프로젝트 설명
            </h5>
            <ul className="list-disc list-inside space-y-1">
              {project.descriptions.map((desc, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">
                  {desc}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              사용 기술
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-stone-300 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-400 dark:border-gray-700 pt-6 space-y-6">
            {project.tasks.map((task) => (
              <div key={task.id} className="space-y-2">
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {task.title}
                </h5>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>이슈:</strong> {task.issue}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>해결 방안:</strong>
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 dark:text-gray-300">
                  {task.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>성과:</strong>
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1 text-gray-700 dark:text-gray-300">
                  {task.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
