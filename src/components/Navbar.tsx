
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:basselatout@icloud.com";
  };
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-4",
      scrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200" 
        : "bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="#" className="flex items-center gap-2">
            <span className="text-blue-950">Bassel Atout</span>
            <span className="hidden sm:inline text-sm font-medium text-gray-600">| PM & Creative Director</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollToSection("home")} className="nav-link font-medium text-blue-950">
            Home
          </button>
          <button onClick={() => scrollToSection("work")} className="nav-link font-medium text-blue-950">
            Work
          </button>
          <button onClick={() => scrollToSection("skills")} className="nav-link font-medium text-blue-950">
            Skills
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link font-medium text-blue-950">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link font-medium text-blue-950">
            Contact
          </button>
        </nav>
        
        <Button onClick={handleEmailClick} className="hidden sm:flex items-center gap-2 rounded-full px-6 bg-blue-950 text-white hover:bg-blue-900">
          <Sparkles className="h-4 w-4" />
          Get in touch
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
