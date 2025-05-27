
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import VideoEmbed from "./VideoEmbed";

interface YouTubeEmbedProps {
  embedUrl: string;
}

const YouTubeEmbed = ({ embedUrl }: YouTubeEmbedProps) => {
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

export default YouTubeEmbed;
