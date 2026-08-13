import { cn } from "../../lib/cn";

/**
 * Badge - Small label for tags, status indicators, or skill labels
 * Supports different tones and variants
 */
export function Badge({
  children,
  className,
  tone = "primary",
  variant = "solid",
}) {
  const toneClasses = {
    primary:
      variant === "solid"
        ? "bg-glow-primary/20 text-glow-primary border border-glow-primary/30"
        : "text-glow-primary border border-glow-primary/50 hover:bg-glow-primary/10",
    secondary:
      variant === "solid"
        ? "bg-glow-secondary/20 text-glow-secondary border border-glow-secondary/30"
        : "text-glow-secondary border border-glow-secondary/50 hover:bg-glow-secondary/10",
    neutral:
      variant === "solid"
        ? "bg-white/10 text-text-muted border border-white/20"
        : "text-text-muted border border-white/30 hover:bg-white/10",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium",
        "transition-colors duration-200 font-mono",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
