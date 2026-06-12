import { ReactNode } from "react";

interface PairingButtonProps {
  onClick?: () => void;
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export default function PairingButton({
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: PairingButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-2 py-3 text-[20px] md:text-[24px]  font-medium tracking-widest transition-all duration-300 cursor-pointer";

  const variants = {
    primary: "bg-primary-500 text-neutral-1 hover:bg-primary-600 active:scale-95 w-1/2 md:w-[300px] border border-primary-300",
    outline:
      "w-1/2 md:w-[300px] border border-primary-300 bg-primary-500 text-neutral-1 hover:bg-primary-600 active:scale-95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
