import { PendulumIcon } from "@/app/ui/components/PendulumIcon";
import { MouseEventHandler } from "react";

type WelcomeScreenProps = {
  onLogin: () => void;
};

export default function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex w-full flex-col justify-center items-center">
          <PendulumIcon size={120} />
          <h1 className="text-3xl font-bold mt-8">Sleep</h1>
          <p className="mt-3 text-center max-w-80">
            Track, analyze, and improve your sleep quality with scientific
            insights
          </p>

          <button
            className="bg-[#4F7CAC] w-80 p-4 mt-5 rounded-xl text-lg"
            onClick={onLogin}
          >
            Login
          </button>

          <a href="" className="opacity-50">
            Sign Up
          </a>
        </div>
      </main>
    </div>
  );
}
