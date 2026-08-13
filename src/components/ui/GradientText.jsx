import { cn } from "../../lib/cn";

/**
 * GradientText - Text with gradient effect
 * Uses primary and secondary glow colors
 */
export function GradientText({ children, className, animate = false }) {
  return (
    <span
      className={cn(
        "text-gradient",
        animate && "animate-glow-pulse",
        className,
      )}
    >
      {children}
    </span>
  );
}
