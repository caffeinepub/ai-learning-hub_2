import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Rocket, Trophy } from "lucide-react";
import { motion } from "motion/react";

interface ProgressTrackerProps {
  completed: number;
  total: number;
}

const milestones = [
  { at: 0, label: "Just starting", icon: Rocket },
  { at: 3, label: "Getting started", icon: Rocket },
  { at: 6, label: "Halfway there!", icon: CheckCircle2 },
  { at: 8, label: "AI Expert!", icon: Trophy },
];

function getCurrentMilestone(completed: number) {
  const sorted = [...milestones].reverse();
  return sorted.find((m) => completed >= m.at) ?? milestones[0];
}

export function ProgressTracker({ completed, total }: ProgressTrackerProps) {
  const pct = Math.round((completed / total) * 100);
  const milestone = getCurrentMilestone(completed);
  const MilestoneIcon = milestone.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{
          background: "oklch(0.72 0.18 194)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <MilestoneIcon className="w-5 h-5 text-primary" />
              <h3 className="font-display text-xl text-foreground">
                Your Progress
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-sans">
              {completed === 0
                ? "Start your AI journey below"
                : completed === total
                  ? "🎉 You've completed all topics!"
                  : `${milestone.label} — keep going!`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <motion.span
                key={completed}
                initial={{ scale: 1.3, color: "oklch(0.72 0.18 194)" }}
                animate={{ scale: 1, color: "oklch(0.92 0.01 210)" }}
                transition={{ duration: 0.4 }}
                className="font-display text-4xl font-bold text-foreground block"
              >
                {completed}
              </motion.span>
              <span className="text-xs text-muted-foreground font-mono">
                / {total} topics
              </span>
            </div>

            {/* Circular progress */}
            <div className="relative w-14 h-14 shrink-0">
              <svg
                className="w-14 h-14 -rotate-90"
                viewBox="0 0 56 56"
                role="img"
                aria-label={`Progress: ${pct}%`}
              >
                <circle
                  cx="28"
                  cy="28"
                  r="22"
                  fill="none"
                  stroke="oklch(0.25 0.04 240)"
                  strokeWidth="4"
                />
                <motion.circle
                  cx="28"
                  cy="28"
                  r="22"
                  fill="none"
                  stroke="oklch(0.72 0.18 194)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 22}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 22 }}
                  animate={{
                    strokeDashoffset:
                      2 * Math.PI * 22 * (1 - completed / total),
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    filter: "drop-shadow(0 0 6px oklch(0.72 0.18 194 / 0.6))",
                  }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-primary">
                {pct}%
              </span>
            </div>
          </div>
        </div>

        {/* Linear progress bar */}
        <div className="progress-cyan">
          <Progress value={pct} className="h-2 bg-muted" />
        </div>

        {/* Milestone markers */}
        <div className="relative mt-2">
          <div className="flex justify-between">
            {[0, 2, 4, 6, 8].map((mark) => (
              <div key={mark} className="flex flex-col items-center gap-1">
                <div
                  className="w-0.5 h-2 mt-0.5"
                  style={{
                    background:
                      completed >= mark
                        ? "oklch(0.72 0.18 194)"
                        : "oklch(0.25 0.04 240)",
                  }}
                />
                <span
                  className="text-xs font-mono"
                  style={{
                    color:
                      completed >= mark
                        ? "oklch(0.72 0.18 194)"
                        : "oklch(0.45 0.04 230)",
                  }}
                >
                  {mark}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
