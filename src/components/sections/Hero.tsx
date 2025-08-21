"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown, HiMail, HiCheck } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiTistory } from "react-icons/si";
import { CONTACT_INFO } from "@/types";

const TYPING_TEXTS = ["Frontend Developer", "Web Developer"];

export function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isEmailCopied, setIsEmailCopied] = useState(false);

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

  useEffect(() => {}, [currentText, currentIndex, isTyping]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailClick = () => {
    if (isEmailCopied) return;

    navigator.clipboard
      .writeText(CONTACT_INFO.email.replace("mailto:", ""))
      .then(() => {
        setIsEmailCopied(true);
        setTimeout(() => setIsEmailCopied(false), 2000);
      })
      .catch((err) => {
        console.error("이메일 복사에 실패했습니다:", err);
      });
  };

  return (
    <section
      id="hero"
      className={`min-h-screen flex items-center justify-center relative bg-stone-100 dark:bg-transparent`}
    >
      <div className={`section-container relative z-10`}>
        <div className={`text-center max-w-4xl mx-auto`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6`}
          >
            안녕하세요,{" "}
            <span
              className={`text-emerald-400/70 drop-shadow-[0_0_8px_rgba(16,185,129,1)] dark:drop-shadow-[0_0_10px_rgba(16,255,200,0.8)]`}
            >
              김의현
            </span>
            입니다.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`mb-8`}
          >
            <h2
              className={`text-3xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 min-h-[3rem]`}
            >
              {currentText}
              <span className={`animate-pulse`}>|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed`}
          >
            {"단순함 속에서 편리함을, 편리함 속에서 즐거움을"}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className={`flex items-center justify-center space-x-8`}
          >
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-icon`}
            >
              <BsGithub className={`w-6 h-6`} />
            </a>

            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-icon`}
            >
              <BsLinkedin className={`w-6 h-6`} />
            </a>

            <a
              href={CONTACT_INFO.blog}
              target="_blank"
              rel="noopener noreferrer"
              className={`contact-icon`}
            >
              <SiTistory className={`w-6 h-6`} />
            </a>

            <div className={`relative`}>
              <button
                onClick={handleEmailClick}
                className={`contact-icon`}
                aria-label="이메일 복사하기"
              >
                {isEmailCopied ? (
                  <HiCheck className={`w-6 h-6 text-emerald-400/70`} />
                ) : (
                  <HiMail className={`w-6 h-6`} />
                )}
              </button>
              <AnimatePresence>
                {isEmailCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1.5 text-sm bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-lg shadow-lg whitespace-nowrap`}
                  >
                    복사되었습니다!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 스크롤 다운 버튼 */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-emerald-500/80 transition-colors animate-bounce`}
      >
        <HiArrowDown className={`w-8 h-8`} />
      </motion.button>
    </section>
  );
}
