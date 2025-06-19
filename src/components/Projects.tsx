import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket } from "lucide-react";
import { ProjectCategory, projects } from "./projects/projectTypes";
import ProjectList from "./projects/ProjectList";
const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  return <section id="work" className="relative overflow-hidden bg-slate-50">
      {/* Small floating elements */}
      <div className="absolute top-[10%] left-[8%] w-2 h-2 rounded-full bg-blue-950 animate-float opacity-20"></div>
      <div className="absolute top-[20%] right-[12%] w-3 h-3 rounded-full bg-blue-950 animate-pulse opacity-25" style={{
      animationDelay: "0.5s"
    }}></div>
      <div className="absolute top-[40%] left-[15%] w-2 h-2 rounded-full bg-blue-950 animate-float opacity-30" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute top-[60%] right-[18%] w-4 h-4 rounded-full bg-blue-950 animate-pulse opacity-15" style={{
      animationDelay: "1.5s"
    }}></div>
      <div className="absolute bottom-[15%] left-[10%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-25" style={{
      animationDelay: "2s"
    }}></div>
      <div className="absolute bottom-[25%] right-[8%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-20" style={{
      animationDelay: "2.5s"
    }}></div>
      
      {/* Small rotating circles */}
      <div className="absolute top-[15%] left-[20%] w-5 h-5 rounded-full border border-blue-950 animate-spin-slow opacity-25"></div>
      <div className="absolute top-[35%] right-[25%] w-4 h-4 rounded-full border border-blue-950 animate-spin-slow opacity-20" style={{
      animationDirection: "reverse"
    }}></div>
      <div className="absolute bottom-[20%] left-[25%] w-6 h-6 rounded-full border border-blue-950 animate-spin-slow opacity-30" style={{
      animationDelay: "1s"
    }}></div>
      <div className="absolute bottom-[40%] right-[30%] w-3 h-3 rounded-full border border-blue-950 animate-spin-slow opacity-25" style={{
      animationDirection: "reverse",
      animationDelay: "1.5s"
    }}></div>
      
      {/* Additional floating bubbles */}
      <div className="absolute top-[25%] left-[5%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-20" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-[70%] right-[5%] w-3 h-3 rounded-full bg-blue-950 animate-float opacity-15" style={{
      animationDelay: "3.5s"
    }}></div>
      <div className="absolute top-[80%] left-[35%] w-2 h-2 rounded-full bg-blue-950 animate-pulse opacity-25" style={{
      animationDelay: "4s"
    }}></div>
      
      {/* Minimal decorative elements */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 border-l border-t border-blue-950 opacity-10 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/4 w-32 h-32 border-r border-b border-blue-950 opacity-10 -z-10"></div>
      <div className="hidden md:block absolute left-1/4 bottom-0 w-16 h-16 rounded-full border border-blue-950 opacity-10 -z-10"></div>
      
      <div className="container py-20 md:py-28 bg-[#000a00]/0">
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-gray-900 font-medium mb-4 bg-[#000a0e]/0 border border-blue-950 ">
            <Rocket className="h-4 w-4 mr-2" />
            <span>Browse my portfolio</span>
          </div>
          
          <h2 className="section-title text-blue-950">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-gray-600">
            A selection of my work spanning creative direction and project management
          </p>
          
          {/* Decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dotted border-gray-200 animate-spin-slow"></div>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={value => setActiveTab(value as ProjectCategory)}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid sm:grid-cols-4 grid-cols-2 gap-1 w-full max-w-md p-1 bg-gray-100 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg text-sm">All</TabsTrigger>
              <TabsTrigger value="workExperience" className="rounded-lg text-sm whitespace-nowrap text-xs md:text-sm">Work Exp</TabsTrigger>
              <TabsTrigger value="freelance" className="rounded-lg text-sm">Freelance</TabsTrigger>
              <TabsTrigger value="personal" className="rounded-lg text-sm">Personal</TabsTrigger>
            </TabsList>
          </div>
          
          <ProjectList category="all" projects={projects} />
          <ProjectList category="workExperience" projects={projects} />
          <ProjectList category="freelance" projects={projects} />
          <ProjectList category="personal" projects={projects} />
        </Tabs>
        
        <div className="flex justify-center mt-12 bg-transparent text-blue-950">
          <Button variant="outline" size="lg" disabled className="rounded-full px-8 border border-blue-950 cursor-default bg-transparent text-base text-blue-950">
            Click each project to view
          </Button>
        </div>
      </div>
    </section>;
};
export default Projects;