import { Header } from "../assets/components/Header";
import { LogCalendar } from "../assets/components/LogCalendar";

export function Log() {
  return (
    <>
      <Header />
      <main className="mt-20 px-6 max-w-2xl mx-auto w-full">
        <LogCalendar />
        <h2 className="text-white text-3xl">Log Your Day</h2>;
      </main>
    </>
  );
}
