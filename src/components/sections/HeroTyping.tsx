"use client";

import { useState, useEffect } from "react";

const TYPING_TEXTS = ["Frontend Developer", "Web Developer"];

export function HeroTyping() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentString = TYPING_TEXTS[currentIndex];

    if (isTyping) {
      if (currentText.length < currentString.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentIndex, isTyping]);

  return (
    <p
      className={`font-semibold text-gray-700 dark:text-gray-200 min-h-[3rem] text-[clamp(1.2rem,3vw,1.8rem)]`}
    >
      {currentText}
      <span className={`animate-pulse`}>|</span>
    </p>
  );
}
