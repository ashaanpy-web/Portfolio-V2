import { cn } from "../../lib/cn";
import { forwardRef } from "react";

/**
 * GlowCard - Premium glassmorphic card with optional spotlight hover effect
 * Supports variant tones (primary/secondary glow)
 */
export const GlowCard = forwardRef(
  (
    { children, className, tone = "primary", withSpotlight = false, ...props },
    ref,
  ) => {
    const spotlightColor =
      tone === "primary"
        ? "rgba(124, 58, 237, 0.35)" // violet
        : "rgba(34, 211, 238, 0.35)"; // cyan

    return (
      <div
        ref={ref}
        className={cn(
          "glass relative overflow-hidden rounded-3xl",
          "transition-all duration-300 hover:shadow-lg hover:shadow-black/40",
          className,
        )}
        {...props}
        onMouseMove={
          withSpotlight
            ? (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--x",
                  `${e.clientX - rect.left}px`,
                );
                e.currentTarget.style.setProperty(
                  "--y",
                  `${e.clientY - rect.top}px`,
                );
              }
            : undefined
        }
      >
        {/* Spotlight glow overlay */}
        {withSpotlight && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), ${spotlightColor}, transparent 70%)`,
            }}
          />
        )}

        {/* Inner highlight border for glass effect */}
        <div className="glass-inner pointer-events-none absolute inset-0" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  },
);

GlowCard.displayName = "GlowCard";
