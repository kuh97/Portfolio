"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="테마 변경"
      className={`p-2 rounded-2xl hover:bg-gray-900/40 dark:hover:bg-white/40 transition-colors`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsSunFill className={`w-5 h-5 text-yellow-300`} />
      ) : (
        <BsMoonFill className={`w-5 h-5 text-blue-600`} />
      )}
    </button>
  );
}
