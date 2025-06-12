
import React, { useState, useRef, useEffect } from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  index: number;
}

const MediaItem = ({ src, alt, index }: MediaItemProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted for browser compatibility
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
  };

  // Handle video unmuting with user interaction
  const handleVideoClick = () => {
    if (isVideo && videoRef.current && isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
      console.log(`Video manually unmuted: ${src}`);
      
      // Try to play the video after unmuting
      videoRef.current.play().catch(error => {
        console.log(`Video play failed: ${error.message}`);
      });
    }
  };

  // Handle mute/unmute toggle
  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      console.log(`Video mute toggled: ${src}, muted: ${newMutedState}`);
    }
  };

  // Effect to sync muted state with video element
  useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      
      const handleVolumeChange = () => {
        setIsMuted(video.muted);
      };

      video.addEventListener('volumechange', handleVolumeChange);
      
      return () => {
        video.removeEventListener('volumechange', handleVolumeChange);
      };
    }
  }, [isVideo]);

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
        
        {/* Unmute overlay for better user experience */}
        {isMuted && !isLoading && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20 cursor-pointer"
            onClick={handleVideoClick}
          >
            <div className="bg-white bg-opacity-90 rounded-lg px-4 py-2 text-black text-sm font-medium">
              Click to unmute video
            </div>
          </div>
        )}

        <video 
          ref={videoRef}
          src={src} 
          className="w-full h-full object-cover"
          controls
          preload="metadata"
          muted={isMuted}
          playsInline // Important for iOS Safari
          onError={handleError}
          onLoadedData={handleLoad}
          onCanPlay={handleLoad}
          controlsList="nodownload" // Prevent download on some browsers
        >
          Your browser does not support the video tag.
        </video>

        {/* Custom unmute button overlay */}
        {!isLoading && (
          <button
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded z-30"
            onClick={handleMuteToggle}
            title={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.768L4.635 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.635l3.748-3.768a1 1 0 011 .076zM16.293 6.293a1 1 0 011.414 1.414L16 9.414l1.707 1.707a1 1 0 01-1.414 1.414L14.586 11l-1.707 1.707a1 1 0 01-1.414-1.414L13.172 10l-1.707-1.707a1 1 0 011.414-1.414L14.586 8.586l1.707-1.707z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.768L4.635 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.635l3.748-3.768a1 1 0 011 .076zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        )}
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
