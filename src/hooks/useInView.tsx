import { useInView as useInViewObserver } from "react-intersection-observer";

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.01, triggerOnce = false, rootMargin = "0px" } = options;

  const { ref, inView } = useInViewObserver({
    threshold,
    triggerOnce,
    rootMargin,
  });

  return { ref, inView };
}
