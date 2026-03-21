import { PendulumIcon } from "@/app/ui/components/PendulumIcon";
import { SleepCard } from "@/app/ui/components/SleepCard";
import { SleepButton } from "@/app/ui/components/SleepButton";
import { useSleepData } from "@/hooks/useSleepData";

export default function ProfileScreen() {
  const { sleepData, loading } = useSleepData();

  return (
    <div className="p-5 space-y-5">
      <h1 className="text-white mb-6 text-2xl font-semibold">Profile</h1>

      <SleepCard>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#4F7CAC] flex items-center justify-center">
            <span className="text-2xl font-semibold text-white">A</span>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">Alex Chen</p>
            <p className="text-sm soft-white">alex.chen@email.com</p>
          </div>
        </div>
        <div className="pt-4 border-t border-[rgba(255,255,255,0.15)] space-y-3">
          <div className="flex justify-between">
            <span className="soft-white">Member since</span>
            <span className="font-semibold text-white">Dec 2025</span>
          </div>
          <div className="flex justify-between">
            <span className="soft-white">Total sleep tracked</span>
            <span className="font-semibold text-white">
              {" "}
              {sleepData.length} nights
            </span>
          </div>
        </div>
      </SleepCard>

      <SleepCard>
        <h3 className="text-xl font-semibold text-white mb-4">Sleep Goals</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white">Target Sleep</span>
              <span className="font-semibold text-white">8 hours</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white">Target Bedtime</span>
              <span className="font-semibold text-white">10:30 PM</span>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-white">Target Wake Time</span>
              <span className="font-semibold text-white">6:30 AM</span>
            </div>
          </div>
        </div>
      </SleepCard>
      <SleepButton variant="secondary" className="w-full">
        Edit Settings
      </SleepButton>
      <SleepButton variant="secondary" className="w-full">
        About Sleep App
      </SleepButton>
    </div>
  );
}
