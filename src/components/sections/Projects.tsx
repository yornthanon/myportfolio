import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { Pill, Reveal } from "@/components/ui/shared";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";

export function Projects({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;
  void embedded;

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="space-y-4">
          <Reveal direction="up" delay={0} once>
            <Pill active className="text-xs font-semibold tracking-wider uppercase mb-2 inline-block">
              {t.sections.projects.label}
            </Pill>
          </Reveal>
          <Reveal direction="up" delay={100} once>
            <h1 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight font-bold text-ink max-w-[16ch]">
              {t.sections.projects.title}
            </h1>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 max-w-lg mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="project-card w-full overflow-hidden rounded-[22px] p-3 sm:p-4 bg-[var(--bg)] shadow-[4px_4px_10px_#b9b9b9,_-4px_-4px_10px_#fbfbfb] border-none transition-all duration-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card-image block w-full aspect-[16/9] object-cover rounded-[16px] mb-3"
                loading="lazy"
              />
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <span className="text-[11px] font-semibold text-accent-text uppercase tracking-wider">
                  {project.year}
                </span>
                <span className="text-[11px] text-[var(--muted)] uppercase tracking-wider">·</span>
                <span className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text)] mb-1 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech) => (
                  <Pill key={tech} active className="px-2.5 py-1 text-[10px] font-semibold text-ink shadow-pressed whitespace-nowrap">
                    {tech}
                  </Pill>
                ))}
              </div>
              <div className="project-card-actions grid grid-cols-2 gap-2 sm:gap-3">
                <Button
                  asChild
                  variant="ghost"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-2 text-xs sm:text-sm"
                >
                  Live demo
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-2 text-xs sm:text-sm"
                >
                  Source
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
