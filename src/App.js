import React, { useState } from 'react';
import './App.css';

const LyricsApp = () => {
  const [activeTab, setActiveTab] = useState('lyrics');

  return (
    <div className="container">
      <div className="card">
        <h2>Lyrics</h2>
        <div className="language-circle">ಕ</div>

        <div className="button-group">
          <button
            className={activeTab === 'audio' ? 'active' : ''}
            onClick={() => setActiveTab('audio')}
          >
            Audio
          </button>
          <button
            className={activeTab === 'lyrics' ? 'active' : ''}
            onClick={() => setActiveTab('lyrics')}
          >
            Lyrics
          </button>
          <button
            className={activeTab === 'meaning' ? 'active' : ''}
            onClick={() => setActiveTab('meaning')}
          >
            Meaning
          </button>
        </div>

        <div className="content">
          {activeTab === 'audio' && (
            <div>
              🎵 Audio player will appear here (you can embed a player).
            </div>
          )}
          {activeTab === 'lyrics' && (
            <div>
              ಅಯ್ಯೋ, ನೀನು ನಿರಾಕಾರವಾಗಿದ್ದೆಲ್ಲಿ <br />
              ನಾನು ಜ್ಞಾನವೆಂಬ ವಾಹನವಾಗಿದ್ದೆ, ಕಣ್ಣಾ. <br />
              ಅಯ್ಯೋ, ನೀನು ನಾಟ್ಯಕೆ, ನಿಂದಲ್ಲಿ <br />
              ನಾನು ಚಿತ್ತನ್ವೆಂಬ ವಾಹನವಾಗಿದ್ದೆ, ಕಣ್ಣಾ. <br />
              ಅಯ್ಯೋ, ನೀನು ಆಕಾರವಾಗಿದ್ದೆಲ್ಲಿ...
            </div>
          )}
          {activeTab === 'meaning' && (
            <div>
              Oh no, if you were formless,<br />
              I would be the vehicle of knowledge, dear Kanna.<br />
              Oh no, if you were dance, then<br />
              I would be the vehicle of the mind, dear Kanna.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LyricsApp;
