import React, { useState } from "react";
import { translateText } from "../api/translate";

const Meaning = () => {
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    const result = await translateText("Here is the English lyrics...");
    setTranslated(result);
    setLoading(false);
  };

  return (
    <div className="text-center mt-4">
      <button onClick={handleTranslate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Translate to Hindi
      </button>
      <p className="mt-4">{loading ? "Translating..." : translated}</p>
    </div>
  );
};

export default Meaning;
