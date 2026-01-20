import React from 'react';
import { Home, TrendingUp, PenSquare, User, Pen } from 'lucide-react';

interface BNottomNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BNottomNavProps) {
    const tabs = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'trends', label: 'Trends', icon: TrendingUp },
        { id: 'log', label: 'Log', icon: PenSquare },
        { id: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#374151] border-t border-[rgba(255,255,255,0.15)] flex items-center justify-around px-4">
            {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return(
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className="flex flex-col items-center justify-center gap-1 min-w-15 transition-all duration-200"
                        style={{ color: isActive ? '#4F7CAC' : '#C9CCD3'}}
                    >
                        <Icon size={24} strokeWidth={.5} />
                        <span className="font-medium text-sm">
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}