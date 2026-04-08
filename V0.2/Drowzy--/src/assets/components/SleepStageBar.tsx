interface SleepPercentBarProps {
  label: string;
  stageTime: string;
  totalTime: string;
  color?: string;
}

function calculateSleepPercentage(stage: string, total: string) {
  let stageTimeInMinutes, totalTimeInMinutes;

  if (stage.includes("h")) {
    const stageTimeArray = stage.replace("h", "").replace("min", "").split(" ");
    stageTimeInMinutes =
      Number(stageTimeArray[0]) * 60 + Number(stageTimeArray[1]);
  } else {
    stageTimeInMinutes = Number(stage.replace("min", ""));
  }

  if (total.includes("h")) {
    const totalTimeArray = total.replace("h", "").replace("min", "").split(" ");
    totalTimeInMinutes =
      Number(totalTimeArray[0]) * 60 + Number(totalTimeArray[1]);
  } else {
    totalTimeInMinutes = Number(total.replace("min", ""));
  }
  if (stageTimeInMinutes > totalTimeInMinutes) {
    throw new Error("Total cannot be less than stage value");
  }

  return Math.round((stageTimeInMinutes / totalTimeInMinutes) * 100);
}

export function SleepStageBar({
  label,
  stageTime,
  totalTime,
  color = "#3B5C8A",
}: SleepPercentBarProps) {
  const percentage = calculateSleepPercentage(stageTime, totalTime);

  //Sleep Stage Switch
  let infoContent, idealMin, idealMax;
  switch (label) {
    case "Deep Sleep":
      infoContent =
        "Deep sleep is your body's physical recovery stage. It helps repair muscles, strengthen your immune system, and restore energy for the next day.";
      idealMin = 13;
      idealMax = 23;
      break;
    case "Light Sleep":
      infoContent =
        "Light sleep helps your body wind down and transition between stages. It supports overall recovery and makes up the largest portion of your sleep.";
      idealMin = 50;
      idealMax = 60;
      break;
    case "REM Sleep":
      infoContent =
        "REM sleep supports your brain and memory. This is when dreaming happens, helping with learning, emotional balance, and mental recovery.";
      idealMin = 20;
      idealMax = 25;
      break;
    default:
      infoContent = "Sleep stage information could not be found";
      idealMin = 0;
      idealMax = 5;
  }

  //Status Determinations
  const isInRange = percentage >= idealMin && percentage <= idealMax;
  const isBelowRange = percentage < idealMin;

  //Status Color & Text
  const statusColor = isInRange
    ? "#6BBF9C"
    : isBelowRange
      ? "#F2B705"
      : "#E57373";
  const statusText = isInRange ? "Optimal" : isBelowRange ? "Low" : "High";

  return (
    <div>
      <div className="flex justify-between items-center mb-1 color-white">
        {/* Label and Info Icon */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-bold text-secondary">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="text-sm font-semibold"
            style={{ color: statusColor }}
          >
            {statusText}
          </span>
        </div>
      </div>

      {/* Range Labels */}
      <div className="flex justify-between mb-1">
        <span className="text-xs text-white opacity-50 font-semibold">
          {stageTime} · {percentage}% of total
        </span>

        <span className="text-xs text-white opacity-50 font-semibold">
          Ideal: {idealMin}-{idealMax}%
        </span>
      </div>

      {/* Sleep percentage bar */}
      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percentage}%`,
            background: color,
          }}
        />
      </div>

      {/* Ideal range */}

      <div className="relative w-full h-1 mt-1 mb-6">
        <div
          className="absolute h-full rounded-full"
          style={{
            left: `${idealMin}%`,
            width: `${idealMax - idealMin}%`,
            backgroundColor: "rgba(107, 191, 156, 0.3)",
          }}
        />
        {/* Markers for ideal range */}
        <div
          className="absolute w-0.5 h-2 bg-[#6BBF9C] rounded-full"
          style={{ left: `${idealMin}%`, top: "-2px" }}
        />
        <div
          className="absolute w-0.5 h-2 bg-[#6BBF9C] rounded-full"
          style={{ left: `${idealMax}%`, top: "-2px" }}
        />
      </div>
    </div>
  );
}
