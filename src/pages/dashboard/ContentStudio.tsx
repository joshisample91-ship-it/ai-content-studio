import { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Twitter,
  FileText,
  Video,
  Sparkles,
  Send,
  RefreshCw,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const platforms = [
  { id: "linkedin", name: "LinkedIn", icon: Linkedin },
  { id: "instagram", name: "Instagram", icon: Instagram },
  { id: "twitter", name: "Twitter", icon: Twitter },
  { id: "blog", name: "Blog", icon: FileText },
  { id: "video", name: "Video", icon: Video },
];

const tones = ["Professional", "Casual", "Witty", "Educational", "Inspirational"];

const contentTypes = ["Post", "Thread", "Carousel", "Blog", "Script"];

export default function ContentStudio() {
  const [selectedPlatform, setSelectedPlatform] = useState("linkedin");
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [selectedType, setSelectedType] = useState("Post");
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(
        `🚀 Here's a powerful insight about ${topic || "AI content creation"}:\n\nThe future of content isn't about creating more—it's about creating smarter.\n\nWith AI agents working 24/7, you can:\n\n→ Research trends while you sleep\n→ Draft content that matches your voice\n→ Design visuals that captivate\n→ Publish at peak engagement times\n\nThe best part? You stay in control.\n\nWhat's your take on AI-assisted content creation?\n\n#ContentCreation #AI #Productivity`
      );
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Content Studio</h1>
        <p className="text-muted-foreground mt-1">Create AI-powered content for any platform</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Topic Input */}
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <label className="block text-sm font-medium text-foreground mb-3">Topic or Idea</label>
            <Textarea
              placeholder="What do you want to create content about?"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="min-h-[120px] bg-secondary/30 border-border/50 resize-none"
            />
          </div>

          {/* Platform Selection */}
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <label className="block text-sm font-medium text-foreground mb-3">Platform</label>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    selectedPlatform === platform.id
                      ? "bg-primary/10 border-primary/50 text-primary"
                      : "bg-secondary/30 border-border/50 text-muted-foreground hover:border-border"
                  }`}
                >
                  <platform.icon className="h-4 w-4" />
                  <span className="text-sm">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tone Selection */}
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <label className="block text-sm font-medium text-foreground mb-3">Tone</label>
            <div className="flex flex-wrap gap-2">
              {tones.map((tone) => (
                <button
                  key={tone}
                  onClick={() => setSelectedTone(tone)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    selectedTone === tone
                      ? "bg-primary/10 border-primary/50 text-primary"
                      : "bg-secondary/30 border-border/50 text-muted-foreground hover:border-border"
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Content Type */}
          <div className="p-6 rounded-2xl bg-card border border-border/50">
            <label className="block text-sm font-medium text-foreground mb-3">Content Type</label>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    selectedType === type
                      ? "bg-primary/10 border-primary/50 text-primary"
                      : "bg-secondary/30 border-border/50 text-muted-foreground hover:border-border"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button
            variant="hero"
            size="lg"
            className="w-full"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Content
              </>
            )}
          </Button>
        </motion.div>

        {/* Output Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-6 rounded-2xl bg-card border border-border/50 flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Generated Content</h2>
            {generatedContent && (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
                <Button variant="ghost" size="sm" onClick={handleGenerate}>
                  <RefreshCw className="h-4 w-4 mr-1" />
                  Regenerate
                </Button>
              </div>
            )}
          </div>

          <div className="flex-1 min-h-[400px] p-4 rounded-xl bg-secondary/30 border border-border/30">
            {isGenerating ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary-foreground animate-pulse" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
                  </div>
                  <p className="text-muted-foreground">AI agents are working...</p>
                </div>
              </div>
            ) : generatedContent ? (
              <div className="whitespace-pre-wrap text-foreground">{generatedContent}</div>
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Your generated content will appear here
              </div>
            )}
          </div>

          {generatedContent && (
            <div className="mt-4 flex gap-3">
              <Button variant="outline" className="flex-1">
                Save as Draft
              </Button>
              <Button variant="hero" className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Schedule
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
