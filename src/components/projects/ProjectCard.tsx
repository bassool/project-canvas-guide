import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project, projects } from "./projectTypes";
import ProjectDialog from "./ProjectDialog";
interface ProjectCardProps {
  project: Project;
}
const ProjectCard = ({
  project
}: ProjectCardProps) => {
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
  return <>
      <div className="group relative">
        {/* Backlit blur effect container that appears on hover */}
        <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-300 rounded-xl -z-10"></div>
        
        <Card onClick={() => {
        setCurrentProject(project);
        setIsOpen(true);
      }} className="group overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer h-full bg-slate-100">
          <div className="aspect-video overflow-hidden relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            {project.featured && <span className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                Featured
              </span>}
          </div>
          <CardContent className="p-5 bg-slate-100 rounded-b-xl">
            <h3 className="text-xl font-bold mb-2 transition-colors text-slate-700">
              {project.title}
            </h3>
            <p className="text-sm mb-4 text-slate-700">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => <Badge key={index} variant="outline" className="bg-slate-700">
                  {tag}
                </Badge>)}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <ProjectDialog project={currentProject} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>;
};
export default ProjectCard;