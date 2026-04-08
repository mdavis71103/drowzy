import { Home, TrendingUp, PenSquare, Settings } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavBar({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "insights", label: "Insights", icon: TrendingUp },
    { id: "log", label: "Log", icon: PenSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full backdrop-blur-2xl h-24 bg-[#11131c]/80  border-t border-[rgba(255,255,255,0.15)] flex items-center justify-around px-4 pb-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] ">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center justify-center gap-1 min-w-15 transition-all duration-200"
            style={{ color: isActive ? "#4F7CAC" : "#C9CCD3" }}
          >
            <Icon size={24} strokeWidth={0.5} />
            <span className="font-medium text-sm">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
