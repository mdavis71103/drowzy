"use client";

import { useState } from "react";
import { BottomNav } from "./ui/components/BottomNav";
import WelcomeScreen from "@/screens/WelcomeScreen";
import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import LogScreen from "@/screens/LogScreen";
import TrendsScreen from "@/screens/TrendsScreen";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [showWelcome, setShowWelcome] = useState(true);

  function handleLogin() {
    setShowWelcome(false);
  }

  return (
    <div className="min-h-screen bg-midnight-charcoal pb-20">
      {/* Welcome Screen */}
      {showWelcome && <WelcomeScreen onLogin={handleLogin} />}

      {/* Home Screen */}
      {!showWelcome && activeTab === "home" && <HomeScreen />}

      {/* Trends Screen */}
      {activeTab === "trends" && <TrendsScreen />}

      {/* Log Screen */}
      {activeTab === "log" && <LogScreen />}

      {/* Profile Screen */}
      {activeTab === "profile" && <ProfileScreen />}

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
