
import React from "react";

interface VideoEmbedProps {
  videoId: string;
}

const VideoEmbed = ({ videoId }: VideoEmbedProps) => {
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

export default VideoEmbed;
