import { cn } from "../../lib/cn";
import { forwardRef, useState } from "react";

/**
 * MagneticButton - Button that nudges toward cursor on hover
 * Provides premium magnetic interaction feel
 */
export const MagneticButton = forwardRef(
  (
    {
      children,
      className,
      size = "md",
      variant = "primary",
      isLoading = false,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      if (typeof window === "undefined") return;

      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      // Magnetic pull effect (max 10px)
      const magneticDistance = Math.min(50, distance);
      const magneticStrength = Math.max(0, (50 - magneticDistance) / 50);

      setPosition({
        x: distanceX * magneticStrength * 0.1,
        y: distanceY * magneticStrength * 0.1,
      });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      primary:
        "glass border-glow-primary/30 hover:border-glow-primary/60 text-text-light",
      secondary:
        "glass border-glow-secondary/30 hover:border-glow-secondary/60 text-text-light",
      ghost: "text-text-light hover:bg-white/5 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative font-semibold rounded-2xl transition-all duration-200",
          "active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-glow-primary/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          sizeClasses[size],
          variantClasses[variant],
          className,
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        disabled={disabled || isLoading}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {isLoading && (
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}
          {children}
        </span>
      </button>
    );
  },
);

MagneticButton.displayName = "MagneticButton";
