
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="section-title">About Me</h2>
            
            <p className="text-lg">
              I'm a creative director and project manager with over a decade of experience bridging the gap between innovative design and efficient execution.
            </p>
            
            <p className="text-muted-foreground">
              My unique perspective comes from having worked on both the creative and management sides of projects, allowing me to speak both languages fluently. I believe that the best work happens at the intersection of bold creativity and thoughtful organization.
            </p>
            
            <div className="py-4">
              <Separator />
            </div>
            
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">75+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground">Industry Awards</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg">Download Resume</Button>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute -bottom-4 -right-4 w-3/4 aspect-square bg-accent/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-2/3 aspect-square bg-primary/10 rounded-full -z-10" />
            
            <div className="relative z-10 overflow-hidden rounded-lg border border-border shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Portrait of me working" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in starting with clear strategic objectives, developing creative concepts that truly resonate with audiences, and executing with precision and adaptability. This balanced approach ensures both creative excellence and project success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground">
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
