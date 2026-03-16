import React from "react";

interface SleepButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function SleepButton({
  children,
  variant = "primary",
  onClick,
  className = "",
}: SleepButtonProps) {
  const baseStyles =
    "h-12 px-6 rounded-[14px] transition-all duration-200 ease-out font-medium";

  const variantStyles = {
    primary: "bg-[#4F7CAC] text-white hover:bg-[#5a8bc4] active:scale-[0.98]",
    secondary:
      "bg-transparent border border-[#C9CCD3] text-white hover:bg-[#374151]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
