import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, FileText, Video } from "lucide-react";

const platforms = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    description: "Professional thought leadership",
    preview: "Just published: '5 AI trends reshaping...'",
    color: "bg-blue-600",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    description: "Visual storytelling & reels",
    preview: "New carousel: '10 productivity tips...'",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
  },
  {
    id: "twitter",
    name: "Twitter (X)",
    icon: Twitter,
    description: "Real-time engagement",
    preview: "Thread: 'Why AI agents are the future...'",
    color: "bg-foreground",
  },
  {
    id: "blog",
    name: "Blog",
    icon: FileText,
    description: "Long-form SEO content",
    preview: "Draft: 'Complete Guide to AI Content...'",
    color: "bg-emerald-600",
  },
  {
    id: "video",
    name: "Video",
    icon: Video,
    description: "Reels, Shorts & TikTok",
    preview: "Script ready: 'Day in the life of...'",
    color: "bg-red-600",
  },
];

export function PlatformsSection() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Connected to the{" "}
            <span className="text-gradient">Platforms That Matter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your niche. Your tone. Every single day.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="platform-card group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${platform.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <platform.icon className="h-6 w-6 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-1">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>

                {/* Preview */}
                <div className="p-3 rounded-lg bg-secondary/50 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Latest
                    </span>
                  </div>
                  <p className="text-xs text-foreground/80 line-clamp-2">{platform.preview}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
