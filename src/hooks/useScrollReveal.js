import { useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Hook for scroll-triggered reveal animations
 * Integrates with Framer Motion's whileInView
 */
export function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
}
