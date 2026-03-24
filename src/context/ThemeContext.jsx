import { createContext, useContext } from "react";
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.warn(
      "useTheme must be used within a ThemeProvider. Using default values.",
    );
    return {
      isDark: true,
      theme: "vs-dark",
      themeColors: {},
      fontSize: 14,
      fontFamily: "'JetBrains Mono', monospace",
    };
  }
  return context;
};

export default ThemeContext;
