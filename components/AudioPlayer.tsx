import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

// Using a gentle, royalty-free piano track URL (placeholder)
const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/10/05/audio_6861a7a012.mp3?filename=uplifting-piano-122369.mp3";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Autoplay blocked usually:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    // Attempt auto-play on mount, handle browser restrictions
    if (audioRef.current) {
        audioRef.current.volume = 0.4;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(() => {
                // Auto-play was prevented
                setIsPlaying(false);
            });
        }
    }
  }, []);

  return (
    <div className="audio-player">
      <button 
        onClick={togglePlay}
        className="audio-btn"
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
      <audio ref={audioRef} src={MUSIC_URL} loop />
    </div>
  );
};

export default AudioPlayer;