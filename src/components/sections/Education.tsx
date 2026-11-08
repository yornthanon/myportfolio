import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { Card, Pill, Section } from "@/components/ui/shared";
import { education } from "@/data/education";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";
import { GraduationCap, Award } from "lucide-react";

type EduItem = (typeof education)[number];

const getEndYear = (years: string) => {
  const match = years.match(/\d{4}/g);
  return match ? parseInt(match[match.length - 1], 10) : 0;
};

const isCertification = (item: EduItem) =>
  item.level === "course" || item.level === "certificate";

export function Education({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;
  void embedded;

  const sortedEdu = [...education].sort(
    (a, b) => getEndYear(b.years) - getEndYear(a.years),
  );

  const schoolCount = education.filter((e) => !isCertification(e)).length;
  const certCount = education.filter((e) => isCertification(e)).length;

  return (
    <Section id="education" className="overflow-x-clip">
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2"
            >
              <Pill active className="text-xs font-semibold tracking-wider uppercase inline-block">
                {t.sections.education.label}
              </Pill>
            </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(36px,5vw,64px)] leading-[1.08] tracking-tight font-bold text-ink max-w-[16ch] mb-2"
          >
            {t.sections.education.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-ink leading-relaxed max-w-[62ch] text-left text-base mb-2"
          >
            My academic journey and formal qualifications in computer science and front-end engineering.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-muted tabular-nums"
          >
            {schoolCount} {t.sections.education.stats.schools}{" "}
            {t.sections.education.stats.and}{" "}
            {certCount} {t.sections.education.stats.certifications}
          </motion.div>
        </div>

        <div className="mt-6 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-400/30" />
          <div className="relative pl-4 sm:pl-24">
            {sortedEdu.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12"
              >
                <div
                  className="absolute left-4 top-[2px] -translate-x-1/2 z-10 w-7 h-7 rounded-full bg-surface shadow-raised-sm flex items-center justify-center border border-gray-400/60"
                  aria-hidden="true"
                >
                  {isCertification(item) ? (
                    <Award size={14} className="text-accent-text" />
                  ) : (
                    <GraduationCap size={14} className="text-accent-text" />
                  )}
                </div>
                <Card
                  className="rounded-[22px] shadow-[6px_6px_12px_#b9b9b9,_-6px_-6px_12px_#fbfbfb] border-none transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_16px_#b9b9b9,_-8px_-8px_16px_#fbfbfb]"
                >
                  <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 p-4 sm:p-6">
                    <div className="flex-1 min-w-0">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface shadow-pressed text-[12px] font-semibold text-accent-text whitespace-nowrap mb-2 block">
                        {item.years}
                      </span>
                      <h3 className="text-[16px] font-medium text-ink leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted leading-snug">
                        {item.org}
                      </p>
                      {item.desc && (
                        <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-white text-[12px] font-semibold shadow-raised-sm hover:shadow-[0_4px_8px_rgba(8,92,119,0.3)] transition-all duration-200"
                        aria-label={`Show certificate for ${item.title}`}
                      >
                        Show certificate
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
