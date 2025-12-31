import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const engagementData = [
  { platform: "LinkedIn", engagement: 4500 },
  { platform: "Twitter", engagement: 3200 },
  { platform: "Instagram", engagement: 2800 },
  { platform: "Blog", engagement: 1500 },
  { platform: "Video", engagement: 2100 },
];

const performanceData = [
  { week: "Week 1", posts: 12, engagement: 3200 },
  { week: "Week 2", posts: 15, engagement: 4100 },
  { week: "Week 3", posts: 18, engagement: 5200 },
  { week: "Week 4", posts: 22, engagement: 6800 },
];

const agentEfficiency = [
  { name: "Research", value: 95, color: "hsl(217, 91%, 60%)" },
  { name: "Writer", value: 88, color: "hsl(142, 76%, 36%)" },
  { name: "Design", value: 82, color: "hsl(38, 92%, 50%)" },
  { name: "Video", value: 75, color: "hsl(0, 72%, 51%)" },
  { name: "Critic", value: 90, color: "hsl(250, 80%, 60%)" },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-1">Track your content performance and AI efficiency</p>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Engagement by Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Engagement by Platform</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="platform" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Bar dataKey="engagement" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Performance Over Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Performance Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
              />
              <Line
                type="monotone"
                dataKey="posts"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--accent))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Agent Efficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Agent Efficiency</h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={agentEfficiency}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {agentEfficiency.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`${value}%`, "Efficiency"]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {agentEfficiency.map((agent) => (
              <div key={agent.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: agent.color }} />
                <span className="text-sm text-muted-foreground">{agent.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-card border border-border/50"
        >
          <h2 className="text-lg font-semibold text-foreground mb-6">Quick Stats</h2>
          <div className="space-y-6">
            {[
              { label: "Total Posts Created", value: "156", change: "+23%" },
              { label: "Average Engagement Rate", value: "4.8%", change: "+0.5%" },
              { label: "Time Saved (hours)", value: "48", change: "+12h" },
              { label: "AI Accuracy Score", value: "94%", change: "+2%" },
            ].map((stat, index) => (
              <div key={stat.label} className="flex items-center justify-between">
                <span className="text-muted-foreground">{stat.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
