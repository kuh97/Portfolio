"use client";

import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { AnimatedSection } from "../common/AnimatedSection";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SlEmotsmile } from "react-icons/sl";

const keywords = ["사용자 경험(UX)", "협업 & 소통", "도전", "긍정적 사고"];

export function About() {
  const isLarge = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      className={`section-padding bg-stone-200 dark:bg-gray-800/50`}
      id="about"
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header text-3xl md:text-4xl `}>About Me</h2>
        </AnimatedSection>

        <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
          <AnimatedSection animation={isLarge ? "slide-left" : "slide-up"}>
            <div
              className={`relative mx-auto w-fit bg-emerald-300/40 dark:bg-emerald-200/60 p-4 rounded-2xl shadow-lg`}
            >
              <div className={`relative w-64 h-80 lg:w-72 lg:h-96`}>
                <Image
                  fill
                  alt="김의현 프로필 사진"
                  className={`rounded-xl object-cover`}
                  src="/profile.jpg"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation={isLarge ? "slide-right" : "slide-up"}
            className={`space-y-6 text-center lg:text-left`}
          >
            <h3
              className={`flex justify-center lg:justify-start items-center text-2xl font-semibold text-gray-900 dark:text-white mb-4`}
            >
              안녕하세요! 프론트엔드 개발자 김의현입니다
              <SlEmotsmile
                className={`ml-1 w-6 h-6 text-blue-700 dark:text-yellow-300`}
              />
            </h3>
            <p className={`text-gray-600 dark:text-gray-300 leading-relaxed`}>
              사용자 경험과 협업의 가치를 중요하게 생각하는 프론트엔드 개발자
              김의현입니다. 복잡한 기능을 사용자가 쉽게 다가갈 수 있도록 만드는
              과정을 즐기며, 팀원들과 함께 더 나은 코드를 만들기 위해 끊임없이
              고민하고 있습니다.
            </p>

            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-2`}
            >
              {keywords.map((keyword, index) => (
                <AnimatedSection
                  key={index}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <span
                    className={`px-3 py-1 bg-emerald-300/30 text-black dark:text-white rounded-full text-sm font-medium`}
                  >
                    {keyword}
                  </span>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection
              animation="fade"
              className={`pt-4 flex flex-wrap gap-4 justify-center lg:justify-start`}
              delay={0.3}
            >
              <a
                className={`primary-button`}
                download="김의현-이력서.pdf"
                href="/resume.pdf"
              >
                <BsDownload className={`w-6 h-6 mr-3`} />
                이력서 다운로드
              </a>
              <a
                className={`primary-button`}
                download="김의현-경력기술서.pdf"
                href="/workExperience.pdf"
              >
                <BsDownload className={`w-6 h-6 mr-3`} />
                경력기술서 다운로드
              </a>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
