export function SleepStagesGraph() {
  return (
    <section className="space-y-2">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-bold tracking-tight">Sleep Stages</h2>
        <span className="text-small text-primary">Last 7 Nights</span>
      </div>
      <div className="bg-surface-container-low rounded-xl p-6 h-64 flex flex-col justify-between">
        <div className="flex items-end justify-betwee gap-3">
          {/* Day Bars (Simplified Stacked Visual) */}
          {/* Awake: surface-variant, REM: secondary, Light: primary, Deep: tertiary */}
          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Mon
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>

          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Tue
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>

          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Wed
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>

          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Thur
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>

          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Fri
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>

          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Sat
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>

          <div className="flex flex-1 flex-col-reverse gap-0.5 group">
            <span className="text-xs text-on-surface-varient pt-4 text-center">
              Sun
            </span>
            <div className="h-12 w-full bg-tertiary rounded-b-md transition-all group-hover:opacity-80" />
            <div className="h-16 w-full bg-primary transition-all group-hover:opacity-80" />
            <div className="h-8 w-full bg-secondary-varient transition-all group-hover:opacity-80" />
            <div className="h-4 w-full bg-surface-variant rounded-t-md transition-all group-hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-tertiary" />
          <span className="text-xs text-on-surface-varient">Deep</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-on-surface-varient">Light</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <span className="text-xs text-on-surface-varient">REM</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-surface-variant" />
          <span className="text-xs text-on-surface-varient">Awake</span>
        </div>
      </div>
    </section>
  );
}
