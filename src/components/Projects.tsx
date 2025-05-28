import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket } from "lucide-react";
import { ProjectCategory, projects } from "./projects/projectTypes";
import ProjectList from "./projects/ProjectList";
const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  return <section id="work" className="py-20 md:py-28 relative overflow-hidden mt-12">
      {/* Floating blob shapes */}
      <div className="blob-shape w-[300px] h-[300px] -top-20 -right-10 animate-pulse-custom bg-[#87ddf0]"></div>
      <div className="blob-shape w-[500px] h-[500px] -bottom-40 -left-32 animate-pulse-custom bg-[#81bfdf]"></div>
      <div className="blob-shape w-[200px] h-[200px] top-1/2 right-[20%] animate-pulse-custom bg-[#b4def5]"></div>
      
      {/* Background decorations */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 border-l-4 border-t-4 border-primary/20 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/4 w-32 h-32 border-r-4 border-b-4 border-accent/20 -z-10"></div>
      <div className="hidden md:block absolute left-1/4 bottom-0 w-16 h-16 rounded-full border-2 border-secondary/30 -z-10"></div>
      
      <div className="container">
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
            <Rocket className="h-4 w-4 mr-2" />
            <span>Browse my portfolio</span>
          </div>
          
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of my work spanning creative direction and project management
          </p>
          
          {/* Decorative element - updated to lighter slate color */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-dotted border-slate-300 animate-spin-slow"></div>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={value => setActiveTab(value as ProjectCategory)}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid sm:grid-cols-4 grid-cols-2 gap-1 w-full max-w-md p-1 bg-secondary/10 rounded-xl">
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
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 hover:bg-secondary/10">Click each project to view</Button>
        </div>
      </div>
    </section>;
};
export default Projects;