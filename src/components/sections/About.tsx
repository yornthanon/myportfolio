import { useLocale } from "@/hooks/useLocale";
import { Card, Pill, Section } from "@/components/ui/shared";
import { profile } from "@/data/profile";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";
import profileCutout from "@/assets/image copy.png";
import iconRupp from "@/assets/rupp.png";
import iconMap from "@/assets/map.png";
const CHECK_CIRCLE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FACTS = [
  { value: "Bachelor of Computer Science", label: "RUPP", icon: <img src={iconRupp} alt="Royal University of Phnom Penh" className="w-5" /> },
  { value: "Phnom Penh, Cambodia", label: "Location", icon: <img src={iconMap} alt="Location" className="w-7" /> },
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
        <div className="grid items-center gap-x-16 gap-y-12 md:grid-cols-[1fr_1fr]">
          <div className="space-y-7">
            <div className="mb-2">
              <Pill active className="text-xs font-semibold tracking-wider uppercase inline-block">
                {t.sections.about.label}
              </Pill>
            </div>

            <div className="mb-2">
              <h1 className="text-[clamp(44px,5.4vw,76px)] leading-[1.04] tracking-[-0.045em] font-bold text-ink max-w-[10ch]">
                {t.sections.about.title}
              </h1>
            </div>

            <div className="mb-2">
              <p className="text-ink leading-relaxed max-w-[54ch] text-left text-base">{profile.bio}</p>
            </div>

            <div className="mb-2">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={profile.resume}
                  download
                  className="btn btn-primary h-12 items-center justify-center whitespace-nowrap px-7 min-w-fit shrink-0"
                >
                  {t.hero.downloadCv}
                </a>

                <a href="#contact" className="btn btn-secondary h-12 px-7 min-w-fit shrink-0">
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center">
            <div className="relative w-full max-w-[570px] aspect-square overflow-hidden bg-[var(--bg)] shadow-raised">
              <img
                src={profileCutout}
                alt="Creative professional wearing headphones with a cat"
                width={1199}
                height={672}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="about-facts-shell">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {FACTS.map((fact, i) => (
              <Card key={i} className="about-fact-card shadow-none">
                <div className="about-fact-icon w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                  {fact.icon}
                </div>
                <div className="text-center">
                  <div className="font-bold text-ink text-xl leading-tight">{fact.value}</div>
                  <div className="text-xs text-muted uppercase tracking-wider">{fact.label}</div>
                </div>
              </Card>
            ))}
            </div>
          </div>
        </div>


      </div>
    </Section>
  );
}
