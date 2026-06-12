import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: ReactNode;

  className?: string;
  style?: React.CSSProperties;

  onClick?: () => void;

  icon?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  disabled?: boolean;
  loading?: boolean;
  active?: boolean;

  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";

  type?: "button" | "submit" | "reset";

  ariaLabel?: string;

  fullWidth?: boolean;
  rounded?: boolean;
  block?: boolean;
  createButton?: boolean;
}
const AuthSubmitButton: React.FC<ButtonInterface> = (props) => {
  const {
    text,
    children,
    className = "",
    onClick,
    rightIcon,
    disabled = false,
    loading = false,
    variant = "primary",
    size = "md",
    type = "button",
    fullWidth = false,
    rounded = false,
    createButton = false,
    leftIcon,
    ...rest
  } = props;

  const computedLeftIcon = createButton ? <CiCirclePlus /> : leftIcon;

  const variantStyles = {
    primary:
      "bg-[var(--primary-bg)] text-[var(--primary-text)] hover:bg-[var(--primary-hover)]",
    secondary: "bg-gray-600 text-neutral-1 hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    ghost: "text-gray-700 hover:bg-gray-100",
    link: "text-blue-600 underline",
  };

  const sizeStyles = {
    sm: "px-4 py-1 text-sm",
    md: "px-5 py-1 text-base",
    lg: "px-7 py-2 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${rounded ? "rounded-full" : "rounded-md"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      {...rest}
    >
            
      {loading && (
        <span className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></span>
      )}
            {!loading && computedLeftIcon}
            {text || children}
            {!loading && rightIcon}
          
    </button>
  );
};

export default AuthSubmitButton;
