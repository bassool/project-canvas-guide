import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Award, Download, Trophy, Laptop } from "lucide-react";
const About = () => {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/lovable-uploads/Bassel_Atout_Resume_2025.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Bassel_Atout_Resume_2025.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  return <section id="about" className="relative overflow-hidden bg-zinc-100">
      {/* Small floating elements - increased opacity */}
      <div className="absolute top-[8%] left-[5%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-40"></div>
      <div className="absolute top-[15%] right-[8%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-45" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute top-[30%] left-[10%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-35" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-[50%] right-[12%] w-3 h-3 rounded-full bg-blue-950 animate-pulse opacity-50" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute bottom-[18%] left-[7%] w-2 h-2 rounded-full bg-blue-950 animate-float opacity-45" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute bottom-[28%] right-[10%] w-5 h-5 rounded-full bg-blue-950 animate-pulse opacity-40" style={{
      animationDelay: "2.5s"
    }}></div>
      
      {/* Small rotating circles - increased opacity */}
      <div className="absolute top-[20%] left-[15%] w-6 h-6 rounded-full border border-blue-950 animate-spin-slow opacity-45"></div>
      <div className="absolute top-[40%] right-[20%] w-4 h-4 rounded-full border border-blue-950 animate-spin-slow opacity-40" style={{
      animationDirection: "reverse"
    }}></div>
      <div className="absolute bottom-[22%] left-[20%] w-5 h-5 rounded-full border border-blue-950 animate-spin-slow opacity-50" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute bottom-[42%] right-[25%] w-3 h-3 rounded-full border border-blue-950 animate-spin-slow opacity-45" style={{
      animationDirection: "reverse",
      animationDelay: "1.5s"
    }}></div>
      
      {/* Additional floating bubbles - increased opacity */}
      <div className="absolute top-[60%] left-[3%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-40" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-[70%] right-[4%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-35" style={{
      animationDelay: "3.5s"
    }}></div>
      <div className="absolute top-[5%] left-[30%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-45" style={{
      animationDelay: "4s"
    }}></div>
      <div className="absolute bottom-[8%] right-[30%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-40" style={{
      animationDelay: "4.5s"
    }}></div>
      
      {/* New violet-600 animated elements - FORCED FULL OPACITY */}
      {/* Floating hexagon near title */}
      <div className="absolute top-[25%] left-[35%] w-4 h-4 bg-violet-600 animate-spin-slow !opacity-100 z-0" style={{
      clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
      animationDelay: "1.2s"
    }}></div>
      
      {/* Pulsing plus sign near text - FORCED FULL OPACITY */}
      <div className="absolute bottom-[50%] right-[35%] animate-pulse !opacity-100 z-0" style={{
      animationDelay: "2.8s"
    }}>
        <div className="w-1 h-4 bg-violet-600 absolute"></div>
        <div className="w-4 h-1 bg-violet-600 absolute top-1.5 -left-1.5"></div>
      </div>
      
      {/* Small floating square */}
      <div className="absolute top-[65%] left-[25%] w-3 h-3 bg-violet-600 animate-float !opacity-100 transform rotate-12 z-0" style={{
      animationDelay: "4.2s"
    }}></div>
           
      {/* Additional elements around about content */}
      {/* Star near image */}
      <div className="absolute top-[35%] right-[5%] w-7 h-7 bg-violet-600 animate-float !opacity-100 z-0" style={{
      clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      animationDelay: "1.8s"
    }}></div>
      
      {/* Triangle near stats */}
      <div className="absolute bottom-[35%] left-[40%] w-0 h-0 animate-float !opacity-100 z-0" style={{
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      borderBottom: "12px solid rgb(124 58 237)",
      animationDelay: "3.4s"
    }}></div>
      
      {/* Lightning bolt */}
      <div className="absolute top-[45%] left-[5%] w-5 h-8 bg-violet-600 animate-pulse !opacity-100 z-0" style={{
      clipPath: "polygon(20% 0%, 80% 0%, 60% 40%, 100% 40%, 40% 100%, 0% 60%, 40% 60%)",
      animationDelay: "0.6s"
    }}></div>
      
      {/* Diamond near button */}
      <div className="absolute bottom-[25%] right-[45%] w-6 h-6 bg-violet-600 animate-pulse !opacity-100 transform rotate-45 z-0" style={{
      animationDelay: "2.1s"
    }}></div>
      
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-secondary/5 to-transparent -z-10"></div>
      
      <div className="container relative z-10 py-16 md:py-24 bg-[#000a00]/0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-blue-950 font-medium mb-8 border border-blue-950 bg-transparent">
            <Award className="h-4 w-4 mr-2 text-blue-950" />
            <span className="text-blue-950">Get to know me</span>
          </div>
          
          <h2 className="section-title text-teal-900">About Me</h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-blue-950/20"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-blue-950/20"></div>
            
            <div className="relative z-10 overflow-hidden rounded-2xl gradient-border shadow-xl animate-float">
              <img alt="Portrait of me working" className="w-full aspect-[4/3] object-cover" src="/lovable-uploads/89041878-9665-475a-b4fa-f356edc9bb14.jpg" />
            </div>
            
            {/* New floating certification badge - above the photo */}
            <div style={{
            animationDelay: "1.5s"
          }} className="absolute -left-6 -top-6 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-blue-950 animate-float z-20 bg-white/[0.78]">
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-blue-950" />
                <span className="font-medium text-sm text-blue-950">Certified Associate in Project Management</span>
              </div>
            </div>
            
            {/* Floating award badge - improved contrast */}
            <div style={{
            animationDelay: "1s"
          }} className="absolute -right-6 -bottom-6 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-blue-950 animate-float z-20 bg-white/[0.64]">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-950" />
                <span className="font-medium text-sm text-blue-950">Loyola Marymount Fred Kiesner Entrepreneurial Star Award Winner</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-teal-900">Hey! I'm Bassel Atout, an aspiring Creative Project Manager out of Los Angeles, CA. I love rock climbing, playing my various instruments, and diving into tons of other esoteric hobbies that help bolster my business background and make me a more well rounded individual. These various aspects of myself are ones I cannot wait to showcase, as I know I will be an important asset to any profesisonal envinronment I enter!</p>
              
              <p className="text-foreground/80 leading-relaxed mt-6">
                My unique perspective comes from having worked on both the creative and management sides of projects, allowing me to speak both languages fluently. I believe that the best work happens at the intersection of bold creativity and thoughtful organization.
              </p>
            </div>
            
            <div className="py-[20px]">
              <Separator className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 h-0.5 rounded-full" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-white">
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-teal-900">8+</p>
                <p className="text-teal-900">Years Creative Experience</p>
              </div>
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-white">
                <p className="text-4xl font-bold bg-gradient-to-br from-secondary to-accent bg-clip-text text-teal-900">5+</p>
                <p className="text-emerald-900">Years in project based work</p>
              </div>
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-white">
                <p className="text-4xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-teal-900">6+</p>
                <p className="text-teal-900">Creative and Managerial Tools Mastered</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button onClick={handleResumeDownload} size="lg" className="rounded-full pl-6 pr-5 py-6 gap-2 group border border-blue-950 text-blue-950 bg-transparent hover:bg-blue-950 hover:text-white">
                Download Resume 
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-secondary/20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-teal-900">My Approach</h3>
              <p className="leading-relaxed text-gray-600">I believe in starting with clear strategic objectives, developing creative concepts that truly resonate with audiences, and executing with precision and adaptability. This balanced approach ensures both creative ingenuity and measurable project success.</p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-teal-900">Background</h3>
              <p className="leading-relaxed text-gray-600">With a dynamic and creative background also based in business administration, I've worked at StartUps and as an independent freelancer across diverse industries including gaming, fashion, and software development.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;