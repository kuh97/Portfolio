import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiTistory } from "react-icons/si";
import { HeroTyping } from "./HeroTyping";
import { EmailCopyButton } from "../ui/EmailCopyButton";
import { AnimationScrollButton } from "@/components/common/AnimationScrollButton";
import {
  AnimatedTitle,
  AnimatedSubtitle,
  AnimatedParagraph,
  AnimatedContactSection,
} from "@/components/common/AnimationWrappers";

interface HeroProps {
  aboutData?: {
    name: string;
    email?: string | null;
    github?: string | null;
    linkedin?: string | null;
    blog?: string | null;
  };
}

export function Hero({ aboutData }: HeroProps) {
  if (!aboutData) {
    return null;
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-stone-100 dark:bg-transparent"
      id="hero"
    >
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedTitle
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            delay={0.3}
          >
            안녕하세요,{" "}
            <span className="text-emerald-400/70 drop-shadow-[0_0_8px_rgba(16,185,129,1)] dark:drop-shadow-[0_0_10px_rgba(16,255,200,0.8)]">
              {aboutData.name}
            </span>
            입니다.
          </AnimatedTitle>

          <AnimatedSubtitle className="mb-8" delay={0.4}>
            <HeroTyping />
          </AnimatedSubtitle>

          <AnimatedParagraph
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            delay={0.5}
          >
            단순함 속에서 편리함을, 편리함 속에서 즐거움을
          </AnimatedParagraph>

          <AnimatedContactSection
            className="flex items-center justify-center space-x-8"
            delay={0.7}
          >
            {aboutData.github && (
              <a
                className="contact-icon"
                href={aboutData.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsGithub className="w-6 h-6" />
              </a>
            )}

            {aboutData.linkedin && (
              <a
                className="contact-icon"
                href={aboutData.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <BsLinkedin className="w-6 h-6" />
              </a>
            )}

            {aboutData.blog && (
              <a
                className="contact-icon"
                href={aboutData.blog}
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiTistory className="w-6 h-6" />
              </a>
            )}

            {aboutData.email && <EmailCopyButton email={aboutData.email} />}
          </AnimatedContactSection>
        </div>
      </div>

      <AnimationScrollButton targetId="about" />
    </section>
  );
}
