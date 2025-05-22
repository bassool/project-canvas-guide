
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
    <div className="relative h-24 overflow-hidden -mt-6"> {/* Increased negative margin to overlap better */}
      {/* Wave pattern with improved gradient */}
      <div 
        className={`absolute inset-0 ${flipX ? "scale-x-[-1]" : ""}`}
      >
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className={`absolute w-[102%] h-full left-[-1%] ${flipX ? "rotate-180" : ""}`} /* Slightly wider to avoid edge gaps */
        >
          <defs>
            <linearGradient id={`gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className={`${colors.from} stop-color-dynamic`} />
              <stop offset="100%" className={`${colors.to} stop-color-dynamic`} />
            </linearGradient>
          </defs>
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill={`url(#gradient-${variant})`}
            className="animate-pulse-custom"
          ></path>
        </svg>
      </div>

      {/* Animated dots with improved opacity for better blending */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full bg-primary/20 animate-float blur-sm`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${25 + (i % 4) * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.6}s`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionTransition;
