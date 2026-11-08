import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: CardProps) {
  return (
    <div className={cn("card-raised", className)}>
      {children}
    </div>
  );
}
