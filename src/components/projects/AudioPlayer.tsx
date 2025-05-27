
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface AudioPlayerProps {
  track: {
    title: string;
    url: string;
  };
}

const AudioPlayer = ({ track }: AudioPlayerProps) => {
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

  return (
    <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg mb-2">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0 mr-2" onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <span className="text-sm font-medium">{track.title}</span>
      </div>
      <audio ref={audioRef} src={track.url} onEnded={() => setIsPlaying(false)} className="hidden" preload="metadata" />
    </div>
  );
};

export default AudioPlayer;
