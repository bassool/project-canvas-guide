
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wand, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="blob-shape bg-primary/30 w-[400px] h-[400px] -top-40 -left-20 animate-pulse-custom"></div>
      <div className="blob-shape bg-secondary/30 w-[500px] h-[500px] -bottom-60 -right-20 animate-pulse-custom"></div>
      <div className="blob-shape bg-accent/20 w-[300px] h-[300px] top-1/3 right-1/4 animate-pulse-custom"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/40 animate-float" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full bg-secondary/40 animate-float" style={{ animationDelay: "1.2s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-10 h-10 rounded-full bg-accent/40 animate-float" style={{ animationDelay: "1.8s" }}></div>
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Creating magic through design & management</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="block">Bringing</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">creative vision</span>
            <span className="block">to life with</span>
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">precise execution</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 max-w-md">
            Creative director and project manager turning imaginative ideas into extraordinary realities that captivate and inspire.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToWork} className="rounded-full px-6 group">
              View my work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }} className="rounded-full px-6 border-primary/20 hover:bg-primary/5">
              Get in touch
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square animate-float">
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full border-4 border-dashed border-primary/30 animate-spin-slow"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-4 border-dotted border-secondary/30 animate-spin-slow" style={{ animationDirection: "reverse" }}></div>
          
          <div className="relative z-10 overflow-hidden rounded-3xl gradient-border shadow-xl aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Creative director at work" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating element */}
            <div className="absolute -right-6 -bottom-6 bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <Wand className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Creative Direction</span>
              </div>
            </div>
            
            {/* Stats bubble */}
            <div className="absolute -left-6 top-1/3 bg-card/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg border border-border animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">10+</span>
                <span className="text-xs">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
