
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Award, Download, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="blob-shape bg-primary/10 w-[600px] h-[600px] -top-80 right-0"></div>
      <div className="blob-shape bg-secondary/10 w-[500px] h-[500px] top-1/2 -left-64"></div>
      <div className="blob-shape bg-accent/10 w-[300px] h-[300px] -bottom-32 right-1/3"></div>
      
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-secondary/5 to-transparent -z-10"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            <span>Get to know me</span>
          </div>
          
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-primary/20"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-accent/20"></div>
            
            <div className="relative z-10 overflow-hidden rounded-2xl gradient-border shadow-xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Portrait of me working" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Floating award badge - improved contrast */}
            <div className="absolute -right-6 -bottom-6 bg-white/90 dark:bg-card/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-border animate-float z-20" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm text-foreground">Award Winner</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-foreground">
                I'm a creative director and project manager with over a decade of experience bridging the gap between innovative design and efficient execution.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                My unique perspective comes from having worked on both the creative and management sides of projects, allowing me to speak both languages fluently. I believe that the best work happens at the intersection of bold creativity and thoughtful organization.
              </p>
            </div>
            
            <div className="py-6">
              <Separator className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 h-0.5 rounded-full" />
            </div>
            
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border card-hover">
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">10+</p>
                <p className="text-foreground/80">Years Experience</p>
              </div>
              <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border card-hover">
                <p className="text-4xl font-bold bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent">75+</p>
                <p className="text-foreground/80">Projects Completed</p>
              </div>
              <div className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-border card-hover">
                <p className="text-4xl font-bold bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent">15+</p>
                <p className="text-foreground/80">Industry Awards</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="rounded-full pl-6 pr-5 py-6 gap-2 group">
                Download Resume 
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-secondary/20">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Approach</h3>
              <p className="text-foreground/80 leading-relaxed">
                I believe in starting with clear strategic objectives, developing creative concepts that truly resonate with audiences, and executing with precision and adaptability. This balanced approach ensures both creative excellence and project success.
              </p>
            </div>
            <div className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-border card-hover">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Background</h3>
              <p className="text-foreground/80 leading-relaxed">
                With a background in design and business administration, I've worked with agencies, in-house teams, and as an independent consultant across diverse industries including technology, fashion, and non-profit organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
