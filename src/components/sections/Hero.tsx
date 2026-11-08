import { useLocale } from "@/hooks/useLocale";
import { profile } from "@/data/profile";
import profileCutout from "@/assets/image copy 2.png";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";
import iconFacebook from "@/assets/fb.svg";
import iconGithub from "@/assets/github.svg";
import iconTelegram from "@/assets/Telegram_logo_icon.svg";
import iconGmail from "@/assets/Gmail_icon_(2020).svg";
import { motion } from "framer-motion";

const [firstName, lastName] = profile.name.split(" ");

const SOCIAL = [
  { name: "Facebook", href: "https://web.facebook.com/tha.non.20", external: true },
  { name: "GitHub", href: "https://github.com/sovannak", external: true },
  { name: "Telegram", href: "https://t.me/sovannak", external: true },
  { name: "Email", href: "mailto:yornthanon.dev@gmail.com", external: false },
] as const;
const icons: Record<string, React.ReactNode> = {
  Facebook: <img src={iconFacebook} alt="Facebook" className="w-5 h-5" />,
  GitHub: <img src={iconGithub} alt="GitHub" className="w-5 h-5" />,
  Telegram: <img src={iconTelegram} alt="Telegram" className="w-5 h-5" />,
  Email: <img src={iconGmail} alt="Email" className="w-5 h-5" />,
};
export function Hero() {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;

  return (
    <section id="home" className="hero-section translate-y-[-52px]" aria-label="Hero">
      <div className="container hero-container">
        <div className="hero-grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hero-photo flex flex-col justify-center items-center py-4 md:py-0"
          >
            <div
              className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] shrink-0 rounded-full bg-[#DCDCDC] flex items-center justify-center p-4 md:p-6 shadow-[8px_8px_16px_rgba(0,0,0,0.18),_-8px_-8px_16px_rgba(255,255,255,0.85)]"
            >
              <div
                className="relative w-full h-full rounded-full overflow-hidden bg-[#DCDCDC] flex items-center justify-center shadow-[inset_5px_5px_10px_rgba(0,0,0,0.18),_inset_-5px_-5px_10px_rgba(255,255,255,0.85)]"
              >
                <img
                  src={profileCutout}
                  alt={profile.name}
                  width={800}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                  className="photo-img w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hero-text"
          >
            <div className="badge w-fit inline-flex items-center gap-1.5 rounded-full bg-[var(--surface)] shadow-inset px-2 py-1">
              <span className="badge-dot w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true"></span>
              <span className="badge-label text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider">{t.hero.openToWork}</span>
            </div>

            <h1 className="hero-name">
              <span>{firstName}</span>
              <br />
              <span>{lastName}</span>
            </h1>

            <p className="hero-role">{profile.role}</p>

            <p className="hero-intro">{profile.bio}</p>

            <div className="hero-buttons">
              <a href={profile.resume} download className="btn btn-primary">
                {t.hero.downloadCv}
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact me
              </a>

              <div className="flex items-center gap-2 ml-1">
                {SOCIAL.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="social-btn raised-sm shrink-0"
                    aria-label={s.name}
                  >
                    {icons[s.name]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
