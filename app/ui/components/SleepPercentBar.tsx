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

export function SleepPercentBar({
  label,
  stageTime,
  totalTime,
  color = "#3B5C8A",
}: SleepPercentBarProps) {
  const percentage = calculateSleepPercentage(stageTime, totalTime);

  console.log(`Label: ${label} StageTime:${stageTime} TotalTime:${totalTime} `);

  return (
    <div>
      <div className="flex justify-between items-center mb-2 text-lg color-white">
        <span>{label}</span>
        <span className="font-semibold">{stageTime}</span>
      </div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percentage}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}
