"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-2xl hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors"
      aria-label="테마 변경"
    >
      {theme === "dark" ? (
        <BsSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <BsMoon className="w-5 h-5 text-blue-600" />
      )}
    </button>
  );
}
