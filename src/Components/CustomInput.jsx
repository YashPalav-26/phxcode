import React from "react";

const CustomInput = ({ input, setInput, isDarkMode }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md hover:shadow-none flex-grow ${
        isDarkMode
          ? "bg-gray-800 text-white shadow-gray-400 shadow-md"
          : "bg-[#EEEEEE] text-black shadow-gray-800 shadow-md"
      }`}
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`w-full h-full p-2 rounded resize-none ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-[#EEEEEE] text-black "
        }`}
        placeholder="Custom input"
      />
    </div>
  );
};

export default CustomInput;
