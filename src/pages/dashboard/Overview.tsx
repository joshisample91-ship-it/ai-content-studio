import { motion } from "framer-motion";
import {
  FileText,
  Link2,
  Clock,
  TrendingUp,
  ArrowUpRight,
  Search,
  PenTool,
  Palette,
  Video,
  MessageSquare,
  Edit3,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { label: "Posts This Week", value: "24", change: "+12%", icon: FileText },
  { label: "Platforms Connected", value: "5", change: "Active", icon: Link2 },
  { label: "Pending Approval", value: "3", change: "Review", icon: Clock },
  { label: "Engagement Score", value: "89%", change: "+5%", icon: TrendingUp },
];

const agents = [
  { name: "Research Agent", icon: Search, status: "complete", progress: 100 },
  { name: "Writer Agent", icon: PenTool, status: "active", progress: 65 },
  { name: "Design Agent", icon: Palette, status: "waiting", progress: 0 },
  { name: "Video Agent", icon: Video, status: "waiting", progress: 0 },
  { name: "Critic Agent", icon: MessageSquare, status: "waiting", progress: 0 },
  { name: "Editor Agent", icon: Edit3, status: "waiting", progress: 0 },
];

const recentContent = [
  { title: "5 AI Trends for 2025", platform: "LinkedIn", status: "published", time: "2h ago" },
  { title: "Productivity Tips Thread", platform: "Twitter", status: "review", time: "4h ago" },
  { title: "Behind the Scenes Reel", platform: "Instagram", status: "draft", time: "6h ago" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Your Content Command Center</h1>
          <p className="text-muted-foreground mt-1">Everything happening with your AI content team</p>
        </div>
        <Link to="/dashboard/studio">
          <Button variant="hero">
            Create Content
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Agent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Live Agent Activity</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">2 agents active</span>
            </div>
          </div>

          <div className="space-y-4">
            {agents.map((agent, index) => (
              <div
                key={agent.name}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                  agent.status === "active"
                    ? "bg-primary/5 border border-primary/20"
                    : agent.status === "complete"
                    ? "bg-success/5 border border-success/20"
                    : "bg-secondary/30 border border-transparent"
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl ${
                    agent.status === "active"
                      ? "bg-primary/20 text-primary"
                      : agent.status === "complete"
                      ? "bg-success/20 text-success"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <agent.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{agent.name}</span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        agent.status === "active"
                          ? "bg-primary/10 text-primary"
                          : agent.status === "complete"
                          ? "bg-success/10 text-success"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {agent.status === "active" ? "Running" : agent.status === "complete" ? "Done" : "Waiting"}
                    </span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        agent.status === "active"
                          ? "bg-gradient-to-r from-primary to-accent"
                          : agent.status === "complete"
                          ? "bg-success"
                          : "bg-transparent"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${agent.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Recent Content</h2>
          <div className="space-y-4">
            {recentContent.map((content) => (
              <div
                key={content.title}
                className="p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground text-sm">{content.title}</h3>
                  {content.status === "published" && (
                    <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{content.platform}</span>
                  <span>•</span>
                  <span>{content.time}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to="/dashboard/workflow">
            <Button variant="ghost" className="w-full mt-4">
              View All
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid sm:grid-cols-3 gap-4"
      >
        {[
          { label: "Create New Content", path: "/dashboard/studio" },
          { label: "Schedule Post", path: "/dashboard/workflow" },
          { label: "Review Pending", path: "/dashboard/workflow" },
        ].map((action) => (
          <Link key={action.label} to={action.path}>
            <Button variant="outline" className="w-full h-14 justify-between">
              {action.label}
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
