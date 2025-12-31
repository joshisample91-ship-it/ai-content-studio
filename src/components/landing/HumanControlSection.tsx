import { motion } from "framer-motion";
import { Shield, CheckCircle2, Clock, Eye } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function HumanControlSection() {
  const [autoPublish, setAutoPublish] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              {/* Workflow with checkpoints */}
              <div className="space-y-4">
                {[
                  { label: "Research Complete", status: "approved", icon: CheckCircle2 },
                  { label: "Draft Generated", status: "approved", icon: CheckCircle2 },
                  { label: "Design Created", status: "pending", icon: Clock },
                  { label: "Ready for Review", status: "waiting", icon: Eye },
                ].map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border ${
                      step.status === "approved"
                        ? "bg-success/5 border-success/20"
                        : step.status === "pending"
                        ? "bg-warning/5 border-warning/20"
                        : "bg-secondary/50 border-border/30"
                    }`}
                  >
                    <step.icon
                      className={`h-5 w-5 ${
                        step.status === "approved"
                          ? "text-success"
                          : step.status === "pending"
                          ? "text-warning"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-foreground font-medium">{step.label}</span>
                    <span
                      className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        step.status === "approved"
                          ? "bg-success/10 text-success"
                          : step.status === "pending"
                          ? "bg-warning/10 text-warning"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {step.status === "approved" ? "Approved" : step.status === "pending" ? "In Progress" : "Waiting"}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Toggle */}
              <div className="mt-6 p-4 rounded-xl bg-secondary/30 border border-border/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-foreground">Auto-publish</div>
                    <div className="text-xs text-muted-foreground">
                      {autoPublish ? "Content publishes automatically" : "Manual approval required"}
                    </div>
                  </div>
                  <Switch checked={autoPublish} onCheckedChange={setAutoPublish} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20 mb-6">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-sm text-success font-medium">Human-in-the-Loop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              You're Always{" "}
              <span className="text-gradient">in Control.</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              AI works fast. Humans decide what goes live. Every piece of content passes through your approval before publishing.
            </p>

            <p className="text-muted-foreground">
              Set up auto-publish for trusted content types, or review everything manually. Your brand, your rules.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
