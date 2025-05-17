
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/20 via-background to-background"
        aria-hidden="true"
      />
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">Bringing</span>
            <span className="block text-primary">creative vision</span>
            <span className="block">to life with</span>
            <span className="block text-accent">precise execution</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-md">
            Creative director and project manager with a passion for turning ideas into impactful realities.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToWork}>
              View my work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}>
              Get in touch
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-video md:aspect-square lg:aspect-auto animate-scale-in">
          <div className="absolute -bottom-4 -left-4 w-3/4 aspect-square bg-secondary rounded-full -z-10" />
          <div className="absolute -top-4 -right-4 w-3/4 aspect-square bg-accent/10 rounded-full -z-10" />
          
          <div className="relative z-10 overflow-hidden rounded-lg border border-border shadow-lg aspect-video md:aspect-square lg:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Creative director at work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
