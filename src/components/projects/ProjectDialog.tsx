
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "./projectTypes";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ProjectDialog = ({ project, isOpen, setIsOpen }: ProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl w-[90vw] p-0 border border-primary/20 rounded-lg overflow-hidden">
        <DialogHeader className="p-6 border-b">
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        </DialogHeader>
        
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="p-4">
            <Carousel className="w-full">
              <CarouselContent>
                {project.galleryImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="aspect-video overflow-hidden rounded-md">
                        <img 
                          src={img} 
                          alt={`${project.title} gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        )}
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">{tool}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">Impact</h4>
              <p className="text-foreground/90 text-base">{project.impact}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">Challenge</h4>
              <p className="text-foreground/90 text-base">{project.challenge}</p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-primary mb-2">Solution</h4>
              <p className="text-foreground/90 text-base">{project.solution}</p>
            </div>
          </div>
        </div>
        
        <div className="p-5 pt-0 flex justify-end">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full" 
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
