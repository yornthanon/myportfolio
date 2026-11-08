import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
  pressed?: boolean;
};

export function Pill({ children, className, active = false }: PillProps) {
  return (
    <span
      className={cn(
        active
          ? "bg-surface shadow-raised-sm text-ink font-bold px-2 py-1 whitespace-nowrap"
          : "bg-surface shadow-pressed px-2 py-1 whitespace-nowrap",
        "rounded-full border-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
