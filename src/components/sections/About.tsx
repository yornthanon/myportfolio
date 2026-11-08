import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import { Card, Pill, Section } from "@/components/ui/shared";
import { profile } from "@/data/profile";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";
import profileCutout from "@/assets/photo-cutout.png";
import profilePhoto from "@/assets/photo.jpeg";
import iconRupp from "@/assets/rupp.png";
import iconMap from "@/assets/map.png";
import iconKhmer from "@/assets/khmerEnglish.png";
const CHECK_CIRCLE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FACTS = [
  { value: "Year 3 of Computer Science", label: "Education", icon: <img src={iconRupp} alt="Royal University of Phnom Penh" className="w-5" /> },
  { value: "Phnom Penh", label: "Cambodia", icon: <img src={iconMap} alt="Location" className="w-10" /> },
  { value: "Khmer, English", label: "Languages", icon: <img src={iconKhmer} alt="Languages" className="w-5" /> },

  {
    value: (
      <span className="flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
        Open to work
      </span>
    ),
    label: "Availability",
    icon: CHECK_CIRCLE,
  },
];

export function About({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;
  void embedded;

  return (
    <Section id="about" className="overflow-x-clip">
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="grid items-center gap-x-16 gap-y-12 md:grid-cols-[6fr_5fr]">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2"
            >
              <Pill active className="text-xs font-semibold tracking-wider uppercase inline-block">
                {t.sections.about.label}
              </Pill>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 80, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2"
            >
              <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.08] tracking-tight font-bold text-ink max-w-[16ch]">
                {t.sections.about.title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 160, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2"
            >
              <p className="text-ink leading-relaxed max-w-[62ch] text-left text-base">{profile.bio}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 240, ease: [0.22, 1, 0.36, 1] }}
              className="mb-2"
            >
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="btn btn-primary h-12 items-center justify-center whitespace-nowrap px-7 min-w-fit shrink-0"
                >
                  {t.nav.hireMe}
                </a>

                <a href="#education" className="btn btn-secondary h-12 px-7 min-w-fit shrink-0">
                  {t.nav.education}
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-end items-end max-h-[calc(100%+48px)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 320, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[min(78vw,460px)] h-[min(78vw,460px)] md:w-[min(34vw,460px)] md:h-[min(34vw,460px)] rounded-full bg-[var(--bg)] shadow-[inset_5px_5px_10px_rgba(0,0,0,0.18),_inset_-5px_-5px_10px_rgba(255,255,255,0.85)] flex items-center justify-center"
            >
              <img
                src={profileCutout}
                alt={profile.name}
                width={800}
                height={800}
                loading="eager"
                fetchPriority="high"
                className="drop-shadow-[8px_8px_14px_rgba(0,0,0,0.18)] self-end w-full h-full object-contain object-bottom"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = profilePhoto as string;
                }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 400, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
            {FACTS.map((fact, i) => (
              <Card key={i} className="p-5 flex items-center gap-4 w-full max-w-none">
                <div className="raised-sm w-11 h-11 rounded-full flex items-center justify-center shrink-0">
                  {fact.icon}
                </div>
                <div>
                  <div className="font-semibold text-ink">{fact.value}</div>
                  <div className="text-xs text-muted uppercase tracking-wider">{fact.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>


      </div>
    </Section>
  );
}
