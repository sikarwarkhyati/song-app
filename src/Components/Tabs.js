import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ["Audio", "Lyrics", "Meaning"];

  return (
    <div className="flex justify-center space-x-4 my-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-orange-100"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
