"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface ProjectModalClientProps {
  children: React.ReactNode;
}

export function ProjectModalClient({ children }: ProjectModalClientProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        router.back();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [router]);

  const handleCloseClick = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 -mt-12 pt-4`}
      id="ProjectModal"
    >
      <div
        className={`bg-stone-100 dark:bg-gray-800 rounded-lg p-8 m-4 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto`}
      >
        <button
          aria-label="Close modal"
          className={`primary-button sticky top-0 left-full ml-4 -mt-1 -mr-1 z-10 rounded-full px-2 py-2 close-button`}
          onClick={handleCloseClick}
        >
          <IoMdClose className={`w-5 h-5`} />
        </button>

        {children}
      </div>
    </div>
  );
}
