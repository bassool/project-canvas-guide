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
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4", scrolled ? "bg-background/80 backdrop-blur-lg shadow-md" : "bg-transparent")}>
      <div className="container flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a href="#" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-slate-700">Portfolio</span>
            <span className="hidden sm:inline text-muted-foreground text-sm font-medium">| Creative Director & PM</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollToSection("home")} className="nav-link font-medium text-slate-700">
            Home
          </button>
          <button onClick={() => scrollToSection("work")} className="nav-link font-medium text-slate-700">
            Work
          </button>
          <button onClick={() => scrollToSection("skills")} className="nav-link font-medium text-slate-700">
            Skills
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link font-medium text-slate-700">
            About
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link font-medium text-slate-700">
            Contact
          </button>
        </nav>
        
        <Button onClick={() => scrollToSection("contact")} className="hidden sm:flex items-center gap-2 rounded-full px-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
          <Sparkles className="h-4 w-4" />
          Get in touch
        </Button>
      </div>
    </header>;
};
export default Navbar;