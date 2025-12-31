import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const stages = [
  { id: "research", label: "Research", status: "complete" },
  { id: "draft", label: "Draft", status: "active" },
  { id: "review", label: "Review", status: "pending" },
  { id: "approved", label: "Approved", status: "pending" },
  { id: "published", label: "Published", status: "pending" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container relative mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-8"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Multi-Agent AI Content Creation</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Your AI Content Team.</span>
              <br />
              <span className="text-gradient">Always Working.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10">
              Research, write, design, review, and publish content daily across all platforms — powered by collaborative AI agents and human approval.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  Start Creating Smarter
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="hero-secondary" size="xl" className="w-full sm:w-auto">
                <Play className="h-5 w-5" />
                Watch How It Works
              </Button>
            </div>
          </motion.div>

          {/* Right: Interactive Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Kanban Preview */}
            <div className="glass-card rounded-2xl p-6 shadow-elevated">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="text-xs text-muted-foreground">Content Pipeline</span>
              </div>

              {/* Stages */}
              <div className="flex gap-3 overflow-x-auto pb-4">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`flex-shrink-0 w-28 p-3 rounded-xl border transition-all ${
                      stage.status === "active"
                        ? "bg-primary/10 border-primary/50 agent-active"
                        : stage.status === "complete"
                        ? "bg-success/10 border-success/30"
                        : "bg-secondary/50 border-border/50"
                    }`}
                  >
                    <div className="text-xs font-medium text-foreground mb-2">{stage.label}</div>
                    <div className="flex items-center gap-1">
                      {stage.status === "active" && (
                        <>
                          <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <div className="pulse-ring w-2 h-2 bg-primary/50 -inset-1" />
                          </div>
                          <span className="text-[10px] text-primary">Running</span>
                        </>
                      )}
                      {stage.status === "complete" && (
                        <span className="text-[10px] text-success">Done</span>
                      )}
                      {stage.status === "pending" && (
                        <span className="text-[10px] text-muted-foreground">Waiting</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Agent Activity */}
              <div className="mt-4 p-4 rounded-xl bg-secondary/30 border border-border/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-foreground">W</span>
                    </div>
                    <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-success border-2 border-card" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Writer Agent</div>
                    <div className="text-xs text-muted-foreground">Generating LinkedIn post...</div>
                  </div>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-glow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-foreground">3 agents active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
