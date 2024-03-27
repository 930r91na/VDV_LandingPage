import React from "react";

interface ButtonProps {
  text: string;
  variant: "primary" | "secondary"; // Add more variants as needed
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
  const baseClasses =
    "rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
      : "text-gray-900 hover:bg-gray-100 focus-visible:outline-gray-600";

  return (
    <a
      href="#"
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {text} {variant === "secondary" && <span aria-hidden="true">→</span>}
    </a>
  );
};

export default Button;
