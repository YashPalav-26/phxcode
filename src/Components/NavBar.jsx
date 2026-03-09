import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({
  language,
  handleLanguageChange,
  theme,
  setTheme,
  saveCode,
  isDarkMode,
  toggleTheme,
}) => {
  const languages = [
    { label: "JavaScript", value: "javascript" },
    { label: "Java", value: "java" },
    { label: "C", value: "c" },
    { label: "C++", value: "cpp" },
    { label: "Python", value: "python" },
    { label: "C#", value: "csharp" },
    { label: "PHP", value: "php" },
  ];

  const themes = [
    { label: "VS Dark", value: "vs-dark" },
    { label: "Light", value: "light" },
    { label: "HC Black", value: "hc-black" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
      <h1
        className={`text-2xl font-bold ${
          isDarkMode ? "text-[#fff]" : "text-gray-900"
        }`}
      >
        ApexScript
      </h1>
      <div className="flex space-x-4">
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <select
          value={language}
          onChange={handleLanguageChange}
          className={`p-2 rounded transition duration-200 focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "bg-gray-800 text-white shadow-gray-300 shadow-sm hover:bg-gray-700 focus:ring-gray-300"
              : "bg-[#ffb25b] text-black shadow-gray-800 shadow-md hover:bg-[#ffc67c] focus:ring-[#ffc67c]"
          }`}
        >
          {languages.map((lang) => (
            <option
              key={lang.value}
              value={lang.value}
              className={`cursor-pointer hover:bg-gray-700 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {lang.label}
            </option>
          ))}
        </select>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className={`p-2 rounded transition duration-200 focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "bg-gray-800 text-white shadow-gray-300 shadow-sm hover:bg-gray-700 focus:ring-gray-300"
              : "bg-[#ffb25b] text-black shadow-gray-800 shadow-md hover:bg-[#ffc67c] focus:ring-[#ffc67c]"
          }`}
        >
          {themes.map((themeObj) => (
            <option
              key={themeObj.value}
              value={themeObj.value}
              className={`cursor-pointer hover:bg-gray-700 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {themeObj.label}
            </option>
          ))}
        </select>
        <button
          className={`rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "bg-gray-800 text-white shadow-gray-300 shadow-sm hover:bg-gray-700 focus:ring-gray-300"
              : "bg-[#fff] text-black shadow-gray-800 shadow-md hover:bg-gray-200 focus:ring-gray-300"
          }`}
          onClick={() => alert("New File")}
        >
          New File
        </button>
        <button
          className={`rounded-md px-4 py-2 transition duration-200 focus:outline-none focus:ring-2 ${
            isDarkMode
              ? "bg-gray-800 text-white shadow-gray-300 shadow-sm hover:bg-gray-700 focus:ring-gray-300"
              : "bg-[#fff] text-black shadow-gray-800 shadow-md hover:bg-gray-200 focus:ring-gray-300"
          }`}
          onClick={saveCode}
        >
          Save Code
        </button>
      </div>
    </div>
  );
};

export default Navbar;
