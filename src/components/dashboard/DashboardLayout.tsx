import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  PenSquare,
  Kanban,
  Brain,
  BarChart3,
  Link2,
  Video,
  Settings,
  Ghost,
  Menu,
  Bell,
  Search,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, Outlet } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: PenSquare, label: "Content Studio", path: "/dashboard/studio" },
  { icon: Kanban, label: "Workflow", path: "/dashboard/workflow" },
  { icon: Brain, label: "Memory", path: "/dashboard/memory" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Link2, label: "Integrations", path: "/dashboard/integrations" },
  { icon: Video, label: "Video", path: "/dashboard/video" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 72 }}
        className="fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col z-40"
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <Ghost className="h-8 w-8 text-sidebar-primary flex-shrink-0" />
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-bold text-sidebar-foreground"
              >
                GhostPost
              </motion.span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <item.icon className={`h-5 w-5 flex-shrink-0 ${isActive ? "text-sidebar-primary" : ""}`} />
                {sidebarOpen && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-medium">
                    {item.label}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Toggle */}
        <div className="p-4 border-t border-sidebar-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full justify-center"
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${sidebarOpen ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div
        className="flex-1 transition-all"
        style={{ marginLeft: sidebarOpen ? 256 : 72 }}
      >
        {/* Top Bar */}
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search content..."
                className="h-9 w-64 pl-9 pr-4 rounded-lg bg-secondary/50 border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">JD</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
