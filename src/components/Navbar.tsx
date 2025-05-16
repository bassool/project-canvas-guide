
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="text-xl font-bold">
          <a href="#" className="flex items-center gap-2">
            <span className="text-primary">Portfolio</span>
            <span className="hidden sm:inline">| Creative Director & PM</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <button onClick={() => scrollToSection("home")} className="nav-link">Home</button>
          <button onClick={() => scrollToSection("work")} className="nav-link">Work</button>
          <button onClick={() => scrollToSection("services")} className="nav-link">Services</button>
          <button onClick={() => scrollToSection("about")} className="nav-link">About</button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
        </nav>
        
        <Button onClick={() => scrollToSection("contact")} className="hidden sm:flex">
          Get in touch
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
