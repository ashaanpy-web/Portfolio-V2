/**
 * Design system constants and theme tokens
 */

export const theme = {
  colors: {
    base: {
      ink: "#0B0F19",
      surface: "#151A2E",
    },
    glow: {
      primary: "#7C3AED", // violet
      secondary: "#22D3EE", // cyan
    },
    text: {
      light: "#F8FAFC",
      muted: "rgba(248, 250, 252, 0.65)",
    },
  },
  animations: {
    duration: {
      fast: 150,
      base: 300,
      slow: 500,
    },
  },
};

export const config = {
  enableReducedMotion: true,
  lowEndDeviceOptimizations: true,
  targetBreakpoint: "768px",
};

export const socials = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Email", url: "mailto:contact@example.com" },
];

export const services = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "High-converting, responsive landing pages built with React & Tailwind.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "E-commerce UI",
    description:
      "Modern, accessible e-commerce interfaces with smooth interactions.",
    icon: "ShoppingCart",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description:
      "Custom admin dashboards with data visualization and real-time updates.",
    icon: "BarChart3",
  },
  {
    id: 4,
    title: "React Components",
    description:
      "Reusable, well-documented component libraries for your projects.",
    icon: "Code",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand your goals, audience, and technical requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Create stunning, pixel-perfect designs optimized for conversion.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop fast, accessible, and maintainable code.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy, test, and optimize for performance and SEO.",
  },
];
