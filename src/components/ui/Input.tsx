import { cn } from "@/lib/utils";

type InputOwnProps = {
  label?: string;
  error?: string;
};

type InputProps = InputOwnProps & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, className, ...rest }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
          {label}
        </label>
      )}
      <input {...rest} className={cn("input-field", className)} />
      {error && (
        <p className="text-xs font-medium text-[var(--accent-text)]">{error}</p>
      )}
    </div>
  );
}

export function Textarea({
  label,
  error,
  className,
  ...rest
}: InputOwnProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">
          {label}
        </label>
      )}
      <textarea {...rest} className={cn("input-field", className)} />
      {error && (
        <p className="text-xs font-medium text-[var(--accent-text)]">{error}</p>
      )}
    </div>
  );
}
