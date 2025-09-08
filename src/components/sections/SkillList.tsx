"use client";

import { SkillsData } from "@/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatedSection } from "../common/AnimatedSection";

const CATEGORIES = {
  All: "All",
  Frontend: "Frontend",
  Backend: "Backend",
  Database: "Database",
  Others: "Others",
} as const;

type SkillCategory = (typeof CATEGORIES)[keyof typeof CATEGORIES];

interface SkillListProps {
  skills: SkillsData;
}

export function SkillList({ skills }: SkillListProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(
    CATEGORIES.All,
  );
  const [clickedSkill, setClickedSkill] = useState<string | null>(null);

  const handleSkillClick = (skillName: string) => {
    setClickedSkill((prev) => (prev === skillName ? null : skillName));
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;
      if (clickedSkill && !target.closest(".skill-item")) {
        setClickedSkill(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [clickedSkill]);

  return (
    <>
      <AnimatedSection className={`animate-slide-up`}>
        <div className={`flex flex-wrap justify-center gap-2 mb-8`}>
          {Object.values(CATEGORIES).map((category) => (
            <button
              key={category}
              className={`primary-button px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,2vw,0.75rem)] rounded-full font-medium transition-all duration-300 ${
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
        {skills.All.map((skill, index) => (
          <AnimatedSection
            key={skill.name}
            className={`animate-slide-up skill-item relative flex flex-col items-center justify-center gap-2 p-4 bg-white dark:bg-gray-900/50 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${
              activeCategory === "All" || activeCategory === skill.category
                ? "group hover:scale-105"
                : "blur-md opacity-15 pointer-events-none"
            } ${clickedSkill === skill.name ? "clicked" : ""}`}
            delay={index * 0.02}
          >
            <div onClick={() => handleSkillClick(skill.name)}>
              <Image
                alt={skill.name}
                className={`w-[clamp(1.5rem,4vw,2.25rem)] h-[clamp(1.5rem,4vw,2.25rem)]`}
                height={36}
                src={skill.icon}
                width={36}
              />
            </div>

            <p
              className={`skill-text font-medium dark:font-light text-black dark:text-gray-200 text-center`}
            >
              {skill.name}
            </p>

            <div className={`skill-tooltip`}>{skill.name}</div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}
