import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({ children, className, pressed = false }: { children: ReactNode; className?: string; pressed?: boolean }) {
  return (
    <div
      className={cn(
        pressed
          ? "bg-surface shadow-pressed rounded-card border-none"
          : "bg-surface shadow-raised rounded-card border-none",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Pressed({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("bg-surface shadow-pressed rounded-card border-none", className)}>
      {children}
    </div>
  );
}

export function Pill({ children, className, active = false, pressed = true }: { children: ReactNode; className?: string; active?: boolean; pressed?: boolean }) {
  return (
    <span
      className={cn(
        active
          ? "bg-surface shadow-raised-sm text-ink font-bold px-2 py-1 whitespace-nowrap"
          : pressed
            ? "bg-surface shadow-pressed px-2 py-1 whitespace-nowrap"
            : "bg-surface shadow-raised-sm px-2 py-1 whitespace-nowrap",
        "rounded-full border-none",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------- useHashTab ---------- */
export function useHashTab(defaultTab: string) {
  const [tab, setTab] = useState<string>(
    () => (typeof window !== "undefined" ? window.location.hash.slice(1) || defaultTab : defaultTab),
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setTab(hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setTabAndHash = useCallback((next: string) => {
    setTab(next);
    window.location.hash = next;
  }, []);

  return { tab, setTab: setTabAndHash };
}

/* ---------- useScrollProgress ---------- */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const win = window;
      const doc = win.document.documentElement;
      const top = win.pageYOffset || doc.scrollTop;
      const bottom = doc.scrollHeight - win.innerHeight;
      setProgress(bottom > 0 ? Math.min(1, top / bottom) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

/* ---------- SkillIcon ---------- */
export function SkillIcon({ name, className }: { name: string; className?: string }) {
  const slug = name.toLowerCase().replace(/[.\s-]+/g, "");
  const iconMap: Record<string, string> = {
    react: "/assets/react.png",
    typescript: "/assets/ts.png",
    tailwindcss: "/assets/tailwind.png",
    javascript: "/assets/js.png",
    html5: "/assets/html.png",
    css3: "/assets/css.png",
    java: "/assets/java.png",
    springboot: "/assets/springboot.png",
    cpp: "/assets/c++.png",
    postman: "/assets/postmand.png",
    docker: "/assets/docker.png",
    postgresql: "/assets/ps.png",
    csharp: "/assets/csharp.png",
    sql: "/assets/sql.png",
  };
  const src = iconMap[slug];
  return (
    <div className="w-9 h-9 rounded-full bg-[var(--surface)] shadow-raised-sm flex items-center justify-center shrink-0">
      <img
        src={src}
        alt={name}
        className="w-5 h-5 object-contain"
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          const initials = name
            .split(/\s+/)
            .map((w) => w.charAt(0).toUpperCase())
            .join("")
            .slice(0, 2);
          t.style.display = "none";
          (t.parentNode as HTMLElement).innerHTML = `
            <div class="w-full h-full flex items-center justify-center bg-[var(--surface)] shadow-inset rounded-full text-[var(--muted)] text-xs font-bold whitespace-nowrap">
              ${initials}
            </div>`;
        }}
      />
    </div>
  );
}

export function Button({
  variant = "secondary",
  className,
  children,
  asChild = false,
  ...rest
}: { variant?: "primary" | "secondary" | "ghost"; asChild?: boolean; children: React.ReactNode; className?: string } & (
  | ({ asChild?: false } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ asChild: true } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
)) {
  const base =
    variant === "primary"
      ? "bg-accent text-white shadow-raised-sm border-none"
      : variant === "ghost"
        ? "text-accent hover:text-accent hover:shadow-raised-sm border-none"
        : "bg-surface text-ink shadow-raised-sm border-none";

  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      {...(rest as Record<string, unknown>)}
      className={cn(base, className, "rounded-full", "px-4 py-2 min-h-[44px] whitespace-nowrap")}
    >
      {children}
    </Comp>
  );
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  return (
    <div className="bg-surface shadow-pressed rounded-full p-1.5 w-fit">
      <div
        role="tablist"
        className="flex gap-1 overflow-x-auto snap-x no-scrollbar"
      >
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          const id = `tab-${cat.toLowerCase().replace(/\s+/g, "-")}`;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              id={id}
              onClick={() => onCategoryChange(cat)}
              className={cn(
                isActive
                  ? "bg-surface shadow-raised-sm text-ink font-bold rounded-full px-4 py-2 min-h-11 whitespace-nowrap"
                  : "text-muted rounded-full px-4 py-2 min-h-11 whitespace-nowrap",
                "transition-shadow duration-150 snap-start",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Section({ id, children, className }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("py-[64px] sm:py-14 overflow-x-clip", className)}>{children}</section>
  );
}

export function SectionRef({ id, children, className, ref }: { id?: string; children: ReactNode; className?: string; ref?: React.Ref<HTMLElement> }) {
  return (
    <section id={id} ref={ref} className={cn("py-[64px] sm:py-14 overflow-x-clip", className)}>{children}</section>
  );
}

export function PageHeader({ badge, title, intro, embedded }: { badge: ReactNode; title: string; intro?: string; embedded?: boolean }) {
  return (
    <>
      <Pill active className="text-xs font-semibold tracking-wider uppercase mb-2 inline-block">{badge}</Pill>
      <h1 className={`${embedded ? "text-3xl md:text-4xl" : "text-heading"} font-bold text-ink leading-[1.05] tracking-tight mb-3`}>{title}</h1>
      {intro && <p className="text-ink leading-relaxed max-w-[62ch] text-left">{intro}</p>}
    </>
  );
}

export function CTACard({
  title,
  intro,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  intro: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Card className="p-8 md:p-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-ink mb-3">{title}</h2>
      <p className="text-lg text-muted mb-8 max-w-[60ch] mx-auto">{intro}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button variant="primary" asChild href={primaryHref}>
          {primaryLabel}
        </Button>
        {secondaryLabel && secondaryHref && (
          <Button variant="secondary" asChild href={secondaryHref}>
            {secondaryLabel}
          </Button>
        )}
      </div>
    </Card>
  );
}

export function Reveal({ children, direction = "up", delay = 0, once = true }: { children: ReactNode; direction?: "up" | "right" | "left" | "scale"; delay?: number; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  const isJS =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("js");

  const initial =
    direction === "up"
      ? "opacity-0 translate-y-6"
      : direction === "right"
        ? "opacity-0 translate-x-32"
        : direction === "left"
          ? "opacity-0 -translate-x-32"
          : "opacity-0 scale-90";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        isJS ? initial : "",
        "data-[revealed=true]:opacity-100 data-[revealed=true]:translate-x-0 data-[revealed=true]:translate-y-0 data-[revealed=true]:scale-100",
        "motion-reduce:transition-none motion-reduce:!opacity-100 motion-reduce:!translate-x-0 motion-reduce:!translate-y-0 motion-reduce:!scale-100",
      )}
      style={{ transitionDelay: `${delay}ms` }}
      data-revealed={revealed ? "true" : "false"}
    >
      {children}
    </div>
  );
}
