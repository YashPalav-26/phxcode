import React from "react";

const OutputWindow = ({ output, error, isDarkMode }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md hover:shadow-none flex-grow ${
        isDarkMode
          ? "bg-gray-800 text-white shadow-gray-400 shadow-md"
          : "bg-[#EEEEEE] text-black shadow-gray-800 shadow-md"
      }`}
    >
      <h2 className="text-lg font-bold">Output</h2>
      <pre className="overflow-auto max-h-full">{output}</pre>
      {error && <pre className="text-red-500">{error}</pre>}
    </div>
  );
};

export default OutputWindow;
