import { useCallback, useState } from "react";
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
import { Menu, X } from "lucide-react";

const SOCIAL = [
  { name: "Facebook", href: "https://web.facebook.com/tha.non.20", external: true },
  { name: "GitHub", href: "https://github.com/yornthanon", external: true },
  { name: "Telegram", href: "https://t.me/yornthanon", external: true },
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
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Go to home">
        <img src={profilePhoto} alt="Profile" className="brand-logo" />
      </a>

      <div className="nav-center">
        <div className="nav-pill" role="list">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              role="listitem"
              aria-current={isActive(link.id) ? "page" : undefined}
              className={cn(
                isActive(link.id) ? "nav-link-active" : "nav-link",
                locale === "km" && "khmer",
              )}
              onClick={() => setMenuOpen(false)}
            >
              {labels[link.id]}
            </a>
          ))}
        </div>
      </div>

      <div className="nav-right">
        <div className="lang-switcher" aria-label="Language selector">
          <button type="button" className={cn("lang-option", locale === "en" && "lang-option-active")} onClick={toggleLocale}>
            EN
          </button>
          <button type="button" className={cn("lang-option khmer", locale === "km" && "lang-option-active")} onClick={toggleLocale}>
            ខ្មែរ
          </button>
        </div>
        {SOCIAL.map((s) => (
          <a
            key={s.name}
            href={s.href}
            {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="social-btn"
            aria-label={s.name}
          >
            {icons[s.name]}
          </a>
        ))}
        <div className="quick-actions" aria-label="Quick contact actions">
          <a
            href="https://t.me/yornthanon"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-action"
            aria-label="Message on Telegram"
          >
            {icons.Telegram}
          </a>
          <a
            href="mailto:yornthanon.dev@gmail.com"
            className="quick-action"
            aria-label="Send email"
          >
            {icons.Email}
          </a>
        </div>
        <button
          type="button"
          className="mobile-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" role="menu">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={link.href} className={cn("mobile-menu-link", isActive(link.id) && "mobile-menu-link-active", locale === "km" && "khmer")} onClick={() => setMenuOpen(false)}>
              {labels[link.id]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
