"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedTitle({
  children,
  delay = 0.3,
  className,
}: AnimatedElementProps) {
  return (
    <motion.h1
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.h1>
  );
}

export function AnimatedSubtitle({
  children,
  delay = 0.4,
  className,
}: AnimatedElementProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedParagraph({
  children,
  delay = 0.5,
  className,
}: AnimatedElementProps) {
  return (
    <motion.p
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}

export function AnimatedContactSection({
  children,
  delay = 0.7,
  className,
}: AnimatedElementProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
