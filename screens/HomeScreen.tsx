import { PendulumIcon } from "@/app/ui/components/PendulumIcon";
import { SleepCard } from "@/app/ui/components/SleepCard";
import { StatusIndicator } from "@/app/ui/components/StatusIndicator";
import { Moon, Sun, Activity } from "lucide-react";

export default function HomeScreen() {
  const currentDate = new Date();

  return (
    <div className="p-5 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="">Good Morning</h1>
          <p className="mt-4 font-small opacity-75">
            {currentDate.toDateString()}
          </p>
        </div>
        <PendulumIcon size={48} />
      </div>

      {/* Sleep Score Card */}
      <SleepCard>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold color-white text-m ">Last Night</h2>
            <p>7h 32m</p>
          </div>
          <h1>Sleep Score = 85</h1>
        </div>

        <div className="mt-5 pt-5 border-t border-[rgba(255, 255, 255, 0.15)] grid grid-cols-3 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Moon size={16} color="#8B93C9" strokeWidth={1.5} />
              <span className="opacity-75 color-black text-m">Bedtime</span>
            </div>
            <div className="text-lg color-black font-semibold">10:45 PM</div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sun size={16} color="#F2B705" strokeWidth={1.5} />
              <span className="opacity-75 color-black text-m">Wake up</span>
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              6:17 AM
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <Activity size={16} color="#6BBF9C" strokeWidth={1.5} />
              <span className="opacity-75 color-black text-m">Quality</span>
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              Good
            </div>
          </div>
        </div>
      </SleepCard>

      {/* Sleep Stages Card */}
      <SleepCard>
        <h3 className="mb-2">Sleep Stages</h3>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-2 text-lg color-white">
              <span>Deep Sleep</span>
              <span className="font-semibold">2h 15m</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-[#3B5C8A] rounded-full w-3/10" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 text-lg color-white">
              <span>REM Sleep</span>
              <span className="font-semibold">1h 455m</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-[#8B93C9] rounded-full w-23/100" />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2 text-lg color-white">
              <span>Light Sleep</span>
              <span className="font-semibold">3h 32m</span>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div className="h-full bg-[#4F7CAC] rounded-full w-47/100" />
            </div>
          </div>
        </div>
      </SleepCard>

      {/* Quick Actions */}
      <SleepCard>
        <h3 className="mb-2">Today's Goals</h3>
        <div className="space-y-3">
          <StatusIndicator status="completed" text="8 hours of sleep" />
          <StatusIndicator status="warning" text="Consistant bedtime" />
          <StatusIndicator status="inactive" text="Pre-sleep routine" />
        </div>
      </SleepCard>
    </div>
  );
}
