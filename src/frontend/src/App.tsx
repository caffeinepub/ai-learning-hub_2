import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProgressTracker } from "./components/ProgressTracker";
import { ResourcesSection } from "./components/ResourcesSection";
import { TopicCard } from "./components/TopicCard";
import { TopicModal } from "./components/TopicModal";
import { freeResources, topics } from "./data/topics";
import type { Topic } from "./data/topics";

const STORAGE_KEY = "ai-hub-completed-topics";

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return new Set(arr);
  } catch {
    return new Set();
  }
}

function saveCompleted(set: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

export default function App() {
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    saveCompleted(completed);
  }, [completed]);

  const toggleComplete = useCallback((id: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        toast("Topic marked as incomplete", {
          description: topics.find((t) => t.id === id)?.title,
        });
      } else {
        next.add(id);
        toast.success("Topic completed! 🎉", {
          description: topics.find((t) => t.id === id)?.title,
        });
      }
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground noise-bg">
      <Toaster position="bottom-right" theme="dark" />
      <Navbar completedCount={completed.size} totalCount={topics.length} />
      <HeroSection />

      <main>
        {/* Progress section */}
        <section id="progress" className="py-8 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <ProgressTracker completed={completed.size} total={topics.length} />
          </div>
        </section>

        {/* Learning Path */}
        <section id="learn" className="py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-xs font-mono text-primary uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
                  Learning Path
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mt-4">
                8 Topics to Master AI
              </h2>
              <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto font-sans text-sm md:text-base">
                Work through each module in order, or jump directly to what
                interests you. Track your progress as you go.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {topics.map((topic, index) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  index={index}
                  isCompleted={completed.has(topic.id)}
                  onOpen={() => setSelectedTopic(topic)}
                  onToggleComplete={() => toggleComplete(topic.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <ResourcesSection resources={freeResources} />
      </main>

      <footer className="mt-20 border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-display text-foreground font-medium">
              AI Learning Hub
            </span>
            <span>·</span>
            <span>
              © {new Date().getFullYear()}. Built with{" "}
              <span className="text-primary">♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
            <span>
              {completed.size}/{topics.length} modules complete
            </span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedTopic && (
          <TopicModal
            topic={selectedTopic}
            isCompleted={completed.has(selectedTopic.id)}
            onClose={() => setSelectedTopic(null)}
            onToggleComplete={() => toggleComplete(selectedTopic.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
