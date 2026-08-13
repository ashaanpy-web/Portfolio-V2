/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Charcoal Black & Matte Silver Palette
        "base-ink": "#1a1a1a",
        "base-surface": "#242424",
        "glow-primary": "#7C3AED",
        "glow-secondary": "#22D3EE",
        "text-light": "#c0c0c0",
        "text-muted": "rgba(192, 192, 192, 0.65)",
      },
      fontFamily: {
        display: ["Clash Display", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Extended type scale with 1.25 ratio
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.563rem", { lineHeight: "2rem" }],
        "3xl": ["1.953rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.441rem", { lineHeight: "2.75rem" }],
        "5xl": ["3.052rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.815rem", { lineHeight: "4rem" }],
        // Custom display sizes
        "7xl": ["4.768rem", { lineHeight: "4.5rem" }],
        "8xl": ["5.960rem", { lineHeight: "5rem" }],
      },
      animation: {
        "liquid-blob": "liquidBlob 20s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        spotlight: "spotlight 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        liquidBlob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(40px, -50px) scale(1.1)" },
          "50%": { transform: "translate(-30px, 20px) scale(0.9)" },
          "75%": { transform: "translate(50px, 50px) scale(1.05)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        spotlight: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(124, 58, 237, 0.15)",
        "glow-md": "0 0 40px rgba(124, 58, 237, 0.25)",
        "glow-lg": "0 0 60px rgba(124, 58, 237, 0.35)",
        "glow-cyan": "0 0 40px rgba(34, 211, 238, 0.25)",
      },
      borderRadius: {
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [
    // Custom utilities
    function ({ addUtilities }) {
      addUtilities({
        ".glass": {
          "@apply bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20 rounded-2xl":
            {},
        },
        ".glass-sm": {
          "@apply bg-white/5 backdrop-blur-md border border-white/10 rounded-xl":
            {},
        },
        ".glass-inner": {
          "@apply ring-1 ring-inset ring-white/10": {},
        },
        ".text-gradient": {
          "@apply bg-gradient-to-r from-glow-primary to-glow-secondary bg-clip-text text-transparent":
            {},
        },
        ".magnetic": {
          "@apply transition-transform duration-200 ease-out": {},
        },
      });
    },
  ],
};
