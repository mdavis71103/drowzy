import { BedDouble, Calendar } from "lucide-react";
import { SleepCardContainer } from "@/app/ui/components/SleepCardContainer";
import { SleepCard } from "@/app/ui/components/SleepCard";
import { useSleepData } from "@/hooks/useSleepData";
import { SleepSession } from "@/types/sleep";

type SleepLogSummary = Pick<SleepSession, "date" | "total_sleep" | "score">;

export default function LogScreen() {
  const { sleepData, loading } = useSleepData();

  const filteredSessions: SleepLogSummary[] = sleepData
    .filter((session) => session.id < 8)
    .map(({ date, total_sleep, score }) => ({ date, total_sleep, score }));

  return (
    <div className="p-5 space-y-5">
      <h1 className="text-white mb-6 font-semibold text-2xl">Sleep Log</h1>

      <div className="text-center">
        <h3>Last 7 Nights</h3>
      </div>

      <SleepCardContainer staggerNumber={0.1}>
        {filteredSessions.map((session, index) => (
          <SleepCard key={session.date}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Calendar size={20} color="#4F7CAC" strokeWidth={1.5} />
                <span className="font-semibold color-white">
                  {session.date}
                </span>
              </div>
              <span className="soft-white font-sm ">
                {index === 0 ? (
                  <span>Last Night</span>
                ) : index === 1 ? (
                  <span>Yesterday</span>
                ) : (
                  <span>{index} Nights ago</span>
                )}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm soft-white block mb-1">Duration</span>
                <span className=" color-white font-semibold">
                  {session.total_sleep}
                </span>
              </div>
              <div>
                <span className="text-sm soft-white block mb-1">Score</span>
                <span className="font-semibold color-[#6BBF9C]">
                  {session.score}
                </span>
              </div>
            </div>
          </SleepCard>
        ))}
      </SleepCardContainer>

      <button
        className="flex justify-center w-full bg-[#4F7CAC] p-4 mt-5 rounded-xl text-lg"
        onClick={() => alert("This feature is not yet avilable")}
      >
        <div className="flex items-center justify-aroundcenter gap-2">
          <BedDouble size={20} strokeWidth={0.5} />
          Log Sleep Manually
        </div>
      </button>
    </div>
  );
}
