import React from "react";
import { Calendar, Briefcase, Users, Rocket, Palette, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  title: "Team Leadership",
  description: "Building and leading high-performing creative and technical teams, fostering collaboration and delivering exceptional results.",
  category: "management",
  color: "accent"
}, {
  icon: Star,
  title: "Brand Development",
  description: "Creating compelling brand stories, visual systems, and communication strategies that establish strong market presence.",
  category: "creative",
  color: "primary"
}, {
  icon: Calendar,
  title: "Production Coordination",
  description: "Seamless coordination of production processes, resources, and timelines to bring creative concepts to life efficiently.",
  category: "management",
  color: "secondary"
}, {
  icon: Rocket,
  title: "Launch Strategy",
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
  const colorClasses = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "bg-accent/10 text-accent border-accent/20"
  };
  return <Card className="overflow-hidden border-border card-hover bg-gradient-to-br from-white dark:from-card to-secondary/5">
      <div className="bg-sky-300" />
      <CardHeader className="bg-transparent">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-xl ${colorClasses[skill.color]}`}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-gray-900">{skill.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="bg-transparent">
        <CardDescription className="text-sm text-slate-900">
          {skill.description}
        </CardDescription>
      </CardContent>
    </Card>;
};
const Skills = () => {
  return <section id="skills" className="py-20 md:py-28 relative">
      {/* Decorative blobs */}
      <div className="blob-shape bg-primary/10 w-[500px] h-[500px] -right-64 top-0"></div>
      <div className="blob-shape bg-secondary/10 w-[400px] h-[400px] -left-32 bottom-0"></div>
      
      {/* Decorative pattern */}
      <div className="absolute top-20 left-10 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-accent"></div>)}
      </div>
      
      <div className="absolute bottom-20 right-10 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => <div key={i} className="w-4 h-4 rounded-full bg-primary"></div>)}
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>What I can do for you</span>
          </div>
          
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
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
        
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-white dark:bg-card/60 shadow-lg relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-accent/10 animate-pulse-custom -z-10"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-primary/10 animate-pulse-custom -z-10"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-gray-900">Need a tailored skill package?</h3>
              <p className="text-lg text-gray-900">Contact me to discuss how I can help with your specific project needs.</p>
            </div>
            <button className="px-8 py-4 bg-accent text-black font-semibold text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-accent/20 hover:shadow-xl" onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({
              behavior: "smooth"
            });
          }}>
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;