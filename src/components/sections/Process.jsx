import { motion } from "framer-motion";
import { GlowCard, Badge } from "../ui";
import { CheckCircle2 } from "lucide-react";

/**
 * Process Section - Workflow timeline with 4 steps
 */
export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understand your goals, audience, target devices, and technical requirements.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Create pixel-perfect designs with premium aesthetics optimized for conversion.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Develop fast, accessible, and maintainable code with performance in mind.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Deploy, test across devices, and optimize for SEO and performance metrics.",
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <Badge tone="secondary" className="mb-4 inline-block">
            My Process
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            A proven workflow for <span className="text-gradient">success</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-glow-primary via-glow-secondary to-glow-primary opacity-30 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 flex justify-end md:justify-start">
                  <GlowCard className="p-8 max-w-sm w-full" withSpotlight>
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-glow-primary/20">
                        <CheckCircle2 size={20} className="text-glow-primary" />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold mb-2 text-text-light">
                      {step.title}
                    </h3>

                    <p className="text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </GlowCard>
                </div>

                {/* Number - centered */}
                <div className="hidden md:flex flex-col items-center justify-start">
                  <div className="text-5xl font-bold text-glow-primary/20 font-mono mb-2">
                    {step.number}
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-glow-secondary to-transparent" />
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
