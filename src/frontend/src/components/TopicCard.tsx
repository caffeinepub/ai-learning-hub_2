import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Circle, Clock } from "lucide-react";
import { motion } from "motion/react";
import type { Topic } from "../data/topics";

interface TopicCardProps {
  topic: Topic;
  index: number;
  isCompleted: boolean;
  onOpen: () => void;
  onToggleComplete: () => void;
}

const difficultyConfig = {
  Beginner: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  Intermediate: {
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    dot: "bg-cyan-400",
  },
  Advanced: {
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    dot: "bg-orange-400",
  },
};

export function TopicCard({
  topic,
  index,
  isCompleted,
  onOpen,
  onToggleComplete,
}: TopicCardProps) {
  const diff = difficultyConfig[topic.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative rounded-xl border bg-card p-5 flex flex-col gap-3
        card-hover cursor-pointer
        ${isCompleted ? "border-primary/40 bg-primary/5" : "border-border"}
      `}
      onClick={onOpen}
    >
      {/* Completed overlay glow */}
      {isCompleted && (
        <div
          className="absolute inset-0 rounded-xl opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, oklch(0.72 0.18 194), transparent 70%)",
          }}
        />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        {/* Topic number + emoji */}
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 font-mono font-bold
              ${isCompleted ? "bg-primary/20 text-primary border border-primary/30" : "bg-muted text-muted-foreground border border-border"}
            `}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-4 h-4 text-primary" />
            ) : (
              <span className="text-xs">
                {String(topic.id).padStart(2, "0")}
              </span>
            )}
          </div>
          <span className="text-2xl" role="img" aria-label={topic.title}>
            {topic.emoji}
          </span>
        </div>

        {/* Difficulty badge */}
        <span
          className={`text-xs font-mono px-2 py-0.5 rounded-full border ${diff.color} ${diff.bg} ${diff.border} shrink-0`}
        >
          {topic.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
        {topic.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground font-sans leading-relaxed line-clamp-3 flex-1">
        {topic.shortDescription}
      </p>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <Clock className="w-3 h-3" />~{topic.estimatedHours}h
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="flex items-center gap-1 text-xs font-sans text-primary hover:text-primary/80 transition-colors"
          aria-label={`Open ${topic.title}`}
        >
          Start Learning
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Complete toggle button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleComplete();
        }}
        className={`
          absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity
          w-6 h-6 rounded-full flex items-center justify-center
          ${isCompleted ? "text-primary" : "text-muted-foreground hover:text-primary"}
        `}
        aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
        title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
      >
        {isCompleted ? (
          <CheckCircle2 className="w-4 h-4" />
        ) : (
          <Circle className="w-4 h-4" />
        )}
      </button>
    </motion.div>
  );
}
