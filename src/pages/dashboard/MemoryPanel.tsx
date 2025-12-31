import { motion } from "framer-motion";
import { Brain, Edit2, Trash2, ToggleLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

interface MemoryItem {
  id: string;
  label: string;
  category: string;
  date: string;
  enabled: boolean;
}

const initialMemory: MemoryItem[] = [
  { id: "1", label: "Prefers short hooks on LinkedIn", category: "Writing", date: "2 days ago", enabled: true },
  { id: "2", label: "Avoid emojis in professional posts", category: "Style", date: "3 days ago", enabled: true },
  { id: "3", label: "Tech-focused audience (developers, founders)", category: "Audience", date: "1 week ago", enabled: true },
  { id: "4", label: "Casual tone works best on Twitter", category: "Tone", date: "1 week ago", enabled: true },
  { id: "5", label: "Weekly long-form blog posts preferred", category: "Schedule", date: "2 weeks ago", enabled: true },
  { id: "6", label: "Morning posts get higher engagement", category: "Timing", date: "2 weeks ago", enabled: false },
  { id: "7", label: "Video content outperforms static images", category: "Format", date: "3 weeks ago", enabled: true },
];

const categories = ["All", "Writing", "Style", "Audience", "Tone", "Schedule", "Timing", "Format"];

export default function MemoryPanel() {
  const [memory, setMemory] = useState<MemoryItem[]>(initialMemory);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMemory = selectedCategory === "All" 
    ? memory 
    : memory.filter(item => item.category === selectedCategory);

  const toggleMemory = (id: string) => {
    setMemory(memory.map(item => 
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">AI Memory</h1>
          <p className="text-muted-foreground mt-1">What the AI knows about your brand and preferences</p>
        </div>
        <Button variant="hero">
          <Plus className="h-4 w-4 mr-2" />
          Add Memory
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Brain className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground">{memory.length}</div>
          <div className="text-sm text-muted-foreground">Total Memories</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-success/10 text-success">
              <ToggleLeft className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground">{memory.filter(m => m.enabled).length}</div>
          <div className="text-sm text-muted-foreground">Active Memories</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
              <Edit2 className="h-5 w-5" />
            </div>
          </div>
          <div className="text-3xl font-bold text-foreground">{categories.length - 1}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${
              selectedCategory === category
                ? "bg-primary/10 text-primary border border-primary/50"
                : "bg-secondary/30 text-muted-foreground border border-transparent hover:border-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Memory List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-3"
      >
        {filteredMemory.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`p-4 rounded-xl border transition-all ${
              item.enabled
                ? "bg-card border-border/50 hover:border-primary/30"
                : "bg-secondary/20 border-border/30 opacity-60"
            }`}
          >
            <div className="flex items-center gap-4">
              <Switch
                checked={item.enabled}
                onCheckedChange={() => toggleMemory(item.id)}
              />
              <div className="flex-1">
                <p className="text-foreground font-medium">{item.label}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
