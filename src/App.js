import React, { useState } from "react";
import "./App.css";
import AudioTab from "./Components/Audio";

const LyricsApp = () => {
  const [activeTab, setActiveTab] = useState("audio");
  const [language, setLanguage] = useState("english");

  // Lyrics for the song in different languages
  const lyrics = {
    english: `
      Oh no, if you were formless,
      I would be the vehicle of knowledge, dear Kanna.
      Oh no, if you were dance, then
      I would be the vehicle of the mind, dear Kanna.
    `,
    hindi: `
      ओ नहीं, अगर तुम निराकार होते,
      तो मैं ज्ञान का वाहन होती, प्रिय कन्ना।
      ओ नहीं, अगर तुम नृत्य होते,
      तो मैं मन का वाहन होती, प्रिय कन्ना।
    `,
    kannada: `
      ಅಯ್ಯೋ, ನೀನು ನಿರಾಕಾರವಾಗಿದ್ದೆಲ್ಲಿ,
      ನಾನು ಜ್ಞಾನವೆಂಬ ವಾಹನವಾಗಿದ್ದೆ, ಕಣ್ಣಾ.
      ಅಯ್ಯೋ, ನೀನು ನಾಟ್ಯಕೆ, ನಿಂದಲ್ಲಿ,
      ನಾನು ಚಿತ್ತನ್ವೆಂಬ ವಾಹನವಾಗಿದ್ದೆ, ಕಣ್ಣಾ.
    `,
    tamil: `
      அய்யோ, நீ விரிவாக இல்லாவிட்டால்,
      நான் அறிவின் வாகனமாக இருந்திருப்பேன், கண்ணா.
      அய்யோ, நீ நடனம் என்றால்,
      நான் மனதின் வாகனமாக இருந்திருப்பேன், கண்ணா.
    `,
    telugu: `
      అయ్యో, నీవు నిరాకారమైపోతే,
      నేను జ్ఞానపు వాహనమయ్యేదాన్ని, కన్నా.
      అయ్యో, నీవు నాట్యమైతే,
      నేను మనస్సు వాహనమయ్యేదాన్ని, కన్నా.
    `,
  };

  return (
    <div className="container">
      <div className="card">
        {/* Tab Buttons */}
        <div className="button-group">
          <button
            className={activeTab === "audio" ? "active" : ""}
            onClick={() => setActiveTab("audio")}
          >
            Audio
          </button>
          <button
            className={activeTab === "lyrics" ? "active" : ""}
            onClick={() => setActiveTab("lyrics")}
          >
            Lyrics
          </button>
          <button
            className={activeTab === "meaning" ? "active" : ""}
            onClick={() => setActiveTab("meaning")}
          >
            Meaning
          </button>
        </div>

        <div className="content">
          {activeTab === "audio" && (
            <AudioTab
              activeTab={activeTab}
              songTitle="believer"
              audioUrl="https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
            />
          )}

          {activeTab === "lyrics" && (
            <div>
              <div className="language-options">
                <button
                  onClick={() => setLanguage("english")}
                  className={language === "english" ? "active" : ""}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hindi")}
                  className={language === "hindi" ? "active" : ""}
                >
                  हि
                </button>
                <button
                  onClick={() => setLanguage("kannada")}
                  className={language === "kannada" ? "active" : ""}
                >
                  ಕ
                </button>
                <button
                  onClick={() => setLanguage("tamil")}
                  className={language === "tamil" ? "active" : ""}
                >
                  த
                </button>
                <button
                  onClick={() => setLanguage("telugu")}
                  className={language === "telugu" ? "active" : ""}
                >
                  తె
                </button>
              </div>
              <div className="lyrics-text">{lyrics[language]}</div>
            </div>
          )}

          {activeTab === "meaning" && (
            <div className="meaning-content">
              {/* Provide English meaning or translation for lyrics */}
              Oh no, if you were formless, I would be the vehicle of knowledge,
              dear Kanna. <br />
              Oh no, if you were dance, then I would be the vehicle of the mind,
              dear Kanna.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LyricsApp;
