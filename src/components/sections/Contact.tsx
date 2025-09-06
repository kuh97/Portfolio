import { AnimatedSection } from "../common/AnimatedSection";

interface ContactProps {
  aboutData?: {
    phone: string | null;
    email: string | null;
  };
}

export function Contact({ aboutData }: ContactProps) {
  if (!aboutData) {
    return null;
  }

  return (
    <section
      className="section-padding bg-stone-100 dark:bg-gray-800"
      id="contact"
    >
      <div className={`section-container`}>
        <div className="section-container text-center">
          <AnimatedSection className={`animate-fade text-center mb-16`}>
            <h2 className="section-header text-3xl md:text-4xl">Contact</h2>
          </AnimatedSection>

          <AnimatedSection className={`animate-scale`} delay={0.1}>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              더 궁금한 점이 있으시면 언제든 연락주세요!
            </p>
            <p className="text-2xl text-gray-600 dark:text-gray-300 mt-4 mb-12">
              감사합니다 🙏
            </p>

            <div className="space-y-4 border-4 border-emerald-500 rounded-lg p-6 max-w-sm mx-auto">
              {aboutData.email && (
                <>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    Email
                  </p>
                  <p className="text-xl font-medium text-emerald-600 dark:text-emerald-400">
                    {aboutData.email}
                  </p>
                </>
              )}

              {aboutData.phone && (
                <>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                    Phone
                  </p>
                  <p className="text-xl font-medium text-emerald-600 dark:text-emerald-400">
                    {aboutData.phone}
                  </p>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
