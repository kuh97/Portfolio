"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const toggleScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevOffset) < 150) {
        return;
      }

      setScrollDirection(scrollY > prevOffset ? "down" : "up");
      setPrevOffset(scrollY);
    };

    window.addEventListener("scroll", toggleScrollDirection);
    return () => window.removeEventListener("scroll", toggleScrollDirection);
  }, [prevOffset]);

  return scrollDirection;
}
