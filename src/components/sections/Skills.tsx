"use client";

import { skills } from "@/data/skills";
import { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = {
  All: "All",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Others: "Others",
} as const;

type SkillCategory = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    CATEGORIES.All
  );

  const allSkills = Object.values(skills).flat();
  const displayedSkills =
    activeCategory === CATEGORIES.All
      ? allSkills
      : skills[activeCategory] || [];

  return (
    <section
      id="skills"
      className="section-padding bg-gray-100 dark:bg-gray-800"
    >
      <div className="section-container">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6"
        >
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl">{skill.icon || ""}</div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
