import { motion } from "framer-motion";
import { Zap, Calendar, Share2 } from "lucide-react";

const metrics = [
  { icon: Zap, value: "10x", label: "Faster content creation" },
  { icon: Calendar, value: "Daily", label: "AI research & insights" },
  { icon: Share2, value: "5+", label: "Platform publishing" },
];

const logos = [
  "Founders",
  "Creators",
  "Indie Hackers",
  "Marketing Teams",
  "Tech Professionals",
];

export function TrustSection() {
  return (
    <section className="py-20 border-t border-b border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Built for creators, founders, and modern teams
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-muted-foreground/60 font-semibold text-lg hover:text-foreground transition-colors cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/30 hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <metric.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
