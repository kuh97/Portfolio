"use client";

import { skills } from "@/data/skills";
import { useState } from "react";
import { AnimatedSection } from "../common/AnimatedSection";

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

  const displayedSkills = Object.values(skills).flat();

  return (
    <section
      id="skills"
      className={`section-padding bg-stone-100 dark:bg-gray-800`}
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header`}>Skills</h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
          <div className={`flex flex-wrap justify-center gap-2 mb-8`}>
            {Object.values(CATEGORIES).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as SkillCategory)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-emerald-500/70 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div
          className={`grid grid-cols-5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4`}
        >
          {displayedSkills.map((skill, index) => (
            <AnimatedSection
              animation="slide-up"
              delay={index * 0.02}
              key={skill.name}
              className={`relative flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md transition-all duration-300 ${
                skills[activeCategory]?.includes(skill) ||
                activeCategory === "All"
                  ? "group hover:scale-105"
                  : "blur-md opacity-15 pointer-events-none"
              }`}
            >
              <div className={`text-4xl`}>{skill.icon || ""}</div>
              <p
                className={`hidden md:block font-semibold text-gray-800 dark:text-gray-200 text-center text-sm`}
              >
                {skill.name}
              </p>
              <div
                className={`md:hidden absolute bottom-full mb-2 px-3 py-1.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg shadow-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
              >
                {skill.name}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
