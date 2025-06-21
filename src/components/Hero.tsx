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
  return <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-zinc-100">
      {/* Small floating elements - increased opacity */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-teal-900 animate-float opacity-40"></div>
      <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-teal-900 animate-float opacity-50" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute top-[35%] left-[20%] w-4 h-4 rounded-full bg-teal-900 animate-pulse opacity-35" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-teal-900 animate-float opacity-45" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-teal-900 animate-pulse opacity-40" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute bottom-[30%] right-[10%] w-5 h-5 rounded-full bg-teal-900 animate-float opacity-35" style={{
      animationDelay: "2.5s"
    }}></div>
      
      {/* Small rotating circles - increased opacity */}
      <div className="absolute top-[20%] left-[25%] w-6 h-6 rounded-full border border-teal-900 animate-spin-slow opacity-45"></div>
      <div className="absolute top-[45%] right-[20%] w-4 h-4 rounded-full border border-teal-900 animate-spin-slow opacity-40" style={{
      animationDirection: "reverse"
    }}></div>
      <div className="absolute bottom-[25%] left-[30%] w-5 h-5 rounded-full border border-teal-900 animate-spin-slow opacity-50" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute bottom-[40%] right-[35%] w-3 h-3 rounded-full border border-teal-900 animate-spin-slow opacity-45" style={{
      animationDirection: "reverse",
      animationDelay: "1.5s"
    }}></div>
      
      {/* Additional small bubbles - increased opacity */}
      <div className="absolute top-[50%] left-[5%] w-2 h-2 rounded-full bg-teal-900 animate-pulse opacity-40" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-[70%] right-[5%] w-3 h-3 rounded-full bg-teal-900 animate-float opacity-35" style={{
      animationDelay: "3.5s"
    }}></div>
      <div className="absolute top-[10%] left-[40%] w-2 h-2 rounded-full bg-teal-900 animate-pulse opacity-45" style={{
      animationDelay: "4s"
    }}></div>
      <div className="absolute bottom-[10%] right-[40%] w-4 h-4 rounded-full bg-teal-900 animate-float opacity-40" style={{
      animationDelay: "4.5s"
    }}></div>
      
      {/* New violet-600 animated elements - FULL OPACITY ALWAYS */}
      {/* Floating star */}
      <div className="absolute top-[30%] right-[30%] w-6 h-6 bg-violet-600 animate-float !opacity-100 z-0" style={{
      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      animationDelay: "2s"
    }}></div>
      
      {/* Floating diamond near content */}
      <div className="absolute bottom-[35%] left-[5%] w-5 h-5 bg-violet-600 animate-pulse !opacity-100 transform rotate-45 z-0" style={{
      animationDelay: "1.8s"
    }}></div>
      
      {/* Triangle near hero text */}
      <div className="absolute top-[40%] left-[35%] w-0 h-0 animate-float !opacity-100 z-0" style={{
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "12px solid rgb(124 58 237)",
      animationDelay: "3.2s"
    }}></div>
           
      {/* Additional violet elements around main content */}
      {/* Hexagon near buttons */}
      <div className="absolute bottom-[45%] left-[40%] w-7 h-7 bg-violet-600 animate-spin-slow !opacity-100 z-0" style={{
      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
      animationDelay: "2.8s"
    }}></div>
      
      {/* Plus sign near title - FORCED FULL OPACITY */}
      <div className="absolute top-[28%] left-[10%] animate-pulse !opacity-100 z-0" style={{
      animationDelay: "1.2s"
    }}>
        <div className="w-2 h-8 bg-violet-600 absolute"></div>
        <div className="w-8 h-2 bg-violet-600 absolute top-3 -left-3"></div>
      </div>
      
      {/* Heart shape near image */}
      <div className="absolute top-[25%] right-[8%] w-6 h-6 bg-violet-600 animate-pulse !opacity-100 z-0" style={{
      clipPath: "polygon(50% 20%, 70% 0%, 100% 30%, 80% 60%, 50% 100%, 20% 60%, 0% 30%, 30% 0%)",
      animationDelay: "3.7s"
    }}></div>
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-teal-900 font-medium mb-0 mt-28 border border-teal-900 bg-transparent">
            <Sparkles className="h-4 w-4 mr-2 text-teal-900" />
            <span className="text-teal-900">Creating magic through design & management</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="block text-teal-900">Bringing</span>
            <span className="block text-[[d0cc8e]] font-bold italic text-red-500">creative vision</span>
            <span className="block text-teal-900">to life with</span>
            <span className="block text-teal-900">precise execution</span>
          </h1>
          
          <p className="text-lg sm:text-xl max-w-md text-gray-600">Creative director and Project Manager turning imaginative ideas into extraordinary realities that captivate and inspire.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToWork} className="rounded-full px-6 group border border-teal-900 text-teal-900 bg-transparent hover:bg-teal-900 hover:text-white">
              View my work 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="relative aspect-square animate-float">
          {/* Minimal decorative elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full border border-teal-900 animate-spin-slow opacity-25"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-teal-900 animate-spin-slow opacity-25" style={{
          animationDirection: "reverse"
        }}></div>
          
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-lg aspect-square border border-gray-200">
            <img alt="Creative director at work" src="/lovable-uploads/91f10ee9-a4fc-4eb8-aba8-27e2de1afa82.png" className="w-full h-full  object-cover" />
          </div>
          
          {/* Floating elements */}
          <div style={{
          animationDelay: "1s"
        }} className="absolute -right-6 top-3/4 shadow-lg p-4 rounded-2xl border border-teal-900 animate-float z-20 bg-white/[0.69] py-[9px]">
            <div className="flex items-center gap-2">
              <Wand className="h-5 w-5 text-gray-700" />
              <span className="font-medium text-sm text-teal-900">PMI-CAPM® Certified</span>
            </div>
          </div>
          
          <div style={{
          animationDelay: "1.5s"
        }} className="absolute -left-6 top-1/4 shadow-lg py-2 px-4 rounded-full border border-teal-900 animate-float z-20 bg-white/[0.78]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-teal-900">3+</span>
              <span className="text-xs text-gray-600">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
