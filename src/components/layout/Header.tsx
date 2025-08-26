"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION_ITEMS } from "@/types";
import { ThemeToggle } from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-emerald-300/40 backdrop-blur-md shadow-sm m-4 rounded-2xl opacity-90"
            : "bg-transparent"
        }`}
    >
      <div className={`section-container`}>
        <div className={`flex items-center justify-between h-16 md:h-20`}>
          <h1
            className={`text-2xl font-semibold transition-colors ${
              isScrolled ? "text-black dark:text-white" : "dark:text-white"
            }`}
          >
            Portfolio
          </h1>
          {/* 데스크탑 네비게이션 */}
          <nav className={`hidden md:flex items-center space-x-8`}>
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`text-black dark:text-white font-medium transition-all duration-300 transform hover:-translate-y-2 hover:underline hover:underline-offset-4 p-2`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 테마 토글 및 모바일 메뉴 버튼 */}
          <div className={`flex items-center space-x-4`}>
            <ThemeToggle />

            <button
              aria-label="메뉴 버튼"
              className={`md:hidden p-2 rounded-2xl text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiX className={`w-6 h-6`} />
              ) : (
                <HiMenu className={`w-6 h-6`} />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              animate={{ opacity: 1, height: "auto" }}
              className={`md:hidden border-t border-gray-200 dark:border-gray-700 ${
                isScrolled ? "bg-transparent" : "bg-emerald-300/30"
              }`}
              exit={{ opacity: 0, height: 0 }}
              initial={{ opacity: 0, height: 0 }}
            >
              <div className={`py-4 space-y-2 ${!isScrolled && "mx-3"}`}>
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className={`block w-full rounded-3xl text-center py-2 text-black dark:text-white hover:bg-gray-50 dark:hover:text-black transition-colors font-medium`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
