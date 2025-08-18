"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NAVIGATION_ITEMS } from "@/types";
import { ThemeToggle } from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: scrollDirection === "down" && isScrolled ? -100 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${
              isScrolled
                ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
                : "bg-transparent"
            }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href={"#hero"}
            onClick={() => handleNavClick("hero")}
            className="text-xl md:text-2xl font-bold hover:text-emerald-200 transition-colors"
          >
            {"Portfolio"}
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-900 dark:text-gray-300 hover:text-emerald-200 dark:hover:text-emerald-200 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 테마 토글 및 모바일 메뉴 버튼 */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="메뉴 버튼"
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 drak:border-gray-700 bg-white dark:bg-gray-900"
            >
              <div className="py-4 space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
