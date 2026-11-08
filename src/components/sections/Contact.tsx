import { useState } from "react";
import { useLocale } from "@/hooks/useLocale";
import { GlassCard } from "@/components/ui/GlassCard";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { contactInfo } from "@/data/contact";
import { en } from "@/data/i18n/en";
import { km } from "@/data/i18n/km";
import { Send } from "lucide-react";
import iconFacebook from "@/assets/fb.svg";
import iconTelegram from "@/assets/Telegram_logo_icon.svg";
import iconGithub from "@/assets/github.svg";
import iconGmail from "@/assets/Gmail_icon_(2020).svg";

export function Contact({ embedded = false }: { embedded?: boolean }) {
  const { locale } = useLocale();
  const t = locale === "km" ? km : en;
  void embedded;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const errors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errors.name = t.contact.name;
    if (!email.trim()) errors.email = t.contact.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Invalid email";
    if (!message.trim() || message.trim().length < 10) errors.message = t.contact.message;

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("sending");

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
        setFormErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactItems = [
    {
      label: t.contact.email,
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: <img src={iconGmail} alt="gmail" className="w-5 h-5" />,
    },
    {
      label: "Telegram",
      value: contactInfo.telegram,
      href: `https://t.me/${contactInfo.telegram.replace(/^@/, "")}`,
      icon: <img src={iconTelegram} alt="Telegram" className="w-5 h-5" />,
    },
    {
      label: "Facebook",
      value: contactInfo.facebook.replace("https://", ""),
      href: contactInfo.facebook,
      icon: <img src={iconFacebook} alt="Facebook" className="w-5 h-5" />,
    },
    {
      label: "GitHub",
      value: contactInfo.github.replace("https://", ""),
      href: contactInfo.github,
      icon: <img src={iconGithub} alt="GitHub" className="w-5 h-5" />,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Pill active className="text-xs font-semibold tracking-wider uppercase inline-block text-accent-text mb-4">
              {t.sections.contact.label}
            </Pill>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3 leading-[1.05] tracking-tight">
              {t.sections.contact.title}
            </h2>
            <p className="max-w-[48ch] text-[var(--muted)] leading-relaxed text-base">
              {t.sections.contact.intro}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] shadow-inset text-[12px] font-semibold text-[var(--text)]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
              {t.sections.contact.available}
            </div>
          </div>
        </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] items-start">
          {/* Left column: contact cards */}
          <div className="space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noopener"}
                className="block group"
                aria-label={item.label}
              >
                <div className="rounded-[24px] p-6 bg-[var(--bg)] shadow-[6px_6px_12px_#b9b9b9,_-6px_-6px_12px_#fbfbfb] border-none hover:-translate-y-1 hover:shadow-[8px_8px_16px_#b9b9b9,_-8px_-8px_16px_#fbfbfb] transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--surface)] shadow-inset flex items-center justify-center text-accent-text group-hover:shadow-raised-sm transition-shadow duration-200">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[11px] font-semibold text-[var(--muted)] uppercase tracking-wider leading-none">
                        {item.label}
                      </p>
                      <span className="text-sm font-medium text-[var(--accent-text)] block leading-none">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right column: contact form panel */}
          <div className="flex flex-col">
            <GlassCard className="rounded-[32px]! p-[40px] h-full w-full max-w-none bg-[var(--bg)] shadow-[8px_8px_16px_#b9b9b9,_-8px_-8px_16px_#fbfbfb] border-none">
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex-col" noValidate>
                <input
                  name="honeypot"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />
                <div className="grid grid-cols-2 gap-5 sm:flex-col sm:gap-3">
                  <Input
                    label={t.contact.name}
                    error={formErrors.name}
                    type="text"
                    required
                    placeholder="Your name"
                    className="h-[52px]"
                  />
                  <Input
                    label={t.contact.email}
                    error={formErrors.email}
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-[52px]"
                  />
                </div>
                <Textarea
                  label={t.contact.message}
                  error={formErrors.message}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="rounded-[24px]! px-[24px] py-[20px] resize-y min-h-[180px]"
                />
                <div className="mt-auto flex items-end justify-between gap-4 sm:gap-0 pt-6">
                  {status !== "idle" && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="text-sm text-[var(--muted)] leading-relaxed"
                    >
                      {status === "sending" ? t.contact.sending : status === "success" ? t.contact.success : t.contact.error}
                    </div>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={status === "sending"}
                    className="px-[32px] py-[14px] min-h-[52px] hover:-translate-y-1 hover:shadow-raised active:shadow-pressed focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 transition-all duration-200"
                  >
                    {status === "sending" ? (
                      <>
                        <Send className="w-5 h-5 animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.contact.send}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
