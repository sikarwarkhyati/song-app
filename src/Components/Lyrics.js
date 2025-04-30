import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Lyrics = () => {
  const [currentTab, setCurrentTab] = useState('lyrics');
  const [cover, setCover] = useState('');
  const [songUrl, setSongUrl] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(true);

  const songName = 'Shape of You'; // You can make this dynamic

  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const res = await axios.get('https://itunes.apple.com/search', {
          params: {
            term: songName,
            entity: 'song',
            limit: 1
          }
        });
        const result = res.data.results[0];
        if (result) {
          setCover(result.artworkUrl100.replace('100x100', '300x300'));
          setSongUrl(result.previewUrl);
        }
      } catch (error) {
        console.error('Error fetching song data:', error);
      }
    };

    const fetchLyrics = async () => {
      try {
        const res = await axios.get(`https://api.lyrics.ovh/v1/Ed Sheeran/${songName}`);
        setLyrics(res.data.lyrics);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
        setLyrics('Lyrics not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchSongData();
    fetchLyrics();
  }, [songName]);

  const languages = ['en', 'hi', 'ta', 'te', 'kn'];

  const handleLanguageChange = async (lang) => {
    setSelectedLanguage(lang);
    if (lang === 'en') return;

    try {
      const res = await axios.post('https://libretranslate.com/translate', {
        q: lyrics,
        source: 'en',
        target: lang,
        format: 'text'
      });
      setTranslations((prev) => ({ ...prev, [lang]: res.data.translatedText }));
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div className="container">
      <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="button-group">
          {['audio', 'lyrics', 'meaning'].map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={currentTab === tab ? 'active' : ''}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="content">
            {currentTab === 'audio' && (
              <>
                <img src={cover} alt="Cover" className="cover-image" />
                <audio controls src={songUrl} className="audio-player" />
              </>
            )}

            {currentTab === 'lyrics' && (
              <>
                <div className="language-options">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className={selectedLanguage === lang ? 'active' : ''}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
                <p className="lyrics-text">
                  {selectedLanguage === 'en' ? lyrics : translations[selectedLanguage] || 'Translating...'}
                </p>
              </>
            )}

            {currentTab === 'meaning' && (
              <p className="meaning">Meaning / Summary feature coming soon...</p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Lyrics;
