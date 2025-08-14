"use client";

import Image from "next/image";
import { BsDownload } from "react-icons/bs";

const keywords = ["사용자 경험(UX)", "협업 & 소통", "도전", "긍정적 사고"];

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-200 dark:bg-gray-800/50"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative justify-self-center bg-gray-700/50 p-4 rounded-2xl shadow-lg">
            <div className="relative w-64 h-80 lg:w-72 lg:h-96">
              <Image
                src="/profile.jpg"
                alt="김의현 프로필 사진"
                fill
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              안녕하세요! 프론트엔드 개발자 김의현입니다 👋
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              사용자 경험과 협업의 가치를 중요하게 생각하는 3년차 프론트엔드
              개발자 김의현입니다. 복잡한 기능을 사용자가 쉽게 다가갈 수 있도록
              만드는 과정을 즐기며, 팀원들과 함께 더 나은 코드를 만들기 위해
              끊임없이 고민하고 있습니다.
            </p>

            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-emerald-600/10 text-amber-300 rounded-full text-sm font-medium"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                // download="김의현-이력서.pdf"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-amber-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BsDownload className="w-6 h-6 mr-3" />
                이력서 다운로드
              </a>
              <a
                href="/workExperience.pdf"
                target="_blank"
                // download="김의현-경력기술서.pdf"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-amber-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BsDownload className="w-6 h-6 mr-3" />
                경력기술서 다운로드
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
