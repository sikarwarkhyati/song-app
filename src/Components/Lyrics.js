import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Lyrics = () => {
  const [lyrics, setLyrics] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState('lyrics');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
  ];

  useEffect(() => {
    const fetchLyrics = async () => {
      setLoading(true);
      try {
        const response = await axios.get('API_URL_TO_FETCH_LYRICS');
        setLyrics(response.data.lyrics);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
        setLoading(false);
      }
    };
    fetchLyrics();
  }, []);

  useEffect(() => {
    const fetchTranslations = async () => {
      if (selectedLanguage === 'en') return;
      setLoading(true);
      try {
        const response = await axios.get(`API_URL_TO_FETCH_TRANSLATION/${selectedLanguage}`);
        setTranslations(response.data.translations);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching translation:', error);
        setLoading(false);
      }
    };
    fetchTranslations();
  }, [selectedLanguage]);

  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="button-group">
          <button
            onClick={() => setCurrentTab('audio')}
            className={currentTab === 'audio' ? 'active' : ''}
          >
            Audio
          </button>
          <button
            onClick={() => setCurrentTab('lyrics')}
            className={currentTab === 'lyrics' ? 'active' : ''}
          >
            Lyrics
          </button>
          <button
            onClick={() => setCurrentTab('meaning')}
            className={currentTab === 'meaning' ? 'active' : ''}
          >
            Meaning
          </button>
        </div>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="content">
            {currentTab === 'lyrics' && (
              <div className="lyrics-text">
                {selectedLanguage === 'en' ? (
                  <p>{lyrics}</p>
                ) : (
                  <p>{translations[selectedLanguage]}</p>
                )}
              </div>
            )}
            {currentTab === 'audio' && <div className="audio-player">Audio Player Placeholder</div>}
            {currentTab === 'meaning' && <div className="meaning">Meaning Placeholder</div>}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Lyrics;
