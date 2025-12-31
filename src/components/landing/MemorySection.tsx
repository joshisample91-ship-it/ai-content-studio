import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

const memoryNodes = [
  { label: "Prefers short hooks", delay: 0.3 },
  { label: "Avoid emojis in LinkedIn", delay: 0.5 },
  { label: "Tech-focused audience", delay: 0.7 },
  { label: "Casual tone on Twitter", delay: 0.9 },
  { label: "Weekly long-form blog", delay: 1.1 },
  { label: "Morning post schedule", delay: 1.3 },
];

export function MemorySection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Brain className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">Persistent Memory</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              It Learns <span className="text-gradient">You.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              GhostPost remembers everything about your brand, preferences, and what works. Every piece of content gets smarter over time.
            </p>

            <ul className="space-y-4">
              {["Your writing style", "Topics you approve", "Platforms you prefer", "Engagement patterns"].map(
                (item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                      <Sparkles className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-elevated">
              {/* Brain Icon Center */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Brain className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
                </div>
              </div>

              {/* Memory Timeline */}
              <div className="space-y-3">
                {memoryNodes.map((node, index) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: node.delay }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{node.label}</span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {index === 0 ? "Just now" : `${index * 2}d ago`}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Growing Timeline Effect */}
              <div className="absolute left-12 top-32 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
