import React from "react";
import colors from "../assets/ColorPalette";
interface ButtonProps {
  text: string;
  variant: "primary" | "secondary"; // Add more variants as needed
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant, onClick }) => {
  const baseClasses =
    "rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-4";
    const variantStyles = {
      primary: {
        backgroundColor: colors.nightBlueShade,
        color: 'white',
        ':hover': {
          backgroundColor: colors.vibrantOcean
        },
        ':focus-visible': {
          outlineColor: colors.deepSeaBlue
        }
      },
      secondary: {
        color: colors.nightBlueShade,
        ':hover': {
          backgroundColor: colors.nightBlueShade,
          colors: colors.vibrantOcean
        },
        ':focus-visible': {
          outlineColor: colors.darkBlueDeep
        }
      }
    };
  
    const style = variantStyles[variant];

   return (
    <button
      style={style}
      className={baseClasses}
      onClick={onClick}
    >
      {text}
      {variant === "secondary" && <span aria-hidden="true">→</span>}
    </button>
  );
};

export default Button;
