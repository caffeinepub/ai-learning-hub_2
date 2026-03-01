import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  FileText,
  GraduationCap,
  Video,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import type { Resource, Topic } from "../data/topics";

interface TopicModalProps {
  topic: Topic;
  isCompleted: boolean;
  onClose: () => void;
  onToggleComplete: () => void;
}

const difficultyConfig = {
  Beginner: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
  },
  Intermediate: {
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
  },
  Advanced: {
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
  },
};

const resourceTypeIcon: Record<Resource["type"], typeof BookOpen> = {
  Course: GraduationCap,
  Video: Video,
  Tutorial: BookOpen,
  Documentation: FileText,
};

const resourceTypeColor: Record<Resource["type"], string> = {
  Course: "text-cyan-400",
  Video: "text-purple-400",
  Tutorial: "text-amber-400",
  Documentation: "text-emerald-400",
};

export function TopicModal({
  topic,
  isCompleted,
  onClose,
  onToggleComplete,
}: TopicModalProps) {
  const diff = difficultyConfig[topic.difficulty];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <motion.div
        key="modal-panel"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-labelledby="modal-title"
        className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50 flex flex-col"
      >
        <div className="flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="relative shrink-0 p-6 pb-4 border-b border-border">
            {/* Decorative gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.65 0.2 162), oklch(0.72 0.18 194), oklch(0.78 0.16 68))",
              }}
            />

            <div className="flex items-start justify-between gap-4 mt-1">
              <div className="flex items-start gap-3">
                <span
                  className="text-4xl shrink-0"
                  role="img"
                  aria-label={topic.title}
                >
                  {topic.emoji}
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full border ${diff.color} ${diff.bg} ${diff.border}`}
                    >
                      {topic.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <Clock className="w-3 h-3" />~{topic.estimatedHours} hours
                    </div>
                  </div>
                  <h2
                    id="modal-title"
                    className="font-display text-xl md:text-2xl text-foreground"
                  >
                    {topic.title}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1 overflow-auto">
            <div className="p-6 space-y-7">
              {/* Full description */}
              <div>
                <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Overview
                </h3>
                <p className="text-sm font-sans text-foreground/85 leading-relaxed">
                  {topic.fullDescription}
                </p>
              </div>

              {/* Key Concepts */}
              <div>
                <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Key Concepts
                </h3>
                <ul className="space-y-2.5">
                  {topic.keyConcepts.map((concept, i) => (
                    <motion.li
                      key={concept}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="flex items-start gap-2.5 text-sm font-sans text-foreground/85"
                    >
                      <span className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <span className="text-xs font-mono">{i + 1}</span>
                      </span>
                      {concept}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Free Resources */}
              <div>
                <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Free Resources
                </h3>
                <div className="space-y-2.5">
                  {topic.resources.map((resource) => {
                    const Icon = resourceTypeIcon[resource.type];
                    const colorClass = resourceTypeColor[resource.type];
                    return (
                      <a
                        key={resource.url}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 p-3 rounded-xl border border-border hover:border-primary/40 bg-muted/30 hover:bg-muted/50 transition-all group"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center shrink-0 ${colorClass} group-hover:border-primary/30 transition-colors`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 justify-between">
                            <span className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors truncate">
                              {resource.title}
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                          </div>
                          <span
                            className={`text-xs font-mono ${colorClass} opacity-70`}
                          >
                            {resource.type}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollArea>

          {/* Footer action */}
          <div className="shrink-0 p-6 pt-4 border-t border-border">
            <Button
              onClick={onToggleComplete}
              className={`w-full font-sans py-5 text-sm rounded-xl transition-all ${
                isCompleted
                  ? "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
              }`}
              variant={isCompleted ? "outline" : "default"}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Completed — Mark as Incomplete
                </>
              ) : (
                <>
                  <Circle className="w-4 h-4 mr-2" />
                  Mark as Complete
                </>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
