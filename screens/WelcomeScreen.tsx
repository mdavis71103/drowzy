import { PendulumIcon } from "@/app/ui/components/PendulumIcon";
import { SleepButton } from "@/app/ui/components/SleepButton";

type WelcomeScreenProps = {
  onLogin: () => void;
};

export default function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex w-full flex-col justify-center items-center">
          <PendulumIcon size={120} />
          <h1 className="text-3xl font-bold mt-8">Drowzy</h1>
          <p className="mt-2 text-center max-w-80 leading-5">
            Track, analyze, and improve your sleep quality with scientific
            insights
          </p>

          <SleepButton className="w-80 mt-5 text-lg" onClick={onLogin}>
            Login
          </SleepButton>
          <span className="opacity-75">
            Don't have an account?...
            <a href="">Sign Up</a>
          </span>
        </div>
      </main>
    </div>
  );
}
