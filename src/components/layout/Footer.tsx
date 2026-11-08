import { useLocale } from "@/hooks/useLocale";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";
import { profile } from "@/data/profile";

export function Footer() {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;
  const YEAR = new Date().getFullYear();
  const brandName = profile.name.trim();
  const initials = brandName
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="brand-footer">
            <div className="brand-circle-sm">
              {initials}
              <span className="brand-dot" aria-hidden="true" />
            </div>
            <span className="brand-name">{brandName}</span>
          </div>
          <p className="footer-copy">
            © {YEAR} {brandName}. {t.footer.rights}
          </p>
          <button className="back-to-top raised-sm" aria-label="Back to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
