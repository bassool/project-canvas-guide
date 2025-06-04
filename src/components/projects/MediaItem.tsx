
import React, { useState } from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  index: number;
}

const MediaItem = ({ src, alt, index }: MediaItemProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // More comprehensive video detection
  const isVideo = src.includes('.mp4') || src.includes('.webm') || src.includes('.mov') || src.includes('.MP4');
  
  const handleError = () => {
    console.error(`Failed to load media: ${src}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div className="aspect-video overflow-hidden rounded-md bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-sm">Media unavailable</p>
          <p className="text-xs">{src}</p>
        </div>
      </div>
    );
  }
  
  if (isVideo) {
    return (
      <div className="aspect-video overflow-hidden rounded-md">
        {isLoading && (
          <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Loading video...</span>
          </div>
        )}
        <video 
          src={src} 
          className={`w-full h-full object-cover ${isLoading ? 'hidden' : ''}`}
          controls
          preload="metadata"
          onError={handleError}
          onLoadedData={handleLoad}
          onLoadStart={() => setIsLoading(false)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  return (
    <div className="aspect-video overflow-hidden rounded-md">
      {isLoading && (
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading image...</span>
        </div>
      )}
      <img 
        src={src} 
        alt={`${alt} gallery image ${index + 1}`} 
        className={`w-full h-full object-cover ${isLoading ? 'hidden' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
};

export default MediaItem;
