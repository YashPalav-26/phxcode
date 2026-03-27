import { useState, useCallback, useEffect } from "react";
// Triggering Vite HMR
import {
  fontSizeConfig,
  validateFontSize,
  getFontFamilyById,
} from "../constants/themeConfig";
import { loadTheme } from "../themes/themeLoader";

/**
 * Custom hook for managing theme and editor customization
 * Handles persistence to localStorage and state management
 */
const useThemeCustomization = () => {
  const [theme, setThemeState] = useState("vs-dark");
  const [themeData, setThemeData] = useState(null);
  const [isLoadingTheme, setIsLoadingTheme] = useState(true);

  const [fontSize, setFontSizeState] = useState(() => {
    try {
      const savedSize = localStorage.getItem("phxcode_fontSize");
      return savedSize ? validateFontSize(savedSize) : fontSizeConfig.default;
    } catch (error) {
      console.warn("Failed to load fontSize from localStorage:", error);
      return fontSizeConfig.default;
    }
  });

  const [fontFamily, setFontFamilyState] = useState(() => {
    try {
      const savedFont = localStorage.getItem("phxcode_fontFamily");
      return savedFont || "jetbrains-mono";
    } catch (error) {
      console.warn("Failed to load fontFamily from localStorage:", error);
      return "jetbrains-mono";
    }
  });

  const setTheme = useCallback(async (themeId) => {
    setIsLoadingTheme(true);
    try {
      const loadedData = await loadTheme(themeId);
      setThemeState(loadedData.id);
      setThemeData(loadedData);
      localStorage.setItem("phxcode_theme", loadedData.id);
    } catch (error) {
      console.warn(`Failed to load theme ${themeId}:`, error);
      // Fallback to built-in vs-dark
      if (themeId !== "vs-dark") {
        const fallbackData = await loadTheme("vs-dark");
        setThemeState("vs-dark");
        setThemeData(fallbackData);
        localStorage.setItem("phxcode_theme", "vs-dark");
      }
    } finally {
      setIsLoadingTheme(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    const initTheme = async () => {
      let savedTheme = "vs-dark";
      try {
        savedTheme = localStorage.getItem("phxcode_theme") || "vs-dark";
      } catch (e) {
        console.warn("Could not read theme from localStorage", e);
      }
      await setTheme(savedTheme);
    };
    initTheme();
  }, [setTheme]);

  // Set font size and persist to localStorage
  const setFontSize = useCallback((size) => {
    try {
      const validSize = validateFontSize(size);
      setFontSizeState(validSize);
      localStorage.setItem("phxcode_fontSize", validSize.toString());
    } catch (error) {
      console.warn("Failed to save fontSize to localStorage:", error);
    }
  }, []);

  // Set font family and persist to localStorage
  const setFontFamily = useCallback((fontId) => {
    try {
      const validFont = getFontFamilyById(fontId);
      setFontFamilyState(validFont.id);
      localStorage.setItem("phxcode_fontFamily", validFont.id);
    } catch (error) {
      console.warn("Failed to save fontFamily to localStorage:", error);
    }
  }, []);

  // Get current font family object
  const currentFontFamily = getFontFamilyById(fontFamily);

  return {
    // Theme
    theme,
    setTheme,
    isLoadingTheme,
    currentTheme: themeData,
    isDark: themeData ? themeData.isDark : true,
    themeColors: themeData ? themeData.uiColors : {},

    // Font customization
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
    currentFontFamily,

    // Config info
    fontSizeConfig,
  };
};

export default useThemeCustomization;
