
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
  const transitionId = `gradient-${variant}-${fromColor?.replace(/[^a-z0-9]/g, '')}-${toColor?.replace(/[^a-z0-9]/g, '')}`;
  
  return (
    <div className="relative h-32 overflow-hidden -mt-12">
      <div className={`absolute inset-0 ${flipX ? "scale-x-[-1]" : ""}`}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className={`absolute w-[105%] h-full left-[-2.5%] ${flipX ? "rotate-180" : ""}`}
          style={{ filter: "blur(0px)" }}
        >
          <defs>
            <linearGradient id={transitionId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className={`${colors.from} stop-color-dynamic`} />
              <stop offset="100%" className={`${colors.to} stop-color-dynamic`} />
            </linearGradient>
          </defs>
          <path 
            d="M0,0 L1200,0 L1200,120 Q900,80 600,100 T0,80 Z" 
            fill={`url(#${transitionId})`}
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionTransition;
