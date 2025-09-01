"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

interface AnimationScrollButtonProps {
  targetId?: string;
  delay?: number;
}

export function AnimationScrollButton({
  targetId = "about",
  delay = 1,
}: AnimationScrollButtonProps) {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      animate={{ opacity: 1 }}
      aria-label={`${targetId} 섹션으로 이동`}
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-500/80 hover:text-emerald-400 transition-colors animate-bounce hover:animate-none`}
      initial={{ opacity: 0 }}
      transition={{ delay, duration: 0.5 }}
      onClick={scrollToTarget}
    >
      <HiArrowDown className="w-8 h-8" />
    </motion.button>
  );
}
