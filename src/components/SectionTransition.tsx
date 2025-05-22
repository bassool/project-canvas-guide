
import React from "react";

interface SectionTransitionProps {
  variant?: "primary" | "secondary" | "accent" | "default";
  flipX?: boolean;
  fromColor?: string;
  toColor?: string;
}

const SectionTransition: React.FC<SectionTransitionProps> = ({
  variant = "default",
  flipX = false,
  fromColor,
  toColor,
}) => {
  // Define color schemes based on variant
  const getColors = () => {
    if (fromColor && toColor) {
      return { from: fromColor, to: toColor };
    }

    switch (variant) {
      case "primary":
        return { from: "from-background", to: "to-primary/10" };
      case "secondary":
        return { from: "from-background", to: "to-secondary/10" };
      case "accent":
        return { from: "from-background", to: "to-accent/10" };
      default:
        return { from: "from-background", to: "to-slate-100" };
    }
  };

  const colors = getColors();
  
  return (
    <div className="relative h-32 overflow-hidden -mt-16">
      <div className={`absolute inset-0 ${flipX ? "scale-x-[-1]" : ""}`}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className={`absolute w-[105%] h-full left-[-2.5%] ${flipX ? "rotate-180" : ""}`}
        >
          <path 
            d="M0,0 L1200,0 L1200,120 Q900,80 600,100 T0,80 Z" 
            className={`fill-current transition-colors duration-300 ${colors.from.replace('from-', 'text-')} ${colors.to.replace('to-', 'text-')}`}
            style={{
              fill: `url(#${colors.from.replace('from-', '')}-${colors.to.replace('to-', '')})`,
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionTransition;
