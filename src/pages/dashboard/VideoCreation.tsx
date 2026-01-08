import { useState } from "react";
import { motion, Reorder, useDragControls } from "framer-motion";
import {
  Video,
  Play,
  Plus,
  Trash2,
  Mic,
  Volume2,
  Sparkles,
  RefreshCw,
  Save,
  GripVertical,
  ChevronDown,
  Clock,
  Film,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Scene {
  id: string;
  title: string;
  script: string;
  duration: number;
  visualNote: string;
}

const voices = [
  { id: "professional", name: "Professional", gender: "Male", accent: "American", preview: "Deep, confident tone" },
  { id: "friendly", name: "Friendly", gender: "Female", accent: "American", preview: "Warm, approachable voice" },
  { id: "energetic", name: "Energetic", gender: "Male", accent: "British", preview: "Dynamic, upbeat delivery" },
  { id: "calm", name: "Calm", gender: "Female", accent: "British", preview: "Soothing, relaxed tone" },
  { id: "narrator", name: "Narrator", gender: "Male", accent: "Neutral", preview: "Documentary style" },
  { id: "conversational", name: "Conversational", gender: "Female", accent: "Australian", preview: "Natural, casual speech" },
];

const defaultScenes: Scene[] = [
  { id: "1", title: "Hook", script: "", duration: 5, visualNote: "Attention-grabbing opening shot" },
  { id: "2", title: "Problem", script: "", duration: 10, visualNote: "Showcase the pain point" },
  { id: "3", title: "Solution", script: "", duration: 15, visualNote: "Introduce your product/idea" },
  { id: "4", title: "Call to Action", script: "", duration: 5, visualNote: "Clear next step for viewers" },
];

interface SceneItemProps {
  scene: Scene;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onUpdate: (updates: Partial<Scene>) => void;
  onRemove: () => void;
  canRemove: boolean;
}

function SceneItem({ scene, index, isExpanded, onToggleExpand, onUpdate, onRemove, canRemove }: SceneItemProps) {
  const dragControls = useDragControls();

  return (
    <Reorder.Item
      value={scene}
      dragListener={false}
      dragControls={dragControls}
      className={`rounded-xl border transition-all ${
        isExpanded
          ? "border-primary/50 bg-primary/5"
          : "border-border/50 bg-secondary/20 hover:border-border"
      }`}
      whileDrag={{ 
        scale: 1.02, 
        boxShadow: "0 8px 32px -8px hsl(0 0% 0% / 0.5)",
        cursor: "grabbing"
      }}
    >
      {/* Scene Header */}
      <div className="w-full flex items-center gap-3 p-4">
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="cursor-grab active:cursor-grabbing touch-none p-1 -m-1 rounded hover:bg-secondary/50 transition-colors"
        >
          <GripVertical className="h-4 w-4 text-muted-foreground" />
        </div>
        <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
          {index + 1}
        </span>
        <Input
          value={scene.title}
          onChange={(e) => onUpdate({ title: e.target.value })}
          className="flex-1 bg-transparent border-none h-auto p-0 text-foreground font-medium focus-visible:ring-0"
        />
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{scene.duration}s</span>
        </div>
        <button onClick={onToggleExpand} className="p-1 rounded hover:bg-secondary/50 transition-colors">
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-4 pb-4 space-y-4"
        >
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-2">Script / Voiceover</label>
            <Textarea
              placeholder="What will be said in this scene..."
              value={scene.script}
              onChange={(e) => onUpdate({ script: e.target.value })}
              className="min-h-[100px] bg-secondary/30 border-border/50 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Duration (seconds)</label>
              <Input
                type="number"
                min={1}
                max={60}
                value={scene.duration}
                onChange={(e) => onUpdate({ duration: parseInt(e.target.value) || 5 })}
                className="bg-secondary/30 border-border/50"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-2">Visual Notes</label>
              <Input
                placeholder="Describe the visuals..."
                value={scene.visualNote}
                onChange={(e) => onUpdate({ visualNote: e.target.value })}
                className="bg-secondary/30 border-border/50"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={onRemove}
              disabled={!canRemove}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove Scene
            </Button>
          </div>
        </motion.div>
      )}
    </Reorder.Item>
  );
}

export default function VideoCreation() {
  const [scenes, setScenes] = useState<Scene[]>(defaultScenes);
  const [selectedVoice, setSelectedVoice] = useState("professional");
  const [isGenerating, setIsGenerating] = useState(false);
  const [expandedScene, setExpandedScene] = useState<string | null>("1");

  const totalDuration = scenes.reduce((acc, scene) => acc + scene.duration, 0);

  const addScene = () => {
    const newScene: Scene = {
      id: Date.now().toString(),
      title: `Scene ${scenes.length + 1}`,
      script: "",
      duration: 10,
      visualNote: "",
    };
    setScenes([...scenes, newScene]);
    setExpandedScene(newScene.id);
  };

  const removeScene = (id: string) => {
    if (scenes.length > 1) {
      setScenes(scenes.filter((s) => s.id !== id));
    }
  };

  const updateScene = (id: string, updates: Partial<Scene>) => {
    setScenes(scenes.map((s) => (s.id === id ? { ...s, ...updates } : s)));
  };

  const handleGenerateScript = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setScenes([
        { id: "1", title: "Hook", script: "What if your content could create itself while you sleep?", duration: 5, visualNote: "Dramatic zoom into screen showing AI at work" },
        { id: "2", title: "Problem", script: "Creating content is exhausting. Research, writing, editing, posting — it never ends. And the algorithm demands you show up every single day.", duration: 10, visualNote: "Frustrated creator at desk, multiple browser tabs, notifications piling up" },
        { id: "3", title: "Solution", script: "Introducing GhostPost — your AI content team. Multiple AI agents work together to research trends, write in your voice, design visuals, and publish across all platforms. And you stay in complete control.", duration: 15, visualNote: "Split screen showing AI agents working, kanban board moving, content publishing" },
        { id: "4", title: "Call to Action", script: "Start creating smarter today. Link in bio.", duration: 5, visualNote: "Logo animation with CTA button overlay" },
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Video Creation</h1>
          <p className="text-muted-foreground mt-1">Script, scene breakdown, and voice selection</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">{totalDuration}s</span>
          </div>
          <Button variant="outline" onClick={handleGenerateScript} disabled={isGenerating}>
            {isGenerating ? <RefreshCw className="h-4 w-4 animate-spin mr-2" /> : <Sparkles className="h-4 w-4 mr-2" />}
            Generate Script
          </Button>
          <Button variant="hero">
            <Film className="h-4 w-4 mr-2" />
            Create Video
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Scene Breakdown - Left 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Scene Breakdown</h2>
              <Button variant="ghost" size="sm" onClick={addScene}>
                <Plus className="h-4 w-4 mr-1" />
                Add Scene
              </Button>
            </div>

            <Reorder.Group
              axis="y"
              values={scenes}
              onReorder={setScenes}
              className="space-y-3"
            >
              {scenes.map((scene, index) => (
                <SceneItem
                  key={scene.id}
                  scene={scene}
                  index={index}
                  isExpanded={expandedScene === scene.id}
                  onToggleExpand={() => setExpandedScene(expandedScene === scene.id ? null : scene.id)}
                  onUpdate={(updates) => updateScene(scene.id, updates)}
                  onRemove={() => removeScene(scene.id)}
                  canRemove={scenes.length > 1}
                />
              ))}
            </Reorder.Group>
          </motion.div>

          {/* Script Editor - Full Script View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Full Script</h2>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 min-h-[150px]">
              {scenes.some((s) => s.script) ? (
                <div className="space-y-4">
                  {scenes.map((scene, index) => (
                    scene.script && (
                      <div key={scene.id}>
                        <span className="text-xs font-medium text-primary uppercase tracking-wide">
                          [{scene.title}]
                        </span>
                        <p className="text-foreground mt-1">{scene.script}</p>
                        {index < scenes.length - 1 && scenes[index + 1]?.script && (
                          <div className="border-t border-border/30 mt-4" />
                        )}
                      </div>
                    )
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Add script content to your scenes above, or click "Generate Script" to get started
                </p>
              )}
            </div>
          </motion.div>
        </div>

        {/* Voice Selection & Preview - Right column */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Voice Selection</h2>
            <div className="space-y-2">
              {voices.map((voice) => (
                <button
                  key={voice.id}
                  onClick={() => setSelectedVoice(voice.id)}
                  className={`w-full p-4 rounded-xl border transition-all text-left ${
                    selectedVoice === voice.id
                      ? "border-primary/50 bg-primary/5"
                      : "border-border/50 bg-secondary/20 hover:border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{voice.name}</span>
                    <button
                      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Play voice preview
                      }}
                    >
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-secondary/50">{voice.gender}</span>
                    <span className="px-2 py-0.5 rounded bg-secondary/50">{voice.accent}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{voice.preview}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Preview Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Preview</h2>
            <div className="aspect-video rounded-xl bg-secondary/30 border border-border/30 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Play className="h-8 w-8 text-primary ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">Generate video to preview</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="flex gap-1">
                {scenes.map((scene, index) => (
                  <div
                    key={scene.id}
                    className="flex-1 group cursor-pointer"
                    style={{ flex: scene.duration }}
                    onClick={() => setExpandedScene(scene.id)}
                  >
                    <div
                      className={`h-2 rounded-full transition-colors ${
                        expandedScene === scene.id
                          ? "bg-primary"
                          : "bg-primary/30 group-hover:bg-primary/50"
                      }`}
                    />
                    <p className="text-[10px] text-muted-foreground mt-1 truncate">
                      {scene.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Agent Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-card border border-border/50"
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Video Agent</h2>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Video className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-card" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground text-sm">Video Agent</p>
                <p className="text-xs text-muted-foreground">Ready to generate</p>
              </div>
              <Mic className="h-4 w-4 text-muted-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
