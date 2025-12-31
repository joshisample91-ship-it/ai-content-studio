import { motion } from "framer-motion";
import { Search, Target, PenTool, Palette, Video, MessageSquare, Edit3, ArrowRight } from "lucide-react";
import { useState } from "react";

const agents = [
  {
    id: "research",
    name: "Research Agent",
    icon: Search,
    description: "Analyzes trending topics and audience insights",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "strategy",
    name: "Strategy Agent",
    icon: Target,
    description: "Plans content calendar and positioning",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "writer",
    name: "Writer Agent",
    icon: PenTool,
    description: "Crafts compelling copy in your voice",
    color: "from-teal-500 to-green-500",
  },
  {
    id: "design",
    name: "Design Agent",
    icon: Palette,
    description: "Creates visuals and graphics",
    color: "from-green-500 to-yellow-500",
  },
  {
    id: "video",
    name: "Video Agent",
    icon: Video,
    description: "Produces reels and short-form videos",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "critic",
    name: "Critic Agent",
    icon: MessageSquare,
    description: "Reviews for quality and brand alignment",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "editor",
    name: "Editor Agent",
    icon: Edit3,
    description: "Polishes and prepares for publishing",
    color: "from-red-500 to-pink-500",
  },
];

export function AgentWorkflowSection() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

  return (
    <section id="workflow" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Multiple AI Agents.{" "}
            <span className="text-gradient">One Perfect Workflow.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each agent specializes in a specific task, working together seamlessly to create content that resonates.
          </p>
        </motion.div>

        {/* Agent Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onMouseEnter={() => setActiveAgent(agent.id)}
                onMouseLeave={() => setActiveAgent(null)}
                className="relative group"
              >
                <div
                  className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeAgent === agent.id
                      ? "bg-card border-primary/50 shadow-glow scale-105"
                      : "bg-card/50 border-border/50 hover:border-border"
                  }`}
                >
                  {/* Active pulse */}
                  {activeAgent === agent.id && (
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r opacity-20 blur-sm animate-pulse-glow" 
                         style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  )}

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.color} p-2.5 mb-4 transition-transform group-hover:scale-110`}
                  >
                    <agent.icon className="w-full h-full text-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm font-semibold text-foreground mb-1">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">
                    {agent.description}
                  </p>

                  {/* Active indicator */}
                  <div
                    className={`mt-3 flex items-center gap-1.5 transition-opacity ${
                      activeAgent === agent.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[10px] text-success font-medium">Active</span>
                  </div>
                </div>

                {/* Arrow (except last) */}
                {index < agents.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-2">
            Hover over any agent to see it in action
          </p>
        </motion.div>
      </div>
    </section>
  );
}
