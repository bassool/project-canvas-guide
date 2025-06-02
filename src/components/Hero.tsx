import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wand, Sparkles } from "lucide-react";
const Hero = () => {
  const scrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-200">
      {/* Abstract background shapes */}
      <div className="blob-shape w-[400px] h-[400px] -top-40 -left-20 animate-pulse-custom bg-[#59b8e9]"></div>
      <div className="blob-shape w-[800px] h-[900px] -bottom-[10rem] -right-20 animate-pulse-custom bg-[#81bfdf] z-10"></div>
      <div className="blob-shape w-[300px] h-[300px] top-[10%] right-[40%] animate-pulse-custom bg-[#87ddf0]"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/40 animate-float" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full bg-[#b4def5] animate-float" style={{
      animationDelay: "1.2s"
    }}></div>
      <div className="absolute top-[70%] left-[40%] w-10 h-10 rounded-full bg-[#b4def5] animate-float" style={{
      animationDelay: "1.8s"
    }}></div>
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-primary font-medium mb-0 mt-28 bg-transparent border border-slate-700 text-slate-700">
            <Sparkles className="h-4 w-4 mr-2 text-slate-700" />
            <span className="text-slate-700">Creating magic through design & management</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="block text-slate-700">Bringing</span>
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-[#3492d8]/40">creative vision</span>
            <span className="block text-slate-700">to life with</span>
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-slate-700">precise execution</span>
          </h1>
          
          <p className="text-lg sm:text-xl max-w-md text-slate-700">Creative director and Project Manager turning imaginative ideas into extraordinary realities that captivate and inspire.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToWork} className="rounded-full px-6 group bg-transparent border border-slate-700 text-slate-700 hover:text-slate-700/90 hover:bg-transparent">
              View my work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square animate-float">
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full border-4 border-dashed border-slate-700 animate-spin-slow bg-transparent"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-4 border-dotted border-slate-700 animate-spin-slow" style={{
          animationDirection: "reverse"
        }}></div>
          
          <div className="relative z-10 overflow-hidden rounded-3xl gradient-border shadow-xl aspect-square">
            <img alt="Creative director at work" className="w-full h-full object-cover" src="/lovable-uploads/8121923a-e35f-4ba0-a927-0cf39b6fa985.png" />
          </div>
          
          {/* Floating element - improved contrast */}
          <div className="absolute -right-6 top-3/4 bg-white/90 dark:bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border animate-float z-20" style={{
          animationDelay: "1s"
        }}>
            <div className="flex items-center gap-2">
              <Wand className="h-5 w-5 text-slate-700" />
              <span className="font-medium text-sm text-slate-900">PMI-CAPM® Certified</span>
            </div>
          </div>
          
          {/* Stats bubble - updated to match first bubble style */}
          <div className="absolute -left-6 top-1/4 bg-white/90 dark:bg-card/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg border border-border animate-float z-20" style={{
          animationDelay: "1.5s"
        }}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-700">5+</span>
              <span className="text-xs text-slate-900">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;