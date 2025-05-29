
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface AudioPlayerProps {
  track: {
    title: string;
    url: string;
  };
}

// Global audio manager to handle multiple audio players
class AudioManager {
  private static instance: AudioManager;
  private currentPlayingAudio: HTMLAudioElement | null = null;
  private currentPlayingId: string | null = null;
  private listeners: Map<string, (isPlaying: boolean) => void> = new Map();

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  play(audioElement: HTMLAudioElement, id: string): void {
    // Stop currently playing audio if it's different
    if (this.currentPlayingAudio && this.currentPlayingId !== id) {
      this.currentPlayingAudio.pause();
      this.notifyListener(this.currentPlayingId, false);
    }
    
    this.currentPlayingAudio = audioElement;
    this.currentPlayingId = id;
    this.notifyListener(id, true);
  }

  stop(id: string): void {
    if (this.currentPlayingId === id) {
      this.currentPlayingAudio = null;
      this.currentPlayingId = null;
    }
    this.notifyListener(id, false);
  }

  registerListener(id: string, callback: (isPlaying: boolean) => void): void {
    this.listeners.set(id, callback);
  }

  unregisterListener(id: string): void {
    this.listeners.delete(id);
  }

  private notifyListener(id: string | null, isPlaying: boolean): void {
    if (id && this.listeners.has(id)) {
      const callback = this.listeners.get(id);
      callback?.(isPlaying);
    }
  }
}

const AudioPlayer = ({ track }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioManager = AudioManager.getInstance();
  const trackId = `${track.title}-${track.url}`;

  useEffect(() => {
    // Register this player with the audio manager
    audioManager.registerListener(trackId, setIsPlaying);

    return () => {
      // Cleanup when component unmounts
      audioManager.unregisterListener(trackId);
    };
  }, [trackId, audioManager]);
  
  const togglePlay = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          audioManager.stop(trackId);
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                audioManager.play(audioRef.current!, trackId);
              })
              .catch(error => {
                console.error("Audio playback error:", error);
                toast({
                  title: "Playback error",
                  description: "There was a problem playing this audio file."
                });
              });
          } else {
            audioManager.play(audioRef.current, trackId);
          }
        }
      } catch (error) {
        console.error("Audio interaction error:", error);
        toast({
          title: "Audio error",
          description: "There was a problem with the audio player."
        });
      }
    }
  };

  const handleAudioEnded = () => {
    audioManager.stop(trackId);
  };

  return (
    <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg mb-2">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" className="h-8 w-8 rounded-full p-0 mr-2" onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <span className="text-sm font-medium">{track.title}</span>
      </div>
      <audio 
        ref={audioRef} 
        src={track.url} 
        onEnded={handleAudioEnded} 
        className="hidden" 
        preload="metadata" 
      />
    </div>
  );
};

export default AudioPlayer;
