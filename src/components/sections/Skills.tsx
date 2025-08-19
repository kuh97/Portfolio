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
        <AnimatedSection animation="fade" className="mb-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
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
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
          {displayedSkills.map((skill, index) => (
            <AnimatedSection
              animation="slide-up"
              delay={index * 0.02}
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl">{skill.icon || ""}</div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
