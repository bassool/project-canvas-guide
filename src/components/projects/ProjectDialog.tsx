
import React, { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Music, Youtube, X } from "lucide-react";
import { Project, projects } from "./projectTypes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";

interface ProjectDialogProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AudioPlayer = ({
  track
}: {
  track: {
    title: string;
    url: string;
  };
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const togglePlay = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error("Audio playback error:", error);
              toast({
                title: "Playback error",
                description: "There was a problem playing this audio file."
              });
            });
          }
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Audio interaction error:", error);
        toast({
          title: "Audio error",
          description: "There was a problem with the audio player."
        });
      }
    }
  };
  return <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg mb-2">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0 mr-2" onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <span className="text-sm font-medium">{track.title}</span>
      </div>
      <audio ref={audioRef} src={track.url} onEnded={() => setIsPlaying(false)} className="hidden" preload="metadata" />
    </div>;
};

const SpotifyEmbed = ({
  embedUrl
}: {
  embedUrl: string;
}) => {
  const albumId = embedUrl.split('/').pop();
  return <div className="mt-4 border border-primary/20 rounded-lg overflow-hidden">
      <iframe src={`https://open.spotify.com/embed/album/${albumId}`} width="100%" height="352" frameBorder="0" allowTransparency={true} allow="encrypted-media" title="Spotify Player" className="rounded-lg" />
    </div>;
};

const VideoEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <iframe 
      src={`https://www.youtube.com/embed/${videoId}`}
      width="100%" 
      height="352" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen 
      title={`YouTube Video ${videoId}`}
      className="rounded-lg" 
    />
  );
};

const YouTubeEmbed = ({
  embedUrl
}: {
  embedUrl: string;
}) => {
  // These are the three specified videos to embed
  const videoIds = [
    "CFtzsAY0wlM", // First video
    "zOSpiophNBs", // Second video
    "NNF46Np1q2c", // Third video
  ];
  
  return (
    <div className="mt-4 border border-primary/20 rounded-lg overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {videoIds.map((videoId, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <VideoEmbed videoId={videoId} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

const MediaItem = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
  
  if (isVideo) {
    return (
      <div className="aspect-video overflow-hidden rounded-md">
        <video 
          src={src} 
          className="w-full h-full object-cover" 
          controls
          preload="metadata"
          onError={() => console.error(`Failed to load video: ${src}`)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  return (
    <div className="aspect-video overflow-hidden rounded-md">
      <img 
        src={src} 
        alt={`${alt} gallery image ${index + 1}`} 
        className="w-full h-full object-cover" 
        onError={() => console.error(`Failed to load image: ${src}`)}
      />
    </div>
  );
};

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
    let newIndex = direction === 'next' 
      ? (currentIndex + 1) % projects.length 
      : (currentIndex - 1 + projects.length) % projects.length;
    
    // Get the next project
    const nextProject = projects[newIndex];
    
    // Dispatch a custom event to notify the ProjectCard to update its currentProject
    const event = new CustomEvent('project-change', {
      detail: { project: nextProject }
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
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 rounded-full" 
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="px-6 py-4">
            {project.galleryImages && project.galleryImages.length > 0 && 
              <div className="py-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.galleryImages.map((src, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <MediaItem src={src} alt={project.title} index={index} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            }
            
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
                  <p className="text-foreground/90 text-base">{project.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Solution</h4>
                  <p className="text-foreground/90 text-base">{project.solution}</p>
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
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full" 
            onClick={() => navigateProject('prev')}
          >
            Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full" 
            onClick={() => navigateProject('next')}
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>;
};

export default ProjectDialog;
