"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";
}

const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "slide-up",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView();
  const [currentAnimation, setCurrentAnimation] = useState(animation);

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth < 768 &&
        (animation === "slide-left" || animation === "slide-right")
      ) {
        setCurrentAnimation("slide-up");
      } else {
        setCurrentAnimation(animation);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [animation]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[currentAnimation]}
      transition={{ duration: 0.5, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
