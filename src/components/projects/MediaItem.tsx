
import React, { useState, useRef, useCallback } from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  index: number;
}

const MediaItem = ({ src, alt, index }: MediaItemProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Log the src being used
  console.log(`MediaItem ${index}: Attempting to load ${src}`);
  
  // More comprehensive video detection
  const isVideo = /\.(mp4|webm|mov|avi|mkv)$/i.test(src) || src.includes('.MP4') || src.includes('.MOV');
  
  const handleError = useCallback(() => {
    console.error(`Media FAILED to load: ${src}`);
    console.error(`Full URL attempted: ${window.location.origin}${src}`);
    setHasError(true);
    setIsLoading(false);
    setIsReady(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    console.log(`Media loaded SUCCESSFULLY: ${src}`);
    setIsLoading(false);
    setHasError(false);
  }, [src]);

  const handleRetry = useCallback(() => {
    console.log(`Retrying media load: ${src}`);
    setHasError(false);
    setIsLoading(true);
    setIsReady(false);
    setIsPlaying(false);
    setUserHasInteracted(false);
  }, [src]);

  const handleVideoLoadedMetadata = useCallback(() => {
    console.log(`Video metadata loaded: ${src}`);
    setIsLoading(false);
    setHasError(false);
    setIsReady(true);
  }, [src]);

  const handleVideoCanPlay = useCallback(() => {
    console.log(`Video can play: ${src}`);
    setIsLoading(false);
    setHasError(false);
    setIsReady(true);
  }, [src]);

  const handlePlayClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!videoRef.current || !isReady) {
      console.log('Video not ready or ref not available');
      return;
    }

    try {
      setUserHasInteracted(true);
      console.log('Attempting to play video...');
      
      // Reset video to beginning if it ended
      if (videoRef.current.ended) {
        videoRef.current.currentTime = 0;
      }
      
      await videoRef.current.play();
      setIsPlaying(true);
      console.log('Video started playing');
    } catch (error) {
      console.error('Error playing video:', error);
      setIsPlaying(false);
      setUserHasInteracted(false);
    }
  }, [isReady]);

  const handleVideoPause = useCallback(() => {
    console.log('Video paused');
    setIsPlaying(false);
  }, []);

  const handleVideoEnded = useCallback(() => {
    console.log('Video ended');
    setIsPlaying(false);
    setUserHasInteracted(false);
  }, []);

  const handleVideoPlay = useCallback(() => {
    console.log('Video play event');
    setIsPlaying(true);
  }, []);

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
      <div className="aspect-video overflow-hidden rounded-md relative bg-black">
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
            <span className="text-gray-500">Loading video...</span>
          </div>
        )}
        
        {/* Play button overlay - only show when ready and not playing */}
        {isReady && !isPlaying && (
          <div 
            className="absolute inset-0 bg-black/30 flex items-center justify-center z-20 cursor-pointer" 
            onClick={handlePlayClick}
          >
            <button
              className="bg-white/90 hover:bg-white rounded-full p-6 transition-all transform hover:scale-110 shadow-lg"
              onClick={handlePlayClick}
              type="button"
            >
              <svg className="w-12 h-12 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        )}
        
        <video 
          ref={videoRef}
          src={src} 
          className="w-full h-full object-cover"
          controls={isPlaying && userHasInteracted}
          muted
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          poster=""
          onError={handleError}
          onLoadedData={handleLoad}
          onLoadedMetadata={handleVideoLoadedMetadata}
          onCanPlay={handleVideoCanPlay}
          onCanPlayThrough={handleVideoCanPlay}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onEnded={handleVideoEnded}
          onLoadStart={() => console.log(`Video load started: ${src}`)}
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
