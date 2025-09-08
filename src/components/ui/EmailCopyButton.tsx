"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMail, HiCheck } from "react-icons/hi";

interface EmailCopyButtonProps {
  email: string;
}

export function EmailCopyButton({ email }: EmailCopyButtonProps) {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const handleEmailClick = () => {
    if (isEmailCopied) return;

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsEmailCopied(true);
        setTimeout(() => setIsEmailCopied(false), 2000);
      })
      .catch((err) => {
        console.error("이메일 복사에 실패했습니다:", err);
      });
  };

  return (
    <div className="relative">
      <button
        aria-label="이메일 복사하기"
        className="contact-icon"
        onClick={handleEmailClick}
      >
        {isEmailCopied ? (
          <HiCheck className="w-6 h-6 text-emerald-400/70" />
        ) : (
          <HiMail className="w-6 h-6" />
        )}
      </button>
      <AnimatePresence>
        {isEmailCopied && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 px-3 py-1.5 text-sm bg-emerald-400/70 text-white rounded-lg shadow-lg whitespace-nowrap"
            exit={{ opacity: 0, y: 10 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            복사되었습니다!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
