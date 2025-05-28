import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Music, Youtube, X } from "lucide-react";
import { Project, projects } from "./projectTypes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import AudioPlayer from "./AudioPlayer";
import SpotifyEmbed from "./SpotifyEmbed";
import YouTubeEmbed from "./YouTubeEmbed";
import MediaItem from "./MediaItem";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ProjectDialog = ({
  project,
  isOpen,
  setIsOpen
}: ProjectDialogProps) => {
  // Find the current project's index in the projects array
  const currentIndex = projects.findIndex(p => p.id === project.id);

  // Function to navigate to the next or previous project
  const navigateProject = (direction: 'next' | 'prev') => {
    // Calculate new index with wraparound
    let newIndex = direction === 'next' ? (currentIndex + 1) % projects.length : (currentIndex - 1 + projects.length) % projects.length;

    // Get the next project
    const nextProject = projects[newIndex];

    // Dispatch a custom event to notify the ProjectCard to update its currentProject
    const event = new CustomEvent('project-change', {
      detail: {
        project: nextProject
      }
    });
    window.dispatchEvent(event);

    // Show a toast notification to indicate navigation
    toast({
      title: `Viewing ${direction === 'next' ? 'next' : 'previous'} project`,
      description: nextProject.title,
      duration: 1500
    });
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl max-h-[95vh] p-0 border border-primary/20 rounded-lg overflow-hidden flex flex-col">
        <DialogHeader className="p-4 border-b sticky top-0 bg-background z-10">
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4 rounded-full" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="px-6 py-4">
            {project.galleryImages && project.galleryImages.length > 0 && <div className="py-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.galleryImages.map((src, index) => <CarouselItem key={index}>
                        <div className="p-1">
                          <MediaItem src={src} alt={project.title} index={index} />
                        </div>
                      </CarouselItem>)}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools?.map((tool, index) => <Badge key={index} variant="secondary" className="text-sm">{tool}</Badge>)}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Summary</h4>
                  <p className="text-foreground/90 text-base">{project.impact || project.summary}</p>
                </div>

                {project.youtubeEmbed && <div>
                    <h4 className="text-xl font-semibold text-primary mb-2 flex items-center">
                      <Youtube className="h-4 w-4 mr-2" />
                      Video Content
                    </h4>
                    <YouTubeEmbed embedUrl={project.youtubeEmbed} />
                  </div>}

                {project.audioTracks && <div>
                    <h4 className="text-xl font-semibold text-primary mb-2 flex items-center">
                      <Music className="h-4 w-4 mr-2" />
                      Audio Samples
                    </h4>
                    <div className="space-y-2">
                      {project.audioTracks.map((track, index) => <AudioPlayer key={index} track={track} />)}
                    </div>
                  </div>}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Challenge</h4>
                  <p className="text-foreground/90 text-base">Coordinated social media campaigns and events; created visual assets to support user growth and engagement, provided marketing consultation and brand ambassadorship program strategy.</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-foreground/90 text-base">Developed high-performing Brand Ambassadorship program accompanied by various visual content, and improved campaign ROI through post-event KPI analysis.</p>
                </div>

                {project.spotifyEmbed && <div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Album Stream</h4>
                    <SpotifyEmbed embedUrl={project.spotifyEmbed} />
                  </div>}
              </div>
            </div>
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t sticky bottom-0 bg-background z-10 flex justify-between">
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => navigateProject('prev')}>
            Previous
          </Button>
          <Button variant="outline" size="sm" className="rounded-full" onClick={() => navigateProject('next')}>
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>;
};

export default ProjectDialog;
