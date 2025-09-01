import { AnimatedSection } from "../common/AnimatedSection";
import { AboutContent } from "./AboutContent";

interface AboutProps {
  aboutData?: {
    profileImageUrl?: string | null;
    resumeUrl?: string | null;
    workExperienceUrl?: string | null;
  };
}

export function About({ aboutData }: AboutProps) {
  return (
    <section
      className={`section-padding bg-stone-200 dark:bg-gray-800/50`}
      id="about"
    >
      <div className={`section-container`}>
        <AnimatedSection animation="fade" className={`text-center mb-16`}>
          <h2 className={`section-header text-3xl md:text-4xl`}>About Me</h2>
        </AnimatedSection>
        <AboutContent aboutData={aboutData} />
      </div>
    </section>
  );
}
