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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] p-6 bg-[var(--bg)] shadow-[6px_6px_12px_#b9b9b9,_-6px_-6px_12px_#fbfbfb] border-none transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_16px_#b9b9b9,_-8px_-8px_16px_#fbfbfb]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-[20px] mb-4"
                loading="lazy"
              />
              <div className="flex items-center gap-1.5 mb-3">
                <span className="text-[11px] font-semibold text-accent-text uppercase tracking-wider">
                  {project.year}
                </span>
                <span className="text-[11px] text-[var(--muted)] uppercase tracking-wider">·</span>
                <span className="text-[11px] font-medium text-[var(--muted)] uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Pill key={tech} active className="px-3 py-1 text-[10px] font-semibold text-ink shadow-pressed whitespace-nowrap">
                    {tech}
                  </Pill>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="ghost"
                  href={project.live}
                  target="_blank"
                  rel="noopener"
                >
                  Live demo
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  href={project.github}
                  target="_blank"
                  rel="noopener"
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
