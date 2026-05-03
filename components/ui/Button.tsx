"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      withArrow = false,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const variants = {
      primary:
        "relative overflow-hidden bg-white text-black hover:scale-[1.02] active:scale-[0.99] shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]",
      secondary:
        "glass-strong text-white hover:bg-surface-2 hover:border-accent-500/40",
      ghost: "text-white/80 hover:text-white hover:bg-white/5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500/60",
          sizes[size],
          variants[variant],
          className
        )}
        {...props}
      >
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-accent-200/40 to-transparent" />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          {withArrow && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          )}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";
