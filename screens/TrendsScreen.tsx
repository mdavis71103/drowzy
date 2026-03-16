import { SleepCard } from "@/app/ui/components/SleepCard";
import { SleepScoreDisplay } from "@/app/ui/components/SleepScoreDisplay";
import { SleepChart } from "@/app/ui/components/SleepChart";

// Mock data for the chart
const sleepData = [
  { date: "Mon", score: 85, average: 78 },
  { date: "Tue", score: 72, average: 78 },
  { date: "Wed", score: 90, average: 80 },
  { date: "Thu", score: 68, average: 79 },
  { date: "Fri", score: 82, average: 79 },
  { date: "Sat", score: 88, average: 81 },
  { date: "Sun", score: 92, average: 82 },
];

export default function TrendsScreen() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1>Sleep Trends</h1>
      <SleepCard>
        <h3 className="mb-4">7-Day Average</h3>
        <SleepScoreDisplay score={82} label={"Weekly Average"} />
      </SleepCard>

      <SleepCard>
        <h3 className="mb-2">Sleep Score Trend</h3>
        <p className="soft-white">Last 7 Days</p>
        <SleepChart data={sleepData} />
      </SleepCard>

      <SleepCard>
        <h3 className="mb-4">Insights</h3>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-1 bg-var(--sleep-green) rounded-full flex-0" />
            <div>
              <p className="text-lg color-white mb-1">Great Progress!</p>
              <p className="text-sm soft-white">
                Your sleep quality improved by 12% this week
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-1 bg-var(--sleep-green) rounded-full flex-0" />
            <div>
              <p className="text-lg color-white mb-1">Keep it consistant</p>
              <p className="text-sm soft-white">
                Try going to bed at the same time each night
              </p>
            </div>
          </div>
        </div>
      </SleepCard>
    </div>
  );
}
