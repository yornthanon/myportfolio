import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  pressed?: boolean;
};

export function Card({ children, className, pressed = false }: CardProps) {
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
