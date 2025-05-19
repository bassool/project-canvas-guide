
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { ProjectCategory, Project } from "./projectTypes";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  category: ProjectCategory;
  projects: Project[];
}

const ProjectList = ({ category, projects }: ProjectListProps) => {
  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => project.category === category);
    
  return (
    <TabsContent value={category} className="mt-0">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </TabsContent>
  );
};

export default ProjectList;
