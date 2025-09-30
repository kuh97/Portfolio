import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { AnimatedSection } from "../common/AnimatedSection";
import { SlEmotsmile } from "react-icons/sl";
import { HighlightText } from "../ui/HighlightText";

const keywords = ["사용자 경험(UX)", "협업 & 소통", "도전", "긍정적 사고"];

interface AboutContentProps {
  aboutData?: {
    profileImageUrl?: string | null;
    resumeUrl?: string | null;
    workExperienceUrl?: string | null;
  };
}

export function AboutContent({ aboutData }: AboutContentProps) {
  if (!aboutData) {
    return null;
  }

  const aboutText = `사용자가 더 편리하게 서비스를 이용할 수 있도록 **UI/UX 기능을 개발하고 개선**했으며 **코드 품질 향상**에도 집중했습니다. **팀의 생산성**을 높이고 **유지보수하기 쉬운 구조**를 고민하며 **새로운 기술을 빠르게 익혀 적용**하는 것을 즐깁니다. 앞으로도 **사용자 중심의 서비스**를 만들고 함께 일하는 동료들에게 **긍정적인 영향**을 주는 개발자가 되고자 합니다.`;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
      {aboutData.profileImageUrl && (
        <AnimatedSection className={`animate-slide-up lg:animate-slide-left`}>
          <div className="relative mx-auto w-[clamp(16rem,30vw,18rem)] h-[clamp(20rem,35vw,24rem)] bg-emerald-300/40 dark:bg-emerald-200/60 p-[clamp(0.875rem,2vw,1rem)] rounded-2xl shadow-lg">
            <div className="relative w-full h-full">
              <Image
                fill
                alt="김의현 프로필 사진"
                className="rounded-xl object-cover"
                sizes="(max-width: 1024px) 256px, 288px"
                src={aboutData.profileImageUrl}
              />
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection
        className={`animate-slide-up lg:animate-slide-right space-y-6 text-center lg:text-left`}
      >
        <h3 className="flex flex-wrap justify-center lg:justify-start items-center font-semibold text-gray-900 dark:text-white mb-4">
          안녕하세요! 프론트엔드 개발자{" "}
          <span className="ml-1 whitespace-nowrap drop-shadow-[0_0_8px_rgba(16,185,129,1)] dark:drop-shadow-[0_0_6px_rgba(16,255,200,0.5)]">
            김의현
          </span>{" "}
          입니다
          <SlEmotsmile className="ml-1 w-6 h-6 text-blue-700 dark:text-yellow-300" />
        </h3>
        <p className={`text-gray-800 dark:text-gray-300 leading-relaxed`}>
          <HighlightText text={aboutText} />
        </p>

        <div className={`flex flex-wrap justify-center lg:justify-start gap-2`}>
          {keywords.map((keyword, index) => (
            <AnimatedSection
              key={index}
              className={`animate-scale`}
              delay={index * 0.1}
            >
              <span
                className={`text-sm px-3 py-1 bg-emerald-300/30 text-gray-700 dark:text-white rounded-full font-medium`}
              >
                {keyword}
              </span>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          className={`animate-fade pt-4 flex flex-wrap gap-4 justify-center lg:justify-start`}
          delay={0.3}
        >
          {aboutData.resumeUrl && (
            <a
              aria-label="이력서 다운로드"
              className={`primary-button px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,2vw,0.75rem)] rounded-lg`}
              href="/api/download/resume"
            >
              <BsDownload
                className={`w-[clamp(1rem,4vw,1.5rem)] h-[clamp(1rem,4vw,1.5rem)] mr-3`}
              />
              이력서 다운로드
            </a>
          )}

          {aboutData.workExperienceUrl && (
            <a
              aria-label="경력기술서 다운로드"
              className={`primary-button px-[clamp(1rem,4vw,1.5rem)] py-[clamp(0.5rem,2vw,0.75rem)] rounded-lg`}
              href="/api/download/workExperience"
            >
              <BsDownload
                className={`w-[clamp(1rem,4vw,1.5rem)] h-[clamp(1rem,4vw,1.5rem)] mr-3`}
              />
              경력기술서 다운로드
            </a>
          )}
        </AnimatedSection>
      </AnimatedSection>
    </div>
  );
}
