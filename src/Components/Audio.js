import React, { useRef, useState } from "react";
import "./App.css";

const AudioTab = ({ activeTab, coverImageUrl, audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipTime = (seconds) => {
    audioRef.current.currentTime += seconds;
  };

  return (
    activeTab === 'Audio' && (
      <div className="content">
        {coverImageUrl && (
          <img
            src={coverImageUrl}
            alt="Cover"
            className="cover-image"
          />
        )}
        <audio ref={audioRef} controls className="audio-player">
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="controls">
          <button onClick={() => skipTime(-10)}>-10s</button>
          <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={() => skipTime(10)}>+10s</button>
        </div>
      </div>
    )
  );
};

export default AudioTab;
