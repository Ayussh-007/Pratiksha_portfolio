"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, ExternalLink, Radio, Volume2 } from "lucide-react";
import { ChicletCard } from "./ChicletCard";
import { useTheme } from "@/context/ThemeContext";
import { PLAYLIST_TRACKS } from "@/data/portfolio-data";

export function NowPlayingChiclet() {
  const { playUiSound } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const track = PLAYLIST_TRACKS[0];

  useEffect(() => {
    const audio = new Audio("/assets/music/night_changes.mp3");
    audioRef.current = audio;
    audio.volume = volume;
    
    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      setIsPlaying(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playUiSound("click");

    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const openSpotify = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    playUiSound("pop");
    window.open(track.spotifyUrl, "_blank", "noopener,noreferrer");
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <ChicletCard
      gradientClass="bg-black/40 text-white backdrop-blur-2xl"
      className="!p-0 col-span-full min-h-[100px] sm:min-h-[130px] overflow-hidden group/card shadow-2xl border border-white/10"
    >
      {/* Heavy Blurred Background Image (Apple Music Style) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src={track.coverUrl}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover object-center blur-[60px] scale-150 saturate-[2] opacity-60 transition-opacity duration-1000 group-hover/card:opacity-80"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-row items-center gap-3 sm:gap-6 p-3 sm:p-5">
        
        {/* Cover Art - Left */}
        <div className="relative shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/15 group">
          <Image
            src={track.coverUrl}
            alt={track.title}
            fill
            sizes="(max-width: 640px) 64px, 96px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
          {/* Play Overlay on Hover */}
          <div onClick={togglePlay} className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
             {isPlaying ? <Pause className="h-8 w-8 text-white drop-shadow-md" /> : <Play className="h-8 w-8 text-white ml-1 drop-shadow-md" />}
          </div>
        </div>

        {/* Info & Controls - Right */}
        <div className="flex-1 flex flex-col justify-center min-w-0 pr-2">
          
          {/* Title and Badge */}
          <div className="flex items-start justify-between mb-2">
            <div className="min-w-0 pr-4">
              <h2 onClick={openSpotify} className="font-display font-bold tracking-tight text-base sm:text-2xl text-white truncate cursor-pointer hover:text-[#1DB954] transition-colors drop-shadow-md">
                {track.title}
              </h2>
              <p className="text-xs sm:text-base text-white/80 font-medium truncate drop-shadow-md">{track.artist} &bull; {track.album}</p>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1">
               <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1DB954]/20 border border-[#1DB954]/30 backdrop-blur-md shadow-lg shadow-black/20">
                 <Radio className="h-3.5 w-3.5 text-[#1DB954] animate-pulse" />
                 <span className="text-[10px] font-bold uppercase tracking-wider text-[#1DB954] hidden sm:inline">Spotify</span>
               </div>
            </div>
          </div>

          {/* Controls & Progress */}
          <div className="flex items-center gap-3 sm:gap-5 mt-1 sm:mt-2">
            {/* Play Button */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-full bg-white text-black shadow-xl hover:scale-105 active:scale-95 transition-all border border-black/5"
            >
              {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5 fill-black" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-black ml-0.5" />}
            </button>

            {/* Progress Bar (Interactive Seek) */}
            <div className="flex-1 flex flex-col gap-1 sm:gap-1.5 group/progress">
              <div className="hidden sm:flex items-center justify-between px-0.5">
                <span className="text-xs font-medium text-white/70 tabular-nums drop-shadow-md">{formatTime(currentTime)}</span>
                <span className="text-xs font-medium text-white/70 tabular-nums drop-shadow-md">{duration ? formatTime(duration) : track.duration}</span>
              </div>
              <div className="relative h-4 w-full flex items-center">
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                {/* Visual Track (Apple Music slim line, expands on hover) */}
                <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden transition-all group-hover/progress:h-2.5 shadow-inner backdrop-blur-sm">
                  <div 
                    className="h-full bg-[#1DB954] rounded-full transition-all duration-75 relative" 
                    style={{ width: `${(currentTime / (duration || 1)) * 100}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Volume Control */}
            <div className="hidden md:flex items-center gap-2 pl-2">
              <Volume2 className="h-4 w-4 text-white/70 drop-shadow-md" />
              <div className="relative h-4 w-16 flex items-center group/volume">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden transition-all group-hover/volume:h-2.5 shadow-inner backdrop-blur-sm">
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-75" 
                    style={{ width: `${volume * 100}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* External Link */}
            <button onClick={openSpotify} title="Open in Spotify" className="shrink-0 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all ml-auto shadow-sm">
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

        </div>
      </div>
    </ChicletCard>
  );
}
