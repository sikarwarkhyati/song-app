import React, { useState } from "react";
import './App.css';
import Tabs from "./Components/Tabs";
import Audio from "./Components/Audio";
import Lyrics from "./Components/Lyrics";
import Meaning from "./Components/Meaning";

const App = () => {
  const [activeTab, setActiveTab] = useState("Audio");

  return (
    <div className="max-w-md mx-auto mt-10 border rounded p-4 shadow">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Audio" && <Audio />}
      {activeTab === "Lyrics" && <Lyrics />}
      {activeTab === "Meaning" && <Meaning />}
    </div>
  );
};

export default App;
