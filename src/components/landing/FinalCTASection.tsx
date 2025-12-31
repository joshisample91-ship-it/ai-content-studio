import { motion } from "framer-motion";
import { ArrowRight, Ghost } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex mb-8"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Ghost className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl animate-pulse-glow" />
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Stop Creating <span className="text-gradient">Alone.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Let AI research, write, design, and publish — while you focus on thinking.
          </p>

          {/* CTA */}
          <Link to="/dashboard">
            <Button variant="hero" size="xl" className="group">
              Get Started Free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Trust Note */}
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
