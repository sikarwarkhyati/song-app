import axios from "axios";

const API_URL = "https://libretranslate.de/translate";

export const translateText = async (text, targetLang = "hi") => {
  const res = await axios.post(API_URL, {
    q: text,
    source: "en",
    target: targetLang,
    format: "text"
  }, {
    headers: { accept: "application/json" }
  });

  return res.data.translatedText;
};
