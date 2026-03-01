import { Progress } from "@/components/ui/progress";
import { Brain } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  completedCount: number;
  totalCount: number;
}

export function Navbar({ completedCount, totalCount }: NavbarProps) {
  const pct = Math.round((completedCount / totalCount) * 100);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
            <Brain className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-base font-semibold text-foreground hidden sm:block">
            AI Learning Hub
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#learn" className="hover:text-foreground transition-colors">
            Curriculum
          </a>
          <a
            href="#resources"
            className="hover:text-foreground transition-colors"
          >
            Resources
          </a>
        </nav>

        {/* Progress pill */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end gap-1 min-w-[100px]">
            <span className="text-xs font-mono text-muted-foreground">
              {completedCount}/{totalCount} done
            </span>
            <div className="w-24 progress-cyan">
              <Progress value={pct} className="h-1.5 bg-muted" />
            </div>
          </div>
          <div className="sm:hidden flex items-center gap-1.5 text-xs font-mono text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {completedCount}/{totalCount}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
