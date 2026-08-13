import { useReducedMotion } from "../../hooks";
import { useEffect, useState } from "react";
import { cn } from "../../lib/cn";

/**
 * LiquidBlob - Animated background blob for premium glow effect
 * Responds to mobile viewport with simplified animation
 */
export function LiquidBlob({
  delay = 0,
  position = "top-left",
  tone = "primary",
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Determine color based on tone
  const glowColor =
    tone === "primary"
      ? "rgba(124, 58, 237, 0.35)" // violet - subtle
      : "rgba(34, 211, 238, 0.35)"; // cyan - subtle

  // Position mapping - adjusted to keep more blob in viewport
  const positionClasses = {
    "top-left": "-top-1/4 -left-1/4",
    "top-right": "-top-1/4 -right-1/4",
    "bottom-left": "-bottom-1/4 -left-1/4",
    "bottom-right": "-bottom-1/4 -right-1/4",
  };

  return (
    <div
      className={cn(
        "absolute w-[700px] h-[700px] rounded-full pointer-events-none",
        "md:w-[1200px] md:h-[1200px]",
        positionClasses[position],
        !isMobile && !prefersReducedMotion && "animate-liquid-blob",
      )}
      style={{
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 60%)`,
        filter: isMobile ? "blur(50px)" : "blur(75px)",
        mixBlendMode: "screen",
        animation:
          !isMobile && !prefersReducedMotion
            ? `liquidBlob ${20 + delay}s ease-in-out infinite`
            : "none",
        animationDelay: `${delay}s`,
      }}
    />
  );
}
