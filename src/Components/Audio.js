// src/Components/Audio.js

import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';

const playlist = [
  {
    title: "Song One",
    audioUrl: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
    coverImage: "../cover1.jpg",
  },
  {
    title: "Song Two",
    audioUrl: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
    coverImage: "../cover1.jpg",
  },
  {
    title: "Song Three",
    audioUrl: "https://samplelib.com/lib/preview/mp3/sample-9s.mp3",
    coverImage: "../cover1.jpg",
  },
];

const AudioTab = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [currentSongIndex, isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(event.target.value);
      setCurrentTime(parseFloat(event.target.value));
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(false);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );
    setIsPlaying(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className="audio-container">
      <img
        src={currentSong.coverImage}
        alt="Cover"
        className="cover-image"
      />
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onEnded={nextSong}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="progress-bar-container">
        <input
          type="range"
          className="progress-bar"
          value={currentTime}
          min="0"
          max={duration}
          onChange={handleSeek}
        />
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      <div className="controls">
        <button className="nav-button" onClick={prevSong}>
          <i className="bi bi-skip-start-fill"></i>
        </button>
        <button className="play-button" onClick={togglePlay}>
          <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
        </button>
        <button className="nav-button" onClick={nextSong}>
          <i className="bi bi-skip-end-fill"></i>
        </button>
      </div>

      <p className="song-title">{currentSong.title}</p>
    </div>
  );
};

export default AudioTab;