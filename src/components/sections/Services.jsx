import { motion } from "framer-motion";
import { GlowCard, Badge } from "../ui";
import { Code2, Zap, BarChart3, ShoppingCart } from "lucide-react";

/**
 * Services Section - Showcase 4 key service offerings
 */
export function Services() {
  const services = [
    {
      icon: Zap,
      title: "Landing Pages",
      description:
        "High-converting, responsive landing pages built with React & Tailwind. Optimized for speed and performance.",
      tools: ["React", "Tailwind", "Framer Motion"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce UI",
      description:
        "Modern, accessible e-commerce interfaces with smooth interactions and payment integration ready.",
      tools: ["React", "Tailwind", "React Hook Form"],
    },
    {
      icon: BarChart3,
      title: "Dashboard UI",
      description:
        "Custom admin dashboards with data visualization, real-time updates, and intuitive controls.",
      tools: ["React", "Charts.js", "Tailwind"],
    },
    {
      icon: Code2,
      title: "React Components",
      description:
        "Reusable, well-documented component libraries tailored to your project needs and design system.",
      tools: ["React", "Storybook", "TypeScript"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <Badge tone="primary" className="mb-4 inline-block">
            What I Offer
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Services designed for{" "}
            <span className="text-gradient">conversion</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From concept to launch, I deliver pixel-perfect,
            performance-optimized solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlowCard
                  className="h-full p-8 group hover:border-glow-primary/50"
                  withSpotlight
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-glow-primary/10 group-hover:bg-glow-primary/20 transition-colors">
                      <Icon size={24} className="text-glow-primary" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold mb-3 text-text-light">
                    {service.title}
                  </h3>

                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <Badge
                        key={tool}
                        tone="neutral"
                        variant="outline"
                        className="text-xs"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
