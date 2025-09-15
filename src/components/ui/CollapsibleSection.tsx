"use client";

import { TaskItem } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiChevronDown, HiOutlineArrowRight } from "react-icons/hi2";

interface CollapsibleSectionProps {
  task: TaskItem;
}

export function CollapsibleSection({ task }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={`border border-stone-400/70 dark:border-gray-500/60 rounded-xl overflow-hidden`}
      id="CollapsibleSection"
    >
      <button
        className={`w-full px-4 py-4 bg-stone-200 dark:bg-gray-700 hover:bg-stone-300 dark:hover:bg-gray-800 transition-colors flex items-center justify-between text-left`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className={`font-medium text-gray-900 dark:text-white`}>
          {task.title}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronDown className={`w-5 h-5`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ height: "auto", opacity: 1 }}
            className={`overflow-hidden`}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div
              className={`p-4 bg-stone-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 space-y-6`}
            >
              <div className={`flex space-x-4`}>
                <div
                  className={`w-1 h-auto bg-blue-500 rounded-full my-1`}
                ></div>
                <div className={`flex-1`}>
                  <h5
                    className={`flex items-center font-semibold text-gray-800 dark:text-gray-200`}
                  >
                    이슈
                  </h5>
                  <ul
                    className={`list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300`}
                  >
                    {task.issues.map((issue, index) => (
                      <li key={index} className={`flex items-start`}>
                        <HiOutlineArrowRight
                          className={`w-4 h-4 mt-1.5 mr-2 text-green-500 flex-shrink-0`}
                        />
                        <p
                          className={`text-gray-700 dark:text-gray-300 leading-relaxed`}
                        >
                          {issue}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`flex space-x-4`}>
                <div
                  className={`w-1 h-auto bg-green-500 rounded-full my-1`}
                ></div>
                <div className={`flex-1`}>
                  <h5
                    className={`flex items-center font-semibold text-gray-800 dark:text-gray-200`}
                  >
                    해결
                  </h5>
                  <ul
                    className={`list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300`}
                  >
                    {task.solutions.map((solution, index) => (
                      <li key={index} className={`flex items-start`}>
                        <HiOutlineArrowRight
                          className={`w-4 h-4 mt-1.5 mr-2 text-green-500 flex-shrink-0`}
                        />
                        <p
                          className={`text-gray-700 dark:text-gray-300 leading-relaxed`}
                        >
                          {solution}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`flex space-x-4`}>
                <div
                  className={`w-1 h-auto bg-purple-500 rounded-full my-1`}
                ></div>
                <div className={`flex-1`}>
                  <h5
                    className={`flex items-center font-semibold text-gray-800 dark:text-gray-200`}
                  >
                    성과
                  </h5>
                  <ul
                    className={`list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300`}
                  >
                    {task.achievements.map((achievement, index) => (
                      <li key={index} className={`flex items-start`}>
                        <HiOutlineArrowRight
                          className={`w-4 h-4 mt-1.5 mr-2 text-purple-500 flex-shrink-0`}
                        />
                        <p
                          className={`text-gray-700 dark:text-gray-300 leading-relaxed`}
                        >
                          {achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
