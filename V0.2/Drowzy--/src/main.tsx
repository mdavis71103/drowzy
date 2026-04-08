import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./screens/welcome.tsx";
import { Home } from "./screens/home.tsx";
import { Log } from "./screens/log.tsx";
import { Insights } from "./screens/insights.tsx";
import { Settings } from "./screens/settings.tsx";
import { BottomNavBar } from "./assets/components/BottomNav.tsx";
import "./style.css";

function App() {
  const [activeTab, setActiveTab] = useState("log");
  const [showWelcome, setShowWelcome] = useState(false);

  function handleLogin() {
    setShowWelcome(false);
  }

  return (
    <div className="min-h-screen">
      {/* Welcome Screen */}
      {showWelcome && <Welcome onLogin={handleLogin} />}

      {/* Home Screen */}
      {!showWelcome && activeTab === "home" && <Home />}

      {/* Trends Screen */}
      {activeTab === "log" && <Log />}

      {/* Log Screen */}
      {activeTab === "insights" && <Insights />}

      {/* Profile Screen */}
      {activeTab === "settings" && <Settings />}

      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(<App />);
}
