
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Project } from "./projectTypes";
import ProjectDialog from "./ProjectDialog";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("project-card group animate-fade-in card-hover border-glow flex flex-col h-full", project.featured ? "relative" : "")} style={{
      animationDelay: `${project.id * 100}ms`
    }}>
      {project.featured && <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-accent text-black font-medium rounded-full flex items-center gap-1 px-3">
            <Star className="h-3 w-3" /> Featured
          </Badge>
        </div>}
      
      <div className="relative overflow-hidden aspect-video">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      
      <div className="p-6 bg-white dark:bg-card flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 transition-colors text-slate-900">{project.title}</h3>
        <p className="mb-4 flex-grow text-slate-900">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => <Badge key={index} variant="outline" className="text-foreground bg-slate-800">{tag}</Badge>)}
        </div>
        
        <Button variant="outline" size="sm" className="mt-2 w-full rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(true)}>
          View Project Details
        </Button>

        <ProjectDialog 
          project={project} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />
      </div>
    </div>
  );
};

export default ProjectCard;
