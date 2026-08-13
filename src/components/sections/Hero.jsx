import { motion } from "framer-motion";
import {
  GlowCard,
  MagneticButton,
  Badge,
  GradientText,
  TextRevealImage,
} from "../ui";
import { ArrowRight, Zap } from "lucide-react";

/**
 * Hero Section - Premium hero with animated glow, value prop, and CTAs
 */
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-32 px-4">
      {/* Content */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <Badge tone="primary" className="inline-flex items-center gap-2">
            <Zap size={14} />
            Now accepting projects on Fiverr
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants}>
          <TextRevealImage className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight inline-block">
            Premium React & <GradientText animate>UI/UX</GradientText>{" "}
            Development
          </TextRevealImage>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build stunning, high-performance web experiences optimized for
          conversion. From landing pages to complex dashboards—crafted with
          precision and polish.
        </motion.p>

        {/* Availability Status */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <GlowCard className="inline-flex items-center gap-3 px-6 py-3">
            <div className="w-3 h-3 rounded-full bg-glow-primary animate-pulse" />
            <span className="text-sm font-medium">Open for projects</span>
          </GlowCard>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton size="lg" variant="primary" className="group">
            View my work
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </MagneticButton>

          <MagneticButton size="lg" variant="ghost">
            Get in touch
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-text-muted rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements - grid background */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="border border-white/10 rounded" />
        ))}
      </div>
    </section>
  );
}
