import { PendulumIcon } from "../PendulumIcon";
import { TrendingUp, TrendingDown, EqualNot } from "lucide-react";

// Psudo-Data for Cards

function Icon({ routine }: { routine: string }) {
  switch (routine) {
    case "Sauna Use":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="currentColor"
        >
          <path d="M146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-666.66q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33v666.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm0-246.67v180H240V-240h-40v-86.67h-53.33Zm0-66.66H200v-13.34q0-14.16 9.58-23.75 9.59-9.58 23.75-9.58H240v-96.67q0-25 17.5-42.5t42.5-17.5h80q25 0 42.5 17.5t17.5 42.5V-440h6.67q14.16 0 23.75 9.58 9.58 9.59 9.58 23.75v13.34h333.33v-420H146.67v420ZM260-300h160v-80H260v80Zm80-336.67q-25 0-42.5-17.5t-17.5-42.5q0-25 17.5-42.5t42.5-17.5q25 0 42.5 17.5t17.5 42.5q0 25-17.5 42.5t-42.5 17.5Zm-33.33 490h66.66V-240h-66.66v93.33Zm133.33 0h373.33v-180H480V-240h-40v93.33Zm54-416.66q1.33-9 1.83-15.78.5-6.78.5-14.08 0-11.48-4.83-22.14Q486.67-626 472.67-643q-14.34-18.33-21.84-36.95-7.5-18.62-7.5-38.21 0-7.84.67-15.67.67-7.84 2.45-22.84H500q-2 9.67-2.67 18.56-.66 8.88-.66 20.11 0 11.46 4.83 22.4 4.83 10.93 15.83 23.6 17.34 21.33 25.34 40.39 8 19.06 8 38.61 0 9.67-.67 16.33-.67 6.67-2.45 13.34H494Zm100 0q1.33-9 1.83-15.78.5-6.78.5-14.08 0-11.48-4.83-22.14Q586.67-626 572.67-643q-14.34-18.33-21.84-36.95-7.5-18.62-7.5-38.21 0-7.84.67-15.67.67-7.84 2.45-22.84H600q-2 9.67-2.67 18.56-.66 8.88-.66 20.11 0 11.46 4.83 22.4 4.83 10.93 15.83 23.6 17.34 21.33 25.34 40.39 8 19.06 8 38.61 0 9.67-.67 16.33-.67 6.67-2.45 13.34H594Zm102 0q1.33-9 1.83-15.78.5-6.78.5-14.08 0-11.48-4.83-22.14Q688.67-626 674.67-643q-14.34-18.33-21.84-36.95-7.5-18.62-7.5-38.21 0-7.84.67-15.67.67-7.84 2.45-22.84H702q-2 9.67-2.67 18.56-.66 8.88-.66 20.11 0 11.46 4.83 22.4 4.83 10.93 15.83 23.6 17.34 21.33 25.34 40.39 8 19.06 8 38.61 0 9.67-.67 16.33-.67 6.67-2.45 13.34H696ZM260-300v-80 80Z" />
        </svg>
      );

    case "Alcohol Consumption":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="currentColor"
        >
          <path d="M320-200h280v-400h-80q-28 0-46 14t-43 41q-20 22-46.5 45.5T320-465v265Zm-80 80v-346q-52-14-86-56t-34-98q0-53 30.5-94t78.5-57q23-48 68.5-78T400-879q35 0 65.5 12t55.5 32q10-2 19-3.5t20-1.5q66 0 113 47t47 113q0 22-5.5 42T698-600h62q33 0 56.5 23.5T840-520v240q0 33-23.5 56.5T760-200h-80v80H240Zm-40-500q0 33 23.5 56.5T280-540q32 0 54.5-21t46.5-47q25-27 56.5-49.5T520-680h120q0-33-23.5-56.5T560-760q-25 0-42 6.5l-17 6.5-31-26q-11-9-28.5-17.5T400-799q-32 0-58.5 17T301-736l-14 30-32 11q-25 8-40 28.5T200-620Zm480 340h80v-240h-80v240Zm-360 80h280-280Z" />
        </svg>
      );

    case "Screen Time":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
        </svg>
      );

    case "Caffine Consumption":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="currentColor"
        >
          <path d="M440-240q-117 0-198.5-81.5T160-520v-240q0-33 23.5-56.5T240-840h500q58 0 99 41t41 99q0 58-41 99t-99 41h-20v40q0 117-81.5 198.5T440-240ZM240-640h400v-120H240v120Zm200 320q83 0 141.5-58.5T640-520v-40H240v40q0 83 58.5 141.5T440-320Zm280-320h20q25 0 42.5-17.5T800-700q0-25-17.5-42.5T740-760h-20v120ZM160-120v-80h640v80H160Zm280-440Z" />
        </svg>
      );
  }
}

const data: RoutineData[] = [
  {
    name: "Sauna Use",
    influencePercent: 15,
    influenceType: "Deep Sleep",
    description:
      "Evening heat therapy significantly extends your restorative sleep cycles",
    trendType: "Positive",
  },
  {
    name: "Alcohol Consumption",
    influencePercent: -23,
    influenceType: "REM Sleep",
    description:
      "Intake over 2 units reduces REM density and increases mid-night wakefulness.",
    trendType: "Negative",
  },
  {
    name: "Screen Time",
    influencePercent: +1,
    influenceType: "Minutes to Sleep",
    description:
      "Late screen time seems to have little to no effect on your minutes to sleep",
    trendType: "Neutral",
  },
  {
    name: "Caffine Consumption",
    influencePercent: +15,
    influenceType: "Minutes to Sleep",
    description:
      "Caffeine after 2 PM adds an average of 18 minutes to your time-to-sleep.",
    trendType: "Negative",
  },
];

interface RoutineData {
  name: string;
  influencePercent: number;
  influenceType: string;
  description: string;
  trendType: string;
}

function CorrelationCard({ routine }: { routine: RoutineData }) {
  let color;

  // Needed for background colors to load
  const colorMap = {
    tertiary: "bg-tertiary/20",
    error: "bg-error/20",
    neutral: "bg-neutral/20",
  };

  if (routine.trendType.includes("Positive")) {
    color = "tertiary";
  } else if (routine.trendType.includes("Negative")) {
    color = "error";
  } else {
    color = "neutral";
  }

  const fadedBackgroundColor = "bg-" + color + "/20";

  return (
    <div className="min-w-70 h-70 bg-surface-container-low snap-center rounded-2xl p-6 space-y-4 border border-outline-variant/10 relative overflow-hidden">
      <div className="flex justify-between items-center">
        <div
          className={`p-4 rounded-full relative z-10 ${fadedBackgroundColor}`}
        >
          <span className={`text-${color}`}>
            <Icon routine={routine.name} />
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className={`text-lg font-bold  text-${color}`}>
            {routine.influencePercent > 0 ? "+" : ""}
            {routine.influencePercent}%
          </span>
          <span
            className={`tracking-tighter text-sm text-${color} opacity-70 font-bold`}
          >
            {routine.influenceType}
          </span>
        </div>
      </div>

      <h3 className="text-2xl ">{routine.name}</h3>
      <p className="text-sm text-on-surface-variant">{routine.description} </p>

      <div className="flex gap-2 items-center absolute bottom-1">
        <span className={`text-${color}`}>
          {routine.trendType === "Positive" ? (
            <TrendingUp />
          ) : routine.trendType === "Negative" ? (
            <TrendingDown />
          ) : (
            <EqualNot />
          )}
        </span>
        <span className="text-on-surface-variant text-sm">
          {routine.trendType} trend
        </span>
      </div>

      <div className="absolute -bottom-4 -right-4 opacity-5 pointer-events-none">
        <PendulumIcon size={100} />
      </div>
    </div>
  );
}

export function CorrelationsCarousel() {
  return (
    <section className="space-y-6 overflow-hidden -mx-6">
      <div className="px-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight">Correlations</h2>
          {/* Segmented Control  */}
          <div className="flex gap-2 bg-surface-container-low p-1 rounded-full">
            <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-surface-container-high text-primary shadow-sm">
              All
            </button>
            <button className="px-4 py-1.5 rounded-full text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">
              Positive
            </button>
            <button className="px-4 py-1.5 rounded-full text-xs font-medium text-on-surface-variant hover:text-on-surface transition-colors">
              Negative
            </button>
          </div>
        </div>
      </div>

      {/* Swipeable Carousel Container */}
      <div className="flex gap-4 overflow-x-autp no-scrollbar px-6 snap-x snap-mandatory">
        {data.map((routineData, index) => (
          <CorrelationCard routine={routineData} key={index} />
        ))}
      </div>
    </section>
  );
}
