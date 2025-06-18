
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

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Subtle background shapes */}
      <div className="blob-shape w-[400px] h-[400px] -top-40 -left-20 animate-pulse-custom bg-black"></div>
      <div className="blob-shape w-[800px] h-[900px] -bottom-[10rem] -right-20 animate-pulse-custom bg-black"></div>
      <div className="blob-shape w-[300px] h-[300px] top-[10%] right-[40%] animate-pulse-custom bg-black"></div>
      
      {/* Minimal decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-black animate-float" style={{
        animationDelay: "0.5s"
      }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 rounded-full bg-black animate-float" style={{
        animationDelay: "1.2s"
      }}></div>
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-black font-medium mb-0 mt-28">
            <Sparkles className="h-4 w-4 mr-2 text-black" />
            <span className="text-black">Creating magic through design & management</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="block text-black">Bringing</span>
            <span className="block text-gray-600">creative vision</span>
            <span className="block text-black">to life with</span>
            <span className="block text-black">precise execution</span>
          </h1>
          
          <p className="text-lg sm:text-xl max-w-md text-gray-600">Creative director and Project Manager turning imaginative ideas into extraordinary realities that captivate and inspire.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToWork} className="rounded-full px-6 group bg-black text-white hover:bg-gray-800">
              View my work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square animate-float">
          {/* Minimal decorative elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full border border-gray-200 animate-spin-slow"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-gray-200 animate-spin-slow" style={{
          animationDirection: "reverse"
        }}></div>
          
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg aspect-square border border-gray-200">
            <img alt="Creative director at work" className="w-full h-full object-cover" src="/lovable-uploads/8121923a-e35f-4ba0-a927-0cf39b6fa985.png" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -right-6 top-3/4 bg-white shadow-lg p-4 rounded-xl border border-gray-200 animate-float z-20" style={{
          animationDelay: "1s"
        }}>
            <div className="flex items-center gap-2">
              <Wand className="h-5 w-5 text-gray-700" />
              <span className="font-medium text-sm text-gray-900">PMI-CAPM® Certified</span>
            </div>
          </div>
          
          <div className="absolute -left-6 top-1/4 bg-white shadow-lg py-2 px-4 rounded-full border border-gray-200 animate-float z-20" style={{
          animationDelay: "1.5s"
        }}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">3+</span>
              <span className="text-xs text-gray-600">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
