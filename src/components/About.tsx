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
  return <section id="about" className="relative overflow-hidden">
      {/* Small floating elements */}
      <div className="absolute top-[8%] left-[5%] w-3 h-3 rounded-full bg-black animate-float opacity-20"></div>
      <div className="absolute top-[15%] right-[8%] w-2 h-2 rounded-full bg-black animate-pulse opacity-25" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute top-[30%] left-[10%] w-4 h-4 rounded-full bg-black animate-float opacity-15" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-[50%] right-[12%] w-3 h-3 rounded-full bg-black animate-pulse opacity-30" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute bottom-[18%] left-[7%] w-2 h-2 rounded-full bg-black animate-float opacity-25" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute bottom-[28%] right-[10%] w-5 h-5 rounded-full bg-black animate-pulse opacity-20" style={{
      animationDelay: "2.5s"
    }}></div>
      
      {/* Small rotating circles */}
      <div className="absolute top-[20%] left-[15%] w-6 h-6 rounded-full border border-black animate-spin-slow opacity-25"></div>
      <div className="absolute top-[40%] right-[20%] w-4 h-4 rounded-full border border-black animate-spin-slow opacity-20" style={{
      animationDirection: "reverse"
    }}></div>
      <div className="absolute bottom-[22%] left-[20%] w-5 h-5 rounded-full border border-black animate-spin-slow opacity-30" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute bottom-[42%] right-[25%] w-3 h-3 rounded-full border border-black animate-spin-slow opacity-25" style={{
      animationDirection: "reverse",
      animationDelay: "1.5s"
    }}></div>
      
      {/* Additional floating bubbles */}
      <div className="absolute top-[60%] left-[3%] w-2 h-2 rounded-full bg-black animate-pulse opacity-20" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-[70%] right-[4%] w-3 h-3 rounded-full bg-black animate-float opacity-15" style={{
      animationDelay: "3.5s"
    }}></div>
      <div className="absolute top-[5%] left-[30%] w-2 h-2 rounded-full bg-black animate-pulse opacity-25" style={{
      animationDelay: "4s"
    }}></div>
      <div className="absolute bottom-[8%] right-[30%] w-4 h-4 rounded-full bg-black animate-float opacity-20" style={{
      animationDelay: "4.5s"
    }}></div>
      
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-secondary/5 to-transparent -z-10"></div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-primary font-medium mb-8 bg-black">
            <Award className="h-4 w-4 mr-2 text-white" />
            <span className="text-white">Get to know me</span>
          </div>
          
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-primary/20"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-accent/20"></div>
            
            <div className="relative z-10 overflow-hidden rounded-2xl gradient-border shadow-xl animate-float">
              <img alt="Portrait of me working" className="w-full aspect-[4/3] object-cover" src="/lovable-uploads/2c201e9b-e70f-46af-b0b6-ee5116534a9b.png" />
            </div>
            
            {/* New floating certification badge - above the photo */}
            <div className="absolute -left-6 -top-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border animate-float z-20" style={{
            animationDelay: "1.5s"
          }}>
              <div className="flex items-center gap-2">
                <Laptop className="h-5 w-5 text-black" />
                <span className="font-medium text-sm text-black">Certified Associate in Project Management</span>
              </div>
            </div>
            
            {/* Floating award badge - improved contrast */}
            <div className="absolute -right-6 -bottom-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border animate-float z-20" style={{
            animationDelay: "1s"
          }}>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-black" />
                <span className="font-medium text-sm text-black">Loyola Marymount Fred Kiesner Entrepreneurial Star Award Winner</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-foreground">Hey! I'm Bassel Atout, an aspiring Creative Project Manager out of Los Angeles, CA. I love rock climbing, playing my various instruments, and diving into tons of other esoteric hobbies that help bolster my business background and make me a more well rounded individual. These various aspects of myself are ones I cannot wait to showcase, as I know I will be an important asset to any profesisonal envinronment I enter!</p>
              
              <p className="text-foreground/80 leading-relaxed">
                My unique perspective comes from having worked on both the creative and management sides of projects, allowing me to speak both languages fluently. I believe that the best work happens at the intersection of bold creativity and thoughtful organization.
              </p>
            </div>
            
            <div className="py-6">
              <Separator className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 h-0.5 rounded-full" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-white">
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-black">8+</p>
                <p className="text-black">Years Creative Experience</p>
              </div>
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-white">
                <p className="text-4xl font-bold bg-gradient-to-br from-secondary to-accent bg-clip-text text-black">5+</p>
                <p className="text-black">Years in project based work</p>
              </div>
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-white">
                <p className="text-4xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-black">6+</p>
                <p className="text-black">Creative and Managerial Tools Mastered</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button onClick={handleResumeDownload} size="lg" className="rounded-full pl-6 pr-5 py-6 gap-2 group text-white bg-black hover:bg-gray-800">
                Download Resume 
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-secondary/20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-black">My Approach</h3>
              <p className="leading-relaxed text-gray-600">I believe in starting with clear strategic objectives, developing creative concepts that truly resonate with audiences, and executing with precision and adaptability. This balanced approach ensures both creative ingenuity and measurable project success.
            </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-black">Background</h3>
              <p className="leading-relaxed text-gray-600">With a dynamic and creative background also based in business administration, I've worked at StartUps and as an independent freelancer across diverse industries including gaming, fashion, and software development.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;