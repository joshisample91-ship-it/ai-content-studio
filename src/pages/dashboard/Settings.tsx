import { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Type,
  Sparkles,
  Shield,
  Users,
  Bell,
  ToggleLeft,
  Check,
  ChevronRight,
  Crown,
  UserPlus,
  Trash2,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const tabs = [
  { id: "brand", label: "Brand Style", icon: Palette },
  { id: "approval", label: "Approval Rules", icon: Shield },
  { id: "automation", label: "Auto-Post", icon: ToggleLeft },
  { id: "team", label: "Team", icon: Users },
  { id: "notifications", label: "Notifications", icon: Bell },
];

const toneOptions = ["Professional", "Casual", "Witty", "Educational", "Inspirational", "Bold"];

const teamMembers = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "owner", avatar: "JD" },
  { id: "2", name: "Sarah Miller", email: "sarah@example.com", role: "admin", avatar: "SM" },
  { id: "3", name: "Alex Chen", email: "alex@example.com", role: "editor", avatar: "AC" },
];

const roleColors: Record<string, string> = {
  owner: "bg-primary/10 text-primary",
  admin: "bg-accent/10 text-accent",
  editor: "bg-success/10 text-success",
  viewer: "bg-muted text-muted-foreground",
};

export default function Settings() {
  const [activeTab, setActiveTab] = useState("brand");
  
  // Brand settings
  const [brandColor, setBrandColor] = useState("#3B82F6");
  const [accentColor, setAccentColor] = useState("#8B5CF6");
  const [selectedTone, setSelectedTone] = useState("Professional");
  const [brandName, setBrandName] = useState("GhostPost");
  
  // Approval rules
  const [requireApproval, setRequireApproval] = useState(true);
  const [autoApproveResearch, setAutoApproveResearch] = useState(false);
  const [autoApproveDrafts, setAutoApproveDrafts] = useState(false);
  const [notifyOnReady, setNotifyOnReady] = useState(true);
  
  // Auto-post settings
  const [autoPostEnabled, setAutoPostEnabled] = useState(false);
  const [autoPostLinkedIn, setAutoPostLinkedIn] = useState(true);
  const [autoPostTwitter, setAutoPostTwitter] = useState(true);
  const [autoPostInstagram, setAutoPostInstagram] = useState(false);
  const [postingSchedule, setPostingSchedule] = useState("optimal");
  
  // Notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Configure your workspace preferences</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-56 shrink-0"
        >
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 space-y-6"
        >
          {/* Brand Style Tab */}
          {activeTab === "brand" && (
            <>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-6">Brand Identity</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Brand Name</label>
                    <Input
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="max-w-md bg-secondary/30 border-border/50"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Primary Color</label>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl border border-border/50 cursor-pointer"
                          style={{ backgroundColor: brandColor }}
                        />
                        <Input
                          type="text"
                          value={brandColor}
                          onChange={(e) => setBrandColor(e.target.value)}
                          className="flex-1 bg-secondary/30 border-border/50 font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Accent Color</label>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl border border-border/50 cursor-pointer"
                          style={{ backgroundColor: accentColor }}
                        />
                        <Input
                          type="text"
                          value={accentColor}
                          onChange={(e) => setAccentColor(e.target.value)}
                          className="flex-1 bg-secondary/30 border-border/50 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-6">Content Tone</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Select the default tone for AI-generated content
                </p>
                <div className="flex flex-wrap gap-2">
                  {toneOptions.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                        selectedTone === tone
                          ? "bg-primary/10 border-primary/50 text-primary"
                          : "bg-secondary/30 border-border/50 text-muted-foreground hover:border-border"
                      }`}
                    >
                      {selectedTone === tone && <Check className="inline h-3 w-3 mr-1" />}
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-6">Typography</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Heading Font</label>
                    <select className="w-full h-10 px-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm">
                      <option>Inter</option>
                      <option>SF Pro</option>
                      <option>Geist</option>
                      <option>Plus Jakarta Sans</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Body Font</label>
                    <select className="w-full h-10 px-3 rounded-lg bg-secondary/30 border border-border/50 text-foreground text-sm">
                      <option>Inter</option>
                      <option>SF Pro</option>
                      <option>System UI</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Approval Rules Tab */}
          {activeTab === "approval" && (
            <>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-2">Content Approval</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Control how content flows through your workflow
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Require Manual Approval</p>
                      <p className="text-sm text-muted-foreground">All content must be approved before publishing</p>
                    </div>
                    <Switch checked={requireApproval} onCheckedChange={setRequireApproval} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Auto-Approve Research</p>
                      <p className="text-sm text-muted-foreground">Research agent outputs skip approval queue</p>
                    </div>
                    <Switch checked={autoApproveResearch} onCheckedChange={setAutoApproveResearch} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Auto-Approve Drafts</p>
                      <p className="text-sm text-muted-foreground">Draft content moves to publish queue automatically</p>
                    </div>
                    <Switch checked={autoApproveDrafts} onCheckedChange={setAutoApproveDrafts} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div>
                      <p className="font-medium text-foreground">Notify When Ready</p>
                      <p className="text-sm text-muted-foreground">Get notified when content is ready for review</p>
                    </div>
                    <Switch checked={notifyOnReady} onCheckedChange={setNotifyOnReady} />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-6">Approval Workflow</h2>
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {["Research", "Draft", "Review", "Approved", "Published"].map((stage, index) => (
                    <div key={stage} className="flex items-center gap-3">
                      <div className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                        index < 3 ? "bg-primary/10 text-primary" : "bg-secondary/50 text-muted-foreground"
                      }`}>
                        {stage}
                      </div>
                      {index < 4 && (
                        <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Highlighted stages require manual approval
                </p>
              </div>
            </>
          )}

          {/* Auto-Post Tab */}
          {activeTab === "automation" && (
            <>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Auto-Publish</h2>
                    <p className="text-sm text-muted-foreground">
                      Automatically publish approved content
                    </p>
                  </div>
                  <Switch checked={autoPostEnabled} onCheckedChange={setAutoPostEnabled} />
                </div>

                <div className={`space-y-4 transition-opacity ${autoPostEnabled ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center">
                        <span className="text-[#0A66C2] font-bold text-sm">in</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">LinkedIn</p>
                        <p className="text-xs text-muted-foreground">Auto-post to LinkedIn</p>
                      </div>
                    </div>
                    <Switch checked={autoPostLinkedIn} onCheckedChange={setAutoPostLinkedIn} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center">
                        <span className="text-foreground font-bold text-sm">𝕏</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Twitter / X</p>
                        <p className="text-xs text-muted-foreground">Auto-post to X</p>
                      </div>
                    </div>
                    <Switch checked={autoPostTwitter} onCheckedChange={setAutoPostTwitter} />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">IG</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Instagram</p>
                        <p className="text-xs text-muted-foreground">Auto-post to Instagram</p>
                      </div>
                    </div>
                    <Switch checked={autoPostInstagram} onCheckedChange={setAutoPostInstagram} />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-6">Posting Schedule</h2>
                <div className="space-y-3">
                  {[
                    { id: "optimal", label: "Optimal Times", desc: "AI picks the best times based on engagement data" },
                    { id: "morning", label: "Morning Rush", desc: "Post between 7-9 AM in your timezone" },
                    { id: "evening", label: "Evening Wind-down", desc: "Post between 6-8 PM in your timezone" },
                    { id: "custom", label: "Custom Schedule", desc: "Set your own posting times" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setPostingSchedule(option.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        postingSchedule === option.id
                          ? "border-primary/50 bg-primary/5"
                          : "border-border/50 bg-secondary/20 hover:border-border"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          postingSchedule === option.id ? "border-primary" : "border-muted-foreground"
                        }`}>
                          {postingSchedule === option.id && (
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{option.label}</p>
                          <p className="text-xs text-muted-foreground">{option.desc}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">Team Members</h2>
                    <p className="text-sm text-muted-foreground">Manage who has access to this workspace</p>
                  </div>
                  <Button variant="hero" size="sm">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Invite Member
                  </Button>
                </div>

                <div className="space-y-3">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-foreground">{member.avatar}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">{member.name}</p>
                            {member.role === "owner" && (
                              <Crown className="h-3 w-3 text-warning" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${roleColors[member.role]}`}>
                          {member.role}
                        </span>
                        {member.role !== "owner" && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h2 className="text-lg font-semibold text-foreground mb-6">Role Permissions</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-3 px-4 text-muted-foreground font-medium">Permission</th>
                        <th className="text-center py-3 px-4 text-muted-foreground font-medium">Viewer</th>
                        <th className="text-center py-3 px-4 text-muted-foreground font-medium">Editor</th>
                        <th className="text-center py-3 px-4 text-muted-foreground font-medium">Admin</th>
                        <th className="text-center py-3 px-4 text-muted-foreground font-medium">Owner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "View content", viewer: true, editor: true, admin: true, owner: true },
                        { name: "Create content", viewer: false, editor: true, admin: true, owner: true },
                        { name: "Approve content", viewer: false, editor: false, admin: true, owner: true },
                        { name: "Manage integrations", viewer: false, editor: false, admin: true, owner: true },
                        { name: "Manage team", viewer: false, editor: false, admin: true, owner: true },
                        { name: "Billing & settings", viewer: false, editor: false, admin: false, owner: true },
                      ].map((perm) => (
                        <tr key={perm.name} className="border-b border-border/30">
                          <td className="py-3 px-4 text-foreground">{perm.name}</td>
                          {["viewer", "editor", "admin", "owner"].map((role) => (
                            <td key={role} className="py-3 px-4 text-center">
                              {perm[role as keyof typeof perm] ? (
                                <Check className="h-4 w-4 text-success mx-auto" />
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <h2 className="text-lg font-semibold text-foreground mb-6">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                  </div>
                  <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Get browser push notifications</p>
                    </div>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/20 border border-border/30">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">Weekly Digest</p>
                      <p className="text-sm text-muted-foreground">Summary of your content performance</p>
                    </div>
                  </div>
                  <Switch checked={weeklyDigest} onCheckedChange={setWeeklyDigest} />
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="flex justify-end">
            <Button variant="hero">
              Save Changes
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
