import { BedDouble, Calendar } from "lucide-react";
import { SleepCard } from "@/app/ui/components/SleepCard";

export default function LogScreen() {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-white mb-6 font-semibold text-2xl">Sleep Log</h1>

      <button
        className="flex justify-center w-full bg-[#4F7CAC] p-4 mt-5 rounded-xl text-lg"
        onClick={() => alert("This feature is not yet avilable")}
      >
        <div className="flex items-center justify-aroundcenter gap-2">
          <BedDouble size={20} strokeWidth={0.5} />
          Log Sleep Manually
        </div>
      </button>

      <SleepCard>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar size={20} color="#4F7CAC" strokeWidth={1.5} />
            <span className="font-semibold color-white">Jan 7, 2026</span>
          </div>
          <span className="soft-white font-sm ">Last Night</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm soft-white block mb-1">Duration</span>
            <span className=" color-white font-semibold">8h 15m</span>
          </div>
          <div>
            <span className="text-sm soft-white block mb-1">Score</span>
            <span className="font-semibold color-[#6BBF9C]">85</span>
          </div>
        </div>
      </SleepCard>

      <SleepCard>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar size={20} color="#4F7CAC" strokeWidth={1.5} />
            <span className="font-semibold color-white">Jan 6, 2026</span>
          </div>
          <span className="soft-white font-sm ">Yesterday</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm soft-white block mb-1">Duration</span>
            <span className=" color-white font-semibold">6h 45m</span>
          </div>
          <div>
            <span className="text-sm soft-white block mb-1">Score</span>
            <span className="font-semibold color-[#6BBF9C]">72</span>
          </div>
        </div>
      </SleepCard>
    </div>
  );
}
