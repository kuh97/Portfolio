"use client";

import { SkillsData } from "@/types";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatedSection } from "../common/AnimatedSection";

const CATEGORIES = {
  All: "All",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Others: "Others",
} as const;

type SkillCategory = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export function Skills({ skills }: { skills: SkillsData }) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    CATEGORIES.All,
  );

  const displayedSkills = useMemo(() => Object.values(skills).flat(), [skills]);

  return (
    <section
      className={`section-padding bg-stone-100 dark:bg-gray-800`}
      id="skills"
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header text-3xl md:text-4xl `}>Skills</h2>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
          <div className={`flex flex-wrap justify-center gap-2 mb-8`}>
            {Object.values(CATEGORIES).map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-emerald-500/70 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveCategory(category as SkillCategory)}
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
              key={skill.name}
              animation="slide-up"
              className={`relative flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md transition-all duration-300 ${
                skills[activeCategory]?.includes(skill) ||
                activeCategory === "All"
                  ? "group hover:scale-105"
                  : "blur-md opacity-15 pointer-events-none"
              }`}
              delay={index * 0.02}
            >
              <div className={`text-4xl`}>
                <Image
                  alt={skill.name}
                  height={36}
                  src={skill.icon}
                  style={{ width: "36px", height: "36px" }}
                  width={36}
                />
              </div>
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
