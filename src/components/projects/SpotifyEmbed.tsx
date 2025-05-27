
import React from "react";

interface SpotifyEmbedProps {
  embedUrl: string;
}

const SpotifyEmbed = ({ embedUrl }: SpotifyEmbedProps) => {
  const albumId = embedUrl.split('/').pop();
  
  return (
    <div className="mt-4 border border-primary/20 rounded-lg overflow-hidden">
      <iframe 
        src={`https://open.spotify.com/embed/album/${albumId}`} 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowTransparency={true} 
        allow="encrypted-media" 
        title="Spotify Player" 
        className="rounded-lg" 
      />
    </div>
  );
};

export default SpotifyEmbed;
