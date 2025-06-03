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

const skills: Skill[] = [{
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
}];

const SkillCard = ({
  skill
}: {
  skill: Skill;
}) => {
  const Icon = skill.icon;
  return (
    <Card className="overflow-hidden border-border card-hover bg-gradient-to-br from-white dark:from-card to-secondary/5 hover:to-slate-900/80">
      <div className="bg-sky-300" />
      <CardHeader className="bg-slate-100">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-transparent text-slate-700 border-slate-700/20">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-gray-900">{skill.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="bg-slate-100">
        <CardDescription className="text-sm text-slate-900">
          {skill.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative bg-slate-50">
      {/* Floating blob shapes */}
      <div className="blob-shape w-[400px] h-[400px] -top-32 -left-20 animate-pulse-custom bg-[#59b8e9]"></div>
      <div className="blob-shape w-[350px] h-[350px] -bottom-20 -right-24 animate-pulse-custom bg-[#87ddf0]"></div>
      <div className="blob-shape w-[250px] h-[250px] top-1/3 right-[15%] animate-pulse-custom bg-[#b4def5]"></div>
      
      {/* Decorative blobs */}
      <div className="blob-shape bg-primary/10 w-[500px] h-[500px] -right-64 top-0"></div>
      <div className="blob-shape bg-secondary/10 w-[400px] h-[400px] -left-32 bottom-0"></div>
      
      {/* Decorative pattern */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-accent"></div>
        ))}
      </div>
      
      <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-primary"></div>
        ))}
      </div>
      
      <div className="container relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-accent font-medium mb-4 bg-slate-700">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-slate-100">What I can do for you</span>
          </div>
          
          <h2 className="section-title text-slate-700 text-5xl">Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-slate-700">
            Balancing creative excellence with strategic execution
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => <div key={index} style={{
          animationDelay: `${index * 100}ms`
        }} className="animate-fade-in bg-transparent">
              <SkillCard skill={skill} />
            </div>)}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://www.linkedin.com/in/basselatout" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6 py-3 bg-slate-700 text-white hover:bg-slate-800 transition-colors">
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
