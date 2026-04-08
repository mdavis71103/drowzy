import { WavesIcon } from "../assets/WavesIcon";
import { PendulumIcon } from "../assets/PendulumIcon";

type WelcomeProps = {
  onLogin: () => void;
};

export function Welcome({ onLogin }: WelcomeProps) {
  return (
    <div className=" flex min-h-screen flex-col items-center justify-center p-6">
      <main className="relative z-10 w-full max-w-md flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-64 w-64 flex items-center justify-center scale-150">
            <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-150">
              <span className="material-symbols-outlined text-xs text-white">
                <WavesIcon size="130px" />
              </span>
            </div>

            <div className="bg-surface-container-high w-24 h-24 rounded-full flex items-center justify-center glow-shadow border border-outline-varient/10">
              <span className="text-primary">
                <PendulumIcon size={50} />
              </span>
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tight text-white">
              Drowzy
            </h1>
            <p className="text-white opacity-60 max-w-[280px] text-lg leading-relaxed">
              Step into your personal sanctuary for a deeper, more restorative
              rest.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 mt-8">
          <button
            onClick={onLogin}
            className="gradient-cta w-full py-5 rounded-full font-bold text-on-primary text-lg tracking-wide shadow-2xl hover:brightness-130 active:scale-95 transition-transform duration-200"
          >
            Create Account
          </button>
          <button
            onClick={onLogin}
            className="w-full py-5 rounded-full font-semibold text-secondary bg-surface-variant/40 backdrop-blur-xl border border-outline-varient/10 hover:brightness-130 active:scale-95 transition-all duration-200"
          >
            Login
          </button>
        </div>
        <div className="mt-4 flex flex-col items-center gap-6">
          <div className="h-0.5 w-12 bg-primary/20 rounded-full shadow-[0_0_10px_#00e1ac]" />
          <p>Begin your journey to rest</p>
        </div>
      </main>
      <div className="fixed -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-surface-container-low rounded-full blur-3xl opacity-40" />
    </div>
  );
}
