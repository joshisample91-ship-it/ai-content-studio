import { useState } from "react";
import { motion } from "framer-motion";
import { MoreHorizontal, Plus, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: string;
  title: string;
  platform: "linkedin" | "instagram" | "twitter";
  status: "research" | "draft" | "review" | "approved" | "published";
  agent: string;
}

const initialItems: ContentItem[] = [
  { id: "1", title: "5 AI Trends for 2025", platform: "linkedin", status: "published", agent: "Editor" },
  { id: "2", title: "Productivity Hacks Thread", platform: "twitter", status: "approved", agent: "Critic" },
  { id: "3", title: "Behind the Scenes Reel", platform: "instagram", status: "review", agent: "Video" },
  { id: "4", title: "Future of Work Blog", platform: "linkedin", status: "draft", agent: "Writer" },
  { id: "5", title: "Weekly Roundup", platform: "twitter", status: "research", agent: "Research" },
];

const columns = [
  { id: "research", label: "Research", color: "bg-blue-500" },
  { id: "draft", label: "Draft", color: "bg-yellow-500" },
  { id: "review", label: "Review", color: "bg-orange-500" },
  { id: "approved", label: "Approved", color: "bg-green-500" },
  { id: "published", label: "Published", color: "bg-primary" },
];

const platformIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
};

export default function WorkflowKanban() {
  const [items] = useState<ContentItem[]>(initialItems);

  const getItemsByStatus = (status: string) => items.filter((item) => item.status === status);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Content Workflow</h1>
          <p className="text-muted-foreground mt-1">Track your content through the pipeline</p>
        </div>
        <Button variant="hero">
          <Plus className="h-4 w-4 mr-2" />
          New Content
        </Button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-5 gap-4 overflow-x-auto pb-4">
        {columns.map((column, colIndex) => (
          <motion.div
            key={column.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: colIndex * 0.1 }}
            className="min-w-[240px]"
          >
            {/* Column Header */}
            <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-secondary/30">
              <div className={`w-2 h-2 rounded-full ${column.color}`} />
              <span className="font-medium text-foreground">{column.label}</span>
              <span className="ml-auto text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                {getItemsByStatus(column.id).length}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {getItemsByStatus(column.id).map((item, itemIndex) => {
                const PlatformIcon = platformIcons[item.platform];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: colIndex * 0.1 + itemIndex * 0.05 }}
                    className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-glow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-secondary">
                        <PlatformIcon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    <h3 className="font-medium text-foreground text-sm mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-[10px] font-bold text-primary-foreground">
                          {item.agent[0]}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.agent} Agent</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Add Card */}
              <button className="w-full p-4 rounded-xl border border-dashed border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors flex items-center justify-center gap-2">
                <Plus className="h-4 w-4" />
                <span className="text-sm">Add</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
