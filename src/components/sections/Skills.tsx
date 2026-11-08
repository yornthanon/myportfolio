import {
  Card,
  Pill,
  Reveal,
  Section,
} from "@/components/ui/shared";
import { skillGroups } from "@/data/skills";
import { useLocale } from "@/hooks/useLocale";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";

import reactIcon from "@/assets/react.png";
import jsIcon from "@/assets/js.png";
import tailwindIcon from "@/assets/tailwind.png";
import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css.png";
import gitIcon from "@/assets/git.png";
import githubIcon from "@/assets/github.svg";
import javaIcon from "@/assets/java.png";
import springIcon from "@/assets/springboot.png";
import cppIcon from "@/assets/c++.png";
import postmanIcon from "@/assets/postmand.png";
import dockerIcon from "@/assets/docker.png";
import postgresqlIcon from "@/assets/ps.png";
import csharpIcon from "@/assets/csharp.png";
import typescriptIcon from "@/assets/ts.png";
import sqlIcon from "@/assets/sql.png";


const SKILL_ASSETS: Record<string, string> = {
  React: reactIcon,
  TypeScript: typescriptIcon,
  "Tailwind CSS": tailwindIcon,
  JavaScript: jsIcon,
  HTML5: htmlIcon,
  CSS3: cssIcon,
  Java: javaIcon,
  "Spring Boot": springIcon,
  PostgreSQL: postgresqlIcon,
  SQL: sqlIcon,
  "C#": csharpIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  "C++": cppIcon,
  Docker: dockerIcon,
  Postman: postmanIcon,
};

function getSkillIcon(name: string) {
  return SKILL_ASSETS[name] || jsIcon;
}

export function Skills({ embedded: _embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;

  const allSkills = skillGroups.flatMap((g) => g.items);

  return (
    <Section id="skills" className="overflow-x-clip">
      <div className="container mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="space-y-4">
          <Reveal direction="up" delay={0} once>
            <Pill active className="text-xs font-semibold tracking-wider uppercase mb-2 inline-block">
              {t.sections.skills.label}
            </Pill>
          </Reveal>
          <Reveal direction="up" delay={100} once>
            <h1 className="text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight font-bold text-ink max-w-[16ch]">
              {t.sections.skills.title}
            </h1>
          </Reveal>
          <Reveal direction="up" delay={200} once>
            <div className="text-muted tabular-nums text-xs">
              {allSkills.length} technologies · {skillGroups.length} categories
            </div>
          </Reveal>
        </div>

        <div className="mt-6">
          <Reveal direction="up" delay={500} once>
            <Card className="rounded-card p-4 shadow-raised overflow-hidden">
              <ul className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {allSkills.map((item) => {
                  const iconSrc = getSkillIcon(item.name);
                  return (
                  <li
                    key={item.name}
                    className="rounded-[22px] p-4 shadow-pressed transition-all duration-200 hover:-translate-y-1 hover:shadow-raised group border border-transparent hover:border-accent/30 bg-surface"
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--surface)] shadow-inset flex items-center justify-center shrink-0 mb-3 group-hover:shadow-raised-sm transition-shadow duration-200">
                      <img
                        src={iconSrc}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[14px] font-bold text-ink whitespace-nowrap group-hover:text-accent transition-colors">
                        {item.name}
                      </span>
                      <span className="text-xs text-[var(--muted)] uppercase tracking-wider">
                        {item.level}
                      </span>
                    </div>
                  </li>
                  )}
                )}
                {allSkills.length === 0 && (
                  <li className="px-4 py-4 text-xs text-muted text-center">
                    No technologies in this category yet.
                  </li>
                )}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
