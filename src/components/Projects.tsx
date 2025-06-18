import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket } from "lucide-react";
import { ProjectCategory, projects } from "./projects/projectTypes";
import ProjectList from "./projects/ProjectList";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  
  return (
    <section id="work" className="relative overflow-hidden bg-white">
      {/* Subtle background shapes */}
      <div className="blob-shape w-[300px] h-[300px] top-10 -right-10 animate-pulse-custom bg-black"></div>
      <div className="blob-shape w-[500px] h-[500px] -bottom-40 -left-32 animate-pulse-custom bg-black"></div>
      <div className="blob-shape w-[200px] h-[200px] top-1/2 right-[20%] animate-pulse-custom bg-black"></div>
      
      {/* Minimal decorative elements */}
      <div className="hidden md:block absolute left-0 top-1/4 w-32 h-32 border-l border-t border-gray-200 -z-10"></div>
      <div className="hidden md:block absolute right-0 bottom-1/4 w-32 h-32 border-r border-b border-gray-200 -z-10"></div>
      <div className="hidden md:block absolute left-1/4 bottom-0 w-16 h-16 rounded-full border border-gray-200 -z-10"></div>
      
      <div className="container py-20 md:py-28">
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white font-medium mb-4">
            <Rocket className="h-4 w-4 mr-2" />
            <span>Browse my portfolio</span>
          </div>
          
          <h2 className="section-title text-black">Featured Projects</h2>
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
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" disabled className="rounded-full px-8 border border-gray-300 cursor-default bg-transparent text-gray-500 text-base">
            Click each project to view
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
