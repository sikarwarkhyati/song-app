import React, { useEffect, useState } from "react";
import axios from "axios";

const Audio = () => {
  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(true);
  const [songUrl, setSongUrl] = useState(""); // optional preview

  useEffect(() => {
    const fetchCover = async () => {
      try {
        const res = await axios.get("https://itunes.apple.com/search", {
          params: {
            term: "Shape of You",
            entity: "song",
            limit: 1
          }
        });
        const result = res.data.results[0];
        if (result) {
          const image = result.artworkUrl100.replace("100x100", "300x300");
          setCover(image);
          setSongUrl(result.previewUrl); // 30s preview
        }
      } catch (err) {
        console.error("Cover fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCover();
  }, []);

  return (
    <div className="text-center mt-4">
      {loading ? (
        <p>Loading cover...</p>
      ) : (
        <>
          <img
            src={cover}
            alt="Cover Art"
            className="mx-auto rounded-lg shadow-md w-64 h-64 object-cover"
          />
          {songUrl && (
            <div className="mt-4">
              <audio controls src={songUrl}>
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Audio;
