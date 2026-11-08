import { useCallback } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLocale } from "@/hooks/useLocale";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import profilePhoto from "@/assets/photo.jpeg";
import iconFacebook from "@/assets/fb.svg";
import iconGithub from "@/assets/github.svg";
import iconTelegram from "@/assets/Telegram_logo_icon.svg";
import iconGmail from "@/assets/Gmail_icon_(2020).svg";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";

const SOCIAL = [
  { name: "Facebook", href: "https://web.facebook.com/tha.non.20", external: true },
  { name: "GitHub", href: "https://github.com/sovannak", external: true },
  { name: "Telegram", href: "https://t.me/sovannak", external: true },
  { name: "Email", href: "mailto:yornthanon.dev@gmail.com", external: true },
] as const;

const icons: Record<string, React.ReactNode> = {
  Facebook: <img src={iconFacebook} alt="Facebook" className="w-5 h-5" />,
  GitHub: <img src={iconGithub} alt="GitHub" className="w-5 h-5" />,
  Telegram: <img src={iconTelegram} alt="Telegram" className="w-5 h-5" />,
  Email: <img src={iconGmail} alt="Email" className="w-5 h-5" />,
};

export function Navbar() {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;
  const activeId = useScrollSpy([
    "home", "about", "education", "skills", "work", "services", "contact",
  ]);

  const toggleLocale = useCallback(() => {
    const next = locale === "en" ? "km" : "en";
    try {
      window.localStorage.setItem("locale", next);
    } catch {
      // ignore
    }
    window.location.reload();
  }, [locale]);

  const labels: Record<string, string> = {
    home: t.nav.home,
    about: t.nav.about,
    education: t.nav.education,
    skills: t.nav.skills,
    work: t.nav.work,
    services: t.nav.services,
    contact: t.nav.contact,
  };

  const isActive = (id: string): boolean => activeId === id;

  return (
    <>
      <nav className="navbar fixed top-4 left-1/2 -translate-x-1/2 z-[50] px-3 sm:px-4 py-2.5 sm:py-3" aria-label="Main navigation">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6 w-full max-w-[560px]">
            <div className="shrink-0 rounded-full overflow-hidden border-2 border-gray-400/40">
              <img src={profilePhoto} alt="Profile" className="w-8 h-8 object-cover" />
            </div>
            <div className="hidden sm:flex items-center gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive(link.id) ? "page" : undefined}
                  className={cn(
                    "nav-link px-3 py-2 rounded-xl text-xs sm:text-sm",
                    locale === "km" && "khmer",
                    isActive(link.id) ? "bg-accent text-white" : "text-[var(--text)] hover:text-accent",
                  )}
                >
                  {labels[link.id]}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              <div className="flex gap-1">
                <button
                  type="button"
                  className={cn(
                    "px-2.5 py-1.5 rounded-xl font-semibold text-[10px]",
                    locale === "en" ? "bg-accent text-white" : "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface)] hover:text-accent",
                  )}
                  onClick={toggleLocale}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={cn(
                    "px-2.5 py-1.5 rounded-xl font-semibold text-[10px]",
                    locale === "km" ? "bg-accent text-white" : "bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface)] hover:text-accent",
                  )}
                  onClick={toggleLocale}
                >
                  ខ្មែរ
                </button>
              </div>
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-8 h-8 rounded-full bg-[var(--surface)] shadow-inset flex items-center justify-center shrink-0"
                  aria-label={s.name}
                >
                  {icons[s.name]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
