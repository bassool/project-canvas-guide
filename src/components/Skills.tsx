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
  
  return (
    <Card className="overflow-hidden border border-gray-200 card-hover bg-white hover:shadow-lg">
      <CardHeader className="bg-white">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-black text-white">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-black">{skill.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="bg-white">
        <CardDescription className="text-sm text-gray-600">
          {skill.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-white">
      {/* Small floating elements */}
      <div className="absolute top-[12%] left-[6%] w-3 h-3 rounded-full bg-black animate-float opacity-20"></div>
      <div className="absolute top-[18%] right-[10%] w-2 h-2 rounded-full bg-black animate-pulse opacity-25" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-[35%] left-[12%] w-4 h-4 rounded-full bg-black animate-float opacity-15" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-[55%] right-[15%] w-3 h-3 rounded-full bg-black animate-pulse opacity-30" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute bottom-[20%] left-[8%] w-2 h-2 rounded-full bg-black animate-float opacity-25" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-[30%] right-[12%] w-5 h-5 rounded-full bg-black animate-pulse opacity-20" style={{ animationDelay: "2.5s" }}></div>
      
      {/* Small rotating circles */}
      <div className="absolute top-[22%] left-[18%] w-6 h-6 rounded-full border border-black animate-spin-slow opacity-25"></div>
      <div className="absolute top-[42%] right-[22%] w-4 h-4 rounded-full border border-black animate-spin-slow opacity-20" style={{ animationDirection: "reverse" }}></div>
      <div className="absolute bottom-[25%] left-[22%] w-5 h-5 rounded-full border border-black animate-spin-slow opacity-30" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-[45%] right-[28%] w-3 h-3 rounded-full border border-black animate-spin-slow opacity-25" style={{ animationDirection: "reverse", animationDelay: "1.5s" }}></div>
      
      {/* Additional floating bubbles */}
      <div className="absolute top-[65%] left-[4%] w-2 h-2 rounded-full bg-black animate-pulse opacity-20" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-[75%] right-[6%] w-3 h-3 rounded-full bg-black animate-float opacity-15" style={{ animationDelay: "3.5s" }}></div>
      <div className="absolute top-[8%] left-[35%] w-2 h-2 rounded-full bg-black animate-pulse opacity-25" style={{ animationDelay: "4s" }}></div>
      <div className="absolute bottom-[10%] right-[35%] w-4 h-4 rounded-full bg-black animate-float opacity-20" style={{ animationDelay: "4.5s" }}></div>
      
      {/* Decorative pattern */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-20 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-gray-300"></div>
        ))}
      </div>
      
      <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-2 opacity-20 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-gray-300"></div>
        ))}
      </div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>What I can do for you</span>
          </div>
          
          <h2 className="section-title text-black text-5xl">Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-gray-600">
            Balancing creative excellence with strategic execution
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in"
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.linkedin.com/in/basselatout" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 py-3 bg-black text-white hover:bg-gray-800">
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
