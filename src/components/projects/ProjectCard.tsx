
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project, projects } from "./projectTypes";
import ProjectDialog from "./ProjectDialog";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(project);
  
  // Listen for navigation events to update the current project
  React.useEffect(() => {
    const handleProjectChange = (e: CustomEvent) => {
      const newProject = e.detail.project;
      if (newProject && isOpen) {
        setCurrentProject(newProject);
      }
    };
    
    window.addEventListener('project-change' as any, handleProjectChange as any);
    return () => {
      window.removeEventListener('project-change' as any, handleProjectChange as any);
    };
  }, [isOpen]);
  
  return (
    <>
      <Card 
        onClick={() => {
          setCurrentProject(project);
          setIsOpen(true);
        }}
        className="group overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer h-full"
      >
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          {project.featured && (
            <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        <CardContent className="p-5">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-secondary/10">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="bg-secondary/5">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
      
      <ProjectDialog project={currentProject} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ProjectCard;
