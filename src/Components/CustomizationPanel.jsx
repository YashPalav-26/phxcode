import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import { fontFamilies, fontSizeConfig } from "../constants/themeConfig";
import ThemeSelector from "./ThemeSelector";

const CustomizationPanel = ({
  theme,
  fontSize,
  fontFamily,
  onThemeChange,
  onFontSizeChange,
  onFontFamilyChange,
  isDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentFontFamily = fontFamilies.find((f) => f.id === fontFamily);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-1.5 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 ${
          isDarkMode
            ? "hover:bg-[#2d2d2d] focus:ring-[#007acc]"
            : "hover:bg-gray-100 focus:ring-[#0066b8]"
        }`}
        aria-label="Customization settings"
        title="Editor customization"
      >
        <FontAwesomeIcon icon={faSliders} className="w-4 h-4" />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute top-full right-0 mt-2 rounded-lg shadow-2xl border z-50 min-w-80 ${
              isDarkMode
                ? "bg-[#252526] border-[#3c3c3c]"
                : "bg-white border-[#e0e0e0]"
            }`}
          >
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                isDarkMode
                  ? "border-[#3c3c3c] bg-[#1e1e1e]"
                  : "border-[#e0e0e0] bg-gray-50"
              }`}
            >
              <span
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Customization
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1 rounded transition-colors ${
                  isDarkMode
                    ? "hover:bg-[#3c3c3c] text-[#858585]"
                    : "hover:bg-gray-200 text-gray-600"
                }`}
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
              </button>
            </div>
            <div className="px-4 py-4 space-y-5">
              <div>
                <label
                  className={`block text-xs font-semibold mb-2 ${
                    isDarkMode ? "text-[#cccccc]" : "text-gray-700"
                  }`}
                >
                  Theme
                </label>
                <ThemeSelector
                  currentTheme={theme}
                  onThemeChange={onThemeChange}
                  isDarkMode={isDarkMode}
                />
              </div>
              <div>
                <label
                  htmlFor="font-family"
                  className={`block text-xs font-semibold mb-2 ${
                    isDarkMode ? "text-[#cccccc]" : "text-gray-700"
                  }`}
                >
                  Font Family
                </label>
                <select
                  id="font-family"
                  value={fontFamily}
                  onChange={(e) => onFontFamilyChange(e.target.value)}
                  className={`w-full px-3 py-2 rounded text-sm border transition-colors focus:outline-none focus:ring-2 ${
                    isDarkMode
                      ? "bg-[#3c3c3c] border-[#3c3c3c] text-white focus:ring-[#007acc]"
                      : "bg-white border-[#e0e0e0] text-gray-900 focus:ring-[#0066b8]"
                  }`}
                >
                  {fontFamilies.map((font) => (
                    <option key={font.id} value={font.id}>
                      {font.label}
                    </option>
                  ))}
                </select>
                <div
                  className={`mt-2 text-xs p-2 rounded ${
                    isDarkMode
                      ? "bg-[#1e1e1e] text-[#858585]"
                      : "bg-gray-100 text-gray-600"
                  }`}
                  style={{
                    fontFamily: currentFontFamily?.value || "monospace",
                  }}
                >
                  Sample code text
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="font-size"
                    className={`text-xs font-semibold ${
                      isDarkMode ? "text-[#cccccc]" : "text-gray-700"
                    }`}
                  >
                    Font Size
                  </label>
                  <span
                    className={`text-sm font-mono ${
                      isDarkMode ? "text-[#007acc]" : "text-[#0066b8]"
                    }`}
                  >
                    {fontSize}px
                  </span>
                </div>
                <input
                  id="font-size"
                  type="range"
                  min={fontSizeConfig.min}
                  max={fontSizeConfig.max}
                  value={fontSize}
                  onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
                  className={`w-full h-2 rounded-lg appearance-none bg-gradient-to-r ${
                    isDarkMode
                      ? "from-[#3c3c3c] to-[#3c3c3c]"
                      : "from-gray-300 to-gray-300"
                  }`}
                  style={{
                    background: isDarkMode
                      ? `linear-gradient(to right, #007acc 0%, #007acc ${
                          ((fontSize - fontSizeConfig.min) /
                            (fontSizeConfig.max - fontSizeConfig.min)) *
                          100
                        }%, #3c3c3c ${
                          ((fontSize - fontSizeConfig.min) /
                            (fontSizeConfig.max - fontSizeConfig.min)) *
                          100
                        }%, #3c3c3c 100%)`
                      : `linear-gradient(to right, #0066b8 0%, #0066b8 ${
                          ((fontSize - fontSizeConfig.min) /
                            (fontSizeConfig.max - fontSizeConfig.min)) *
                          100
                        }%, #e0e0e0 ${
                          ((fontSize - fontSizeConfig.min) /
                            (fontSizeConfig.max - fontSizeConfig.min)) *
                          100
                        }%, #e0e0e0 100%)`,
                  }}
                />
                <div className="flex justify-between mt-1">
                  <span
                    className={`text-xs ${
                      isDarkMode ? "text-[#858585]" : "text-gray-400"
                    }`}
                  >
                    {fontSizeConfig.min}px
                  </span>
                  <span
                    className={`text-xs ${
                      isDarkMode ? "text-[#858585]" : "text-gray-400"
                    }`}
                  >
                    {fontSizeConfig.max}px
                  </span>
                </div>
              </div>
              <div
                className={`pt-3 border-t text-xs ${
                  isDarkMode
                    ? "border-[#3c3c3c] text-[#858585]"
                    : "border-[#e0e0e0] text-gray-500"
                }`}
              >
                Your preferences are automatically saved and restored on reload.
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CustomizationPanel;
