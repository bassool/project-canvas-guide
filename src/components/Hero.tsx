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
  return <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-50">
      {/* Small floating elements */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-20"></div>
      <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-blue-950 animate-float opacity-30" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute top-[35%] left-[20%] w-4 h-4 rounded-full bg-blue-950 animate-pulse opacity-15" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-25" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-20" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute bottom-[30%] right-[10%] w-5 h-5 rounded-full bg-blue-950 animate-float opacity-15" style={{
      animationDelay: "2.5s"
    }}></div>
      
      {/* Small rotating circles */}
      <div className="absolute top-[20%] left-[25%] w-6 h-6 rounded-full border border-blue-950 animate-spin-slow opacity-25"></div>
      <div className="absolute top-[45%] right-[20%] w-4 h-4 rounded-full border border-blue-950 animate-spin-slow opacity-20" style={{
      animationDirection: "reverse"
    }}></div>
      <div className="absolute bottom-[25%] left-[30%] w-5 h-5 rounded-full border border-blue-950 animate-spin-slow opacity-30" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute bottom-[40%] right-[35%] w-3 h-3 rounded-full border border-blue-950 animate-spin-slow opacity-25" style={{
      animationDirection: "reverse",
      animationDelay: "1.5s"
    }}></div>
      
      {/* Additional small bubbles */}
      <div className="absolute top-[50%] left-[5%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-20" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-[70%] right-[5%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-15" style={{
      animationDelay: "3.5s"
    }}></div>
      <div className="absolute top-[10%] left-[40%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-25" style={{
      animationDelay: "4s"
    }}></div>
      <div className="absolute bottom-[10%] right-[40%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-20" style={{
      animationDelay: "4.5s"
    }}></div>
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="rounded-full px-8 border border-blue-950 cursor-default bg-transparent text-base text-blue-950">
            <Sparkles className="h-4 w-4 mr-2 text-blue-950" />
            <span className="text-blue-950">Creating magic through design & management</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <span className="block text-blue-950">Bringing</span>
            <span className="block text-[d0cc8e] text-blue-400">creative vision</span>
            <span className="block text-blue-950">to life with</span>
            <span className="block text-blue-950">precise execution</span>
          </h1>
          
          <p className="text-lg sm:text-xl max-w-md text-gray-600">Creative director and Project Manager turning imaginative ideas into extraordinary realities that captivate and inspire.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={scrollToWork} className="rounded-full px-6 group bg-blue-950 text-white hover:bg-blue-900">
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
            <img alt="Creative director at work" className="w-full h-full object-cover" src="/lovable-uploads/e90bc0d9-1cc9-4930-bf89-5df3d5a340ef.jpg" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -right-6 top-3/4 bg-white shadow-lg p-4 rounded-xl border border-gray-200 animate-float z-20" style={{
          animationDelay: "1s"
        }}>
            <div className="flex items-center gap-2">
              <Wand className="h-5 w-5 text-gray-700" />
              <span className="font-medium text-sm text-blue-950">PMI-CAPM® Certified</span>
            </div>
          </div>
          
          <div className="absolute -left-6 top-1/4 bg-white shadow-lg py-2 px-4 rounded-full border border-gray-200 animate-float z-20" style={{
          animationDelay: "1.5s"
        }}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-950">3+</span>
              <span className="text-xs text-gray-600">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;