"use client";

import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      data-visible={inView ? "true" : "false"}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
