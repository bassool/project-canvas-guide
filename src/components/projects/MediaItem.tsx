
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
  const isVideo = /\.(mp4|webm|mov|avi|mkv)$/i.test(src) || src.includes('.MP4') || src.includes('.MOV');
  
  const handleError = () => {
    console.log(`Media failed to load: ${src}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    console.log(`Media loaded successfully: ${src}`);
    setIsLoading(false);
    setHasError(false);
  };

  const handleRetry = () => {
    console.log(`Retrying media load: ${src}`);
    setHasError(false);
    setIsLoading(true);
  };

  if (hasError) {
    return (
      <div className="aspect-video overflow-hidden rounded-md bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-sm mb-2">Media unavailable</p>
          <button 
            onClick={handleRetry}
            className="text-xs bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  if (isVideo) {
    return (
      <div className="aspect-video overflow-hidden rounded-md relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
            <span className="text-gray-500">Loading video...</span>
          </div>
        )}
        <video 
          src={src} 
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          onError={handleError}
          onLoadedData={handleLoad}
          onCanPlay={handleLoad}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  
  return (
    <div className="aspect-video overflow-hidden rounded-md relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
          <span className="text-gray-500">Loading image...</span>
        </div>
      )}
      <img 
        src={src} 
        alt={`${alt} gallery image ${index + 1}`} 
        className="w-full h-full object-cover"
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default MediaItem;
