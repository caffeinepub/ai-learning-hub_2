import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { FreeResource } from "../data/topics";

interface ResourcesSectionProps {
  resources: FreeResource[];
}

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  return (
    <section id="resources" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-mono text-accent uppercase tracking-widest px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
              Free Platforms
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mt-4">
            Best Free AI Resources
          </h2>
          <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto font-sans text-sm md:text-base">
            Curated platforms used by thousands of AI practitioners worldwide —
            all completely free to access.
          </p>
        </motion.div>

        {/* Resource grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource, index) => {
            const isCyan = resource.color === "cyan";
            return (
              <motion.a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative rounded-xl border border-border bg-card p-5 flex flex-col gap-3 card-hover overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl pointer-events-none transition-opacity group-hover:opacity-10"
                  style={{
                    background: isCyan
                      ? "oklch(0.72 0.18 194)"
                      : "oklch(0.78 0.16 68)",
                    transform: "translate(30%, -30%)",
                  }}
                />

                {/* Badge and icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-full border 
                      ${
                        isCyan
                          ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/30"
                          : "text-amber-400 bg-amber-500/10 border-amber-500/30"
                      }`}
                  >
                    {resource.badge}
                  </span>
                  <ExternalLink
                    className={`w-4 h-4 transition-colors ${
                      isCyan
                        ? "text-muted-foreground group-hover:text-cyan-400"
                        : "text-muted-foreground group-hover:text-amber-400"
                    }`}
                  />
                </div>

                {/* Name */}
                <h3
                  className={`font-display text-lg font-semibold text-foreground transition-colors ${
                    isCyan
                      ? "group-hover:text-cyan-300"
                      : "group-hover:text-amber-300"
                  }`}
                >
                  {resource.name}
                </h3>

                {/* Description */}
                <p className="text-sm font-sans text-muted-foreground leading-relaxed flex-1">
                  {resource.description}
                </p>

                {/* Visit link text */}
                <div
                  className={`flex items-center gap-1.5 text-xs font-mono mt-1 ${
                    isCyan ? "text-cyan-400/70" : "text-amber-400/70"
                  } group-hover:opacity-100 opacity-60 transition-opacity`}
                >
                  <Sparkles className="w-3 h-3" />
                  Visit Platform
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-xs text-muted-foreground font-mono mt-8"
        >
          All resources are free • No sign-up required for most • Opens in new
          tab
        </motion.p>
      </div>
    </section>
  );
}
