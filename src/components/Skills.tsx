import React from "react";
import { Film, Briefcase, Users, Rocket, Palette, Star, Sparkles, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Skill {
  icon: React.ElementType;
  title: string;
  description: string;
  category: "creative" | "management";
  color: "primary" | "secondary" | "accent";
}

const skills: Skill[] = [
  {
    icon: Palette,
    title: "Creative Direction",
    description: "Developing comprehensive creative strategies and visual identities that align with brand objectives and resonate with target audiences.",
    category: "creative",
    color: "primary"
  }, {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project oversight ensuring on-time, on-budget delivery while maintaining quality standards and stakeholder satisfaction.",
    category: "management",
    color: "secondary"
  }, {
    icon: Users,
    title: "Cross Functional Coordination",
    description: "Building and leading high-performing creative and technical teams, fostering collaboration and delivering exceptional results.",
    category: "management",
    color: "accent"
  }, {
    icon: Star,
    title: "Visual Design and Branding",
    description: "Creating compelling brand stories, visual systems, and communication strategies that establish strong market presence.",
    category: "creative",
    color: "primary"
  }, {
    icon: Film,
    title: "Multimedia Production",
    description: "Creating engaging multimedia content including video, audio, and interactive experiences that captivate audiences and tell compelling stories.",
    category: "creative",
    color: "secondary"
  }, {
    icon: Rocket,
    title: "KPI & Performance Analysis",
    description: "Comprehensive planning for product, campaign, and brand launches to maximize impact and achieve business objectives.",
    category: "creative",
    color: "accent"
  }
];

const SkillCard = ({
  skill
}: {
  skill: Skill;
}) => {
  const Icon = skill.icon;
  return <Card className="overflow-hidden border border-gray-200 card-hover bg-white hover:shadow-lg">
      <CardHeader className="bg-white">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-950 text-white">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-blue-950">{skill.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="bg-white">
        <CardDescription className="text-sm text-gray-600">
          {skill.description}
        </CardDescription>
      </CardContent>
    </Card>;
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-amber-50">
      {/* Small floating elements - increased opacity */}
      <div className="absolute top-[12%] left-[6%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-40"></div>
      <div className="absolute top-[18%] right-[10%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-45" style={{
        animationDelay: "0.5s"
      }}></div>
      <div className="absolute top-[35%] left-[12%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-35" style={{
        animationDelay: "1s"
      }}></div>
      <div className="absolute top-[55%] right-[15%] w-3 h-3 rounded-full bg-blue-950 animate-pulse opacity-50" style={{
        animationDelay: "1.5s"
      }}></div>
      <div className="absolute bottom-[20%] left-[8%] w-2 h-2 rounded-full bg-blue-950 animate-float opacity-45" style={{
        animationDelay: "2s"
      }}></div>
      <div className="absolute bottom-[30%] right-[12%] w-5 h-5 rounded-full bg-blue-950 animate-pulse opacity-40" style={{
        animationDelay: "2.5s"
      }}></div>
      
      {/* Small rotating circles - increased opacity */}
      <div className="absolute top-[22%] left-[18%] w-6 h-6 rounded-full border border-blue-950 animate-spin-slow opacity-45"></div>
      <div className="absolute top-[42%] right-[22%] w-4 h-4 rounded-full border border-blue-950 animate-spin-slow opacity-40" style={{
        animationDirection: "reverse"
      }}></div>
      <div className="absolute bottom-[25%] left-[22%] w-5 h-5 rounded-full border border-blue-950 animate-spin-slow opacity-50" style={{
        animationDelay: "1s"
      }}></div>
      <div className="absolute bottom-[45%] right-[28%] w-3 h-3 rounded-full border border-blue-950 animate-spin-slow opacity-45" style={{
        animationDirection: "reverse",
        animationDelay: "1.5s"
      }}></div>
      
      {/* Additional floating bubbles - increased opacity */}
      <div className="absolute top-[65%] left-[4%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-40" style={{
        animationDelay: "3s"
      }}></div>
      <div className="absolute top-[75%] right-[6%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-35" style={{
        animationDelay: "3.5s"
      }}></div>
      <div className="absolute top-[8%] left-[35%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-45" style={{
        animationDelay: "4s"
      }}></div>
      <div className="absolute bottom-[10%] right-[35%] w-4 h-4 rounded-full bg-blue-950 animate-float opacity-40" style={{
        animationDelay: "4.5s"
      }}></div>
      
      {/* New violet-600 animated elements - reduced opacity and proper z-index */}
      {/* Floating lightning bolt near title */}
      <div className="absolute top-[28%] right-[5%] w-5 h-8 bg-violet-600 animate-pulse opacity-25 z-0"
           style={{
             clipPath: "polygon(20% 0%, 80% 0%, 60% 40%, 100% 40%, 40% 100%, 0% 60%, 40% 60%)",
             animationDelay: "2.3s"
           }}></div>
      
      {/* Spinning gear */}
      <div className="absolute bottom-[55%] left-[2%] w-6 h-6 bg-violet-600 animate-spin-slow opacity-20 z-0"
           style={{
             clipPath: "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
             animationDelay: "1.9s"
           }}></div>
      
      {/* Floating triangle */}
      <div className="absolute top-[5%] right-[30%] w-0 h-0 animate-float opacity-25 z-0"
           style={{
             borderLeft: "8px solid transparent",
             borderRight: "8px solid transparent", 
             borderBottom: "12px solid rgb(124 58 237)",
             animationDelay: "3.7s"
           }}></div>
      
      {/* Pulsing plus sign */}
      <div className="absolute bottom-[70%] left-[35%] animate-pulse opacity-20 z-0"
           style={{
             animationDelay: "4.1s"
           }}>
        <div className="w-1.5 h-6 bg-violet-600 absolute"></div>
        <div className="w-6 h-1.5 bg-violet-600 absolute top-2.5 -left-2.5"></div>
      </div>
      
      {/* Floating star near button */}
      <div className="absolute bottom-[15%] right-[20%] w-6 h-6 bg-violet-600 animate-float opacity-30 z-0" 
           style={{
             clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
             animationDelay: "2.9s"
           }}></div>
           
      {/* Additional elements around skills grid */}
      {/* Hexagon near skills cards */}
      <div className="absolute top-[60%] right-[40%] w-7 h-7 bg-violet-600 animate-spin-slow opacity-25 z-0"
           style={{
             clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
             animationDelay: "1.4s"
           }}></div>
      
      {/* Diamond near skills title */}
      <div className="absolute top-[25%] left-[40%] w-6 h-6 bg-violet-600 animate-pulse opacity-20 transform rotate-45 z-0" 
           style={{
             animationDelay: "3.3s"
           }}></div>
      
      {/* Heart shape */}
      <div className="absolute bottom-[35%] right-[8%] w-6 h-6 bg-violet-600 animate-pulse opacity-20 z-0"
           style={{
             clipPath: "polygon(50% 20%, 70% 0%, 100% 30%, 80% 60%, 50% 100%, 20% 60%, 0% 30%, 30% 0%)",
             animationDelay: "0.9s"
           }}></div>
      
      {/* Decorative pattern - increased opacity */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-40 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-blue-950"></div>
        ))}
      </div>
      
      <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-2 opacity-40 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-blue-950"></div>
        ))}
      </div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 font-medium mb-4 rounded-full border border-blue-950 bg-transparent">
            <Sparkles className="h-4 w-4 mr-2 text-blue-950" />
            <span className="text-blue-950">What I can do for you</span>
          </div>
          
          <h2 className="section-title text-blue-950 text-5xl">Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-gray-600">
            Balancing creative excellence with strategic execution
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div key={index} style={{
              animationDelay: `${index * 100}ms`
            }}className="animate-fade-in">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.linkedin.com/in/basselatout" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 py-3 border border-blue-950 bg-transparent text-blue-950 hover:bg-blue-950 hover:text-white">
              <Linkedin className="h-4 w-4 mr-2" />
              Connect on LinkedIn
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
