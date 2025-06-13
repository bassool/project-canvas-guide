
import React, { useState, useRef } from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  index: number;
}

const MediaItem = ({ src, alt, index }: MediaItemProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Log the src being used
  console.log(`MediaItem ${index}: Attempting to load ${src}`);
  
  // More comprehensive video detection
  const isVideo = /\.(mp4|webm|mov|avi|mkv)$/i.test(src) || src.includes('.MP4') || src.includes('.MOV');
  
  const handleError = () => {
    console.error(`Media FAILED to load: ${src}`);
    console.error(`Full URL attempted: ${window.location.origin}${src}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    console.log(`Media loaded SUCCESSFULLY: ${src}`);
    setIsLoading(false);
    setHasError(false);
  };

  const handleRetry = () => {
    console.log(`Retrying media load: ${src}`);
    setHasError(false);
    setIsLoading(true);
    setShowPlayButton(false);
    setIsPlaying(false);
  };

  const handleVideoCanPlay = () => {
    console.log(`Video can play: ${src}`);
    setIsLoading(false);
    setHasError(false);
    setShowPlayButton(true);
  };

  const handleVideoPlay = async () => {
    if (videoRef.current) {
      try {
        setShowPlayButton(false);
        setIsPlaying(true);
        await videoRef.current.play();
      } catch (error) {
        console.error('Error playing video:', error);
        setShowPlayButton(true);
        setIsPlaying(false);
      }
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowPlayButton(true);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setShowPlayButton(true);
  };

  if (hasError) {
    return (
      <div className="aspect-video overflow-hidden rounded-md bg-gray-200 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-sm mb-2">Media unavailable</p>
          <p className="text-xs mb-2">{src}</p>
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
        {showPlayButton && !isPlaying && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 cursor-pointer" onClick={handleVideoPlay}>
            <button
              className="bg-white/90 hover:bg-white rounded-full p-4 transition-colors shadow-lg"
              onClick={handleVideoPlay}
            >
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        )}
        <video 
          ref={videoRef}
          src={src} 
          className="w-full h-full object-cover"
          controls={isPlaying}
          muted
          playsInline
          preload="metadata"
          onError={handleError}
          onLoadedData={handleLoad}
          onCanPlay={handleVideoCanPlay}
          onPlay={() => setIsPlaying(true)}
          onPause={handleVideoPause}
          onEnded={handleVideoEnded}
          onLoadStart={() => console.log(`Video load started: ${src}`)}
          onLoadedMetadata={() => console.log(`Video metadata loaded: ${src}`)}
          style={{ objectFit: 'cover' }}
        >
          <source src={src} type="video/mp4" />
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
      />
    </div>
  );
};

export default MediaItem;
