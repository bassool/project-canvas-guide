
import React, { useState } from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  index: number;
}

const MediaItem = ({ src, alt, index }: MediaItemProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  
  // More comprehensive video detection
  const isVideo = src.includes('.mp4') || src.includes('.webm') || src.includes('.mov') || src.includes('.MP4') || src.includes('.MOV');
  
  const handleError = () => {
    console.error(`Failed to load media: ${src}, retry count: ${retryCount}`);
    
    // Try to retry loading up to 2 times
    if (retryCount < 2) {
      setRetryCount(prev => prev + 1);
      setIsLoading(true);
      // Force reload by adding timestamp to URL
      const timestamp = new Date().getTime();
      const separator = src.includes('?') ? '&' : '?';
      const newSrc = `${src}${separator}t=${timestamp}`;
      
      setTimeout(() => {
        if (isVideo) {
          const video = document.querySelector(`video[data-retry="${retryCount + 1}"]`) as HTMLVideoElement;
          if (video) {
            video.src = newSrc;
            video.load();
          }
        } else {
          const img = document.querySelector(`img[data-retry="${retryCount + 1}"]`) as HTMLImageElement;
          if (img) {
            img.src = newSrc;
          }
        }
      }, 1000);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoading(true);
    setRetryCount(0);
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
          data-retry={retryCount}
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
        data-retry={retryCount}
        alt={`${alt} gallery image ${index + 1}`} 
        className="w-full h-full object-cover"
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
      />
    </div>
  );
};

export default MediaItem;
