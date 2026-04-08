import { Coffee, Flame, Plus } from "lucide-react";
import { Header } from "../assets/components/Header";
import { SleepStageBar } from "../assets/components/SleepStageBar";

export function Home() {
  const sleepScore = 84;
  const rhr = 58;
  const hrv = 62;
  const recovery = "75%";
  const deep = "1h 45min",
    rem = "2h 52min",
    light = "3h 08min",
    total = "7h 45min";
  const sleepScoreGuageOffset = 283 - 283 * (sleepScore * 0.01);

  return (
    <div className=" min-h-[max(884px, 100dvh)] overflow-hidden md:overflow-auto">
      <Header />
      {/* Hero Section: Sleep Score Gauge */}

      <main className="pt-20 pb-32 px-6 max-w-md mx-auto min-h-screen">
        <section className="mb-12 flex flex-col items-center">
          <div className="px-6 flex flex-col items-center justify-center">
            <div className="h-64 w-64 text-surface-container-high relative flex items-center justify-center">
              {/* SVG Gauge  */}
              <svg
                className="w-full h-full -rotate-90 transform"
                viewBox="0 0 100 100"
              >
                <circle
                  className="text-surface-container-highest"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="6"
                ></circle>
                <circle
                  className="transition-all duration-1000"
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="url(#scoreGradient)"
                  strokeDasharray="283"
                  strokeDashoffset={sleepScoreGuageOffset}
                  strokeLinecap="round"
                  strokeWidth="6"
                ></circle>
                <defs>
                  <linearGradient
                    id="scoreGradient"
                    x1="0%"
                    x2="100%"
                    y1="0%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#b9c3ff"></stop>
                    <stop offset="100%" stopColor="#d4bbff"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-extrabold tracking-tighter text-on-surface">
                  {sleepScore}
                </span>
                <div className="bg-tertiary/10 px-3 py-1 rounded-full mt-1">
                  <span className="text-tertiary text-xs font-bold tracking-widest uppercase">
                    Good
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h1 className="text-2xl font-bold text-on-surface">
                Your night was restorative
              </h1>
              <p className="text-on-surface-variant text-sm mt-1">
                7h 45m sleep · 88% efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Metric Cards Grid */}
        <section className="grid grid-cols-3 gap-3 mb-12">
          <div className="bg-surface-container-low rounded-3xl p-4 flex flex-col items-center text-center">
            <span className="text-on-surface-variant text-xs font-bold tracking-wider mb-2">
              RHR
            </span>
            <span className="text-xl font-bold text-primary">{rhr}</span>
            <span className="text-xs text-on-surface-variant">bpm</span>
          </div>
          <div className="bg-surface-container-low rounded-lg p-4 flex flex-col items-center text-center">
            <span className="text-on-surface-variant text-xs font-bold tracking-wider mb-2">
              HRV
            </span>
            <span className="text-xl font-bold text-primary">{hrv}</span>
            <span className="text-xs text-on-surface-variant">ms</span>
          </div>
          <div className="bg-surface-container-low rounded-lg p-4 flex flex-col items-center text-center">
            <span className="text-on-surface-variant text-xs font-bold tracking-wider mb-2">
              RECOVERY
            </span>
            <span className="text-xl font-bold text-accent">{recovery}</span>
            <span className="text-xs text-on-surface-variant">High</span>
          </div>
        </section>

        {/* Routine Log */}
        <section className="mb-12">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold text-on-surface ">Today's Log</h2>
            <span className="text-primary text-xs font-medium">View all</span>
          </div>
          {/* Log Items */}
          <div className="flex justify-around gap-4 overflow-x-auto no-scrollbar py-2">
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-lg shadow-primary/10">
                <span>
                  <Coffee />
                </span>
              </div>
              <span className="text-xs text-primary">Caffeine</span>
            </div>

            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shadow-lg shadow-primary/10">
                <span>
                  <Flame />
                </span>
              </div>
              <span className="text-xs text-on-surface-variant">Sauna</span>
            </div>

            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center shadow-lg shadow-primary/10">
                <span>
                  <Coffee />
                </span>
              </div>
              <span className="text-xs text-on-surface-variant">Caffeine</span>
            </div>

            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-16 h-16 rounded-full text-on-surface-variant flex items-center justify-center border-2 border-dashed border-outline-variant">
                <span>
                  <Plus />
                </span>
              </div>
              <span className="text-xs text-on-surface-variant">Add</span>
            </div>
          </div>
        </section>

        {/* Last Night's Sleep Stages */}
        <section className="mb-6">
          <div className="bg-surface-container-low rounded-xl p-6">
            <h2 className="text-lg font-bold text-on-surface mb-6">
              Last Night's Sleep Stages
            </h2>
            <div className="space-y-6">
              <SleepStageBar
                label="Deep Sleep"
                stageTime={deep}
                totalTime={total}
              />

              <SleepStageBar
                label="REM Sleep"
                stageTime={rem}
                totalTime={total}
              />

              <SleepStageBar
                label="Light Sleep"
                stageTime={light}
                totalTime={total}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
