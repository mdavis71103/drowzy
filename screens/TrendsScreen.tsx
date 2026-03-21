import { PendulumIcon } from "@/app/ui/components/PendulumIcon";
import { SleepCardContainer } from "@/app/ui/components/SleepCardContainer";
import { SleepCard } from "@/app/ui/components/SleepCard";
import { SleepScoreDisplay } from "@/app/ui/components/SleepScoreDisplay";
import { SleepChart } from "@/app/ui/components/SleepChart";
import { useSleepData } from "@/hooks/useSleepData";
import { SleepSession } from "@/types/sleep";

// Mock data for the chart

export default function TrendsScreen() {
  const { sleepData, loading } = useSleepData();

  function getAverageScore(days: number = 7) {
    let weekAverage = 0;

    const arr = sleepData.slice(0, days).reverse();

    arr.map((day) => {
      weekAverage += day.score;
    });

    return Math.round(weekAverage / days);
  }

  type SleepChartData = Pick<SleepSession, "date" | "score">;
  const sleepChartData: SleepChartData[] = sleepData
    .filter((session) => session.id < 8)
    .map(({ date, score }) => ({ date, score }));

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <h1>Sleep Trends</h1>
        <PendulumIcon size={48} />
      </div>

      <SleepCardContainer>
        <SleepCard>
          <h3 className="mb-4">7-Day Average</h3>
          <SleepScoreDisplay
            score={getAverageScore(7)}
            label={"Weekly Average"}
          />
        </SleepCard>

        <SleepCard>
          <h3 className="mb-2">Sleep Score Trend</h3>
          <p className="soft-white">Last 7 Days</p>
          <SleepChart data={sleepChartData} average={getAverageScore(7)} />
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
      </SleepCardContainer>
    </div>
  );
}
