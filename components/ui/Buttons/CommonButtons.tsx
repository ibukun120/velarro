import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
children: React.ReactNode;
variant?:
  | "primary"
  | "outline"
  | "ghost"
  | "danger"
  | "secondary"
  | "product";
size?: "sm" | "md" | "lg";
className?: string;
onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
children,
variant = "primary",
size = "md",
className,
onClick,
...props
}: ButtonProps) {
return (
<button
onClick={onClick}
{...props}
className={twMerge(
clsx(
[
"inline-flex items-center justify-center",
"rounded-xs",
"font-medium",
"border",
"transition-all duration-200",
"disabled:opacity-50",
"disabled:pointer-events-none",
"disabled:cursor-not-allowed",
],


      /* =========================
         Sizes
      ========================= */

      size === "sm" && "px-3 py-1.5 text-xs",
      size === "md" && "px-4 py-2 text-sm",
      size === "lg" && "px-6 py-3 text-base",

      /* =========================
         Primary
      ========================= */

      variant === "primary" &&
        [
          "bg-primary-400",
          "border-neutral-6",
          "text-neutral-1",
          "hover:bg-primary-500",
          "hover:border-neutral-6",
        ],

      /* =========================
         Outline
      ========================= */

      variant === "outline" &&
        [
          "bg-transparent",
          "border-border-default",
          "text-text-primary",
          "hover:bg-surface-card",
          "hover:border-neutral-6",
        ],

      /* =========================
         Secondary
      ========================= */

      variant === "secondary" &&
        [
          "bg-surface-secondary",
          "border-border-default",
          "text-text-primary",
          "hover:bg-surface-card",
        ],

      /* =========================
         Ghost
      ========================= */

      variant === "ghost" &&
        [
          "bg-transparent",
          "border-transparent",
          "text-text-secondary",
          "hover:bg-surface-card",
          "hover:text-text-primary",
        ],

      /* =========================
         Danger
      ========================= */

      variant === "danger" &&
        [
          "bg-error-400",
          "border-error-400",
          "text-neutral-1",
          "hover:bg-error-500",
          "hover:border-error-500",
        ],
variant === "product" && [
  "bg-neutral-2",
  "border-neutral-6",
  "text-neutral-12",
  "font-light",
  "uppercase",
  "tracking-widest",
  "hover:bg-primary-500",
  "hover:border-neutral-6",
  "hover:text-neutral-1",
],
      className
    )
  )}
>
  {children}
</button>


);
}
