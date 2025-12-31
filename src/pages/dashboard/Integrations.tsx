import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, FileText, Video, Check, ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    description: "Professional content and thought leadership",
    connected: true,
    lastSync: "5 minutes ago",
    color: "bg-blue-600",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    description: "Visual storytelling and reels",
    connected: true,
    lastSync: "10 minutes ago",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
  },
  {
    id: "twitter",
    name: "Twitter (X)",
    icon: Twitter,
    description: "Real-time engagement and threads",
    connected: true,
    lastSync: "2 minutes ago",
    color: "bg-foreground",
  },
  {
    id: "blog",
    name: "Blog CMS",
    icon: FileText,
    description: "Long-form SEO content",
    connected: false,
    lastSync: null,
    color: "bg-emerald-600",
  },
  {
    id: "video",
    name: "Video Platforms",
    icon: Video,
    description: "Reels, Shorts & TikTok",
    connected: false,
    lastSync: null,
    color: "bg-red-600",
  },
];

export default function Integrations() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Integrations</h1>
        <p className="text-muted-foreground mt-1">Connect your platforms and manage publishing</p>
      </div>

      {/* Connected Count */}
      <div className="p-6 rounded-2xl bg-card border border-border/50">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-foreground">
              {integrations.filter((i) => i.connected).length}/{integrations.length}
            </div>
            <div className="text-muted-foreground">Platforms Connected</div>
          </div>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Sync All
          </Button>
        </div>
      </div>

      {/* Integration Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl border transition-all ${
              integration.connected
                ? "bg-card border-border/50 hover:border-primary/30"
                : "bg-secondary/20 border-border/30"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl ${integration.color} flex items-center justify-center`}
              >
                <integration.icon className="h-6 w-6 text-background" />
              </div>
              {integration.connected && (
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                  <Check className="h-3 w-3" />
                  Connected
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-1">{integration.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>

            {integration.connected ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last sync</span>
                  <span className="text-foreground">{integration.lastSync}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Sync
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <Button variant="hero" className="w-full">
                Connect
              </Button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
