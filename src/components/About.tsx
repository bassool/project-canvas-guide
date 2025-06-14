
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

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="blob-shape bg-primary/10 w-[600px] h-[600px] -top-80 right-0"></div>
      <div className="blob-shape bg-secondary/10 w-[500px] h-[500px] top-1/2 -left-64"></div>
      <div className="blob-shape bg-accent/10 w-[300px] h-[300px] -bottom-32 right-1/3"></div>
      
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-secondary/5 to-transparent -z-10"></div>
      
      <div className="container relative z-10 py-20 md:py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-8">
            <Award className="h-4 w-4 mr-2 text-slate-100" />
            <span className="text-slate-100">Get to know me</span>
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
                <Laptop className="h-5 w-5 text-slate-700" />
                <span className="font-medium text-sm text-slate-900">Certified Associate in Project Management</span>
              </div>
            </div>
            
            {/* Floating award badge - improved contrast */}
            <div className="absolute -right-6 -bottom-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border animate-float z-20" style={{
            animationDelay: "1s"
          }}>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-slate-700" />
                <span className="font-medium text-sm text-slate-900">Loyola Marymount Fred Kiesner Entrepreneurial Star Award Winner</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-foreground">I'm a creative director and project manager with over 5 years of experience bridging the gap between innovative design and efficient execution.</p>
              
              <p className="text-foreground/80 leading-relaxed">
                My unique perspective comes from having worked on both the creative and management sides of projects, allowing me to speak both languages fluently. I believe that the best work happens at the intersection of bold creativity and thoughtful organization.
              </p>
            </div>
            
            <div className="py-6">
              <Separator className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 h-0.5 rounded-full" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-slate-100">
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-slate-800">8+</p>
                <p className="text-slate-800">Years Creative Experience</p>
              </div>
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-slate-100">
                <p className="text-4xl font-bold bg-gradient-to-br from-secondary to-accent bg-clip-text text-slate-900">5+</p>
                <p className="text-slate-800">Years in project based work</p>
              </div>
              <div className="p-6 rounded-2xl shadow-sm border border-border card-hover bg-slate-100">
                <p className="text-4xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-slate-900">6+</p>
                <p className="text-slate-800">Creative and Managerial Tools Mastered</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button onClick={handleResumeDownload} size="lg" className="rounded-full pl-6 pr-5 py-6 gap-2 group text-slate-50 bg-transparent">
                Download Resume 
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-secondary/20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-slate-700">My Approach</h3>
              <p className="leading-relaxed text-slate-600">I believe in starting with clear strategic objectives, developing creative concepts that truly resonate with audiences, and executing with precision and adaptability. This balanced approach ensures both creative ingenuity and measurable project success.
            </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-slate-700">Background</h3>
              <p className="leading-relaxed text-slate-600">With a dynamic and creative background also based in business administration, I've worked at StartUps and as an independent freelancer across diverse industries including gaming, fashion, and software development.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
