
import React from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  index: number;
}

const MediaItem = ({ src, alt, index }: MediaItemProps) => {
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

export default MediaItem;
