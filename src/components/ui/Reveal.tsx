import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "right" | "left" | "scale";
  delay?: number;
  once?: boolean;
};

export function Reveal({ children, direction = "up", delay = 0, once = true }: RevealProps) {
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
