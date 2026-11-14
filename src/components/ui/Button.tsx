import { cn } from "@/lib/utils";

type ButtonOwnProps = {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
  children: React.ReactNode;
};

type ButtonProps = ButtonOwnProps & (
  | ({ asChild?: false } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ asChild: true } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
);

export function Button({
  variant = "secondary",
  className,
  children,
  asChild = false,
  ...rest
}: ButtonProps) {
  const base =
    variant === "primary"
      ? "bg-accent text-white shadow-raised-sm border-none"
      : variant === "ghost"
        ? "text-accent hover:text-accent hover:shadow-raised-sm border-none"
        : "bg-surface text-ink shadow-raised-sm border-none";

  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      {...(rest as Record<string, unknown>)}
      className={cn(base, className, "rounded-full", "px-4 py-2 min-h-[44px] whitespace-nowrap")}
    >
      {children}
    </Comp>
  );
}
