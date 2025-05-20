
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overDarkSection, setOverDarkSection] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Check if we're over a section with a dark background
      const sections = [
        document.getElementById("work"),
        document.getElementById("skills")
      ];
      
      let isOverDarkSection = false;
      
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the navbar overlaps with this section
          if (rect.top <= 80 && rect.bottom >= 0) {
            isOverDarkSection = true;
          }
        }
      });
      
      setOverDarkSection(isOverDarkSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
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
  
  return <header className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-700 py-4",
    scrolled 
      ? overDarkSection 
        ? "bg-white/70 backdrop-blur-xl shadow-md" 
        : "bg-background/60 backdrop-blur-xl shadow-md" 
      : "bg-transparent"
  )}>
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="#" className="flex items-center gap-2">
            <span className={cn(
              "bg-gradient-to-r from-primary to-secondary bg-clip-text",
              overDarkSection ? "text-slate-700" : "text-slate-700"
            )}>Portfolio</span>
            <span className={cn(
              "hidden sm:inline text-sm font-medium",
              overDarkSection ? "text-slate-700" : "text-slate-700"
            )}>| Creative Director & PM</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollToSection("home")} className={cn(
            "nav-link font-medium",
            overDarkSection ? "text-slate-700" : "text-slate-700"
          )}>
            Home
          </button>
          <button onClick={() => scrollToSection("work")} className={cn(
            "nav-link font-medium",
            overDarkSection ? "text-slate-700" : "text-slate-700"
          )}>
            Work
          </button>
          <button onClick={() => scrollToSection("skills")} className={cn(
            "nav-link font-medium",
            overDarkSection ? "text-slate-700" : "text-slate-700"
          )}>
            Skills
          </button>
          <button onClick={() => scrollToSection("about")} className={cn(
            "nav-link font-medium",
            overDarkSection ? "text-slate-700" : "text-slate-700"
          )}>
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className={cn(
            "nav-link font-medium",
            overDarkSection ? "text-slate-700" : "text-slate-700"
          )}>
            Contact
          </button>
        </nav>
        
        <Button onClick={() => scrollToSection("contact")} className="hidden sm:flex items-center gap-2 rounded-full px-6 bg-transparent hover:bg-transparent border border-primary text-primary hover:text-primary/90 transition-colors">
          <Sparkles className="h-4 w-4" />
          Get in touch
        </Button>
      </div>
    </header>;
};

export default Navbar;
