import { useState, useEffect } from "react";

/**
 * Hook to track mouse position on screen
 * Used for spotlight/glow-follow effects
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Only track mouse on non-touch devices
    if (window.matchMedia("(hover: hover)").matches) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return isClient ? position : null;
}
