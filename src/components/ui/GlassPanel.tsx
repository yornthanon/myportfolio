import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  p?: string;
};

export function GlassPanel({ children, className, p = "6" }: GlassPanelProps) {
  return (
    <div className={cn("bg-surface shadow-raised rounded-card border-none p-" + p, className)}>
      {children}
    </div>
  );
}
