
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define project types
type ProjectCategory = "all" | "creative" | "management" | "strategy";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  tags: string[];
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Brand Identity Redesign",
    description: "Complete visual overhaul for tech startup focusing on modern, minimal aesthetics.",
    category: "creative",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Branding", "Design Direction", "Creative Strategy"]
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    description: "End-to-end project management for successful market entry of innovative SaaS product.",
    category: "management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Project Management", "Timeline Planning", "Resource Allocation"]
  },
  {
    id: 3,
    title: "Marketing Strategy Development",
    description: "Comprehensive marketing strategy with focus on digital channels and measurable KPIs.",
    category: "strategy",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Strategy", "Analytics", "Market Research"]
  },
  {
    id: 4,
    title: "Design System Creation",
    description: "Unified design language to ensure consistency across all digital and print touchpoints.",
    category: "creative",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Design Systems", "UI/UX", "Documentation"]
  },
  {
    id: 5,
    title: "Team Leadership & Workflow Optimization",
    description: "Restructured creative team processes to increase productivity by 40%.",
    category: "management",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    tags: ["Team Leadership", "Process Optimization", "Agile"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card group animate-fade-in" style={{ animationDelay: `${project.id * 100}ms` }}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <Button variant="outline" size="sm" className="mt-2 w-full">
          View Project Details
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="work" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of my work spanning creative direction and project management
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setActiveTab(value as ProjectCategory)}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="creative">Creative</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="creative" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="management" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="strategy" className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
