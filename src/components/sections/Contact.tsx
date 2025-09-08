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
      <div className="section-container text-center">
        <AnimatedSection className={`animate-fade text-center`}>
          <h2 className={`section-header`}>Contact</h2>
        </AnimatedSection>

        <AnimatedSection className={`animate-scale`} delay={0.1}>
          <p className="text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
            더 궁금한 점이 있으시면 언제든 연락주세요!
          </p>
          <p className="text-gray-800 dark:text-gray-300 mt-4 mb-10">
            감사합니다 🙏
          </p>

          <div className="space-y-4 border-4 border-emerald-500 rounded-lg p-6 max-w-sm mx-auto">
            <dl>
              {aboutData.email && (
                <div className={`mb-4`}>
                  <dt className="text-gray-600 dark:text-gray-300">Email</dt>
                  <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                    {aboutData.email}
                  </dd>
                </div>
              )}
              {aboutData.phone && (
                <div>
                  <dt className="text-gray-600 dark:text-gray-300">Phone</dt>
                  <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                    {aboutData.phone}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
