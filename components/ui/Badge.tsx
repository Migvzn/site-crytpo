import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Badge({ children, className, icon }: BadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-xl",
        className
      )}
    >
      {icon && <span className="text-accent-400">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
