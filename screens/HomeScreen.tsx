import { useSleepData } from "@/hooks/useSleepData";
import { PendulumIcon } from "@/app/ui/components/PendulumIcon";
import { SleepCardContainer } from "@/app/ui/components/SleepCardContainer";
import { SleepCard } from "@/app/ui/components/SleepCard";
import { StatusIndicator } from "@/app/ui/components/StatusIndicator";
import { Moon, Sun, Activity } from "lucide-react";

export default function HomeScreen() {
  const currentDate = new Date();
  const { sleepData, loading } = useSleepData();
  const lastNight = sleepData.find((night) => night.id === 1);

  function formatTime(time: string) {
    const [hours, minutes, seconds] = time.split(":");
    const dateObj = new Date();
    dateObj.setHours(Number(hours), Number(minutes), Number(seconds));

    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(dateObj);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="">Good Morning</h1>

          <p className="opacity-75 color-white text-sm mt-1">
            You slept {lastNight?.total_sleep} hours last night.
          </p>
          <p className="opacity-75 color-white text-sm">
            Let's try and improve that tonight
          </p>
        </div>
        <div className="flex flex-col items-center">
          <PendulumIcon size={48} />
          <p className="mt-4 font-small opacity-75">
            {currentDate.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Sleep Score Card */}
      <SleepCardContainer>
        <SleepCard>
          <div className="flex flex-col items-center justify-between">
            <div className="w-16 h-16 rounded-full bg-[#4F7CAC] flex items-center justify-center">
              <p className="text-3xl font-bold">{lastNight?.score}</p>
            </div>
            <h2 className="text-xl font-semibold text-white mt-2">
              Sleep Score
            </h2>
          </div>

          <div className="mt-5 pt-5 border-t border-[rgba(255, 255, 255, 0.15)] grid grid-cols-3 gap-4">
            <div className="flex-col justify-center items-center flex">
              <div className="flex items-center gap-2 mb-1">
                <Moon size={16} color="#8B93C9" strokeWidth={1.5} />
                <span className="opacity-75 color-black text-m">Bedtime</span>
              </div>
              <div className="text-lg color-black font-semibold">
                {formatTime(lastNight?.sleep_time as string)}
              </div>
            </div>
            <div className="flex-col justify-center items-center flex">
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
                {formatTime(lastNight?.wake_time as string)}
              </div>
            </div>

            <div className="flex-col justify-center items-center flex">
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
                {lastNight?.quality}
              </div>
            </div>
          </div>
        </SleepCard>

        {/* Sleep Stages Card */}
        <SleepCard>
          <h3 className="mb-2 text-2xl">Sleep Stages</h3>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-2 text-lg color-white">
                <span>Deep Sleep</span>
                <span className="font-semibold">{lastNight?.deep}</span>
              </div>
              <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-[#3B5C8A] rounded-full w-3/10" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 text-lg color-white">
                <span>REM Sleep</span>
                <span className="font-semibold">{lastNight?.rem}</span>
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
          <h3 className="mb-2 text-2xl">Today's Goals</h3>
          <div className="space-y-3">
            <StatusIndicator status="completed" text="8 hours of sleep" />
            <StatusIndicator status="warning" text="Consistant bedtime" />
            <StatusIndicator status="inactive" text="Pre-sleep routine" />
          </div>
        </SleepCard>
      </SleepCardContainer>
    </div>
  );
}
