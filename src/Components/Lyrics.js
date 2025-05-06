import React, { useState } from 'react';
import './App.css';
import AudioTab from './Components/Audio';

const LyricsApp = () => {
  const [activeTab, setActiveTab] = useState('audio'); // Set 'audio' as the initial active tab
  const [language, setLanguage] = useState('english');

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
    <div className="container lyrics-app-container">
      <div className="card lyrics-app-card">
        <h2 className="app-title">Melody & Meaning</h2>

        {/* Language Selector */}
        <div className="language-options">
          <button onClick={() => setLanguage('english')} className={language === 'english' ? 'active' : ''}>Eng</button>
          <button onClick={() => setLanguage('hindi')} className={language === 'hindi' ? 'active' : ''}>अ</button>
          <button onClick={() => setLanguage('kannada')} className={language === 'kannada' ? 'active' : ''}>Kannada</button>
          <button onClick={() => setLanguage('tamil')} className={language === 'tamil' ? 'active' : ''}>Tamil</button>
          <button onClick={() => setLanguage('telugu')} className={language === 'telugu' ? 'active' : ''}>Telugu</button>
        </div>

        {/* Tab Buttons */}
        <div className="button-group">
          <button
            className={`tab-button ${activeTab === 'audio' ? 'active' : ''}`}
            onClick={() => setActiveTab('audio')}
          >
            <i className="bi bi-music-note-beamed"></i> Audio
          </button>
          <button
            className={`tab-button ${activeTab === 'lyrics' ? 'active' : ''}`}
            onClick={() => setActiveTab('lyrics')}
          >
            <i className="bi bi-file-earmark-text"></i> Lyrics
          </button>
          <button
            className={`tab-button ${activeTab === 'meaning' ? 'active' : ''}`}
            onClick={() => setActiveTab('meaning')}
          >
            <i className="bi bi-translate"></i> Meaning
          </button>
        </div>

        <div className="content lyrics-app-content">
          {activeTab === 'audio' && (
            <AudioTab
              activeTab={activeTab}
              songTitle="Believer"
              audioUrl="https://samplelib.com/lib/preview/mp3/sample-3s.mp3"
            />
          )}

          {activeTab === 'lyrics' && (
            <div className="lyrics-container">
              <pre className="lyrics-text">{lyrics[language]}</pre>
            </div>
          )}

          {activeTab === 'meaning' && (
            <div className="meaning-container">
              <h3>Meaning:</h3>
              <p>
                Oh no, if you were formless, I would be the vehicle of knowledge, dear Kanna.
              </p>
              <p>
                Oh no, if you were dance, then I would be the vehicle of the mind, dear Kanna.
              </p>
              {/* You can add more detailed meanings here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LyricsApp;