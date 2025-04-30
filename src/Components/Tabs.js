import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-around border-b">
      {["Audio", "Lyrics", "Meaning"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 px-4 font-semibold ${
            activeTab === tab ? "border-b-2 border-black" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
