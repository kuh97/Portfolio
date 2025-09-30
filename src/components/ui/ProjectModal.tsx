import { Project } from "@/types";
import { ProjectModalClient } from "./ProjectModalClient";
import { FaBuilding, FaUser, FaUsers } from "react-icons/fa";
import { CollapsibleSection } from "./CollapsibleSection";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { HighlightText } from "./HighlightText";

interface ProjectModalProps {
  project: Project;
  returnUrl?: string;
}

export function ProjectModal({ project, returnUrl }: ProjectModalProps) {
  const renderIcon = () => {
    switch (project.info?.type) {
      case "Company":
        return <FaBuilding className={`w-4 h-4 mr-2 text-blue-500`} />;
      case "Team":
        return <FaUsers className={`w-4 h-4 mr-1 text-blue-500`} />;
      case "Personal":
        return <FaUser className={`w-4 h-4 mr-1 text-blue-500`} />;
      default:
        return null;
    }
  };

  return (
    <ProjectModalClient returnUrl={returnUrl}>
      <div className={`-mt-12 pt-4`}>
        <div className={`flex items-start justify-between mb-6`}>
          <h3 className={`font-bold text-gray-900 dark:text-white pr-16`}>
            {project.title}
          </h3>
        </div>

        <div className={`space-y-6`}>
          <div
            className={`text-sm flex items-center text-gray-600 dark:text-gray-400`}
          >
            {renderIcon()}
            <p className={`font-semibold text-gray-700 dark:text-gray-300`}>
              {project.info?.name}
            </p>
            <span className="w-[1px] bg-gray-400 mx-1 self-stretch"></span>
            {project.info?.members && (
              <span className={`text-gray-600 dark:text-gray-400`}>
                ({project.info?.members})
              </span>
            )}
          </div>

          <div className={`flex items-center text-gray-600 dark:text-gray-400`}>
            <FcCalendar className={`w-4 h-4 mr-2`} />
            <span>{project.info?.period}</span>
          </div>

          <div>
            <h4
              className={`font-semibold mb-3 text-gray-900 dark:text-gray-100`}
            >
              프로젝트 설명
            </h4>
            <ul className={`list-disc list-inside space-y-2`}>
              {project.descriptions.map((desc, index) => (
                <li key={index} className={`flex items-start`}>
                  <HiOutlineArrowRight
                    className={`w-4 h-4 mt-1.5 mr-2 text-emerald-500 flex-shrink-0`}
                  />
                  <p
                    className={`text-gray-700 dark:text-gray-300 leading-relaxed`}
                  >
                    <HighlightText text={desc} />
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`font-semibold mb-3 text-gray-900 dark:text-gray-100`}
            >
              사용 기술
            </h4>
            <div className={`flex flex-wrap gap-2`}>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`font-light text-sm bg-stone-200 text-black dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`border-t border-gray-400 dark:border-gray-700 pt-6 space-y-4`}
          >
            <h4 className={`mb-3 text-gray-900 dark:text-gray-100`}>
              <strong>담당 업무 및 성과</strong>
            </h4>
            {project.tasks.map((task) => (
              <CollapsibleSection key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </ProjectModalClient>
  );
}
