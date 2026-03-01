import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";
import { motion } from "motion/react";

const TAGS = [
  "Machine Learning",
  "Neural Networks",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Python",
  "PyTorch",
  "Transformers",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center px-4 py-20"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('/assets/generated/ai-hero-network.dim_1200x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-background/70" />
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-0 bg-gradient-to-t from-background to-transparent" />

      {/* Decorative glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full z-0 opacity-15 blur-3xl"
        style={{ background: "oklch(0.72 0.18 194)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full z-0 opacity-10 blur-3xl"
        style={{ background: "oklch(0.78 0.16 68)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary border border-primary/40 rounded-full px-4 py-1.5 bg-primary/5 mb-8"
        >
          <Zap className="w-3 h-3" />
          Free Interactive Curriculum
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6"
        >
          <span className="text-foreground">Learn How to</span>
          <br />
          <span className="text-gradient-cyan">Build AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
        >
          From zero to building your own neural networks — a structured,
          hands-on curriculum that takes you from the fundamentals of AI all the
          way to production-ready models.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-sans font-semibold px-8 py-6 text-base rounded-xl"
          >
            <a href="#learn">
              Start Learning
              <ArrowDown className="ml-2 w-4 h-4 animate-bounce" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:border-primary/50 font-sans px-8 py-6 text-base rounded-xl"
          >
            <a href="#resources">Browse Resources</a>
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-muted-foreground"
        >
          {[
            { label: "Topics", value: "8" },
            { label: "Curated Resources", value: "24+" },
            { label: "Hours of Content", value: "100+" },
            { label: "Difficulty Levels", value: "3" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl text-foreground font-semibold">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Topic tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 bg-card/50"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#learn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors z-10"
        aria-label="Scroll to curriculum"
      >
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
